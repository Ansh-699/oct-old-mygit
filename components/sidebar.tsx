"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { BarChart2, BarChart3, Contact2, DollarSign, HandCoins, LayoutDashboard, Receipt, Settings, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { useState, useEffect } from "react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Contacts",
    icon: Contact2,
    href: "/contacts",
  },
  {
    title: "Transactions",
    icon: Receipt,
    href: "/transactions",
  },
  {
    title: "Deals",
    icon: HandCoins,
    href: "/deals",
  },
  {
    title: "Expenses",
    icon: DollarSign,
    href: "/expenses",
  },
  {
    title: "Currencies",
    icon: BarChart3,
    href: "/currencies",
  },
  {
    title: "Reports",
    icon: BarChart2,
    href: "/reports",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  if (pathname === "/landing") {
    return null
  }

  return (
    <TooltipProvider>
      <div className={`flex h-screen w-16 flex-col items-center border-r bg-muted/40 py-4 md:w-[240px] ${isDarkMode ? 'dark' : ''}`}>
        <div className="flex h-16 items-center justify-between w-full px-4">
          <h1 className="hidden text-2xl font-bold md:block">Crypto OTC</h1>
          <span className="block text-3xl font-bold md:hidden">C</span>
          <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link href={item.href} className="relative">
                    <Button variant={isActive ? "default" : "ghost"} className="w-full justify-start text-lg transform transition-transform duration-200 hover:scale-105">
                      <item.icon className="h-5 w-5" />
                      <span className="ml-2 hidden md:inline-flex">{item.title}</span>
                    </Button>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 z-[-1] rounded-md bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="md:hidden">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </nav>

        <Button variant="ghost" size="icon" className="mt-auto">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </TooltipProvider>
  )
}
