"use client"

import { useState, useEffect } from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { scrollToSection } from "@/lib/smoothScroll"

const navLinks = [
  { label: "Landlords", href: "landlords" },
  { label: "Agents", href: "agents" },
  { label: "How It Works", href: "process" },
  { label: "About", href: "about" },
  { label: "FAQ", href: "faq" },
]

/**
 * On the homepage: a button that smooth-scrolls to the section.
 * On any other page: a real link to /#section so the browser navigates and lands on it.
 * Sub-pages that have the section themselves (e.g. #contact / #process on area pages)
 * still scroll in place.
 */
function NavItem({
  id,
  onHome,
  onNav,
  className,
  children,
}: {
  id: string
  onHome: boolean
  onNav: (id: string) => void
  className: string
  children: React.ReactNode
}) {
  if (onHome) {
    return (
      <button type="button" onClick={() => onNav(id)} className={className}>
        {children}
      </button>
    )
  }
  // Plain anchor on purpose: a full navigation to /#id is the one thing that
  // reliably lands on the section from every page. Client-side routing with a
  // hash was dropping the first click after load.
  return (
    <a
      href={`/#${id}`}
      className={className}
      onClick={(e) => {
        if (document.getElementById(id)) {
          e.preventDefault()
          onNav(id)
        }
      }}
    >
      {children}
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const onHome = pathname === "/"
  // Light navbar on every page; it only gains blur and a shadow once scrolled.
  const onDark = false

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
        scrolled ? "bg-white/92 shadow-sm" : "bg-white/80"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(198, 162, 78, 0.18)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" onClick={(e) => { if (onHome) { e.preventDefault(); scrollToSection("hero") } }} className="cursor-pointer" aria-label="Alali Homes home">
          <Logo variant={onDark ? "light" : "dark"} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              id={link.href}
              onHome={onHome}
              onNav={handleNav}
              className={`cursor-pointer font-body text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-colors ${
                onDark
                  ? activeSection === link.href ? "text-gold-light" : "text-white/80 hover:text-white"
                  : activeSection === link.href ? "text-gold-deep" : "text-charcoal hover:text-gold-dark"
              }`}
            >
              {link.label}
            </NavItem>
          ))}
          <NavItem
            id="contact"
            onHome={onHome}
            onNav={handleNav}
            className="btn btn-gold !px-6 !py-2.5 !text-[0.78rem] uppercase !tracking-[0.12em]"
          >
            Get In Touch
          </NavItem>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex cursor-pointer flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${onDark ? "bg-white" : "bg-charcoal"} ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${onDark ? "bg-white" : "bg-charcoal"} ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${onDark ? "bg-white" : "bg-charcoal"} ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 border-t border-grey-200 px-6 py-6">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              id={link.href}
              onHome={onHome}
              onNav={handleNav}
              className={`cursor-pointer text-left font-body text-base font-medium uppercase tracking-wide transition-colors hover:text-gold py-1 ${
                activeSection === link.href ? "text-gold" : "text-charcoal"
              }`}
            >
              {link.label}
            </NavItem>
          ))}
          <NavItem
            id="contact"
            onHome={onHome}
            onNav={handleNav}
            className="mt-2 block w-full cursor-pointer rounded-sm bg-gold py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-gold-dark"
          >
            Get In Touch
          </NavItem>
        </div>
      </div>
    </nav>
  )
}
