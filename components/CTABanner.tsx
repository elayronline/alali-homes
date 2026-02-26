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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form data:", formData)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[2rem] leading-tight font-light text-charcoal sm:text-[2.6rem]"
        >
          Ready to Hand Over <strong className="font-semibold text-gold">the Hassle?</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-body text-[0.92rem] font-light text-grey-600"
        >
          Whether you&apos;re a landlord or an agent, we&apos;d love to hear about your property.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => {
              const form = document.getElementById("contact-form")
              form?.scrollIntoView({ behavior: "smooth" })
            }}
            className="cursor-pointer rounded-sm bg-gold px-7 py-3.5 font-body text-[0.9rem] font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
          >
            Speak To Our Team
          </button>
          <a
            href="https://wa.me/44XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-charcoal/20 px-7 py-3.5 font-body text-[0.9rem] font-medium text-charcoal transition-all hover:border-gold hover:text-gold"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>

        {/* Contact details row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="tel:+44XXXXXXXXXX"
            className="flex items-center gap-2 font-body text-[0.85rem] text-grey-600 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            +44 (0) XXX XXXX XXX
          </a>
          <a
            href="mailto:info@alalihomes.co.uk"
            className="flex items-center gap-2 font-body text-[0.85rem] text-grey-600 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" />
            info@alalihomes.co.uk
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-xl border border-grey-200 bg-grey-50 p-6 text-left shadow-sm sm:p-8"
        >
          {submitted ? (
            <div className="py-8 text-center">
              <h3 className="font-display text-2xl font-semibold text-charcoal">
                Thank you for getting in touch.
              </h3>
              <p className="mt-3 font-body text-[0.9rem] text-grey-600">
                We&apos;ll review your details and be in touch within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 cursor-pointer font-body text-sm text-gold transition-colors hover:text-gold-dark"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-grey-200 bg-white px-4 py-3 font-body text-[0.9rem] text-charcoal placeholder-grey-400 outline-none transition-colors focus:border-gold"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-grey-200 bg-white px-4 py-3 font-body text-[0.9rem] text-charcoal placeholder-grey-400 outline-none transition-colors focus:border-gold"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-grey-200 bg-white px-4 py-3 font-body text-[0.9rem] text-charcoal placeholder-grey-400 outline-none transition-colors focus:border-gold"
                />
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full cursor-pointer rounded-lg border border-grey-200 bg-white px-4 py-3 font-body text-[0.9rem] text-charcoal outline-none transition-colors focus:border-gold"
                  style={{ color: formData.role ? undefined : "#999999" }}
                >
                  <option value="" disabled>
                    I am a...
                  </option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                placeholder="Property Postcode"
                value={formData.postcode}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                className="w-full rounded-lg border border-grey-200 bg-white px-4 py-3 font-body text-[0.9rem] text-charcoal placeholder-grey-400 outline-none transition-colors focus:border-gold"
              />
              <textarea
                placeholder="Tell us about your property..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-grey-200 bg-white px-4 py-3 font-body text-[0.9rem] text-charcoal placeholder-grey-400 outline-none transition-colors focus:border-gold"
              />
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-gold px-8 py-3.5 font-body text-[0.95rem] font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Submit Your Property
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
