"use client"

import { useEffect, useState } from "react"
import HeroSection from "../../components/landing/HeroSection"
import FeaturesSection from "../../components/landing/FeaturesSection"
import HowItWorksSection from "../../components/landing/HowItWorksSection"
import BenefitsSection from "../../components/landing/BenefitsSection"
import TestimonialsSection from "../../components/landing/TestimonialsSection"
import CTASection from "../../components/landing/CTASection"
import Footer from "../../components/landing/Footer"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

