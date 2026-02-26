export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG triangular A logo with gold gradient */}
      <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D4B76A" />
            <stop offset="50%" stopColor="#C6A24E" />
            <stop offset="100%" stopColor="#A8873B" />
          </linearGradient>
        </defs>
        {/* Outer triangle */}
        <path d="M20 2L38 42H2L20 2Z" fill="url(#goldGrad)" />
        {/* Inner cutout */}
        <path d="M20 14L30 38H10L20 14Z" fill="#0D0D0D" />
        {/* Crossbar */}
        <rect x="12" y="30" width="16" height="3" fill="url(#goldGrad)" />
      </svg>
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-wide text-white">Alali</span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
          Homes
        </span>
      </div>
    </div>
  )
}
