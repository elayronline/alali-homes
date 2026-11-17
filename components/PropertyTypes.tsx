"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const types = [
  {
    num: "01",
    title: "HMOs of Any Size",
    desc: "Licensed HMOs, from smaller shared houses to large HMOs, taken on as they are licensed and managed in line with the licence conditions.",
    href: "/hmo-guaranteed-rent",
    cta: "HMO guaranteed rent",
  },
  {
    num: "02",
    title: "Studios to 4+ Bed Homes",
    desc: "Studios, 1-bed flats, 2 and 3 bed houses and flats, and 4+ bed family homes, leased on a 3–5 year corporate let with full management.",
    href: "/corporate-lets",
    cta: "Corporate lets",
  },
  {
    num: "03",
    title: "Blocks of Flats",
    desc: "Whole blocks of flats taken on as one lease, with one fixed rent every month and the management of every unit handled for you.",
    href: "/corporate-lets",
    cta: "Corporate lets",
  },
  {
    num: "04",
    title: "Converted Buildings",
    desc: "Converted buildings such as former care homes, hotels and offices, leased on the same guaranteed rent terms.",
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
            From a single studio to a whole block, we assess every property individually and make a
            written rent offer where it is a good fit.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
