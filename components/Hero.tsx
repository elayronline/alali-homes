"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

const stats = [
  { value: "100%", label: "Rent Guaranteed" },
  { value: "0", label: "Void Periods" },
  { value: "1–5yr", label: "Agreement Terms" },
  { value: "24/7", label: "Management" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Subtle warm gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(198, 162, 78, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(198, 162, 78, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-gold/25 bg-gold-pale/50 px-5 py-1.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold-dark">
              Corporate Lettings Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 font-display text-[2.6rem] leading-[1.1] font-light text-charcoal sm:text-[3.6rem]"
          >
            Guaranteed Rent.
            <br />
            Zero Voids.
            <br />
            <strong className="font-semibold text-gold">Professionally Managed.</strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg font-body text-[0.95rem] font-light leading-[1.8] text-grey-600"
          >
            We take on properties under corporate lets and guaranteed rent agreements — managing
            everything so landlords receive reliable income, every month, without the hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer rounded-sm bg-gold px-7 py-3.5 font-body text-[0.9rem] font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg focus:ring-2 focus:ring-gold/30 focus:ring-offset-2"
            >
              Get a Rent Quote
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="cursor-pointer rounded-sm border border-charcoal/20 px-7 py-3.5 font-body text-[0.9rem] font-medium text-charcoal transition-all hover:border-gold hover:text-gold focus:ring-2 focus:ring-gold/30 focus:ring-offset-2"
            >
              How It Works
            </button>
          </motion.div>

          {/* Trust micro-strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-4 font-body text-[0.75rem] text-grey-400"
          >
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              UK registered &amp; insured
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden="true">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              No upfront fees
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              48-hour response
            </span>
          </motion.div>
        </div>

        {/* Right column — stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-xl border border-grey-200 bg-white p-8 shadow-lg shadow-black/5">
            {/* Gold top accent */}
            <div className="mx-auto -mt-8 mb-6 h-1 w-16 rounded-b bg-gradient-to-r from-gold-dark to-gold" />

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-body text-[0.8rem] font-light text-grey-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Currently accepting */}
            <div className="mt-8 flex items-center justify-center gap-2 border-t border-grey-200 pt-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-body text-[0.8rem] font-light text-grey-600">
                Currently accepting new properties
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
