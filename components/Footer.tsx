import { Instagram } from "lucide-react"
import { COUNTIES, REGIONS } from "@/lib/areas"

const areaLinks = [
  ...REGIONS.map((r) => ({ label: `Guaranteed Rent ${r.name.replace(/^the /, "")}`, href: `/guaranteed-rent/${r.slug}` })),
  ...COUNTIES.map((c) => ({ label: c.name, href: `/guaranteed-rent/${c.slug}` })),
]

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
]

const serviceLinks = [
  { label: "Hands-Off Management", href: "/#landlords" },
  { label: "Guaranteed Rent", href: "/#landlords" },
  { label: "Professional Guests", href: "/#value" },
  { label: "Property Management", href: "/#about" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
]

const linkClass =
  "font-body text-[0.85rem] font-light text-white/55 transition-colors duration-200 hover:text-gold-light"
const headingClass = "font-body text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold"

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className={headingClass}>{title}</h4>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-charcoal px-4 pt-20 pb-8 text-white sm:px-6">
      <div className="hairline absolute top-0 right-0 left-0" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div aria-label="Alali Homes — Guaranteed Rent & Hands-Off Management">
              <span className="font-display text-3xl font-light tracking-wide text-white">Alali</span>
              <span className="ml-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Homes
              </span>
            </div>
            <p className="mt-5 max-w-xs font-body text-[0.88rem] font-light leading-relaxed text-white/55">
              Guaranteed rent and hands-off management for landlords in London and the South East.
              Professional guests, zero voids.
            </p>
            <div className="mt-6 space-y-1.5 font-body text-[0.85rem] text-white/70">
              <a href="tel:+442045158438" className="block transition-colors hover:text-gold-light">020 4515 8438</a>
              <a href="mailto:info@alalihomes.com" className="block transition-colors hover:text-gold-light">info@alalihomes.com</a>
            </div>
            <a
              href="https://www.instagram.com/alalihomes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alali Homes on Instagram"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:text-gold"
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>

          <Column title="Company" links={companyLinks} />
          <Column title="Services" links={serviceLinks} />
          <Column title="Areas We Cover" links={areaLinks} />
          <Column title="Legal" links={legalLinks} />
        </div>

        <div className="mt-16 h-px bg-white/8" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-[0.75rem] font-light text-white/40">
            &copy; 2026 Alali Homes Ltd. All rights reserved.
          </p>
          <p className="font-body text-[0.75rem] font-light text-white/40">
            Registered in England &amp; Wales &middot; Company No. 17095100
          </p>
        </div>
      </div>
    </footer>
  )
}
