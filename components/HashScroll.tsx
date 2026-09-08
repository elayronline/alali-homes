"use client"

import { useEffect } from "react"
import { scrollToSection } from "@/lib/smoothScroll"

/**
 * Lands the visitor on the right section when the homepage is opened with a hash
 * (e.g. arriving from an area page via /#areas or /#contact). The browser's native
 * hash jump can fire before the page has laid out, so we scroll again once mounted.
 */
export function HashScroll() {
  useEffect(() => {
    const go = () => {
      const id = window.location.hash.replace(/^#/, "")
      if (!id) return
      // "instant", not "auto": auto defers to the global scroll-behavior CSS (smooth),
      // and a smooth scroll requested this early on load never runs.
      const jump = () => scrollToSection(id, "instant")
      jump()
      // Fonts/animations can shift layout in the first moments; settle again.
      window.setTimeout(jump, 150)
      window.setTimeout(jump, 600)
    }
    go()
    window.addEventListener("hashchange", go)
    return () => window.removeEventListener("hashchange", go)
  }, [])
  return null
}
