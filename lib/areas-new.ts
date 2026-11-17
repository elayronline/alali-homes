import { type Area, LICENSING_FAQ, POSTCODE_FAQ, SHARED_FAQS, WHAT_YOU_GET, stock } from "@/lib/area-copy"

/**
 * East of England, South West and Wales: regions plus the county pages under them.
 * Coverage source is the council list the business works to. Never name the contracts
 * or organisations behind it. Not covered (do not name as covered): Cambridgeshire,
 * Norfolk, Suffolk, Peterborough; in Wales Cardiff, Newport, Swansea, Denbighshire.
 */

const county = (a: Omit<Area, "kind" | "properties" | "faqs"> & { faq: Area["faqs"][number]; licensing: string }): Area => {
  const { faq, licensing, ...rest } = a
  return {
    ...rest,
    kind: "county",
    properties: WHAT_YOU_GET,
    faqs: [...SHARED_FAQS, LICENSING_FAQ(licensing), faq, POSTCODE_FAQ(a.inName)],
  }
}

export const NEW_AREAS: Area[] = [
  // ------------------------------------------------------- EAST OF ENGLAND
  {
    slug: "east-of-england",
    name: "the East of England",
    inName: "Essex, Hertfordshire and Bedfordshire",
    kind: "region",
    summary: "Essex, Hertfordshire and Bedfordshire, including Luton and Southend-on-Sea",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Essex, Hertfordshire and Bedfordshire.",
    intro: [
      "In the East of England we cover all of Essex, including Southend-on-Sea and Thurrock; all of Hertfordshire; and Bedfordshire, including Luton, Bedford and Central Bedfordshire. These are the commuter counties immediately north and east of London, with fast lines into Liverpool Street, Fenchurch Street, King's Cross, St Pancras and Euston.",
      "Alali Homes leases properties across these counties on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we provide full property management for the whole term. Each county has its own page with the local detail.",
    ],
    stock: stock(
      "Southend-on-Sea, Luton, Colchester, Chelmsford and Watford",
      "Essex, Hertfordshire and Bedfordshire",
      "Luton, Southend-on-Sea, Chelmsford, Basildon and the Hertfordshire towns",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Counties we cover in the East of England",
    places: ["Essex", "Hertfordshire", "Bedfordshire"],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("Essex, Hertfordshire and Bedfordshire"),
      {
        q: "Do you cover Cambridgeshire, Norfolk or Suffolk?",
        a: "Not at the moment. In the East of England we cover Essex, Hertfordshire and Bedfordshire, including Luton, Southend-on-Sea and Thurrock.",
      },
      POSTCODE_FAQ("Essex, Hertfordshire and Bedfordshire"),
    ],
  },
  county({
    slug: "essex",
    name: "Essex",
    inName: "Essex",
    parent: "east-of-england",
    strap: "Guaranteed rent on corporate leases for landlords in Southend-on-Sea, Chelmsford, Colchester, Basildon and across Essex.",
    intro: [
      "Essex runs from the London fringe at Epping Forest, Brentwood and Thurrock out to Chelmsford, Colchester and the coast at Southend-on-Sea and Clacton-on-Sea, with the c2c and Great Eastern lines carrying commuters into the City. It has a large stock of family houses, flats and HMOs, and many landlords managing them from a distance.",
      "Alali Homes leases properties across Essex on 3 to 5 year corporate lets. You hand over the keys once, receive a fixed rent every month whether the property is occupied or not, and we manage everything for the term.",
    ],
    stock: stock(
      "Southend-on-Sea, Colchester, Chelmsford and Basildon",
      "Basildon, Chelmsford, Colchester, Harlow, Grays and Clacton-on-Sea",
      "Southend-on-Sea, Chelmsford, Colchester and the towns on the lines into London",
    ),
    placesLabel: "Towns we cover in Essex",
    places: [
      "Basildon", "Billericay", "Braintree", "Brentwood", "Canvey Island", "Chelmsford", "Clacton-on-Sea", "Colchester",
      "Epping", "Grays", "Harlow", "Loughton", "Maldon", "Rayleigh", "Saffron Walden", "Southend-on-Sea", "Witham",
    ],
    licensing: "Essex",
    faq: {
      q: "Do you cover Thurrock and Southend-on-Sea?",
      a: "Yes. As well as the Essex districts we cover Southend-on-Sea and Thurrock, including Grays, Tilbury and Leigh-on-Sea.",
    },
  }),
  county({
    slug: "hertfordshire",
    name: "Hertfordshire",
    inName: "Hertfordshire",
    parent: "east-of-england",
    strap: "Guaranteed rent on corporate leases for landlords in Watford, St Albans, Stevenage, Hemel Hempstead and across Hertfordshire.",
    intro: [
      "Hertfordshire sits immediately north of London, with fast lines into Euston, King's Cross, St Pancras and Liverpool Street from towns such as Watford, St Albans, Stevenage, Hemel Hempstead, Hatfield and Cheshunt. Rents are high and an empty month is expensive.",
      "Alali Homes leases properties across all of Hertfordshire on 3 to 5 year corporate lets. We pay you a fixed rent every month, occupied or not, and manage the property fully for the whole term.",
    ],
    stock: stock(
      "Watford, St Albans, Stevenage and Hatfield",
      "Watford, Hemel Hempstead, Stevenage, Hitchin and Cheshunt",
      "Watford, St Albans, Stevenage and Welwyn Garden City",
    ),
    placesLabel: "Towns we cover in Hertfordshire",
    places: [
      "Berkhamsted", "Bishop's Stortford", "Borehamwood", "Cheshunt", "Hatfield", "Hemel Hempstead", "Hertford", "Hitchin",
      "Letchworth", "Rickmansworth", "St Albans", "Stevenage", "Watford", "Welwyn Garden City",
    ],
    licensing: "Hertfordshire",
    faq: {
      q: "Do you cover all of Hertfordshire?",
      a: "Yes. We cover all ten Hertfordshire districts, from Watford and Three Rivers in the south-west to Stevenage, North Hertfordshire and East Hertfordshire.",
    },
  }),
  county({
    slug: "bedfordshire",
    name: "Bedfordshire",
    inName: "Bedfordshire",
    parent: "east-of-england",
    strap: "Guaranteed rent on corporate leases for landlords in Luton, Bedford, Dunstable and Leighton Buzzard.",
    intro: [
      "Bedfordshire covers Luton, with Thameslink trains into central London, Bedford on the Midland Main Line, and the Central Bedfordshire towns of Dunstable, Houghton Regis, Leighton Buzzard, Biggleswade and Flitwick. Luton and Bedford in particular have large rental markets.",
      "Alali Homes leases properties across Bedfordshire on 3 to 5 year corporate lets. You receive a fixed rent every month, and we look after the property and the tenants in it throughout the lease.",
    ],
    stock: stock("Luton and Bedford", "Luton, Bedford, Dunstable and Leighton Buzzard", "Luton, Bedford and the towns on the Thameslink line"),
    placesLabel: "Towns we cover in Bedfordshire",
    places: ["Bedford", "Biggleswade", "Dunstable", "Flitwick", "Houghton Regis", "Leighton Buzzard", "Luton", "Sandy"],
    licensing: "Luton and Bedfordshire",
    faq: {
      q: "Do you cover Luton?",
      a: "Yes. Luton is part of our Bedfordshire coverage, along with Bedford and Central Bedfordshire.",
    },
  }),

  // ------------------------------------------------------------ SOUTH WEST
  {
    slug: "south-west",
    name: "the South West",
    inName: "the South West",
    kind: "region",
    summary: "Bristol, Gloucestershire, Somerset, Wiltshire, Dorset, Devon and Cornwall",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in Bristol, Bath, Plymouth, Exeter, Bournemouth, Swindon and across the South West.",
    intro: [
      "We cover the whole of the South West: Bristol and South Gloucestershire; Gloucestershire, including Gloucester and Cheltenham; Somerset, Bath and North Somerset; Wiltshire and Swindon; Dorset and Bournemouth, Christchurch and Poole; Devon, Plymouth and Torbay; and Cornwall and the Isles of Scilly.",
      "The region has strong rental markets in its cities and a large stock of houses and flats in its coastal and market towns. Alali Homes leases properties across it on 3 to 5 year corporate lets: you receive a fixed rent every month, occupied or not, and we provide full property management for the whole term. Each county has its own page with the local detail.",
    ],
    stock: stock(
      "Bristol, Bath, Plymouth, Exeter and Bournemouth",
      "Bristol, Swindon, Gloucester, Plymouth, Exeter and Bournemouth",
      "Bristol, Bath, Plymouth and Exeter city centres",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Where we cover in the South West",
    places: ["Bristol", "Gloucestershire", "Somerset", "Wiltshire", "Dorset", "Devon", "Cornwall"],
    faqs: [
      ...SHARED_FAQS,
      LICENSING_FAQ("the South West"),
      {
        q: "Do you cover coastal and rural areas in the South West?",
        a: "Yes, across Devon, Cornwall, Dorset and Somerset as well as the cities. We assess each property individually: a property with good access to a town works best, and we will tell you honestly if one is not a good fit.",
      },
      POSTCODE_FAQ("the South West"),
    ],
  },
  county({
    slug: "gloucestershire",
    name: "Gloucestershire",
    inName: "Gloucestershire",
    parent: "south-west",
    strap: "Guaranteed rent on corporate leases for landlords in Gloucester, Cheltenham, Stroud, Tewkesbury and the Cotswolds.",
    intro: [
      "Gloucestershire runs along the M5 from Gloucester and Cheltenham to Stroud and Tewkesbury, with the Cotswolds to the east and the Forest of Dean across the Severn. Gloucester and Cheltenham have the county's largest rental markets.",
      "Alali Homes leases properties across all of Gloucestershire on 3 to 5 year corporate lets. We pay you a fixed rent every month and manage the property fully for the whole term.",
    ],
    stock: stock("Gloucester and Cheltenham", "Gloucester, Cheltenham, Stroud and Tewkesbury", "Gloucester and Cheltenham town centres"),
    placesLabel: "Towns we cover in Gloucestershire",
    places: ["Cheltenham", "Cinderford", "Cirencester", "Coleford", "Gloucester", "Stroud", "Tewkesbury"],
    licensing: "Gloucester, Cheltenham and Gloucestershire",
    faq: {
      q: "Do you cover the Forest of Dean and the Cotswolds?",
      a: "Yes. We cover all six Gloucestershire districts, including the Forest of Dean and the Cotswolds as well as Gloucester and Cheltenham.",
    },
  }),
  county({
    slug: "somerset",
    name: "Somerset",
    inName: "Somerset",
    parent: "south-west",
    strap: "Guaranteed rent on corporate leases for landlords in Bath, Taunton, Weston-super-Mare, Yeovil and Bridgwater.",
    intro: [
      "Our Somerset coverage takes in Bath and North East Somerset, North Somerset, including Weston-super-Mare and Clevedon, and Somerset itself, from Taunton and Bridgwater to Yeovil, Frome and Wells.",
      "Alali Homes leases properties across these areas on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we look after the property for the whole term.",
    ],
    stock: stock("Bath, Taunton and Weston-super-Mare", "Taunton, Bridgwater, Yeovil, Weston-super-Mare and Frome", "Bath, Taunton and Weston-super-Mare"),
    placesLabel: "Towns we cover in Somerset",
    places: ["Bath", "Bridgwater", "Clevedon", "Frome", "Keynsham", "Taunton", "Wells", "Weston-super-Mare", "Yeovil"],
    licensing: "Bath and Somerset",
    faq: {
      q: "Do you cover Bath and North Somerset?",
      a: "Yes. As well as Somerset we cover Bath and North East Somerset and North Somerset, including Weston-super-Mare.",
    },
  }),
  county({
    slug: "wiltshire",
    name: "Wiltshire",
    inName: "Wiltshire",
    parent: "south-west",
    strap: "Guaranteed rent on corporate leases for landlords in Swindon, Salisbury, Chippenham and Trowbridge.",
    intro: [
      "Wiltshire covers Swindon, on the M4 and the Great Western main line, and the rest of the county from Chippenham, Trowbridge and Devizes to Salisbury in the south.",
      "Alali Homes leases properties across Wiltshire and Swindon on 3 to 5 year corporate lets. We pay you a fixed rent every month and manage everything for the whole term.",
    ],
    stock: stock("Swindon and Salisbury", "Swindon, Chippenham, Trowbridge and Salisbury", "Swindon and Salisbury town centres"),
    placesLabel: "Towns we cover in Wiltshire",
    places: ["Calne", "Chippenham", "Devizes", "Melksham", "Salisbury", "Swindon", "Trowbridge", "Warminster"],
    licensing: "Swindon and Wiltshire",
    faq: {
      q: "Do you cover Swindon?",
      a: "Yes. Swindon is part of our Wiltshire coverage.",
    },
  }),
  county({
    slug: "dorset",
    name: "Dorset",
    inName: "Dorset",
    parent: "south-west",
    strap: "Guaranteed rent on corporate leases for landlords in Bournemouth, Poole, Christchurch, Weymouth and across Dorset.",
    intro: [
      "Dorset covers the Bournemouth, Christchurch and Poole conurbation on the coast and the rest of the county, from Weymouth and Dorchester to Bridport, Wimborne and Shaftesbury.",
      "Alali Homes leases properties across Dorset on 3 to 5 year corporate lets. You receive a fixed rent every month, and we provide full property management for the whole term.",
    ],
    stock: stock("Bournemouth, Poole and Weymouth", "Bournemouth, Poole, Christchurch, Weymouth and Dorchester", "Bournemouth and Poole town centres"),
    placesLabel: "Towns we cover in Dorset",
    places: ["Bournemouth", "Bridport", "Christchurch", "Dorchester", "Ferndown", "Poole", "Shaftesbury", "Weymouth", "Wimborne Minster"],
    licensing: "Bournemouth, Poole and Dorset",
    faq: {
      q: "Do you take on former holiday lets on the Dorset coast?",
      a: "Often, yes. A former holiday let is usually furnished and compliant, which makes the handover straightforward. We would take it on as a long-term corporate let with a fixed monthly rent, not as a holiday let.",
    },
  }),
  county({
    slug: "devon",
    name: "Devon",
    inName: "Devon",
    parent: "south-west",
    strap: "Guaranteed rent on corporate leases for landlords in Plymouth, Exeter, Torbay, Barnstaple and across Devon.",
    intro: [
      "Devon has two cities, Plymouth and Exeter, plus Torbay (Torquay and Paignton) on the south coast, Barnstaple and Bideford in the north, and market towns such as Newton Abbot, Exmouth and Tiverton.",
      "Alali Homes leases properties across all of Devon on 3 to 5 year corporate lets. We pay you a fixed rent every month, occupied or not, and manage the property fully for the whole term.",
    ],
    stock: stock("Plymouth, Exeter and Torbay", "Plymouth, Exeter, Torquay, Paignton, Newton Abbot and Barnstaple", "Plymouth and Exeter city centres"),
    placesLabel: "Towns we cover in Devon",
    places: ["Barnstaple", "Bideford", "Exeter", "Exmouth", "Newton Abbot", "Paignton", "Plymouth", "Tavistock", "Tiverton", "Torquay"],
    licensing: "Plymouth, Exeter and Devon",
    faq: {
      q: "Do you cover north Devon as well as Plymouth and Exeter?",
      a: "Yes. We cover all of Devon, including North Devon and Torridge, Mid Devon, West Devon, the South Hams and Teignbridge, as well as Plymouth, Exeter and Torbay.",
    },
  }),
  county({
    slug: "cornwall",
    name: "Cornwall",
    inName: "Cornwall",
    parent: "south-west",
    strap: "Guaranteed rent on corporate leases for landlords in Truro, Falmouth, Newquay, St Austell and across Cornwall.",
    intro: [
      "Cornwall runs from Saltash and Bodmin to Truro, Falmouth, Newquay, St Austell, Camborne and Penzance, and our coverage also includes the Isles of Scilly. Many landlords here own property at a distance, and a long-term let with one company is a simple alternative to managing it themselves.",
      "Alali Homes leases properties across Cornwall on 3 to 5 year corporate lets. You receive a fixed rent every month for the whole term, and we manage the property throughout.",
    ],
    stock: stock("Truro, Falmouth and Newquay", "Truro, St Austell, Camborne, Redruth and Bodmin", "Truro, Falmouth and Penzance"),
    placesLabel: "Towns we cover in Cornwall",
    places: ["Bodmin", "Camborne", "Falmouth", "Newquay", "Penzance", "Redruth", "Saltash", "St Austell", "Truro"],
    licensing: "Cornwall",
    faq: {
      q: "My property in Cornwall is a holiday let. Can you take it on?",
      a: "Often, yes. We would take it on as a long-term corporate let with a fixed monthly rent, not as a holiday let, and assess it individually before making a written offer.",
    },
  }),

  // ------------------------------------------------------------------ WALES
  {
    slug: "wales",
    name: "Wales",
    inName: "Wales",
    kind: "region",
    strap: "Guaranteed rent on 3–5 year corporate leases for landlords in the South Wales Valleys, west Wales, mid Wales and north Wales.",
    intro: [
      "In Wales we cover Bridgend, Caerphilly, Merthyr Tydfil, Rhondda Cynon Taf, Neath Port Talbot, the Vale of Glamorgan, Torfaen, Blaenau Gwent and Monmouthshire in the south; Carmarthenshire, Pembrokeshire and Ceredigion in the west; Powys in mid Wales; and Gwynedd, the Isle of Anglesey, Conwy, Flintshire and Wrexham in the north.",
      "Alali Homes leases properties across these areas on 3 to 5 year corporate lets. You receive a fixed rent every month, occupied or not, and we provide full property management for the whole term.",
    ],
    stock: stock(
      "Bridgend, Pontypridd, Llanelli, Wrexham and Bangor",
      "the South Wales Valleys, Carmarthenshire, Pembrokeshire and north Wales",
      "Bridgend, Barry, Llanelli, Wrexham and Llandudno",
    ),
    properties: WHAT_YOU_GET,
    placesLabel: "Where we cover in Wales",
    places: [
      "Bridgend", "Caerphilly", "Merthyr Tydfil", "Rhondda Cynon Taf", "Neath Port Talbot", "Vale of Glamorgan", "Torfaen",
      "Blaenau Gwent", "Monmouthshire", "Carmarthenshire", "Pembrokeshire", "Ceredigion", "Powys", "Gwynedd", "Isle of Anglesey",
      "Conwy", "Flintshire", "Wrexham",
    ],
    faqs: [
      ...SHARED_FAQS,
      {
        q: "Are the rules different in Wales?",
        a: "Yes. Wales has its own housing law: landlords with property let in Wales must be registered with Rent Smart Wales, and each council sets its own HMO licensing. We go through the requirements for your property and agree in writing who holds which responsibilities before the lease starts.",
      },
      {
        q: "Do you cover Cardiff, Newport or Swansea?",
        a: "Not at the moment. In south Wales we cover the council areas around them, including Bridgend, Caerphilly, Rhondda Cynon Taf, Neath Port Talbot, Torfaen and the Vale of Glamorgan.",
      },
      POSTCODE_FAQ("Wales"),
    ],
  },
]
