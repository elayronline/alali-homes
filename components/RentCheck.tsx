"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { scrollToSection } from "@/lib/smoothScroll"
import { FLOOR_SHARE, type Bedrooms, type PropertyType } from "@/lib/rentCheck"

type Result =
  | { ok: true; area: string; period: string; byBedrooms: number | null; byType: number | null; low: number; high: number }
  | { error: "invalid" | "not-found" | "lookup-failed" | "outside" | "no-data"; area?: string }

const BEDROOMS: { value: Bedrooms; label: string; noun: string }[] = [
  { value: "1", label: "1 (or studio)", noun: "1-bedroom homes" },
  { value: "2", label: "2", noun: "2-bedroom homes" },
  { value: "3", label: "3", noun: "3-bedroom homes" },
  { value: "4", label: "4 or more", noun: "homes with 4 or more bedrooms" },
]

const TYPES: { value: PropertyType; label: string; noun: string }[] = [
  { value: "flat", label: "Flat or maisonette", noun: "flats and maisonettes" },
  { value: "terraced", label: "Terraced house", noun: "terraced houses" },
  { value: "semi", label: "Semi-detached house", noun: "semi-detached houses" },
  { value: "detached", label: "Detached house", noun: "detached houses" },
]

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n)

const roundTen = (n: number) => Math.round(n / 10) * 10

const monthName = (period: string) =>
  new Date(`${period}-01T00:00:00Z`).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" })

/** Shows a range when the two official figures differ, a single figure when they don't. */
const range = (low: number, high: number) => (high - low < 10 ? gbp(low) : `${gbp(low)} – ${gbp(high)}`)

const ERRORS: Record<string, (area?: string) => string> = {
  invalid: () => "Please enter a full UK postcode, for example RG1 1JX.",
  "not-found": () => "We couldn’t find that postcode. Please check it and try again.",
  "lookup-failed": () => "We couldn’t check that postcode just now. Please try again in a moment.",
  outside: (area) =>
    `That postcode is in ${area ?? "an area"} we don’t currently cover. We work across London and the South East.`,
  "no-data": (area) =>
    `The ONS doesn’t publish rent figures for ${area ?? "that area"}, so we can’t show a figure here. Request a written estimate and we’ll assess your property directly.`,
}

export function RentCheck() {
  const [postcode, setPostcode] = useState("")
  const [bedrooms, setBedrooms] = useState<Bedrooms | "">("")
  const [type, setType] = useState<PropertyType | "">("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!bedrooms || !type) return
    setLoading(true)
    setResult(null)
    try {
      const qs = new URLSearchParams({ postcode, bedrooms, type })
      const res = await fetch(`/api/rent-check?${qs}`)
      setResult(await res.json())
    } catch {
      setResult({ error: "lookup-failed" })
    } finally {
      setLoading(false)
    }
  }

  const requestEstimate = () => {
    window.dispatchEvent(new CustomEvent("alali:postcode", { detail: postcode.trim().toUpperCase() }))
    scrollToSection("contact")
  }

  const bedNoun = BEDROOMS.find((b) => b.value === bedrooms)?.noun
  const typeNoun = TYPES.find((t) => t.value === type)?.noun
  const label = "mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal"

  return (
    <section id="rent-check" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow eyebrow-center">Check Your Area</span>
          <h2 className="display mt-5 text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem]">
            What does a home like yours <strong className="gold-text">rent for?</strong>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-[0.98rem] font-light leading-[1.85] text-grey-600">
            Enter your postcode, bedrooms and property type. We&apos;ll show the official average long-term
            rent for similar homes in your area, and the income floor that would sit under your property.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card mx-auto mt-12 max-w-4xl p-6 sm:p-10"
        >
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-[1fr_1fr_1.2fr_auto] sm:items-end">
            <div>
              <label htmlFor="rc-postcode" className={label}>Property postcode</label>
              <input
                id="rc-postcode"
                type="text"
                required
                autoComplete="postal-code"
                placeholder="e.g. RG1 1JX"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="field"
              />
            </div>
            <div>
              <label htmlFor="rc-bedrooms" className={label}>Bedrooms</label>
              <select
                id="rc-bedrooms"
                required
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value as Bedrooms)}
                className="field cursor-pointer"
                style={{ color: bedrooms ? undefined : "#999999" }}
              >
                <option value="" disabled>Select</option>
                {BEDROOMS.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="rc-type" className={label}>Property type</label>
              <select
                id="rc-type"
                required
                value={type}
                onChange={(e) => setType(e.target.value as PropertyType)}
                className="field cursor-pointer"
                style={{ color: type ? undefined : "#999999" }}
              >
                <option value="" disabled>Select</option>
                {TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" disabled={loading} className="btn btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {loading ? "Checking..." : "Check"}
            </button>
          </form>

          <div aria-live="polite">
            {result && "error" in result && (
              <p className="mt-8 rounded-lg bg-cream px-5 py-4 font-body text-[0.9rem] text-charcoal">
                {ERRORS[result.error](result.area)}
              </p>
            )}

            {result && "ok" in result && (
              <div className="mt-8 border-t border-gold/15 pt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-gold/15 bg-cream p-6">
                    <p className="font-body text-[0.8rem] text-grey-600">
                      Typical long-term rent for similar homes in {result.area}
                    </p>
                    <p className="numeral mt-2 text-[1.8rem] text-charcoal sm:text-[2.1rem]">
                      {range(result.low, result.high)}
                      <span className="ml-1.5 font-body text-[0.85rem] font-normal text-grey-500">a month</span>
                    </p>
                  </div>
                  <div className="rounded-xl border border-gold/30 bg-gold-pale/40 p-6">
                    <p className="font-body text-[0.8rem] text-grey-600">Your income floor would be around</p>
                    <p className="numeral gold-text mt-2 text-[1.8rem] sm:text-[2.1rem]">
                      {range(roundTen(result.low * FLOOR_SHARE), roundTen(result.high * FLOOR_SHARE))}
                      <span className="ml-1.5 font-body text-[0.85rem] font-normal text-grey-500">a month</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 font-body text-[0.82rem] font-light leading-relaxed text-grey-600">
                  <p>
                    <strong className="font-medium text-charcoal">Where this comes from:</strong> the Office for
                    National Statistics average monthly rent in {result.area} for{" "}
                    {[
                      result.byBedrooms !== null && `${bedNoun} (${gbp(result.byBedrooms)})`,
                      result.byType !== null && `${typeNoun} (${gbp(result.byType)})`,
                    ]
                      .filter(Boolean)
                      .join(" and for ")}
                    , {monthName(result.period)}. ONS publishes these two averages separately, so we show both.
                  </p>
                  <p>
                    <strong className="font-medium text-charcoal">The income floor:</strong> if your payouts across a
                    quarter fall below {FLOOR_SHARE * 100}% of your property&apos;s long-term market rent, we reduce or
                    waive our fee to make up the difference. The exact market rent figure is agreed in writing for
                    your property.
                  </p>
                  <p>
                    These are official averages for long-term lets in your area, not a forecast of what your
                    property will earn with us. Your written estimate is based on evidence for your specific
                    property.
                  </p>
                </div>

                <button onClick={requestEstimate} className="btn btn-gold btn-arrow mt-8">
                  Request My Written Estimate
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
