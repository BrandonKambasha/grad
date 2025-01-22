"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
}

export function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

