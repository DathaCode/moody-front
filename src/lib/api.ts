interface MoodData {
  primary_emotion: string
  confidence: number
  energy_level: number
  valence: number
}

interface Track {
  id: string
  name: string
  artist: string
  album: string
  image: string
  preview_url: string | null
}

// Mock API functions for demo purposes
// In a real implementation, these would call actual APIs

export async function analyzeMood(moodText: string): Promise<MoodData> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Simple mock analysis based on keywords in the text
  const text = moodText.toLowerCase()

  if (text.includes("happy") || text.includes("joy") || text.includes("excited")) {
    return {
      primary_emotion: "happy",
      confidence: 0.85,
      energy_level: 0.8,
      valence: 0.9,
    }
  } else if (text.includes("sad") || text.includes("depressed") || text.includes("down")) {
    return {
      primary_emotion: "sad",
      confidence: 0.82,
      energy_level: 0.3,
      valence: 0.2,
    }
  } else if (text.includes("energetic") || text.includes("pumped") || text.includes("workout")) {
    return {
      primary_emotion: "energetic",
      confidence: 0.88,
      energy_level: 0.95,
      valence: 0.75,
    }
  } else if (text.includes("calm") || text.includes("peaceful") || text.includes("relax")) {
    return {
      primary_emotion: "calm",
      confidence: 0.9,
      energy_level: 0.2,
      valence: 0.6,
    }
  } else if (text.includes("anxious") || text.includes("stress") || text.includes("worry")) {
    return {
      primary_emotion: "anxious",
      confidence: 0.78,
      energy_level: 0.65,
      valence: 0.3,
    }
  } else if (text.includes("nostalgic") || text.includes("memories") || text.includes("remember")) {
    return {
      primary_emotion: "nostalgic",
      confidence: 0.8,
      energy_level: 0.5,
      valence: 0.7,
    }
  } else {
    // Default mood if no keywords match
    return {
      primary_emotion: "happy",
      confidence: 0.7,
      energy_level: 0.6,
      valence: 0.65,
    }
  }
}

export async function generatePlaylist(moodData: MoodData): Promise<Track[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Mock playlists based on mood
  const playlists: Record<string, Track[]> = {
    happy: [
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
    ],
    sad: [
      {
        id: "5",
        name: "drivers license",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "6",
        name: "Heather",
        artist: "Conan Gray",
        album: "Kid Krow",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "7",
        name: "Falling",
        artist: "Harry Styles",
        album: "Fine Line",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
    ],
    energetic: [
      {
        id: "8",
        name: "Montero",
        artist: "Lil Nas X",
        album: "Montero",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "9",
        name: "Industry Baby",
        artist: "Lil Nas X",
        album: "Montero",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "10",
        name: "Physical",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
    ],
    calm: [
      {
        id: "11",
        name: "Cardigan",
        artist: "Taylor Swift",
        album: "Folklore",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "12",
        name: "Willow",
        artist: "Taylor Swift",
        album: "Evermore",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "13",
        name: "Daylight",
        artist: "Taylor Swift",
        album: "Lover",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
    ],
    anxious: [
      {
        id: "14",
        name: "Breathin",
        artist: "Ariana Grande",
        album: "Sweetener",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "15",
        name: "Anxiety",
        artist: "Julia Michaels",
        album: "Inner Monologue",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "16",
        name: "Unwell",
        artist: "Matchbox Twenty",
        album: "More Than You Think You Are",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
    ],
    nostalgic: [
      {
        id: "17",
        name: "Vienna",
        artist: "Billy Joel",
        album: "The Stranger",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "18",
        name: "Landslide",
        artist: "Fleetwood Mac",
        album: "Fleetwood Mac",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
      {
        id: "19",
        name: "Tears in Heaven",
        artist: "Eric Clapton",
        album: "Unplugged",
        image: "/placeholder.svg?height=64&width=64",
        preview_url: null,
      },
    ],
  }

  // Return the playlist for the detected mood, or a default one
  return playlists[moodData.primary_emotion] || playlists.happy
}

export async function savePlaylistToSpotify(playlistName: string, trackIds: string[]): Promise<boolean> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // In a real implementation, this would call the Spotify API
  console.log(`Creating playlist "${playlistName}" with ${trackIds.length} tracks`)

  // Always return success for demo
  return true
}
