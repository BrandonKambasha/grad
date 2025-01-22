"use client"

import { motion } from "framer-motion"

interface NeonTextProps {
  text: string
  className?: string
}

export function NeonText({ text, className = "" }: NeonTextProps) {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.h1 className={`${className} text-neon-blue`} variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ textShadow: "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

