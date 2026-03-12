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
  title: "Alali Homes — Guaranteed Rent & Corporate Lettings | UK",
  description:
    "Alali Homes Ltd offers UK landlords guaranteed rent through corporate lets and professional property management. Zero voids, no upfront fees, fully managed 1-5 year agreements.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Alali Homes — Guaranteed Rent & Corporate Lettings",
    description:
      "We lease your property, pay guaranteed rent every month, and manage everything to a professional standard. No voids. No hassle.",
    type: "website",
  },
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
  "@type": "Organization",
  name: "Alali Homes Ltd",
  description:
    "UK-based corporate lettings and property management company offering guaranteed rent to landlords.",
  url: "https://alali-homes.vercel.app",
  email: "info@alalihomes.com",
  areaServed: "United Kingdom",
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
      </head>
      <body className={`${montserrat.variable} ${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}
