import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { moodText } = await request.json()

    if (!moodText) {
      return NextResponse.json({ error: "Mood text is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      system: `You are a mood analysis AI that analyzes text and returns JSON with mood data. 
      Analyze the emotional content and return a JSON object with:
      - primary_emotion: one of "happy", "sad", "energetic", "calm", "anxious", "nostalgic"
      - confidence: number between 0-1
      - energy_level: number between 0-1 (0=very low energy, 1=very high energy)
      - valence: number between 0-1 (0=negative, 1=positive)
      
      Only return valid JSON, no other text.`,
      prompt: `Analyze this mood text: "${moodText}"`,
    })

    const moodData = JSON.parse(text)

    return NextResponse.json(moodData)
  } catch (error) {
    console.error("Error analyzing mood:", error)
    return NextResponse.json({ error: "Failed to analyze mood" }, { status: 500 })
  }
}
