
import json
import os
import urllib.parse
import urllib.request
import urllib.error

API_KEY = "AIzaSyAygZBetpAow8AeeAc6k-cBJj9AP1dzy9E"
PLAYLIST_ID = "UU8DrjhEmrB2gNfX75FEnmBw"

if not API_KEY:
    raise SystemExit("Defina a variável YOUTUBE_API_KEY antes de executar.")

videos = []
next_page_token = None

while True:
    params = {
        "part": "snippet,contentDetails",
        "playlistId": PLAYLIST_ID,
        "maxResults": 50,
        "key": API_KEY,
    }

    if next_page_token:
        params["pageToken"] = next_page_token

    url = (
        "https://www.googleapis.com/youtube/v3/playlistItems?"
        + urllib.parse.urlencode(params)
    )

    request = urllib.request.Request(url)

    try:
        with urllib.request.urlopen(request) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        print(error.read().decode("utf-8"))
        raise SystemExit("Erro ao consultar a API do YouTube.")

    for item in data.get("items", []):
        snippet = item.get("snippet", {})
        details = item.get("contentDetails", {})
        video_id = details.get("videoId")

        if not video_id:
            continue

        thumbnails = snippet.get("thumbnails", {})

        thumbnail = (
            thumbnails.get("high")
            or thumbnails.get("medium")
            or thumbnails.get("default")
            or {}
        )

        videos.append({
            "title": snippet.get("title", ""),
            "videoId": video_id,
            "url": f"https://www.youtube.com/watch?v={video_id}",
            "thumbnail": thumbnail.get("url", ""),
            "publishedAt": details.get(
                "videoPublishedAt",
                snippet.get("publishedAt", "")
            ),
        })

    print(f"Vídeos encontrados: {len(videos)}")

    next_page_token = data.get("nextPageToken")

    if not next_page_token:
        break

with open("videos.json", "w", encoding="utf-8") as file:
    json.dump(videos, file, ensure_ascii=False, indent=2)

print(f"\nConcluído! {len(videos)} vídeos salvos em videos.json")
