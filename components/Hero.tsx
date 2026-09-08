"use client"

import { scrollToSection } from "@/lib/smoothScroll"
import { AREAS } from "@/lib/areas"
import { Skyline } from "@/components/Skyline"

const stats = [
  { value: "100%", label: "Your rent, guaranteed" },
  { value: "0", label: "Void periods" },
  { value: "1–5yr", label: "Agreement terms" },
  { value: "24/7", label: "We handle everything" },
]

const trust = ["UK registered & insured", "Zero void periods", "48-hour response"]

/** CSS entrance: class + stagger delay via a custom property. */
const rise = (delay = 0) => ({ style: { "--rise-delay": `${delay}s` } as React.CSSProperties })


export function Hero() {
  const areaNames = AREAS.map((a) => a.name.replace(/^the /, ""))
  const strip = [...areaNames, ...areaNames]

  return (
    <section id="hero" className="light-glow relative overflow-hidden bg-white">
      <Skyline />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-4 pt-36 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:pt-44 lg:pb-28">
        <div>
          <span className="eyebrow">
            Guaranteed Rent &amp; Hands-Off Management
          </span>

          <h1 className="display mt-8 text-[2.35rem] sm:text-[3.4rem] md:text-[4.3rem]">
            Guaranteed Rent.
            <br />
            Zero Voids.
            <br />
            <strong className="gold-text">Professionally Managed.</strong>
          </h1>

          <p {...rise(0.2)} className="rise mt-7 max-w-xl font-body text-[1.02rem] font-light leading-[1.85] text-grey-600">
            We lease properties across London and the South East on guaranteed rent agreements,
            host vetted professional guests, and manage everything, so landlords receive reliable
            income every month without the hassle.
          </p>

          <div {...rise(0.3)} className="rise mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollToSection("contact")} className="btn btn-gold btn-arrow">
              Get a Rent Quote
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

        <div {...rise(0.35)} className="rise lg:justify-self-end">
          <div className="float card relative w-full max-w-md p-8 sm:p-10">
            <span className="absolute top-0 left-10 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
            <p className="eyebrow">The Alali Promise</p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-9">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="numeral gold-text text-[2.5rem] sm:text-[2.9rem]">{s.value}</p>
                  <p className="mt-2 font-body text-[0.8rem] text-grey-600">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center justify-between gap-4 border-t border-gold/15 pt-6">
              <span className="flex items-center gap-2.5 font-body text-[0.8rem] text-charcoal">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Accepting properties now
              </span>
              <button
                onClick={() => scrollToSection("process")}
                className="cursor-pointer font-body text-[0.8rem] font-medium text-gold-deep transition-colors hover:text-gold"
              >
                See how &rarr;
              </button>
            </div>
          </div>
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
