"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Get in Touch",
    desc: "Contact us via the form, WhatsApp, or phone. Tell us about your property \u2014 location, type, bedrooms, and current situation. No commitment at this stage.",
    detail:
      "What we need: basic property details and what you\u2019re looking for \u2014 guaranteed rent, full management, or both.",
  },
  {
    num: "02",
    title: "We Review & Propose",
    desc: "We\u2019ll assess your property and come back within 48 hours with a guaranteed rent figure and a clear breakdown of how the arrangement works.",
    detail:
      "What you\u2019ll receive: a written rent offer, proposed agreement length, and a summary of what we manage on your behalf.",
  },
  {
    num: "03",
    title: "Agreement & Handover",
    desc: "Once terms are agreed, we sign the contract, arrange any compliance works, and take over the property. Your guaranteed rent starts from the agreed date.",
    detail:
      "What happens next: we furnish if applicable, market to our corporate tenant base, and manage from day one. You get paid monthly like clockwork.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold"
        >
          The Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center font-display text-[2.4rem] leading-tight font-normal text-charcoal sm:text-[2.8rem]"
        >
          Three Steps to <strong className="font-semibold text-gold">Guaranteed Rent</strong>
        </motion.h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="font-display text-[4rem] font-semibold leading-none text-gold/15">
                {step.num}
              </span>
              <h3 className="mt-2 font-display text-[1.3rem] font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-[0.9rem] font-light leading-relaxed text-grey-600">
                {step.desc}
              </p>
              <p className="mt-4 font-body text-[0.85rem] font-light italic leading-relaxed text-grey-400">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
