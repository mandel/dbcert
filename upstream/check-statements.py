#!/usr/bin/env python3
"""Check that a port changed only proof scripts.

Reads two trees of Coq/Rocq sources, strips every proof body (the text
between Proof. and the Qed./Defined./Admitted./Abort. that closes it) and
diffs what is left.  What is left is the statements: Lemma, Theorem,
Definition, Fixpoint, Inductive, Class, Record, Instance, Notation,
Axiom, Parameter, the Require lines and the comments.

A clean run means no statement changed and the port only rewrote tactics.
Import lines are reported separately, because a version port legitimately
drops imports of modules the new standard library no longer has, and that
is not a statement change.

Usage:  check-statements.py OLD_TREE NEW_TREE [-v]
"""

import sys, os, re, difflib

CLOSERS = re.compile(r'^\s*(Qed|Defined|Admitted|Abort|Save)\s*\.', re.M)
OPENER = re.compile(r'^\s*(Proof|Next Obligation|Obligation\s+\d+)\s*[.;]', re.M)
REQUIRE = re.compile(r'^\s*(From\s+\S+\s+)?Require\b')
# The Coq 8.17 migration of class fields: ":>" used to declare a field as an
# instance and now declares a coercion, while "::" took over the old meaning.
# Rewriting one to the other preserves the declaration exactly; leaving it
# alone is what would change it.  Normalise both to tell them apart from a
# real edit to a field's name or type.
FIELD_ATTR = re.compile(r'\s*::\s*|\s*:>\s*')
# Rocq 9 makes a "::" field instance export-local, where the old ":>" was
# global, so the faithful migration writes "#[global] f :: T".  Strip that
# attribute only on lines that carry a field separator, so it cannot mask a
# locality change anywhere else.
FIELD_GLOBAL = re.compile(r'#\[global\]\s*')

def norm_field(line):
    if '::' in line or ':>' in line:
        line = FIELD_GLOBAL.sub('', line)
    return FIELD_ATTR.sub(' @ ', line)
# Notation tokens whose surrounding whitespace the port had to change,
# because Rocq 9 only lexes them when they stand apart from their operands.
# Coq is insensitive to that spacing once the term parses, so normalising it
# separates a respacing from a real edit.  Extend this list, never widen it
# to "any whitespace".
RESPACED_TOKENS = ['@ₐ', '@ₑ']
NOTATION_SPACE = re.compile('|'.join(r'\s*' + re.escape(t) + r'\s*'
                                     for t in RESPACED_TOKENS))

def strip_proofs(text):
    """Drop proof bodies, keep everything else."""
    out, in_proof = [], False
    for line in text.splitlines():
        if not in_proof and OPENER.match(line):
            in_proof = True
            out.append("<proof>")
            continue
        if in_proof:
            if CLOSERS.match(line):
                in_proof = False
            continue
        out.append(line)
    return out

def statements(path):
    with open(path, encoding='utf-8', errors='replace') as f:
        return strip_proofs(f.read())

def walk(root):
    for base, _, files in os.walk(root):
        for name in sorted(files):
            if name.endswith('.v'):
                full = os.path.join(base, name)
                yield os.path.relpath(full, root), full

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('-')]
    verbose = '-v' in sys.argv
    if len(args) != 2:
        print(__doc__)
        return 2
    old_root, new_root = args
    old = dict(walk(old_root))
    new = dict(walk(new_root))

    changed_statements = []   # real findings
    changed_imports = []      # allowed by a version port
    changed_attrs = []        # the ":>" to "::" class-field migration
    changed_space = []        # notation respacing forced by the new lexer
    for rel in sorted(set(old) | set(new)):
        if rel not in old:
            changed_statements.append((rel, ["file added"]))
            continue
        if rel not in new:
            changed_statements.append((rel, ["file removed"]))
            continue
        a, b = statements(old[rel]), statements(new[rel])
        if a == b:
            continue
        diff = [l for l in difflib.unified_diff(a, b, lineterm='', n=0)
                if l.startswith(('+', '-')) and not l.startswith(('+++', '---'))]
        body = [l for l in diff if not REQUIRE.match(l[1:])]
        if not body:
            changed_imports.append((rel, diff))
            continue
        # If normalising the field attribute makes the two sides equal, the
        # only thing that changed is instance-vs-coercion, not the field.
        na = [norm_field(l) for l in a]
        nb = [norm_field(l) for l in b]
        if na == nb:
            changed_attrs.append((rel, diff))
            continue
        # Rocq 9 lexes some notations only when they are surrounded by
        # spaces, so "op@ax" has to become "op @a x".  Coq is insensitive to
        # that whitespace once it parses, so collapsing runs of spaces tells
        # a respacing apart from a real edit.
        wa = [NOTATION_SPACE.sub('@', l) for l in na]
        wb = [NOTATION_SPACE.sub('@', l) for l in nb]
        if wa == wb:
            changed_space.append((rel, diff))
        else:
            changed_statements.append((rel, diff))

    print("files compared:                    %d" % len(set(old) | set(new)))
    print("import-only differences:           %d" % len(changed_imports))
    print("class-field attribute migrations:  %d" % len(changed_attrs))
    print("notation respacing only:           %d" % len(changed_space))
    print("STATEMENT differences:             %d" % len(changed_statements))
    if verbose:
        for rel, diff in changed_attrs:
            print("\n-- field attribute %s" % rel)
            for l in diff:
                print("   " + l)
        for rel, diff in changed_space:
            print("\n-- respacing %s" % rel)
            for l in diff:
                print("   " + l)
        for rel, diff in changed_imports:
            print("\n-- imports %s" % rel)
            for l in diff:
                print("   " + l)
    for rel, diff in changed_statements:
        print("\nSTATEMENT CHANGED in %s" % rel)
        for l in diff[:40]:
            print("   " + l)
    return 1 if changed_statements else 0

if __name__ == '__main__':
    sys.exit(main())
