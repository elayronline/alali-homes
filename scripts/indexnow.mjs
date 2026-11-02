// Tells Bing (and other IndexNow engines) that pages have changed, so they recrawl them
// instead of waiting for their next scheduled visit. Bing's index also feeds ChatGPT search.
//
//   npm run indexnow                      -> every URL in the live sitemap
//   npm run indexnow -- /corporate-lets   -> just the given paths
//
// Run it after a deploy that changes page content. The key file lives at public/<KEY>.txt.

const SITE = "https://www.alalihomes.com"
const KEY = "793f0623e1423bceaf993085432cf646"

const paths = process.argv.slice(2)
let urls
if (paths.length) {
  urls = paths.map((p) => new URL(p, SITE).href)
} else {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
})

console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URL(s)`)
if (!res.ok && res.status !== 202) {
  console.log(await res.text())
  process.exit(1)
}
