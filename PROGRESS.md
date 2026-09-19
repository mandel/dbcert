# PROGRESS.md

## Phase 0 — Baseline: done

| Step | Status | Notes |
|---|---|---|
| 0.1 Clone dbcert, sqltonracert, querycert, SQLFormalSemantics, JsAst | **done** | Q*cert `v2.1.1` and `master`, JsAst all tags, and the two FormalData repositories through the user's GitHub mirrors `mandel/sqlformalsemantics` (`with-floats` @ ed00030) and `mandel/sqltonracert` (`main` @ 7d64ca2), because framagit is unreachable here (DECISIONS D1). |
| 0.1 Read every README, opam file, Makefile, dune file | **done** | all five repositories. |
| 0.1 ARCHITECTURE.md | **done** | every entry point now read from source; nothing inferred. |
| 0.2 Build with the README pins | **done** | OCaml 4.09.1, Coq 8.11.2, JsAst 2.0.0, Q*cert v2.1.1, SQLFS `with-floats`, SQLToNRACert `main`, all built from source without opam (DECISIONS D5). |
| 0.2 `dbcert src/tests/simple/org1.sql` and the Node run | **done** | `dbcert -link tests/simple/org1.sql` then `node ./dbcertRun.js tests/simple/org1.js tests/simple/db1.json` reproduces the README output. |
| 0.2 Golden files | **done** | `src/tests/golden/` (90 files) plus the harness `src/tests/run-golden.sh`; `./tests/run-golden.sh` passes on all 8 cases (DECISIONS D6). |
| 0.3 Rocq port assessment | **done** | DECISIONS D4. |
| 0.3 Options A/B and recommendation | **done** | Option A recommended and chosen by the user. |
| Proof audit | **done** | DECISIONS D-A0: 0 `Admitted` and 0 `admit.` in all five repositories; 3 axioms in SQLToNRACert's `AxiomFloat.v` plus dbcert's `FAAC`. |

### Baseline numbers

| Measurement | Value |
|---|---|
| Extracted OCaml (`src/extraction/sql_query_to_js.ml`) | 80 905 lines, 5.1 MB |
| `dbcert` native binary | 24 MB |
| `tests/unit.sql` | 54 of 58 queries compile; the 4 failures are the documented unsupported ones |
| `tests/null`, `tests/nested` | 4 of 4 and 11 of 11 compile, results match the expectations recorded in those files |
| Coq `Admitted` / `admit.` across all five repositories | 0 / 0 |

## Phase 1 — Compiler as a pure OCaml function: done

| Step | Status | Notes |
|---|---|---|
| Expose `compile_sql : string -> (string, error) result`, no filesystem/Unix/process dependencies | **done** | `src/extraction/dbcert_lib.mli`, with `compile_all` beside it for multi-query input (DECISIONS D7). Grepping the library sources for I/O returns nothing (D8). |
| Make the CLI a thin wrapper | **done** | `src/extraction/dbcert.ml` is now argument parsing, reading the input and writing the outputs. Its output is byte-identical: the Phase 0 golden files pass unchanged. |
| Confirm the extracted number representation | **done** | `nat` and `Z` extract to native `int`, floats to native `float`, no Zarith (DECISIONS D2), and there is now a test pinning the literal range and the refusal beyond it (D9). |
| OCaml unit tests against the golden files | **done** | `src/tests/test_compile_sql.ml`, 85 checks, 0 failures. `make test` runs it and then the golden harness. |

### Phase 1 numbers

| Measurement | Value |
|---|---|
| Unit tests | 85 checks, 0 failures |
| Golden-file cases after the refactoring | 8 of 8 pass, byte-identical |
| Files changed | 4 OCaml files, the Makefile, `.gitignore` |
| `.v` files touched | 0 |
| `Admitted` / `admit.` introduced | 0 / 0 |

## Phase 2 — js_of_ocaml build: next

The blocker is known and was found in Phase 0: `src/Makefile` still links
Coq's OCaml libraries because the SQL front end is packed into the
SQLToNRACert Coq plugin, even though the eight modules dbcert uses touch
no Coq API (DECISIONS D3). Splitting `plugins_datacert.mlpack` into a
plain findlib library plus a thin plugin is the first upstream patch to
propose, and it edits no `.v` file.

Two things Phase 1 established that make Phase 2 easier than feared: the
extracted module references neither `Unix` nor `Str` and does not use
Zarith, so no Zarith stubs are needed; and the library API is already
string in, string out, so `Js.export` is a few lines.

One thing Phase 2 must re-run: the integer-literal test. Under
js_of_ocaml OCaml's `int` is 2^30-1 rather than 2^62-1, so the accepted
literal range shrinks and the byte-identical check has to be read with
that in mind.

## Phases 3–6: not started

## Open items

* None blocking. The environment cannot run opam (DECISIONS D1), so Phase 5's
  GitHub Actions work will have to be written against opam without being
  exercised end to end here; the from-source recipe in DECISIONS D5 is the
  fallback that is known to work.
