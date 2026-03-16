import type { Metadata } from "next"
import { Montserrat, Outfit } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alalihomes.com"),
  title: "Alali Homes — Guaranteed Rent & Corporate Lettings | UK",
  description:
    "Alali Homes Ltd offers UK landlords guaranteed rent through corporate lets and professional property management. Zero voids, no upfront fees, fully managed 1–5 year agreements.",
  keywords: [
    "guaranteed rent",
    "corporate lettings",
    "corporate lets UK",
    "guaranteed rent scheme",
    "property management UK",
    "landlord guaranteed income",
    "zero void periods",
    "serviced accommodation",
    "rent to rent",
    "corporate housing UK",
    "Alali Homes",
  ],
  alternates: {
    canonical: "https://www.alalihomes.com",
  },
  openGraph: {
    title: "Alali Homes — Guaranteed Rent & Corporate Lettings",
    description:
      "We lease your property, pay guaranteed rent every month, and manage everything to a professional standard. No voids. No hassle.",
    url: "https://www.alalihomes.com",
    siteName: "Alali Homes",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alali Homes — Guaranteed Rent & Corporate Lettings UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alali Homes — Guaranteed Rent & Corporate Lettings | UK",
    description:
      "UK landlords: get guaranteed rent, zero voids, and fully managed properties with Alali Homes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

// FAQ structured data for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is the rent actually guaranteed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We sign a legally binding corporate lease to pay an agreed rent every month for the contract term. This obligation sits with Alali Homes Ltd regardless of occupancy.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the property sits empty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You still get paid. The void risk sits with Alali Homes, not the landlord. Your guaranteed rent is paid regardless of occupancy status.",
      },
    },
    {
      "@type": "Question",
      name: "What type of tenants will live in my property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corporate clients, contractors, and vetted working professionals. Every occupant is referenced and approved. We operate to a far higher standard than standard letting.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay anything upfront?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There are no upfront fees to landlords. If compliance works are needed, we discuss responsibilities before signing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you compete with letting agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We are an operator, not a letting agent. We do not list on Rightmove or compete for management fees. We partner with agents to offer an alternative for landlords who want guaranteed income.",
      },
    },
  ],
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.alalihomes.com/#organization",
  name: "Alali Homes Ltd",
  legalName: "Alali Homes Ltd",
  description:
    "UK-based corporate lettings and property management company offering guaranteed rent to landlords. Zero voids, no upfront fees, fully managed 1–5 year agreements.",
  url: "https://www.alalihomes.com",
  email: "info@alalihomes.com",
  telephone: "+442045158438",
  logo: {
    "@type": "ImageObject",
    url: "https://www.alalihomes.com/icon-512.png",
    width: 512,
    height: 512,
  },
  image: "https://www.alalihomes.com/icon-512.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "86-90 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  sameAs: [
    "https://www.instagram.com/alalihomes",
  ],
  founder: [
    { "@type": "Person", name: "Alayi MacPepple-Jaja" },
    { "@type": "Person", name: "Ellie Moore" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+442045158438",
    contactType: "customer service",
    email: "info@alalihomes.com",
    areaServed: "GB",
    availableLanguage: "English",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "2-10",
  },
  knowsAbout: [
    "Guaranteed Rent",
    "Corporate Lettings",
    "Property Management",
    "Serviced Accommodation",
    "HMO Management",
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Guaranteed Rent for Landlords",
  description:
    "Alali Homes leases your property under a corporate let agreement and pays guaranteed rent every month for 1–5 years. Zero void periods, no upfront fees, fully managed.",
  provider: {
    "@type": "Organization",
    name: "Alali Homes Ltd",
    url: "https://www.alalihomes.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Corporate Lettings & Property Management",
  offers: {
    "@type": "Offer",
    description: "Guaranteed rent agreements from 1 to 5 years. No upfront fees to landlords.",
    priceCurrency: "GBP",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alali Homes",
  url: "https://www.alalihomes.com",
  description:
    "UK corporate lettings company offering guaranteed rent to landlords. Zero voids, no upfront fees, fully managed 1–5 year agreements.",
  publisher: {
    "@type": "Organization",
    name: "Alali Homes Ltd",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} ${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}
