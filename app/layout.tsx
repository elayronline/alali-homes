import type { Metadata } from "next"
import { Montserrat, Outfit } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { AREA_SERVED } from "@/lib/areas"

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
  title: "Guaranteed Rent London & South East | Alali Homes",
  description:
    "Guaranteed rent for landlords on 3–5 year corporate leases. Licensed HMOs, 2–4 bed properties and 1-bed flats. Zero voids, full management included.",
  keywords: [
    "guaranteed rent",
    "guaranteed rent London",
    "guaranteed rent South East",
    "guaranteed rent for landlords",
    "guaranteed rent scheme",
    "HMO guaranteed rent",
    "guaranteed rent HMO",
    "corporate lets",
    "corporate let landlords",
    "company let",
    "corporate lease property",
    "rent guarantee landlords",
    "no void periods",
    "Alali Homes",
  ],
  alternates: {
    canonical: "https://www.alalihomes.com",
  },
  openGraph: {
    title: "Guaranteed Rent London & South East | Alali Homes",
    description:
      "A fixed rent every month on a 3–5 year corporate lease, with full property management and dedicated tenant support included.",
    url: "https://www.alalihomes.com",
    siteName: "Alali Homes",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alali Homes, guaranteed rent and corporate lets for landlords",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guaranteed Rent London & South East | Alali Homes",
    description:
      "Guaranteed rent on 3–5 year corporate leases for licensed HMOs, 2–4 bed properties and 1-bed flats. Zero voids.",
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


const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.alalihomes.com/#organization",
  name: "Alali Homes Ltd",
  legalName: "Alali Homes Ltd",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House",
    value: "17095100",
  },
  foundingDate: "2026-03-16",
  description:
    "Guaranteed rent and corporate lettings company for landlords in London and the South East. We lease licensed HMOs, 2-4 bedroom properties and 1-bedroom self-contained flats on 3-5 year corporate leases, pay a fixed rent every month, and provide full property management and dedicated tenant support.",
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
  areaServed: AREA_SERVED,
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
  slogan: "Guaranteed Rent. Zero Voids. No Management Hassle.",
  knowsAbout: [
    "Guaranteed Rent",
    "Corporate Lets",
    "Company Lets",
    "HMO Management",
    "HMO Licensing",
    "Property Management",
    "Residential Lettings",
  ],
}


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alali Homes",
  url: "https://www.alalihomes.com",
  description:
    "Guaranteed rent and corporate lets for landlords in London and the South East, on 3-5 year leases with full property management.",
  inLanguage: "en-GB",
  publisher: { "@id": "https://www.alalihomes.com/#organization" },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} ${outfit.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
