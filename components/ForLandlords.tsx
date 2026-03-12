"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

const painPoints = [
  "Months of void periods eating into your returns?",
  "Chasing tenants for late or missed rent?",
  "Unexpected maintenance calls at all hours?",
  "Navigating ever-changing compliance regulations?",
  "Tired of the hassle but don\u2019t want to sell?",
]

const benefits = [
  {
    title: "Guaranteed Monthly Rent",
    desc: "Paid whether the property is occupied or not.",
  },
  {
    title: "Full Property Management",
    desc: "Tenants, maintenance, check-ins, emergencies.",
  },
  {
    title: "Compliance Covered",
    desc: "Gas safety, EICR, EPC, smoke/CO alarms.",
  },
  {
    title: "Flexible Terms",
    desc: "1\u20135 year agreements, clear terms, no hidden fees.",
  },
  {
    title: "Property Protection",
    desc: "Regular inspections, professional cleaning, condition guarantee.",
  },
]

export function ForLandlords() {
  return (
    <section id="landlords" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark"
        >
          For Landlords
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 font-display text-[1.6rem] leading-tight font-light text-charcoal sm:text-[2rem] md:text-[2.6rem]"
        >
          Your Property. Our Responsibility.{" "}
          <strong className="font-semibold text-gold">Your Guaranteed Rent.</strong>
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Pain points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-semibold text-charcoal">Sound Familiar?</h3>
            <div className="mt-6 space-y-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gold/30 bg-gold/5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-gold"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-body text-[0.92rem] font-light leading-relaxed text-grey-600">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-body text-[0.95rem] font-medium text-charcoal">
              If any of this sounds like you, it&apos;s time to talk to Alali Homes.
            </p>
            {/* CTA (#5) */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => scrollToSection("contact")}
              className="mt-6 cursor-pointer rounded-sm bg-gold px-6 py-3 font-body text-[0.88rem] font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Submit Your Property
            </motion.button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-lg border border-grey-200 bg-white p-4 pl-5 transition-all duration-200 sm:p-5 sm:pl-6 md:hover:-translate-y-0.5 md:hover:shadow-md"
                style={{ borderLeft: "3px solid var(--gold)" }}
              >
                <h4 className="font-display text-[0.95rem] font-semibold text-charcoal">
                  {b.title}
                </h4>
                <p className="mt-1 font-body text-[0.85rem] font-light text-grey-600">{b.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
