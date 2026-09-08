import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ValueProposition } from "@/components/ValueProposition"
import { ForLandlords } from "@/components/ForLandlords"
import { MidPageCTA } from "@/components/MidPageCTA"
import { ForAgents } from "@/components/ForAgents"
import { HowItWorks } from "@/components/HowItWorks"
import { AreasWeCover } from "@/components/AreasWeCover"
import { TrustCompliance } from "@/components/TrustCompliance"
import { FAQ } from "@/components/FAQ"
import { CTABanner } from "@/components/CTABanner"
import { Footer } from "@/components/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { GoldDivider } from "@/components/GoldDivider"
import { AREA_SERVED } from "@/lib/areas"

// Homepage-only structured data (Organization + WebSite live in the root layout)
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
      name: "Who is responsible for compliance works?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If compliance works are needed before we take the property on, responsibilities are agreed in writing before signing.",
      },
    },
    {
      "@type": "Question",
      name: "Where do you operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London and the South East. That means all 32 London boroughs plus Kent, Surrey, East and West Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire. Each area has its own page on this site.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Guaranteed Rent for Landlords",
  description:
    "Alali Homes leases your property under a corporate let agreement and pays guaranteed rent every month for 1–5 years. Zero void periods, fully managed.",
  provider: {
    "@type": "Organization",
    name: "Alali Homes Ltd",
    url: "https://www.alalihomes.com",
  },
  areaServed: AREA_SERVED,
  serviceType: "Corporate Lettings & Property Management",
  offers: {
    "@type": "Offer",
    description: "Guaranteed rent agreements from 1 to 5 years.",
    priceCurrency: "GBP",
  },
}


export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <GoldDivider />
        <ForLandlords />
        <MidPageCTA />
        <ForAgents />
        <GoldDivider />
        <HowItWorks />
        <GoldDivider />
        <AreasWeCover />
        <GoldDivider />
        <TrustCompliance />
        <GoldDivider />
        <FAQ />
        <GoldDivider />
        <CTABanner />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
