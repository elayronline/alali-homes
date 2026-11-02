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
import { PropertyTypes } from "@/components/PropertyTypes"
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
  "@id": "https://www.alalihomes.com/#service",
  name: "Guaranteed Rent for Landlords",
  alternateName: ["Corporate Lets", "Guaranteed Rent Scheme", "Company Let"],
  description:
    "Alali Homes leases licensed HMOs, 2-4 bedroom properties and 1-bedroom self-contained flats on 3-5 year corporate leases, paying landlords a guaranteed fixed rent every month with full property management and dedicated tenant support included.",
  provider: { "@id": "https://www.alalihomes.com/#organization" },
  areaServed: AREA_SERVED,
  serviceType: "Guaranteed Rent",
  audience: { "@type": "Audience", audienceType: "Landlords and property owners" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Properties we lease on guaranteed rent",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Guaranteed rent for licensed HMOs", url: "https://www.alalihomes.com/hmo-guaranteed-rent" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate lets for 2-4 bedroom properties", url: "https://www.alalihomes.com/corporate-lets" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate lets for 1-bedroom self-contained flats", url: "https://www.alalihomes.com/corporate-lets" } },
    ],
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
        <PropertyTypes />
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
