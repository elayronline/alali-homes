/**
 * Areas Alali Homes covers. Each entry drives one page at /guaranteed-rent/[slug].
 *
 * Content rules (keep them):
 * - No rent figures, yields, counts or statistics. Nothing here may claim a number
 *   about the local market or about Alali Homes' track record.
 * - Never describe who lives in the properties. We lease to providers under corporate
 *   lease agreements, so the copy is about the landlord's offer only.
 * - Licensing statements stay general (councils set their own schemes). Never name a
 *   borough's scheme or an Article 4 direction here without checking it is in force.
 * - Adding an area = adding an entry. The page, sitemap and links pick it up.
 */

export type AreaKind = "region" | "county"

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
  /** Region slug for counties */
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
}

const WHAT_YOU_GET =
  "A fixed rent paid every month on a 3 to 5 year corporate lease with Alali Homes Ltd, whether or not the property is occupied. Full property management is included for the whole term: maintenance and repairs coordination, regular inspections, compliance tracking and dedicated support for tenants, so the property is professionally maintained and you never deal with day-to-day issues."

function stock(hmoPlaces: string, housePlaces: string, flatPlaces: string) {
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

const SHARED_FAQS: AreaFAQ[] = [
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

const LICENSING_FAQ = (where: string): AreaFAQ => ({
  q: `Do you take on licensed HMOs in ${where}?`,
  a: `Yes. Licensing is set by each local council, and mandatory HMO licensing applies across England to HMOs with five or more people forming two or more households. We take existing licensed HMOs in ${where} on as they are licensed, manage them in line with the licence conditions, and agree who holds which responsibilities in writing before the lease starts.`,
})

export const AREAS: Area[] = [
  // ---------------------------------------------------------------- LONDON
  {
    slug: "london",
    name: "London",
    inName: "London",
    kind: "region",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords across all 32 London boroughs.",
    intro: [
      "In London an empty month or a missed rent payment costs a landlord more than anywhere else in the country, and running an HMO or a portfolio of flats in the capital is close to a full-time job. A conventional let also brings the same cycle of viewings, referencing, gaps and re-lets every year or two.",
      "Alali Homes takes that risk and that work off you. We lease your London property on a 3 to 5 year corporate let, pay you a fixed rent every month whether it is occupied or not, and manage it fully for the whole term.",
    ],
    stock: stock(
      "every London borough",
      "inner and outer London, from Hackney and Lewisham to Croydon, Ealing and Barnet",
      "within reach of the Tube, Elizabeth line and Overground",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "London boroughs we cover",
    places: [
      "Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Camden", "City of London", "Croydon",
      "Ealing", "Enfield", "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow", "Havering",
      "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea", "Kingston upon Thames", "Lambeth",
      "Lewisham", "Merton", "Newham", "Redbridge", "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets",
      "Waltham Forest", "Wandsworth", "Westminster",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you cover outer London as well as central?",
        a: "Yes. We take on properties in all 32 boroughs, from central flats to houses in the outer boroughs.",
      },
      {
        q: "Do you take on licensed HMOs in London?",
        a: "Yes. Many London boroughs run additional or selective licensing schemes on top of mandatory HMO licensing, so the rules depend on the borough. We take existing licensed HMOs on as they are licensed, manage them in line with the licence conditions, and agree who holds which responsibilities in writing before the lease starts.",
      },
    ],
  },

  // ------------------------------------------------------------ SOUTH EAST
  {
    slug: "south-east",
    name: "the South East",
    inName: "the South East",
    kind: "region",
    strap: "Guaranteed rent for landlords in Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire.",
    intro: [
      "The South East has some of the strongest rental markets outside London, from the commuter towns on the main lines into the capital to the port cities, university towns and business hubs along the M3, M4 and M25. It also has many landlords who want the rent without the job of managing a property.",
      "Alali Homes leases properties across the region on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we provide full property management for the whole term. Each county has its own page with the local detail.",
    ],
    stock: stock(
      "towns across the region, including Reading, Southampton, Portsmouth, Brighton and Oxford",
      "commuter towns with a mainline station",
      "town centres and station areas across the region",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Counties we cover in the South East",
    places: ["Kent", "Surrey", "East Sussex", "West Sussex", "Hampshire", "Berkshire", "Buckinghamshire", "Oxfordshire"],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you take on properties in smaller towns and villages?",
        a: "We assess every property individually. A property in a smaller town with good transport links can work well; a remote property is harder, and we will tell you honestly if we do not think it is a good fit.",
      },
      {
        q: "Is guaranteed rent the same as a letting agent?",
        a: "No. A letting agent finds tenants and manages the property on your behalf, and you carry the voids and arrears. With guaranteed rent, Alali Homes Ltd becomes your tenant on a corporate lease, pays you a fixed rent every month for the whole term, and takes on the management and the risk of an empty month.",
      },
    ],
  },

  // ------------------------------------------------------------------ KENT
  {
    slug: "kent",
    name: "Kent",
    inName: "Kent",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords from the Medway towns to the Channel coast.",
    intro: [
      "Kent covers everything from the Thames Gateway and the Medway towns to Canterbury, Ashford and the Channel coast, with high-speed rail into St Pancras from several of its towns. It has a large stock of HMOs and family houses, and many landlords managing them at a distance.",
      "Alali Homes leases properties across Kent on 3 to 5 year corporate lets. You hand over the keys once, receive a fixed rent every month whether the property is occupied or not, and we manage everything for the term.",
    ],
    stock: stock(
      "the Medway towns, Maidstone and Canterbury",
      "Dartford, Gravesend, Ashford, Tonbridge and Sevenoaks",
      "Maidstone, Ashford, Canterbury and along the high-speed line",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in Kent",
    places: [
      "Ashford", "Canterbury", "Chatham", "Dartford", "Dover", "Folkestone", "Gillingham", "Gravesend",
      "Maidstone", "Margate", "Rochester", "Sevenoaks", "Sittingbourne", "Tonbridge", "Tunbridge Wells",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Kent"),
      {
        q: "Do you take on properties on the Kent coast?",
        a: "Yes. We cover Dover, Folkestone, Margate and the coastal towns as well as North and West Kent. We assess each property on its own merits and make a written rent offer if it is a good fit.",
      },
    ],
  },

  // ----------------------------------------------------------------- SURREY
  {
    slug: "surrey",
    name: "Surrey",
    inName: "Surrey",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords across Guildford, Woking, Epsom and the M25 corridor.",
    intro: [
      "Surrey sits on the M25 with fast rail into Waterloo and Victoria, and its towns, from Guildford and Woking to Epsom and Redhill, are some of the most sought-after rental locations in the South East. Property values are high, and so is the cost of an empty month.",
      "Alali Homes leases Surrey properties on 3 to 5 year corporate lets. You receive a fixed rent every month, we provide full property management and keep the property professionally maintained, and it comes back to you in the agreed condition at the end of the lease.",
    ],
    stock: stock(
      "Guildford, Woking and Redhill",
      "Guildford, Woking, Epsom, Camberley and Reigate",
      "Woking, Guildford, Epsom and the station towns on the lines into London",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in Surrey",
    places: [
      "Camberley", "Dorking", "Epsom", "Esher", "Farnham", "Godalming", "Guildford", "Horley", "Leatherhead",
      "Redhill", "Reigate", "Staines-upon-Thames", "Walton-on-Thames", "Weybridge", "Woking",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Surrey"),
      {
        q: "My property is in a quieter part of Surrey. Is it still a fit?",
        a: "Possibly. Properties with good road or rail links usually work best. We assess each one individually and will tell you honestly if we do not think it is a good fit.",
      },
    ],
  },

  // ------------------------------------------------------------ EAST SUSSEX
  {
    slug: "east-sussex",
    name: "East Sussex",
    inName: "East Sussex",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords in Brighton and Hove, Eastbourne, Hastings and Lewes.",
    intro: [
      "East Sussex is anchored by Brighton and Hove, one of the busiest rental markets on the south coast, with Eastbourne, Hastings, Lewes and the Weald towns around it. It has a large HMO market and a strong stock of flats in converted period buildings.",
      "Alali Homes leases properties across East Sussex on 3 to 5 year corporate lets. You receive a fixed rent every month for the whole term, and we look after the property and the tenants in it throughout.",
    ],
    stock: stock(
      "Brighton, Hove, Eastbourne and Hastings",
      "Brighton and Hove, Lewes, Eastbourne and Bexhill-on-Sea",
      "Brighton, Hove, Eastbourne and Hastings",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in East Sussex",
    places: [
      "Battle", "Bexhill-on-Sea", "Brighton", "Crowborough", "Eastbourne", "Hailsham", "Hastings", "Hove",
      "Lewes", "Newhaven", "Seaford", "Uckfield",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Brighton, Hove and East Sussex"),
      {
        q: "My property is currently a holiday let. Can you take it on?",
        a: "Often, yes. A property that has been a holiday let is usually already furnished and compliant, which makes the handover straightforward. We would take it on as a long-term corporate let with a fixed monthly rent, not as a holiday let.",
      },
    ],
  },

  // ------------------------------------------------------------ WEST SUSSEX
  {
    slug: "west-sussex",
    name: "West Sussex",
    inName: "West Sussex",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords around Crawley, Horsham, Worthing and Chichester.",
    intro: [
      "West Sussex runs from Crawley and the Gatwick area in the north to Worthing, Bognor Regis and Chichester on the coast, with mid-Sussex towns such as Horsham, Haywards Heath and Burgess Hill on the main line between them.",
      "Alali Homes leases properties across West Sussex on 3 to 5 year corporate lets. We pay you a fixed rent every month, handle the maintenance and day-to-day running, track the compliance, and support the tenants, so you never have to.",
    ],
    stock: stock(
      "Crawley, Worthing and Chichester",
      "Crawley, Horsham, Haywards Heath and Burgess Hill",
      "Crawley, Worthing, Horsham and Chichester",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in West Sussex",
    places: [
      "Bognor Regis", "Burgess Hill", "Chichester", "Crawley", "East Grinstead", "Haywards Heath", "Horsham",
      "Littlehampton", "Shoreham-by-Sea", "Worthing",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("West Sussex"),
      {
        q: "Will I have to deal with the tenants?",
        a: "No. Your tenant is Alali Homes Ltd. We provide dedicated support to the people living in the property and manage it day to day, so you deal with us, never with individual tenants.",
      },
    ],
  },

  // -------------------------------------------------------------- HAMPSHIRE
  {
    slug: "hampshire",
    name: "Hampshire",
    inName: "Hampshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords in Southampton, Portsmouth, Basingstoke, Winchester and Farnborough.",
    intro: [
      "Hampshire has two port cities, Southampton and Portsmouth, each with a large HMO market, plus Basingstoke, Winchester, Farnborough and Aldershot further north. It is one of the most varied rental counties in the South East.",
      "Alali Homes leases properties across Hampshire on 3 to 5 year corporate lets, from handover to return. You receive a fixed rent every month, and we provide full property management for the whole term.",
    ],
    stock: stock(
      "Southampton, Portsmouth and Winchester",
      "Basingstoke, Eastleigh, Fareham, Farnborough and Fleet",
      "Southampton, Portsmouth, Basingstoke and Winchester",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in Hampshire",
    places: [
      "Aldershot", "Andover", "Basingstoke", "Eastleigh", "Fareham", "Farnborough", "Fleet", "Gosport",
      "Havant", "Petersfield", "Portsmouth", "Southampton", "Waterlooville", "Winchester",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Southampton, Portsmouth and Hampshire"),
      {
        q: "Do you cover both Southampton and Portsmouth?",
        a: "Yes. We cover both cities and the towns between them, including Eastleigh, Fareham, Gosport and Havant.",
      },
    ],
  },

  // -------------------------------------------------------------- BERKSHIRE
  {
    slug: "berkshire",
    name: "Berkshire",
    inName: "Berkshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords along the M4 corridor: Reading, Slough, Bracknell, Maidenhead and Newbury.",
    intro: [
      "Berkshire sits along the M4 between London and the west, with the Elizabeth line running through Slough and Maidenhead to Reading. Reading and Slough have large HMO and flat markets, and the county's towns are among the busiest rental locations outside London.",
      "Alali Homes leases properties across Berkshire on 3 to 5 year corporate lets. We pay you a fixed rent every month, occupied or not, and manage the property fully for the whole term.",
    ],
    stock: stock(
      "Reading, Slough and Bracknell",
      "Reading, Wokingham, Bracknell, Maidenhead and Newbury",
      "Reading, Slough and Maidenhead near the Elizabeth line",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in Berkshire",
    places: [
      "Ascot", "Bracknell", "Crowthorne", "Maidenhead", "Newbury", "Reading", "Sandhurst", "Slough",
      "Thatcham", "Windsor", "Wokingham", "Woodley",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Reading, Slough and Berkshire"),
      {
        q: "I own a 1-bed flat in Reading. Is that a fit?",
        a: "It can be. One-bedroom self-contained flats are one of the property types we lease. We assess each one individually and make a written rent offer if it is a good fit.",
      },
    ],
  },

  // -------------------------------------------------------- BUCKINGHAMSHIRE
  {
    slug: "buckinghamshire",
    name: "Buckinghamshire",
    inName: "Buckinghamshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords in Milton Keynes, High Wycombe, Aylesbury, Amersham and Marlow.",
    intro: [
      "Buckinghamshire runs from Milton Keynes in the north to High Wycombe, Amersham and the Chiltern and Metropolitan line towns in the south, with Aylesbury in between. Milton Keynes and High Wycombe in particular have large rental markets.",
      "Alali Homes leases properties across Buckinghamshire on 3 to 5 year corporate lets. You receive a fixed rent every month, and we look after the property and the tenants in it throughout the lease.",
    ],
    stock: stock(
      "Milton Keynes, High Wycombe and Aylesbury",
      "Milton Keynes, Aylesbury, High Wycombe and Bletchley",
      "Milton Keynes, High Wycombe, Aylesbury and Amersham",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in Buckinghamshire",
    places: [
      "Amersham", "Aylesbury", "Beaconsfield", "Bletchley", "Buckingham", "Chesham", "Gerrards Cross",
      "High Wycombe", "Iver", "Marlow", "Milton Keynes", "Newport Pagnell", "Princes Risborough",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Milton Keynes and Buckinghamshire"),
      {
        q: "Do you cover Milton Keynes?",
        a: "Yes. Milton Keynes is part of our Buckinghamshire coverage, including Bletchley and Newport Pagnell.",
      },
    ],
  },

  // ------------------------------------------------------------ OXFORDSHIRE
  {
    slug: "oxfordshire",
    name: "Oxfordshire",
    inName: "Oxfordshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent on corporate leases for landlords in Oxford, Didcot, Bicester, Banbury and Abingdon.",
    intro: [
      "Oxford has one of the tightest housing markets in the country and a large HMO stock, and the towns around it, from Didcot and Abingdon to Bicester, Banbury and Witney, have grown quickly. Managing property here takes time, and an empty month is expensive.",
      "Alali Homes leases properties across Oxfordshire on 3 to 5 year corporate lets. We pay you a fixed rent every month, provide full property management and dedicated tenant support, and return the property in the agreed condition at the end of the lease.",
    ],
    stock: stock(
      "Oxford, including Headington and Cowley",
      "Oxford, Didcot, Abingdon, Bicester and Banbury",
      "Oxford, Didcot, Bicester and Witney",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Towns we cover in Oxfordshire",
    places: [
      "Abingdon", "Banbury", "Bicester", "Carterton", "Chipping Norton", "Didcot", "Headington",
      "Henley-on-Thames", "Kidlington", "Oxford", "Thame", "Wallingford", "Witney",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Oxford and Oxfordshire"),
    ],
  },
]

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug)
}

export function getChildren(slug: string): Area[] {
  return AREAS.filter((a) => a.parent === slug)
}

export const REGIONS = AREAS.filter((a) => a.kind === "region")
export const COUNTIES = AREAS.filter((a) => a.kind === "county")

/** Schema.org areaServed list for the whole business */
export const AREA_SERVED = [
  { "@type": "City", name: "London" },
  ...COUNTIES.map((c) => ({ "@type": "AdministrativeArea", name: c.name })),
]
