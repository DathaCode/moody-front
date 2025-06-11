import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json({ error: "Authorization code not found" }, { status: 400 })
  }

  try {
    // In a real implementation, you would exchange the code for an access token
    // const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
    //   },
    //   body: new URLSearchParams({
    //     grant_type: 'authorization_code',
    //     code,
    //     redirect_uri: process.env.SPOTIFY_REDIRECT_URI!
    //   })
    // })

    // Mock successful authentication
    return NextResponse.redirect(new URL("/?auth=success", request.url))
  } catch (error) {
    console.error("Spotify auth error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
