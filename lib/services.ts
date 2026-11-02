/**
 * Intent landing pages: one per high-intent search ("HMO guaranteed rent", "corporate lets").
 * Each entry drives a page via components/ServicePage.tsx, and its FAQs feed that page's
 * FAQPage schema. Same content rules as lib/areas.ts: no statistics, never describe who lives
 * in the properties, no turnaround promises.
 */

import type { AreaFAQ } from "@/lib/areas"

export interface ServiceContent {
  slug: string
  /** <title> */
  title: string
  description: string
  eyebrow: string
  h1: string
  h1Gold: string
  strap: string
  intro: string[]
  points: { title: string; text: string }[]
  pointsHeading: string
  faqs: AreaFAQ[]
}

export const HMO_SERVICE: ServiceContent = {
  slug: "hmo-guaranteed-rent",
  title: "HMO Guaranteed Rent London & South East | Alali Homes",
  description:
    "Guaranteed rent for licensed HMOs: a fixed monthly rent on a 3–5 year corporate lease, with full HMO management included. London and the South East.",
  eyebrow: "HMO Guaranteed Rent",
  h1: "Guaranteed Rent for",
  h1Gold: "Licensed HMOs",
  strap:
    "We lease existing licensed HMOs on 3–5 year corporate leases and pay you a fixed rent every month, whether every room is let or not.",
  intro: [
    "An HMO can be the highest-earning property in a portfolio and the hardest to run. Every room is its own void risk, the licence conditions and the HMO management regulations have to be met all year round, and the day-to-day calls never stop.",
    "Alali Homes takes all of that on. Our company signs a corporate lease on your licensed HMO for 3 to 5 years and pays you one fixed rent every month for the full term. We manage the property in line with its licence, keep it professionally maintained, and provide dedicated support to the tenants living in it.",
  ],
  pointsHeading: "What HMO landlords get",
  points: [
    {
      title: "One fixed rent for the whole house",
      text: "No more room-by-room voids. You receive the same agreed rent every month for the length of the lease, occupied or not.",
    },
    {
      title: "Licence conditions managed",
      text: "We run the property in line with its HMO licence conditions and the HMO management regulations, and track every certificate renewal.",
    },
    {
      title: "Full HMO management",
      text: "Maintenance and repairs coordination, regular inspections, communal-area upkeep and dedicated support for tenants, all handled by us.",
    },
    {
      title: "One tenant: Alali Homes Ltd",
      text: "A single corporate lease with one company, one rent payment and one point of contact, instead of a tenancy for every room.",
    },
    {
      title: "3–5 year security",
      text: "A long-term lease with the rent, term, break clause and notice periods agreed in writing before you sign.",
    },
    {
      title: "Returned in agreed condition",
      text: "The property is professionally maintained throughout and handed back in the condition agreed in the lease, allowing for fair wear and tear.",
    },
  ],
  faqs: [
    {
      q: "Do you take on licensed HMOs?",
      a: "Yes. Existing licensed HMOs are one of our main areas. We take the property on as it is licensed, manage it in line with the licence conditions and HMO management regulations, and pay you a guaranteed rent for the whole lease.",
    },
    {
      q: "Does my HMO need a licence before you take it on?",
      a: "We take on existing licensed HMOs. Mandatory HMO licensing applies across England to HMOs with five or more people forming two or more households, and many councils run additional licensing for smaller HMOs. If your property needs a licence, it should be in place, or the application agreed, before the lease starts.",
    },
    {
      q: "Who holds the HMO licence during the lease?",
      a: "It depends on the property and the council. Who holds the licence and who acts as manager under it are agreed with you in writing before the lease starts, so the licence conditions are always met.",
    },
    {
      q: "Is the rent guaranteed even if rooms are empty?",
      a: "Yes. You receive one fixed rent for the whole property every month for the full term of the lease. Empty rooms are our risk, not yours.",
    },
    {
      q: "How long is the lease on an HMO?",
      a: "Our corporate leases run for 3 to 5 years. The term, the rent and any break clause are agreed with you and written into the lease before you commit.",
    },
    {
      q: "Who pays for compliance on an HMO?",
      a: "As the owner, you remain legally responsible for certain safety certificates. We track every renewal and arrange them where agreed. Any works needed before the lease starts, and who pays for them, are agreed in writing before you sign.",
    },
  ],
}

export const CORPORATE_SERVICE: ServiceContent = {
  slug: "corporate-lets",
  title: "Corporate Lets for Landlords | Guaranteed Rent | Alali Homes",
  description:
    "Corporate lets with guaranteed rent: Alali Homes Ltd leases your 2–4 bed property or 1-bed flat for 3–5 years and pays a fixed rent every month.",
  eyebrow: "Corporate Lets",
  h1: "Corporate Lets with",
  h1Gold: "Guaranteed Rent",
  strap:
    "Let your 2–4 bed property or 1-bed self-contained flat to Alali Homes Ltd on a 3–5 year corporate lease, with a fixed rent every month and full management included.",
  intro: [
    "A corporate let, or company let, is a lease where your tenant is a company rather than an individual. With Alali Homes, that company is us: we sign the lease, we pay the rent, and we are responsible for the property for the full term.",
    "You receive a fixed rent every month for 3 to 5 years, occupied or not. We provide full property management and dedicated support for the tenants, and keep your property professionally maintained from the first day of the lease to the last.",
  ],
  pointsHeading: "Why landlords choose a corporate let",
  points: [
    {
      title: "Guaranteed monthly rent",
      text: "A fixed rent paid every month for the full term of the lease, whether or not the property is occupied.",
    },
    {
      title: "Zero voids, zero arrears",
      text: "The risk of an empty month or a missed payment sits with Alali Homes Ltd, not with you.",
    },
    {
      title: "A company as your tenant",
      text: "One corporate lease with one UK-registered company, one payment and one point of contact.",
    },
    {
      title: "Full property management",
      text: "Maintenance and repairs coordination, regular inspections and compliance tracking for the whole lease.",
    },
    {
      title: "Dedicated tenant support",
      text: "Tenants come to us for anything they need, so you never take a call about the property.",
    },
    {
      title: "3–5 year terms",
      text: "Long-term security with the rent, term, break clause and notice periods agreed in writing upfront.",
    },
  ],
  faqs: [
    {
      q: "What is a corporate let?",
      a: "A corporate let, or company let, is a lease where the tenant is a company rather than an individual. Your tenant is Alali Homes Ltd, so you have one tenant, one rent payment each month and one point of contact for the whole lease.",
    },
    {
      q: "What properties do you take on corporate lets?",
      a: "2 to 4 bedroom houses and flats, 1 bedroom self-contained flats, and existing licensed HMOs across London and the South East. We assess every property individually and make a written rent offer where it is a good fit.",
    },
    {
      q: "How is a corporate let different from a standard tenancy?",
      a: "In a standard tenancy you let to individuals, and you or your agent deal with voids, arrears, repairs and re-lets. In a corporate let with Alali Homes, our company is the tenant for 3 to 5 years, pays you a fixed rent every month and manages the property, so those risks and that work sit with us.",
    },
    {
      q: "Is the rent paid if the property is empty?",
      a: "Yes. The rent is guaranteed for the full term of the lease, whether or not the property is occupied.",
    },
    {
      q: "Do I need to furnish the property?",
      a: "It depends on the property. What is included, and anything needed to bring the property to standard before the lease starts, is agreed in writing before you sign.",
    },
    {
      q: "What happens at the end of the lease?",
      a: "We return the property in the condition agreed in the lease, allowing for fair wear and tear. If both sides want to continue, a new term can be agreed.",
    },
  ],
}
