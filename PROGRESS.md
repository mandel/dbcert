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

## Phase 2 — deferred: port to current Rocq first

The user reversed the toolchain decision on 2026-09-21 (DECISIONS D10).
The js_of_ocaml work waits until the chain builds on current Rocq.

## Port to Rocq 9.0 — in progress

| Step | Status | Notes |
|---|---|---|
| Modern toolchain | **done** | OCaml 4.14.1, dune 3.14, findlib 1.9.6, zarith 1.13, menhir 20231231, js_of_ocaml 5.6.0, all from Ubuntu packages (DECISIONS D11). |
| Rocq 9.0.0 | **done** | Built from the GitHub release tarball into `/opt/rocq90`, with the separately packaged standard library from `rocq-prover/stdlib` at V9.0.0. |
| JsAst | **done** | v4.0.0 already targets Rocq 9 upstream. Builds and installs unchanged, which validates the toolchain. |
| Q*cert | **457 of 459 modules** | Patch and rationale in `upstream/`. The two that remain are test files, one blocking the other (DECISIONS D17). |
| SQLFormalSemantics | not started | `parser+8.15` is a Coq 8.15.2 port but has no floats; `with-floats` is at 8.11.2. The two have to be reconciled (DECISIONS D10). |
| SQLToNRACert | not started | Still 8.11.2, and carries a Coq plugin written against Coq 8.11's OCaml API, the most version-fragile piece in the chain. |
| dbcert | not started | Two `.v` files. |

### Measured so far

| Measurement | Value |
|---|---|
| Q*cert modules compiling under Rocq 9.0 | 457 / 459 |
| Files changed by the port patch | 60, with 65 insertions and 107 deletions |
| Theorem statements changed | 0, verified by `upstream/check-statements.py` |
| `Admitted` / `admit.` introduced | 0 / 0 |
| Proof scripts touched | 10, each listed by file, line and reason in `upstream/README.md`, all still `Qed` |
| Remaining failures in Q*cert | 2, both test files (`Tests/LambdaNRATest.v` and the file importing it) |

## Open items

* **Answered:** proof scripts may be changed, statements may not
  (2026-09-22). Enforced by `upstream/check-statements.py`, which reports
  0 statement differences (DECISIONS D14).
* **Waiting on the user:** whether the float support has to survive the
  port. The only newer-Coq work upstream in SQLFormalSemantics is on the
  no-floats line (DECISIONS D10), so keeping floats means porting the
  `with-floats` branch from 8.11 ourselves or re-applying the float delta
  afterwards.
* The environment cannot run opam (DECISIONS D1), so Phase 5's GitHub
  Actions work will have to be written against opam without being
  exercised end to end here.
* **Optional, user's call:** wiring up `rocq-mcp-evolve` as an MCP server
  would speed up the proof work that is left. It needs Rocq 9.1.1 and a
  client-side `mcpServers` entry, neither of which can be done from
  inside a session (DECISIONS D16).
