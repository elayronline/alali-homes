"use client"

import { scrollToSection } from "@/lib/smoothScroll"
import { AREAS } from "@/lib/areas"
import { Skyline } from "@/components/Skyline"

const trust = ["Fixed rent every month", "3–5 year corporate leases", "Full property management included"]

/** CSS entrance: class + stagger delay via a custom property. */
const rise = (delay = 0) => ({ style: { "--rise-delay": `${delay}s` } as React.CSSProperties })


export function Hero() {
  const areaNames = AREAS.map((a) => a.name.replace(/^the /, ""))
  const strip = [...areaNames, ...areaNames]

  return (
    <section id="hero" className="light-glow relative overflow-hidden bg-white">
      <Skyline />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-36 pb-20 sm:px-6 lg:pt-44 lg:pb-28">
        <div className="max-w-4xl">
          <span className="eyebrow">
            Guaranteed Rent &amp; Corporate Lets
          </span>

          <h1 className="display mt-8 text-[2.35rem] sm:text-[3.4rem] md:text-[4.3rem]">
            Guaranteed Rent.{" "}
            <br />
            Zero Voids.{" "}
            <br />
            <strong className="gold-text">No Management Hassle.</strong>
          </h1>

          <p {...rise(0.2)} className="rise mt-7 max-w-xl font-body text-[1.02rem] font-light leading-[1.85] text-grey-600">
            We lease licensed HMOs, 2–4 bed properties and 1-bed self-contained flats on 3–5 year corporate leases.
            You receive a fixed rent every month, occupied or not, while we provide full property management and dedicated support for
            tenants, and keep your property professionally maintained for the whole term.
          </p>

          <div {...rise(0.3)} className="rise mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollToSection("contact")} className="btn btn-gold btn-arrow">
              Get a Guaranteed Rent Offer
            </button>
            <button onClick={() => scrollToSection("process")} className="btn btn-outline-dark">
              How It Works
            </button>
          </div>

          <ul {...rise(0.45)} className="rise mt-10 flex flex-wrap gap-x-7 gap-y-3 font-body text-[0.78rem] tracking-wide text-grey-500">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-gold/15 bg-cream">
        <div className="overflow-hidden py-4">
          <div className="marquee items-center gap-10 font-body text-[0.7rem] uppercase tracking-[0.28em] text-grey-500">
            {strip.map((n, i) => (
              <span key={`${n}-${i}`} className="flex items-center gap-10">
                {n}
                <span className="h-1 w-1 rounded-full bg-gold/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
