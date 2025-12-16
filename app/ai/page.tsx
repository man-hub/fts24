import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Brain,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Users,
  MessageSquare,
  Zap,
  FileText,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI-решения и речевая аналитика — ООО «ФТС»",
  description:
    "Речевая аналитика на базе AI для контакт-центров. Распознавание речи, анализ эмоций, контроль качества, автоматическая оценка операторов",
}

export default function AIPage() {
  const capabilities = [
    {
      icon: Mic,
      title: "Распознавание речи",
      description: "Автоматическая транскрибация разговоров в текст с точностью до 95%",
    },
    {
      icon: Brain,
      title: "Анализ эмоций",
      description: "Определение эмоционального состояния клиента и оператора в реальном времени",
    },
    {
      icon: MessageSquare,
      title: "Семантический анализ",
      description: "Понимание смысла разговора, ключевых тем и намерений клиента",
    },
    {
      icon: AlertCircle,
      title: "Детекция проблем",
      description: "Автоматическое выявление конфликтов, жалоб и критических ситуаций",
    },
    {
      icon: Target,
      title: "Контроль скриптов",
      description: "Проверка соблюдения операторами речевых модулей и регламентов",
    },
    {
      icon: BarChart3,
      title: "Оценка качества",
      description: "Автоматическая оценка качества обслуживания по 50+ параметрам",
    },
    {
      icon: TrendingUp,
      title: "Бизнес-аналитика",
      description: "Выявление трендов, причин обращений, точек роста продаж",
    },
    {
      icon: FileText,
      title: "Отчетность",
      description: "Детальные отчеты и дашборды для руководителей и аналитиков",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Повышение качества сервиса",
      description: "Контроль 100% разговоров вместо выборочной проверки 1-5%",
      metric: "+35% CSI",
    },
    {
      icon: TrendingUp,
      title: "Рост продаж",
      description: "Выявление упущенных возможностей и успешных практик",
      metric: "+20% конверсия",
    },
    {
      icon: Zap,
      title: "Снижение расходов",
      description: "Автоматизация контроля качества и аналитики",
      metric: "-60% время QA",
    },
    {
      icon: CheckCircle2,
      title: "Соответствие регламентам",
      description: "Контроль соблюдения всех требований и стандартов",
      metric: "100% контроль",
    },
  ]

  const useCases = [
    {
      title: "Контроль качества",
      description: "Автоматическая оценка всех разговоров операторов без прослушивания вручную",
      points: [
        "Проверка приветствия и завершения",
        "Контроль использования запрещенных фраз",
        "Анализ тона и вежливости",
        "Проверка решения проблемы клиента",
      ],
    },
    {
      title: "Аналитика продаж",
      description: "Выявление паттернов успешных продаж и причин отказов клиентов",
      points: [
        "Анализ возражений клиентов",
        "Эффективные аргументы продавцов",
        "Причины отказов от покупки",
        "Упущенные возможности допродаж",
      ],
    },
    {
      title: "Управление рисками",
      description: "Детекция критических ситуаций и конфликтов для оперативного реагирования",
      points: [
        "Обнаружение жалоб и недовольства",
        "Определение риска оттока клиента",
        "Мониторинг упоминания конкурентов",
        "Контроль соответствия законодательству",
      ],
    },
    {
      title: "Обучение персонала",
      description: "Поиск лучших практик и проблемных зон для программ развития операторов",
      points: [
        "Автоматический поиск эталонных звонков",
        "Выявление типовых ошибок",
        "Персональные рекомендации операторам",
        "Мониторинг прогресса обучения",
      ],
    },
  ]

  const technologies = [
    "Собственные модели распознавания речи на русском языке",
    "NLP для понимания смысла и контекста разговоров",
    "ML для автоматической классификации и оценки",
    "Экспресс-анализ для оперативного реагирования",
    "Интеграция с любыми системами записи и хранения диалогов",
    "Соответствие 152-ФЗ о персональных данных",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Искусственный интеллект
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              AI-решения для речевой аналитики
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              Автоматический анализ всех разговоров в контакт-центре. Распознавание речи, определение эмоций, контроль
              качества, бизнес-аналитика. Повысьте качество сервиса и продажи с помощью AI.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts#request-form">
                  Получить демо
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cases">Кейсы внедрения</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Возможности платформы</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Комплексный анализ речи на базе современных AI-технологий
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-start gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Результаты внедрения</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Измеримые улучшения бизнес-показателей</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  <div className="rounded-lg bg-primary/10 px-3 py-2">
                    <span className="font-semibold text-primary">{benefit.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Сценарии применения</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Решение задач бизнеса с помощью речевой аналитики
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Технологии</h2>
              <p className="text-lg text-muted-foreground">Собственные разработки и передовые решения</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Узнайте больше о наших AI-решениях</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Закажите демонстрацию платформы или консультацию наших специалистов. Мы покажем, как речевая аналитика
              может улучшить ваш бизнес.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacts#request-form">Заказать демо</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/cases">Примеры внедрений</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
