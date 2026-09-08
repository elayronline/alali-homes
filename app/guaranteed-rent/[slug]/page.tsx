import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HowItWorks } from "@/components/HowItWorks"
import { CTABanner } from "@/components/CTABanner"
import { GoldDivider } from "@/components/GoldDivider"
import { ScrollToTop } from "@/components/ScrollToTop"
import { AREAS, getArea, getChildren, REGIONS } from "@/lib/areas"

const SITE = "https://www.alalihomes.com"

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return {}
  const title = `Guaranteed Rent ${area.name.replace(/^the /, "")} | Landlords in ${area.name} | Alali Homes`
  const description = `Guaranteed rent for landlords in ${area.name}. Alali Homes leases your property, pays a fixed rent every month for 1 to 5 years, hosts vetted professional guests and manages everything. Zero voids.`
  const url = `${SITE}/guaranteed-rent/${area.slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Alali Homes",
      type: "website",
      locale: "en_GB",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Guaranteed rent in ${area.name} with Alali Homes` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) notFound()

  const parent = area.parent ? getArea(area.parent) : undefined
  const children = getChildren(area.slug)
  const siblings = parent ? getChildren(parent.slug).filter((a) => a.slug !== area.slug) : []
  const url = `${SITE}/guaranteed-rent/${area.slug}`
  const displayName = area.name.replace(/^the /, "")

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      ...(parent
        ? [{ "@type": "ListItem", position: 2, name: `Guaranteed Rent ${parent.name.replace(/^the /, "")}`, item: `${SITE}/guaranteed-rent/${parent.slug}` }]
        : []),
      { "@type": "ListItem", position: parent ? 3 : 2, name: `Guaranteed Rent ${displayName}`, item: url },
    ],
  }

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Guaranteed Rent for Landlords in ${area.name}`,
    serviceType: "Guaranteed rent and property management",
    description: area.strap,
    url,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: {
      "@type": area.kind === "region" && area.slug === "london" ? "City" : "AdministrativeArea",
      name: displayName,
    },
    offers: { "@type": "Offer", description: "Guaranteed rent agreements from 1 to 5 years.", priceCurrency: "GBP" },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
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
        <section className="dark-glow grain relative overflow-hidden px-4 pt-36 pb-20 text-white sm:px-6 lg:pt-44 lg:pb-24">
          <div className="relative z-10 mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="font-body text-xs text-white/45">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-gold-light">Home</Link></li>
                {parent && (
                  <>
                    <li aria-hidden="true">/</li>
                    <li><Link href={`/guaranteed-rent/${parent.slug}`} className="hover:text-gold-light">{parent.name.replace(/^the /, "")}</Link></li>
                  </>
                )}
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white/80">{displayName}</li>
              </ol>
            </nav>
            <span className="eyebrow eyebrow-light mt-8">Guaranteed Rent {displayName}</span>
            <h1 className="display mt-6 max-w-4xl text-[2.2rem] !text-white sm:text-[3.1rem] md:text-[3.9rem]">
              Guaranteed Rent for Landlords in <strong className="gold-text">{area.name}</strong>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[1.02rem] font-light leading-[1.85] text-white/65">{area.strap}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-gold btn-arrow">Get a Rent Quote</a>
              <a href="#process" className="btn btn-outline-light">How It Works</a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-5 font-body text-[0.98rem] leading-[1.85] text-grey-600">
            {area.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* Demand */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="eyebrow eyebrow-center">Who Stays Here</span>
              <h2 className="display mt-5 text-[1.8rem] sm:text-[2.3rem] md:text-[2.7rem]">
                Where the demand in <strong className="gold-text">{area.name}</strong> comes from
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {area.demand.map((d) => (
                <div key={d.title} className="card p-7">
                  <h3 className="font-display text-lg font-semibold text-charcoal">{d.title}</h3>
                  <p className="mt-3 font-body text-[0.92rem] leading-[1.8] text-grey-600">{d.text}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-14 max-w-3xl border-l-2 border-gold pl-6">
              <h3 className="font-display text-xl font-semibold text-charcoal">Properties that work in {area.name}</h3>
              <p className="mt-3 font-body text-[0.98rem] leading-[1.85] text-grey-600">{area.properties}</p>
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* Places */}
        <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="display text-center text-[1.8rem] sm:text-[2.3rem]">{area.placesLabel}</h2>
            {children.length > 0 ? (
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {children.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/guaranteed-rent/${c.slug}`}
                      className="card block p-6"
                    >
                      <span className="font-display text-base font-semibold text-charcoal">{c.name}</span>
                      <span className="mt-1 block font-body text-[0.82rem] text-grey-600">Guaranteed rent in {c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
                {area.places.map((p) => (
                  <li key={p} className="rounded-full border border-gold/25 bg-white px-4 py-1.5 font-body text-[0.85rem] text-charcoal shadow-[0_8px_20px_-16px_rgba(13,13,13,0.4)]">
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {area.kind === "region" && area.slug === "london" && (
              <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
                {area.places.map((p) => (
                  <li key={p} className="rounded-full border border-gold/25 bg-white px-4 py-1.5 font-body text-[0.85rem] text-charcoal shadow-[0_8px_20px_-16px_rgba(13,13,13,0.4)]">
                    {p}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-8 text-center font-body text-[0.9rem] text-grey-600">
              Not listed? If your property is {area.kind === "region" ? `in ${area.name}` : `in ${area.name} or nearby`}, send us the postcode and we will tell you whether we can guarantee it.
            </p>
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
                Guaranteed rent in {area.name}: <strong className="gold-text">common questions</strong>
              </h2>
            </div>
            <dl className="mt-10 divide-y divide-gold/15">
              {area.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-display text-base font-semibold text-charcoal">{f.q}</dt>
                  <dd className="mt-2 font-body text-[0.95rem] leading-[1.8] text-grey-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Related areas */}
        {(siblings.length > 0 || REGIONS.some((r) => r.slug !== area.slug)) && (
          <section className="bg-cream px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="eyebrow">Other areas we cover</h2>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-body text-[0.9rem]">
                {REGIONS.filter((r) => r.slug !== area.slug && r.slug !== area.parent).map((r) => (
                  <li key={r.slug}><Link href={`/guaranteed-rent/${r.slug}`} className="text-charcoal hover:text-gold">Guaranteed rent {r.name}</Link></li>
                ))}
                {parent && (
                  <li><Link href={`/guaranteed-rent/${parent.slug}`} className="text-charcoal hover:text-gold">All of {parent.name}</Link></li>
                )}
                {siblings.map((s) => (
                  <li key={s.slug}><Link href={`/guaranteed-rent/${s.slug}`} className="text-charcoal hover:text-gold">{s.name}</Link></li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <GoldDivider />
        <CTABanner />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
