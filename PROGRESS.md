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

## Phase 1 — Compiler as a pure OCaml function: not started

Ready to start. The prerequisite discovered in Phase 0 is DECISIONS D3: the
SQL front end inside SQLToNRACert is Coq-free OCaml that merely happens to
be packed into a Coq plugin, so the first upstream patch is to split
`plugins_datacert.mlpack` into a plain library plus a thin plugin. That
removes the Coq-library link line from `src/Makefile` and is what makes
Phase 2 possible at all.

## Phases 2–6: not started

## Open items

* None blocking. The environment cannot run opam (DECISIONS D1), so Phase 5's
  GitHub Actions work will have to be written against opam without being
  exercised end to end here; the from-source recipe in DECISIONS D5 is the
  fallback that is known to work.
