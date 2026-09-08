/**
 * A terrace of houses drawn as a soft white architectural model: filled faces,
 * a shallow extrusion for depth, rounded edges, warm low-contrast shading and a
 * blurred ground shadow. Same composition as the original line drawing.
 */

const GROUND = 300
const D = 16 // extrusion depth (x)
const U = 8 // extrusion lift (y)

type Roof = "gable" | "flat" | "hip"

interface HouseProps {
  x: number
  w: number
  h: number
  roof?: Roof
  gable?: number
  chimney?: number // x offset of a chimney, if any
}

function House({ x, w, h, roof = "gable", gable = 40, chimney }: HouseProps) {
  const top = GROUND - h
  const side = `${x + w},${top} ${x + w + D},${top - U} ${x + w + D},${GROUND - U} ${x + w},${GROUND}`
  return (
    <g filter="url(#soft)">
      {/* side face */}
      <polygon points={side} fill="url(#faceSide)" />
      {/* roof */}
      {roof === "gable" && (
        <>
          <polygon
            points={`${x + w / 2},${top - gable} ${x + w / 2 + D},${top - gable - U} ${x + w + D},${top - U} ${x + w},${top}`}
            fill="url(#roofSide)"
          />
          <polygon points={`${x},${top} ${x + w / 2},${top - gable} ${x + w},${top}`} fill="url(#roofFront)" strokeLinejoin="round" />
        </>
      )}
      {roof === "hip" && (
        <>
          <polygon
            points={`${x + w * 0.25},${top - gable} ${x + w * 0.75},${top - gable} ${x + w + D},${top - U} ${x + w},${top} ${x},${top}`}
            fill="url(#roofSide)"
          />
          <polygon points={`${x},${top} ${x + w * 0.25},${top - gable} ${x + w * 0.75},${top - gable} ${x + w},${top}`} fill="url(#roofFront)" />
        </>
      )}
      {roof === "flat" && (
        <polygon points={`${x},${top} ${x + D},${top - U} ${x + w + D},${top - U} ${x + w},${top}`} fill="url(#roofSide)" />
      )}
      {/* chimney */}
      {chimney !== undefined && (
        <>
          <polygon
            points={`${x + chimney + 12},${top - gable + 6} ${x + chimney + 12 + D * 0.6},${top - gable + 6 - U * 0.6} ${x + chimney + 12 + D * 0.6},${top - gable + 30 - U * 0.6} ${x + chimney + 12},${top - gable + 30}`}
            fill="url(#faceSide)"
          />
          <rect x={x + chimney} y={top - gable + 6} width={12} height={26} rx={1.5} fill="url(#faceFront)" />
        </>
      )}
      {/* front face */}
      <rect x={x} y={top} width={w} height={h} rx={2.5} fill="url(#faceFront)" />
    </g>
  )
}

export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 340"
      preserveAspectRatio="xMaxYMax meet"
      className={`pointer-events-none absolute right-[-3%] bottom-0 z-0 h-[36%] w-auto max-w-[94vw] [mask-image:linear-gradient(to_right,transparent_0%,black_38%)] lg:h-[52%] ${className}`}
    >
      <defs>
        <linearGradient id="faceFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f5f2ec" />
        </linearGradient>
        <linearGradient id="faceSide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ece8df" />
          <stop offset="1" stopColor="#e1dbcf" />
        </linearGradient>
        <linearGradient id="roofFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbfaf7" />
          <stop offset="1" stopColor="#f0ece4" />
        </linearGradient>
        <linearGradient id="roofSide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e7e2d7" />
          <stop offset="1" stopColor="#dcd5c7" />
        </linearGradient>
        <linearGradient id="plinth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f4ee" />
          <stop offset="1" stopColor="#e9e4d9" />
        </linearGradient>
        <radialGradient id="groundShadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#8f7c52" stopOpacity="0.16" />
          <stop offset="1" stopColor="#8f7c52" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="6" dy="10" stdDeviation="9" floodColor="#8f7c52" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* ground shadow + plinth, like a model on a display base */}
      <ellipse cx="470" cy="318" rx="430" ry="18" fill="url(#groundShadow)" />
      <rect x="24" y="300" width="860" height="12" rx="6" fill="url(#plinth)" filter="url(#soft)" />
      <rect x="4" y="311" width="896" height="9" rx="4.5" fill="url(#plinth)" opacity="0.8" />

      {/* terrace, left to right */}
      <House x={40} w={120} h={150} gable={40} chimney={18} />
      <House x={160} w={140} h={130} gable={50} chimney={52} />
      <House
        x={300}
        w={120}
        h={210}
        roof="hip"
        gable={30}
      />
      <House
        x={440}
        w={180}
        h={170}
        gable={40}
      />
      <House x={640} w={120} h={120} gable={45} chimney={12} />
      <House x={780} w={100} h={100} gable={35} />
    </svg>
  )
}
