"use client"

import { motion } from "framer-motion"

const badges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
    title: "Companies House Registered",
    subtitle: "Alali Homes Ltd · No. 17095100",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    ),
    title: "Written Agreements",
    subtitle: "Fee, income floor and notice agreed upfront",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
    title: "Landlord Portal",
    subtitle: "Every month's income and payout reported",
  },
]

export function TrustCompliance() {
  return (
    <section id="about" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow eyebrow-center">About Alali Homes</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem]">
            Registered, Transparent &amp; <strong className="gold-text">Accountable</strong>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-[0.98rem] font-light leading-[1.85] text-grey-600">
            Alali Homes Ltd is a UK-registered property management company. We offer landlords a
            better model: we place vetted professional occupants, manage everything to a professional
            standard, and share in what your property earns, so we only do well when you do.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card flex items-center gap-5 p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-pale text-gold-deep">
                {badge.icon}
              </div>
              <div>
                <h3 className="font-display text-[0.95rem] font-semibold text-charcoal">{badge.title}</h3>
                <p className="mt-1 font-body text-[0.8rem] font-light text-grey-600">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-[0.78rem] tracking-wide text-grey-500">
          Registered office: 86-90 Paul Street, London, EC2A 4NE
        </p>
      </div>
    </section>
  )
}
