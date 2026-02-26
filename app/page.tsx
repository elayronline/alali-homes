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
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { GoldDivider } from "@/components/GoldDivider"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProposition />
      <GoldDivider />
      <ForLandlords />
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
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
