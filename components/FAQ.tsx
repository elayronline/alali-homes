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
      "We sign a legally binding lease with you and pay an agreed rent every month for the contract term. This obligation sits with Alali Homes Ltd regardless of occupancy.",
  },
  {
    question: "What happens if the property sits empty?",
    answer: "You still get paid. That’s the entire point. The void risk is ours, not yours.",
  },
  {
    question: "Is this Airbnb or holiday letting?",
    answer:
      "No. We do not take holiday bookings. Every guest is a working professional who has passed our vetting process. No parties, no unknown guests, and the property is inspected and professionally cleaned throughout the term.",
  },
  {
    question: "Will you change or damage my property?",
    answer:
      "Any changes are agreed in writing before we start. We conduct regular inspections, professional cleans, and return the property to the agreed standard at the end of the term.",
  },
  {
    question: "Who will stay in my property?",
    answer:
      "Working professionals only. Every guest goes through our vetting process before they are approved, whether they are relocating for work, on a contract placement, or with a company sending staff to the area. We inspect the property regularly through the term.",
  },
  {
    question: "Who is responsible for compliance works?",
    answer:
      "If compliance works are needed before we take the property on, responsibilities are agreed in writing before signing.",
  },
  {
    question: "Where do you operate?",
    answer:
      "London and the South East. That means all 32 London boroughs plus Kent, Surrey, East and West Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire. Each area has its own page on this site.",
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
      "No. We’re an operator, not a letting agent. We don’t list on Rightmove or compete for management fees. We partner with agents to offer an alternative for landlords who want guaranteed income.",
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
    if (contentRef.current) setHeight(contentRef.current.scrollHeight)
  }, [open])

  return (
    <div className="border-b border-gold/15">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className={`font-display text-[0.98rem] font-semibold transition-colors ${open ? "text-gold-deep" : "text-charcoal"}`}>
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open ? "rotate-45 border-gold bg-gold text-white" : "border-gold/30 text-gold"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? `${height}px` : "0px" }}>
        <p className="pr-14 pb-6 font-body text-[0.9rem] font-light leading-[1.8] text-grey-600">{item.answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const left = [...landlordFAQs.slice(0, 3), ...agentFAQs]
  const right = landlordFAQs.slice(3)

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <span className="eyebrow">Frequently Asked</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem]">
            Questions landlords &amp; <strong className="gold-text">agents ask us</strong>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-x-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-gold/15">
            {left.map((faq) => (
              <FAQAccordion key={faq.question} item={faq} />
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border-t border-gold/15">
            {right.map((faq) => (
              <FAQAccordion key={faq.question} item={faq} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
