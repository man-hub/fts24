import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Users, MessageCircle, Shield, ArrowRight, Check, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Кейс: Проект "Пойдём, выйдем!" — ООО «ФТС»',
  description:
    "Как ФТС разработала бесплатный сервис одноразовых телефонных номеров для конфиденциального общения — технологическое решение для социального проекта",
}

export default function PoidemVyjdemCasePage() {
  const features = [
    {
      icon: Phone,
      title: "Одноразовые номера",
      description: "Бесплатное получение виртуальных московских номеров для разовых конференц-звонков",
    },
    {
      icon: Shield,
      title: "Конфиденциальность",
      description:
        "АОН-номера всех участников остаются скрытыми друг от друга, невозможно определить реальные контакты",
    },
    {
      icon: Users,
      title: "Многопользовательские конференции",
      description: "Неограниченное количество участников в одном разговоре без регистрации и установки приложений",
    },
    {
      icon: MessageCircle,
      title: "PIN-защита",
      description: "Опциональный PIN-код для закрытых разговоров — подключиться могут только те, кто знает код доступа",
    },
  ]

  const challenges = [
    "Создание масштабируемой телефонной конференц-системы без мобильного интернета",
    "Обеспечение полной анонимности всех участников разговора",
    "Работа на обычных телефонах без установки приложений",
    "Генерация уникальных номеров и PIN-кодов в реальном времени",
    "Высокая доступность системы при большом потоке звонков",
  ]

  const solutions = [
    {
      title: "Виртуальная АТС с IVR",
      description:
        "Система автоматически генерирует одноразовые московские номера и соединяет участников через голосовое меню",
    },
    {
      title: "Конференц-платформа",
      description:
        "Многопользовательские конференции с неограниченным количеством участников и контролем доступа через PIN",
    },
    {
      title: "Web-интерфейс",
      description:
        "Простой сайт для мгновенного получения номера и автоматической генерации сообщения для отправки участникам",
    },
  ]

  const stats = [
    { value: "100%", label: "Бесплатно для пользователей" },
    { value: "0", label: "Установок приложений" },
    { value: "∞", label: "Участников в конференции" },
    { value: "3", label: "Цифры в PIN-коде" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/cases"
              className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              ← Назад к кейсам
            </Link>
            <Badge className="mb-4" variant="secondary">
              Социальный проект
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Проект "Пойдём, выйдем!"
            </h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl text-pretty">
              Бесплатный многоканальный телефон для секретного разговора — инновационный сервис одноразовых виртуальных
              номеров для конфиденциального общения
            </p>
            <Button size="lg" variant="outline" asChild>
              <a href="https://vydem.ru" target="_blank" rel="noopener noreferrer">
                Открыть сайт проекта
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">О проекте</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <a href="https://vydem.ru">"Пойдём, выйдем!"</a> — уникальный социальный проект, предоставляющий бесплатный сервис для
                организации конфиденциальных телефонных разговоров. Система позволяет получить одноразовый московский
                номер и организовать многопользовательскую конференцию без раскрытия реальных номеров участников.
              </p>
              <p>
                Проект решает проблему конфиденциального общения в ситуациях, когда нужно поговорить голосом, но нет
                возможности или желания раскрывать личные контактные данные. В отличие от мессенджеров, сервис работает
                через обычную телефонную связь — подойдет даже кнопочный телефон.
              </p>
              <p>
                Сервис полностью бесплатный для пользователей: можно генерировать сколько угодно номеров, длительность
                разговора не ограничена. Оплачивается только звонок на городской московский номер согласно тарифам
                оператора.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ключевые возможности</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
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

      {/* Challenges */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold">Технические задачи</h2>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Реализованное решение</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "rgb(190, 18, 18)" }}>
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Как работает сервис</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { step: "1", text: "Пользователь заходит на vydem.ru и получает одноразовый номер" },
                { step: "2", text: "Делится номером с собеседниками через любой мессенджер" },
                { step: "3", text: "Участники звонят на номер и вводят PIN-код (если установлен)" },
                { step: "4", text: "Все соединяются в конференцию, реальные номера скрыты" },
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

      {/* Stats */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Параметры сервиса</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold text-primary" style={{ color: "rgb(190, 18, 18)" }}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold">Использованные технологии</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Виртуальная АТС ФТС",
                "IVR",
                "SIP/VoIP",
                "Конференц-связь",
                "REST API",
                "PostgreSQL",
                "Redis",
                "Yii2 Framework",
              ].map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-primary/10"
                  style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div
              className="flex items-start gap-4 p-6 rounded-lg border"
              style={{ backgroundColor: "rgba(220, 38, 38, 0.05)", borderColor: "rgba(220, 38, 38, 0.2)" }}
            >
              <AlertCircle className="w-6 h-6 shrink-0 mt-1" style={{ color: "rgb(220, 38, 38)" }} />
              <div>
                <h3 className="text-xl font-semibold mb-3">Преимущества перед мессенджерами</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Работает без мобильного интернета — подходит для мест со слабым покрытием</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Не требует установки приложений — работает на любом телефоне</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Не нужна регистрация — просто получите номер и поделитесь им</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Полная анонимность — никто не узнает реальные номера участников</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-primary py-16 text-primary-foreground md:py-20"
        style={{ backgroundColor: "rgb(190, 18, 18)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Нужна разработка телефонного сервиса?</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Мы создаем инновационные решения на базе виртуальной АТС для любых задач
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacts">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-primary-foreground"
              >
                <Link href="/vats">Подробнее о ВАТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
