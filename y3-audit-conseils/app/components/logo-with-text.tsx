import Image from "next/image"
import Link from "next/link"

interface LogoWithTextProps {
  className?: string
  imageClassName?: string
  textClassName?: string
}

export function LogoWithText({ className, imageClassName, textClassName }: LogoWithTextProps) {
  return (
    <Link href="/" className={`flex items-center ${className || ""}`}>
      <Image
        src="/logo-y3.png"
        alt="Y3 Audit & Conseils"
        width={200}
        height={70}
        className={`h-14 w-auto ${imageClassName || ""}`}
      />
    </Link>
  )
}
