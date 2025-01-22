"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ParallaxImage({ src, alt, width, height, className = "" }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }}>
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
      </motion.div>
    </div>
  )
}

