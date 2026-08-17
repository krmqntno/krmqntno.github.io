#!/usr/bin/env bash
#
# Baut die Seite als statischen Export und schiebt das Ergebnis in den Branch
# gh-pages, aus dem GitHub Pages ausliefert. Aufruf: pnpm pages
#
# Nicht „deploy" nennen, das ist ein eingebauter pnpm-Befehl und schlaegt mit
# ERR_PNPM_NOTHING_TO_DEPLOY fehl.
#
# Der Branch enthaelt nur die fertigen Dateien, nie den Quelltext. main bleibt
# davon unberuehrt.
#
# Kein GitHub Actions, weil der lokale gh-Token keinen workflow-Scope hat.
# Wenn der irgendwann dazukommt, ist ein Actions-Workflow der bessere Weg,
# dann faellt dieses Skript weg.

set -euo pipefail

cd "$(dirname "$0")/.."

if [ -n "$(git status --porcelain)" ]; then
  echo "Arbeitsverzeichnis ist nicht sauber. Erst committen, dann deployen." >&2
  exit 1
fi

SHA=$(git rev-parse --short HEAD)

echo "Baue …"
pnpm build

# Frisches Arbeitsverzeichnis fuer den Zielbranch. Existiert er schon auf dem
# Server, wird er ausgecheckt, sonst neu angelegt.
rm -rf .deploy
git fetch -q origin gh-pages 2>/dev/null || true
if git rev-parse --verify -q origin/gh-pages >/dev/null; then
  git worktree add -q -B gh-pages .deploy origin/gh-pages
else
  git worktree add -q -B gh-pages .deploy
  git -C .deploy rm -rq --cached . 2>/dev/null || true
fi

# Alles ausser .git wegwerfen, damit geloeschte Seiten nicht liegen bleiben.
find .deploy -mindepth 1 -maxdepth 1 -not -name .git -exec rm -rf {} +
cp -R out/. .deploy/

git -C .deploy add -A
if git -C .deploy diff --cached --quiet; then
  echo "Nichts geaendert, kein Deploy noetig."
else
  git -C .deploy commit -q -m "Deploy $SHA"
  git -C .deploy push -q -u origin gh-pages
  echo "Deployed $SHA"
fi

git worktree remove --force .deploy
