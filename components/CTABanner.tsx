"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"

const roleOptions = ["Landlord", "Letting Agent", "Estate Agent", "Other"]

export function CTABanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    postcode: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission — replace with Formspree or backend
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  const inputClass =
    "w-full rounded-lg border border-grey-200 bg-white px-4 py-3.5 font-body text-[0.9rem] text-charcoal placeholder-grey-400 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/20"

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[1.6rem] leading-tight font-light text-charcoal sm:text-[2rem] md:text-[2.6rem]"
        >
          Let&apos;s Start a{" "}
          <strong className="font-semibold text-gold">Conversation</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-body text-[0.92rem] font-light text-grey-600"
        >
          No pressure, no hard sell. Tell us about your property and we&apos;ll
          come back with a guaranteed rent figure within 48 hours.
        </motion.p>

        {/* Contact details row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="tel:+442045158438"
            className="flex items-center gap-2 font-body text-[0.85rem] text-grey-600 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            020 4515 8438
          </a>
          <a
            href="mailto:info@alalihomes.com"
            className="flex items-center gap-2 font-body text-[0.85rem] text-grey-600 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            info@alalihomes.com
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-xl border border-grey-200 bg-grey-50 p-4 text-left shadow-sm sm:p-8"
        >
          {submitted ? (
            <div className="py-10 text-center">
              {/* Success tick */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-charcoal">
                Thank you — we&apos;ve received your details.
              </h3>
              <p className="mt-3 font-body text-[0.9rem] text-grey-600">
                A member of our team will review your property and be in touch
                within <strong className="font-medium text-charcoal">48 hours</strong> with
                a guaranteed rent figure.
              </p>
              <p className="mt-2 font-body text-[0.82rem] text-grey-400">
                Check your inbox and phone for our response.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: "", email: "", phone: "", role: "", postcode: "", message: "" })
                }}
                className="mt-6 cursor-pointer font-body text-sm text-gold transition-colors hover:text-gold-dark"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Reassurance strip */}
              <div className="mb-2 flex flex-wrap items-center justify-center gap-4 rounded-lg bg-gold-pale/40 px-4 py-3 text-center">
                <span className="font-body text-[0.78rem] font-medium text-gold-dark">
                  No upfront fees
                </span>
                <span className="hidden h-3 w-px bg-gold/30 sm:block" />
                <span className="font-body text-[0.78rem] font-medium text-gold-dark">
                  No obligation
                </span>
                <span className="hidden h-3 w-px bg-gold/30 sm:block" />
                <span className="font-body text-[0.78rem] font-medium text-gold-dark">
                  Response within 48 hours
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="form-name" className="mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    placeholder="John Smith"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="form-email" className="mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    placeholder="john@example.co.uk"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="form-phone" className="mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal">
                    Phone Number
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    placeholder="07XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="form-role" className="mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal">
                    I am a... <span className="text-gold">*</span>
                  </label>
                  <select
                    id="form-role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                    style={{ color: formData.role ? undefined : "#999999" }}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="form-postcode" className="mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal">
                  Property Postcode
                </label>
                <input
                  id="form-postcode"
                  type="text"
                  placeholder="e.g. B1 1AA"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="form-message" className="mb-1.5 block font-body text-[0.78rem] font-medium text-charcoal">
                  Anything else we should know?
                </label>
                <textarea
                  id="form-message"
                  placeholder="Number of bedrooms, current situation, what you're looking for..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full cursor-pointer rounded-lg bg-gold px-8 py-3.5 font-body text-[0.95rem] font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg focus:ring-2 focus:ring-gold/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
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
              <p className="text-center font-body text-[0.75rem] text-grey-400">
                Your details are safe. We never share your information with third parties.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
