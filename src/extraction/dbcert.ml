(************************************************************************************)
(**                                                                                 *)
(**                             The DBCert Library                                  *)
(**                                                                                 *)
(**            LRI, CNRS & Université Paris-Sud, Université Paris-Saclay            *)
(**                                                                                 *)
(**                        Copyright 2016-2019 : FormalData                         *)
(**                                                                                 *)
(************************************************************************************)

(** The dbcert command line interface.

    All of the compiling happens in {!Dbcert_lib}.  What is left here is
    argument parsing, reading the input file and writing the output
    files. *)

let dash72 = "------------------------------------------------------------------------\n"

let output = ref None
let input_files = ref []
let link = ref false
let verbose = ref false
let optim = ref false

let usage =
  "DBCert - SQL to JavaScript compiler\n"^
  "Usage: "^Sys.argv.(0)^" [-output <file>] query"

let args_list =
  Arg.align
    [ ("-output", Arg.String (fun s -> output := Some s),
       "<file> Generated JavaScript File");
      ("-link", Arg.Unit (fun () -> link := true),
       "Link the JavaScript runtime");
      ("-optim", Arg.Unit (fun () -> optim := true),
       "With optimizations");
      ("-verbose", Arg.Unit (fun () -> verbose := true),
       "Verbose output");
    ]

let anon_args input_files f = input_files := f :: !input_files

let read_file file =
  let chan = open_in_bin file in
  let len = in_channel_length chan in
  let content = really_input_string chan len in
  close_in chan;
  content

(* Where the JavaScript for query number [index] of [fileSQL] goes. *)
let output_file fileSQL index =
  let base =
    begin match !output with
    | None -> Filename.remove_extension fileSQL
    | Some file -> Filename.remove_extension file
    end
  in
  let postfix = if index > 0 then "_" ^ (string_of_int index) else "" in
  base ^ postfix ^ ".js"

let emit fileSQL index (q : Dbcert_lib.query_result) =
  Printf.printf "%s" dash72;
  Printf.printf "SQLCoq query: %s\n\n" q.Dbcert_lib.sqlcoq;
  begin match q.Dbcert_lib.debug with
  | Some d ->
      Printf.printf "Compilation to SQLAlg succeeded: %s\n\n" d.Dbcert_lib.sqlalg;
      Printf.printf "Compilation to NRAe succeeded: %s\n\n" d.Dbcert_lib.nraenv;
      Printf.printf "The optimized NRAe query is: %s\n\n"
        d.Dbcert_lib.nraenv_optimized
  | None -> if !verbose then Printf.printf "Compilation to NRAe failed"
  end;
  begin match q.Dbcert_lib.javascript with
  | Ok js ->
      let runtime = if !link then Dbcert_lib.runtime else "" in
      let content = runtime ^ js ^ Dbcert_lib.module_exports in
      if !verbose then Printf.printf "Corresponding JS query: %s\n" content;
      let file = output_file fileSQL index in
      Printf.printf "Corresponding JS query generated in: %s\n" file;
      Util.make_file file content
  | Error e -> Printf.printf "%s\n" (Dbcert_lib.string_of_error e)
  end;
  flush stdout

let _ =
  Arg.parse args_list (anon_args input_files) usage;
  if (List.length !input_files <> 1) then
    Printf.printf "Argument required: file with create and select queries\n"
  else
    let fileSQL = List.nth !input_files 0 in
    match Dbcert_lib.compile_all ~optim:!optim ~debug:!verbose
            (read_file fileSQL) with
    | Ok queries ->
        List.iteri (emit fileSQL) queries;
        Printf.printf "Compilation to JavaScript finished\n"
    | Error e -> failwith (Dbcert_lib.string_of_error e)
