"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"

const roleOptions = ["Landlord", "Letting Agent", "Estate Agent", "Other"]

const reassurance = ["No obligation, no hard sell", "Written rent figure within 48 hours", "Your details are never shared"]

export function CTABanner() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "", postcode: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0c711466-2865-4ee1-97fd-410b7bb92a36",
          subject: `New Enquiry — ${formData.role} — ${formData.name}`,
          from_name: "Alali Homes Website",
          replyto: formData.email,
          _template: "table",
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Phone Number": formData.phone || "Not provided",
          "I am a": formData.role,
          "Property Postcode": formData.postcode || "Not provided",
          "Message": formData.message || "No additional details",
        }),
      })
      if (res.ok) setSubmitted(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const label = "mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal"

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl shadow-[0_40px_80px_-48px_rgba(13,13,13,0.25)] lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="light-glow relative border border-gold/15 p-9 sm:p-12 lg:border-r-0"><span className="absolute top-0 left-9 h-px w-28 bg-gradient-to-r from-gold to-transparent sm:left-12" />
          <div className="relative z-10 flex h-full flex-col">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="display mt-5 text-[1.9rem] sm:text-[2.3rem]">
              Let&apos;s start a <strong className="gold-text">conversation</strong>
            </h2>
            <p className="mt-5 font-body text-[0.95rem] font-light leading-[1.8] text-grey-600">
              Tell us about your property and we&apos;ll come back with a guaranteed rent figure within 48 hours.
            </p>

            <ul className="mt-8 space-y-3">
              {reassurance.map((r) => (
                <li key={r} className="flex items-center gap-3 font-body text-[0.88rem] text-charcoal">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold-pale text-gold-dark">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-3 border-t border-gold/15 pt-8">
              <a href="tel:+442045158438" className="flex items-center gap-3 font-body text-[0.95rem] text-charcoal transition-colors hover:text-gold-dark">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                020 4515 8438
              </a>
              <a href="mailto:info@alalihomes.com" className="flex items-center gap-3 font-body text-[0.95rem] text-charcoal transition-colors hover:text-gold-dark">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                info@alalihomes.com
              </a>
            </div>
          </div>
        </div>

        <div id="contact-form" className="border border-gold/15 bg-white p-6 sm:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="alert" aria-live="polite">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-pale">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold-dark">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">Thank you — we&apos;ve received your details.</h3>
              <p className="mt-3 max-w-md font-body text-[0.92rem] text-grey-600">
                A member of our team will review your property and be in touch within{" "}
                <strong className="font-medium text-charcoal">48 hours</strong> with a guaranteed rent figure.
              </p>
              <p className="mt-2 font-body text-[0.82rem] text-grey-400">Check your inbox and phone for our response.</p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: "", email: "", phone: "", role: "", postcode: "", message: "" })
                }}
                className="mt-7 cursor-pointer font-body text-sm font-medium text-gold-dark transition-colors hover:text-gold"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-center font-body text-[0.85rem] text-red-600">
                  Something went wrong. Please try again or email us at info@alalihomes.com.
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="form-name" className={label}>Full Name <span className="text-gold">*</span></label>
                  <input id="form-name" type="text" placeholder="John Smith" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="field" />
                </div>
                <div>
                  <label htmlFor="form-email" className={label}>Email Address <span className="text-gold">*</span></label>
                  <input id="form-email" type="email" placeholder="john@example.co.uk" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="field" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="form-phone" className={label}>Phone Number</label>
                  <input id="form-phone" type="tel" placeholder="07XXX XXX XXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="field" />
                </div>
                <div>
                  <label htmlFor="form-role" className={label}>I am a... <span className="text-gold">*</span></label>
                  <select id="form-role" required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="field cursor-pointer" style={{ color: formData.role ? undefined : "#999999" }}>
                    <option value="" disabled>Select one</option>
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="form-postcode" className={label}>Property Postcode</label>
                <input id="form-postcode" type="text" placeholder="e.g. SE1 1AA" value={formData.postcode} onChange={(e) => setFormData({ ...formData, postcode: e.target.value })} className="field" />
              </div>
              <div>
                <label htmlFor="form-message" className={label}>Anything else we should know?</label>
                <textarea id="form-message" placeholder="Number of bedrooms, current situation, what you're looking for..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="field resize-none" />
              </div>
              <button type="submit" disabled={submitting} className="btn btn-gold btn-arrow w-full disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Get My Guaranteed Rent Figure"
                )}
              </button>
              <p className="text-center font-body text-[0.75rem] text-grey-400">Your details are safe. We never share your information with third parties.</p>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}
