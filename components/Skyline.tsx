/**
 * Hero illustration: a soft white architectural model of a terrace.
 *
 * Built like a maquette photographed in a light studio:
 * - one consistent oblique projection (depth runs up and to the right)
 * - three-tone matte shading: roof/top lightest, front mid, side darkest
 * - warm ambient occlusion where each volume meets the ground, plus a long
 *   soft cast shadow to the right, both multiplied into the page
 * - a fainter, smaller row behind the main terrace for atmospheric depth
 * - the whole piece fades into the page on its left and bottom edges
 */

const GROUND = 300
const D = 22 // depth run (x)
const U = 12 // depth rise (y)

interface Vol {
  x: number
  w: number
  h: number
  gable?: number // 0 = flat roof
  chimney?: number // x offset within the volume
}

function Volume({ x, w, h, gable = 0, chimney, tone = 1 }: Vol & { tone?: number }) {
  const top = GROUND - h
  const ridgeX = x + w / 2
  const ridgeY = top - gable
  return (
    <g opacity={tone}>
      {/* contact shadow */}
      <ellipse cx={x + w / 2 + 8} cy={GROUND + 3} rx={w * 0.62} ry={7} fill="url(#contact)" style={{ mixBlendMode: "multiply" }} />
      {/* cast shadow to the right */}
      <polygon
        points={`${x + w},${GROUND} ${x + w + D + h * 0.32},${GROUND - U * 0.3} ${x + w + D + h * 0.32 + 26},${GROUND + 4} ${x + w + 6},${GROUND + 4}`}
        fill="url(#cast)"
        filter="url(#blur6)"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* side face */}
      <polygon
        points={`${x + w},${top} ${x + w + D},${top - U} ${x + w + D},${GROUND - U} ${x + w},${GROUND}`}
        fill="url(#side)"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />

      {/* roof */}
      {gable > 0 ? (
        <>
          <polygon
            points={`${ridgeX},${ridgeY} ${ridgeX + D},${ridgeY - U} ${x + w + D},${top - U} ${x + w},${top}`}
            fill="url(#roofSide)"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <polygon
            points={`${x},${top} ${ridgeX},${ridgeY} ${x + w},${top}`}
            fill="url(#roofFront)"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <polygon
          points={`${x},${top} ${x + D},${top - U} ${x + w + D},${top - U} ${x + w},${top}`}
          fill="url(#roofTop)"
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      )}

      {/* chimney */}
      {chimney !== undefined && gable > 0 && (
        <>
          <polygon
            points={`${x + chimney + 11},${ridgeY + 10} ${x + chimney + 11 + D * 0.5},${ridgeY + 10 - U * 0.5} ${x + chimney + 11 + D * 0.5},${ridgeY + 34 - U * 0.5} ${x + chimney + 11},${ridgeY + 34}`}
            fill="url(#side)"
          />
          <polygon
            points={`${x + chimney},${ridgeY + 10} ${x + chimney + D * 0.5},${ridgeY + 10 - U * 0.5} ${x + chimney + 11 + D * 0.5},${ridgeY + 10 - U * 0.5} ${x + chimney + 11},${ridgeY + 10}`}
            fill="url(#roofTop)"
          />
          <rect x={x + chimney} y={ridgeY + 10} width={11} height={24} rx={1} fill="url(#front)" />
        </>
      )}

      {/* front face */}
      <rect x={x} y={top} width={w} height={h} rx={1.5} fill="url(#front)" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="0.6" />
      {/* soft ambient darkening at the base of the front face */}
      <rect x={x} y={GROUND - 26} width={w} height={26} fill="url(#baseAO)" style={{ mixBlendMode: "multiply" }} />
    </g>
  )
}

export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 960 340"
      preserveAspectRatio="xMaxYMax meet"
      className={`pointer-events-none absolute right-[-2%] bottom-0 z-0 h-[36%] w-auto max-w-[96vw] [mask-image:linear-gradient(to_right,transparent_0%,black_42%),linear-gradient(to_top,transparent_0%,black_18%)] [mask-composite:intersect] lg:h-[54%] ${className}`}
    >
      <defs>
        <linearGradient id="front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdfcfa" />
          <stop offset="1" stopColor="#f3efe7" />
        </linearGradient>
        <linearGradient id="side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ebe6dc" />
          <stop offset="1" stopColor="#dfd8ca" />
        </linearGradient>
        <linearGradient id="roofFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f7f4ee" />
        </linearGradient>
        <linearGradient id="roofSide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1ede5" />
          <stop offset="1" stopColor="#e6e0d4" />
        </linearGradient>
        <linearGradient id="roofTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f6f3ec" />
        </linearGradient>
        <linearGradient id="baseAO" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b9a87e" stopOpacity="0" />
          <stop offset="1" stopColor="#b9a87e" stopOpacity="0.16" />
        </linearGradient>
        <radialGradient id="contact" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#8f7c52" stopOpacity="0.28" />
          <stop offset="1" stopColor="#8f7c52" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cast" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8f7c52" stopOpacity="0.18" />
          <stop offset="1" stopColor="#8f7c52" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="haze" cx="0.55" cy="1" r="0.75">
          <stop offset="0" stopColor="#c6a24e" stopOpacity="0.10" />
          <stop offset="1" stopColor="#c6a24e" stopOpacity="0" />
        </radialGradient>
        <filter id="blur6" x="-20%" y="-50%" width="150%" height="250%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="soften" x="-2%" y="-2%" width="104%" height="104%">
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
      </defs>

      <rect x="0" y="120" width="960" height="220" fill="url(#haze)" />

      {/* background row: smaller, paler, further back */}
      <g filter="url(#soften)" transform="translate(140 -34) scale(0.78 0.78)">
        <Volume x={40} w={130} h={120} gable={38} tone={0.45} />
        <Volume x={190} w={110} h={150} gable={0} tone={0.45} />
        <Volume x={320} w={150} h={110} gable={44} chimney={96} tone={0.45} />
        <Volume x={490} w={120} h={135} gable={36} tone={0.45} />
        <Volume x={630} w={160} h={105} gable={40} chimney={24} tone={0.45} />
        <Volume x={810} w={110} h={125} gable={0} tone={0.45} />
      </g>

      {/* main terrace */}
      <g filter="url(#soften)">
        <Volume x={60} w={120} h={140} gable={42} chimney={16} />
        <Volume x={200} w={140} h={118} gable={52} chimney={54} />
        <Volume x={360} w={116} h={196} gable={0} />
        <Volume x={496} w={180} h={156} gable={44} chimney={132} />
        <Volume x={696} w={118} h={112} gable={46} chimney={14} />
        <Volume x={834} w={96} h={92} gable={34} />
      </g>
    </svg>
  )
}
