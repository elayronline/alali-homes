import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Cookie Policy | Alali Homes",
  description: "The Alali Homes website sets no cookies and uses only cookieless, anonymous page-view analytics.",
  alternates: { canonical: "https://www.alalihomes.com/cookies" },
}

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated="8 September 2026">
      <section>
        <h2>We do not use cookies</h2>
        <p>
          This website, operated by {COMPANY.name}, does not set any cookies on your device. It does
          not use advertising or social media tracking.
        </p>
        <p>
          We use Vercel Web Analytics to count page views. It is cookieless, stores nothing on your
          device, and does not identify you: it records that a page was viewed, not who viewed it.
        </p>
      </section>

      <section>
        <h2>What that means for you</h2>
        <p>
          There is nothing to accept or decline, which is why you will not see a cookie banner on
          this site. Your visit is not tracked and no record of your browsing is kept by us.
        </p>
      </section>

      <section>
        <h2>If this changes</h2>
        <p>
          If we ever add a feature that needs cookies, we will update this page first and, where
          the law requires it, ask for your consent before setting them.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
      </section>
    </LegalPage>
  )
}
