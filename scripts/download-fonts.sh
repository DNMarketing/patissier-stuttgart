#!/bin/bash
# Self-Hosting-Fonts: variable woff2 (Site) + statische TTFs (OG-Images, satori kann kein woff2)
set -eu
DIR="$HOME/Desktop/patissier-stuttgart/src/fonts"
mkdir -p "$DIR/og"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

css_woff2() { # $1 css2-url  -> gibt latin-woff2-URL aus
  curl -s -A "$UA" "$1" | python3 -c "
import sys, re
css = sys.stdin.read()
# letzter /* latin */-Block enthaelt die latin-subset-URL
blocks = re.split(r'/\*\s*([a-z-]+)\s*\*/', css)
for i in range(1, len(blocks), 2):
    if blocks[i] == 'latin':
        m = re.search(r'url\((https://[^)]+\.woff2)\)', blocks[i+1])
        if m: print(m.group(1))
"
}

echo "-- Bodoni Moda (variable, normal + italic)"
U1=$(css_woff2 "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400..800&display=swap")
U2=$(css_woff2 "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@1,6..96,400..800&display=swap")
echo "-- Hanken Grotesk (variable)"
U3=$(css_woff2 "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&display=swap")
curl -s -o "$DIR/bodoni-moda-var.woff2" "$U1"
curl -s -o "$DIR/bodoni-moda-italic-var.woff2" "$U2"
curl -s -o "$DIR/hanken-grotesk-var.woff2" "$U3"

echo "-- OG-TTFs via google-webfonts-helper"
python3 - <<'EOF'
import json, urllib.request, os
d = os.path.expanduser("~/Desktop/patissier-stuttgart/src/fonts/og")
for font, variant, out in [("bodoni-moda", "600", "BodoniModa-SemiBold.ttf"),
                           ("hanken-grotesk", "500", "HankenGrotesk-Medium.ttf")]:
    req = urllib.request.Request(f"https://gwfh.mranftl.com/api/fonts/{font}?subsets=latin", headers={"User-Agent": "curl/8"})
    data = json.load(urllib.request.urlopen(req))
    v = next(x for x in data["variants"] if x["id"] == variant)
    urllib.request.urlretrieve(v["ttf"], os.path.join(d, out))
    print("OK", out)
EOF
ls -la "$DIR" "$DIR/og"
