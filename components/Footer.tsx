import { Instagram } from "lucide-react"
import { REGIONS, getChildren } from "@/lib/areas"

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact-form" },
]

const serviceLinks = [
  { label: "Guaranteed Rent", href: "/#landlords" },
  { label: "HMO Guaranteed Rent", href: "/hmo-guaranteed-rent" },
  { label: "Corporate Lets", href: "/corporate-lets" },
  { label: "Property Management", href: "/#value" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Modern Slavery Statement", href: "/modern-slavery-statement" },
  { label: "Complaints Procedure", href: "/complaints" },
  { label: "All Policies", href: "/policies" },
]

const linkClass =
  "font-body text-[0.85rem] font-light text-white/70 transition-colors duration-200 hover:text-gold-light"
const headingClass = "font-body text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold"

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className={headingClass}>{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
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
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div aria-label="Alali Homes, guaranteed rent for landlords">
              <span className="font-display text-3xl font-light tracking-wide text-white">Alali</span>
              <span className="ml-2 font-display text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Homes
              </span>
            </div>
            <p className="mt-5 max-w-xs font-body text-[0.88rem] font-light leading-relaxed text-white/70">
              Guaranteed rent and corporate lets for landlords. A fixed
              rent every month on a 3–5 year lease, with full property management included.
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
          <Column title="Legal" links={legalLinks} />
        </div>

        <div className="mt-14">
          <h3 className={headingClass}>Areas We Cover</h3>
          <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((r) => (
              <div key={r.slug}>
                <a href={`/guaranteed-rent/${r.slug}`} className="font-body text-[0.85rem] font-medium text-white/85 transition-colors duration-200 hover:text-gold-light">
                  Guaranteed Rent {r.name.replace(/^the /, "")}
                </a>
                {getChildren(r.slug).length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {getChildren(r.slug).map((c) => (
                      <li key={c.slug}>
                        <a href={`/guaranteed-rent/${c.slug}`} className={linkClass}>{c.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px bg-white/8" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-[0.75rem] font-light text-white/60">
            &copy; 2026 Alali Homes Ltd. All rights reserved.
          </p>
          <p className="font-body text-[0.75rem] font-light text-white/60">
            Registered in England &amp; Wales &middot; Company No. 17095100
          </p>
        </div>
      </div>
    </footer>
  )
}
