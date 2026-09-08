import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Terms of Use | Alali Homes",
  description: "Terms of use for the Alali Homes website, operated by Alali Homes Ltd.",
  alternates: { canonical: "https://www.alalihomes.com/terms" },
}

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" updated="8 September 2026">
      <section>
        <h2>About these terms</h2>
        <p>
          This website is operated by {COMPANY.name}, registered in England and Wales under company
          number {COMPANY.number}, with its registered office at {COMPANY.address}. By using this
          website you agree to these terms. If you do not agree, please do not use the site.
        </p>
      </section>

      <section>
        <h2>Information only</h2>
        <p>
          The content on this website describes our guaranteed rent and corporate lettings service
          in general terms. It is provided for information only. Nothing on this site is an offer,
          a valuation, or financial, legal or tax advice. Any rent figure, term or arrangement we
          may offer for a specific property is set out in a written proposal and agreement, and only
          that document is binding.
        </p>
      </section>

      <section>
        <h2>Enquiries</h2>
        <p>
          Submitting an enquiry through this website does not create an agreement between you and
          us. We will review your enquiry and, if we can help, respond with a proposal. How we handle
          the details you send us is explained in our <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The text, logos, images and design of this website belong to {COMPANY.name} unless stated
          otherwise. You may view and print pages for your own reference, but you may not copy,
          reproduce or reuse any part of the site for commercial purposes without our written
          permission.
        </p>
      </section>

      <section>
        <h2>Accuracy and availability</h2>
        <p>
          We try to keep the information on this site accurate and up to date, but we do not
          guarantee that it is complete or error-free, and we may change it at any time. We do not
          guarantee that the site will always be available or free from faults.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          To the extent permitted by law, we are not liable for any loss arising from your use of,
          or reliance on, this website or its content. Nothing in these terms limits any liability
          that cannot be limited by law.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the law of England and Wales, and the courts of England and
          Wales have exclusive jurisdiction over any dispute relating to them.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
      </section>
    </LegalPage>
  )
}
