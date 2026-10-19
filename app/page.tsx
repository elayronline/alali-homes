import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ValueProposition } from "@/components/ValueProposition"
import { ForLandlords } from "@/components/ForLandlords"
import { MidPageCTA } from "@/components/MidPageCTA"
import { ForAgents } from "@/components/ForAgents"
import { HowItWorks } from "@/components/HowItWorks"
import { TrustCompliance } from "@/components/TrustCompliance"
import { FAQ } from "@/components/FAQ"
import { CTABanner } from "@/components/CTABanner"
import { Footer } from "@/components/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { GoldDivider } from "@/components/GoldDivider"
import { HashScroll } from "@/components/HashScroll"
import { LandlordPortal } from "@/components/LandlordPortal"
import { AREA_SERVED } from "@/lib/areas"
import { agentFAQs, landlordFAQs } from "@/lib/faqs"

// Homepage-only structured data (Organization + WebSite live in the root layout)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...landlordFAQs, ...agentFAQs].map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fully Managed Lettings for Landlords",
  description:
    "Alali Homes places vetted professional occupants in your property, handles everything day to day, and reports every month's income through a landlord portal, with a quarterly income floor.",
  provider: {
    "@type": "Organization",
    name: "Alali Homes Ltd",
    url: "https://www.alalihomes.com",
  },
  areaServed: AREA_SERVED,
  serviceType: "Property Management",
  offers: {
    "@type": "Offer",
    description: "Management fee of 15% of the rent paid by occupants, with a quarterly income floor.",
    priceCurrency: "GBP",
  },
}


export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HashScroll />
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <GoldDivider />
        <ForLandlords />
        <LandlordPortal />
        <MidPageCTA />
        <ForAgents />
        <GoldDivider />
        <HowItWorks />
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
