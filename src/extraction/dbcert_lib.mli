(************************************************************************************)
(**                                                                                 *)
(**                             The DBCert Library                                  *)
(**                                                                                 *)
(**            LRI, CNRS & Université Paris-Sud, Université Paris-Saclay            *)
(**                                                                                 *)
(**                        Copyright 2016-2019 : FormalData                         *)
(**                                                                                 *)
(************************************************************************************)

(** DBCert as a library: SQL text in, JavaScript source out.

    The functions in this module perform no I/O.  They do not open files,
    do not call [Unix], do not spawn processes and do not write to stdout,
    so they can be linked into a [js_of_ocaml] build.  The command line
    interface in [dbcert.ml] is a thin wrapper over them.

    The verified part of the pipeline is
    [Sql_query_to_js.sql_query_to_js], extracted from
    [theories/ToEJson.v].  Everything this module adds around it — the
    parser, the typing pass [ToCoq], the marshalling in [sql_compiler.ml]
    and the error reporting below — is unverified glue. *)

(** {1 Errors} *)

(** Why a piece of SQL did not compile.  The last six constructors mirror
    the [result] type of [ToEJson.v] one for one. *)
type error =
  | Lexing_error of string
      (** the lexer rejected the input *)
  | Syntax_error of int
      (** the parser rejected the input at this byte offset *)
  | Unsupported_statement of string
      (** a statement that is neither CREATE TABLE nor a query *)
  | Unsupported_query of string
      (** the typing pass rejected the query, with its explanation *)
  | No_query
      (** {!compile_sql} was given SQL text containing no query *)
  | Multiple_queries of int
      (** {!compile_sql} was given SQL text containing several queries *)
  | Not_weak_well_formed_sqlcoq
  | Not_translatable_sqlalg of string
  | Not_well_formed_sqlalg of string
  | Not_more_well_formed_sqlalg of string
  | Compilation_imp_js_failed
  | Compilation_nra_js_failed

(** A one-line explanation, in the wording the command line interface has
    always used. *)
val string_of_error : error -> string

(** {1 Compiling} *)

(** The intermediate forms a query goes through, kept only when
    [compile_all] is called with [~debug:true]. *)
type debug =
  { sqlalg : string            (** the SQLAlg query *)
  ; nraenv : string            (** its translation to NRAe *)
  ; nraenv_optimized : string  (** the optimised NRAe query *)
  }

(** What compiling one query produced. *)
type query_result =
  { sqlcoq : string                        (** the SQLCoq query *)
  ; debug : debug option
  ; javascript : (string, error) result    (** the generated JavaScript *)
  }

(** [compile_all sql] compiles every query in [sql].  CREATE TABLE
    statements declare the schema the queries that follow are typed
    against, exactly as in a file passed to the command line interface.

    The outer result is an error only when the input could not be read at
    all, that is on a lexing or syntax error, since neither leaves a
    position to carry on from.  A query that parses but does not compile
    appears in the list with its own error.

    [optim] runs Q*cert's optimisers between NRAe and Imp.  It defaults to
    [false], which is the setting the soundness theorem of [ToEJson.v]
    covers. *)
val compile_all :
  ?optim:bool -> ?debug:bool -> string -> (query_result list, error) result

(** [compile_sql sql] is [compile_all] for SQL text holding exactly one
    query, returning the JavaScript for it.  Preceding CREATE TABLE
    statements are allowed and expected: they carry the schema.  Text with
    no query gives {!No_query}, text with several gives
    {!Multiple_queries}. *)
val compile_sql : ?optim:bool -> string -> (string, error) result

(** {1 Assembling a runnable module} *)

(** The Q*cert JavaScript runtime, which the generated code calls into.
    This is the string the [-link] option of the command line interface
    prepends. *)
val runtime : string

(** The line that turns a compiled query into a CommonJS module, as
    [src/dbcertRun.js] expects it. *)
val module_exports : string
