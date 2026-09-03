#!/bin/sh
# Serve the units.gr clone. Must be served over HTTP (not file://) —
# paths in JS-driven galleries/menus are root-absolute.
exec python3 -m http.server "${1:-8899}" --bind 127.0.0.1 \
  --directory "$(cd "$(dirname "$0")" && pwd)/site/units.gr"
