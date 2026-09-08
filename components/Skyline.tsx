/** Fine architectural line-art: a terrace roofline drawn in gold hairlines. */
export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 320"
      preserveAspectRatio="xMaxYMax meet"
      className={`pointer-events-none absolute right-0 bottom-0 z-0 h-[40%] w-auto max-w-[94vw] text-gold lg:h-[58%] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 300H900" strokeOpacity="0.6" />
      <path d="M40 300V150l60-40 60 40v150" />
      <path d="M70 300v-60h60v60M85 190h30v30H85zM60 130v-25h10v18" />
      <path d="M160 300V170l70-50 70 50v130" />
      <path d="M195 300v-70h70v70M210 200h40v36h-40zM215 135v-25h10v18M275 135v-25h10v18" />
      <path d="M300 300V90h120v210" />
      <path d="M300 90l60-30 60 30M320 120h30v30h-30zM370 120h30v30h-30zM320 175h30v30h-30zM370 175h30v30h-30zM345 300v-60h30v60" />
      <path d="M440 300V130h180v170" />
      <path d="M440 130l90-40 90 40M470 300v-45a20 20 0 0 1 40 0v45M550 300v-45a20 20 0 0 1 40 0v45M465 170h30v35h-30zM520 170h30v35h-30zM575 170h30v35h-30z" />
      <path d="M640 300V180l60-45 60 45v120" />
      <path d="M670 300v-55h60v55M680 210h40v30h-40zM655 150v-25h10v18" />
      <path d="M780 300V200l50-35 50 35v100" />
      <path d="M805 300v-45h50v45M815 225h30v25h-30z" />
      <circle cx="740" cy="70" r="46" strokeOpacity="0.45" />
      <circle cx="740" cy="70" r="72" strokeOpacity="0.25" />
      <circle cx="740" cy="70" r="98" strokeOpacity="0.12" />
    </svg>
  )
}
