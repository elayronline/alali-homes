"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const landlordFAQs: FAQItem[] = [
  {
    question: "How is the rent actually guaranteed?",
    answer:
      "We sign a legally binding corporate lease to pay an agreed rent every month for the contract term. This obligation sits with Alali Homes Ltd regardless of occupancy.",
  },
  {
    question: "What happens if the property sits empty?",
    answer:
      "You still get paid. That\u2019s the entire point. The void risk is ours, not yours.",
  },
  {
    question: "Will you change or damage my property?",
    answer:
      "Any changes are agreed in writing before we start. We conduct regular inspections, professional cleans, and return the property to the agreed standard at the end of the term.",
  },
  {
    question: "What type of tenants will live in my property?",
    answer:
      "Corporate clients, contractors, and vetted working professionals. Every occupant is referenced and approved. We operate to a far higher standard than standard letting.",
  },
  {
    question: "Do I need to pay anything upfront?",
    answer:
      "No. There are no upfront fees to landlords. If compliance works are needed, we discuss responsibilities before signing.",
  },
  {
    question: "What if I want my property back early?",
    answer:
      "Break clauses and notice periods are built into every agreement. We walk you through exit terms before you commit.",
  },
]

const agentFAQs: FAQItem[] = [
  {
    question: "Do you compete with letting agents?",
    answer:
      "No. We\u2019re an operator, not a letting agent. We don\u2019t list on Rightmove or compete for management fees. We partner with agents to offer an alternative for landlords who want guaranteed income.",
  },
  {
    question: "How does the referral work?",
    answer:
      "You introduce the landlord. We handle everything from assessment to onboarding. Referral terms are agreed in writing upfront. Agents are expected to disclose any referral arrangement to their client in line with the Estate Agents Act 1979.",
  },
]

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [open])

  return (
    <div
      className={`rounded-lg border transition-all duration-200 ${
        open
          ? "border-gold/25 bg-gold-pale/30 shadow-sm"
          : "border-grey-200 bg-white hover:border-gold/15"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 font-display text-[0.95rem] font-semibold text-charcoal">
          &ldquo;{item.question}&rdquo;
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-gold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {/* Fixed: auto-height instead of hardcoded 200px (#3) */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <p className="px-5 pb-5 font-body text-[0.88rem] font-light leading-relaxed text-grey-600">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="bg-grey-50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold-dark"
        >
          Frequently Asked
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center font-display text-[2rem] leading-tight font-light text-charcoal sm:text-[2.6rem]"
        >
          Questions Landlords &{" "}
          <strong className="font-semibold text-gold">Agents Ask Us</strong>
        </motion.h2>

        <div className="mt-14 grid gap-3 lg:grid-cols-2 lg:gap-4">
          <div className="space-y-3">
            {landlordFAQs.slice(0, 3).map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FAQAccordion item={faq} />
              </motion.div>
            ))}
            {agentFAQs.map((faq, i) => (
              <motion.div
                key={`agent-${i}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.05 }}
              >
                <FAQAccordion item={faq} />
              </motion.div>
            ))}
          </div>
          <div className="space-y-3">
            {landlordFAQs.slice(3).map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FAQAccordion item={faq} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
