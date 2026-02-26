import type { Metadata } from "next"
import { Montserrat, Outfit } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alali Homes — Guaranteed Rent & Corporate Lettings",
  description:
    "Alali Homes Ltd offers landlords guaranteed rent through corporate lets and professional property management. Zero voids, fully managed, 1-5 year agreements.",
  openGraph: {
    title: "Alali Homes — Guaranteed Rent & Corporate Lettings",
    description:
      "We lease your property, pay guaranteed rent every month, and manage everything to a professional standard.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}
