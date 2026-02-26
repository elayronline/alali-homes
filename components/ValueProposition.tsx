"use client"

import { motion } from "framer-motion"

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Guaranteed Rent",
    description:
      "Paid on time, every month. No voids, no missed payments. The risk sits with us.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: "Hands-Free Management",
    description:
      "We handle everything — tenant sourcing, maintenance, compliance, and day-to-day operations.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a4 4 0 00-8 0v2" />
        <path d="M12 14v2" />
      </svg>
    ),
    title: "Professional Tenants",
    description:
      "Your property is let to vetted corporate clients, contractors, and working professionals.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    title: "Property Returned in Condition",
    description:
      "Regular inspections, professional cleans, and a contractual commitment to maintain standards.",
  },
]

export function ValueProposition() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold"
        >
          Why Alali Homes
        </motion.p>

        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`px-6 py-8 ${i < values.length - 1 ? "lg:border-r lg:border-grey-200" : ""}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded bg-black-brand text-gold">
                {item.icon}
              </div>
              <h3 className="mt-5 font-display text-[1.3rem] font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[0.9rem] font-light leading-relaxed text-grey-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
