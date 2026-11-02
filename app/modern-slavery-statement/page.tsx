import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Modern Slavery Statement | Alali Homes",
  description:
    "Alali Homes Ltd's statement on the steps we take to prevent modern slavery and human trafficking in our business and supply chains.",
  alternates: { canonical: "https://www.alalihomes.com/modern-slavery-statement" },
}

export default function ModernSlaveryStatement() {
  return (
    <LegalPage title="Modern Slavery Statement" updated="2 November 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          {COMPANY.name} is committed to preventing modern slavery and human trafficking in every
          part of our business and our supply chains. Modern slavery includes slavery, servitude,
          forced or compulsory labour and human trafficking. We do not tolerate it in any form.
        </p>
        <p>
          Our turnover is below the threshold at which section 54 of the Modern Slavery Act 2015
          requires a statement. We publish this statement voluntarily because the people and
          organisations we work with should know where we stand.
        </p>
      </section>

      <section>
        <h2>Our business</h2>
        <p>
          {COMPANY.name} is a private limited company registered in England and Wales (company
          number {COMPANY.number}), with its registered office at {COMPANY.address}. We take
          residential properties in London and the South East on corporate leases, pay landlords a
          guaranteed rent, and provide property management for the length of each lease.
        </p>
      </section>

      <section>
        <h2>Our supply chains</h2>
        <p>Our main relationships are with:</p>
        <ul>
          <li>landlords and property owners who lease their properties to us</li>
          <li>the organisations we work with under corporate lease agreements</li>
          <li>maintenance contractors, trades and cleaning services</li>
          <li>compliance providers, such as gas, electrical and fire safety engineers</li>
          <li>suppliers of furniture, fittings and professional services</li>
        </ul>
      </section>

      <section>
        <h2>Where the risks are</h2>
        <p>
          We recognise that construction, maintenance and cleaning are sectors with a higher
          recognised risk of labour exploitation, and that residential property, including HMOs,
          can be misused to house or exploit victims of modern slavery. We focus our attention on
          these areas.
        </p>
      </section>

      <section>
        <h2>Our policies and due diligence</h2>
        <ul>
          <li>
            We expect every contractor and supplier to comply with the Modern Slavery Act 2015 and
            to pay their workers at least the legal minimum wage.
          </li>
          <li>
            We expect anyone working for us or on our behalf to have the legal right to work in the
            UK.
          </li>
          <li>
            We inspect the properties we manage regularly, and we watch for signs that a property
            may be being used to exploit people, such as overcrowding, restricted movement or one
            person controlling others&apos; documents or money.
          </li>
          <li>
            We reserve the right to end a relationship with any supplier or partner where we find
            evidence of modern slavery and it is not addressed.
          </li>
          <li>
            Our <a href="/anti-bribery">Anti-Bribery and Corruption Policy</a> and{" "}
            <a href="/equality-diversity">Equality and Diversity Policy</a> support this statement.
          </li>
        </ul>
      </section>

      <section>
        <h2>Awareness</h2>
        <p>
          We aim to make sure that everyone who works for us, and anyone who inspects or visits
          properties on our behalf, knows how to recognise the signs of modern slavery and what to
          do if they have a concern.
        </p>
      </section>

      <section>
        <h2>Reporting a concern</h2>
        <p>
          Anyone can raise a concern with us in confidence by emailing{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will not penalise anyone for
          raising a concern in good faith.
        </p>
        <p>
          You can also contact the Modern Slavery and Exploitation Helpline on 08000 121 700. If
          someone is in immediate danger, call 999.
        </p>
      </section>

      <section>
        <h2>Review</h2>
        <p>
          We review this statement every year, and whenever our business changes significantly.
        </p>
      </section>
    </LegalPage>
  )
}
