import { checkArea, COVERED_REGIONS, type Bedrooms, type PropertyType } from "@/lib/rentCheck"

const BEDROOMS: Bedrooms[] = ["1", "2", "3", "4"]
const TYPES: PropertyType[] = ["flat", "terraced", "semi", "detached"]
const POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i

// The postcode is only used to find the local authority. It is not logged or stored.
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams
  const postcode = (params.get("postcode") ?? "").trim()
  const bedrooms = params.get("bedrooms") as Bedrooms
  const type = params.get("type") as PropertyType

  if (!POSTCODE.test(postcode) || !BEDROOMS.includes(bedrooms) || !TYPES.includes(type)) {
    return Response.json({ error: "invalid" }, { status: 400 })
  }

  let result: { admin_district: string; region: string | null; codes: { admin_district: string } } | null
  try {
    const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode.replace(/\s+/g, ""))}`)
    if (res.status === 404) return Response.json({ error: "not-found" }, { status: 404 })
    if (!res.ok) throw new Error(String(res.status))
    result = (await res.json()).result
  } catch {
    return Response.json({ error: "lookup-failed" }, { status: 502 })
  }
  if (!result) return Response.json({ error: "not-found" }, { status: 404 })

  if (!result.region || !COVERED_REGIONS.includes(result.region)) {
    return Response.json({ error: "outside", area: result.admin_district })
  }

  const check = checkArea(result.codes.admin_district, bedrooms, type)
  if (!check) return Response.json({ error: "no-data", area: result.admin_district })
  if (!check.ok) return Response.json({ error: "no-data", area: check.area })
  return Response.json(check)
}
