# 🎧 Moody – Mood-Based Playlist Generator

Moody is a full-stack web application that uses **natural language AI** to detect your emotional state and generate personalized music playlists using the **Spotify Web API**.

Built using **OpenAI + Spotify**, Moody transforms your feelings into handpicked tracks that match your mood.

---

## 🚀 Features

- 🧠 AI-powered mood analysis (OpenAI / GPT-4)
- 🎧 Playlist generation via Spotify
- 🔐 OAuth2.0 authentication flow
- 🎨 Clean, responsive UI (Vite + Tailwind + ShadCN)
- 🎼 Real audio feature matching (valence, energy, etc.)

---

## ⚙️ Tech Stack

| Layer       | Stack                                     |
|-------------|-------------------------------------------|
| Frontend    | React (Vite) + TypeScript + Tailwind CSS  |
| Backend     | Node.js + Express                         |
| AI          | OpenAI API (GPT-4 / GPT-3.5)              |
| Music API   | Spotify Web API                           |
| Auth        | OAuth 2.0 (Spotify)                       |

---

## 📡 API Endpoint Summary

| Endpoint                   | Status       | Notes                                          |
|---------------------------|--------------|------------------------------------------------|
| `POST /api/mood/analyze`  | ✅ Working    | Mood analysis via OpenAI                       |
| `POST /api/spotify/callback` | ✅ Working | Token exchange + user profile                  |
| `GET /api/spotify/user`   | ✅ Working    | User profile with token                        |
| `POST /api/playlist/preview` | ✅ Working | Track preview for mood                         |
| `POST /api/playlist/generate` | ❌ Failing | Spotify genre/recommendation 404 error         |
| `GET /api/spotify/genres` | ❌ Failing    | Spotify genre 404 error                        |
| `POST /api/spotify/refresh` | ⏳ Not checked | Refresh token endpoint                         |
| `GET /api/mood/test`      | ⏳ Not checked | Mood API health check                          |
| `GET /api/playlist/test`  | ⏳ Not checked | Playlist API health check                      |

> ❗ If you're contributing or testing, prioritize fixing `/api/playlist/generate` and `/api/spotify/genres`.

---

## 🛠️ Local Development Setup
###  1. Clone the Repository
bash
git clone https://github.com/your-username/moody.git
cd moody

2. Set Up Frontend
cd moody-front
npm install
npm run dev -- --host 127.0.0.1

3. Set Up Backend
cd ../moody-back
npm install
npm run dev

🔐 Spotify Redirect URI Setup (2025 Update)
Since April 2025, Spotify does not allow localhost in redirect URIs. Follow this format instead:
✅ Use 127.0.0.1 or [::1]:
Add this in your Spotify Developer Console:
http://127.0.0.1:5173/callback

💡 Environment Variables
.env:
VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:5173/callback

Frontend (moody-front/.env)
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:5173/callback

Backend (moody-back/.env)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
OPENAI_API_KEY=your_openai_key
REDIRECT_URI=http://127.0.0.1:5173/callback

🧪 Known Issues / Todos
 Fix POST /api/playlist/generate (Spotify recommendations endpoint returns 404)
 Fix GET /api/spotify/genres (Spotify genre endpoint fails or misused)
 Add /refresh token handler for long sessions
 Add retry/error UI for failed playlist generation

## 🌐 Credits / Documentations
 
Spotify Web API Docs,
OpenAI API,
Tailwind CSS,
Vite
