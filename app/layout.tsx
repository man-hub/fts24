import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "ООО «ФТС» — Enterprise-решения для телеком-операторов",
  description:
    "Разработка программных решений enterprise-уровня, биллинговые системы, виртуальная АТС, AI-решения и системная интеграция для операторов связи и бизнеса",
  generator: "",
  icons: {
    icon: "https://fts24.ru/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
