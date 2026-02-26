import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ValueProposition } from "@/components/ValueProposition"
import { ForLandlords } from "@/components/ForLandlords"
import { ForAgents } from "@/components/ForAgents"
import { HowItWorks } from "@/components/HowItWorks"
import { TrustCompliance } from "@/components/TrustCompliance"
import { FAQ } from "@/components/FAQ"
import { CTABanner } from "@/components/CTABanner"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProposition />
      <ForLandlords />
      <ForAgents />
      <HowItWorks />
      <TrustCompliance />
      <FAQ />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
