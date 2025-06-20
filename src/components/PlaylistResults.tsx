"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Play, Heart, Shuffle, ExternalLink, RotateCcw } from "lucide-react"
import { MoodData, Track } from "@/lib/api"

export interface PlaylistResultsProps {
  moodData: MoodData
  playlist: Track[]
  onSpotifyConnect: () => Promise<void>
  onTryAgain: () => void
  onSavePlaylist: () => Promise<void>
}

export function PlaylistResults({ moodData, playlist, onSpotifyConnect, onTryAgain }: PlaylistResultsProps) {
  const getEmotionColor = (emotion: string) => {
    const colors = {
      happy: "bg-yellow-500",
      sad: "bg-blue-500",
      energetic: "bg-red-500",
      calm: "bg-green-500",
      anxious: "bg-orange-500",
      nostalgic: "bg-purple-500",
    }
    return colors[emotion as keyof typeof colors] || "bg-gray-500"
  }

  const getEmotionEmoji = (emotion: string) => {
    const emojis = {
      happy: "😊",
      sad: "😢",
      energetic: "⚡",
      calm: "😌",
      anxious: "😰",
      nostalgic: "🌅",
    }
    return emojis[emotion as keyof typeof emojis] || "🎵"
  }

  return (
    <div className="space-y-6">
      {/* Mood Analysis Results */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-12 h-12 ${getEmotionColor(moodData.primaryEmotion)} rounded-full flex items-center justify-center text-2xl`}
            >
              {getEmotionEmoji(moodData.primaryEmotion)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white capitalize">{moodData.primaryEmotion} Vibes</h3>
              <p className="text-white/70">{Math.round(moodData.confidence * 100)}% confidence match</p>
            </div>
          </div>
          {/* Remove energy_level and valence UI */}
        </CardContent>
      </Card>

      {/* Generated Playlist */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Mood Playlist</h3>
                <p className="text-white/70">{playlist.length} tracks curated for you</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shuffle className="w-3 h-3 mr-1" />
              Mixed
            </Badge>
          </div>

          <div className="space-y-3 mb-6">
            {playlist.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-white/60 text-sm w-6">{index + 1}</span>
                  <img
                    src={track.image || "/placeholder.svg"}
                    alt={track.album}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{track.name}</p>
                    <p className="text-white/70 text-sm truncate">{track.artist}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/20"
                >
                  <Play className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/20"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onSpotifyConnect}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Save to Spotify
            </Button>
            <Button
              onClick={onTryAgain}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
