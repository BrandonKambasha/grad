"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { auth } from "../lib/firebase" // Make sure this path is correct

export function Navigation() {
  const [activeItem, setActiveItem] = useState("home")
  const router = useRouter()

  useEffect(() => {
    const path = window.location.pathname
    if (path === "/") setActiveItem("home")
    else if (path === "/gallery") setActiveItem("gallery")
    else if (path === "/videos") setActiveItem("videos")
    else if (path === "/peace") setActiveItem("peace")
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  return (
    <nav className="flex justify-center mt-6 mb-12 sticky top-4 z-50">
      <ul className="flex items-center rounded-full border border-[#9fff2f]/20 shadow-[0_0_10px_rgba(159,255,47,0.3)] px-4 sm:px-8 py-2 bg-[#15171b]/80 backdrop-blur-sm overflow-x-auto whitespace-nowrap">
        <li className="mx-1 sm:mx-2">
          <Link
            href="/"
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base transition-colors duration-300 ${
              activeItem === "home" ? "text-[#9fff2f]" : "text-white hover:text-[#9fff2f]"
            }`}
            onClick={() => setActiveItem("home")}
          >
            Home🏠
          </Link>
        </li>
        <li className="mx-1 sm:mx-2">
          <Link
            href="/gallery"
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base transition-colors duration-300 ${
              activeItem === "gallery" ? "text-[#9fff2f]" : "text-white hover:text-[#9fff2f]"
            }`}
            onClick={() => setActiveItem("gallery")}
          >
            Gallery🖼️
          </Link>
        </li>
        <li className="mx-1 sm:mx-2">
          <Link
            href="/videos"
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base transition-colors duration-300 ${
              activeItem === "videos" ? "text-[#9fff2f]" : "text-white hover:text-[#9fff2f]"
            }`}
            onClick={() => setActiveItem("videos")}
          >
            Videos🎥
          </Link>
        </li>
        <li className="mx-1 sm:mx-2">
          <Link
            href="/peace"
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base transition-colors duration-300 ${
              activeItem === "peace" ? "text-[#9fff2f]" : "text-white hover:text-[#9fff2f]"
            }`}
            onClick={() => setActiveItem("peace")}
          >
            Peace ✌️
          </Link>
        </li>
        <li className="mx-1 sm:mx-2">
          <button
            onClick={handleSignOut}
            className="px-2 sm:px-4 py-2 text-sm sm:text-base transition-colors duration-300 text-white hover:text-[#9fff2f]"
          >
           Logout🚪 
          </button>
        </li>
      </ul>
    </nav>
  )
}

