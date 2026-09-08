import Link from "next/link"
import { COUNTIES, REGIONS } from "@/lib/areas"

export function AreasWeCover() {
  const london = REGIONS.find((r) => r.slug === "london")
  const southEast = REGIONS.find((r) => r.slug === "south-east")

  return (
    <section id="areas" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow">Where We Operate</span>
            <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem]">
              Guaranteed rent across London <strong className="gold-text">&amp; the South East</strong>
            </h2>
          </div>
          <p className="max-w-xl font-body text-[0.98rem] font-light leading-[1.85] text-grey-600 lg:justify-self-end">
            We take on properties in every London borough and across the South East counties. Each
            area page explains where the professional-guest demand comes from locally and which
            properties suit it best.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {london && (
            <Link
              href={`/guaranteed-rent/${london.slug}`}
              className="dark-glow grain group relative overflow-hidden rounded-2xl p-9 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-11"
            >
              <div className="relative z-10">
                <span className="eyebrow eyebrow-light">Region</span>
                <h3 className="display mt-4 text-[1.8rem] !text-white sm:text-[2.2rem]">
                  Guaranteed Rent <strong className="gold-text">London</strong>
                </h3>
                <p className="mt-4 max-w-sm font-body text-[0.92rem] font-light leading-relaxed text-white/60">
                  All 32 boroughs, from the City and Canary Wharf to Croydon, Bromley, Ealing and Barnet.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-body text-[0.85rem] font-semibold text-gold-light">
                  Explore London
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </Link>
          )}
          {southEast && (
            <Link
              href={`/guaranteed-rent/${southEast.slug}`}
              className="dark-glow grain group relative overflow-hidden rounded-2xl p-9 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-11"
            >
              <div className="relative z-10">
                <span className="eyebrow eyebrow-light">Region</span>
                <h3 className="display mt-4 text-[1.8rem] !text-white sm:text-[2.2rem]">
                  Guaranteed Rent <strong className="gold-text">South East</strong>
                </h3>
                <p className="mt-4 max-w-sm font-body text-[0.92rem] font-light leading-relaxed text-white/60">
                  Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-body text-[0.85rem] font-semibold text-gold-light">
                  Explore the South East
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </Link>
          )}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/guaranteed-rent/${c.slug}`}
                className="group flex items-center justify-between rounded-lg border border-gold/20 bg-white px-5 py-4 font-body text-[0.92rem] text-charcoal transition-all duration-200 hover:border-gold hover:bg-cream"
              >
                <span>{c.name}</span>
                <span className="text-gold transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
