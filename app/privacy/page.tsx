import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Alali Homes",
  description: "Privacy policy for Alali Homes Ltd. How we collect, use and protect the personal data you send us.",
  alternates: { canonical: "https://www.alalihomes.com/privacy" },
}

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-charcoal">Privacy Policy</h1>
      <p className="mt-6 font-body text-grey-600 leading-relaxed">
        This privacy policy will be updated with full details before launch. The details you submit
        through our contact form are used only to respond to your enquiry and are not sold or
        shared for marketing.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-body text-sm text-gold transition-colors hover:text-gold-light"
      >
        &larr; Back to Home
      </Link>
    </main>
  )
}
