"use client"

import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function CallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the authorization code from URL
        const searchParams = new URLSearchParams(location.search)
        const code = searchParams.get("code")

        if (!code) {
          throw new Error("No authorization code found")
        }

        // In a real implementation, exchange the code for an access token
        // const response = await exchangeCodeForToken(code)

        // For demo purposes, we'll just simulate success
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setStatus("success")

        // Redirect back to the main page with success status
        setTimeout(() => {
          navigate("/?auth=success")
        }, 1000)
      } catch (error) {
        console.error("Authentication error:", error)
        setStatus("error")

        // Redirect back with error
        setTimeout(() => {
          navigate("/?auth=error")
        }, 2000)
      }
    }

    handleCallback()
  }, [location.search, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl w-full max-w-md">
        <CardContent className="p-8 text-center">
          {status === "loading" && (
            <div className="space-y-4">
              <Loader2 className="w-12 h-12 text-white animate-spin mx-auto" />
              <h2 className="text-2xl font-bold text-white">Connecting to Spotify</h2>
              <p className="text-white/80">Please wait while we complete the authentication...</p>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Successfully Connected!</h2>
              <p className="text-white/80">Redirecting you back to create your playlist...</p>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Connection Failed</h2>
              <p className="text-white/80">There was a problem connecting to Spotify. Redirecting you back...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
