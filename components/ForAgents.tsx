"use client"

import { motion } from "framer-motion"

const cards = [
  {
    num: "01",
    title: "Referral Income",
    desc: "Earn a referral fee for every property successfully onboarded. Terms agreed upfront, in writing.",
  },
  {
    num: "02",
    title: "Solve Problem Stock",
    desc: "Hard-to-let, high-void, or landlord-frustrated properties \u2014 we take them on and guarantee rent.",
  },
  {
    num: "03",
    title: "We\u2019re Not Competitors",
    desc: "We\u2019re an operator, not a letting agent. We don\u2019t list on portals or compete for your management fees.",
  },
  {
    num: "04",
    title: "Reputation Protected",
    desc: "Professional, compliant, insured. Your landlord gets a premium service \u2014 your name stays clean.",
  },
]

export function ForAgents() {
  return (
    <section id="agents" className="bg-charcoal px-4 py-20 sm:px-6 sm:py-28">
      {/* Subtle radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(198, 162, 78, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold-light"
        >
          For Agents
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 max-w-2xl font-display text-[2rem] leading-tight font-light text-white sm:text-[2.6rem]"
        >
          A Reliable Partner{" "}
          <strong className="font-semibold text-gold">For Your Landlord Clients</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl font-body text-[0.92rem] font-light leading-relaxed text-white/60"
        >
          Not every landlord wants traditional letting. Some want guaranteed income. Others need a
          corporate solution for hard-to-let stock. That&apos;s where we come in.
        </motion.p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-lg border border-white/8 bg-white/5 p-7 transition-all duration-300 hover:border-gold/25 hover:bg-white/8"
            >
              <div className="mb-5 h-0.5 w-8 bg-gold/30 transition-all duration-300 group-hover:w-full group-hover:bg-gold" />
              <span className="font-display text-2xl font-bold text-gold/30">{card.num}</span>
              <h3 className="mt-2 font-display text-[1.1rem] font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-[0.88rem] font-light leading-relaxed text-white/60">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
