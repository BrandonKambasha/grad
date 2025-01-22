"use client"

import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false })

export function ClientConfetti() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isGenerating, setIsGenerating] = useState(true)
  const [confettiPieces, setConfettiPieces] = useState(600)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    timeoutRef.current = setTimeout(() => {
      setIsGenerating(false)
    }, 10000)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isGenerating) {
      const interval = setInterval(() => {
        setConfettiPieces((prev) => {
          if (prev > 0) return prev - 1
          clearInterval(interval)
          return 0
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isGenerating])

  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={confettiPieces}
      recycle={isGenerating}
      gravity={0.1}
      wind={0.01}
      colors={["#00f", "#f0f", "#0ff", "#ff0"]} // Neon colors
    />
  )
}

