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
* **class-field attribute** — `:>` rewritten to `#[global] … ::`,
  verified by normalising both spellings to the same token and
  re-comparing, so a change to a field's name or type cannot hide here;
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
notation respacing only:            3
STATEMENT differences:              0
```

## qcert-rocq9-wip.patch — Q*cert from Coq 8.16 to Rocq 9.0

Part of the port described in DECISIONS.md D10. Against `master`, which
targets Coq 8.15–8.16, this patch takes the Coq development from 0 to
**all 459 modules** listed in `Makefile.coq_modules` compiling under
Rocq 9.0.0, and `make qcert-ocaml-extract` then runs, producing the 259
extracted OCaml modules. It touches 61 files with 68 insertions and 115
deletions, and changes no statement of any theorem, which
`check-statements.py` verifies mechanically.

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
   | `Translation/Typing/TcNRAEnvtocNNRC.v` | line 112 | same, `eapply Forall_nil` dropped |
   | `cNRAEnv/Lang/cNRAEnv.v` | `cNRAEnvEither` case, line 1381 | the dispatch `[rewrite IHae1|rewrite IHae2]` expected two goals and faced five, because `simpl; trivial` now leaves a different split; replaced by `solve [rewrite IHae1; reflexivity | rewrite IHae2; reflexivity]`, which is insensitive to the count |
   | `NNRC/Optim/TNNRCRewrite.v` | `tnnrcproject_over_rec_nin`, line 1221 | `destruct …; [| intuition]; [intuition | ]` became a one-goal dispatch because `intuition` now closes both branches; reduced to `[intuition | ]`, keeping the `~ In s sl` branch the rest of the proof needs |
   | `Translation/Lang/NNRCtoNNRCMR.v` | two sites, lines 363 and 416 | `case (equiv_dec output output)` silently stopped matching, because the `if` in the goal is at type `var` while a fresh `equiv_dec` elaborates at `string`; replaced by an explicit `destruct (@equiv_dec var … output output)` followed by the `string`-typed one |
   | `Translation/Lang/ImpDatatoImpEJson.v` | two sites, lines 499 and 666 | `rewrite H0` stopped matching because the goal holds `map (imp_data_expr_eval h σ) el` while `case_eq` had produced the eta-expanded `map (fun x => imp_data_expr_eval h σ x) el`; the `case_eq` argument is eta-reduced so the two agree again |
   | `LambdaNRA/Typing/TLambdaNRA.v` | lines 176, 209 and 297 | three rewrites of `lnra_lambda_eval_lambda_eq` and one `omap_product_ext` are now no-ops, because that lemma holds by `reflexivity` and Rocq 9 already presents the reduced form; the dead rewrites are removed |
   | `Tests/LambdaNRATest.v` | `T1lr_equiv`, three sites | see below |

### Not yet done

### `Tests/LambdaNRATest.v` — the last one, and why it took three changes

`T1lr_equiv` proves two lambda-NRA expressions equivalent. Everything that
broke in it comes from one fact: `olift f x` is *definitionally* the match
it abbreviates, and Rocq 9 presents goals in the reduced form where Coq
8.16 left `olift` folded. Three consequences, each needing its own fix.

1. **Line 112, `rewrite H`.** The hypothesis holds
   `olift (fun d1 => match d1 with drec r => edot r "addr" | _ => None end)
   (edot …)` while the goal holds the fused
   `match edot … with Some (drec r) => edot r "addr" | _ => None end`.
   `unfold olift in H` makes the two agree. That in turn makes the next
   line, `rewrite olift_some`, a no-op, so it is removed.

2. **The second `*` bullet, line 152.** Its `repeat match_destr` used to
   close the goal and now leaves three, the first of which is the two
   sides of an equation differing only in `d0` versus `d1`. Those are the
   same value: one side has already resolved
   `edot (rec_sort (env ++ [("a", d)])) "a"` to `d` and the other has
   not. The first `*` bullet, immediately above, already contains the
   lookup dance that resolves it, so the second bullet now does the same:
   `unfold edot; simpl; rewrite (@assoc_lookupr_drec_sort string ODT_string);
   rewrite @assoc_lookupr_app; simpl; trivial`.

3. **The second `-` bullet, line 160.** `match_case` here now leaves two
   goals where it left one, and the script's `.`-separated tactics only
   ever addressed the first. The two goals also differ: one still
   mentions `lambda_nra_eval` and the other does not, and one closes by
   `discriminate` on the rewritten hypothesis while the other closes by
   rewriting the hypothesis into the goal, which collapses it to
   `None = None`. The whole branch is now one chained tactic that covers
   both:
   `match_case; intros; try unfold lambda_nra_eval in H, H0;
   unfold olift in H, H0; rewrite H in H0; simpl in H0; try discriminate;
   rewrite H; simpl; trivial`.

The statement of `T1lr_equiv` is untouched and it closes with `Qed`.

### Not yet done: the OCaml side

The Coq development is complete, but `dune build -p coq-qcert` does not
yet run on this branch, and for a reason that has nothing to do with
Rocq: Q*cert `master` added a dependency on the `wasm` library (pinned to
1.0.1 in its opam file) that `v2.1.1` did not have, and it is not
installed here. `compiler/dune` and `runtimes/assemblyscript/dune` both
want it. That is a dependency to fetch, not a port problem.

### How to probe a goal count

`all: idtac "MARK"` is unreliable here, because it reports one mark when
there are no goals at all. Use `Show.` instead and read whether it prints
`No more goals.` or `N goals`:

```sh
head -<line before the failure> FILE.v > probe.v
printf '      Show.\n      Abort.\n' >> probe.v
coqc -R compiler/core Qcert probe.v
```
