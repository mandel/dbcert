# Upstream patches

Changes that belong to a repository other than dbcert live here as patches
with their rationale, rather than being applied silently to a checkout.
Each patch is against the upstream commit named in its header.

| Patch | Upstream | Base | State |
|---|---|---|---|
| `qcert-rocq9-wip.patch` | `github.com/querycert/qcert` | `master` @ e112de6 | work in progress, see below |

`check-statements.py` is the guard that keeps these patches honest. It reads
two source trees, strips every proof body, and diffs what is left, which is
the statements: every `Lemma`, `Theorem`, `Definition`, `Fixpoint`,
`Inductive`, `Class`, `Record`, `Instance`, `Notation`, `Axiom` and
`Parameter`. Differences are sorted into four buckets, three of which a
version port is allowed to produce:

* **import-only** — a `Require` line for a module the new standard library
  no longer ships;
* **class-field attribute** — `:>` rewritten to `::`, verified by
  normalising both to the same token and re-comparing, so a change to a
  field's name or type cannot hide here;
* **notation respacing** — whitespace around a notation token that Rocq 9
  only lexes when it stands apart from its operands, again verified by
  normalising that token's spacing and re-comparing;
* **STATEMENT** — anything else. This must stay at zero.

Run it as `python3 upstream/check-statements.py OLD_TREE NEW_TREE`; it exits
non-zero if any statement changed. Current result against Q*cert:

```
files compared:                    467
import-only differences:           33
class-field attribute migrations:  14
notation respacing only:           2
STATEMENT differences:             0
```

## qcert-rocq9-wip.patch — Q*cert from Coq 8.16 to Rocq 9.0

Part of the port described in DECISIONS.md D10. Against `master`, which
targets Coq 8.15–8.16, this patch takes the Coq development from 0 to
**341 of 449 files** compiling under Rocq 9.0.0. It touches 53 files with
53 insertions and 93 deletions, and changes no statement of any theorem,
which `check-statements.py` verifies mechanically.

Four kinds of change, all of them the documented migrations:

1. **Class fields `:>` become `::`** (36 occurrences in 14 files). In Coq
   8.17 the meaning of `:>` inside a `Class` record changed from
   "declare this field as an instance" to "declare it as a coercion", and
   `::` took over the old meaning. Left as `:>`, fields such as
   `meet_morphism :> Proper (eqA ==> eqA ==> eqA) meet` in
   `Utils/Lattice.v` stop being instances, so typeclass resolution can no
   longer find them and every setoid rewrite that needs them fails with
   undefined evars. Every one of the 36 occurrences was checked to be a
   field of a `Class`, not of a plain `Record`.

2. **Imports of stdlib modules Rocq 9 removed.** `Min`, `Max`, `NPeano`
   and `Zdigits` are gone. In this development they were dead imports in
   all but one place, so the imports are simply deleted. The exception is
   `Updates/UPropag.v`, where `Max.max_idempotent` becomes
   `Nat.max_idempotent`, the same lemma under its current name.

3. **Notation respacing.** Rocq 9 lexes `@ₐ` only when it stands apart
   from its operands, so `op@ₐd` becomes `op @ₐ d`, in three files. Two of
   those sites are inside lemma statements, where the change is whitespace
   and the parsed term is identical.

4. **Proof scripts, four so far.** Every one of them is a tactic that now
   closes more goals than it used to, leaving a bullet or a dispatch with
   nothing to work on. The redundant lines are removed. Every lemma keeps
   its statement and still closes with `Qed`.

   | File | Lemma | What changed |
   |---|---|---|
   | `Utils/StringAdd.v` | `substring_split` | two of three bullets dropped; `simpl; trivial` now closes those cases |
   | `Utils/StringAdd.v` | the lemma following it | one of two bullets dropped, same reason |
   | `NNRC/Lang/NNRCStratify.v` | `eval_nnrc_with_substs` helper, line 1286 | trailing `rewrite IHsdefs; trivial` dropped; `match_case`'s own `trivial` now closes the goal |
   | `Translation/Typing/TNRAtocNNRC.v` | line 113 | trailing `eapply Forall_nil` dropped; the preceding `econstructor; eauto` now closes it |

### Not yet done

Five files still fail, and they block the remaining 108. Each fix unblocks
more files, which then reveal their own breakages, so this list turns over
rather than shrinking monotonically.

| File | Line | Error |
|---|---|---|
| `cNRAEnv/Lang/cNRAEnv.v` | 1381 | Tactic failure: incorrect number of goals (expected 0 tactics) |
| `Translation/Lang/ImpDatatoImpEJson.v` | 501 | Found no subterm matching |
| `LambdaNRA/Typing/TLambdaNRA.v` | 176 | Found no subterm matching |
| `Translation/Lang/NNRCtoNNRCMR.v` | 363 | Wrong bullet `-`: current bullet `*` is not finished |
| `NNRC/Optim/TNNRCRewrite.v` | 1221 | Tactic failure: incorrect number of goals (expected 1 tactic) |

Three are goal-count problems of the kind already fixed. Two are "found no
subterm matching", where a `rewrite` no longer matches because the term it
targets has a different shape; those need the goal read rather than a line
deleted. `cNRAEnv.v:1381` is the awkward one: the dispatch
`[rewrite IHae1|rewrite IHae2]` expects two goals and now faces five.

### How to probe a goal count

`all: idtac "MARK"` is unreliable here, because it reports one mark when
there are no goals at all. Use `Show.` instead and read whether it prints
`No more goals.` or `N goals`:

```sh
head -<line before the failure> FILE.v > probe.v
printf '      Show.\n      Abort.\n' >> probe.v
coqc -R compiler/core Qcert probe.v
```
