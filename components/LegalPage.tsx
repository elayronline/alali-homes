import Link from "next/link"
import type { ReactNode } from "react"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-charcoal">{title}</h1>
      <p className="mt-2 font-body text-sm text-grey-600">Last updated: {updated}</p>
      <div className="mt-8 space-y-8 font-body leading-relaxed text-grey-600 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-charcoal [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_a]:text-gold [&_a]:underline-offset-2 hover:[&_a]:underline">
        {children}
      </div>
      <Link
        href="/"
        className="mt-12 inline-block font-body text-sm text-gold transition-colors hover:text-gold-light"
      >
        &larr; Back to Home
      </Link>
    </main>
  )
}

export const COMPANY = {
  name: "Alali Homes Ltd",
  number: "17095100",
  address: "86-90 Paul Street, London, EC2A 4NE",
  email: "info@alalihomes.com",
  phone: "+44 20 4515 8438",
}
