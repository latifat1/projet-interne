"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

const ThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
    loading: () => <div className="min-h-screen" />
  }
)

const HeaderFixed = dynamic(
  () => import("@/app/components/header-fixed").then((mod) => mod.HeaderFixed),
  {
    ssr: false,
    loading: () => <div className="h-[110px]" />
  }
)

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <HeaderFixed />
      <div className="pt-[110px] flex-grow">{children}</div>
    </ThemeProvider>
  )
} 