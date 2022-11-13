#!/usr/bin/env bash

# -e  Exit immediately if a command exits with a non-zero status.
set -e

cd "$(dirname "$0")/.." || exit

# Performs the following tasks in order:
#   - Build `@amollo-assy/webpack-tsx-app`

printf '👷‍♂️ Start building ...\n\n'

printf '📦 Building `@assembly` workspaces ...\n\n'
printf '  📦 Building `@amollo-assy/webpack-tsx-app`...\n'
yarn workspace @amollo-assy/webpack-tsx-app build
printf '  📦 @amollo-assy/webpack-tsx-app ✅\n\n'

printf '👷‍♂️ Building completed successfully ...\n\n'
