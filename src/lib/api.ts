const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"

export interface MoodData {
  primaryEmotion: string
  emotions: {
    happy: number
    sad: number
    energetic: number
    calm: number
    anxious: number
    nostalgic: number
  }
  confidence: number
  rawText: string
}

export interface Track {
  id: string
  name: string
  artist: string
  album: string
  image: string
  preview_url: string | null
  external_url?: string
}

export async function analyzeMood(moodText: string): Promise<MoodData> {
  const res = await fetch(`${API_BASE_URL}/mood/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: moodText }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.error || "Mood analysis failed")
  return data.data
}

// This function only previews tracks, does not create a playlist
export async function previewPlaylist(moodData: MoodData, accessToken: string): Promise<Track[]> {
  const res = await fetch(`${API_BASE_URL}/playlist/preview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ moodAnalysis: moodData }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.error || "Playlist preview failed")
  return (data.data.tracks || []).map((track: any) => ({
    id: track.id,
    name: track.name,
    artist: track.artists?.map((a: any) => a.name).join(", "),
    album: track.album?.name,
    image: track.album?.images?.[0]?.url,
    preview_url: track.preview_url,
    external_url: track.external_urls?.spotify,
  }))
}

// This function creates the playlist in the user's Spotify account
export async function generatePlaylist(moodData: MoodData, accessToken: string, userId: string): Promise<any> {
  const res = await fetch(`${API_BASE_URL}/playlist/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ moodAnalysis: moodData, userId }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.error || "Playlist creation failed")
  return data.data
}

// Spotify OAuth: get backend auth URL
export async function getSpotifyAuthUrl(): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/spotify/auth`)
  const data = await res.json()
  if (!data.success) throw new Error(data.error || "Failed to get Spotify auth URL")
  return data.data.authUrl
}

// Spotify OAuth: exchange code for tokens and user info
export async function exchangeSpotifyCode(code: string): Promise<{ tokens: any; user: any }> {
  const res = await fetch(`${API_BASE_URL}/spotify/callback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.error || "Spotify authentication failed")
  return data.data
}
