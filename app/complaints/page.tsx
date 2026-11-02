import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Complaints Procedure | Alali Homes",
  description:
    "How to make a complaint to Alali Homes Ltd, and how we investigate and respond to it.",
  alternates: { canonical: "https://www.alalihomes.com/complaints" },
}

export default function ComplaintsProcedure() {
  return (
    <LegalPage title="Complaints Procedure" updated="2 November 2026">
      <section>
        <h2>Our commitment</h2>
        <p>
          We want every landlord, agent, tenant and partner who deals with {COMPANY.name} to
          receive a professional service. If something has gone wrong, we want to hear about it so
          we can put it right.
        </p>
      </section>

      <section>
        <h2>How to complain</h2>
        <p>Please make your complaint in writing, by email or by post:</p>
        <ul>
          <li>
            Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, with
            &quot;Complaint&quot; in the subject line
          </li>
          <li>Post: Complaints, {COMPANY.name}, {COMPANY.address}</li>
        </ul>
        <p>
          Please include your name and contact details, the property address if it relates to a
          property, what went wrong, and what you would like us to do to put it right. Copies of
          any relevant documents help us investigate.
        </p>
      </section>

      <section>
        <h2>What happens next</h2>
        <ul>
          <li>
            We acknowledge your complaint in writing within 5 working days and tell you who is
            handling it.
          </li>
          <li>
            A member of our team who was not directly involved investigates. We may contact you
            for more information.
          </li>
          <li>
            We send you a written response explaining what we found, what we will do, and the
            reasons for our decision.
          </li>
          <li>
            If you are not satisfied with that response, you can ask for it to be reviewed by a
            director of {COMPANY.name}, who will send you our final written response.
          </li>
        </ul>
      </section>

      <section>
        <h2>If you are still not satisfied</h2>
        <p>
          If your complaint is about a property, you may also be able to contact the local council
          for the area where the property is, for example about housing standards or HMO licence
          conditions.
        </p>
      </section>

      <section>
        <h2>Fair treatment</h2>
        <p>
          Making a complaint will never affect how we treat you. We keep a record of every
          complaint and use them to improve our service.
        </p>
      </section>
    </LegalPage>
  )
}
