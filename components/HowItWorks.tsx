"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

const steps = [
  {
    num: "01",
    title: "Get in Touch",
    desc: "Contact us via the form or phone. Tell us about your property: location, type, bedrooms, HMO licence if it has one, and current situation. No commitment at this stage.",
    detail:
      "What we need: basic property details and what you’d like from your property.",
  },
  {
    num: "02",
    title: "We Review & Propose",
    desc: "We assess your property and come back to you with a written guaranteed rent offer and the proposed lease terms.",
    detail:
      "What you’ll receive: your monthly rent, the lease length, the break and notice terms, and a summary of what we manage.",
  },
  {
    num: "03",
    title: "Lease & Handover",
    desc: "Once terms are agreed, we sign the corporate lease, agree any compliance works, and take on the management. Your guaranteed rent starts on the date in the lease.",
    detail:
      "What happens next: we confirm the property is ready, help bring it to standard where needed, and agree your first rent date.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="eyebrow eyebrow-center">The Process</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem]">
            Three Steps to <strong className="gold-text">Guaranteed Rent</strong>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* connecting line on desktop */}
          <div className="hairline absolute top-7 right-[16%] left-[16%] hidden lg:block" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex h-full flex-col"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-[0_12px_30px_-12px_rgba(198,162,78,0.8)]">
                  <span className="numeral text-[0.95rem] tracking-[0.1em] text-white">{step.num}</span>
                </div>
                <div className="card mt-6 flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-[1.15rem] font-semibold text-charcoal">{step.title}</h3>
                  <p className="mt-3 mb-5 font-body text-[0.9rem] font-light leading-relaxed text-grey-600">{step.desc}</p>
                  <p className="mt-auto border-t border-gold/15 pt-4 font-body text-[0.82rem] font-light italic leading-relaxed text-grey-500">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button onClick={() => scrollToSection("contact")} className="btn btn-gold btn-arrow">
            Get Started
          </button>
          <p className="mt-4 font-body text-[0.8rem] font-light text-grey-500">
            No commitment. We&apos;ll be in touch to talk it through.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
