import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  ExternalLink,
  Package,
  Wallet,
  ShieldCheck,
  Database,
  Server,
  Code2,
  Network,
  Container,
  ArrowRight,
  Briefcase,
  Award,
  Download,
  FolderOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Официальные сведения и документы | ООО «ФТС»",
  description:
    "Официальные сведения о программных продуктах, стоимости, исключительных правах и технологическом стеке ООО «ФТС»",
}

export default function DocsPage() {
  // Раздел 1: Документы ООО «ФТС»
  const companyDocuments = [
    {
      title: "Политика в отношении обработки персональных данных",
      description: "Сведения о реализуемых требованиях к защите персональных данных в ООО «ФТС»",
      url: "https://fts24.ru/files/docs/personal-politics.docx",
    },
    {
      title: "Согласие на обработку персональных данных",
      description: "Форма согласия субъекта персональных данных",
      url: "https://fts24.ru/files/docs/personal-politics.docx",
    },
    {
      title: "Лицензионное соглашение «Виртуальная АТС»",
      description: "Актуальная версия от 24.12.2020",
      url: "https://fts24.ru/files/docs/license-agreement-vatsfts-24122020.pdf",
    },
    {
      title: "Лицензионное соглашение «Виртуальная АТС»",
      description: "Версия от 31.03.2020",
      url: "https://fts24.ru/files/docs/license-agreement-vatsfts-31032020.pdf",
    },
    {
      title: "Лицензионное соглашение «Виртуальная АТС»",
      description: "Версия от 06.06.2019",
      url: "https://fts24.ru/files/docs/license-agreement-vatsfts-06062019.pdf",
    },
  ]

  // Раздел 2: Сертификаты
  const certificates = [
    {
      title: "Сертификат соответствия на АСР (Автоматизированную систему расчётов)",
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

  // Раздел 3: Другие документы
  const otherDocuments = [
    {
      title: "Сводная ведомость результатов проведения специальной оценки условий труда (2025)",
      description: "Система менеджмента качества",
      url: "https://fts24.ru/files/docs/sout-ooo-fts-2025.pdf",
    },
    {
      title: "Инструкция пользователя «Виртуальная АТС»",
      description: "Справочные материалы по работе с системой",
      url: "https://fts24.ru/files/docs/vats-user-manual.pdf",
    },
  ]

  const products = [
    "программа для ЭВМ «Виртуальная АТС»",
    "биллинговые и автоматизированные системы расчётов (АСР)",
    "программно-аппаратные комплексы центра обработки вызовов (ЦОВ)",
    "системы поддержки бизнеса и операционной деятельности операторов связи (BSS/OSS)",
    "системы взаиморасчётов с дилерами, агентами и партнёрами",
    "системы управления взаимоотношениями с клиентами (CRM), клиентские и партнёрские порталы",
    "модули речевой аналитики на основе искусственного интеллекта (AI)",
    "интеграционные шлюзы и сервисы обмена данными",
    "услуги внедрения, сопровождения, интеграции и технической поддержки программных решений",
  ]

  const techStack = [
    {
      icon: Server,
      title: "Серверные операционные системы",
      items: ["Debian Linux", "иные Linux-совместимые ОС"],
    },
    {
      icon: Database,
      title: "Системы управления базами данных",
      items: ["PostgreSQL"],
    },
    {
      icon: Code2,
      title: "Языки программирования и серверные технологии",
      items: ["Java", "JavaScript / TypeScript", "PHP", "Python", "SQL", "Node.js"],
    },
    {
      icon: Code2,
      title: "Технологии веб-разработки и интерфейсов",
      items: ["React", "Next.js", "HTML5 / CSS3", "REST API", "WebSocket"],
    },
    {
      icon: Network,
      title: "Интеграционные и телекоммуникационные протоколы",
      items: ["SIP / VoIP", "HTTP API", "SOAP / REST / JSON / XML"],
    },
    {
      icon: Container,
      title: "Средства контейнеризации и автоматизации развёртывания (DevOps)",
      items: ["Docker", "Git", "CI/CD (непрерывная интеграция и доставка)", "Средства мониторинга и логирования на базе Linux"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Официальные сведения, документы и программные продукты ООО «ФТС»
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Раскрытие информации в соответствии с требованиями к российским разработчикам программного обеспечения
            </p>
          </div>
        </div>
      </section>

      {/* Anchor Navigation */}
      <section className="border-b border-border bg-muted/20 py-4 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
            <a href="#documents" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Документы
            </a>
            <a href="#certificates" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Сертификаты
            </a>
            <a href="#products" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Продукты
            </a>
            <a href="#pricing" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Стоимость
            </a>
            <a href="#rights" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Права
            </a>
            <a href="#registry" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Реестр ПО
            </a>
            <a href="#activities" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Виды деятельности
            </a>
            <a href="#tech" className="px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              Технологии
            </a>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-20">

          {/* РАЗДЕЛ 1. Документы ООО «ФТС» */}
          <section id="documents">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <FileText className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Раздел 1. Документы ООО «ФТС»</h2>
                <p className="mt-2 text-muted-foreground">
                  Политика обработки персональных данных, реквизиты, сведения об организации
                </p>
                <div className="mt-3 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            {/* Сведения об организации */}
            <Card className="mb-6">
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-4 text-lg font-semibold">Сведения об организации и реквизиты</h3>
                <dl className="grid gap-3 sm:grid-cols-[200px_1fr] text-sm">
                  <dt className="font-medium text-muted-foreground">Краткое наименование:</dt>
                  <dd className="font-semibold">ООО «ФТС»</dd>

                  <dt className="font-medium text-muted-foreground">Полное наименование:</dt>
                  <dd>Общество с ограниченной ответственностью «Фьюче Текнолоджи Солюшинс»</dd>

                  <dt className="font-medium text-muted-foreground">ИНН:</dt>
                  <dd>7715563903</dd>

                  <dt className="font-medium text-muted-foreground">ОКВЭД:</dt>
                  <dd>62.01 — Разработка компьютерного программного обеспечения</dd>

                  <dt className="font-medium text-muted-foreground">Юридический адрес:</dt>
                  <dd>
                    127018, г. Москва, вн.тер.г. муниципальный округ Марьина Роща, пр-д 3-й Марьиной Рощи, д. 40, стр.
                    1, этаж 2, помещ. II, ком. 1, кабинет 3
                  </dd>
                </dl>
              </CardContent>
            </Card>

            {/* Документы */}
            <div className="grid gap-4 md:grid-cols-2">
              {companyDocuments.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Download className="h-5 w-5 shrink-0 text-primary mt-0.5" style={{ color: "rgb(190, 18, 18)" }} />
                      <div className="flex-1">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {doc.title}
                        </a>
                        <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* РАЗДЕЛ 2. Сертификаты */}
          <section id="certificates">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <Award className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Раздел 2. Сертификаты</h2>
                <p className="mt-2 text-muted-foreground">Сертификаты соответствия на программные продукты</p>
                <div className="mt-3 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certificates.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 shrink-0 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
                      <div className="flex-1">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {cert.title}
                        </a>
                        <p className="mt-1 text-sm text-muted-foreground">{cert.description}</p>
                        <p className="mt-2 text-sm font-medium">Номер: {cert.number}</p>
                        <Button variant="outline" size="sm" className="mt-3" asChild>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Скачать PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* РАЗДЕЛ 3. Другие документы */}
          <section>
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <FolderOpen className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Раздел 3. Другие документы</h2>
                <p className="mt-2 text-muted-foreground">Инструкции, справочные материалы и иные документы</p>
                <div className="mt-3 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {otherDocuments.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Download className="h-5 w-5 shrink-0 text-primary mt-0.5" style={{ color: "rgb(190, 18, 18)" }} />
                      <div className="flex-1">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {doc.title}
                        </a>
                        <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* БЛОК 4. Программные продукты */}
          <section id="products">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <Package className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Собственные программные продукты и реализуемые решения
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  ООО «ФТС» является российским разработчиком и правообладателем программных решений для автоматизации
                  телекоммуникационных и бизнес-процессов.
                </p>
                <p className="mb-4 font-medium">
                  К числу реализуемых и сопровождаемых программных продуктов, товаров и услуг компании относятся:
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {products.map((product, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        style={{ background: "rgb(190, 18, 18)" }}
                      />
                      <span className="text-sm text-muted-foreground">{product}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/services">
                      Подробнее о решениях
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/solutions">Готовые решения</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* БЛОК 5. Стоимость */}
          <section id="pricing">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <Wallet className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Стоимость программных решений и услуг</h2>
                <div className="mt-2 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            {/* VATS Pricing */}
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">Виртуальная АТС</h3>
              <div className="grid gap-4 lg:grid-cols-3">
                {[
                  {
                    name: "Базовый",
                    price: "900 ₽/мес",
                    features: ["до 3 сотрудников", "1 городской номер", "базовая маршрутизация", "статистика вызовов"],
                  },
                  {
                    name: "Бизнес",
                    price: "2 490 ₽/мес",
                    features: [
                      "до 15 сотрудников",
                      "голосовое меню (IVR)",
                      "запись разговоров",
                      "распределение вызовов",
                      "интеграция с CRM-системами",
                    ],
                  },
                  {
                    name: "Корпоративный",
                    price: "4 900 ₽/мес",
                    features: [
                      "неограниченное количество сотрудников",
                      "SIP / SIM / 8-800",
                      "программный интерфейс (API)",
                      "расширенные интеграции",
                    ],
                  },
                ].map((tier, tierIndex) => (
                  <Card key={tierIndex}>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="text-sm font-medium text-muted-foreground">{tier.name}</div>
                        <div className="mt-1 text-2xl font-bold">{tier.price}</div>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                              style={{ background: "rgb(190, 18, 18)" }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-muted-foreground">Дополнительные услуги:</h4>
                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    { name: "Дополнительный городской номер", price: "400 ₽/мес" },
                    { name: "Номер 8-800", price: "950 ₽/мес" },
                    { name: "Расшифровка разговоров на базе AI", price: "990 ₽/мес" },
                    { name: "Расширенное хранение записей", price: "300 ₽/мес" },
                  ].map((addon, idx) => (
                    <div key={idx} className="rounded-lg border border-border bg-muted/30 p-4">
                      <div className="text-sm text-muted-foreground">{addon.name}</div>
                      <div className="mt-1 font-semibold">{addon.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <Card className="mb-6">
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-4 text-lg font-semibold">
                  Корпоративные информационные системы (Enterprise-разработка)
                </h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Стоимость разработки и внедрения корпоративных информационных систем определяется индивидуально в
                  зависимости от состава функционала, количества интеграций и требований к архитектуре решения.
                </p>
                <p className="mb-3 font-medium">Примеры типовых проектов:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    { name: "Системы управления взаимоотношениями с клиентами (CRM) и интеграционные решения", price: "350 000 ₽" },
                    { name: "Модули на основе искусственного интеллекта (AI) и аналитика", price: "150 000 ₽" },
                    { name: "Сложные многосистемные интеграции", price: "150 000 ₽" },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4"
                      style={{ borderLeftWidth: "4px", borderLeftColor: "rgb(190, 18, 18)" }}
                    >
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                      <span className="font-semibold whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/pricing">Перейти к тарифам</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contacts#request-form">Получить расчёт</Link>
              </Button>
            </div>
          </section>

          {/* БЛОК 6. Исключительные права */}
          <section id="rights">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <ShieldCheck className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Исключительные права и порядок предоставления прав использования
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Исключительные права на программные продукты, разработанные ООО «ФТС», включая программу для ЭВМ
                  «Виртуальная АТС», принадлежат Обществу с ограниченной ответственностью «Фьюче Текнолоджи Солюшинс».
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Право использования программных продуктов предоставляется на основании лицензионного договора путём
                  предоставления удалённого доступа посредством информационно-телекоммуникационных сетей, включая сеть
                  Интернет, а также в составе программно-аппаратных комплексов, интеграционных модулей и корпоративных
                  инсталляций по индивидуальным условиям лицензирования.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* БЛОК 7. Реестр российского ПО */}
          <section id="registry">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <FileText className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Регистрация программного обеспечения в реестре российского ПО
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Программа «Виртуальная АТС» зарегистрирована в Едином реестре российских программ для электронных
                  вычислительных машин и баз данных:
                </p>
                <div
                  className="my-6 rounded-lg border border-border bg-muted/30 p-5"
                  style={{ borderLeftWidth: "4px", borderLeftColor: "rgb(190, 18, 18)" }}
                >
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold">Реестровая запись № 8839 от 21.01.2021</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Внесена на основании приказа Министерства цифрового развития, связи и массовых коммуникаций
                      Российской Федерации от 21.01.2021 № 19.
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <a
                    href="https://reestr.digital.gov.ru/reestr/310189/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Смотреть запись в реестре
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* БЛОК 8. Виды деятельности */}
          <section id="activities">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <Briefcase className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Осуществляемые виды деятельности в области информационных технологий
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  ООО «ФТС» осуществляет деятельность в области информационных технологий в соответствии с перечнем
                  видов деятельности, утверждённым Приказом Минцифры России №449, включая:
                </p>

                <ul className="space-y-4">
                  {[
                    {
                      code: "1.01",
                      title: "Проектирование и разработка программ для ЭВМ, баз данных",
                    },
                    {
                      code: "2.01",
                      title: "Реализация программ для ЭВМ, баз данных собственного проектирования",
                    },
                    {
                      code: "3.01",
                      title:
                        "Оказание услуг (выполнение работ) по внедрению, сопровождению, тестированию и технической поддержке программ для ЭВМ, баз данных",
                    },
                    {
                      code: "8.01",
                      title:
                        "Оказание услуг по обработке информации, предоставлению вычислительной мощности, размещению информации в информационных системах, постоянно подключённых к сети Интернет",
                    },
                  ].map((activity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 rounded-lg border border-border bg-muted/30 p-4"
                      style={{ borderLeftWidth: "4px", borderLeftColor: "rgb(190, 18, 18)" }}
                    >
                      <div
                        className="flex h-12 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-sm font-bold text-primary"
                        style={{
                          background: "rgba(190, 18, 18, 0.1)",
                          color: "rgb(190, 18, 18)",
                        }}
                      >
                        {activity.code}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{activity.title}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* БЛОК 9. Технологический стек */}
          <section id="tech">
            <div className="mb-8 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <Code2 className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Используемый технологический стек разработки и сопровождения программного обеспечения
                </h2>
                <div className="mt-2 h-1 w-20 bg-primary" style={{ background: "rgb(190, 18, 18)" }}></div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  При разработке, внедрении и сопровождении программных продуктов компания использует импортонезависимый
                  технологический стек, соответствующий требованиям к отечественному программному обеспечению:
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {techStack.map((category, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-muted/20 p-5"
                      style={{ borderTopWidth: "3px", borderTopColor: "rgb(190, 18, 18)" }}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <category.icon
                          className="h-5 w-5 text-primary"
                          style={{ color: "rgb(190, 18, 18)" }}
                        />
                        <h4 className="font-semibold text-sm">{category.title}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60"
                              style={{ background: "rgba(190, 18, 18, 0.6)" }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 rounded-lg border border-border bg-muted/30 p-5"
                  style={{ borderLeftWidth: "4px", borderLeftColor: "rgb(190, 18, 18)" }}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Используемые технологии не имеют ограничений по лицензированию, не требуют приобретения иностранного
                    программного обеспечения и обеспечивают полный контроль над исходным кодом и данными.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  )
}
