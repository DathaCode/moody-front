import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { moodData } = await request.json()

    // Mock playlist generation based on mood
    const mockTracks = [
      {
        id: "1",
        name: "Good 4 U",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "2",
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "3",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "4",
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        album: "Fine Line",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "5",
        name: "drivers license",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
    ]

    // Filter tracks based on mood (this would be more sophisticated with real Spotify API)
    const playlist = mockTracks.slice(0, Math.floor(Math.random() * 3) + 3)

    return NextResponse.json({ playlist })
  } catch (error) {
    console.error("Error generating playlist:", error)
    return NextResponse.json({ error: "Failed to generate playlist" }, { status: 500 })
  }
}
