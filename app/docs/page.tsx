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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Официальные сведения и документы | ООО «ФТС»",
  description:
    "Официальные сведения о программных продуктах, стоимости, исключительных правах и технологическом стеке ООО «ФТС»",
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

  const products = [
    "программа «Виртуальная АТС»",
    "биллинговые и автоматизированные системы расчётов (АСР)",
    "программно-аппаратные комплексы центра обработки вызовов (ЦОВ)",
    "BSS/OSS-платформы для операторов связи",
    "системы взаиморасчётов с дилерами, агентами и партнёрами",
    "CRM, клиентские и партнёрские порталы",
    "AI-модули речевой аналитики",
    "интеграционные шлюзы и сервисы обмена данными",
    "услуги внедрения, сопровождения, интеграции и технической поддержки программных решений",
  ]

  const pricingBlocks = [
    {
      title: "Виртуальная АТС",
      tiers: [
        {
          name: "Базовый",
          price: "от 900 ₽/мес",
          features: ["до 3 сотрудников", "1 городской номер", "базовая маршрутизация", "статистика вызовов"],
        },
        {
          name: "Бизнес",
          price: "от 2 490 ₽/мес",
          features: ["до 15 сотрудников", "IVR", "запись разговоров", "распределение вызовов", "CRM-интеграции"],
        },
        {
          name: "Корпоративный",
          price: "от 4 900 ₽/мес",
          features: [
            "неограниченное количество сотрудников",
            "SIP / SIM / 8-800",
            "API",
            "расширенные интеграции",
            "речевая аналитика (опционально)",
          ],
        },
      ],
      addons: [
        { name: "Дополнительный городской номер", price: "от 400 ₽/мес" },
        { name: "Номер 8-800", price: "от 950 ₽/мес" },
        { name: "AI-расшифровка и речевая аналитика", price: "от 990 ₽/мес" },
      ],
    },
  ]

  const otherPricing = [
    {
      title: "AI-решения",
      items: [
        { name: "Речевая аналитика", price: "от 5 900 ₽/мес" },
        { name: "Индивидуальные AI-модули", price: "от 250 000 ₽" },
      ],
    },
    {
      title: "Enterprise-разработка",
      items: [
        {
          name: "Биллинговые системы, BSS/OSS, MVNO, CRM, интеграционные решения",
          price: "от 350 000 ₽",
        },
      ],
    },
    {
      title: "Системная интеграция",
      items: [
        { name: "Типовые интеграции", price: "от 50 000 ₽" },
        { name: "Сложные многосистемные интеграции", price: "от 150 000 ₽" },
      ],
    },
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
      title: "Средства контейнеризации и DevOps",
      items: ["Docker", "Git", "CI/CD pipelines", "Linux-based monitoring and logging systems"],
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

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-20">
          {/* БЛОК 1. Программные продукты */}
          <section>
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

          {/* БЛОК 2. Стоимость */}
          <section>
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
            {pricingBlocks.map((block, blockIndex) => (
              <div key={blockIndex} className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">{block.title}</h3>
                <div className="grid gap-4 lg:grid-cols-3">
                  {block.tiers.map((tier, tierIndex) => (
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
                  <h4 className="mb-3 text-sm font-semibold text-muted-foreground">Дополнительные опции:</h4>
                  <div className="grid gap-3 md:grid-cols-3">
                    {block.addons.map((addon, idx) => (
                      <div key={idx} className="rounded-lg border border-border bg-muted/30 p-4">
                        <div className="text-sm text-muted-foreground">{addon.name}</div>
                        <div className="mt-1 font-semibold">{addon.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Other services */}
            <div className="grid gap-4 md:grid-cols-3">
              {otherPricing.map((block, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold text-lg">{block.title}</h3>
                    <ul className="space-y-3">
                      {block.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="border-l-2 pl-3"
                          style={{ borderColor: "rgb(190, 18, 18)" }}
                        >
                          <div className="text-sm text-muted-foreground">{item.name}</div>
                          <div className="mt-1 font-semibold">{item.price}</div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div
              className="mt-8 rounded-lg border border-border bg-muted/30 p-5"
              style={{ borderLeftWidth: "4px", borderLeftColor: "rgb(190, 18, 18)" }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Финальная стоимость зависит от состава функционала, количества интеграций и требований к архитектуре
                решения.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/pricing">Перейти к тарифам</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contacts#request-form">Получить расчёт</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* БЛОК 3. Исключительные права */}
          <section>
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

          {/* БЛОК 4. Реестр российского ПО */}
          <section>
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

          {/* БЛОК 5. Технологический стек */}
          <section>
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

            <Card className="mb-6">
              <CardContent className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  ООО «ФТС» осуществляет разработку, внедрение и сопровождение собственных и заказных программных
                  решений с использованием импортонезависимого технологического стека, соответствующего требованиям к
                  российскому программному обеспечению.
                </p>
              </CardContent>
            </Card>

            <p className="mb-4 font-medium">
              При создании и эксплуатации программных продуктов компании используются:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {techStack.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
                        style={{ background: "rgba(190, 18, 18, 0.1)" }}
                      >
                        <category.icon
                          className="h-5 w-5 text-primary"
                          style={{ color: "rgb(190, 18, 18)" }}
                        />
                      </div>
                      <h3 className="font-semibold text-sm">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                            style={{ background: "rgb(190, 18, 18)" }}
                          />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardContent className="p-6 md:p-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Применяемый технологический стек обеспечивает разработку высоконагруженных отказоустойчивых
                  программных комплексов, интеграцию с внешними информационными системами и технологическую
                  независимость программных продуктов компании при эксплуатации на территории Российской Федерации.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Documents */}
          <section>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Список документов ООО «ФТС»</h2>
              <div
                className="h-1 w-20 bg-primary"
                style={{ background: "rgb(190, 18, 18)" }}
              ></div>
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
          </section>

          {/* Organization Information */}
          <section>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Сведения об организации</h2>
              <div
                className="h-1 w-20 bg-primary"
                style={{ background: "rgb(190, 18, 18)" }}
              ></div>
            </div>
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
                  127018, г. Москва, вн.тер.г. муниципальный округ Марьина Роща, пр-д 3-й Марьиной Рощи, д. 40, стр. 1,
                  этаж 2, помещ. II, ком. 1, кабинет 3
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
          </section>

          {/* Certificates */}
          <section>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Сертификаты ООО «ФТС»</h2>
              <div
                className="h-1 w-20 bg-primary"
                style={{ background: "rgb(190, 18, 18)" }}
              ></div>
            </div>
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
          </section>

          {/* Other Documents */}
          <section>
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">Другие документы</h2>
              <div
                className="h-1 w-20 bg-primary"
                style={{ background: "rgb(190, 18, 18)" }}
              ></div>
            </div>
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
          </section>
        </div>
      </div>
    </main>
  )
}
