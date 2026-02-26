export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = 80
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top, behavior: "smooth" })
}
