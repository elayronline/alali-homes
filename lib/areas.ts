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
 * - Never name the contracts or schemes behind our coverage on any public page.
 * - Adding an area = adding an entry. The page, sitemap and links pick it up.
 * - Town pages live in lib/towns.ts and sit under a county (South) or region (North).
 * - Never list inner-city neighbourhoods as covered: coverage can vary by ward, so town
 *   pages name surrounding towns/districts and ask for the postcode (POSTCODE_FAQ).
 */

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
import { TOWNS } from "@/lib/towns"

export type { Area, AreaFAQ, AreaKind } from "@/lib/area-copy"

const BASE_AREAS: Area[] = [
  // ---------------------------------------------------------------- LONDON
  {
    slug: "london",
    name: "London",
    inName: "London",
    kind: "region",
    summary: "All 32 London boroughs",
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

  // ------------------------------------------------------------ THE MIDLANDS
  {
    slug: "midlands",
    name: "the Midlands",
    inName: "the Midlands",
    kind: "region",
    summary: "All of the West Midlands and East Midlands",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Birmingham, Coventry, Leicester, Nottingham, Derby, Stoke and across the Midlands.",
    intro: [
      "We cover all of the Midlands. In the West Midlands that means Birmingham, Solihull, Coventry, Wolverhampton and the Black Country towns of Dudley, Walsall, West Bromwich and Sandwell, out to Stoke-on-Trent, Staffordshire, Warwickshire, Worcestershire, Shropshire and Herefordshire. In the East Midlands it means Nottingham, Derby, Leicester, Lincoln and Northampton and the counties around them.",
      "The region has a large stock of terraced houses, converted HMOs and city-centre flats, and many landlords who would rather have a fixed rent than manage tenants, repairs and empty months themselves. Alali Homes leases these properties on 3 to 5 year corporate lets: you receive a fixed rent every month, occupied or not, and we provide full property management for the whole term.",
    ],
    stock: stock(
      "Birmingham, Coventry, Leicester, Nottingham and Derby",
      "Birmingham, the Black Country, Coventry, Nottingham, Leicester, Derby and Stoke-on-Trent",
      "Birmingham, Coventry, Nottingham and Leicester city centres and the towns around them",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Where we cover in the Midlands",
    places: [
      "Birmingham", "Coventry", "Leicester", "Nottingham", "Derby", "Wolverhampton", "Solihull", "Dudley", "Walsall",
      "West Bromwich", "Stoke-on-Trent", "Telford", "Worcester", "Hereford", "Lincoln", "Northampton", "Mansfield",
      "Nuneaton", "Rugby", "Loughborough", "Kettering", "Burton upon Trent",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("the Midlands"),
      {
        q: "Do you cover both the West Midlands and the East Midlands?",
        a: "Yes. We cover the whole of the Midlands, from Birmingham, the Black Country and Coventry in the west to Nottingham, Derby, Leicester and Lincolnshire in the east.",
      },
      POSTCODE_FAQ("the Midlands"),
    ],
  },

  // ------------------------------------------------- YORKSHIRE AND THE HUMBER
  {
    slug: "yorkshire",
    name: "Yorkshire and the Humber",
    inName: "Yorkshire and the Humber",
    kind: "region",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Leeds, Sheffield, Bradford, Hull, York and across the region.",
    intro: [
      "We cover Leeds, Bradford, Kirklees (Huddersfield and Dewsbury) and Calderdale (Halifax) in West Yorkshire; Sheffield, Barnsley and Rotherham in South Yorkshire; Hull and the East Riding of Yorkshire; York and North Yorkshire; and North Lincolnshire, including Scunthorpe.",
      "These are areas with a large stock of terraced houses, back-to-backs, converted HMOs and city-centre flats. Alali Homes leases properties across them on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we provide full property management and keep the property professionally maintained for the whole term.",
    ],
    stock: stock(
      "Leeds, Sheffield, Bradford, Hull and York",
      "Leeds, Bradford, Huddersfield, Halifax, Sheffield, Barnsley, Rotherham and Hull",
      "Leeds, Sheffield, Hull and York city centres",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Where we cover in Yorkshire and the Humber",
    places: [
      "Leeds", "Sheffield", "Bradford", "Hull", "York", "Huddersfield", "Dewsbury", "Halifax", "Barnsley", "Rotherham",
      "Keighley", "Shipley", "Beverley", "Bridlington", "Harrogate", "Scarborough", "Scunthorpe",
    ],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Yorkshire"),
      {
        q: "Do you cover Huddersfield and Halifax?",
        a: "Yes. Huddersfield and Dewsbury are part of our Kirklees coverage, and Halifax is part of Calderdale.",
      },
      POSTCODE_FAQ("Yorkshire and the Humber"),
    ],
  },

  // -------------------------------------------------------------- NORTH EAST
  {
    slug: "north-east",
    name: "the North East",
    inName: "the North East",
    kind: "region",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Newcastle upon Tyne, Gateshead and South Tyneside.",
    intro: [
      "In the North East we cover Newcastle upon Tyne, Gateshead on the south bank of the Tyne, and South Tyneside, including South Shields, Jarrow and Hebburn.",
      "Tyneside has a large stock of Tyneside flats, terraced houses and HMOs, and many landlords who own them at a distance. Alali Homes leases properties in these areas on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we provide full property management for the whole term.",
    ],
    stock: stock(
      "Newcastle and Gateshead",
      "Newcastle, Gateshead, South Shields and Jarrow",
      "Newcastle, Gateshead and South Shields",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Where we cover in the North East",
    places: ["Newcastle upon Tyne", "Gateshead", "South Shields", "Jarrow", "Hebburn", "Whickham", "Felling", "Boldon"],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("the North East"),
      {
        q: "Do you take on Tyneside flats?",
        a: "Yes. Tyneside flats, upper and lower, are self-contained and often fit the 1-bed and 2-bed properties we lease. We assess each one individually and make a written rent offer if it is a good fit.",
      },
      POSTCODE_FAQ("Newcastle, Gateshead and South Tyneside"),
    ],
  },

  // -------------------------------------------------------------- NORTH WEST
  {
    slug: "north-west",
    name: "the North West",
    inName: "the North West",
    kind: "region",
    typesShort: "1 to 3 bed properties",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords with 1 to 3 bed properties in Liverpool, Lancashire, Cheshire and Cumbria.",
    intro: [
      "We cover Liverpool, Knowsley and St Helens, the Wirral, Warrington and Halton (Widnes and Runcorn), Chester and Cheshire East (Crewe and Macclesfield), Central Lancashire (Preston and Chorley), East Lancashire (Burnley, Accrington and Nelson), Blackburn, Lancaster and Morecambe, and in Cumbria, Carlisle, Barrow-in-Furness and Workington. In this region we lease 1 to 3 bedroom properties.",
      "Alali Homes takes these properties on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we provide full property management for the whole term, so you never deal with repairs, inspections or an empty month.",
    ],
    stock: stockSmall(
      "Liverpool, the Wirral, St Helens, Warrington, Preston and Blackburn",
      "Liverpool, Chester, Preston and Lancaster",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Where we cover in the North West",
    places: [
      "Liverpool", "Birkenhead", "Wallasey", "St Helens", "Knowsley", "Warrington", "Widnes", "Runcorn", "Chester", "Crewe",
      "Macclesfield", "Preston", "Chorley", "Blackburn", "Burnley", "Accrington", "Lancaster", "Morecambe", "Carlisle",
      "Barrow-in-Furness", "Workington",
    ],
    faqs: [...SMALL_STOCK_FAQS("the North West"), POSTCODE_FAQ("the North West")],
  },
]

/** Counties and regions first, then the town pages that sit under them. */
export const AREAS: Area[] = [
  ...BASE_AREAS.map((a) => ({ ...a, faqs: [...a.faqs, SCHEME_FAQ(a.inName)] })),
  ...TOWNS,
]

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug)
}

export function getChildren(slug: string): Area[] {
  return AREAS.filter((a) => a.parent === slug)
}

/** South to north; the northern regions run west to east, so a 3-column grid reads like a map. */
const REGION_ORDER = ["london", "south-east", "midlands", "north-west", "yorkshire", "north-east"]
export const REGIONS = REGION_ORDER.map((slug) => AREAS.find((a) => a.slug === slug)!)
export const COUNTIES = AREAS.filter((a) => a.kind === "county")

/** Schema.org areaServed list for the whole business */
export const AREA_SERVED = AREAS.filter((a) => a.slug !== "south-east").map((a) => ({
  "@type": a.slug === "london" || a.kind === "town" ? "City" : "AdministrativeArea",
  name: a.name.replace(/^the /, ""),
}))
