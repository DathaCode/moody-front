import { Card, CardContent } from "@/components/ui/card"
import { Brain, Loader2, Music, Sparkles } from "lucide-react"

interface MoodAnalysisProps {
  moodText: string
}

export function MoodAnalysis({ moodText }: MoodAnalysisProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-4 h-4 text-yellow-900" />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Analyzing Your Mood</h2>
            <p className="text-white/80">
              Our AI is understanding your emotions and finding the perfect musical match...
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-white/90 italic">"{moodText}"</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-white/60">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing emotions</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              <span>Matching music</span>
            </div>
          </div>

          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
