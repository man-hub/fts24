import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Users,
  BarChart3,
  Cloud,
  Shield,
  Zap,
  Network,
  Headphones,
  ArrowRight,
  Check,
  PhoneCall,
  Bot,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Виртуальная АТС — ООО «ФТС»",
  description:
    "Облачная виртуальная АТС для бизнеса. Многоканальные номера, IVR, запись разговоров, интеграция с CRM. Готовое решение для контакт-центров",
}

export default function VATSPage() {
  const features = [
    {
      icon: Phone,
      title: "Многоканальные номера",
      description: "Неограниченное количество линий и одновременных звонков",
    },
    {
      icon: Users,
      title: "Гибкое управление",
      description: "Простое добавление сотрудников, отделов и правил маршрутизации",
    },
    {
      icon: BarChart3,
      title: "Детальная аналитика",
      description: "Отчеты по звонкам, продуктивности операторов и качеству обслуживания",
    },
    {
      icon: PhoneCall,
      title: "Запись разговоров",
      description: "Автоматическая запись и хранение всех звонков с быстрым поиском",
    },
    {
      icon: Network,
      title: "Интеграция с CRM",
      description: "API для интеграции с любыми CRM и бизнес-системами",
    },
    {
      icon: Bot,
      title: "Умный IVR",
      description: "Голосовое меню с распознаванием речи и интеллектуальной маршрутизацией",
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Шифрование трафика, резервное копирование, защита от DDoS",
    },
    {
      icon: Cloud,
      title: "Облачное решение",
      description: "Без покупки оборудования, работает через интернет из любой точки",
    },
  ]

  const benefits = [
    "Запуск за 1 день без покупки оборудования",
    "Снижение расходов на связь до 70%",
    "Масштабирование по требованию",
    "Работа сотрудников из любой точки мира",
    "Интеграция с существующими системами",
    "Техподдержка 24/7",
  ]

  const useCases = [
    {
      title: "Контакт-центры",
      description: "Профессиональные решения для входящих и исходящих звонков с продвинутой аналитикой",
      icon: Headphones,
    },
    {
      title: "Продажи и поддержка",
      description: "Управление звонками клиентов, интеграция с CRM, контроль качества",
      icon: Users,
    },
    {
      title: "Удаленные команды",
      description: "Единая телефония для распределенных офисов и удаленных сотрудников",
      icon: Network,
    },
    {
      title: "Enterprise",
      description: "Масштабируемые решения для крупных компаний с тысячами сотрудников",
      icon: Zap,
    },
  ]

  const pricing = [
    {
      name: "Старт",
      price: "от 500 ₽",
      period: "на номер/мес",
      features: ["До 10 сотрудников", "Базовая статистика", "IVR и маршрутизация", "Запись звонков 30 дней"],
      popular: false,
    },
    {
      name: "Бизнес",
      price: "от 1 500 ₽",
      period: "на номер/мес",
      features: [
        "До 100 сотрудников",
        "Расширенная аналитика",
        "CRM-интеграция",
        "Запись звонков 90 дней",
        "Приоритетная поддержка",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "индивидуально",
      period: "под проект",
      features: [
        "Неограниченно сотрудников",
        "Полная аналитика и отчеты",
        "Индивидуальные интеграции",
        "Хранение записей без ограничений",
        "SLA 99.95%",
        "Персональный менеджер",
      ],
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Облачная телефония
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Виртуальная АТС для современного бизнеса
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              Профессиональная облачная телефония с полным набором функций контакт-центра. Запуск за 1 день, оплата по
              факту использования. Интеграция с любыми CRM и бизнес-системами.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Попробовать бесплатно
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#pricing">Посмотреть тарифы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Возможности платформы</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Все необходимое для профессиональной телефонии вашего бизнеса
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-start gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Решения для любого бизнеса</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Наша виртуальная АТС адаптируется под задачи вашей компании
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Преимущества нашей ВАТС</h2>
            <p className="mb-12 text-lg text-muted-foreground">Почему выбирают нас</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-left"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Тарифы</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Выберите оптимальный план для вашего бизнеса
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary shadow-lg" : ""}>
                <CardHeader>
                  {plan.popular && (
                    <Badge className="mb-2 w-fit" variant="default">
                      Популярный
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/contacts">Оставить заявку</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Начните работу с ВАТС сегодня</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Получите 14 дней бесплатного тестирования со всеми функциями. Техподдержка поможет с настройкой.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacts">Попробовать бесплатно</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/cases">Кейсы внедрений</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
