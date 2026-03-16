import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Alali Homes",
  description: "Terms of use for the Alali Homes website. By using this site you agree to the terms set out by Alali Homes Ltd.",
  alternates: { canonical: "https://www.alalihomes.com/terms" },
}

export default function TermsOfUse() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-charcoal">Terms of Use</h1>
      <p className="mt-6 font-body text-grey-600 leading-relaxed">
        These terms of use will be updated with full details before launch. By using this website
        you agree to comply with the terms set out by Alali Homes Ltd.
      </p>
      <a
        href="/"
        className="mt-8 inline-block font-body text-sm text-gold transition-colors hover:text-gold-light"
      >
        &larr; Back to Home
      </a>
    </main>
  )
}
