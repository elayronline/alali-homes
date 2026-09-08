import Link from "next/link"
import { COUNTIES, REGIONS } from "@/lib/areas"

export function AreasWeCover() {
  const london = REGIONS.find((r) => r.slug === "london")
  const southEast = REGIONS.find((r) => r.slug === "south-east")

  return (
    <section id="areas" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
          Where We Operate
        </p>
        <h2 className="mt-3 text-center font-display text-2xl font-semibold text-charcoal sm:text-3xl">
          Guaranteed Rent Across London &amp; the South East
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-body text-[0.95rem] leading-[1.8] text-grey-600">
          We take on properties in every London borough and across the South East counties. Each area
          page explains where the corporate and contractor demand comes from locally and which
          properties suit it best.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {london && (
            <Link
              href={`/guaranteed-rent/${london.slug}`}
              className="group rounded-lg border border-gold/20 bg-cream p-8 transition-all hover:border-gold hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-gold">
                Guaranteed Rent London
              </h3>
              <p className="mt-2 font-body text-[0.9rem] leading-[1.7] text-grey-600">
                All 32 boroughs, from the City and Canary Wharf to Croydon, Bromley, Ealing and Barnet.
              </p>
            </Link>
          )}
          {southEast && (
            <Link
              href={`/guaranteed-rent/${southEast.slug}`}
              className="group rounded-lg border border-gold/20 bg-cream p-8 transition-all hover:border-gold hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-gold">
                Guaranteed Rent South East
              </h3>
              <p className="mt-2 font-body text-[0.9rem] leading-[1.7] text-grey-600">
                Kent, Surrey, Sussex, Hampshire, Berkshire, Buckinghamshire and Oxfordshire.
              </p>
            </Link>
          )}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/guaranteed-rent/${c.slug}`}
                className="block rounded-md border border-grey-200 px-4 py-3 font-body text-[0.9rem] text-charcoal transition-all hover:border-gold hover:text-gold"
              >
                Guaranteed rent in {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
