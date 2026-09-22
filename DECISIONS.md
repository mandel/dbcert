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

## Phase 1 — The compiler as a pure OCaml function

### D7. Shape of the library API

`src/extraction/dbcert_lib.mli` exposes the compiler as three things:

```ocaml
val compile_sql  : ?optim:bool -> string -> (string, error) result
val compile_all  : ?optim:bool -> ?debug:bool -> string
                   -> (query_result list, error) result
val runtime      : string
val module_exports : string
```

Decisions behind that shape:

* **SQL text in, JavaScript text out, and nothing else.** No schema
  argument. A query is typed against the CREATE TABLE statements that
  precede it in the same string, exactly as in a file handed to the
  command line interface. The JavaScript library of Phase 4 already holds
  a table registry, so it can render the declarations it needs and
  prepend them. Keeping the OCaml boundary to strings is also what makes
  `Js.export` trivial in Phase 2.
* **`compile_all` as well as `compile_sql`**, because a file with several
  queries is the case the command line interface has always handled, and
  because it is the only way to keep that interface a thin wrapper
  without duplicating the statement loop.
* **The outer `result` fails only on lexing and syntax errors.** Those
  leave no position to carry on from. A query that parses but does not
  compile appears in the list with its own error, so one bad query does
  not hide the rest. This is a small improvement on the old behaviour,
  where a `Failure` from the typing pass escaped the loop and killed the
  process.
* **The error type mirrors `ToEJson.v`'s `result` constructor for
  constructor** (`Not_weak_well_formed_sqlcoq`, `Not_translatable_sqlalg`,
  and so on), with parsing and arity errors added around it. A reviewer
  can line the two types up side by side.
* **`optim` defaults to `false`**, which is the setting
  `sql_query_to_imp_no_opt_is_sound` covers. The command line interface
  keeps its `-optim` flag, so nothing changes for existing users, but a
  caller of the library gets the verified path unless it asks otherwise.

### D8. What had to change to remove the I/O

* The pretty-printers in `src/extraction/sql_compiler.ml` wrote to an
  `out_channel` through `Printf.fprintf`. They now write to a `Buffer.t`
  through `Printf.bprintf`, with `string_of_query` and `string_of_nra` on
  top. Mechanical, 167 call sites, no change in what they print.
* `ToCoq.tables` and `ToCoq.indices` are global hash tables in the front
  end. `compile_all` resets them on entry, so a compilation depends only
  on its argument. There is a test for this: compiling A, then B, then A
  again must give the same answer both times for A. Without the reset the
  second A sees B's schema.
* `src/extraction/dbcert.ml` keeps `Arg.parse`, reading the input file and
  writing the outputs, and does nothing else. Grepping the two library
  sources for `open_in`, `open_out`, `Sys.`, `Unix.`, `Printf.printf`,
  `print_string`, `stdout`, `stderr`, `Filename.` and `Arg.` returns
  nothing.

The command line interface's output is unchanged: the golden files from
Phase 0 pass byte for byte after the refactoring, which is what they were
written for.

Still to clear before Phase 2, and not part of this phase: the link line
in `src/Makefile` still names Coq's OCaml libraries, because the front end
is packed into the Coq plugin (D3). The extracted compiler itself needs
none of them.

### D9. The unit tests

`src/tests/test_compile_sql.ml`, built by `make test_compile_sql` and run
together with the golden-file harness by `make test`. 85 checks:

* every query of the Phase 0 corpus compiled through `compile_all` and
  compared byte for byte with the golden file the command line interface
  produced, so the two cannot drift apart;
* the four queries `tests/unit.sql` documents as unsupported, each
  checked to fail with the error it is supposed to fail with, by index;
* `compile_sql`'s arity rules, and that it reports a syntax error rather
  than raising;
* repeatability across calls, which is the regression test for the global
  schema described in D8;
* integer literals at and beyond `max_int`. The upper bound follows the
  host, 2^62-1 natively and 2^30-1 under js_of_ocaml, so Phase 2 must run
  this again. What the test pins is that a literal too large is
  **refused**, not silently wrapped: the front end's `int_of_string`
  raises, and the error surfaces as a normal compilation error.

The old `make test` target, which compiled one query and ran it under
Node, is subsumed by `./tests/run-golden.sh`.

### D-A1. Proof-obligation audit at the end of Phase 1

Unchanged from D-A0. Phase 1 touched four files, all of them unverified
OCaml glue (`sql_compiler.ml`, `dbcert.ml`, the new `dbcert_lib.ml{,i}`)
plus the Makefile and a test. No `.v` file was opened, no proof was
modified, and no `Admitted` or `admit` was introduced anywhere:

| Repository | `Admitted` | `admit.` |
|---|---|---|
| dbcert | 0 | 0 |
| SQLFormalSemantics `with-floats` | 0 | 0 |
| SQLToNRACert `main` | 0 | 0 |
| Q*cert v2.1.1 | 0 | 0 |

The axioms are the same four described in D-A0.

## Phase 1.5 — Reversal: port to current Rocq first

### D10. Option B chosen after all, superseding D4

The user changed the decision on 2026-09-21: port the chain to current
Rocq first, so that the library can be built with modern tooling. This
supersedes D4. Phases 0 and 1 keep their value: the golden files, the
`compile_sql` API and the unit tests are all expressed against behaviour,
not against a Coq version, so they become the regression suite that the
port has to keep green.

Before planning the port I measured where each repository actually
stands, rather than relying on the estimate in D4. Two findings changed
the picture.

**SQLFormalSemantics is further along than `with-floats` suggests.** The
mirror carries a `parser+8.15` branch, dated 2024-12-11, whose Makefile
and README target **Coq 8.15.2**. Its opam file still says `8.11.2`,
which is why it did not show up as a port in the Phase 0 survey. It also
drops the `coq-qcert` dependency and moves the SQL parser into
SQLFormalSemantics, with `utils_coq.ml` and `basics_coq.ml` gone from the
plugin — which is the direction D3 argued for, already taken upstream.

**But that branch has no floats.** `Values.v` on `parser+8.15` contains
no float constructor at all, against 50 occurrences on `with-floats`.
The 8.15 work upstream sits on the no-floats line, matching
SQLToNRACert's own `no-floats` branch. So the newer Coq version and the
float support are, today, on different branches in both repositories.

The landscape, measured:

| Repository | Newest branch | Coq/Rocq version | Floats |
|---|---|---|---|
| JsAst | v4.0.0 (2026-02-27) | Rocq ≥ 9.0 | yes |
| Q*cert | `master` (2023-07-08) | 8.15–8.16 | yes |
| SQLFormalSemantics | `parser+8.15` (2024-12-11) | 8.15.2 | **no** |
| SQLFormalSemantics | `with-floats` (2023-10-16) | 8.11.2 | yes |
| SQLToNRACert | `main` (2023-10) | 8.11.2 | yes |
| SQLToNRACert | `no-floats` | 8.11.2 | no |
| dbcert | `main` | 8.11.2 | yes |

JsAst needs no work. Everything else has a gap, and the two FormalData
repositories have a branch-merge problem on top of a version gap.

### D11. Toolchain for the port

Installed from Ubuntu packages, which cover the whole modern stack and
saved a from-source round like D5:

| Component | Version |
|---|---|
| OCaml | 4.14.1 |
| dune | 3.14.0 |
| findlib | 1.9.6 |
| zarith | 1.13 |
| menhir | 20231231 |
| js_of_ocaml | 5.6.0 |

Rocq 9.0.0 is built from its GitHub release tarball into `/opt/rocq90`.
Its own requirements are OCaml ≥ 4.09 tested up to 4.14.1, dune ≥ 3.8,
zarith ≥ 1.11 and findlib ≥ 1.8.1, all satisfied. Note the tarball
unpacks to `coq-9.0.0/` and the package names are `rocq-runtime`,
`coq-core`, `rocq-core` and `coq`; `make dunestrap` has to run before
`dune build`.

The Phase 0 toolchain in `/opt/ocaml409` is left in place, so the
baseline and its golden files stay reproducible while the port proceeds.

### D12. Fallback if the port stalls

Recorded so it is not rediscovered under pressure. Extraction produces
plain OCaml, and the extracted module needs neither Zarith nor `Unix` nor
`Str` (D2). If one repository in the chain proves unportable in
reasonable time, the compiler can still be extracted by the old Coq and
the resulting `.ml` compiled and bundled by the modern OCaml and
js_of_ocaml. That keeps the library deliverable alive at the cost of
keeping the legacy toolchain in the build. It is not the plan, only the
escape hatch.

### D13. First measurement of the Q*cert port, and the proof-script policy

Rocq 9.0.0 is built and working: JsAst v4.0.0, which upstream already
ported, compiles and installs against it unchanged. That validates the
toolchain end to end before any porting work.

Q*cert `master` then went from **0 to 313 of 449 files** compiling under
Rocq 9.0.0. The patch and its rationale are in `upstream/`. Three kinds of
change were needed, in increasing order of how much judgement they take:

1. Imports of stdlib modules Rocq 9 removed (`Min`, `Max`, `NPeano`,
   `Zdigits`). Dead in all but one place; 32 import lines deleted and one
   lemma renamed to `Nat.max_idempotent`. No judgement at all.
2. `:>` to `::` in class fields, 36 occurrences in 14 files. This is the
   Coq 8.17 change of meaning: `:>` now declares a coercion where it used
   to declare an instance. Getting this wrong is what made
   `Utils/Lattice.v` fail with undefined evars in setoid rewriting, which
   looked like a deep problem and was a one-character migration.
3. **Proof scripts.** Two lemmas in `Utils/StringAdd.v` had bullets for
   goals that Rocq 9 now closes earlier, because `simpl; trivial` is
   stronger than it was. The redundant bullets are deleted. Both lemmas
   keep their exact statements and still end in `Qed`.

Five files still fail, listed in `upstream/README.md`, and they block the
remaining 136. Four are the same family as the `StringAdd.v` bullets and
one is a notation precedence error.

**The policy, answered.** The user settled it on 2026-09-22: proof
scripts may be changed, but no lemma, definition, theorem "or anything
like that" may be. That is the reading recorded below, and it is now
enforced mechanically rather than promised (D14).

Every proof script touched will be listed individually, per repository,
in the patch rationale under `upstream/`, so that the set stays auditable
and small.

### D14. The statement guard

A promise not to change any statement is worth little at the scale of a
port, so `upstream/check-statements.py` checks it. It reads the upstream
tree and the ported tree, strips every proof body, and diffs what is left:
every `Lemma`, `Theorem`, `Definition`, `Fixpoint`, `Inductive`, `Class`,
`Record`, `Instance`, `Notation`, `Axiom` and `Parameter`, plus the
comments.

Differences land in four buckets. Three are things a version port is
allowed to produce, and each is proved to be only that by normalising and
re-comparing rather than by being waved through:

* an import of a module the new standard library dropped;
* `:>` rewritten to `::` in a class field — checked by normalising both
  spellings to one token, so an edit to a field's name or type cannot hide
  in this bucket;
* whitespace around a notation token that Rocq 9 will not lex when it
  touches its operands — checked by normalising that token's spacing, and
  the list of such tokens is explicit rather than "any whitespace".

The fourth bucket is everything else, and it must be zero. The script
exits non-zero if it is not. Against Q*cert it currently reports 33
import-only, 14 class-field, 2 respacing, and **0 statement** differences.

This is what makes the user's rule checkable instead of aspirational: any
future port step that edits a statement, by accident or by shortcut, fails
the guard.

### D15. Q*cert port: 341 of 449, and the shape of what is left

After the fixes in `upstream/README.md`, 341 of Q*cert's 449 files compile
under Rocq 9.0.0. Four proof scripts have been touched, all of the same
kind: a tactic now closes more goals than it used to, so a bullet or a
`[t1|t2]` dispatch is left with nothing to do, and the dead line is
removed.

Progress is not monotonic in the error count. Each fix unblocks the files
that depended on it, and those reveal their own breakages, so the list of
failures turns over. It went 14 files → 2 → 1 → 5 → 5 while the compiled
count went 0 → 25 → 40 → 313 → 341.

One practical note that cost time and is worth recording: `all: idtac "X"`
is a bad way to count goals, because it prints once when there are none.
`Show.` is the reliable probe, since it says `No more goals.` or `N goals`
outright.

Two of the five remaining failures are "found no subterm matching", where
a `rewrite` no longer matches because the target term has a different
shape. Those need the goal read, not a line deleted, and they are the
first ones where the answer is not obvious from the error alone.

### D16. The Rocq MCP server suggested by the user

`github.com/LLM4Rocq/rocq-mcp-evolve` is an MCP tool layer for driving
Rocq interactively, with a persistent in-process session and rollback
instead of recompiling a file per attempt. It would genuinely suit the
work that is left, which is reading goal states and trying tactics.

It cannot be used from inside this session, for two reasons that are worth
recording so the option is not re-examined from scratch:

1. It installs through `opam pin` and wants `rocq-runtime` 9.1 or later.
   opam cannot fetch sources in this environment (D1), and the Rocq built
   here is 9.0.0, so it would need a 9.1.1 build first.
2. It is consumed as an MCP server, which the client configures; an agent
   cannot add one to its own tool set mid-session.

Wiring it up is the user's call, on the client side: one `mcpServers`
entry, `{ "rocq": { "command": "rocq-mcp-evolve" } }`, against a switch
with Rocq 9.1.1. Until then the loop here is `coqc` on one file plus the
`Show.` probe above, which is slower per attempt but has taken the port
from 0 to 341 files.

