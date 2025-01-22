import { Navigation } from "../../components/Navigation"

export default function Congrats() {
  const messages = [
    { name: "Prof. Johnson", message: "Congratulations on your outstanding achievement, Atipatsa!" },
    { name: "Sarah (Classmate)", message: "You've always been an inspiration. Congrats on your success!" },
    { name: "Dr. Williams", message: "Your hard work and dedication have paid off. Well done!" },
    { name: "The Smith Family", message: "We're so proud of you, Atipatsa. Congratulations!" },
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white glow-green">
          Congratulatory Messages
        </h1>
        <Navigation />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-green">
              <p className="text-lg text-gray-300 mb-4">"{msg.message}"</p>
              <p className="text-right text-green-400 font-semibold">- {msg.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-white glow-green mb-4">Add Your Congratulations</h2>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 rounded-md bg-gray-700 text-white" />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 p-2 rounded-md bg-gray-700 text-white h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-green"
            >
              Send Congratulations
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

