# DBCert architecture map (Phase 0 baseline)

This document maps the SQL-to-JavaScript pipeline that `dbcert` drives, with
file paths and entry-point names, and separates extracted (Rocq/Coq-generated)
OCaml from hand-written OCaml and JavaScript.

Status of the sources this map was built from (see DECISIONS.md, D1):

| Repository | Pin used by `coq-dbcert.opam` | Read for this map |
|---|---|---|
| dbcert (this repo) | `main` @ 74641df | yes, in full |
| Q*cert `coq-qcert` | `https://github.com/querycert/qcert` tag `v2.1.1` | yes (clone at `v2.1.1`, plus `master`) |
| JsAst `coq-jsast` | opam `coq-jsast.2.0.0` (`https://github.com/querycert/jsast`) | yes (clone, tags `v2.0.0`..`v4.0.0`) |
| SQLFormalSemantics `coq-sqlformalsemantics` | `https://framagit.org/formaldata/sqlformalsemantics` branch `with-floats` | **no**, host blocked by the session network policy |
| SQLToNRACert `coq-sqltonracert` | `https://framagit.org/formaldata/sqltonracert` branch `main` | **no**, host blocked by the session network policy |

Everything below that concerns the two framagit repositories is inferred from
the module names dbcert imports, from the dbcert build rules, and from the
OOPSLA 2022 paper. Those items are marked *(inferred)* and must be checked
against the sources once they are reachable.

## 1. Pipeline

```
SQL text
  │  (a) lexer/parser                 OCaml, unverified   [SQLToNRACert plugin]
  ▼
Sql_ast.SQL_Create / SQL_Query
  │  (b) name resolution + typing     OCaml, unverified   [SQLToNRACert plugin: ToCoq]
  ▼
ToCoq.sql_query  (typed "SQLCoq" AST, OCaml side)
  │  (c) marshal to extracted types   OCaml, unverified   [dbcert: src/extraction/sql_compiler.ml]
  ▼
Sql_query_to_js.sql_query0  (extracted SQLCoq AST)
  │  (d) ToEJson.sql_query_to_js      extracted, VERIFIED up to ImpEJson  [dbcert: src/theories/ToEJson.v]
  │      ├─ weak_well_formed_q                       [SQLFS]        (inferred)
  │      ├─ sql_query_to_alg   (SQLCoq → SQLAlg)     [SQLFS SqlAlgebra]
  │      ├─ query_optim        (SQLAlg → SQLAlg)     [SQLFS/SQLToNRACert]
  │      ├─ is_translatable_q, well_formed_q, more_well_formed_q
  │      ├─ query_to_nraenv_top (SQLAlg → NRAᵉ)      [SQLToNRACert QueryToNRAEnv]
  │      ├─ Q*cert driver  NRAᵉ → NNRC → NNRS → NNRSimp → ImpData → ImpEJson
  │      │                                            [qcert: compiler/core/Driver/CompCustom.v,
  │      │                                             compile_nraenv_to_imp_ejson_verified]
  │      └─ imp2JS: ImpEJson → JsAst → JavaScript     [qcert, NOT covered by the theorem]
  ▼
JavaScript source text  (function `query(constants)`)
  │  (e) prepend runtime, append `module.exports`  OCaml, unverified [dbcert: src/extraction/dbcert.ml]
  ▼
<query>.js  (=  qcert-runtime*.js  ++  generated query  ++  exports)
  │  (f) node src/dbcertRun.js <query>.js <db>.json        JS, unverified
  │      inputDB / queryExec / outputTable                 [dbcert: src/runtime/queryExec.js]
  ▼
JSON rows
```

### (a) Lexing and parsing *(inferred)*

* Entry points used by dbcert: `Sql_parser.line Sql_lexer.token` on a
  `Lexing.lexbuf` (`src/extraction/dbcert.ml:43`), exceptions
  `Sql_lexer.Error`, `Sql_lexer.Eof`, `Sql_parser.Error`.
* AST: `Sql_ast.SQL_Create (table, (cols, _))` and `Sql_ast.SQL_Query select`
  (`src/extraction/dbcert.ml:45-46`).
* Where it lives: these modules are not in dbcert nor in qcert. `src/Makefile`
  links `plugins_datacert.cmxa` from
  `$(coqlib)/user-contrib/SQLToNRACert/plugins` with `-open Plugins_datacert`
  (`src/Makefile:35`), and it also links *the OCaml libraries of Coq
  itself* (`clib`, `kernel`, `library`, `vernac`, `stm`, `toplevel`,
  `printing`, `tactics`, ... via `CCMX`/`COQLIB`, `src/Makefile:31,36`) with
  `-rectypes`. So the SQL front end is packaged as a Coq plugin inside
  SQLToNRACert and depends on Coq's own OCaml API. This is the single most
  important fact for the js_of_ocaml work: a browser bundle cannot link Coq's
  `vernac`/`stm`/`toplevel` libraries, so the parser and `ToCoq` must be
  decoupled from the plugin (Phase 1).

### (b) Name resolution and typing *(inferred)*

* `ToCoq.tables : (string, cols) Hashtbl.t` collects `CREATE TABLE` schemas
  (`src/extraction/dbcert.ml:45`).
* `ToCoq.init_context () = (schema, _, _)` and `ToCoq.select ctxt qselect`
  produce a `ToCoq.sql_query` whose leaves are typed
  (`Basics.typed_attribute_name = (relname option * name) * coltype`,
  `Basics.coltype = TInt | TString | TBool | TDouble`, `Basics.value =
  VNull | VString | VInt | VBool | VFloat`), see `src/extraction/sql_compiler.ml`.
* `ToCoq.string_of_sql_query` is the pretty-printer used for the
  `SQLCoq query:` line printed by the CLI.

### (c) Marshalling into the extracted types (dbcert, hand-written)

`src/extraction/sql_compiler.ml`:

* `sql_query_to_extracted : ToCoq.sql_query -> relname sql_query0` and
  `schema_to_extracted : schema -> relname -> attribute Fset.set` are the two
  values handed to the verified function.
* Attribute names become `Attr_Z | Attr_string | Attr_bool | Attr_float`
  (typed names; the extraction of `TnullTD.attribute_to_string` strips the
  type again, `src/extraction/SQLJSExtraction.v:47-54`).
* `NULL` is encoded as `NullValues.Value_bool None` regardless of type
  (`src/extraction/sql_compiler.ml:78`).
* Comparison predicates are normalised to `<`, `<=`, `=`, `<>`: `>` and `>=`
  are rewritten to `<`/`<=` with the argument list reversed
  (`src/extraction/sql_compiler.ml:55-70`). `Sql_Quant` only supports `=`, `<`, `<=`
  (`src/extraction/sql_compiler.ml:144-148`).
* Several `Obj.magic` casts bridge OCaml types and extracted module types.

### (d) The verified core (extracted)

`src/theories/ToEJson.v` (compiled with `-R . DBCert`):

* `sql_query_to_imp (opt:bool) qsql : result` — the checked pipeline up to
  `Q_imp_ejson`. Result constructors: `Success js | SuccessUpToImp q |
  Not_weak_well_formed_sqlcoq | Not_translatable_sqlalg q |
  Not_well_formed_sqlalg q | Not_more_well_formed_sqlalg q |
  Compilation_nra_js_failed`.
* `sql_query_to_js (opt:bool) qsql` — `sql_query_to_imp` followed by
  `imp2JS` (`compile_from_source_target ... L_imp_ejson L_javascript`).
* `sql_query_to_nra` — debug entry returning `(SQLAlg, NRAᵉ, optimised NRAᵉ)`.
* **Theorem** `sql_query_to_imp_no_opt_is_sound`: for `opt = false`, the
  ImpEJson program evaluates (via `imp_ejson_eval_top`) to a bag that is a
  permutation of `eval_sql_query` (SQLFS semantics, three-valued logic
  `Bool3.unknown3`, `contains_nulls`), for well-sorted, well-typed and
  complete instances.
* Not covered by the theorem: (1) `opt = true` (the `nraenv2imp_opt` path
  runs Q*cert's NRAᵉ/NNRC/NNRSimp optimisers through the generic driver),
  (2) `imp2JS` (ImpEJson → JsAst → JavaScript text, Q*cert's unverified
  back end), (3) the JS runtime that implements the ImpEJson operators.
* `Axiom FAAC : AxiomFloat.float_add_assoc_comm` (associativity and
  commutativity of float addition, needed by the `with-floats` branch of
  SQLFS; documented upstream in `sqltonracert/src/jsql/aux/AxiomFloat.v`).

Extraction (`src/extraction/SQLJSExtraction.v`):

* `Extraction "extraction/sql_query_to_js.ml" ToEJson.sql_query_to_js ToEJson.sql_query_to_nra`
  produces `src/extraction/sql_query_to_js.ml{,i}` (git-ignored, generated).
* Number representation: `ExtrOcamlNatInt` and `ExtrOcamlZInt` map `nat` and
  `Z` to OCaml native `int`; Q*cert's `ExtrOcamlFloatNatIntZInt` maps
  `PrimFloat.float` to OCaml `float`. Strings are `char list`
  (`ExtrOcamlString`). **No Zarith.** Consequences are in DECISIONS.md (D2).

Q*cert modules on the verified path (tag `v2.1.1`, `compiler/core/`):

| Stage | File | Entry point |
|---|---|---|
| Driver (verified path) | `Driver/CompCustom.v` | `compile_nraenv_to_imp_ejson_verified` |
| Driver (generic path, optimisers) | `Driver/CompDriver.v` | `compile_from_source_target`, `driver_of_path` |
| Correctness of the driver | `Driver/CompCorrectness.v` | `nraenv_to_imp_ejson_correct`, `compile_with_correct_driver_preserves_eval` |
| NRAᵉ → NNRC | `Translation/Lang/NRAEnvtoNNRC.v` | `nraenv_to_nnrc_top` |
| NNRC → NNRS | `Translation/Lang/NNRCtoNNRS.v` | `nnrc_to_nnrs_top` |
| NNRS → NNRSimp | `Translation/Lang/NNRStoNNRSimp.v` | `nnrs_to_nnrs_imp_top` |
| NNRSimp → ImpData | `Translation/Lang/NNRSimptoImpData.v` | `nnrs_imp_to_imp_data_top` |
| ImpData → ImpEJson | `Translation/Lang/ImpDatatoImpEJson.v` | `imp_data_to_imp_ejson` |
| ImpEJson → JsAst (unverified) | `Translation/Lang/ImpEJsontoJavaScriptAst.v` | `imp_ejson_to_js_ast` |
| JsAst → JS text (unverified) | `Translation/Lang/JavaScriptAsttoJavaScript.v` | `js_ast_to_js_top` |
| JS AST definition | JsAst repo, `coq/JsSyntax.v`, `coq/JsNumber.v` (v2.0.0) | — |
| Enhanced model used by dbcert | `Compiler/Enhanced/EnhancedCompiler.v` | `EnhancedCompiler.QDriver.*` |
| Q*cert extraction (its own OCaml lib) | `compiler/extraction/QcertExtraction.v` → `core.ml` | library `qcert_lib` (`compiler/dune`) |

### (e) CLI driver (dbcert, hand-written)

`src/extraction/dbcert.ml`: argument parsing (`-output`, `-link`, `-optim`,
`-verbose`), loops over statements, prints `SQLCoq query: ...` and the
compilation result, writes `<base>[_<n>].js` with `Util.make_file`
(`qcert/compiler/extraction/util.ml:100`). With `-link` it prepends
`Js_runtime.runtime`, which is `qcert/compiler/lib/js_runtime.ml`, a string
literal generated from `qcert/runtimes/javascript/qcert-runtime-{core,tostring,sql-date,uri}.js`
(25 KB). It always appends `module.exports = { query };`.

Other files in `src/extraction/`: `dbcertJS.ml` and `example.ml` are stale
(they reference a `Compiler` module and an older `sql_query_to_js` signature
and are not in `MLFILES`); they date from the initial import.

### (f) Runtime and runner (dbcert, hand-written JavaScript)

* `src/runtime/queryExec.js`: `inputDB(db)` boxes every table as
  `{ $coll: rows, $length: n }` and every cell as `{ $left: v }` (non-null)
  or `{ $right: null }` (NULL), with column keys prefixed `table.column`.
  `outputTable` unboxes `$left/$right` and renames each output column to the
  text after its last `_`. `queryExec(query, db) = outputTable(query(inputDB(db)))`.
* `src/dbcertRun.js`: Node CLI, `require`s the compiled query and prints
  `JSON.stringify(queryExec(query, db))`.
* Runtime data model (from `qcert-runtime-core.js` at v2.1.1): integers are
  boxed `{ $nat: n }` (JS number), floats are bare JS numbers, strings are JS
  strings, collections `{ $coll, $length }`, sums `{ $left }`/`{ $right }`,
  records are plain objects. Q*cert `master` later switched `$nat` to
  `BigInt` (commit 25b2b61e), which is a runtime data-model change relative
  to the pinned v2.1.1.

Two glue behaviours worth flagging now (to be handled in Phase 3/4, not in
the verified code):

1. `inputRow` uses `row[column] ? {$left} : {$right}`, so `0`, `""` and
   `false` are marshalled as NULL (`src/runtime/queryExec.js:20`).
2. `outputRow` renames `count_b` to `b` (`column.split('_').pop()`,
   `src/runtime/queryExec.js:41`), so user column names containing `_` are mangled.

## 2. Extracted vs hand-written OCaml

| Unit | Origin | Verified? |
|---|---|---|
| `src/extraction/sql_query_to_js.ml{,i}` (generated) | extracted from `ToEJson.v` + SQLFS + SQLToNRACert + Q*cert | proofs cover SQLCoq→ImpEJson (no optimisation) |
| `qcert_lib` (`qcert/_build/.../qcert_lib.cmxa`): `core.ml` | extracted from Q*cert | partially (see qcert's `CompCorrectness.v`) |
| `qcert_lib`: `compiler/lib/*.ml`, `compiler/extraction/{util,logger,sexp,...}.ml`, `js_runtime.ml` | hand-written | no |
| `plugins_datacert.cmxa` (Sql_lexer, Sql_parser, Sql_ast, ToCoq, Basics, Coq_sql_algebra, ...) *(inferred)* | hand-written Coq plugin in SQLToNRACert | no |
| `src/extraction/sql_compiler.ml`, `src/extraction/dbcert.ml` | hand-written (dbcert) | no |
| `src/runtime/queryExec.js`, `src/dbcertRun.js` | hand-written (dbcert) | no |
| `qcert/runtimes/javascript/qcert-runtime-*.js` | hand-written (qcert) | no |

## 3. Build graph (`src/Makefile`)

1. `_CoqProject` = `_CoqProject.base` (`-R . DBCert`, `theories/ToEJson.v`,
   `extraction/SQLJSExtraction.v`), `coq_makefile` → `Makefile.coq`.
2. `make -f Makefile.coq` compiles `ToEJson.v` against installed
   `Qcert`, `SQLFS`, `SQLToNRACert`, `JsAst` and runs the extraction, producing
   `extraction/sql_query_to_js.ml{,i}`.
3. `ocamlfind ocamlopt -rectypes -package calendar,uri,str` compiles
   `sql_query_to_js.ml`, `sql_compiler.ml`, `dbcert.ml` against
   `qcert_lib` (`-I +../coq-qcert -open Qcert_lib`) and `plugins_datacert`
   (`-I +../coq/user-contrib/SQLToNRACert/plugins -open Plugins_datacert`).
4. Link: `qcert_lib.cmxa` + Coq's `threads, dynlink, clib, config, lib,
   gramlib, kernel, library, engine, pretyping, interp, proofs, parsing,
   tactics, toplevel, printing, vernac, stm` + `plugins_datacert.cmxa`
   + `-cclib -lunix` → native executable `dbcert`.
5. `make install` copies `dbcert` next to `ocamlopt` in the opam switch.

Dependencies that matter for a JavaScript build: `str`, `unix` (through Coq
libs and `java_service.ml` in qcert), `calendar`, `uri`, and the whole of
Coq's OCaml libraries through the plugin.

## 4. Test corpus (`src/tests/`)

* `simple/org{1..5}.sql` + `db1.json` / `db1big.json` (DBCert JSON with
  `{$nat: n}` integers); `org{3,4,5}ala.sql` + `db1ala.json` /
  `db1bigala.json` are the same queries written for alasql (`FROM ?`, plain
  JSON) — an existing alasql comparison set.
* `null/queries_null.sql` + `dbnull.json` (4 queries, expected results in
  comments), `nested/queries_nested.sql` + `dbnested.json` (11 queries).
* `unit.sql`: 60 statements exercising the accepted grammar, including
  comments on constructs that are *not* supported (GROUP BY on expressions,
  `IN` with the same alias on both sides).

## 5. Upstream versions observed

| Repo | Pinned | Current upstream |
|---|---|---|
| Q*cert | v2.1.1 (2021-09-10): Coq ≥ 8.11.0 < 8.13, OCaml ≥ 4.09.1, coq-jsast ≥ 2.0.0 | `master` e112de6 (2023-07-08): Coq ≥ 8.15 < 8.17, OCaml < 4.13, coq-jsast ≥ 3.0.0, `wasm` 1.0.1; 0 `Admitted` |
| JsAst | 2.0.0 (2020-07-29): Coq ≥ 8.11.2 | v4.0.0 (2026-02-27): `rocq-core`/`rocq-stdlib` ≥ 9.0, published as `rocq-jsast.4.0.0`; v3.0.0 (2022-05) added a toplevel module and BigInt literals |
| Coq | 8.11.2: OCaml ≥ 4.05 < 4.12 | Rocq 9.x |
| OCaml | 4.09.1 (package now lives in `ocaml/opam-repository-archive`, with `alt-signal-stack.patch` for glibc ≥ 2.34) | 5.x |
| js_of_ocaml | (qcert v2.1.1 builds `bin/qcertJS.js` with it) | 6.0.x accepts OCaml 4.08–4.14.2; `wasm_of_ocaml` 6.0.x needs OCaml ≥ 4.14 |
