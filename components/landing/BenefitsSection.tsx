"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Shield, Globe, FileText, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Full control over your transactions",
    description: "Manage and track every detail of your crypto trades",
  },
  {
    icon: Globe,
    title: "Manage multiple currencies and exchanges",
    description: "Seamlessly handle various cryptocurrencies and fiat currencies",
  },
  {
    icon: FileText,
    title: "Comprehensive financial reports",
    description: "Generate detailed reports for better financial insights",
  },
  {
    icon: MessageCircle,
    title: "Telegram Bot for quick access",
    description: "Receive notifications and access key features via Telegram",
  },
]

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight
      const offset = document.getElementById("benefits-section")?.offsetTop
      if (offset && top > offset) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="benefits-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Benefits of Our Platform</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.01, delay: index * 0.01 }} // Faster animation
              whileHover={{
                scale: 1.1, // Scale up the card on hover
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)", // Add shadow on hover
                transition: { duration: 0.2 }, // Fast hover transition
              }}
              className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-base text-gray-500">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
