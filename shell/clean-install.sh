#!/usr/bin/env bash

# -e  Exit immediately if a command exits with a non-zero status.
set -e

# Removes all the `node_modules` folders

printf 'Removing installed `node_modules`.\n'

ROOT_DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && cd .. && pwd)"

printf "🧹 Cleaning \`$ROOT_DIR\`..."
rm -rf $ROOT_DIR/node_modules
printf " ✅ done!\n\n"

for DIR in $(find $ROOT_DIR/@assembly -mindepth 1 -maxdepth 2 -type d) ; do
  printf "🧹 Cleaning \`$DIR\`..."
  rm -rf $DIR/node_modules
  printf " ✅ done!\n\n"
done

echo "✅ Finished!"
