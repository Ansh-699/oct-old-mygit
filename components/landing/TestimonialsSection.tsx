"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "This platform has revolutionized how we manage our OTC crypto transactions. It's user-friendly and incredibly efficient.",
    author: "Jane Doe",
    title: "CEO, CryptoTech Solutions",
    image: "/1.jpg",
  },
  {
    quote:
      "The real-time notifications and comprehensive reporting features have saved us countless hours in accounting and reconciliation.",
    author: "John Smith",
    title: "CFO, BlockChain Innovations",
    image: "/2.jpg",
  },
  {
    quote: "Managing multiple currencies has never been easier. This system is a game-changer for our OTC operations.",
    author: "Alice Johnson",
    title: "Head of Trading, Crypto Exchange Pro",
    image: "/3.jpg",
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight
      const offset = document.getElementById("testimonials-section")?.offsetTop
      if (offset && top > offset) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="testimonials-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
                scale: isVisible ? 1 : 0.95,
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
