"use client"

import { motion } from "framer-motion"

const values = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Guaranteed Monthly Rent",
    description: "A fixed rent paid to you every month for the full term of the lease, whether the property is occupied or not.",
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: "Full Property Management",
    description: "Maintenance, inspections, compliance tracking and day-to-day operations, all handled by us for the length of the lease.",
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a4 4 0 018 0v2M12 12v4" />
      </svg>
    ),
    title: "3–5 Year Corporate Leases",
    description: "Your tenant is Alali Homes Ltd. One company, one lease, one rent payment, with the terms agreed in writing upfront.",
  },
  {
    num: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    title: "Professionally Maintained",
    description: "Regular inspections and dedicated support for tenants, with your property kept to a professional standard throughout the lease.",
  },
]

export function ValueProposition() {
  return (
    <section id="value" aria-label="Why Alali Homes" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Why Alali Homes</span>
            <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem]">
              Built for landlords who want the rent,{" "}
              <strong className="gold-text">not the job.</strong>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl font-body text-[0.98rem] font-light leading-[1.85] text-grey-600 lg:justify-self-end"
          >
            Guaranteed rent on a corporate lease, full property management, and a property looked
            after to a professional standard from the first day of the lease to the last. No voids,
            no arrears chasing, no calls about repairs.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="card group relative p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-pale text-gold-deep transition-colors group-hover:bg-gold group-hover:text-white">
                  {item.icon}
                </div>
                <span className="numeral text-[0.8rem] tracking-[0.2em] text-gold/60">{item.num}</span>
              </div>
              <h3 className="mt-7 font-display text-[1.05rem] font-semibold leading-snug text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[0.88rem] font-light leading-relaxed text-grey-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
