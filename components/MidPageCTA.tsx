"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

export function MidPageCTA() {
  return (
    <section className="gold-band grain px-4 py-14 sm:px-6 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-7 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <div>
          <h3 className="display text-[1.6rem] !text-charcoal sm:text-[2rem]">
            Get a guaranteed rent figure within <strong>48 hours</strong>
          </h3>
          <p className="mt-2 font-body text-[0.92rem] text-charcoal/70">
            No commitment, no obligation. Just a straightforward conversation.
          </p>
        </div>
        <button onClick={() => scrollToSection("contact")} className="btn btn-dark btn-arrow shrink-0">
          Get My Quote
        </button>
      </motion.div>
    </section>
  )
}
