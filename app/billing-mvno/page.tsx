import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Users,
  Network,
  TrendingUp,
  Zap,
  Database,
  Settings,
  ArrowRight,
  Boxes,
  UserCheck,
  Globe,
  Wallet,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Биллинг и MVNO-платформа — ООО «ФТС»",
  description:
    "Полный цикл монетизации услуг связи и цифровых сервисов. BSS/OSS платформа для операторов связи, MVNO и цифровых экосистем",
}

export default function BillingMVNOPage() {
  const targetAudience = [
    {
      icon: Network,
      title: "Мобильные операторы и MVNO",
      description: "Готовые решения для запуска и монетизации телеком-услуг",
    },
    {
      icon: Zap,
      title: "Операторы фиксированной связи и ШПД",
      description: "Биллинг для широкополосного доступа и домашней телефонии",
    },
    {
      icon: Globe,
      title: "Провайдеры облачных и цифровых сервисов",
      description: "Тарификация и монетизация цифровых продуктов",
    },
    {
      icon: TrendingUp,
      title: "Крупный бизнес с телеком-экосистемой",
      description: "Построение собственной сервисной и партнёрской инфраструктуры",
    },
  ]

  const platformSolutions = [
    {
      icon: Wallet,
      title: "Биллинг для услуг связи",
      description: "Голос, SMS, передача данных, дополнительные сервисы",
    },
    {
      icon: Users,
      title: "Взаиморасчёты с партнёрами",
      description: "Автоматизация расчётов с дилерами и агентами",
    },
    {
      icon: Boxes,
      title: "Сложные продуктовые модели",
      description: "Пакеты, опции, бандлы и промо-предложения",
    },
    {
      icon: Zap,
      title: "Тарификация в реальном времени",
      description: "Online-тарификация для цифровых сервисов",
    },
    {
      icon: Network,
      title: "Поддержка мультибрендов",
      description: "Несколько операторов на одной платформе (MVNE/MVNA)",
    },
  ]

  const billingCore = [
    "Многотарифная модель и конструктор тарифов",
    "Периодические, разовые и событийные списания",
    "Online и offline тарификация",
    "Отчётность и выгрузки для финансового учёта",
    "Поддержка различных валют и систем налогообложения",
  ]

  const subscribers = [
    "Управление продуктовым каталогом",
    "Личные кабинеты абонента и дилера",
    "Управление балансами, бонусами и акциями",
    "Запуск новых сервисов без доработки ядра",
    "Гибкие системы скидок и лояльности",
  ]

  const partners = [
    "Схемы вознаграждения и комиссий",
    "Автоматизация взаиморасчётов",
    "Личный кабинет партнёра с отчётностью",
    "Многоуровневые партнёрские программы",
    "Контроль продаж и KPI партнёров",
  ]

  const mvno = [
    "Быстрый запуск MVNO на базе инфраструктуры оператора",
    "Интеграции с HLR/HSS и IN-платформой",
    "Системы тарификации и CRM",
    "Несколько виртуальных операторов на одной платформе",
    "Полный контроль над продуктовой линейкой",
  ]

  const integrations = [
    "CRM и ERP системы",
    "BSS/OSS инфраструктура оператора",
    "Платёжные шлюзы и банковские системы",
    "Системы отчётности и DWH",
    "ВАТС и IN-платформа ФТС",
    "Внешние API и веб-сервисы",
  ]

  const advantages = [
    {
      icon: CheckCircle2,
      title: "Опыт внедрения",
      description: "Успешные проекты для мобильных, фиксированных операторов и MVNO",
    },
    {
      icon: Server,
      title: "Высоконагруженная архитектура",
      description: "Готовность к росту абонентской базы и увеличению нагрузки",
    },
    {
      icon: Settings,
      title: "Гибкая кастомизация",
      description: "Адаптация под бизнес-модель конкретного оператора",
    },
    {
      icon: Network,
      title: "Экспертиза в экосистемах",
      description: "Построение партнёрских сетей и дилерских программ",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              BSS/OSS Платформа
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Биллинг и MVNO-платформа для операторов связи и экосистем
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              Полный цикл монетизации услуг связи и цифровых сервисов: от тарификации и взаиморасчётов до управления
              партнёрской сетью
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacts#request-form">Запросить демо</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Для кого</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Наша платформа подходит для различных типов операторов и бизнеса
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {targetAudience.map((item, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-start gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Platform Solves */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Что решает платформа</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Комплексное решение для монетизации телеком-услуг и цифровых сервисов
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformSolutions.map((solution, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Functional Blocks */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Функциональные блоки</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Модульная архитектура для решения любых бизнес-задач
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Billing Core */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Биллинговое ядро</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {billingCore.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Subscribers */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Работа с абонентами и продуктами</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {subscribers.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Partners */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Партнёры, дилеры, агенты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {partners.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* MVNO */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">MVNO/MVNE-возможности</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mvno.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Интеграции</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Биллинговая платформа легко интегрируется с существующими системами
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-left"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Преимущества ФТС как разработчика биллинга</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Почему операторы выбирают наши решения</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Расскажите о своей модели бизнеса</h2>
              <p className="text-lg opacity-90 text-pretty">
                Мы предложим архитектуру биллинга и MVNO-платформы под ваши задачи
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-6 md:p-8 backdrop-blur-sm">
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
