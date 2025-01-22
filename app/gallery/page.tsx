import Image from "next/image"
import { Navigation } from "../../components/Navigation"

export default function Gallery() {
  const images = [
    { src: "/images/1.jpg", alt: "Egypt Ati! 🇪🇬 " },
    { src: "/images/2.jpg", alt: "Passport Ati! " },
    { src: "/images/3.jpg", alt: "Twins! Somehow? 👯‍♀️ " },
    { src: "/images/17.jpg", alt: "GOAT! 🐐  " },
    { src: "/images/4.jpg", alt: "💋💋💋💋💋" },
    { src: "/images/6.jpg", alt: "Ahhh, yes makeup Ati! 💄 " },
    { src: "/images/15.jpg", alt: "Where it began! 👩‍🎓 " },
    { src: "/images/5.jpg", alt: "The PostGraduate! 👩‍🎓 " },
    { src: "/images/11.jpg", alt: "Ichooooo! 👩‍🎓 " },

  ]

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white glow-green font-serif">
          Atipatsa's Graduation Gallery
        </h1>
        <Navigation />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="rounded-lg shadow-green transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

