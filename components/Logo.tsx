import Image from "next/image"

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string
  variant?: "dark" | "light"
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Alali Homes"
        width={140}
        height={60}
        className="h-10 w-auto sm:h-12"
        priority
      />
    </div>
  )
}
