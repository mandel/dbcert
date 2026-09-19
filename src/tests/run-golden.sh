#!/bin/sh
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Compile every test query and run it, then compare against the golden
# files in tests/golden (or refresh them with -u).
#
# Usage, from the src/ directory:
#   tests/run-golden.sh          check against the golden files
#   tests/run-golden.sh -u       regenerate the golden files
#
# What is recorded per query file <case>:
#   golden/<case>.out    compiler stdout, with the output path normalised
#   golden/<case>*.js    generated JavaScript, WITHOUT the linked runtime
#   golden/<case>.run    JSON printed by dbcertRun.js, one line per query
#
# The runtime is deliberately excluded from the .js golden files: it is
# Q*cert's, it is versioned separately, and linking it would make every
# golden file change whenever the runtime does.

set -e

DBCERT=${DBCERT:-./dbcert}
NODE=${NODE:-node}
here=$(dirname "$0")
golden="$here/golden"
work=${TMPDIR:-/tmp}/dbcert-golden.$$

update=no
[ "$1" = "-u" ] && update=yes

# case: <sql file> <database file or -> 
cases="
tests/simple/org1.sql tests/simple/db1.json
tests/simple/org2.sql tests/simple/db1.json
tests/simple/org3.sql tests/simple/db1.json
tests/simple/org4.sql tests/simple/db1.json
tests/simple/org5.sql tests/simple/db1.json
tests/null/queries_null.sql tests/null/dbnull.json
tests/nested/queries_nested.sql tests/nested/dbnested.json
tests/unit.sql -
"

mkdir -p "$work"
trap 'rm -rf "$work"' EXIT

status=0
echo "$cases" | while read -r sql db; do
    [ -z "$sql" ] && continue
    case=$(echo "$sql" | sed -e 's|^tests/||' -e 's|\.sql$||' -e 's|/|_|g')
    out="$work/$case"
    mkdir -p "$out"

    # Compile.  -output keeps the generated files out of the source tree.
    "$DBCERT" -output "$out/$case.js" "$sql" > "$out/$case.raw" 2>&1 || true
    sed -e "s|$out/||g" "$out/$case.raw" > "$out/$case.out"

    # Execute, when there is a database to run against.
    : > "$out/$case.run"
    if [ "$db" != "-" ]; then
        # One -link pass compiles every query in the file, emitting
        # linked-<case>.js, linked-<case>_1.js, ... in query order.
        "$DBCERT" -link -output "$out/linked-$case.js" "$sql" \
            > /dev/null 2>&1 || true
        for js in "$out/linked-$case".js "$out/linked-$case"_*.js; do
            [ -f "$js" ] || continue
            printf '%s: ' "$(basename "$js" | sed -e 's|^linked-||')" >> "$out/$case.run"
            "$NODE" "$here/../dbcertRun.js" "$js" "$db" >> "$out/$case.run" 2>&1 || \
                echo "RUN FAILED" >> "$out/$case.run"
        done
    fi

    if [ "$update" = yes ]; then
        mkdir -p "$golden"
        cp "$out/$case.out" "$out/$case.run" "$golden/"
        for js in "$out/$case".js "$out/$case"_*.js; do
            [ -f "$js" ] && cp "$js" "$golden/"
        done
        echo "updated $case"
    else
        for f in "$case.out" "$case.run"; do
            if ! diff -u "$golden/$f" "$out/$f" > "$out/$f.diff" 2>&1; then
                echo "FAIL $f"; cat "$out/$f.diff"; status=1
            fi
        done
        for js in "$out/$case".js "$out/$case"_*.js; do
            [ -f "$js" ] || continue
            b=$(basename "$js")
            if ! cmp -s "$golden/$b" "$js"; then
                echo "FAIL $b (generated JavaScript differs)"; status=1
            fi
        done
        [ $status -eq 0 ] && echo "ok   $case"
    fi
done

exit $status
