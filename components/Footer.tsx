import { Instagram } from "lucide-react"

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
            <div aria-label="Alali Homes — Corporate Lettings">
              <span className="font-display text-2xl font-light tracking-wide text-white">
                Alali
              </span>
              <span className="ml-1.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                Homes
              </span>
            </div>
            <p className="mt-4 font-body text-[0.85rem] font-light leading-relaxed text-white/60">
              UK-based corporate lettings and property management. Guaranteed rent, zero voids,
              fully managed.
            </p>
            {/* Social links — min 44px touch targets */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[0.85rem] font-light text-white/60 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[0.85rem] font-light text-white/60 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[0.85rem] font-light text-white/60 transition-colors duration-200 hover:text-gold"
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
          <p className="font-body text-[0.75rem] font-light text-white/50">
            &copy; 2026 Alali Homes Ltd. All rights reserved.
          </p>
          <p className="font-body text-[0.75rem] font-light text-white/50">
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  )
}
