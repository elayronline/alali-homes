import type { MetadataRoute } from "next"
import { AREAS } from "@/lib/areas"

// Real last-content-change dates. Update a page's date when its content changes;
// a build-time `new Date()` here would either lie or freeze at the last deploy.
const HOME_UPDATED = "2026-09-08"
const LEGAL_UPDATED = "2026-09-08"
const AREAS_UPDATED = "2026-09-08"

const SITE = "https://www.alalihomes.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, lastModified: new Date(HOME_UPDATED), changeFrequency: "weekly", priority: 1 },
    ...AREAS.map((a) => ({
      url: `${SITE}/guaranteed-rent/${a.slug}`,
      lastModified: new Date(AREAS_UPDATED),
      changeFrequency: "monthly" as const,
      priority: a.kind === "region" ? 0.9 : 0.8,
    })),
    { url: `${SITE}/privacy`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/cookies`, lastModified: new Date(LEGAL_UPDATED), changeFrequency: "yearly", priority: 0.3 },
  ]
}
