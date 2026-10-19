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
  title: "Property Management London & South East | Alali Homes",
  description:
    "Fully managed lettings in London and the South East. Vetted professional guests, 85% of the income to you, and your own landlord portal.",
  keywords: [
    "property management London",
    "property management South East",
    "fully managed lettings",
    "fully managed letting service",
    "hands-off property management",
    "hands-off property management for landlords",
    "landlord portal",
    "professional guests",
    "Alali Homes",
  ],
  alternates: {
    canonical: "https://www.alalihomes.com",
  },
  openGraph: {
    title: "Property Management London & South East | Alali Homes",
    description:
      "We host vetted professional guests, manage everything, and pay you 85% of what your property earns, tracked month by month in your landlord portal.",
    url: "https://www.alalihomes.com",
    siteName: "Alali Homes",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alali Homes, fully managed lettings for landlords",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management London & South East | Alali Homes",
    description:
      "Fully managed lettings for landlords: vetted professional guests, 85% of the income to you, and a landlord portal.",
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
    "Property management company for landlords in London and the South East. We host vetted professional guests, manage everything, and pay landlords 85% of the income their property earns.",
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
  knowsAbout: [
    "Property Management",
    "Residential Lettings",
    "Guest Vetting",
    "Landlord Revenue Share",
  ],
}


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alali Homes",
  url: "https://www.alalihomes.com",
  description:
    "Fully managed lettings for landlords in London and the South East, with a quarterly income floor and a landlord portal.",
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
