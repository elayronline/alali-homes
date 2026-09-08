import Image from "next/image"

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string
  /** "dark" = dark logo for light backgrounds; "light" = light logo for dark backgrounds */
  variant?: "dark" | "light"
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={variant === "light" ? "/logo-light.png" : "/logo.png"}
        alt="Alali Homes"
        width={140}
        height={60}
        className="h-12 w-auto sm:h-14"
        priority
      />
    </div>
  )
}
