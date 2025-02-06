"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Wallet, CurrencyIcon as CurrencyDollar, Bell } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Transaction Tracking",
    description:
      "Track all crypto and fiat transactions, with detailed records of amounts, prices, and payment methods.",
  },
  {
    icon: CurrencyDollar,
    title: "Multi-Currency Support",
    description: "Manage both cryptocurrencies and fiat currencies in one seamless platform.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Get notified instantly with our Telegram bot integration for all critical updates and actions.",
  },
]

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight
      const offset = document.getElementById("features-section")?.offsetTop
      if (offset && top > offset) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="features-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.1, delay: index * 0.01 }} // Reduced delay for faster visibility
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 } // Quicker hover transition
              }}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <feature.icon className="w-12 h-12 p-2 bg-blue-100 rounded-full text-blue-600" />
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
