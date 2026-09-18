# DECISIONS.md — why things are the way they are

Entries are numbered and never rewritten; a later entry supersedes an earlier
one explicitly. Each phase ends with a proof-obligation audit (D-A entries).

## Phase 0 — Baseline

### D1. The session environment cannot reach the two framagit repositories

Observed on 2026-09-18 from the remote session (proxy egress policy):

| Host | Needed for | Reachable |
|---|---|---|
| `github.com` (git clone, `releases/download/*`) | dbcert, qcert, jsast, opam repos | yes |
| `raw.githubusercontent.com` | opam metadata | yes |
| `github.com/*/archive/*.tar.gz`, `codeload.github.com` | most opam source tarballs (incl. OCaml 4.09.1) | **no** (403) |
| `framagit.org` | `coq-sqlformalsemantics`, `coq-sqltonracert` (pin-depends in `coq-dbcert.opam`) | **no** (403) |
| `opam.ocaml.org` (repo + source cache) | opam default repository and tarball fallback | **no** |
| `coq.inria.fr/opam/released` | Coq opam repository (git mirror on GitHub is reachable) | **no** |
| `download.camlcity.org` (ocamlfind), `gitlab.inria.fr` (menhir), `erratique.ch` (cmdliner, topkg...) | OCaml deps | **no** |
| `archive.ubuntu.com` | apt (opam 2.1.5, m4, gmp, bubblewrap installed) | yes |
| `registry.npmjs.org` | Node deps | yes |
| `zenodo.org`, `archive.softwareheritage.org`, `web.archive.org` | fallbacks for the artifact | **no** |

No GitHub or gitlab.com mirror of `formaldata/sqlformalsemantics` or
`formaldata/sqltonracert` was found (probed a dozen candidate owners), and
neither is packaged in `coq/opam`. The OOPSLA artifact tarball
(`dbcert-0.1.0.tar.gz`, which bundles `datacert/` and `jsql/`) is not
attached to a GitHub release of `dbcert/dbcert` either.

Consequence: Phase 0 step 2 (reproduce the build, generate golden files)
cannot be completed in this environment. Decision: stop and report rather
than spend more than the agreed hour fighting the network policy. Remedies,
in order of preference:

1. Allow `framagit.org`, `opam.ocaml.org`, `coq.inria.fr`,
   `codeload.github.com`, `download.camlcity.org`, `gitlab.inria.fr`,
   `erratique.ch` in the environment's network policy (or use the
   unrestricted policy). See
   https://code.claude.com/docs/en/claude-code-on-the-web for how policies
   are configured per environment.
2. Or push read-only mirrors of the two framagit repositories (branches
   `with-floats` and `main`) to GitHub; `git clone` of any public GitHub
   repository works here.
3. Or attach the OOPSLA artifact tarball to the session.

### D2. Number representation in the extracted compiler

Confirmed from `src/extraction/SQLJSExtraction.v` and
`qcert/compiler/core/Extraction/ExtrOcamlFloatNatIntZInt.v`:

* `nat` → OCaml `int` (`ExtrOcamlNatInt`), `Z` → OCaml `int`
  (`ExtrOcamlZInt`), Coq primitive floats → OCaml `float`, strings →
  `char list`. Zarith is not used anywhere on the path.
* Under js_of_ocaml, OCaml `int` is 32-bit. Integer *literals* in SQL text
  and constant folding inside the compiler are therefore limited to 32-bit
  in the JS build, whereas the native build has 63-bit ints, and the JS
  runtime represents integers as `{ $nat: <JS number> }` (53-bit exact).
  This has to be made explicit in DATA-MODEL.md (Phase 3): the byte-identical
  output check (Phase 2) must include queries with large literals, and the
  library should reject integer literals outside the range the compiler
  build can represent rather than silently wrap.
* Floats are native IEEE doubles on both sides; the `with-floats` branch of
  SQLFS relies on `Axiom FAAC : float_add_assoc_comm` (associativity and
  commutativity of float addition), declared in `src/theories/ToEJson.v`.
  This axiom is false for IEEE arithmetic in general and is the one
  documented assumption of the float support; it must be listed in the
  trusted computing base section of the README.

### D3. The SQL front end is a Coq plugin

`src/Makefile` links `plugins_datacert.cmxa` together with Coq's own OCaml
libraries (`kernel`, `vernac`, `stm`, `toplevel`, ...). The parser
(`Sql_lexer`, `Sql_parser`), the AST (`Sql_ast`) and the typing pass
(`ToCoq`) are unverified OCaml living in SQLToNRACert. For the library:

* they cannot be shipped in a browser bundle as-is (Coq's OCaml libraries
  depend on `Unix`, `Dynlink`, threads and are tens of MB);
* the boundary of the verified path is the extracted SQLCoq AST
  (`Sql_query_to_js.sql_query0`), so a standalone parser producing that AST
  does not weaken any proof.

Phase 1 will therefore need either (a) an upstream change in SQLToNRACert
that builds the parser and `ToCoq` as a plain OCaml library independent of
Coq's libraries, or (b) a parser in dbcert that targets the extracted AST
directly. Which one is a Phase 1 decision to be made once the plugin's
sources are readable; (a) is preferred by the contribution rules if the
plugin's parser is separable, since it avoids two parsers drifting apart.

### D4. Options for the toolchain (decision pending user input)

**Option A — keep the legacy toolchain for extraction, add js_of_ocaml on the
OCaml side first.**

* Pins: OCaml 4.09.1 (opam package now in `ocaml/opam-repository-archive`,
  with the glibc ≥ 2.34 `alt-signal-stack.patch`), Coq 8.11.2, coq-jsast
  2.0.0, coq-qcert v2.1.1, SQLFS `with-floats`, SQLToNRACert `main`.
* js_of_ocaml 6.0.x accepts OCaml 4.08–4.14.2, so a *current* js_of_ocaml
  can be used with the legacy OCaml. Q*cert v2.1.1 already builds
  `bin/qcertJS.js` with js_of_ocaml (`compiler/libJS/dune`), so the
  extracted code is known to compile to JS.
* `wasm_of_ocaml` needs OCaml ≥ 4.14, i.e. it is **not** available under
  this option; the wasm evaluation of Phase 2 would be a paper study only.
* No proof is touched. All library phases (1–6) only depend on the extracted
  OCaml interface, so a later Rocq port does not change the JS API.
* CI: `coqorg/coq:8.11.2` Docker images still exist and are the proven build
  environment (`src/dbcert.docker`).

**Option B — port everything to current Rocq first.**

* JsAst: done upstream (v4.0.0, `rocq-jsast` ≥ 9.0), but its API moved
  (v3.0.0 added a toplevel module and BigInt literals).
* Q*cert: upstream stopped at Coq 8.16 (2023-07, `master`), 153 k lines of
  Coq at v2.1.1, 0 `Admitted`. The 8.15→8.16 step touched 8 files / ~150
  lines, so each minor step is cheap, but the 8.16→9.x jump adds the
  stdlib split (`From Stdlib Require`, `rocq-stdlib`), `rocq makefile`,
  locality attributes on ~650 `Instance` and ~290 `Hint Rewrite`
  declarations, and OCaml-side updates (master pins OCaml < 4.13; the JS
  runtime moved integers to `BigInt`, a data-model change). Estimate: 2–4
  person-weeks, mostly proof-script maintenance (`autorewrite` and custom
  `Ltac` are used ~170 times each).
* SQLFormalSemantics and SQLToNRACert: not measurable here (sources
  unreachable). Both are pinned to 8.11.2; SQLToNRACert additionally
  contains a Coq *plugin* written against Coq 8.11's OCaml API, which is the
  most version-fragile kind of artifact (the API changes every minor
  release). Expect weeks, and expect to have to coordinate with the
  FormalData maintainers for every step.
* Sequencing: three upstream ports must all land before a single line of
  library code can be tested end to end.

**Recommendation: Option A.** It reaches a working library with zero proof
changes, uses a current js_of_ocaml, keeps every phase reviewable as small
dbcert-only commits, and leaves the Rocq port as an independent, later
upstream effort whose interface (the extracted OCaml) is what the library
already consumes. The parser decoupling (D3) is required under both options
and is the first upstream conversation to open.

### D-A0. Proof-obligation audit at the end of Phase 0

Counted with `grep -rn "Admitted\|^\s*admit\." --include=*.v`:

| Repository | `Admitted` / `admit` | Axioms / Parameters noted |
|---|---|---|
| dbcert `src/theories`, `src/extraction` | 0 / 0 | 1 `Axiom FAAC` (float add assoc/comm) |
| Q*cert v2.1.1 `compiler/core` | 0 / 0 | extraction hooks only: `NativeString` (6 Parameters), `Float` (~10 Parameters realised by OCaml floats), `LoggerComponent` (optimizer-logger Axioms) |
| Q*cert master | 0 / 0 | same |
| JsAst v2.0.0 / v4.0.0 | not counted (no proofs, definitions only) | — |
| SQLFormalSemantics `with-floats` | **not measurable** (D1) | `AxiomFloat` (per dbcert comment) |
| SQLToNRACert `main` | **not measurable** (D1) | — |

No proof was modified in Phase 0.
