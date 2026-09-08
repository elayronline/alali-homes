/**
 * Areas Alali Homes covers. Each entry drives one page at /guaranteed-rent/[slug].
 *
 * Content rules (keep them):
 * - No rent figures, yields, counts or statistics. Nothing here may claim a number
 *   about the local market or about Alali Homes' track record.
 * - Demand drivers are well-known employers, institutions and infrastructure only.
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
  demand: { title: string; text: string }[]
  properties: string
  /** Towns / boroughs / districts named on the page */
  places: string[]
  placesLabel: string
  faqs: AreaFAQ[]
}

const SHARED_FAQS: AreaFAQ[] = [
  {
    q: "How is the rent guaranteed?",
    a: "We sign a lease with you and pay the agreed rent every month for the term of that lease, whether or not the property is occupied. The obligation sits with Alali Homes Ltd.",
  },
  {
    q: "Who will stay in the property?",
    a: "Working professionals only. Every guest goes through our vetting process before they are approved, whether they are relocating for work, on a contract placement, or with a company sending staff to the area. We inspect the property regularly through the term.",
  },
]

export const AREAS: Area[] = [
  // ---------------------------------------------------------------- LONDON
  {
    slug: "london",
    name: "London",
    inName: "London",
    kind: "region",
    strap: "Guaranteed monthly rent for landlords across all 32 London boroughs, with your property fully managed.",
    intro: [
      "London has the deepest professional-guest demand in the country, and it is where the cost of a void is highest. A month empty in the capital is a serious sum, and the letting cycle of viewings, referencing, gaps and re-lets repeats every year or two.",
      "Alali Homes takes that cycle off you. We lease your London property under a guaranteed rent agreement, pay you a fixed rent every month for the term, and manage the property and its guests ourselves. You receive the same amount on the same date regardless of whether anyone is living there.",
    ],
    demand: [
      {
        title: "Relocating professionals and project teams",
        text: "Financial and professional services firms in the City and Canary Wharf, technology companies around King's Cross and Shoreditch, and consultancies placing staff on multi-month engagements all need furnished, managed homes for people arriving in the capital.",
      },
      {
        title: "Infrastructure and construction",
        text: "London runs a permanent programme of large construction and engineering projects. The contractors delivering them are placed near site for months at a time and need somewhere to live that is not a hotel.",
      },
      {
        title: "Hospitals, universities and Heathrow",
        text: "NHS trusts, the universities and the airport at Heathrow each bring a steady flow of clinicians, academics, crew and specialist staff on fixed-term contracts who want a proper home for the duration.",
      },
    ],
    properties:
      "We take on flats and houses across London, from purpose-built apartments near a station to family houses in the outer boroughs. Properties within reach of the Tube, Elizabeth line or Overground and close to the employers above are the easiest for us to keep occupied, which is what lets us commit to a guaranteed figure.",
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
        a: "Yes. We take on properties in all 32 boroughs. Outer boroughs with good rail links, such as Croydon, Bromley, Ealing and Barnet, are often the best fit for contractor and professional guests who want space and a straightforward commute.",
      },
      {
        q: "Does a London guaranteed rent agreement cover licensing and compliance?",
        a: "Compliance responsibilities are agreed in writing before we sign, including any borough licensing that applies to the property. We tell you what is needed and who is doing it before you commit.",
      },
    ],
  },

  // ------------------------------------------------------------ SOUTH EAST
  {
    slug: "south-east",
    name: "the South East",
    inName: "the South East",
    kind: "region",
    strap: "Guaranteed rent and full management for landlords in Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire.",
    intro: [
      "The South East is the country's busiest commuter region and one of its largest employment areas in its own right. Airports, ports, science campuses, garrisons and company headquarters sit within an hour of London, and each of them brings people who need a home for months at a time.",
      "Alali Homes leases properties across the region under guaranteed rent agreements, pays landlords a guaranteed rent every month for the term, and manages the property throughout. If you own a house or flat anywhere in the South East and want a fixed income without the letting cycle, we can give you a written figure.",
    ],
    demand: [
      {
        title: "Airports and ports",
        text: "Gatwick, Heathrow's western catchment, the Channel ports at Dover and Folkestone and the docks at Southampton and Portsmouth employ large contractor and shift-working populations that live locally on fixed-term arrangements.",
      },
      {
        title: "Science, defence and technology",
        text: "The M4 corridor around Reading, the Oxfordshire science campuses, Farnborough's aerospace cluster and the naval and army bases in Hampshire bring engineers and specialists into the region on project contracts.",
      },
      {
        title: "Company headquarters and business parks",
        text: "Basingstoke, Milton Keynes, Slough, Bracknell and Crawley each host clusters of national and international companies whose relocating staff and visiting teams need a managed home near the office.",
      },
    ],
    properties:
      "Across the South East we take on family houses and flats in towns with a mainline station, a major employer or both. Properties near the places listed below are typically the easiest for us to keep occupied. Each county has its own page with the local detail.",
    placesLabel: "Counties we cover in the South East",
    places: ["Kent", "Surrey", "East Sussex", "West Sussex", "Hampshire", "Berkshire", "Buckinghamshire", "Oxfordshire"],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you take on properties in smaller towns and villages?",
        a: "Yes, where there is professional-guest demand within reach. A village close to a science park, garrison or airport can work well. A remote property with no employer nearby is harder for us to guarantee, and we will tell you honestly if that is the case.",
      },
      {
        q: "Is a guaranteed rent scheme the same as rent-to-rent?",
        a: "The structure is similar in that a company leases your property and lets it on. The difference is who you are dealing with. We are a registered limited company hosting our own professional guests, the lease is with Alali Homes Ltd, and the terms, break clauses and responsibilities are set out in writing before you sign.",
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
    strap: "Guaranteed rent for landlords from the Medway towns to the Channel coast.",
    intro: [
      "Kent's rental demand is shaped by its ports, its high-speed link to London and the growth around Ebbsfleet and the Thames Gateway. Contractors, logistics and port staff, and commuters priced out of the capital all need homes across the county, and much of that demand is for fixed-term, furnished homes rather than a conventional tenancy.",
      "Alali Homes leases properties across Kent on guaranteed rent agreements and pays the landlord a guaranteed rent every month for the term. You hand over the keys once and receive a fixed income for one to five years while we manage the property and everyone living in it.",
    ],
    demand: [
      {
        title: "Channel ports and logistics",
        text: "Dover and the Eurotunnel terminal at Folkestone, together with the freight and logistics operations that serve them, place engineers, drivers and project teams in East Kent for extended periods.",
      },
      {
        title: "Thames Gateway and Ebbsfleet",
        text: "The development corridor between Dartford, Gravesend and Ebbsfleet, with its construction programmes and the international station, brings site teams and relocating staff into North Kent.",
      },
      {
        title: "Medway, Maidstone and Canterbury",
        text: "The Medway towns, the county town of Maidstone and the universities and hospital in Canterbury are steady sources of professional, clinical and academic guests on fixed contracts.",
      },
    ],
    properties:
      "Houses and flats in the Medway towns, Maidstone, Ashford, Canterbury, Dartford and along the high-speed line to St Pancras are the most straightforward for us to keep occupied. Family houses suit contractor teams; flats near a station suit relocating professionals.",
    placesLabel: "Towns we cover in Kent",
    places: [
      "Ashford", "Canterbury", "Chatham", "Dartford", "Dover", "Folkestone", "Gillingham", "Gravesend",
      "Maidstone", "Margate", "Rochester", "Sevenoaks", "Sittingbourne", "Tonbridge", "Tunbridge Wells",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you cover coastal Kent, such as Thanet and Dover?",
        a: "Yes. The ports and the regeneration along the coast create contractor demand. We assess each property on its own merits and give you a written rent figure if we can guarantee it.",
      },
    ],
  },

  // ---------------------------------------------------------------- SURREY
  {
    slug: "surrey",
    name: "Surrey",
    inName: "Surrey",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords across Guildford, Woking, Epsom and the M25 corridor.",
    intro: [
      "Surrey sits on the M25 with fast rail into Waterloo and Victoria, which makes it the natural home for relocating professionals who work in London or at the business parks around Leatherhead, Weybridge and Woking. Add Gatwick on the county's edge and a university and major hospital in Guildford, and you have a county with constant demand for managed, furnished homes.",
      "Alali Homes leases Surrey properties on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We take on the guests, the maintenance and the compliance. You receive a fixed income and your property back in the agreed condition at the end.",
    ],
    demand: [
      {
        title: "Company headquarters and business parks",
        text: "Weybridge, Leatherhead, Woking and Camberley host the UK bases of national and international companies. Relocating staff and visiting project teams need somewhere to live near the office for months at a time.",
      },
      {
        title: "Guildford's university and hospital",
        text: "The University of Surrey, the research park beside it and the Royal Surrey County Hospital bring academics, researchers and clinicians into Guildford on fixed-term contracts.",
      },
      {
        title: "Gatwick and the London commute",
        text: "Redhill, Reigate and Horley sit minutes from Gatwick, while Epsom, Esher and Walton-on-Thames are established commuter towns. Both attract professionals who want a home rather than a hotel.",
      },
    ],
    properties:
      "Flats and houses within walking distance of a mainline station in Guildford, Woking, Epsom, Redhill or Staines are the easiest for us to keep occupied. Larger houses near the business parks suit contractor and project teams.",
    placesLabel: "Towns we cover in Surrey",
    places: [
      "Camberley", "Dorking", "Epsom", "Esher", "Farnham", "Godalming", "Guildford", "Horley", "Leatherhead",
      "Redhill", "Reigate", "Staines-upon-Thames", "Walton-on-Thames", "Weybridge", "Woking",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "My property is in a Surrey village rather than a town. Is that a problem?",
        a: "Not necessarily. If it is within easy reach of a station, a business park or Gatwick, it can work well for professional guests who want quieter surroundings. We will tell you honestly if we cannot guarantee it.",
      },
    ],
  },

  // ----------------------------------------------------------- EAST SUSSEX
  {
    slug: "east-sussex",
    name: "East Sussex",
    inName: "East Sussex",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords in Brighton and Hove, Eastbourne, Hastings and Lewes.",
    intro: [
      "East Sussex is anchored by Brighton and Hove, a city with two universities, a large hospital and one of the biggest digital and creative employment clusters outside London. Along the coast, Eastbourne and Hastings have their own hospitals, colleges and regeneration programmes, each bringing people who need a home for a fixed period.",
      "Alali Homes leases properties across East Sussex on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We manage the property and its guests throughout, and you receive the same fixed sum on the same date whether or not it is occupied.",
    ],
    demand: [
      {
        title: "Brighton's universities and digital sector",
        text: "The University of Sussex, the University of Brighton and the city's technology and creative companies bring academics, researchers and relocating professionals who want a furnished, managed home for a term or a contract.",
      },
      {
        title: "Hospitals and public services",
        text: "The Royal Sussex County Hospital in Brighton, Eastbourne District General and the Conquest Hospital in Hastings each rely on clinicians and specialist staff on fixed-term placements.",
      },
      {
        title: "The London commute and Gatwick",
        text: "Brighton, Lewes, Haywards Heath and Burgess Hill sit on the main line to Gatwick and London, which makes them a practical base for relocating professionals working in either.",
      },
    ],
    properties:
      "Flats in Brighton and Hove, particularly near the station and the hospital, and family houses in Lewes, Eastbourne and the commuter towns along the main line are the properties we can most reliably keep occupied.",
    placesLabel: "Towns we cover in East Sussex",
    places: [
      "Battle", "Bexhill-on-Sea", "Brighton", "Crowborough", "Eastbourne", "Hailsham", "Hastings", "Hove",
      "Lewes", "Newhaven", "Seaford", "Uckfield",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you take on properties in Brighton that have been used as holiday lets?",
        a: "Yes. A property that has been let short-term is usually already furnished and compliant, which makes the handover straightforward. We take it on under a guaranteed rent agreement for vetted professional guests, not holiday lets.",
      },
    ],
  },

  // ----------------------------------------------------------- WEST SUSSEX
  {
    slug: "west-sussex",
    name: "West Sussex",
    inName: "West Sussex",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords around Gatwick, Crawley, Horsham, Worthing and Chichester.",
    intro: [
      "West Sussex is dominated by Gatwick Airport and the Manor Royal business district beside it in Crawley, together one of the largest employment sites in the South East. Airlines, ground handlers, engineering firms and the companies headquartered around the airport all need homes for staff and contractors on fixed-term arrangements.",
      "Alali Homes leases properties across West Sussex on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We source and manage the guests, handle maintenance and compliance, and pay you the same amount every month regardless of occupancy.",
    ],
    demand: [
      {
        title: "Gatwick Airport and Manor Royal",
        text: "The airport, its airlines and the Manor Royal business district generate a permanent population of shift workers, engineers and relocating professionals who need to live within a short drive of the site.",
      },
      {
        title: "Horsham, Burgess Hill and Haywards Heath",
        text: "These mid-Sussex towns combine employers of their own with a direct rail line to Gatwick and London, which makes them practical bases for relocating professionals.",
      },
      {
        title: "The coast: Worthing, Chichester and Bognor",
        text: "St Richard's Hospital and the university in Chichester, Worthing Hospital and the employers along the coast bring clinicians, academics and project staff into the area on fixed contracts.",
      },
    ],
    properties:
      "Houses and flats in Crawley, Horsham, Haywards Heath and Burgess Hill within reach of Gatwick are the properties we can keep occupied most reliably. Family houses suit crews and contractor teams; flats near a station suit individual professionals.",
    placesLabel: "Towns we cover in West Sussex",
    places: [
      "Bognor Regis", "Burgess Hill", "Chichester", "Crawley", "East Grinstead", "Haywards Heath", "Horsham",
      "Littlehampton", "Shoreham-by-Sea", "Worthing",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Will airport crews and shift workers look after my property?",
        a: "Every guest is referenced and approved by us, and we inspect regularly through the term. Because the lease is with Alali Homes Ltd, the responsibility for the property's condition sits with us, not with the individual guest.",
      },
    ],
  },

  // ------------------------------------------------------------- HAMPSHIRE
  {
    slug: "hampshire",
    name: "Hampshire",
    inName: "Hampshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords in Southampton, Portsmouth, Basingstoke, Winchester and Farnborough.",
    intro: [
      "Hampshire has two port cities, a naval base, an army garrison, an aerospace cluster and a ring of company headquarters, which gives it some of the most varied contractor and professional-guest demand in the South East. People arrive for a refit, a deployment, a project or a relocation, and they need a proper home for the duration.",
      "Alali Homes leases properties across Hampshire on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We manage the property and its guests from handover to return, and you receive a fixed income whether or not the property is occupied.",
    ],
    demand: [
      {
        title: "Southampton and Portsmouth",
        text: "Southampton's port, university and hospital, and Portsmouth's naval base, dockyard and defence contractors, bring engineers, crew, clinicians and specialists into both cities on fixed-term contracts.",
      },
      {
        title: "Farnborough, Aldershot and the defence sector",
        text: "The aerospace and defence companies clustered around Farnborough, together with the army garrison at Aldershot, place technical staff and personnel in north-east Hampshire for months at a time.",
      },
      {
        title: "Basingstoke and Winchester",
        text: "Basingstoke's company headquarters and business parks and Winchester's hospital, university and county offices provide a steady flow of relocating professionals who want a managed home near work.",
      },
    ],
    properties:
      "Flats in Southampton, Portsmouth and Basingstoke and family houses around Farnborough, Aldershot, Fareham and Eastleigh are the properties we can most reliably keep occupied.",
    placesLabel: "Towns we cover in Hampshire",
    places: [
      "Aldershot", "Andover", "Basingstoke", "Eastleigh", "Fareham", "Farnborough", "Fleet", "Gosport",
      "Havant", "Petersfield", "Portsmouth", "Southampton", "Waterlooville", "Winchester",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you take on properties near the naval base in Portsmouth or the garrison at Aldershot?",
        a: "Yes. Defence-related demand is steady and long-term, and properties in Portsmouth, Gosport, Fareham, Aldershot and Farnborough are among the easiest for us to keep occupied.",
      },
    ],
  },

  // ------------------------------------------------------------- BERKSHIRE
  {
    slug: "berkshire",
    name: "Berkshire",
    inName: "Berkshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords along the M4 corridor: Reading, Slough, Bracknell, Maidenhead and Newbury.",
    intro: [
      "Berkshire is the heart of the M4 corridor, the strip of technology and company headquarters that runs west from Heathrow through Slough, Maidenhead, Bracknell and Reading. Companies here relocate staff, host visiting teams and bring in contractors on a continuous basis, and the Elizabeth line has tied the county's towns directly into central London.",
      "Alali Homes leases properties across Berkshire on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We source and manage the guests and look after the property throughout. You receive a fixed sum on a fixed date, every month.",
    ],
    demand: [
      {
        title: "The M4 technology corridor",
        text: "Reading, Bracknell and the business parks between them host the UK operations of major technology and software companies. Their relocating staff and project teams are a constant source of professional guests.",
      },
      {
        title: "Slough and Heathrow's western edge",
        text: "The Slough Trading Estate and the companies serving Heathrow employ engineers, logistics staff and contractors who need a home within a short drive of the airport.",
      },
      {
        title: "Newbury, Windsor and Maidenhead",
        text: "Newbury's company headquarters, Windsor's proximity to Heathrow and Maidenhead's place on the Elizabeth line each attract professionals on fixed-term placements who want a managed home near work.",
      },
    ],
    properties:
      "Flats near the stations in Reading, Maidenhead, Slough and Bracknell are the easiest for us to keep occupied. Family houses in Wokingham, Newbury and Thatcham suit project teams and relocating families.",
    placesLabel: "Towns we cover in Berkshire",
    places: [
      "Ascot", "Bracknell", "Crowthorne", "Maidenhead", "Newbury", "Reading", "Sandhurst", "Slough",
      "Thatcham", "Windsor", "Wokingham", "Woodley",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "I own a flat in a Reading town-centre development. Is that suitable?",
        a: "Usually yes. Modern apartments near Reading station are exactly what relocating technology and professional guests ask for, and they are straightforward for us to take on and manage.",
      },
    ],
  },

  // ------------------------------------------------------- BUCKINGHAMSHIRE
  {
    slug: "buckinghamshire",
    name: "Buckinghamshire",
    inName: "Buckinghamshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords in Milton Keynes, High Wycombe, Aylesbury, Amersham and Marlow.",
    intro: [
      "Buckinghamshire runs from the Metropolitan line commuter towns of Amersham and Chesham up to Milton Keynes, one of the largest concentrations of company headquarters and logistics operations in the country. Between them sit High Wycombe, Aylesbury and Marlow, and on the county's southern edge the film studios at Pinewood.",
      "Alali Homes leases properties across Buckinghamshire on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We manage the property and the people living in it throughout, and you receive a fixed income regardless of occupancy.",
    ],
    demand: [
      {
        title: "Milton Keynes",
        text: "National and international companies base their UK headquarters and distribution operations in Milton Keynes. Relocating staff, visiting teams and contractors on site need a furnished, managed home near the city.",
      },
      {
        title: "Pinewood Studios and the film industry",
        text: "Productions at Pinewood bring crews into south Buckinghamshire for the length of a shoot, often several months, and they need homes rather than hotel rooms for that period.",
      },
      {
        title: "High Wycombe, Aylesbury and the Chilterns commute",
        text: "High Wycombe's employers, Aylesbury's hospital and county offices, and the Metropolitan and Chiltern line towns of Amersham, Beaconsfield and Gerrards Cross attract professionals who work locally or in London.",
      },
    ],
    properties:
      "Flats and houses in Milton Keynes, High Wycombe and Aylesbury are the properties we can keep occupied most reliably. Larger houses near Pinewood and in the Chiltern towns suit crews and relocating families.",
    placesLabel: "Towns we cover in Buckinghamshire",
    places: [
      "Amersham", "Aylesbury", "Beaconsfield", "Bletchley", "Buckingham", "Chesham", "Gerrards Cross",
      "High Wycombe", "Iver", "Marlow", "Milton Keynes", "Newport Pagnell", "Princes Risborough",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you cover Milton Keynes even though it is administratively separate from Buckinghamshire?",
        a: "Yes. Milton Keynes is one of the strongest areas of professional-guest demand in the region and we treat it as part of our Buckinghamshire coverage.",
      },
    ],
  },

  // ----------------------------------------------------------- OXFORDSHIRE
  {
    slug: "oxfordshire",
    name: "Oxfordshire",
    inName: "Oxfordshire",
    kind: "county",
    parent: "south-east",
    strap: "Guaranteed rent for landlords in Oxford, Didcot, Bicester, Banbury and Abingdon.",
    intro: [
      "Oxfordshire's demand comes from its universities, its hospitals and the science and engineering campuses that surround Oxford. Researchers, clinicians, engineers and visiting academics arrive on fixed-term contracts throughout the year, and Oxford's housing stock is tight enough that a furnished, managed home is always sought after.",
      "Alali Homes leases properties across Oxfordshire on guaranteed rent agreements and pays landlords a guaranteed rent every month for the term. We take on the guests, the maintenance and the compliance, and you receive a fixed income for one to five years.",
    ],
    demand: [
      {
        title: "Oxford's universities and hospitals",
        text: "The University of Oxford, Oxford Brookes and the John Radcliffe and Churchill hospitals bring a continuous flow of academics, researchers and clinicians who need a home for a term, a year or a fellowship.",
      },
      {
        title: "Science and engineering campuses",
        text: "The research campuses at Harwell and Culham near Didcot, and the science and business parks around Oxford, place scientists and engineers in the county on project contracts.",
      },
      {
        title: "Bicester, Banbury and the motor industry",
        text: "Bicester's growth and its motorsport and heritage engineering cluster, and Banbury's industrial employers, bring technical staff and contractors into north Oxfordshire.",
      },
    ],
    properties:
      "Flats and houses in Oxford itself, particularly Headington near the hospitals and Cowley, and family houses in Didcot, Abingdon, Kidlington and Bicester are the properties we can keep occupied most reliably.",
    placesLabel: "Towns we cover in Oxfordshire",
    places: [
      "Abingdon", "Banbury", "Bicester", "Carterton", "Chipping Norton", "Didcot", "Headington", "Henley-on-Thames",
      "Kidlington", "Oxford", "Thame", "Wallingford", "Witney",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Do you take on properties near the hospitals in Headington?",
        a: "Yes. Clinicians and researchers on fixed placements at the John Radcliffe and Churchill are among the most consistent guests we place, and Headington properties are a strong fit.",
      },
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
