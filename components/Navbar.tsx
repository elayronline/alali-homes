"use client"

import { useState, useEffect } from "react"
import { Logo } from "./Logo"
import { scrollToSection } from "@/lib/smoothScroll"

const navLinks = [
  { label: "Landlords", href: "landlords" },
  { label: "Agents", href: "agents" },
  { label: "How It Works", href: "process" },
  { label: "About", href: "about" },
  { label: "FAQ", href: "faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = ["landlords", "agents", "process", "about", "faq", "contact"]
      const navHeight = 100
      let current = ""
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= navHeight + 100) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(198, 162, 78, 0.12)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <Logo />
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`cursor-pointer font-body text-[0.82rem] font-medium uppercase tracking-[0.06em] transition-colors hover:text-gold ${
                activeSection === link.href ? "text-gold" : "text-charcoal"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="cursor-pointer rounded-sm bg-gold px-6 py-2.5 font-body text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-white transition-all hover:bg-gold-dark"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex cursor-pointer flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 border-t border-grey-200 px-6 py-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`cursor-pointer text-left font-body text-base font-medium uppercase tracking-wide transition-colors hover:text-gold py-1 ${
                activeSection === link.href ? "text-gold" : "text-charcoal"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-2 w-full cursor-pointer rounded-sm bg-gold py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-gold-dark"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  )
}
