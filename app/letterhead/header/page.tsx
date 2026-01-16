import type { Metadata } from "next"
import LetterheadHeaderClient from "./LetterheadHeaderClient"

export const metadata: Metadata = {
  title: "Верхний колонтитул | ООО «ФТС»",
  description: "Графический элемент верхнего колонтитула для фирменного бланка ООО «ФТС»",
}

export default function LetterheadHeaderPage() {
  return <LetterheadHeaderClient />
}
