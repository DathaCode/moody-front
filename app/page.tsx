"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Sparkles, Heart, Zap, Cloud, Coffee } from "lucide-react"
import { MoodAnalysis } from "@/components/mood-analysis"
import { PlaylistResults } from "@/components/playlist-results"

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

export default function HomePage() {
  const [moodText, setMoodText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [moodData, setMoodData] = useState<MoodData | null>(null)
  const [playlist, setPlaylist] = useState<Track[]>([])
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false)
  const [step, setStep] = useState<"input" | "analysis" | "results" | "success">("input")

  const moodSuggestions = [
    { icon: Heart, text: "Feeling nostalgic about old memories", color: "text-pink-500" },
    { icon: Zap, text: "Energetic and ready to conquer the world", color: "text-yellow-500" },
    { icon: Cloud, text: "Calm and peaceful, like a quiet morning", color: "text-blue-500" },
    { icon: Coffee, text: "Cozy and introspective", color: "text-amber-500" },
  ]

  const handleMoodSubmit = async () => {
    if (!moodText.trim()) return

    setIsAnalyzing(true)
    setStep("analysis")

    try {
      // Simulate mood analysis
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockMoodData: MoodData = {
        primary_emotion: "happy",
        confidence: 0.85,
        energy_level: 0.7,
        valence: 0.8,
      }

      setMoodData(mockMoodData)

      // Generate mock playlist
      const mockPlaylist: Track[] = [
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
      ]

      setPlaylist(mockPlaylist)
      setStep("results")
    } catch (error) {
      console.error("Error analyzing mood:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleSpotifyConnect = () => {
    setIsSpotifyConnected(true)
    setStep("success")
  }

  const resetApp = () => {
    setMoodText("")
    setMoodData(null)
    setPlaylist([])
    setStep("input")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Moody</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transform your emotions into the perfect playlist. Tell us how you're feeling, and we'll create music that
            matches your mood.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {step === "input" && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="mood-input" className="block text-lg font-medium text-white mb-3">
                      How are you feeling today?
                    </label>
                    <Textarea
                      id="mood-input"
                      placeholder="Describe your current mood, emotions, or what's on your mind..."
                      value={moodText}
                      onChange={(e) => setMoodText(e.target.value)}
                      className="min-h-32 bg-white/5 border-white/20 text-white placeholder:text-white/50 text-lg resize-none"
                      maxLength={500}
                    />
                    <div className="text-right text-sm text-white/60 mt-2">{moodText.length}/500</div>
                  </div>

                  <div>
                    <p className="text-white/80 mb-4">Need inspiration? Try one of these:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {moodSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setMoodText(suggestion.text)}
                          className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 text-left group"
                        >
                          <suggestion.icon
                            className={`w-5 h-5 ${suggestion.color} group-hover:scale-110 transition-transform`}
                          />
                          <span className="text-white/90 group-hover:text-white">{suggestion.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleMoodSubmit}
                    disabled={!moodText.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate My Playlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === "analysis" && <MoodAnalysis moodText={moodText} />}

          {step === "results" && moodData && (
            <PlaylistResults
              moodData={moodData}
              playlist={playlist}
              onSpotifyConnect={handleSpotifyConnect}
              onTryAgain={resetApp}
            />
          )}

          {step === "success" && (
            <div className="text-center">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <Music className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Playlist Created!</h2>
                    <p className="text-white/80 text-lg">
                      Your mood-based playlist has been saved to your Spotify library. Open Spotify to start listening!
                    </p>
                    <Button
                      onClick={resetApp}
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    >
                      Create Another Playlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
