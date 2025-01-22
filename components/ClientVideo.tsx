"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

export function ClientVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      width="100%"
      height="100%"
      controls
      playing={isPlaying}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    />
  )
}

