import type React from "react"
import type { Metadata } from "next"
import LetterheadClientLayout from "./client"

export const metadata: Metadata = {
  title: "Фирменные бланки | ООО «ФТС»",
  description: "Фирменные бланки официальных писем ООО «ФТС» — различные варианты дизайна",
}

export default function LetterheadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LetterheadClientLayout>{children}</LetterheadClientLayout>
}
