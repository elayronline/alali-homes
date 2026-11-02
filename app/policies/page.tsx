import type { Metadata } from "next"
import { LegalPage } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Policies and Statements | Alali Homes",
  description:
    "Alali Homes Ltd's policies and statements: modern slavery, complaints, anti-bribery, equality and diversity, privacy, accessibility, cookies and terms.",
  alternates: { canonical: "https://www.alalihomes.com/policies" },
}

const POLICIES = [
  { href: "/modern-slavery-statement", title: "Modern Slavery Statement", desc: "How we prevent modern slavery and human trafficking in our business and supply chains." },
  { href: "/complaints", title: "Complaints Procedure", desc: "How to make a complaint and how we handle it." },
  { href: "/anti-bribery", title: "Anti-Bribery and Corruption Policy", desc: "Our zero-tolerance approach under the Bribery Act 2010." },
  { href: "/equality-diversity", title: "Equality and Diversity Policy", desc: "Our commitment to fair treatment under the Equality Act 2010." },
  { href: "/privacy", title: "Privacy Policy", desc: "How we collect, use and protect personal data." },
  { href: "/accessibility", title: "Accessibility Statement", desc: "How we make this website usable for everyone." },
  { href: "/cookies", title: "Cookie Policy", desc: "This website sets no cookies." },
  { href: "/terms", title: "Terms of Use", desc: "The terms for using this website." },
]

export default function Policies() {
  return (
    <LegalPage title="Policies and Statements" updated="2 November 2026">
      <section>
        <p>
          The policies and statements below set out how Alali Homes Ltd runs its business. If you
          need any of them in a different format, email info@alalihomes.com.
        </p>
        <ul>
          {POLICIES.map((p) => (
            <li key={p.href}>
              <a href={p.href}>{p.title}</a>: {p.desc}
            </li>
          ))}
        </ul>
      </section>
    </LegalPage>
  )
}
