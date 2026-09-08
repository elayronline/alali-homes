import type { Metadata } from "next"
import { Montserrat, Outfit } from "next/font/google"
import "./globals.css"
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
  title: "Guaranteed Rent for Landlords in London & the South East | Alali Homes",
  description:
    "Alali Homes Ltd pays landlords in London and the South East a guaranteed rent every month, hosts vetted professional guests and manages the property end to end. Zero voids, 1–5 year agreements.",
  keywords: [
    "guaranteed rent",
    "guaranteed rent scheme",
    "guaranteed rent London",
    "guaranteed rent South East",
    "hands-off property management",
    "serviced accommodation management",
    "landlord guaranteed income",
    "zero void periods",
    "Alali Homes",
  ],
  alternates: {
    canonical: "https://www.alalihomes.com",
  },
  openGraph: {
    title: "Guaranteed Rent for Landlords in London & the South East | Alali Homes",
    description:
      "We lease your property, pay guaranteed rent every month, host vetted professional guests and manage everything. No voids. No hassle.",
    url: "https://www.alalihomes.com",
    siteName: "Alali Homes",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alali Homes — Guaranteed Rent & Hands-Off Management for Landlords",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guaranteed Rent for Landlords in London & the South East | Alali Homes",
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
    "Guaranteed rent and property management company for landlords in London and the South East. We lease the property, host vetted professional guests and manage everything. Zero voids, 1–5 year agreements.",
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
    "Guaranteed Rent",
    "Property Management",
    "Serviced Accommodation",
    "Extended-Stay Accommodation",
  ],
}


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alali Homes",
  url: "https://www.alalihomes.com",
  description:
    "Guaranteed rent and hands-off management for landlords in London and the South East. Zero voids, 1–5 year agreements.",
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
      <body className={`${montserrat.variable} ${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}
