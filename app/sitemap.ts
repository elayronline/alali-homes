import type { MetadataRoute } from "next"
import { AREAS } from "@/lib/areas"

// Real last-content-change dates. Update a page's date when its content changes;
// a build-time `new Date()` here would either lie or freeze at the last deploy.
const HOME_UPDATED = "2026-11-07"
const LEGAL_UPDATED = "2026-11-07"
const COOKIES_UPDATED = "2026-09-08"
const AREAS_UPDATED = "2026-11-07"
const SERVICES_UPDATED = "2026-11-07"

const SITE = "https://www.alalihomes.com"

const services = ["hmo-guaranteed-rent", "corporate-lets"]
const policies = ["privacy", "terms", "modern-slavery-statement", "complaints", "anti-bribery", "equality-diversity", "accessibility", "policies"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, lastModified: new Date(HOME_UPDATED), changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({
      url: `${SITE}/${s}`,
      lastModified: new Date(SERVICES_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...AREAS.map((a) => ({
      url: `${SITE}/guaranteed-rent/${a.slug}`,
      lastModified: new Date(AREAS_UPDATED),
      changeFrequency: "monthly" as const,
      priority: a.kind === "region" ? 0.9 : 0.8,
    })),
    ...policies.map((p) => ({
      url: `${SITE}/${p}`,
      lastModified: new Date(LEGAL_UPDATED),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    { url: `${SITE}/cookies`, lastModified: new Date(COOKIES_UPDATED), changeFrequency: "yearly", priority: 0.3 },
  ]
}
