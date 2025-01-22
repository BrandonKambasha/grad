"use client"
import Image from "next/image"
import { ClientConfetti } from "../../components/ClientConfetti"
import { Navigation } from "../../components/Navigation"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.play()
    }
  }, [isMuted])

  const journeyImages = [
    { src: "/images/1.JPG", alt: "First day at university" },
    { src: "/images/18.JPG", alt: "Midway through studies" },
    { src: "/images/8.JPG", alt: "Final year project" },
    { src: "/images/5.JPG", alt: "Graduation day" },
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-white font-body">
      <ClientConfetti />
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-6 text-white glow-green font-display"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Congratulations PostGraduate Atipatsa LeAnne!
        </motion.h1>
        <Navigation />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-center sm:text-xl text-gray-200 leading-relaxed font-serif">
              You've conquered the academic world! It's time to celebrate your incredible journey and all the hard work
              you've invested. The future is bright, and you're ready to shine! Congratulations Baby!
            </p>
            <ul className="list-disc list-inside text-center text-base sm:text-lg text-gray-200 space-y-2 font-serif">
              <li className="transition-colors duration-300 hover:text-green-400">Years of dedication</li>
              <li className="transition-colors duration-300 hover:text-green-400">Countless challenges overcome</li>
              <li className="transition-colors duration-300 hover:text-green-400">
                Friendships that will last a lifetime
              </li>
              <li className="transition-colors duration-300 hover:text-green-400">
                Knowledge and skills to change the world
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="relative mx-auto md:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video
              src="/images/vid.MP4"
              controls
              className="rounded-lg shadow-green w-full max-w-[300px]"
              autoPlay
              muted={isMuted}
              ref={videoRef}
              loop
            />
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-2 left-2 bg-white rounded-full p-2 shadow-lg transition-transform duration-300 hover:scale-110"
            >
              {isMuted ? (
                <span role="img" aria-label="Unmute">
                  🔇
                </span>
              ) : (
                <span role="img" aria-label="Mute">
                  🔊
                </span>
              )}
            </button>
          </motion.div>
        </div>
        <div className="mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-white glow-green mb-6 sm:mb-8 text-center font-display"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Patsa Through The Years
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {journeyImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-green"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="object-cover w-full h-32 sm:h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center p-2 text-sm sm:text-base font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-white glow-green mb-4 font-display"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            What's Next?
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            The world is your canvas, and you're the artist - literally! Huge congratulations on your graduation, and
            continuosly wishing you the best! I Love You! ❤️ 
          </motion.p>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            href="/gallery"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-green"
          >
            Explore The LeAnne Gallery
          </a>
        </motion.div>
      </div>
    </main>
  )
}

