import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Alali Homes"
        width={140}
        height={60}
        className="h-14 w-auto sm:h-16"
        priority
      />
    </div>
  )
}
