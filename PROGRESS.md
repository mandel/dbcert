# PROGRESS.md

## Phase 0 — Baseline

| Step | Status | Notes |
|---|---|---|
| 0.1 Clone dbcert, sqltonracert, querycert, SQLFormalSemantics, JsAst | **partial** | dbcert, qcert (`v2.1.1` worktree + `master`), jsast (all tags) cloned under `/home/user/upstream`. `sqltonracert` and `sqlformalsemantics`: **blocked**, `framagit.org` is rejected by the session network policy (DECISIONS D1). |
| 0.1 Read every README, opam file, Makefile, dune file | **partial** | Done for dbcert, qcert, jsast, coq/opam metadata. Not possible for the two framagit repos. |
| 0.1 ARCHITECTURE.md | **done** | Items that depend on the unreachable repos are marked *(inferred)*. |
| 0.2 opam switch with README pins | **blocked** | opam 2.1.5 installed from apt. Package sources are unreachable: `opam.ocaml.org`, `codeload.github.com` (OCaml 4.09.1 tarball), `download.camlcity.org`, `gitlab.inria.fr`. Not attempted further (D1). |
| 0.2 `dbcert src/tests/simple/org1.sql` + Node run, golden files | **blocked** | Needs the two framagit repos (they are build dependencies of `ToEJson.v`). |
| 0.3 Rocq port assessment | **done for qcert and jsast**, not measurable for SQLFS/SQLToNRACert | DECISIONS D4. |
| 0.3 Options A/B + recommendation | **done** | DECISIONS D4: recommend A. Waiting for user decision. |
| Proof audit | **done** | DECISIONS D-A0: 0 Admitted/admit in dbcert and qcert; 1 Axiom (FAAC) in dbcert. |

## Blocked items and what unblocks them

1. Network policy: allow `framagit.org`, `opam.ocaml.org`, `coq.inria.fr`,
   `codeload.github.com`, `download.camlcity.org`, `gitlab.inria.fr`,
   `erratique.ch` — or provide GitHub mirrors of the two framagit repos.
2. User decision on Option A vs B (DECISIONS D4).

## Phases 1–6

Not started.
