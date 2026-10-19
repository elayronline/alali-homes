/**
 * Homepage FAQs. The FAQ component renders these and the homepage FAQPage schema is built
 * from the same list, so the two can never drift apart.
 */

export interface FAQItem {
  question: string
  answer: string
}

export const landlordFAQs: FAQItem[] = [
  {
    question: "What does your fee cover?",
    answer:
      "One fee covers the full service. We keep your property occupied with vetted working professionals, and handle every changeover in between: check-ins and check-outs, professional cleans and inspections, plus maintenance, compliance tracking and your landlord portal. It is a 15% share of the rent your occupants pay, and the other 85% is paid to you every month with a written statement. Because our fee is a share of what your property earns, we only do well when you do.",
  },
  {
    question: "What is the income floor?",
    answer:
      "If your payouts across a quarter come to less than 60% of the long-term market rent for your property, we reduce or waive our fee for that quarter to make up the difference, up to the full value of our fee. The market rent figure and the conditions are agreed in writing before you sign, and the floor applies from your second quarter, once the property is fully set up.",
  },
  {
    question: "What happens if the property is empty for a while?",
    answer:
      "Your income for that month is lower, and so is ours, because our fee is a share of what the property earns. That is why we only take on properties we expect to keep occupied, and why the income floor protects you across each quarter.",
  },
  {
    question: "How can I see what my property is earning?",
    answer:
      "Through your landlord portal. It shows what your property earned each month, our fee and your payout, alongside your written monthly statement.",
  },
  {
    question: "Is this Airbnb or holiday letting?",
    answer:
      "No. We do not take holiday bookings. Every occupant is a working professional who has passed our vetting process. No parties, no unknown occupants, and the property is inspected and professionally cleaned throughout.",
  },
  {
    question: "Will you change or damage my property?",
    answer:
      "Any changes are agreed in writing before we start. We conduct regular inspections and professional cleans, and return the property to the agreed standard at the end of the agreement.",
  },
  {
    question: "Who will stay in my property?",
    answer:
      "Working professionals only. Every occupant goes through our vetting process before they are approved, whether they are relocating for work, on a contract placement, or with a company sending staff to the area. We inspect the property regularly throughout.",
  },
  {
    question: "Who is responsible for compliance?",
    answer:
      "As the owner, you remain legally responsible for safety certificates such as gas safety, the EICR and the EPC. We arrange and track them for you, and any works needed before we start are agreed in writing before you sign.",
  },
  {
    question: "Where do you operate?",
    answer:
      "London and the South East. That means all 32 London boroughs plus Kent, Surrey, East and West Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire. Each area has its own page on this site.",
  },
  {
    question: "What if I want my property back?",
    answer:
      "Every agreement has a clear notice period. We walk you through the exit terms before you commit.",
  },
]

export const agentFAQs: FAQItem[] = [
  {
    question: "Do you compete with letting agents?",
    answer:
      "No. We don’t list on Rightmove or take on conventional long-term lets. We work with agents to offer landlords a fully managed alternative for professional occupants, and you earn a referral fee for every property we take on.",
  },
  {
    question: "How does the referral work?",
    answer:
      "You introduce the landlord. We handle everything from assessment to onboarding. Referral terms are agreed in writing upfront. Agents are expected to disclose any referral arrangement to their client in line with the Estate Agents Act 1979.",
  },
]
