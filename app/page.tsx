"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase"
import { motion } from "framer-motion"

export default function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()
  const [user] = useAuthState(auth)

  const [createUserWithEmailAndPassword, user2, loading, error] = useCreateUserWithEmailAndPassword(auth)
  const [signInWithEmailAndPassword, user3, loading2, error2] = useSignInWithEmailAndPassword(auth)

  useEffect(() => {
    if (user) {
      router.push("/home")
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(email, password)
      } else {
        await createUserWithEmailAndPassword(email, password)
      }
    } catch (error) {
      console.error("Authentication error:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 opacity-50" />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center text-white"
          >
            {isLogin ? "PostGraduates Login Only!" : "Are You a PostGraduate? If so you can Register!"}
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300 transform hover:scale-105"
              disabled={loading || loading2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLogin ? "Login" : "Register"}
            </motion.button>
          </form>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 text-center text-white"
          >
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:underline focus:outline-none transition duration-300"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </motion.p>
          {(error || error2) && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-500 text-center"
            >
              {error?.message || error2?.message}
            </motion.p>
          )}
          {(loading || loading2) && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-blue-500 text-center flex items-center justify-center"
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  )
}

