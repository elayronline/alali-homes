import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Equality and Diversity Policy | Alali Homes",
  description:
    "Alali Homes Ltd's commitment to equality, diversity and non-discrimination under the Equality Act 2010.",
  alternates: { canonical: "https://www.alalihomes.com/equality-diversity" },
}

export default function EqualityDiversityPolicy() {
  return (
    <LegalPage title="Equality and Diversity Policy" updated="2 November 2026">
      <section>
        <h2>Our commitment</h2>
        <p>
          {COMPANY.name} is committed to treating everyone fairly and with respect. We do not
          discriminate against anyone we work with, including landlords, agents, tenants,
          contractors, partners and job applicants.
        </p>
      </section>

      <section>
        <h2>Protected characteristics</h2>
        <p>
          In line with the Equality Act 2010, we do not discriminate on the grounds of age,
          disability, gender reassignment, marriage and civil partnership, pregnancy and
          maternity, race, religion or belief, sex or sexual orientation.
        </p>
      </section>

      <section>
        <h2>In practice</h2>
        <ul>
          <li>We make decisions about properties, partners and suppliers on objective criteria.</li>
          <li>
            We make reasonable adjustments where needed, including for anyone who needs
            information from us in a different format.
          </li>
          <li>
            We do not tolerate harassment, bullying or victimisation by or towards anyone working
            for or with us.
          </li>
          <li>We expect our contractors and partners to meet the same standards.</li>
        </ul>
      </section>

      <section>
        <h2>Raising a concern</h2>
        <p>
          If you believe you have been treated unfairly, please contact us at{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or follow our{" "}
          <a href="/complaints">Complaints Procedure</a>.
        </p>
      </section>
    </LegalPage>
  )
}
