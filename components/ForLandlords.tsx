"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

const painPoints = [
  "Chasing tenants for late or missed rent?",
  "Unexpected maintenance calls at all hours?",
  "Navigating ever-changing compliance regulations?",
  "Tired of the hassle but don’t want to sell?",
  "Losing rent to void periods between tenancies?",
]

const benefits = [
  { title: "Guaranteed Rent", desc: "A fixed rent every month for the full term, occupied or not." },
  { title: "3–5 Year Corporate Lease", desc: "Alali Homes Ltd is your tenant. One lease, one payment, one contact." },
  { title: "Zero Voids, Zero Arrears", desc: "The risk of an empty month or a missed payment sits with us." },
  { title: "Full Property Management", desc: "Maintenance, repairs coordination, inspections and day-to-day running." },
  { title: "Dedicated Tenant Support", desc: "Tenants come to us, not you, for anything they need." },
  { title: "Professionally Maintained", desc: "Regular inspections and the property returned in the agreed condition." },
]

export function ForLandlords() {
  return (
    <section id="landlords" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="eyebrow">For Landlords</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem]">
            Your Property. Our Lease.{" "}
            <strong className="gold-text">Your Rent, Every Month.</strong>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Pain points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-semibold text-charcoal">Sound familiar?</h3>
            <ul className="mt-6 space-y-4">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold-pale/60">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-gold-deep">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="font-body text-[0.95rem] font-light leading-relaxed text-grey-600">{point}</p>
                </li>
              ))}
            </ul>
            <p className="mt-9 font-body text-[0.98rem] font-medium text-charcoal">
              If any of this sounds like you, it&apos;s time to talk to Alali Homes.
            </p>
            <button onClick={() => scrollToSection("contact")} className="btn btn-gold btn-arrow mt-6">
              Get a Guaranteed Rent Offer
            </button>
          </motion.div>

          {/* Benefits ledger */}
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="divide-y divide-gold/15 border-y border-gold/15"
          >
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 px-2 py-5 transition-colors hover:bg-cream sm:grid-cols-[4rem_1fr] sm:px-4"
              >
                <span className="numeral text-[0.85rem] tracking-[0.15em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-[1.02rem] font-semibold text-charcoal transition-colors group-hover:text-gold-dark">
                    {b.title}
                  </h4>
                  <p className="mt-1 font-body text-[0.88rem] font-light text-grey-600">{b.desc}</p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
