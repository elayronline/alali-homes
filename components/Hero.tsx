"use client"

import { scrollToSection } from "@/lib/smoothScroll"
import { AREAS } from "@/lib/areas"

const stats = [
  { value: "100%", label: "Your rent, guaranteed" },
  { value: "0", label: "Void periods" },
  { value: "1–5yr", label: "Agreement terms" },
  { value: "24/7", label: "We handle everything" },
]

const trust = ["UK registered & insured", "Zero void periods", "48-hour response"]

/** CSS entrance: class + stagger delay via a custom property. */
const rise = (delay = 0) => ({ className: "rise", style: { "--rise-delay": `${delay}s` } as React.CSSProperties })

/** Fine architectural line-art: a terrace roofline drawn in gold hairlines. */
function Skyline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 320"
      preserveAspectRatio="xMaxYMax meet"
      className="pointer-events-none absolute right-0 bottom-0 z-0 h-[42%] w-auto max-w-[94vw] text-gold opacity-[0.26] lg:h-[60%]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 300H900" strokeOpacity="0.6" />
      <path d="M40 300V150l60-40 60 40v150" />
      <path d="M70 300v-60h60v60M85 190h30v30H85zM60 130v-25h10v18" />
      <path d="M160 300V170l70-50 70 50v130" />
      <path d="M195 300v-70h70v70M210 200h40v36h-40zM215 135v-25h10v18M275 135v-25h10v18" />
      <path d="M300 300V90h120v210" />
      <path d="M300 90l60-30 60 30M320 120h30v30h-30zM370 120h30v30h-30zM320 175h30v30h-30zM370 175h30v30h-30zM345 300v-60h30v60" />
      <path d="M440 300V130h180v170" />
      <path d="M440 130l90-40 90 40M470 300v-45a20 20 0 0 1 40 0v45M550 300v-45a20 20 0 0 1 40 0v45M465 170h30v35h-30zM520 170h30v35h-30zM575 170h30v35h-30z" />
      <path d="M640 300V180l60-45 60 45v120" />
      <path d="M670 300v-55h60v55M680 210h40v30h-40zM655 150v-25h10v18" />
      <path d="M780 300V200l50-35 50 35v100" />
      <path d="M805 300v-45h50v45M815 225h30v25h-30z" />
      <circle cx="740" cy="70" r="46" strokeOpacity="0.45" />
      <circle cx="740" cy="70" r="72" strokeOpacity="0.25" />
      <circle cx="740" cy="70" r="98" strokeOpacity="0.12" />
    </svg>
  )
}

export function Hero() {
  const areaNames = AREAS.map((a) => a.name.replace(/^the /, ""))
  const strip = [...areaNames, ...areaNames]

  return (
    <section id="hero" className="dark-glow grain relative overflow-hidden text-white">
      <Skyline />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-4 pt-36 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:pt-44 lg:pb-28">
        <div>
          <span {...rise(0)} className="rise eyebrow eyebrow-light">
            Guaranteed Rent &amp; Hands-Off Management
          </span>

          <h1 {...rise(0.1)} className="rise display mt-8 text-[2.35rem] !text-white sm:text-[3.4rem] md:text-[4.3rem]">
            Guaranteed Rent.
            <br />
            Zero Voids.
            <br />
            <strong className="gold-text">Professionally Managed.</strong>
          </h1>

          <p {...rise(0.2)} className="rise mt-7 max-w-xl font-body text-[1.02rem] font-light leading-[1.85] text-white/65">
            We lease properties across London and the South East on guaranteed rent agreements,
            host vetted professional guests, and manage everything, so landlords receive reliable
            income every month without the hassle.
          </p>

          <div {...rise(0.3)} className="rise mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollToSection("contact")} className="btn btn-gold btn-arrow">
              Get a Rent Quote
            </button>
            <button onClick={() => scrollToSection("process")} className="btn btn-outline-light">
              How It Works
            </button>
          </div>

          <ul {...rise(0.45)} className="rise mt-10 flex flex-wrap gap-x-7 gap-y-3 font-body text-[0.78rem] tracking-wide text-white/50">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div {...rise(0.35)} className="rise lg:justify-self-end">
          <div className="float card-dark relative w-full max-w-md p-8 sm:p-10">
            <span className="absolute top-0 left-10 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
            <p className="eyebrow eyebrow-light">The Alali Promise</p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-9">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="numeral gold-text text-[2.5rem] sm:text-[2.9rem]">{s.value}</p>
                  <p className="mt-2 font-body text-[0.8rem] text-white/60">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <span className="flex items-center gap-2.5 font-body text-[0.8rem] text-white/75">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Accepting properties now
              </span>
              <button
                onClick={() => scrollToSection("process")}
                className="cursor-pointer font-body text-[0.8rem] font-medium text-gold-light transition-colors hover:text-gold"
              >
                See how &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/8">
        <div className="overflow-hidden py-4">
          <div className="marquee items-center gap-10 font-body text-[0.7rem] uppercase tracking-[0.28em] text-white/40">
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
