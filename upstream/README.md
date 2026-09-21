# Upstream patches

Changes that belong to a repository other than dbcert live here as patches
with their rationale, rather than being applied silently to a checkout.
Each patch is against the upstream commit named in its header.

| Patch | Upstream | Base | State |
|---|---|---|---|
| `qcert-rocq9-wip.patch` | `github.com/querycert/qcert` | `master` @ e112de6 | work in progress, see below |

## qcert-rocq9-wip.patch — Q*cert from Coq 8.16 to Rocq 9.0

Part of the port described in DECISIONS.md D10. Against `master`, which
targets Coq 8.15–8.16, this patch takes the Coq development from 0 to
**313 of 449 files** compiling under Rocq 9.0.0. It touches 48 files with
38 insertions and 76 deletions, and changes no statement of any theorem.

Three kinds of change, all of them the documented migrations:

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

3. **Two proofs in `Utils/StringAdd.v` lost redundant bullets.**
   `substring_split` and the lemma that follows it both end in
   `... ; simpl; trivial`, which under Rocq 9 discharges two of the three
   cases rather than one. The bullets that handled the now-closed goals
   are removed. Both lemmas keep their statements and still close with
   `Qed`; nothing is weakened and nothing is admitted.

### Not yet done

Five files still fail, and each needs a proof script or a notation fixed
rather than a mechanical substitution. They block the remaining 136 files.

| File | Line | Error |
|---|---|---|
| `cNRAEnv/Lang/cNRAEnv.v` | 1381 | Tactic failure: incorrect number of goals (expected 0 tactics) |
| `Translation/Lang/ImpDatatoImpEJson.v` | 501 | Found no subterm matching |
| `NNRC/Lang/NNRCStratify.v` | 1286 | No such goal |
| `NRA/Typing/TNRA.v` | 524 | Syntax error: `@ₐ` expected after term level 200 |
| `LambdaNRA/Typing/TLambdaNRA.v` | 176 | Found no subterm matching |

The first three and the fifth are the same family as the `StringAdd.v`
bullets: tactics that now close a different number of goals, or rewrites
whose target has changed shape. The fourth is a notation precedence
problem, not a proof problem.
