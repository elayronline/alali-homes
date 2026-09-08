import type { MetadataRoute } from "next"

// Real last-content-change dates. Update a page's date when its content changes;
// a build-time `new Date()` here would either lie or freeze at the last deploy.
const HOME_UPDATED = "2026-09-08"
const LEGAL_UPDATED = "2026-09-08"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.alalihomes.com",
      lastModified: new Date(HOME_UPDATED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.alalihomes.com/privacy",
      lastModified: new Date(LEGAL_UPDATED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.alalihomes.com/terms",
      lastModified: new Date(LEGAL_UPDATED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.alalihomes.com/cookies",
      lastModified: new Date(LEGAL_UPDATED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
