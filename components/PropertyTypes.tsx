"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const types = [
  {
    num: "01",
    title: "Licensed HMOs",
    desc: "Existing licensed HMOs taken on as they are, managed in line with the licence conditions, with a guaranteed rent for the whole lease.",
    href: "/hmo-guaranteed-rent",
    cta: "HMO guaranteed rent",
  },
  {
    num: "02",
    title: "2–4 Bed Properties",
    desc: "Houses and flats with two to four bedrooms, leased on a 3–5 year corporate let with full property management included.",
    href: "/corporate-lets",
    cta: "Corporate lets",
  },
  {
    num: "03",
    title: "1-Bed Self-Contained Flats",
    desc: "One-bedroom self-contained flats with their own kitchen and bathroom, on the same guaranteed rent terms.",
    href: "/corporate-lets",
    cta: "Corporate lets",
  },
]

export function PropertyTypes() {
  return (
    <section id="properties" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">What We Take On</span>
            <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem]">
              The properties we lease{" "}
              <strong className="gold-text">on guaranteed rent</strong>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl font-body text-[0.98rem] font-light leading-[1.85] text-grey-600 lg:justify-self-end"
          >
            We assess every property individually across London and the South East and make a
            written rent offer where it is a good fit.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="card group flex flex-col p-7 sm:p-8"
            >
              <span className="numeral gold-text text-[1.6rem]">{t.num}</span>
              <h3 className="mt-6 font-display text-[1.15rem] font-semibold text-charcoal">{t.title}</h3>
              <p className="mt-3 mb-6 font-body text-[0.9rem] font-light leading-relaxed text-grey-600">{t.desc}</p>
              <Link
                href={t.href}
                className="mt-auto font-body text-[0.82rem] font-medium text-gold-deep transition-colors hover:text-gold"
              >
                {t.cta} &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
