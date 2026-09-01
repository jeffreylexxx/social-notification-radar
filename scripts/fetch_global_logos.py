import json
import re
import sys
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "logos" / "global"
DRY_RUN = "--dry-run" in sys.argv

APPS = [
    ("instagram", "Instagram"), ("facebook", "Facebook"), ("x", "X"),
    ("whatsapp", "WhatsApp Messenger"), ("youtube", "YouTube"), ("gmail", "Gmail"),
    ("google-photos", "Google Photos"), ("google-ads", "Google Ads"), ("messenger", "Messenger"),
    ("grok", "Grok"), ("discord", "Discord"), ("amazon-alexa", "Amazon Alexa"),
    ("spotify", "Spotify"), ("telegram", "Telegram Messenger"), ("line", "LINE"),
    ("chatgpt", "ChatGPT"), ("perplexity", "Perplexity"), ("claude", "Claude"),
    ("tiktok", "TikTok"), ("fitbit", "Fitbit"), ("iheartradio", "iHeartRadio"),
    ("amazon-music", "Amazon Music"), ("youtube-music", "YouTube Music"), ("copilot", "Microsoft Copilot"),
    ("onedrive", "Microsoft OneDrive"), ("threads", "Threads"), ("linkedin", "LinkedIn"),
    ("github", "GitHub"), ("chrome", "Google Chrome"), ("accuweather", "AccuWeather"),
    ("soundcloud", "SoundCloud"), ("capcut", "CapCut"), ("slack", "Slack"),
    ("notion", "Notion"), ("firefox", "Firefox"), ("edge", "Microsoft Edge"),
    ("safari", "Safari"), ("vlc", "VLC media player"), ("youtube-tv", "YouTube TV"),
    ("snapchat", "Snapchat"), ("clubhouse", "Clubhouse"), ("paypal", "PayPal"),
    ("tunein", "TuneIn Radio"), ("aol-mail", "AOL Mail"), ("microsoft-teams", "Microsoft Teams"),
    ("yelp", "Yelp"), ("ticketmaster", "Ticketmaster"), ("priceline", "Priceline"),
    ("stubhub", "StubHub"), ("grubhub", "Grubhub"), ("uber", "Uber"),
    ("google-maps", "Google Maps"), ("netflix", "Netflix"), ("flickr", "Flickr"),
    ("tumblr", "Tumblr"), ("reddit", "Reddit"), ("max", "Max"),
    ("tinder", "Tinder"), ("disney-plus", "Disney+"), ("gemini", "Google Gemini"),
    ("meta-ai", "Meta AI"), ("zoom", "Zoom Workplace"), ("temu", "Temu")
]


def normalized(value):
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def fetch_bytes(url, attempts=4):
    request = urllib.request.Request(url, headers={"User-Agent": "NotificationRadar/1.0"})
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=25) as response:
                return response.read()
        except Exception:
            if attempt == attempts - 1:
                raise
            time.sleep((attempt + 1) * 1.2)


def fetch_app(app):
    app_id, query = app
    endpoint = "https://itunes.apple.com/search?" + urllib.parse.urlencode({
        "country": "us", "entity": "software", "limit": 10, "term": query
    })
    payload = json.loads(fetch_bytes(endpoint))
    target = normalized(query)

    def score(item):
        name = normalized(item.get("trackName", ""))
        if name == target:
            return 100
        if name in target or target in name:
            return 50
        return 0

    candidates = sorted(payload.get("results", []), key=score, reverse=True)
    if not candidates or not candidates[0].get("artworkUrl512"):
        return {"id": app_id, "query": query, "status": "missing"}
    selected = candidates[0]
    artwork = selected["artworkUrl512"]
    if not DRY_RUN:
        target_file = OUTPUT / f"{app_id}.jpg"
        if not target_file.exists():
            target_file.write_bytes(fetch_bytes(artwork))
    return {
        "id": app_id,
        "query": query,
        "status": "found",
        "trackName": selected.get("trackName"),
        "sellerName": selected.get("sellerName"),
        "trackId": selected.get("trackId"),
        "artwork": artwork,
    }


OUTPUT.mkdir(parents=True, exist_ok=True)
with ThreadPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(fetch_app, APPS))
if not DRY_RUN:
    (ROOT / "data" / "global-app-store.json").write_text(
        json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
print(json.dumps(results, ensure_ascii=False, indent=2))
