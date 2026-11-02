import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Anti-Bribery and Corruption Policy | Alali Homes",
  description:
    "Alali Homes Ltd's zero-tolerance policy on bribery and corruption, in line with the Bribery Act 2010.",
  alternates: { canonical: "https://www.alalihomes.com/anti-bribery" },
}

export default function AntiBriberyPolicy() {
  return (
    <LegalPage title="Anti-Bribery and Corruption Policy" updated="2 November 2026">
      <section>
        <h2>Our position</h2>
        <p>
          {COMPANY.name} takes a zero-tolerance approach to bribery and corruption. We conduct our
          business honestly and in line with the Bribery Act 2010.
        </p>
      </section>

      <section>
        <h2>Who this policy applies to</h2>
        <p>
          This policy applies to everyone who works for or on behalf of {COMPANY.name}, including
          directors, employees, contractors and anyone acting for us.
        </p>
      </section>

      <section>
        <h2>What is not allowed</h2>
        <ul>
          <li>
            Offering, promising or giving any payment, gift or advantage to influence a business
            decision, or to reward one.
          </li>
          <li>Asking for or accepting any payment, gift or advantage in return for a decision.</li>
          <li>Offering or giving anything of value to a public official to influence them.</li>
          <li>Facilitation payments, however small.</li>
        </ul>
      </section>

      <section>
        <h2>Gifts and hospitality</h2>
        <p>
          Modest, occasional gifts and hospitality are acceptable where they are proportionate,
          given openly and not intended to influence a decision. Anything else must be declined.
        </p>
      </section>

      <section>
        <h2>Referral fees</h2>
        <p>
          Where we pay a referral fee to an agent, the terms are agreed in writing in advance, and
          we expect agents to disclose the arrangement to their client in line with the Estate
          Agents Act 1979. A referral fee is never paid to influence a decision that is not the
          referrer&apos;s to make.
        </p>
      </section>

      <section>
        <h2>Raising a concern</h2>
        <p>
          If you suspect bribery or corruption connected with our business, please tell us in
          confidence at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will not
          penalise anyone for raising a concern in good faith.
        </p>
      </section>
    </LegalPage>
  )
}
