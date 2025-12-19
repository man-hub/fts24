import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Users, Clock, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IVR (Голосовое меню) — Виртуальная АТС | ООО «ФТС»",
  description:
    "Интерактивное голосовое меню для автоматической маршрутизации звонков. Многоуровневые меню, распознавание DTMF, интеграция с CRM",
}

export default function IVRPage() {
  const features = [
    {
      icon: Bot,
      title: "Многоуровневые меню",
      description: "Создание сложных древовидных структур с неограниченной вложенностью для любых сценариев",
    },
    {
      icon: Users,
      title: "Умная маршрутизация",
      description: "Автоматическое направление звонков к нужному специалисту на основе выбора клиента",
    },
    {
      icon: Clock,
      title: "Работа 24/7",
      description: "Обслуживание клиентов круглосуточно даже без участия операторов",
    },
  ]

  const benefits = [
    "Снижение нагрузки на операторов до 40%",
    "Быстрая маршрутизация к нужному отделу",
    "Самообслуживание клиентов без ожидания",
    "Гибкая настройка через личный кабинет",
    "Интеграция с CRM для персонализации",
    "Детальная статистика по выбору пунктов",
  ]

  const relatedFeatures = [
    {
      title: "Аудиосервисы и приветствия",
      url: "/vats/audio-notify",
      description: "Профессиональные голосовые приветствия",
    },
    {
      title: "Запись разговоров",
      url: "/vats/call-recording",
      description: "Контроль качества обслуживания",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-muted/30 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/vats" className="hover:text-foreground transition-colors">
              ВАТС
            </Link>
            <span>/</span>
            <span className="text-foreground">IVR (Голосовое меню)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Функция ВАТС
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              IVR — интерактивное голосовое меню
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              Автоматизируйте обработку входящих звонков с помощью интеллектуального голосового меню. Клиенты быстро
              попадают к нужному специалисту
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts#request-form">
                  Подключить
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vats">Все функции ВАТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Возможности IVR</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Гибкое голосовое меню для любых бизнес-задач
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                    style={{ background: "rgba(190, 18, 18, 0.1)" }}
                  >
                    <feature.icon className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Преимущества для бизнеса</h2>
              <p className="text-lg text-muted-foreground">Почему IVR критичен для современного контакт-центра</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-left"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Как это работает</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { step: "1", text: "Клиент звонит на ваш номер" },
                { step: "2", text: "Слышит голосовое меню с вариантами" },
                { step: "3", text: "Выбирает нужный пункт кнопкой телефона" },
                { step: "4", text: "Автоматически соединяется с отделом" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    {item.step}
                  </div>
                  <p className="text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Примеры использования</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "Служба поддержки",
                description:
                  'Клиент выбирает: "1 — Техподдержка, 2 — Продажи, 3 — Бухгалтерия" и попадает к нужному специалисту',
              },
              {
                title: "Медицинская клиника",
                description: 'IVR направляет звонок: "1 — Запись на прием, 2 — Результаты анализов, 3 — Справки"',
              },
              {
                title: "Интернет-магазин",
                description: 'Меню помогает: "1 — Статус заказа, 2 — Возврат товара, 3 — Консультация менеджера"',
              },
            ].map((useCase, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-lg">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Хорошо сочетается с</h2>
              <p className="text-lg text-muted-foreground">Дополнительные функции для лучшего результата</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-lg">{feature.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{feature.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={feature.url}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Внедрите IVR в вашей компании</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Автоматизируйте обработку звонков и повысьте качество обслуживания клиентов
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts#request-form">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
