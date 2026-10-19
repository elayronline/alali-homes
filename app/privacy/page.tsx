import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Privacy Policy | Alali Homes",
  description: "How Alali Homes Ltd collects, uses and protects the personal data you send us through this website.",
  alternates: { canonical: "https://www.alalihomes.com/privacy" },
}

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="8 September 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          This website is operated by {COMPANY.name}, a private limited company registered in
          England and Wales under company number {COMPANY.number}. Our registered office is{" "}
          {COMPANY.address}. We are the data controller for the personal data described in this
          policy. You can contact us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <p>
          The only personal data this website collects is what you type into our enquiry form.
          That is:
        </p>
        <ul>
          <li>your full name</li>
          <li>your email address</li>
          <li>your phone number (optional)</li>
          <li>whether you are contacting us as a landlord, an agent or in another capacity</li>
          <li>the postcode of the property you are enquiring about (optional)</li>
          <li>anything you write in the message box (optional)</li>
        </ul>
        <p>
          We do not collect personal data from you automatically. This website does not set cookies
          and does not load advertising or social media tracking scripts. We use Vercel Web
          Analytics, a cookieless service that counts page views without identifying visitors.
        </p>
      </section>

      <section>
        <h2>How we use it</h2>
        <p>
          We use the details you send us to respond to your enquiry, to assess whether we can
          work together, and to carry on that conversation if you want to. We do not sell your
          data and we do not share it with anyone for marketing purposes.
        </p>
        <p>
          Our legal basis for this is that it is in our legitimate interests to respond to people
          who contact us, and that processing is necessary to take steps at your request before
          entering into an agreement.
        </p>
      </section>

      <section>
        <h2>Who processes it</h2>
        <p>
          When you submit the form, your details are delivered to our inbox by Web3Forms, a form
          delivery service. This website is hosted by Vercel, which also provides the cookieless
          page-view analytics. Both act as processors on our behalf.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          We keep enquiry details for as long as we need them to deal with your enquiry and any
          relationship that follows from it. If you would like us to delete your details, email us
          and we will do so.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under UK data protection law you have the right to ask us for a copy of the personal data
          we hold about you, to have it corrected or deleted, to object to or restrict how we use
          it, and to withdraw any consent you have given. To exercise any of these rights, email{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          If we change how we handle personal data, we will update this page and the date at the
          top of it.
        </p>
      </section>
    </LegalPage>
  )
}
