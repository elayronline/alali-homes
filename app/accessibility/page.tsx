import type { Metadata } from "next"
import { LegalPage, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Accessibility Statement | Alali Homes",
  description: "How we make the Alali Homes website accessible, and how to contact us if something does not work for you.",
  alternates: { canonical: "https://www.alalihomes.com/accessibility" },
}

export default function AccessibilityStatement() {
  return (
    <LegalPage title="Accessibility Statement" updated="2 November 2026">
      <section>
        <h2>Our aim</h2>
        <p>
          We want everyone to be able to use this website. We aim to meet the Web Content
          Accessibility Guidelines (WCAG) 2.2 at level AA.
        </p>
      </section>

      <section>
        <h2>What we do</h2>
        <ul>
          <li>Text and background colours are chosen for readable contrast.</li>
          <li>Every form field has a visible label, and the site can be used with a keyboard.</li>
          <li>Pages use headings and landmarks so screen readers can navigate them.</li>
          <li>The site works when you zoom the page or increase the text size.</li>
        </ul>
      </section>

      <section>
        <h2>If something does not work for you</h2>
        <p>
          If you find any part of this website hard to use, or need information in a different
          format, please email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call{" "}
          {COMPANY.phone} and we will help.
        </p>
      </section>
    </LegalPage>
  )
}
