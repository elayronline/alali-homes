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
      className="relative flex min-h-screen items-center overflow-hidden bg-black-brand"
    >
      {/* Subtle gold radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(198, 162, 78, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(198, 162, 78, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-sm border border-gold/20 bg-gold/5 px-4 py-1.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold">
              Corporate Lettings Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-[2.8rem] leading-[1.1] font-light text-white sm:text-[3.8rem]"
          >
            Guaranteed Rent. Zero Voids.
            <br />
            <strong className="font-semibold text-gold">Professionally Managed.</strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg font-body text-[0.95rem] font-light leading-[1.7] text-grey-400"
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
              className="cursor-pointer rounded bg-gold px-7 py-3.5 font-body text-[0.9rem] font-semibold text-black-brand transition-all hover:bg-gold-light"
            >
              Speak To Our Team
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="cursor-pointer rounded border border-white/30 px-7 py-3.5 font-body text-[0.9rem] font-medium text-white transition-all hover:border-gold hover:text-gold"
            >
              How It Works
            </button>
          </motion.div>
        </div>

        {/* Right column — stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-lg border border-white/5 bg-grey-900/80 p-8">
            {/* Gold top accent */}
            <div className="mx-auto -mt-8 mb-6 h-1 w-16 rounded-b bg-gradient-to-r from-gold-dark to-gold" />

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-body text-[0.8rem] font-light text-grey-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Currently accepting */}
            <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/5 pt-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-body text-[0.8rem] font-light text-grey-400">
                Currently accepting new properties
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
