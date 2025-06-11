"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Shield, Music } from "lucide-react"

interface SpotifyAuthProps {
  onConnect: () => void
}

export function SpotifyAuth({ onConnect }: SpotifyAuthProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl max-w-md mx-auto">
      <CardContent className="p-8 text-center">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
            <Music className="w-8 h-8 text-white" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Connect to Spotify</h3>
            <p className="text-white/80">
              To save your personalized playlist, we need to connect to your Spotify account.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Shield className="w-4 h-4" />
              <span>Secure OAuth 2.0 authentication</span>
            </div>
          </div>

          <Button
            onClick={onConnect}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Connect with Spotify
          </Button>

          <p className="text-white/60 text-xs">We only access your public profile and playlist creation permissions.</p>
        </div>
      </CardContent>
    </Card>
  )
}
