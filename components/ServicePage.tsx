import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HowItWorks } from "@/components/HowItWorks"
import { CTABanner } from "@/components/CTABanner"
import { GoldDivider } from "@/components/GoldDivider"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Skyline } from "@/components/Skyline"
import { AREAS, AREA_SERVED } from "@/lib/areas"
import type { ServiceContent } from "@/lib/services"

const SITE = "https://www.alalihomes.com"

export function serviceMetadata(s: ServiceContent): Metadata {
  const url = `${SITE}/${s.slug}`
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: url },
    openGraph: {
      title: s.title,
      description: s.description,
      url,
      siteName: "Alali Homes",
      type: "website",
      locale: "en_GB",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${s.eyebrow} with Alali Homes` }],
    },
    twitter: { card: "summary_large_image", title: s.title, description: s.description, images: ["/og-image.png"] },
  }
}

export function ServicePage({ content: s }: { content: ServiceContent }) {
  const url = `${SITE}/${s.slug}`

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: s.eyebrow, item: url },
    ],
  }

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${s.h1} ${s.h1Gold}`,
    serviceType: s.eyebrow,
    description: s.strap,
    url,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: AREA_SERVED,
    audience: { "@type": "Audience", audienceType: "Landlords and property owners" },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <Navbar />
      <main>
        {/* Hero */}
        <section className="light-glow relative overflow-hidden px-4 pt-36 pb-20 sm:px-6 lg:pt-44 lg:pb-24">
          <Skyline className="opacity-80" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="font-body text-xs text-grey-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-gold-dark">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-charcoal">{s.eyebrow}</li>
              </ol>
            </nav>
            <span className="eyebrow mt-8">{s.eyebrow}</span>
            <h1 className="display mt-6 max-w-4xl text-[2.2rem] sm:text-[3.1rem] md:text-[3.9rem]">
              {s.h1} <strong className="gold-text">{s.h1Gold}</strong>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[1.02rem] font-light leading-[1.85] text-grey-600">{s.strap}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-gold btn-arrow">Get a Guaranteed Rent Offer</a>
              <a href="#process" className="btn btn-outline-dark">How It Works</a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-5 font-body text-[0.98rem] leading-[1.85] text-grey-600">
            {s.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* Points */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="display text-center text-[1.8rem] sm:text-[2.3rem] md:text-[2.7rem]">{s.pointsHeading}</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.points.map((pt) => (
                <div key={pt.title} className="card p-7">
                  <h3 className="font-display text-lg font-semibold text-charcoal">{pt.title}</h3>
                  <p className="mt-3 font-body text-[0.92rem] leading-[1.8] text-grey-600">{pt.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />
        <HowItWorks />
        <GoldDivider />

        {/* FAQ */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="eyebrow eyebrow-center">FAQ</span>
              <h2 className="display mt-5 text-[1.8rem] sm:text-[2.3rem]">
                {s.eyebrow}: <strong className="gold-text">common questions</strong>
              </h2>
            </div>
            <dl className="mt-10 divide-y divide-gold/15">
              {s.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-display text-base font-semibold text-charcoal">{f.q}</dt>
                  <dd className="mt-2 font-body text-[0.95rem] leading-[1.8] text-grey-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Areas */}
        <section className="bg-cream px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="eyebrow">Areas we cover</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-body text-[0.9rem]">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Link href={`/guaranteed-rent/${a.slug}`} className="text-charcoal hover:text-gold">
                    Guaranteed rent {a.name.replace(/^the /, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <GoldDivider />
        <CTABanner />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
