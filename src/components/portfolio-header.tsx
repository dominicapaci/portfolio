"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation" 
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getNavItems, getPersonalInfo } from "@/lib/data"

export function PortfolioHeader() {
  const pathname = usePathname() 
  const router = useRouter() 
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [headerHeight, setHeaderHeight] = useState(0)

  const allNavItems = getNavItems()
  const navItems = allNavItems.filter((item) => item.href !== "/")
  const personalInfo = getPersonalInfo()

  const isProjectPage = pathname?.startsWith('/projects/')


   useEffect(() => {
    if (isProjectPage) {
      setActiveSection("projects")
    }
  }, [pathname, isProjectPage])

  useEffect(() => {

    if (isProjectPage) return

    const header = document.querySelector("header")
    if (header) {
      setHeaderHeight(header.offsetHeight)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollPercentage > 99) {
        setActiveSection("projects");
        return; // Very important! This prevents the other checks from running
      }

      // Determine active section based on scroll position
      const sections = navItems.filter((item) => item.href.startsWith("#")).map((item) => item.href.substring(1))

      let foundActiveSection = false
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            foundActiveSection = true
            break
          }
        }
      }

      // If no section in view or scrolled to top, set About as active
      if (!foundActiveSection || window.scrollY < 100) {
        setActiveSection("about")
      }
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() 

    const handleResize = () => {
      const header = document.querySelector("header")
      if (header) {
        setHeaderHeight(header.offsetHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = "" 
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (href.startsWith("#")) {
      const sectionId = href.substring(1)
      if (isProjectPage) {
        router.push(`/#${sectionId}`)
        return
      }

      setActiveSection(sectionId)
      if (sectionId === "about") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      const element = document.getElementById(sectionId)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerHeight - 10 
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <header
    className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-200 py-4",
      scrolled 
        ? mobileMenuOpen
          ? "bg-zinc-900 py-2" // When scrolled AND mobile menu open: solid background, no blur
          : "bg-zinc-900/90 backdrop-blur-md shadow-md py-2" // When scrolled but menu closed: normal behavior
        : mobileMenuOpen
          ? "bg-zinc-900" // When at top with menu open: solid background
          : "bg-transparent" // When at top with menu closed: transparent
    )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#about" className="flex items-center group" onClick={(e) => handleNavClick("#about", e)}>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-zinc-400 text-sm ml-2 hidden sm:inline-block transition-all duration-300 group-hover:text-zinc-300">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Nav*/}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const sectionId = item.href.startsWith("#") ? item.href.substring(1) : item.href
            const isActive = activeSection === sectionId

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm relative group transition-all duration-300",
                  isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white",
                )}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-cyan-500/0 rounded-md group-hover:bg-cyan-500/10 transition-all duration-300"></span>
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4/5",
                    isActive && "w-4/5",
                  )}
                ></span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-300 relative overflow-hidden group"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="relative z-10">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</span>
          <span className="absolute inset-0 scale-0 rounded-full bg-zinc-700/50 group-hover:scale-100 transition-transform duration-300"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-500",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        )}
        
      >
        {/* Mobile Close button */}
        <button
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 transition-colors duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => {
            const sectionId = item.href.startsWith("#") ? item.href.substring(1) : item.href
            const isActive = activeSection === sectionId

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-4 text-lg border-b border-zinc-800 relative group transition-all duration-300",
                  isActive ? "text-cyan-400 border-cyan-400/30" : "text-zinc-300 hover:text-white hover:pl-5",
                )}
                onClick={(e) => handleNavClick(item.href, e)}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1/2 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 transition-all duration-300 group-hover:w-1",
                    isActive && "w-1",
                  )}
                ></span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
