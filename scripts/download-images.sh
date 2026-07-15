#!/bin/bash
# Phase 0: Download aller Kundenbilder vom Squarespace-CDN in Maximalauflösung,
# mit sprechenden SEO-Dateinamen (abgeleitet aus den Legacy-Alt-Texten).
set -u
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
DEST="$HOME/Desktop/patissier-stuttgart/public/images/legacy"
BRAND="$HOME/Desktop/patissier-stuttgart/public/images/brand"
mkdir -p "$DEST" "$BRAND"
BASE="https://images.squarespace-cdn.com/content/v1/6819d8fb25f6422df080c713"

dl() {
  local url="$1" out="$2" attempt=1 code
  while [ $attempt -le 5 ]; do
    code=$(curl -s -o "$out" -w "%{http_code}" -A "$UA" "$url?format=2500w")
    if [ "$code" = "200" ]; then echo "OK  $out ($(du -h "$out" | cut -f1))"; return 0; fi
    echo "RETRY($code) $out"; sleep $((attempt * 12)); attempt=$((attempt + 1))
  done
  echo "FAILED $out"
}

dl "$BASE/dbb31f53-bcde-41f2-b7c1-3120c125150d/P%C3%A2tissier_black_high-res-2.png" "$BRAND/logo-patissier-schwarz.png"; sleep 4
dl "$BASE/884678d7-3872-4107-90d4-5e3ccb4a2f46/IMG_8716_jpg.jpg" "$DEST/hochzeitstorte-stuttgart-weiss-rosen.jpg"; sleep 4
dl "$BASE/3f40693d-e303-42a5-b55e-afbecb032a5a/3117F67D-FC4D-4379-A00F-CEBE5863EEE9.jpg" "$DEST/event-dekoration-lampe-pastell.jpg"; sleep 4
dl "$BASE/7565daaf-f7f3-4a05-b39a-05c0d0053144/IMG_4702.JPG" "$DEST/sweet-table-hochzeitstorte-macarons.jpg"; sleep 4
dl "$BASE/c1663334-e3cc-4415-83c9-91a95601f47e/IMG_7477.JPG" "$DEST/macaron-buffet-catering-stuttgart.jpg"; sleep 4
dl "$BASE/92dd6af4-80aa-42ad-be4e-298bdd60c2b6/IMG_3742.jpg" "$DEST/schokoladentorte-goldblatt-patisserie.jpg"; sleep 4
dl "$BASE/8b1807fa-53d1-4a84-983c-6d7cc34e066d/IMG_7715.jpg" "$DEST/dessert-toertchen-beeren-creme.jpg"
echo "DOWNLOAD DONE"
ls -la "$DEST" "$BRAND"
