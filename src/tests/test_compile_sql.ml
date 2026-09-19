(************************************************************************************)
(**                                                                                 *)
(**                             The DBCert Library                                  *)
(**                                                                                 *)
(**            LRI, CNRS & Université Paris-Sud, Université Paris-Saclay            *)
(**                                                                                 *)
(**                        Copyright 2016-2019 : FormalData                         *)
(**                                                                                 *)
(************************************************************************************)

(** Unit tests for {!Dbcert_lib}.

    Every query of the test corpus is compiled through [compile_all] and
    the generated JavaScript is compared with the golden file the command
    line interface produced for it, so that the library and the command
    line interface are held to the same output.

    Run from the src/ directory:  ./test_compile_sql  *)

let read_file file =
  let chan = open_in_bin file in
  let len = in_channel_length chan in
  let content = really_input_string chan len in
  close_in chan;
  content

(* The command line interface names the file of query [index] after the
   input, with the index appended from the second query on. *)
let golden_name case index =
  let postfix = if index > 0 then "_" ^ (string_of_int index) else "" in
  "tests/golden/" ^ case ^ postfix ^ ".js"

let failures = ref 0
let checks = ref 0

let fail fmt = Printf.ksprintf (fun s -> incr failures; print_string ("FAIL " ^ s ^ "\n")) fmt
let ok fmt = Printf.ksprintf (fun s -> incr checks; print_string ("ok   " ^ s ^ "\n")) fmt

(* A query that is expected not to compile, and the error expected for it.
   These four are the ones tests/unit.sql documents as unsupported. *)
let expected_errors =
  [ "unit", 51, "not translatable"   (* GROUP BY on an expression *)
  ; "unit", 52, "not translatable"   (* GROUP BY on an expression *)
  ; "unit", 53, "not translatable"   (* GROUP BY on an expression *)
  ; "unit", 55, "ill formed (case 1)" (* IN with the same alias on both sides *)
  ]

let describe_error = function
  | Dbcert_lib.Not_translatable_sqlalg _ -> "not translatable"
  | Dbcert_lib.Not_well_formed_sqlalg _ -> "ill formed (case 1)"
  | Dbcert_lib.Not_more_well_formed_sqlalg _ -> "ill formed (case 2)"
  | Dbcert_lib.Not_weak_well_formed_sqlcoq -> "weak ill formed"
  | e -> Dbcert_lib.string_of_error e

let check_case (case, sql_file) =
  let sql = read_file sql_file in
  match Dbcert_lib.compile_all sql with
  | Error e ->
      fail "%s: %s" case (Dbcert_lib.string_of_error e)
  | Ok queries ->
      List.iteri
        (fun index q ->
          match q.Dbcert_lib.javascript with
          | Ok js ->
              let file = golden_name case index in
              let expected = read_file file in
              let actual = js ^ Dbcert_lib.module_exports in
              if actual = expected then ok "%s query %d" case index
              else
                fail "%s query %d: %d bytes, golden %s has %d"
                  case index (String.length actual) file
                  (String.length expected)
          | Error e ->
              let got = describe_error e in
              let expected =
                try
                  let (_, _, msg) =
                    List.find (fun (c, i, _) -> c = case && i = index)
                      expected_errors
                  in Some msg
                with Not_found -> None
              in
              begin match expected with
              | Some msg when msg = got -> ok "%s query %d rejected (%s)" case index got
              | Some msg ->
                  fail "%s query %d: expected %s, got %s" case index msg got
              | None -> fail "%s query %d unexpectedly rejected: %s" case index got
              end)
        queries

(* compile_sql accepts exactly one query, with its CREATE TABLEs. *)
let check_compile_sql () =
  let one = "create table employees (name text, age int);\n\
             select name from employees;" in
  begin match Dbcert_lib.compile_sql one with
  | Ok js ->
      let expected = read_file (golden_name "simple_org1" 0) in
      if js ^ Dbcert_lib.module_exports = expected
      then ok "compile_sql on a single query"
      else fail "compile_sql output differs from simple_org1"
  | Error e -> fail "compile_sql: %s" (Dbcert_lib.string_of_error e)
  end;
  begin match Dbcert_lib.compile_sql "create table t (a int);" with
  | Error Dbcert_lib.No_query -> ok "compile_sql rejects text with no query"
  | Ok _ -> fail "compile_sql accepted text with no query"
  | Error e -> fail "compile_sql: expected No_query, got %s"
                 (Dbcert_lib.string_of_error e)
  end;
  let two = "create table t (a int);\nselect a from t;\nselect a from t;" in
  begin match Dbcert_lib.compile_sql two with
  | Error (Dbcert_lib.Multiple_queries 2) -> ok "compile_sql rejects two queries"
  | Ok _ -> fail "compile_sql accepted two queries"
  | Error e -> fail "compile_sql: expected Multiple_queries, got %s"
                 (Dbcert_lib.string_of_error e)
  end;
  begin match Dbcert_lib.compile_sql "select from where" with
  | Error (Dbcert_lib.Syntax_error _) -> ok "compile_sql reports a syntax error"
  | Ok _ -> fail "compile_sql accepted malformed SQL"
  | Error e -> fail "compile_sql: expected Syntax_error, got %s"
                 (Dbcert_lib.string_of_error e)
  end

(* Compiling twice in a row must give the same answer: the schema the
   front end keeps in a global table has to be reset between calls. *)
let check_repeatable () =
  let a = "create table t (a int, b int);\nselect a from t;" in
  let b = "create table t (a int);\nselect a from t;" in
  match Dbcert_lib.compile_sql a, Dbcert_lib.compile_sql b,
        Dbcert_lib.compile_sql a with
  | Ok x, Ok _, Ok y when x = y -> ok "compile_sql is repeatable"
  | Ok _, Ok _, Ok _ -> fail "compile_sql depends on previous calls"
  | _ -> fail "compile_sql failed while checking repeatability"

(* [nat] and [Z] extract to OCaml's native [int] (see DECISIONS.md D2),
   and the lexer turns an integer literal into one with [int_of_string].
   The range therefore follows the host: 2^62-1 natively, 2^30-1 under
   js_of_ocaml, so Phase 2 has to run this check again on that build.
   What must hold on every build is that a literal too large to
   represent is refused rather than silently wrapped. *)
let check_integer_literals () =
  let query literal =
    Dbcert_lib.compile_sql
      ("create table t (a int);\nselect a from t where a = " ^ literal ^ ";")
  in
  begin match query (string_of_int max_int) with
  | Ok _ -> ok "an integer literal at max_int compiles"
  | Error e -> fail "max_int literal: %s" (Dbcert_lib.string_of_error e)
  end;
  (* One decimal digit more than max_int overflows on any host. *)
  begin match query (string_of_int max_int ^ "0") with
  | Error _ -> ok "an integer literal beyond max_int is refused"
  | Ok _ -> fail "an integer literal beyond max_int was silently accepted"
  end

let cases =
  [ "simple_org1", "tests/simple/org1.sql"
  ; "simple_org2", "tests/simple/org2.sql"
  ; "simple_org3", "tests/simple/org3.sql"
  ; "simple_org4", "tests/simple/org4.sql"
  ; "simple_org5", "tests/simple/org5.sql"
  ; "null_queries_null", "tests/null/queries_null.sql"
  ; "nested_queries_nested", "tests/nested/queries_nested.sql"
  ; "unit", "tests/unit.sql"
  ]

let () =
  List.iter check_case cases;
  check_compile_sql ();
  check_repeatable ();
  check_integer_literals ();
  Printf.printf "\n%d checks, %d failures\n" !checks !failures;
  exit (if !failures = 0 then 0 else 1)
