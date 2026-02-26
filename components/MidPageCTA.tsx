"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

export function MidPageCTA() {
  return (
    <section className="bg-gold-pale/40 px-4 py-14 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <div>
          <h3 className="font-display text-[1.3rem] font-semibold text-charcoal sm:text-[1.5rem]">
            Get a guaranteed rent figure within{" "}
            <span className="text-gold">48 hours</span>
          </h3>
          <p className="mt-1 font-body text-[0.88rem] font-light text-grey-600">
            No commitment, no fees, no obligation. Just a straightforward conversation.
          </p>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="shrink-0 cursor-pointer rounded-sm bg-gold px-7 py-3.5 font-body text-[0.88rem] font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg focus:ring-2 focus:ring-gold/30 focus:ring-offset-2"
        >
          Get My Quote
        </button>
      </motion.div>
    </section>
  )
}
