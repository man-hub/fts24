import type { Metadata } from "next"
import { FileText, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Документы | ООО «ФТС»",
  description: "Лицензионные соглашения и политика в отношении обработки персональных данных ООО «ФТС»",
}

export default function DocsPage() {
  const documents = [
    {
      title: "Лицензионное соглашение «Виртуальная АТС»",
      version: "актуальная версия — от 24.12.2020",
      url: "https://fts24.ru/files/docs/license-agreement-vatsfts-24122020.pdf",
    },
    {
      title: "Лицензионное соглашение «Виртуальная АТС»",
      version: "версия от 31.03.2020",
      url: "https://fts24.ru/files/docs/license-agreement-vatsfts-31032020.pdf",
    },
    {
      title: "Лицензионное соглашение «Виртуальная АТС»",
      version: "версия от 06.06.2019",
      url: "https://fts24.ru/files/docs/license-agreement-vatsfts-06062019.pdf",
    },
    {
      title:
        "Политика в отношении обработки персональных данных и сведения о реализуемых требованиях к защите персональных данных в ООО «ФТС»",
      version: null,
      url: "https://fts24.ru/files/docs/personal-politics.docx",
    },
  ]

  const certificates = [
    {
      title: "Сертификат соответствия на АСР (Автоматизированную систему расчетов)",
      description: "Система сертификации в области связи",
      number: "ОС-6-СТ-0803",
      url: "https://fts24.ru/files/docs/certificate-billing.pdf",
    },
    {
      title: "Сертификат соответствия на ЦОВ (Центр обработки вызовов)",
      description: "Система сертификации в области связи",
      number: "ОС-6-Ц-0072",
      url: "https://fts24.ru/files/docs/certificate-cpc.pdf",
    },
  ]

  const otherdocs = [
    {
      title: "Сводная ведомость результатов проведения специальной оценки условий труда (2025)",
      description: "Система менеджмента качества",
      url: "https://fts24.ru/files/docs/sout-ooo-fts-2025.pdf",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Документы</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Лицензионные соглашения и нормативные документы ООО «ФТС»
            </p>
          </div>
        </div>
      </section>

      {/* Documents List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Список документов ООО «ФТС»</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                    >
                      <FileText className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {doc.title}
                      {doc.version && ` (${doc.version})`}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.url.endsWith(".pdf") ? "PDF документ" : "DOCX документ"}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Organization Information */}
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">Сведения об организации</h2>
              <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                <dl className="grid gap-4 sm:grid-cols-[220px_1fr]">
                  <dt className="text-sm font-medium text-muted-foreground">Краткое наименование:</dt>
                  <dd className="text-sm font-semibold">ООО «ФТС»</dd>

                  <dt className="text-sm font-medium text-muted-foreground">Полное наименование:</dt>
                  <dd className="text-sm">
                    Общество с ограниченной ответственностью «Фьюче Текнолоджи Солюшинс»
                  </dd>

                  <dt className="text-sm font-medium text-muted-foreground">ИНН:</dt>
                  <dd className="text-sm">7715563903</dd>

                  <dt className="text-sm font-medium text-muted-foreground">ОКВЭД:</dt>
                  <dd className="text-sm">62.01 — Разработка компьютерного программного обеспечения</dd>

                  <dt className="text-sm font-medium text-muted-foreground">Юридический адрес:</dt>
                  <dd className="text-sm">
                    127018, г. Москва, вн.тер.г. муниципальный округ Марьина Роща, пр-д 3-й Марьиной Рощи, д. 40, стр.
                    1, этаж 2, помещ. II, ком. 1, кабинет 3
                  </dd>

                  <dt className="text-sm font-medium text-muted-foreground">E-mail:</dt>
                  <dd className="text-sm">
                    <a href="mailto:sales@fts24.ru" className="text-primary hover:underline">
                      sales@fts24.ru
                    </a>
                  </dd>

                  <dt className="text-sm font-medium text-muted-foreground">Телефоны:</dt>
                  <dd className="text-sm space-y-1">
                    <div>
                      <a href="tel:88001010350" className="hover:text-primary">
                        8 800 10 10 350
                      </a>
                    </div>
                    <div>
                      <a href="tel:+74951010350" className="hover:text-primary">
                        +7 495 10 10 350
                      </a>
                    </div>
                    <div>
                      <a href="tel:+74953080455" className="hover:text-primary">
                        +7 495 308 04 55
                      </a>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>

            {/* Registry Information */}
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">Реестр российского ПО</h2>
              <div className="rounded-lg border border-border bg-muted/30 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                    >
                      <FileText className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Программа «Виртуальная АТС» зарегистрирована в{" "}
                      <a
                        href="https://reestr.digital.gov.ru/request/217932/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Едином реестре российских программ для электронных вычислительных машин и баз данных
                      </a>
                      : реестровая запись № 8839 от 21.01.2021. Запись произведена на основании приказа Министерства
                      цифрового развития, связи и массовых коммуникаций Российской Федерации от 21.01.2021 № 19.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Исключительные права на программу «Виртуальная АТС» принадлежат её разработчику — Обществу с
                      ограниченной ответственностью «Фьюче Текнолоджи Солюшинс».
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Предоставление прав использования программы «Виртуальная АТС» осуществляется через лицензионный
                      договор путём предоставления удалённого доступа посредством информационно-телекоммуникационных
                      сетей, включая сеть Интернет.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">Сертификаты ООО «ФТС»</h2>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                      >
                        <FileText className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">{cert.description}</p>
                      <p className="text-xs text-muted-foreground font-mono">{cert.number}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Other Documents Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold md:text-3xl">Другие документы</h2>
              <div className="space-y-4">
                {otherdocs.map((otherdoc, index) => (
                  <a
                    key={index}
                    href={otherdoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                      >
                        <FileText className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {otherdoc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">{otherdoc.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
