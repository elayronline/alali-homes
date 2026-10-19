import rents from "@/lib/rents.json"

/**
 * Area rent check for the homepage calculator.
 *
 * Uses only official ONS averages (lib/rents.json, rebuilt by scripts/update-rents.py).
 * ONS publishes an average by bedrooms and an average by property type for each area, never
 * the two combined, so the "range" is simply those two official figures side by side. Nothing
 * here estimates what a property would earn with Alali Homes.
 */

export type Bedrooms = "1" | "2" | "3" | "4"
export type PropertyType = "flat" | "terraced" | "semi" | "detached"

export const FLOOR_SHARE = 0.6

type AreaRents = {
  name: string
  region: string
  all: number | null
  b1: number | null
  b2: number | null
  b3: number | null
  b4: number | null
  detached: number | null
  semi: number | null
  terraced: number | null
  flat: number | null
}

const AREAS = rents.areas as Record<string, AreaRents>

export const RENTS_PERIOD = rents.period
export const RENTS_SOURCE = rents.source

export type RentCheck =
  | {
      ok: true
      area: string
      period: string
      byBedrooms: number | null
      byType: number | null
      low: number
      high: number
    }
  | { ok: false; reason: "no-data"; area: string }

export function checkArea(code: string, bedrooms: Bedrooms, type: PropertyType): RentCheck | null {
  const a = AREAS[code]
  if (!a) return null
  const byBedrooms = a[`b${bedrooms}`]
  const byType = a[type]
  const figures = [byBedrooms, byType].filter((v): v is number => v !== null)
  if (figures.length === 0) return { ok: false, reason: "no-data", area: a.name }
  return {
    ok: true,
    area: a.name,
    period: RENTS_PERIOD,
    byBedrooms,
    byType,
    low: Math.min(...figures),
    high: Math.max(...figures),
  }
}

/** Regions we cover, by name as postcodes.io returns them */
export const COVERED_REGIONS = ["London", "South East"]
