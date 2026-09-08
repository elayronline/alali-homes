"use client"

import { useState, useEffect } from "react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed right-6 bottom-22 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-charcoal text-gold shadow-lg shadow-black/20 transition-all duration-300 hover:border-gold hover:bg-black-brand ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M9 14V4M4 8l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
