/**
 * Shared building blocks for area and town pages: types, stock cards and FAQs.
 * The content rules in lib/areas.ts apply here too.
 */

export type AreaKind = "region" | "county" | "town"

export interface AreaFAQ {
  q: string
  a: string
}

export interface Area {
  slug: string
  name: string
  /** Used in prose: "in Kent", "across London" */
  inName: string
  kind: AreaKind
  /** Parent slug: the region for a county, the county (South) or region (North) for a town */
  parent?: string
  /** Short line under the H1 */
  strap: string
  intro: string[]
  /** The three property types we lease, described for this area */
  stock: { title: string; text: string }[]
  /** "What you get" paragraph */
  properties: string
  /** Towns / boroughs / districts named on the page */
  places: string[]
  placesLabel: string
  faqs: AreaFAQ[]
  /** Short coverage line for the homepage, when the full places list is too long */
  summary?: string
  /** Property types in metadata, when this area does not take the full range */
  typesShort?: string
}


export const WHAT_YOU_GET =
  "A fixed rent paid every month on a 3 to 5 year corporate lease with Alali Homes Ltd, whether or not the property is occupied. Full property management is included for the whole term: maintenance and repairs coordination, regular inspections, compliance tracking and dedicated support for tenants, so the property is professionally maintained and you never deal with day-to-day issues."

export function stock(hmoPlaces: string, housePlaces: string, flatPlaces: string) {
  return [
    {
      title: "Licensed HMOs",
      text: `Existing licensed HMOs in ${hmoPlaces} and nearby. We take the property on as it is licensed, manage it in line with the licence conditions and pay you a guaranteed rent for the whole lease.`,
    },
    {
      title: "2–4 bed houses and flats",
      text: `Two to four bedroom houses and flats in ${housePlaces}, leased on a 3 to 5 year corporate let with full property management included.`,
    },
    {
      title: "1-bed self-contained flats",
      text: `One-bedroom self-contained flats in ${flatPlaces}, with their own kitchen and bathroom, on the same guaranteed rent terms.`,
    },
  ]
}

/** Areas where we currently lease 1 to 3 bed properties only, so no HMOs and no 4 beds. */
export function stockSmall(housePlaces: string, flatPlaces: string) {
  return [
    {
      title: "2–3 bed houses and flats",
      text: `Two and three bedroom houses and flats in ${housePlaces}, leased on a 3 to 5 year corporate let with full property management included.`,
    },
    {
      title: "1-bed self-contained flats",
      text: `One-bedroom self-contained flats in ${flatPlaces}, with their own kitchen and bathroom, on the same guaranteed rent terms.`,
    },
  ]
}

export const SHARED_FAQS: AreaFAQ[] = [
  {
    q: "How does guaranteed rent work?",
    a: "Alali Homes Ltd signs a corporate lease on your property for 3 to 5 years and pays you a fixed rent every month for the full term, whether or not the property is occupied. We provide full property management and dedicated tenant support throughout, and return the property in the condition agreed in the lease.",
  },
  {
    q: "What types of property do you take on?",
    a: "Existing licensed HMOs, 2 to 4 bedroom houses and flats, and 1 bedroom self-contained flats. We assess every property individually and make a written rent offer where it is a good fit.",
  },
  {
    q: "What happens if the property is empty?",
    a: "You are still paid. The rent is guaranteed for the full term of the lease, so voids and arrears are our risk, not yours.",
  },
]

/** Landlords search "guaranteed rent scheme [place]"; answer what we are, plainly. */
export const SCHEME_FAQ = (where: string): AreaFAQ => ({
  q: `Is this a council guaranteed rent scheme in ${where}?`,
  a: `No. Alali Homes Ltd is a private company. We sign a corporate lease with you directly, pay the rent ourselves every month for the whole term and manage the property, so you deal with one company from handover to the end of the lease.`,
})

export const POSTCODE_FAQ = (where: string): AreaFAQ => ({
  q: `Do you take on properties everywhere in ${where}?`,
  a: `We take on properties across ${where}, but coverage can vary street by street. Send us the postcode with your enquiry and we will confirm whether it is an area we are currently taking on before anything else.`,
})

export const LICENSING_FAQ = (where: string): AreaFAQ => ({
  q: `Do you take on licensed HMOs in ${where}?`,
  a: `Yes. Licensing is set by each local council, and mandatory HMO licensing applies across England to HMOs with five or more people forming two or more households. We take existing licensed HMOs in ${where} on as they are licensed, manage them in line with the licence conditions, and agree who holds which responsibilities in writing before the lease starts.`,
})

export const SMALL_STOCK_FAQS = (where: string): AreaFAQ[] => [
  SHARED_FAQS[0],
  {
    q: `What types of property do you take on in ${where}?`,
    a: `In ${where} we currently lease 1 to 3 bedroom properties: 1-bed self-contained flats and 2 to 3 bedroom houses and flats. We assess every property individually and make a written rent offer where it is a good fit.`,
  },
  SHARED_FAQS[2],
]
