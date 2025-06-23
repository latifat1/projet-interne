import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./components/providers"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Y3 Audit & Conseils",
  description: "Cabinet d'expertise comptable et de conseil",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased flex flex-col">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
