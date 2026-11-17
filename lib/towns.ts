import {
  type Area,
  type AreaFAQ,
  LICENSING_FAQ,
  POSTCODE_FAQ,
  SCHEME_FAQ,
  SHARED_FAQS,
  SMALL_STOCK_FAQS,
  WHAT_YOU_GET,
  stock,
  stockSmall,
} from "@/lib/area-copy"

/**
 * City/town pages (kind "town"). Each sits under a county (South) or region (North),
 * so it is linked from that page, the footer (northern regions), the sitemap and schema.
 *
 * Landlords search "guaranteed rent [their town]", so these are the pages that can rank
 * for those searches outside Kent. Content rules from lib/areas.ts apply, plus:
 * - `places` are surrounding towns/districts, never inner-city neighbourhoods, because
 *   coverage can vary by ward. Every page carries POSTCODE_FAQ.
 * - `name` must match the entry in the parent's `places` exactly, so the parent page shows
 *   a card for it instead of a duplicate chip.
 */

const OFFER = (where: string) =>
  `Alali Homes leases properties in ${where} on 3 to 5 year corporate lets. You hand over the keys once, receive a fixed rent every month whether the property is occupied or not, and we provide full property management for the whole term.`

function town(t: {
  slug: string
  name: string
  parent: string
  strap: string
  local: string
  stockAt: [string, string, string]
  places: string[]
  faq: AreaFAQ
}): Area {
  return {
    slug: t.slug,
    name: t.name,
    inName: t.name,
    kind: "town",
    parent: t.parent,
    strap: t.strap,
    intro: [t.local, OFFER(t.name)],
    stock: stock(...t.stockAt),
    properties: WHAT_YOU_GET,
    placesLabel: `In and around ${t.name}`,
    places: t.places,
    faqs: [...SHARED_FAQS, LICENSING_FAQ(t.name), t.faq, SCHEME_FAQ(t.name), POSTCODE_FAQ(t.name)],
  }
}

export const TOWNS: Area[] = [
  // ------------------------------------------------------------- HAMPSHIRE
  town({
    slug: "southampton",
    name: "Southampton",
    parent: "hampshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Southampton, Eastleigh and Totton.",
    local:
      "Southampton is a port city on Southampton Water, linked to London Waterloo by main line and to the rest of the South by the M3 and M27. It has a large stock of terraced houses, converted HMOs and flats, from the streets around the city centre out to Eastleigh, Chandler's Ford and Totton.",
    stockAt: ["Southampton", "Southampton, Eastleigh, Chandler's Ford and Totton", "Southampton city centre and the station areas"],
    places: ["Chandler's Ford", "Eastleigh", "Hedge End", "Netley", "Romsey", "Totton"],
    faq: {
      q: "Do you cover the towns around Southampton?",
      a: "Yes. As well as the city we cover Eastleigh, Chandler's Ford, Hedge End, Totton and the towns nearby, as part of our Hampshire coverage.",
    },
  }),
  town({
    slug: "portsmouth",
    name: "Portsmouth",
    parent: "hampshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Portsmouth, Southsea, Fareham, Gosport and Havant.",
    local:
      "Portsmouth sits mostly on Portsea Island, with Southsea along its southern shore and Cosham on the mainland to the north. It is one of the most densely built cities in the country, with a large stock of terraced houses, HMOs and flats, and the towns around Portsmouth Harbour, from Gosport and Fareham to Havant and Waterlooville, share the same market.",
    stockAt: ["Portsmouth and Southsea", "Portsmouth, Southsea, Fareham, Gosport and Havant", "Portsmouth, Southsea and Cosham"],
    places: ["Fareham", "Gosport", "Havant", "Hayling Island", "Portchester", "Southsea", "Waterlooville"],
    faq: {
      q: "Do you cover Gosport, Fareham and Portchester?",
      a: "Yes. We cover Portsmouth and Southsea and the towns around the harbour, including Gosport, Fareham, Portchester, Havant and Waterlooville.",
    },
  }),
  town({
    slug: "basingstoke",
    name: "Basingstoke",
    parent: "hampshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Basingstoke, Andover and north Hampshire.",
    local:
      "Basingstoke sits on the M3 with direct trains to London Waterloo and Reading, and is the main business and rental town in north Hampshire. Its housing runs from town-centre flats to the estates and newer developments around the ring road, with Andover, Tadley and Hook nearby.",
    stockAt: ["Basingstoke", "Basingstoke, Andover, Tadley and Hook", "Basingstoke town centre and near the station"],
    places: ["Andover", "Hook", "Odiham", "Overton", "Tadley", "Whitchurch"],
    faq: {
      q: "Do you cover Andover as well as Basingstoke?",
      a: "Yes. We cover Basingstoke and the north Hampshire towns around it, including Andover, Tadley and Hook.",
    },
  }),

  // ------------------------------------------------------------- BERKSHIRE
  town({
    slug: "reading",
    name: "Reading",
    parent: "berkshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Reading, Woodley, Earley and Wokingham.",
    local:
      "Reading is the largest town in Berkshire, on the M4 with fast Great Western and Elizabeth line services into London Paddington. It has a large rental market of Victorian terraces, converted HMOs and flats, running from the town centre out to Woodley, Earley, Tilehurst and Wokingham.",
    stockAt: ["Reading", "Reading, Woodley, Earley and Wokingham", "Reading town centre and near the station"],
    places: ["Earley", "Pangbourne", "Theale", "Twyford", "Wokingham", "Woodley"],
    faq: {
      q: "I own a flat near Reading station. Is that a fit?",
      a: "It can be. One-bedroom self-contained flats and 2 to 4 bed flats are property types we lease. We assess each one individually and make a written rent offer if it is a good fit.",
    },
  }),
  town({
    slug: "slough",
    name: "Slough",
    parent: "berkshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Slough, Langley and the towns around Windsor.",
    local:
      "Slough sits on the M4 next to Heathrow and Windsor, with the Elizabeth line running through Slough and Langley into central London. It has a large stock of terraced and semi-detached houses, HMOs and flats, and many landlords who own property here but live elsewhere.",
    stockAt: ["Slough", "Slough, Langley and Burnham", "Slough town centre, Langley and near the Elizabeth line"],
    places: ["Burnham", "Datchet", "Iver", "Langley", "Maidenhead", "Windsor"],
    faq: {
      q: "Do you take on properties near the Elizabeth line in Slough and Langley?",
      a: "Yes. We cover Slough and Langley and the towns around them, including Burnham, Datchet and Windsor.",
    },
  }),

  // ------------------------------------------------------- BUCKINGHAMSHIRE
  town({
    slug: "high-wycombe",
    name: "High Wycombe",
    parent: "buckinghamshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in High Wycombe, Marlow, Hazlemere and Beaconsfield.",
    local:
      "High Wycombe is the largest town in south Buckinghamshire, on the M40 with Chiltern Railways trains into London Marylebone. Its houses and flats spread along the Wye valley, with Marlow, Beaconsfield and Hazlemere close by.",
    stockAt: ["High Wycombe", "High Wycombe, Hazlemere, Loudwater and Marlow", "High Wycombe town centre and near the station"],
    places: ["Beaconsfield", "Flackwell Heath", "Hazlemere", "Loudwater", "Marlow", "Princes Risborough"],
    faq: {
      q: "Do you cover the villages around High Wycombe?",
      a: "We cover High Wycombe and the towns around it, including Hazlemere, Loudwater, Marlow and Beaconsfield. For a smaller village, send us the postcode and we will tell you honestly whether it is a good fit.",
    },
  }),
  town({
    slug: "milton-keynes",
    name: "Milton Keynes",
    parent: "buckinghamshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Milton Keynes, Bletchley, Wolverton and Newport Pagnell.",
    local:
      "Milton Keynes sits on the M1 and the West Coast Main Line into London Euston. It has a wide mix of rental stock, from city-centre apartments to houses across its grid estates, plus the older towns of Bletchley, Wolverton, Stony Stratford and Newport Pagnell.",
    stockAt: ["Milton Keynes and Bletchley", "Milton Keynes, Bletchley, Wolverton and Newport Pagnell", "Central Milton Keynes and Bletchley"],
    places: ["Bletchley", "Newport Pagnell", "Olney", "Stony Stratford", "Woburn Sands", "Wolverton"],
    faq: {
      q: "Do you cover Bletchley and Wolverton?",
      a: "Yes. We cover Milton Keynes and its older towns, including Bletchley, Wolverton, Stony Stratford and Newport Pagnell.",
    },
  }),
  town({
    slug: "aylesbury",
    name: "Aylesbury",
    parent: "buckinghamshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Aylesbury and the Aylesbury Vale towns.",
    local:
      "Aylesbury is the county town of Buckinghamshire, with Chiltern Railways trains into London Marylebone. It has grown quickly, with newer estates around the town alongside the older terraces and flats near the centre, and Wendover, Haddenham and Winslow nearby.",
    stockAt: ["Aylesbury", "Aylesbury, Wendover and the Aylesbury Vale towns", "Aylesbury town centre and near the station"],
    places: ["Bierton", "Haddenham", "Stoke Mandeville", "Waddesdon", "Wendover", "Winslow"],
    faq: {
      q: "Do you take on new-build houses in Aylesbury?",
      a: "Yes, if the property fits. Newer houses and flats are often a good fit because they are already compliant. We assess each one individually and make a written rent offer if it is.",
    },
  }),

  // ---------------------------------------------------------- THE MIDLANDS
  town({
    slug: "birmingham",
    name: "Birmingham",
    parent: "midlands",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Birmingham, Solihull, Sutton Coldfield and the Black Country.",
    local:
      "Birmingham is the largest city outside London, with a rental market to match: Victorian terraces and converted HMOs in the inner suburbs, city-centre apartments, and family houses out towards Solihull and Sutton Coldfield. The Black Country towns of West Bromwich, Smethwick, Dudley and Walsall border it to the west and north.",
    stockAt: ["Birmingham and the Black Country", "Birmingham, Solihull, Sutton Coldfield, West Bromwich and Walsall", "Birmingham city centre and the suburbs on the rail lines in"],
    places: ["Dudley", "Halesowen", "Smethwick", "Solihull", "Sutton Coldfield", "Walsall", "West Bromwich"],
    faq: {
      q: "Do you cover the Black Country as well as Birmingham?",
      a: "Yes. We cover all of the Midlands, including Birmingham, Solihull, Sutton Coldfield and the Black Country towns of West Bromwich, Smethwick, Dudley and Walsall.",
    },
  }),
  town({
    slug: "coventry",
    name: "Coventry",
    parent: "midlands",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Coventry, Nuneaton, Rugby and Warwickshire.",
    local:
      "Coventry sits between Birmingham and the M1, with fast trains to London Euston and Birmingham. It has a large stock of terraced houses, HMOs and city-centre flats, and the Warwickshire towns of Nuneaton, Bedworth, Rugby, Kenilworth and Leamington Spa are close by.",
    stockAt: ["Coventry", "Coventry, Nuneaton, Bedworth and Rugby", "Coventry city centre and near the station"],
    places: ["Bedworth", "Kenilworth", "Leamington Spa", "Nuneaton", "Rugby", "Warwick"],
    faq: {
      q: "Do you cover Warwickshire as well as Coventry?",
      a: "Yes. We cover Coventry and Warwickshire, including Nuneaton, Bedworth, Rugby, Kenilworth, Warwick and Leamington Spa.",
    },
  }),
  town({
    slug: "leicester",
    name: "Leicester",
    parent: "midlands",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Leicester, Loughborough and Leicestershire.",
    local:
      "Leicester is the largest city in the East Midlands, on the M1 and the Midland Main Line into London St Pancras. Its rental stock runs from Victorian terraces and HMOs close to the centre to family houses in Oadby, Wigston and Birstall, with Loughborough and Hinckley further out.",
    stockAt: ["Leicester and Loughborough", "Leicester, Oadby, Wigston, Birstall and Hinckley", "Leicester city centre and Loughborough"],
    places: ["Birstall", "Hinckley", "Loughborough", "Market Harborough", "Oadby", "Wigston"],
    faq: {
      q: "Do you cover Loughborough?",
      a: "Yes. We cover Leicester and Leicestershire, including Loughborough, Hinckley, Oadby, Wigston and Market Harborough.",
    },
  }),
  town({
    slug: "nottingham",
    name: "Nottingham",
    parent: "midlands",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Nottingham, Beeston, West Bridgford and Nottinghamshire.",
    local:
      "Nottingham has a large rental market of terraced houses, converted HMOs and city-centre flats, with the tram running out to Beeston, Hucknall and Clifton. The towns around the city, from West Bridgford and Arnold to Long Eaton and Mansfield, have their own strong rental stock.",
    stockAt: ["Nottingham and Beeston", "Nottingham, Beeston, West Bridgford, Arnold and Carlton", "Nottingham city centre and along the tram lines"],
    places: ["Arnold", "Beeston", "Carlton", "Hucknall", "Long Eaton", "Mansfield", "West Bridgford"],
    faq: {
      q: "Do you cover Beeston and West Bridgford?",
      a: "Yes. We cover Nottingham and the towns around it, including Beeston, West Bridgford, Arnold, Carlton, Hucknall and Mansfield.",
    },
  }),

  // ------------------------------------------------ YORKSHIRE AND THE HUMBER
  town({
    slug: "leeds",
    name: "Leeds",
    parent: "yorkshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Leeds, Horsforth, Morley and Pudsey.",
    local:
      "Leeds is the largest city in Yorkshire, with a big rental market of back-to-backs, through terraces, converted HMOs and city-centre apartments. The Leeds district also takes in towns such as Horsforth, Morley, Pudsey, Garforth, Rothwell, Otley and Wetherby.",
    stockAt: ["Leeds", "Leeds, Horsforth, Morley, Pudsey and Garforth", "Leeds city centre and the suburbs on the rail lines in"],
    places: ["Garforth", "Horsforth", "Morley", "Otley", "Pudsey", "Rothwell", "Wetherby"],
    faq: {
      q: "Do you take on back-to-back and terraced houses in Leeds?",
      a: "Yes, where the property fits. Two to four bedroom houses are one of the property types we lease. We assess each one individually and make a written rent offer if it is a good fit.",
    },
  }),
  town({
    slug: "sheffield",
    name: "Sheffield",
    parent: "yorkshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Sheffield, Rotherham and Barnsley.",
    local:
      "Sheffield is South Yorkshire's largest city, with a rental market of stone and brick terraces, converted HMOs and city-centre flats, and fast trains to London St Pancras and Leeds. Rotherham and Barnsley sit just to the north-east and north.",
    stockAt: ["Sheffield", "Sheffield, Rotherham and Barnsley", "Sheffield city centre and Kelham Island"],
    places: ["Barnsley", "Chapeltown", "Penistone", "Rotherham", "Stocksbridge"],
    faq: {
      q: "Do you cover Rotherham and Barnsley?",
      a: "Yes. As well as Sheffield we cover Rotherham and Barnsley, as part of our Yorkshire and the Humber coverage.",
    },
  }),
  town({
    slug: "bradford",
    name: "Bradford",
    parent: "yorkshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Bradford, Shipley, Keighley and Bingley.",
    local:
      "Bradford has a large stock of stone-built terraced houses, larger Victorian properties suited to HMOs, and city-centre flats. The Bradford district also covers Shipley, Bingley, Keighley and Ilkley in the Aire and Wharfe valleys.",
    stockAt: ["Bradford", "Bradford, Shipley, Bingley and Keighley", "Bradford city centre and Shipley"],
    places: ["Bingley", "Ilkley", "Keighley", "Queensbury", "Shipley", "Thornton"],
    faq: {
      q: "Do you cover Keighley and Shipley?",
      a: "Yes. We cover the Bradford district, including Shipley, Bingley, Keighley and Ilkley.",
    },
  }),
  town({
    slug: "hull",
    name: "Hull",
    parent: "yorkshire",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Hull, Hessle, Cottingham and the East Riding.",
    local:
      "Hull sits on the Humber estuary, with a rental market made up largely of terraced houses, converted HMOs and flats. The East Riding towns of Hessle, Cottingham, Anlaby, Willerby and Beverley border the city.",
    stockAt: ["Hull", "Hull, Hessle, Cottingham and Beverley", "Hull city centre and the marina area"],
    places: ["Anlaby", "Beverley", "Cottingham", "Hedon", "Hessle", "Willerby"],
    faq: {
      q: "Do you cover the East Riding as well as Hull?",
      a: "Yes. We cover Hull and the East Riding of Yorkshire, including Hessle, Cottingham, Anlaby, Willerby and Beverley.",
    },
  }),

  // ------------------------------------------------------------ NORTH WEST
  {
    slug: "liverpool",
    name: "Liverpool",
    inName: "Liverpool",
    kind: "town",
    parent: "north-west",
    typesShort: "1 to 3 bed properties",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords with 1 to 3 bed properties in Liverpool, Knowsley, St Helens and the Wirral.",
    intro: [
      "Liverpool has a large rental market of terraced houses and flats, from the streets around the city centre to the suburbs on the Merseyrail lines. Across the Mersey are Birkenhead and Wallasey on the Wirral, and to the east Knowsley and St Helens. In Liverpool and the surrounding areas we lease 1 to 3 bedroom properties.",
      OFFER("Liverpool"),
    ],
    stock: stockSmall("Liverpool, Knowsley, St Helens and the Wirral", "Liverpool city centre, Birkenhead and Wallasey"),
    properties: WHAT_YOU_GET,
    placesLabel: "In and around Liverpool",
    places: ["Birkenhead", "Huyton", "Kirkby", "Prescot", "St Helens", "Wallasey", "Widnes"],
    faqs: [...SMALL_STOCK_FAQS("Liverpool"), SCHEME_FAQ("Liverpool"), POSTCODE_FAQ("Liverpool")],
  },

  // ------------------------------------------------------------ NORTH EAST
  town({
    slug: "newcastle",
    name: "Newcastle upon Tyne",
    parent: "north-east",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Newcastle, Gateshead and South Tyneside.",
    local:
      "Newcastle upon Tyne has a large rental market of Tyneside flats, terraced houses, converted HMOs and city-centre apartments, with the Metro linking the city to Gateshead and South Shields. Gateshead sits directly across the Tyne, with South Tyneside to the east.",
    stockAt: ["Newcastle and Gateshead", "Newcastle, Gosforth, Gateshead and South Shields", "Newcastle city centre and along the Metro"],
    places: ["Gateshead", "Gosforth", "Hebburn", "Jarrow", "South Shields", "Whickham"],
    faq: {
      q: "Do you take on Tyneside flats in Newcastle?",
      a: "Yes. Tyneside flats, upper and lower, are self-contained and often fit the 1-bed and 2-bed properties we lease. We assess each one individually and make a written rent offer if it is a good fit.",
    },
  }),
]
