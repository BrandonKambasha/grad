"use client"
import { useState } from "react"
import Image from "next/image"
import { Navigation as NavComponent } from "../../components/Navigation"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const images = [
  { src: "/images/14.jpg", alt: "Atipatsa and her boyfriend" },
  { src: "/images/8.jpg", alt: "Description for image 2" },
  { src: "/images/19.jpg", alt: "Description for image 3" },
  { src: "/images/10.jpg", alt: "Description for image 3" },

  // Add more images as needed
]

export default function Peace() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white glow-green font-serif">
          A Special Message for Atipatsa
        </h1>
        <NavComponent />
        <div className="mt-12 flex flex-col items-center">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            loop={true}
            className="w-full max-w-md"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center max-w-2xl mt-5">
            <h2 className="text-3xl font-semibold text-white glow-green mb-4 font-serif">My Dearest Atipatsa,</h2>
            <p className="text-xl text-gray-300 mb-6 font-serif">
              Words cannot express how proud I am of you. Your dedication, perseverance, and brilliance have led you to
              this incredible achievement. As you celebrate your graduation, know that I am here, cheering you on every
              step of the way.
            </p>
            <p className="text-xl text-gray-300 mb-6 font-serif">
              Your journey has been inspiring, and I feel honored to have been by your side throughout it. Your success
              is a testament to your hard work and determination. I can't wait to see what amazing things you'll
              accomplish next.
            </p>
            <p className="text-xl text-gray-300 mb-6 font-serif">
              Congratulations, my love. Here's to your bright future and all the dreams you're about to turn into
              reality.
            </p>
            <p className="text-2xl font-semibold text-green-400 font-serif">
              With all my love and admiration,
              <br />
              Your Peace ☮️ 
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

