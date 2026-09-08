import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Cookie Policy | Alali Homes",
  description: "The Alali Homes website does not set cookies or use tracking. Details here.",
  alternates: { canonical: "https://www.alalihomes.com/cookies" },
}

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated="8 September 2026">
      <section>
        <h2>We do not use cookies</h2>
        <p>
          This website, operated by {COMPANY.name}, does not set any cookies on your device. It does
          not use analytics, advertising or social media tracking, and it does not load third-party
          scripts that would set cookies on our behalf.
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
