# DECISIONS.md — why things are the way they are

Entries are numbered and never rewritten; a later entry supersedes an earlier
one explicitly. Each phase ends with a proof-obligation audit (D-A entries).

## Phase 0 — Baseline

### D1. Network policy, and how the sources were obtained

Observed on 2026-09-18 and re-checked on 2026-09-19 from the remote session:

| Host / method | Needed for | Reachable |
|---|---|---|
| `git clone` from `github.com` | all repositories | yes |
| `github.com/.../releases/download/...` | Coq 8.11.2, dune | yes |
| `raw.githubusercontent.com` | opam metadata | yes |
| `github.com/.../archive/*.tar.gz`, `codeload.github.com` | most opam source tarballs | **no** (403) |
| `framagit.org` | SQLFormalSemantics, SQLToNRACert | **no** |
| `opam.ocaml.org`, `coq.inria.fr/opam/released` | opam repositories and source cache | **no** |
| `download.camlcity.org`, `gitlab.inria.fr`, `erratique.ch` | ocamlfind, menhir, misc OCaml deps | **no** |
| `archive.ubuntu.com` | apt | yes |
| `registry.npmjs.org` | Node deps | yes |
| Docker daemon | `src/dbcert.docker` route | **no** (client present, no daemon) |

Resolution: the user published GitHub mirrors of the two FormalData
repositories, `mandel/sqlformalsemantics` and `mandel/sqltonracert`, which
this session reads instead of framagit. Branch `with-floats` @ ed00030 and
branch `main` @ 7d64ca2 respectively, matching the `pin-depends` in
`coq-dbcert.opam`.

opam itself remains unusable here, because package *sources* live on the
blocked hosts. The baseline is therefore built from source without opam
(D5). This is a property of this environment only; the README's opam
instructions are untouched and remain the supported route.

### D2. Number representation in the extracted compiler

From `src/extraction/SQLJSExtraction.v` and
`qcert/compiler/core/Extraction/ExtrOcamlFloatNatIntZInt.v`, and confirmed
by reading the generated `src/extraction/sql_query_to_js.mli` after a real
build:

* `nat` → OCaml `int` (`ExtrOcamlNatInt`), `Z` → OCaml `int`
  (`ExtrOcamlZInt`), Coq primitive floats → OCaml `float`, strings →
  `char list` (`ExtrOcamlString`). The generated interface has
  `Value_Z of int option` and `Dnat of int`. **Zarith is not used
  anywhere on the path**, and the extracted module references neither
  `Unix` nor `Str` (0 occurrences in 80 905 lines / 5.1 MB of generated
  OCaml).
* Consequence for js_of_ocaml: OCaml `int` is 32-bit there, against 63-bit
  in the native build, while the JavaScript runtime stores integers as
  `{ $nat: <JS number> }`, i.e. exact to 53 bits. So three different
  integer widths meet on this path. Phase 2's byte-identical check must
  include queries with large integer literals, and the library should
  reject literals outside the representable range rather than wrap
  silently. This goes in DATA-MODEL.md.
* Floats are native IEEE doubles on both sides. The float axioms are
  discussed in D-A0.
* Good news for Phase 2: with no Zarith, no `Unix` and no `Str` in the
  extracted code, the js_of_ocaml build does not need Zarith stubs. The
  remaining unknowns are the hand-written glue (`sql_compiler.ml`, the
  SQLToNRACert front end) and `qcert_lib`, which does pull `Unix` in
  `compiler/lib/java_service.ml`.

### D3. The SQL front end is packaged as a Coq plugin, but is separable

`src/Makefile` links `plugins_datacert.cmxa` together with Coq's own OCaml
libraries (`kernel`, `vernac`, `stm`, `toplevel`, ...). Reading the sources
(D1 made them available) shows this is a packaging artefact, not a real
dependency.

`sqltonracert/src/plugins/plugins_datacert.mlpack` packs thirteen modules.
Grepping every one of them for Coq's OCaml API gives:

| Module | Coq API uses |
|---|---|
| `Utils`, `Basics`, `Sqlcontext`, `Coq_sql_algebra` | 0 |
| `Sql_ast`, `Sql_parser`, `Sql_lexer`, `ToCoq`, `Sqlparser` | 0 |
| `Sqlparser_coq` | 0 directly, but calls `Utils_coq` |
| `Utils_coq` | 9 (`Coqlib.lib_ref`, `UnivGen`, term construction) |
| `G_sql_parser` | 3 (`DECLARE PLUGIN`, `VERNAC COMMAND EXTEND`, `Stdarg`) |

The modules dbcert consumes — `Sql_ast`, `Sql_parser`, `Sql_lexer`, `ToCoq`
and their dependencies `Utils`, `Basics`, `Sqlcontext`, `Coq_sql_algebra` —
form a closed subgraph that never touches Coq. `Utils_coq`, `Sqlparser_coq`
and `G_sql_parser` exist only to serve the `Parse_sql` vernacular command,
which is used by `plugins/sql_parser/Test.v` and by nothing dbcert does.

Consequence for Phase 1 and 2: the upstream change is to build the
Coq-free subgraph as an ordinary findlib library (say `sqlcoq_frontend`)
and keep the plugin as a thin layer on top that depends on it. That is a
`dune`/`_CoqProject` change plus a `.mlpack` split, with no change to any
`.v` file and no proof touched. dbcert then links the plain library, drops
`CCMX`/`COQLIB` from `src/Makefile`, and becomes buildable with
js_of_ocaml. This is the first upstream patch to propose (to SQLToNRACert),
and it is small enough to be reviewed on its own.

Fallback if upstream prefers not to split: dbcert can carry its own
`dune` stanza that compiles the same eight source files from the
SQLToNRACert checkout. That duplicates build rules, not code, and was not
chosen because it makes dbcert depend on upstream's file layout.

### D4. Toolchain: Option A chosen

Two options were put to the user at the end of the first Phase 0 pass:

**Option A** — keep the legacy toolchain (OCaml 4.09.1, Coq 8.11.2,
coq-jsast 2.0.0, coq-qcert v2.1.1, SQLFS `with-floats`, SQLToNRACert
`main`) for extraction, and add js_of_ocaml on the OCaml side first.
js_of_ocaml 6.0.x still accepts OCaml 4.08–4.14.2, and Q*cert v2.1.1
already builds `bin/qcertJS.js` with js_of_ocaml
(`compiler/libJS/dune`), so the extracted code is known to compile to
JavaScript. No proof is touched. `wasm_of_ocaml` needs OCaml ≥ 4.14 and is
therefore out of reach under this option; Phase 2 will evaluate it on
paper only.

**Option B** — port everything to current Rocq first. JsAst is already
there (v4.0.0, `rocq-jsast`), Q*cert stopped at Coq 8.16 in 2023 (153 k
lines, 0 `Admitted`; estimate 2–4 person-weeks), and SQLFormalSemantics
(43 k lines) and SQLToNRACert (22 k lines) are both pinned to 8.11.2, the
latter carrying a Coq plugin written against Coq 8.11's OCaml API, the
most version-fragile kind of artefact. Three upstream ports would have to
land before any end-to-end test.

**Decision (user, 2026-09-19): Option A.**

Noted for later: `mandel/sqlformalsemantics` carries a `parser+8.15`
branch, so some newer-Coq work on SQLFS exists upstream. That is
information for a future Option B effort, not for this one.

### D5. The Phase 0 baseline is built from source, without opam

opam cannot fetch package sources in this environment (D1), so the
toolchain was built by hand into the prefix `/opt/ocaml409`, laid out like
an opam switch (findlib `destdir` = `/opt/ocaml409/lib`, Coq at
`/opt/ocaml409/lib/coq`) so that dbcert's `-I +../coq-qcert` and
`-I +../coq/...` paths in `src/Makefile` resolve unchanged.

| Component | Version | Source |
|---|---|---|
| OCaml | 4.09.1 | `git clone github.com/ocaml/ocaml` tag `4.09.1` |
| findlib | 1.8.1 | `git clone github.com/ocaml/ocamlfind` tag `findlib-1.8.1` |
| num | 1.4 | `git clone github.com/ocaml/num` tag `v1.4` |
| dune | 2.9.1 | GitHub release asset |
| menhir | 20200211 | `git clone github.com/LexiFi/menhir` tag `20200211` (mirror; `gitlab.inria.fr` is blocked) |
| re | 1.9.0 | `git clone github.com/ocaml/ocaml-re` |
| stringext | master @ 356bab1 | `git clone github.com/rgrinberg/stringext` |
| base64 | v3.5.1 | `git clone github.com/mirage/ocaml-base64` |
| calendar | 3.0.0 | `git clone github.com/ocaml-community/calendar` tag `v3.0.0` |
| sexplib0 | v0.13.0 | `git clone github.com/janestreet/sexplib0` |
| uri | v3.1.0 | `git clone github.com/mirage/ocaml-uri` |
| Coq | 8.11.2 | GitHub release asset `coq-8.11.2.tar.gz` |

Three deviations, all recorded because they affect reproducibility:

1. **OCaml 4.09.1 needs a patch on this host.** glibc 2.39 makes
   `SIGSTKSZ` non-constant, so `runtime/signals_nat.c` fails to compile
   (`variably modified 'sig_alt_stack' at file scope`). Applied upstream
   commit `8eed2e441222588dc385a98ae8bd6f5820eb0223`, "Dynamically allocate
   the alternate signal stack", which is exactly the `alt-signal-stack.patch`
   that the `ocaml-base-compiler.4.09.1` opam package applies for this
   reason. Four runtime files, 72 insertions. This is the standard build,
   not a modification of the compiler's behaviour.
2. **uri 3.1.0 rather than whatever opam resolved in 2021.** `coq-qcert`
   constrains `uri` without a version. uri 3.x keeps `Uri.pct_encode` and
   `Uri.pct_decode`, the only two functions Q*cert uses
   (`compiler/extraction/uri_component.ml`), and unlike uri 2.2.1 it does
   not need `ppx_sexp_conv` at build time, nor `angstrom` as uri 4.x does.
   Same for `base64` 3.5.1, chosen over 3.4.0 because 3.4.0 needs
   `dune-configurator`, which needs `csexp`.
3. **`stringext` built from master with its `examples/` directory
   removed**, because that directory carries `(lang dune 3.14)` which
   dune 2.9.1 refuses. The library itself is untouched. The last tagged
   release in that repository, v1.4.3, predates its move to dune.

None of this touches a `.v` file, a proof, or any upstream repository's
checked-out content beyond the OCaml compiler patch above.

One extra findlib package was needed that no opam file mentions: `seq`,
the compatibility shim that `re`'s META requires even though OCaml 4.09
has `Seq` in its standard library. Built from `github.com/c-cube/seq`.

The recipe, for the record:

```sh
# OCaml 4.09.1 into an opam-shaped prefix
git clone --depth 1 --branch 4.09.1 https://github.com/ocaml/ocaml
cd ocaml && ./configure --prefix=/opt/ocaml409
git fetch --depth 2 origin 8eed2e441222588dc385a98ae8bd6f5820eb0223
git show 8eed2e44 -- runtime/fail_nat.c runtime/signals_nat.c \
    runtime/startup_nat.c runtime/sys.c | git apply
make -j4 world.opt && make install

# findlib, with destdir laid out like an opam switch
./configure -sitelib /opt/ocaml409/lib   # then fix etc/findlib.conf:
#   destdir="/opt/ocaml409/lib"  path="/opt/ocaml409/lib"

# then, in order: num, dune, re, seq, stringext, base64, calendar,
# sexplib0, uri, menhir  (dune build -p <pkg> && dune install --prefix)

# Coq 8.11.2 from its GitHub release asset
./configure -prefix /opt/ocaml409 -libdir /opt/ocaml409/lib/coq \
    -native-compiler no && make -j4 world && make install

# the Coq libraries, in dependency order
jsast@v2.0.0:  make && make install
qcert@v2.1.1:  make configure && make -j4 coq-qcert \
               && dune build -p coq-qcert && make install-coqdev \
               && dune install --prefix /opt/ocaml409 coq-qcert
sqlformalsemantics@with-floats: make -j4 && make install
sqltonracert@main:              make -j4 && make install
dbcert:                         make
```

### D6. What the golden files record, and why not the linked output

`src/tests/run-golden.sh` compiles every query in the corpus and runs the
ones that have a database, then either checks the result against
`src/tests/golden/` or refreshes it with `-u`. Per query file it stores:

* `<case>.out` — the compiler's stdout, with the output directory
  stripped so the files are path-independent.
* `<case>.js`, `<case>_1.js`, ... — the generated JavaScript **without**
  the linked runtime. The runtime is Q*cert's, it is versioned separately,
  and linking it would make every golden file churn whenever Q*cert's
  runtime changes. What Phases 1 and 2 must reproduce byte for byte is the
  compiler's own output, which is exactly this.
* `<case>.run` — one line per query with the JSON that `dbcertRun.js`
  prints, produced from a separate `-link` pass.

Baseline results on the pinned toolchain (D5):

| Corpus | Queries | Compiled | Notes |
|---|---|---|---|
| `tests/simple/org1..5.sql` | 5 | 5 | results match the README example |
| `tests/null/queries_null.sql` | 4 | 4 | all four match the "Got" lines recorded in the file |
| `tests/nested/queries_nested.sql` | 11 | 11 | all eleven match the "Got" lines recorded in the file |
| `tests/unit.sql` | 58 | 54 | the 4 failures are exactly the ones the file documents as unsupported |

The four `unit.sql` failures are three `Not_translatable_sqlalg` (GROUP BY
on an expression that is not an attribute) and one
`Not_well_formed_sqlalg` (`IN` with the same alias on both sides). They are
expected, and the golden files pin that behaviour so a regression would
show up.

`src/tests/.gitignore` ignored `*.js`, which would have excluded the
generated golden JavaScript, so it gained a `!golden/*.js` exception.

### D-A0. Proof-obligation audit at the end of Phase 0

Counted with `grep -rn` over every `.v` file in each repository.

| Repository | `Admitted` | `admit.` | Axioms |
|---|---|---|---|
| dbcert `src/theories`, `src/extraction` | 0 | 0 | 1: `FAAC` in `src/theories/ToEJson.v` |
| SQLFormalSemantics `with-floats` (42 files, 43 469 lines) | 0 | 0 | 0 |
| SQLToNRACert `main` (25 files, 22 317 lines) | 0 | 0 | 3, all in `src/jsql/aux/AxiomFloat.v` |
| Q*cert v2.1.1 `compiler/core` (449 files, 153 205 lines) | 0 | 0 | optimizer-logger axioms in `Compiler/Component/LoggerComponent.v`, realised at extraction |
| Q*cert `master` | 0 | 0 | same |
| JsAst v2.0.0 | — | — | definitions only, no proofs |

The float axioms deserve to be named precisely, because they are the
substantive assumption in the trusted computing base:

* `float_max_assoc`, `float_max_comm`, `float_of_int_pos`
  (`AxiomFloat.v`). The authors state these are **true** but unprovable in
  Coq because `float_max` and `float_of_int` are only realised at
  extraction.
* Record `float_add_assoc_comm` (`AxiomFloat.v`), assuming float addition
  is associative and commutative. The authors state plainly that this is
  **false** for IEEE arithmetic. dbcert instantiates it as
  `Axiom FAAC` in `src/theories/ToEJson.v`. Its use is confined to the
  correctness of the `sum` and `avg` aggregates on floats; the compiler's
  own correctness and every other aggregate, function and predicate do not
  depend on it.

This is what the README's trusted-computing-base section must say
(Phase 6). No proof was modified in Phase 0.
