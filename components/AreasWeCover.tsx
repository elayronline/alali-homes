import Link from "next/link"
import { REGIONS } from "@/lib/areas"

export function AreasWeCover() {
  return (
    <section id="areas" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="eyebrow eyebrow-center">Where We Operate</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem]">
            Areas <strong className="gold-text">we cover</strong>
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <li key={r.slug}>
              <Link href={`/guaranteed-rent/${r.slug}`} className="card flex h-full flex-col p-7">
                <h3 className="font-display text-[1.15rem] font-semibold text-charcoal">
                  {r.name.replace(/^the /, "")}
                </h3>
                <p className="mt-3 font-body text-[0.9rem] font-light leading-relaxed text-grey-600">
                  {r.summary ?? [...r.places].sort((a, b) => a.localeCompare(b)).join(", ")}
                </p>
                {r.typesShort && (
                  <p className="mt-3 font-body text-[0.82rem] font-medium text-charcoal">{r.typesShort} only</p>
                )}
                <span className="mt-auto pt-5 font-body text-[0.82rem] font-medium text-gold-deep">
                  Guaranteed rent {r.name.replace(/^the /, "")} &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
