/**
 * Homepage FAQs. The FAQ component renders these and the homepage FAQPage schema is built
 * from the same list, so the two can never drift apart.
 *
 * Copy rules: never describe who lives in the properties, never promise a turnaround time,
 * and never claim a scheme, accreditation or insurance we have not confirmed.
 */

export interface FAQItem {
  question: string
  answer: string
}

export const landlordFAQs: FAQItem[] = [
  {
    question: "What is guaranteed rent?",
    answer:
      "Guaranteed rent means you receive a fixed rent every month for the whole term, whether or not the property is occupied. With Alali Homes, our company signs a corporate lease on your property for 3 to 5 years, pays you the agreed rent every month, and manages the property throughout. Voids, arrears and day-to-day management become our responsibility, not yours.",
  },
  {
    question: "How is the rent actually guaranteed?",
    answer:
      "Alali Homes Ltd signs a legally binding corporate lease with you. The obligation to pay the agreed monthly rent sits with our company for the full term, regardless of occupancy. The rent, payment date, term and responsibilities are all set out in the lease before you sign.",
  },
  {
    question: "What is a corporate let?",
    answer:
      "A corporate let, or company let, is a lease where the tenant is a company rather than an individual. Your tenant is Alali Homes Ltd, so you have one tenant, one rent payment each month and one point of contact for the whole lease.",
  },
  {
    question: "What types of property do you take on?",
    answer:
      "Existing licensed HMOs, 2 to 4 bedroom houses and flats, and 1 bedroom self-contained flats. In the North West we currently lease 1 to 3 bedroom properties only. We assess every property individually and make a written rent offer where it is a good fit.",
  },
  {
    question: "Do you take on licensed HMOs?",
    answer:
      "Yes. Existing licensed HMOs are one of our main areas. We take the property on as it is licensed, manage it in line with the licence conditions and HMO management regulations, and agree in writing who holds which responsibilities before the lease starts.",
  },
  {
    question: "How long is the lease?",
    answer:
      "Our corporate leases run for 3 to 5 years. The term, the rent and any break clause are agreed with you and written into the lease before you commit.",
  },
  {
    question: "What happens if the property is empty?",
    answer:
      "You are still paid. The rent is guaranteed for the full term of the lease, so the risk of an empty month sits with us, not you.",
  },
  {
    question: "What does the property management include?",
    answer:
      "Full property management for the length of the lease: day-to-day maintenance and repairs coordination, regular inspections, compliance tracking, and dedicated support for the tenants living in the property. You deal with us, never with individual tenants.",
  },
  {
    question: "Will my property be looked after?",
    answer:
      "Yes. We keep the property professionally maintained throughout the lease, inspect it regularly, and return it to the condition agreed in the lease at the end of the term, allowing for fair wear and tear. Any changes to the property are agreed with you in writing first.",
  },
  {
    question: "Who is responsible for compliance?",
    answer:
      "As the owner, you remain legally responsible for certain safety certificates, such as gas safety, the EICR and the EPC. We track renewals for you and arrange them where agreed. Any works needed before the lease starts, and who pays for them, are agreed in writing before you sign.",
  },
  {
    question: "Where do you operate?",
    answer:
      "All 32 London boroughs; the South East (Berkshire, Buckinghamshire, East Sussex, Hampshire, Kent, Oxfordshire, Surrey and West Sussex); all of the Midlands; the North West (Barrow-in-Furness, Blackburn, Carlisle, Central Lancashire, Cheshire East, Chester, East Lancashire, Knowsley and St Helens, Lancaster, Liverpool, Warrington and Halton, Wirral and Workington); Yorkshire and the Humber (Barnsley, Bradford, Calderdale, East Riding of Yorkshire, Hull, Kirklees, Leeds, North Lincolnshire, North Yorkshire, Rotherham, Sheffield and York); and the North East (Gateshead, Newcastle and South Tyneside). Each region has its own page on this site.",
  },
  {
    question: "What if I want my property back?",
    answer:
      "Break clauses and notice periods are written into every lease. We walk you through the exit terms before you commit.",
  },
]

export const agentFAQs: FAQItem[] = [
  {
    question: "Do you compete with letting agents?",
    answer:
      "No. We take properties on corporate leases. We don't list on Rightmove or compete for management instructions. We work with agents to offer landlords a guaranteed rent option, and you earn a referral fee for every property we take on.",
  },
  {
    question: "How does the referral work?",
    answer:
      "You introduce the landlord. We handle everything from assessment to signing the lease. Referral terms are agreed in writing upfront. Agents are expected to disclose any referral arrangement to their client in line with the Estate Agents Act 1979.",
  },
]
