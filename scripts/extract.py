#!/usr/bin/env python3
"""Extract text content, images (with alt), and social links from crawled Squarespace pages."""
import html.parser
import json
import os
import re
import sys

RAW = os.path.expanduser("~/Desktop/patissier-stuttgart/content/legacy/raw")
OUT = os.path.expanduser("~/Desktop/patissier-stuttgart/content/legacy")

BLOCK_TAGS = {"p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote", "figcaption", "th", "td", "div"}
SKIP_TAGS = {"script", "style", "noscript", "svg", "iframe"}


class Extractor(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.blocks = []       # (tag, text)
        self.images = []       # {src, alt}
        self.links = set()
        self.stack = []
        self.skip_depth = 0
        self.buf = []
        self.cur_tag = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP_TAGS:
            self.skip_depth += 1
            return
        if tag == "img":
            src = a.get("data-src") or a.get("src") or ""
            if "squarespace-cdn" in src:
                self.images.append({"src": src.split("?")[0], "alt": a.get("alt", "")})
        if tag == "a" and a.get("href"):
            self.links.add(a["href"])
        if tag in ("h1", "h2", "h3", "h4", "p", "li", "blockquote", "figcaption"):
            self._flush()
            self.cur_tag = tag

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS and self.skip_depth > 0:
            self.skip_depth -= 1
            return
        if tag in ("h1", "h2", "h3", "h4", "p", "li", "blockquote", "figcaption"):
            self._flush()
            self.cur_tag = None

    def handle_data(self, data):
        if self.skip_depth == 0 and self.cur_tag:
            self.buf.append(data)

    def _flush(self):
        text = re.sub(r"\s+", " ", "".join(self.buf)).strip()
        if text and self.cur_tag:
            self.blocks.append((self.cur_tag, text))
        self.buf = []


def process(name):
    with open(os.path.join(RAW, f"{name}.html"), encoding="utf-8") as f:
        src = f.read()
    ex = Extractor()
    ex.feed(src)
    title = re.search(r"<title>(.*?)</title>", src, re.S)
    desc = re.search(r'<meta name="description" content="(.*?)"', src)
    lines = [f"# Legacy-Content: /{name}", ""]
    lines.append(f"**Title-Tag:** {title.group(1).strip() if title else '—'}")
    lines.append(f"**Meta-Description:** {desc.group(1) if desc else '—'}")
    lines.append("\n## Textinhalte\n")
    seen = set()
    for tag, text in ex.blocks:
        if text in seen or len(text) < 2:
            continue
        seen.add(text)
        prefix = {"h1": "# ", "h2": "## ", "h3": "### ", "h4": "#### ", "li": "- ", "blockquote": "> "}.get(tag, "")
        lines.append(prefix + text + "\n")
    lines.append("\n## Bilder (CDN, mit Alt-Texten)\n")
    seen_img = set()
    for img in ex.images:
        if img["src"] in seen_img:
            continue
        seen_img.add(img["src"])
        lines.append(f"- `{img['src']}`\n  alt: \"{img['alt']}\"")
    with open(os.path.join(OUT, f"{name}.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    social = sorted(l for l in ex.links if any(s in l for s in ("instagram.com", "facebook.com", "wa.me", "whatsapp")))
    return {"page": name, "images": [i for i in ex.images if i["src"] in seen_img], "social": social}


all_images, all_social = [], set()
for name in ("home", "about", "contact", "impressum"):
    r = process(name)
    print(f"{r['page']}: {len(r['images'])} Bilder, social: {r['social']}")
    all_images.extend(r["images"])
    all_social.update(r["social"])

# dedupe image list for the downloader
uniq = {}
for i in all_images:
    if i["src"] not in uniq or (not uniq[i["src"]]["alt"] and i["alt"]):
        uniq[i["src"]] = i
with open(os.path.join(OUT, "images.json"), "w", encoding="utf-8") as f:
    json.dump(list(uniq.values()), f, ensure_ascii=False, indent=2)
print(f"\nTotal unique CDN images: {len(uniq)}")
print("Social links:", "\n  ".join(sorted(all_social)))
