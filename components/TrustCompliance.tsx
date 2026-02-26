"use client"

import { motion } from "framer-motion"

const badges = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Companies House Registered",
    subtitle: "Alali Homes Ltd",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "HMRC AML Supervised",
    subtitle: "Anti-Money Laundering",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "ICO Registered",
    subtitle: "Data Protection Act 2018",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
    title: "Property Redress Scheme",
    subtitle: "Dispute Resolution",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Public Liability Insurance",
    subtitle: "Fully Covered",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a4 4 0 00-8 0v2" />
      </svg>
    ),
    title: "Professional Indemnity",
    subtitle: "Insured Operations",
  },
]

export function TrustCompliance() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold"
        >
          About Alali Homes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center font-display text-[2.4rem] leading-tight font-normal text-charcoal sm:text-[2.8rem]"
        >
          Fully Registered, Insured &{" "}
          <strong className="font-semibold text-gold">Compliant</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-center font-body text-[0.95rem] font-light leading-relaxed text-grey-600"
        >
          Alali Homes Ltd is a UK-registered corporate lettings and property management company. We
          offer landlords a better model: we lease your property, pay guaranteed rent, and manage
          everything to a professional standard.
        </motion.p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-lg border border-grey-200 bg-grey-50 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black-brand text-gold">
                {badge.icon}
              </div>
              <div>
                <h3 className="font-body text-[0.9rem] font-medium text-charcoal">{badge.title}</h3>
                <p className="mt-0.5 font-body text-[0.8rem] font-light text-grey-600">
                  {badge.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
