import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { HeaderFixed } from "./components/header-fixed"
import { Footer } from "./components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Y3 Audit & Conseils",
  description: "Cabinet d'expertise comptable, d'audit et de conseil",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={workSans.variable}>
      <body className="min-h-screen bg-white font-sans antialiased flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          <HeaderFixed />
          <div className="pt-[110px] flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
