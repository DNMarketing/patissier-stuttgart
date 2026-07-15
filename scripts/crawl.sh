#!/bin/bash
# Phase 0: Crawl patissier-stuttgart.de (Squarespace, aggressive 429 rate-limiting)
set -u
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
OUT="$HOME/Desktop/patissier-stuttgart/content/legacy/raw"
mkdir -p "$OUT"

fetch() {
  local url="$1" file="$2" attempt=1 code
  while [ $attempt -le 5 ]; do
    code=$(curl -s -o "$OUT/$file" -w "%{http_code}" -A "$UA" -H "Accept-Language: de-DE,de;q=0.9" -L "$url")
    echo "[$file] attempt $attempt -> HTTP $code"
    if [ "$code" = "200" ]; then return 0; fi
    if [ "$code" = "429" ]; then sleep $((attempt * 15)); else sleep 5; fi
    attempt=$((attempt + 1))
  done
  echo "[$file] FAILED after 5 attempts"
  return 1
}

fetch "https://www.patissier-stuttgart.de/" "home.html";        sleep 4
fetch "https://www.patissier-stuttgart.de/about" "about.html";  sleep 5
fetch "https://www.patissier-stuttgart.de/contact" "contact.html"; sleep 4
fetch "https://www.patissier-stuttgart.de/impressum-1-1" "impressum.html"
echo "CRAWL DONE"
ls -la "$OUT"
