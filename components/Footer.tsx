import Image from "next/image"

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Corporate Lets",
  "Guaranteed Rent",
  "Serviced Accommodation",
  "Property Management",
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
          {/* Col 1: Logo + desc */}
          <div>
            <Image
              src="/logo.png"
              alt="Alali Homes"
              width={120}
              height={50}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 font-body text-[0.85rem] font-light leading-relaxed text-white/50">
              UK-based corporate lettings and property management. Guaranteed rent, zero voids,
              fully managed.
            </p>
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
                    className="font-body text-[0.85rem] font-light text-white/50 transition-colors hover:text-gold"
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
                <li key={link}>
                  <span className="font-body text-[0.85rem] font-light text-white/50">{link}</span>
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
                    className="font-body text-[0.85rem] font-light text-white/50 transition-colors hover:text-gold"
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
          <p className="font-body text-[0.75rem] font-light text-white/30">
            &copy; 2026 Alali Homes Ltd. All rights reserved.
          </p>
          <p className="font-body text-[0.75rem] font-light text-white/30">
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  )
}
