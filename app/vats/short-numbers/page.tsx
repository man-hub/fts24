import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Phone, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Короткие номера — Виртуальная АТС | ООО «ФТС»",
  description: "Короткая 3-4-значная нумерация для быстрого дозвона до сотрудников и отделов компании",
}

export default function ShortNumbersPage() {
  const useCases = [
    {
      icon: Phone,
      title: "Для клиентов",
      description:
        "Клиенты звонят на общий номер и набирают добавочный нужного менеджера. Быстрее, чем ждать соединения оператором",
    },
    {
      icon: Users,
      title: "Для сотрудников",
      description: "Внутренняя связь между сотрудниками по коротким номерам. Набрал 101 — дозвонился до отдела продаж",
    },
  ]

  const benefits = [
    "Быстрее дозвон — не нужно искать телефон сотрудника, достаточно знать добавочный",
    "Понятная внутренняя связь — легко запомнить, кто на каком номере",
    "Экономия времени — клиенты сразу связываются с нужным специалистом",
    "Масштабируемость — добавляйте новых сотрудников и номера без ограничений",
  ]

  const relatedFeatures = [
    {
      title: "Аудиосервисы и IVR",
      url: "/vats/audio-notify",
      description: "Голосовое приветствие и маршрутизация",
    },
    {
      title: "Голосовое меню (IVR)",
      url: "/vats/ivr",
      description: "Автоматический выбор отдела",
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
            <span className="text-foreground">Короткие номера</span>
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
              Короткие номера
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              3-4-значные добавочные номера для быстрой связи с сотрудниками и отделами. Простая внутренняя коммуникация
              и удобный дозвон для клиентов
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

      {/* Use Cases */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Сценарии использования</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Короткие номера для внешних и внутренних звонков
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                    style={{ background: "rgba(190, 18, 18, 0.1)" }}
                  >
                    <useCase.icon className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
                  </div>
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to connect */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Как подключить</h2>
              <p className="text-lg text-muted-foreground">Настройка за пару минут в личном кабинете</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "1", text: "Откройте настройки ВАТС в личном кабинете" },
                { step: "2", text: "Включите функцию коротких номеров" },
                { step: "3", text: "Назначьте добавочные номера сотрудникам" },
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

      {/* Benefits */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Преимущества коротких номеров</h2>
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

      {/* Related Features */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Хорошо сочетается с</h2>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Настройте короткие номера</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Упростите коммуникацию для ваших клиентов и сотрудников
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
