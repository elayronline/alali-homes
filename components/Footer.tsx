import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "Corporate Lets", href: "#landlords" },
  { label: "Guaranteed Rent", href: "#landlords" },
  { label: "Serviced Accommodation", href: "#process" },
  { label: "Property Management", href: "#about" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
]

export function Footer() {
  return (
    <footer className="border-t border-grey-200 bg-charcoal px-4 pt-16 pb-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + desc + social */}
          <div>
            <Image
              src="/logo.png"
              alt="Alali Homes — Corporate Lettings"
              width={120}
              height={50}
              className="h-14 w-auto"
            />
            <p className="mt-4 font-body text-[0.85rem] font-light leading-relaxed text-white/50">
              UK-based corporate lettings and property management. Guaranteed rent, zero voids,
              fully managed.
            </p>
            {/* Social links — min 44px touch targets */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/442045158438"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Message us on WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[0.85rem] font-light text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[0.85rem] font-light text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[0.85rem] font-light text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/8" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-[0.75rem] font-light text-white/40">
            &copy; 2026 Alali Homes Ltd. All rights reserved.
          </p>
          <p className="font-body text-[0.75rem] font-light text-white/40">
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  )
}
