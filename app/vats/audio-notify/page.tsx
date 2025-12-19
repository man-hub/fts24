import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Volume2, ArrowRight, Check, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Аудиосервисы и IVR — Виртуальная АТС | ООО «ФТС»",
  description:
    "Приветственные сообщения, мелодия вместо гудка и мелодия ожидания для профессионального имиджа компании",
}

export default function AudioNotifyPage() {
  const features = [
    {
      icon: Volume2,
      title: "Приветственное сообщение",
      description:
        "Загрузите собственное аудио или выберите из предустановленных вариантов. Клиент услышит приветствие до соединения с оператором",
    },
    {
      icon: Music,
      title: "Мелодия вместо гудка",
      description: "Замените стандартные гудки на музыку или рекламное сообщение. Поддержка MP3-файлов до 10 МБ",
    },
    {
      icon: Phone,
      title: "Мелодия ожидания",
      description:
        "Музыкальное сопровождение в очереди или при удержании звонка. Информируйте клиентов о новостях и акциях",
    },
  ]

  const benefits = [
    "Меньше раздражения от ожидания — клиент слышит приятную музыку вместо гудков",
    "Дополнительный рекламный канал — используйте время ожидания для промо",
    "Дружелюбный опыт — профессиональное впечатление о компании с первой секунды",
    "Простая настройка — загрузка аудио через личный кабинет за пару минут",
  ]

  const relatedFeatures = [
    {
      title: "Голосовое меню (IVR)",
      url: "/vats/ivr",
      description: "Автоматическая маршрутизация звонков",
    },
    {
      title: "Короткие номера",
      url: "/vats/short-numbers",
      description: "Быстрый дозвон по добавочным номерам",
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
            <span className="text-foreground">Аудиосервисы и IVR</span>
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
              Аудиосервисы и IVR
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
              Создайте профессиональное первое впечатление с приветственными сообщениями, музыкой вместо гудков и
              мелодиями ожидания
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Возможности аудиосервисов</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Три типа аудио для разных сценариев</p>
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
              <p className="text-lg text-muted-foreground">Почему аудиосервисы важны для вашей компании</p>
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
                { step: "1", text: "Войдите в личный кабинет ВАТС" },
                { step: "2", text: "Загрузите MP3-файл или выберите из библиотеки" },
                { step: "3", text: "Назначьте аудио на нужные номера" },
                { step: "4", text: "Клиенты слышат профессиональное приветствие" },
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

      {/* Related Features */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Подключите аудиосервисы сегодня</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Создайте профессиональный имидж компании с первого звонка
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
