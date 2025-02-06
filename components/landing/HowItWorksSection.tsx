"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LogIn, FileText, BarChart } from "lucide-react"

const steps = [
  { icon: LogIn, title: "Log in and connect your account", description: "Securely access your personalized dashboard" },
  {
    icon: FileText,
    title: "Record your transactions manually",
    description: "Easily input and categorize your crypto transactions",
  },
  {
    icon: BarChart,
    title: "Generate reports",
    description: "Track profit/loss and manage expenses with comprehensive reports",
  },
]

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight
      const offset = document.getElementById("how-it-works-section")?.offsetTop
      if (offset && top > offset) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="how-it-works-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <ul className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }} // Faster duration and reduced delay
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-900">{`Step ${index + 1}`}</p>
                </div>
                <div className="mt-4 w-36 mx-auto">
                  <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
