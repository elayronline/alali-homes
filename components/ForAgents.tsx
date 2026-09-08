"use client"

import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"

const cards = [
  {
    num: "01",
    title: "Referral Income",
    desc: "Earn a referral fee for every property successfully onboarded. Terms agreed upfront, in writing.",
  },
  {
    num: "02",
    title: "Solve Problem Stock",
    desc: "Hard-to-let, high-void, or landlord-frustrated properties — we take them on and guarantee rent.",
  },
  {
    num: "03",
    title: "We’re Not Competitors",
    desc: "We’re an operator, not a letting agent. We don’t list on portals or compete for your management fees.",
  },
  {
    num: "04",
    title: "Reputation Protected",
    desc: "Professional, compliant, insured. Your landlord gets a premium service — your name stays clean.",
  },
]

export function ForAgents() {
  return (
    <section id="agents" className="dark-glow grain relative px-4 py-20 text-white sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow eyebrow-light">For Agents</span>
            <h2 className="display mt-5 text-[1.9rem] !text-white sm:text-[2.4rem] md:text-[2.9rem]">
              Earn Referral Fees. <strong className="gold-text">Solve Problem Stock.</strong>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl font-body text-[0.98rem] font-light leading-[1.85] text-white/60"
          >
            Not every landlord wants traditional letting. Some want guaranteed income. Others need a
            hands-off solution for hard-to-let stock. That&apos;s where we come in — and you earn for
            every successful referral.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="card-dark group p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="numeral gold-text text-[1.6rem]">{card.num}</span>
                <span className="h-px w-10 bg-gold/30 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
              </div>
              <h3 className="mt-6 font-display text-[1.15rem] font-semibold text-white">{card.title}</h3>
              <p className="mt-3 font-body text-[0.9rem] font-light leading-relaxed text-white/60">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <button onClick={() => scrollToSection("contact")} className="btn btn-outline-light btn-arrow">
            Refer a Property &amp; Earn
          </button>
          <p className="max-w-2xl font-body text-[0.78rem] font-light leading-relaxed text-white/40">
            Terms agreed in writing upfront. No hidden obligations. Agents are expected to disclose any
            referral arrangement to their client in line with the Estate Agents Act 1979.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
