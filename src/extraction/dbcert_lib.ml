(************************************************************************************)
(**                                                                                 *)
(**                             The DBCert Library                                  *)
(**                                                                                 *)
(**            LRI, CNRS & Université Paris-Sud, Université Paris-Saclay            *)
(**                                                                                 *)
(**                        Copyright 2016-2019 : FormalData                         *)
(**                                                                                 *)
(************************************************************************************)

(** DBCert as a library.  See dbcert_lib.mli. *)

open Sql_compiler

type error =
  | Lexing_error of string
  | Syntax_error of int
  | Unsupported_statement of string
  | Unsupported_query of string
  | No_query
  | Multiple_queries of int
  | Not_weak_well_formed_sqlcoq
  | Not_translatable_sqlalg of string
  | Not_well_formed_sqlalg of string
  | Not_more_well_formed_sqlalg of string
  | Compilation_imp_js_failed
  | Compilation_nra_js_failed

(* The wording is the one dbcert has always printed, so that switching the
   command line interface over to this module leaves its output
   unchanged. *)
let string_of_error = function
  | Lexing_error msg -> "Lexing error: " ^ msg
  | Syntax_error off ->
      "At offset " ^ (string_of_int off) ^ ": syntax error."
  | Unsupported_statement s -> s
  | Unsupported_query msg -> msg
  | No_query -> "No query to compile"
  | Multiple_queries n ->
      "Expected a single query, found " ^ (string_of_int n)
  | Not_weak_well_formed_sqlcoq ->
      "Compilation failed: SQLCoq query is weak ill formed"
  | Not_translatable_sqlalg q ->
      "Compilation failed: SQLAlg query is not translatable:\n\t" ^ q
  | Not_well_formed_sqlalg q ->
      "Compilation failed: SQLAlg query is ill formed (case 1):\n\t" ^ q
  | Not_more_well_formed_sqlalg q ->
      "Compilation failed: SQLAlg query is ill formed (case 2):\n\t" ^ q
  | Compilation_imp_js_failed -> "Compilation from Imp to JS failed"
  | Compilation_nra_js_failed ->
      "Compilation failed: NRA to JS did not output JS"

type debug =
  { sqlalg : string
  ; nraenv : string
  ; nraenv_optimized : string
  }

type query_result =
  { sqlcoq : string
  ; debug : debug option
  ; javascript : (string, error) result
  }

let runtime = Js_runtime.runtime
let module_exports = "module.exports = { query };\n"

(* [ToCoq.tables] and [ToCoq.indices] are global to the front end, so a
   compilation has to start from a clean schema to be repeatable.  This is
   what makes [compile_all] a function of its argument alone. *)
let reset_schema () =
  Hashtbl.reset ToCoq.tables;
  Hashtbl.reset ToCoq.indices

let compile_query ~optim ~debug qselect =
  let ctxt = ToCoq.init_context () in
  let (schema, _, _) = ctxt in
  let qSQLCoq = ToCoq.select ctxt qselect in
  let sqlcoq = ToCoq.string_of_sql_query schema qSQLCoq in
  let qSQLCoqJS = sql_query_to_extracted qSQLCoq in
  let schemaJS = schema_to_extracted schema in
  let debug =
    if not debug then None
    else
      match Sql_query_to_js.sql_query_to_nra schemaJS qSQLCoqJS with
      | Some ((qalg, qNRA), qNRAopt) ->
          Some { sqlalg = string_of_query qalg
               ; nraenv = string_of_nra qNRA
               ; nraenv_optimized = string_of_nra qNRAopt }
      | None -> None
  in
  let javascript =
    match Sql_query_to_js.sql_query_to_js schemaJS optim qSQLCoqJS with
    | Sql_query_to_js.Success q -> Ok q
    | Sql_query_to_js.SuccessUpToImp _ -> Error Compilation_imp_js_failed
    | Sql_query_to_js.Not_weak_well_formed_sqlcoq ->
        Error Not_weak_well_formed_sqlcoq
    | Sql_query_to_js.Not_translatable_sqlalg qalg ->
        Error (Not_translatable_sqlalg (string_of_query qalg))
    | Sql_query_to_js.Not_well_formed_sqlalg qalg ->
        Error (Not_well_formed_sqlalg (string_of_query qalg))
    | Sql_query_to_js.Not_more_well_formed_sqlalg qalg ->
        Error (Not_more_well_formed_sqlalg (string_of_query qalg))
    | Sql_query_to_js.Compilation_nra_js_failed ->
        Error Compilation_nra_js_failed
  in
  { sqlcoq; debug; javascript }

(* Raised for a statement the compiler has no path for, such as INSERT. *)
exception Unsupported

let compile_all ?(optim = false) ?(debug = false) sql =
  reset_schema ();
  let buf = Lexing.from_string sql in
  let acc = ref [] in
  let rec loop () =
    let line = Sql_parser.line Sql_lexer.token buf in
    begin match line with
    | Sql_ast.SQL_Create (t, (cols, _)) -> Hashtbl.add ToCoq.tables t cols
    | Sql_ast.SQL_Query qselect ->
        acc := (compile_query ~optim ~debug qselect) :: !acc
    | Sql_ast.SQL_Insert _ -> raise Unsupported
    end;
    loop ()
  in
  try loop () with
  | Sql_lexer.Eof -> Ok (List.rev !acc)
  | Unsupported -> Error (Unsupported_statement "Expecting CREATE or SELECT query")
  | Sql_lexer.Error msg -> Error (Lexing_error msg)
  | Sql_parser.Error -> Error (Syntax_error (Lexing.lexeme_start buf))
  | Failure msg -> Error (Unsupported_query msg)

let compile_sql ?(optim = false) sql =
  match compile_all ~optim sql with
  | Error e -> Error e
  | Ok [] -> Error No_query
  | Ok [ q ] -> q.javascript
  | Ok l -> Error (Multiple_queries (List.length l))
