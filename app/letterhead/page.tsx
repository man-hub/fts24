import type { Metadata } from "next"
import LetterheadClient from "./letterhead-client"

export const metadata: Metadata = {
  title: "Фирменный бланк | ООО «ФТС»",
  description: "Фирменный бланк официального письма ООО «ФТС»",
}

export default function LetterheadPage() {
  return <LetterheadClient />
}
