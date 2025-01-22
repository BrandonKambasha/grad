"use client"
import { useEffect, useRef, useState } from "react"
import { Navigation } from "../../components/Navigation"

export default function Videos() {
    const videos = [
        { title: "Graduation Ceremony Highlights", src: "/images/vid.mp4" },
        { title: "Atipatsa Chewing Gum", src: "/images/vid2.mp4" },
        { title: "About to die ☄️ ", src: "/images/vid5.mp4" },
        { title: "Oh brother, this guy stinks!", src: "/images/vid6.mp4" },
    ]

    // Create an array to hold the mute state for each video
    const [isMuted, setIsMuted] = useState<boolean[]>(Array(videos.length).fill(true))
    const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(videos.length).fill(null))

    useEffect(() => {
        // Update the mute state of each video based on the isMuted array
        videoRefs.current.forEach((videoRef, index) => {
            if (videoRef) {
                videoRef.muted = isMuted[index]
                videoRef.play()
            }
        })
    }, [isMuted])

    const toggleMute = (index: number) => {
        setIsMuted((prev) => {
            const newMuteState = [...prev]
            newMuteState[index] = !newMuteState[index] // Toggle the mute state for the clicked video
            return newMuteState
        })
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white glow-green font-serif">Graduation Videos</h1>
                <Navigation />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {videos.map((video, index) => (
                        <div key={index} className="mb-12 flex flex-col items-center">
                            <h2 className="text-3xl font-semibold text-white glow-green mb-4 text-center">{video.title}</h2>
                            <div className="relative">
                                <video
                                    ref={(el) => { videoRefs.current[index] = el; }} // Assign video ref without returning
                                    src={video.src}
                                    controls
                                    className="rounded-lg shadow-green"
                                    width={300}
                                    height={300}
                                    autoPlay
                                    muted={isMuted[index]} // Set mute state for the specific video
                                    loop
                                />
                                <button
                                    onClick={() => toggleMute(index)} // Toggle mute for the specific video
                                    className="absolute top-2 left-2 bg-white rounded-full p-2 shadow-lg z-10"
                                >
                                    {isMuted[index] ? (
                                        <span role="img" aria-label="Unmute">🔇</span> // Mute icon
                                    ) : (
                                        <span role="img" aria-label="Mute">🔊</span> // Volume icon with waves for unmute
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

