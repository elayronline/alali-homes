"use client"

import { motion } from "framer-motion"

/**
 * Sample figures for the illustrative dashboard only. They are labelled on the page as an
 * example, never as results or a forecast. The fee and payout are derived from the gross
 * figure so the arithmetic shown is always exact.
 */
const FEE_RATE = 0.15
const SAMPLE = [
  { month: "Apr", gross: 2600 },
  { month: "May", gross: 2900 },
  { month: "Jun", gross: 3100 },
  { month: "Jul", gross: 3400 },
  { month: "Aug", gross: 3300 },
  { month: "Sep", gross: 3200 },
].map((m) => ({ ...m, fee: m.gross * FEE_RATE, payout: m.gross * (1 - FEE_RATE) }))

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n)

const latest = SAMPLE[SAMPLE.length - 1]
const maxGross = Math.max(...SAMPLE.map((m) => m.gross))
const totalPayout = SAMPLE.reduce((sum, m) => sum + m.payout, 0)

const points = [
  "What your property earned, month by month",
  "Our 15% fee and your payout, line by line",
  "Running totals, alongside your monthly statement",
]

export function LandlordPortal() {
  return (
    <section id="portal" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow">Landlord Portal</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem]">
            See every pound your property earns, <strong className="gold-text">month by month.</strong>
          </h2>
          <p className="mt-6 max-w-xl font-body text-[0.98rem] font-light leading-[1.85] text-grey-600">
            Every Alali landlord gets their own portal. Log in any time to see what your property earned,
            what our fee was, and exactly what was paid to you. No guesswork, no waiting for a call.
          </p>
          <ul className="mt-8 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold-pale/60">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-gold-deep">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="font-body text-[0.95rem] font-light leading-relaxed text-grey-600">{p}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="card overflow-hidden p-0">
            {/* window bar */}
            <div className="flex items-center justify-between gap-4 border-b border-gold/15 bg-white px-5 py-3.5 sm:px-7">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-grey-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-grey-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-grey-200" />
              </div>
              <p className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                Alali Landlord Portal
              </p>
            </div>

            <div className="bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-[1.05rem] font-semibold text-charcoal">Example property</p>
                <p className="font-body text-[0.78rem] text-grey-500">September statement</p>
              </div>

              <dl className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Earned", value: latest.gross, tone: "text-charcoal" },
                  { label: "Our fee (15%)", value: latest.fee, tone: "text-grey-600" },
                  { label: "Paid to you", value: latest.payout, tone: "gold-text" },
                ].map((t) => (
                  <div key={t.label} className="rounded-lg border border-gold/15 bg-cream px-3 py-3 sm:px-4">
                    <dt className="font-body text-[0.68rem] text-grey-500 sm:text-[0.72rem]">{t.label}</dt>
                    <dd className={`numeral mt-1 text-[1.15rem] sm:text-[1.5rem] ${t.tone}`}>{gbp(t.value)}</dd>
                  </div>
                ))}
              </dl>

              <div
                role="img"
                aria-label={`Example chart of monthly income from April to September, split into our 15% fee and the landlord's payout. ${SAMPLE.map((m) => `${m.month}: earned ${gbp(m.gross)}, paid ${gbp(m.payout)}`).join("; ")}.`}
                className="mt-7"
              >
                <div className="flex h-44 items-end gap-3 border-b border-grey-200 sm:h-52 sm:gap-5">
                  {SAMPLE.map((m) => (
                    <div key={m.month} className="flex h-full flex-1 flex-col justify-end">
                      <span className="mb-1.5 text-center font-body text-[0.62rem] text-grey-500 sm:text-[0.68rem]">
                        {gbp(m.payout)}
                      </span>
                      <div className="flex flex-col overflow-hidden rounded-t-md" style={{ height: `${(m.gross / maxGross) * 78}%` }}>
                        <div className="bg-charcoal/15" style={{ height: `${FEE_RATE * 100}%` }} />
                        <div className="flex-1 bg-gradient-to-b from-gold-light to-gold-dark" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex gap-3 sm:gap-5" aria-hidden="true">
                  {SAMPLE.map((m) => (
                    <span key={m.month} className="flex-1 text-center font-body text-[0.7rem] text-grey-500">
                      {m.month}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gold/15 pt-5">
                <div className="flex gap-5 font-body text-[0.75rem] text-grey-600" aria-hidden="true">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm bg-gold" /> Paid to you
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm bg-charcoal/15" /> Our fee
                  </span>
                </div>
                <p className="font-body text-[0.8rem] text-charcoal">
                  Paid to you, last 6 months: <strong className="font-semibold">{gbp(totalPayout)}</strong>
                </p>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-center font-body text-[0.75rem] font-light text-grey-500">
            Illustrative example with sample figures. Not real results, or a forecast of what any property will earn.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
