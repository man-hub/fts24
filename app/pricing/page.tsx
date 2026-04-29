import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Phone, Brain, Server, Workflow, ArrowRight, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Стоимость решений и услуг | ООО «ФТС»",
  description:
    "Официальный раздел стоимости программных решений и услуг ООО «ФТС»: Виртуальная АТС, AI-решения, enterprise-разработка, системная интеграция.",
}

export default function PricingPage() {
  const vatsPlans = [
    {
      name: "Базовый",
      price: "от 900 ₽",
      period: "в месяц",
      features: ["До 3 сотрудников", "1 городской номер", "Базовая маршрутизация", "Статистика вызовов"],
      popular: false,
    },
    {
      name: "Бизнес",
      price: "от 2 490 ₽",
      period: "в месяц",
      features: ["До 15 сотрудников", "IVR", "Запись разговоров", "Распределение вызовов", "CRM-интеграции"],
      popular: true,
    },
    {
      name: "Корпоративный",
      price: "от 4 900 ₽",
      period: "в месяц",
      features: [
        "Неограниченное количество сотрудников",
        "SIP / SIM / 8-800",
        "API",
        "Расширенные интеграции",
        "Речевая аналитика (опционально)",
      ],
      popular: false,
    },
  ]

  const vatsAddons = [
    { name: "Дополнительный городской номер", price: "от 400 ₽/мес" },
    { name: "Номер 8-800", price: "от 950 ₽/мес" },
    { name: "AI-расшифровка и речевая аналитика", price: "от 990 ₽/мес" },
  ]

  const otherServices = [
    {
      icon: Brain,
      title: "AI-решения",
      items: [
        { name: "Речевая аналитика", price: "от 5 900 ₽/мес" },
        { name: "Индивидуальные AI-модули", price: "от 250 000 ₽" },
      ],
      href: "/ai",
    },
    {
      icon: Server,
      title: "Enterprise-разработка",
      items: [
        {
          name: "Биллинговые системы, BSS/OSS, MVNO, CRM, интеграционные решения",
          price: "от 350 000 ₽",
        },
      ],
      href: "/solutions",
    },
    {
      icon: Workflow,
      title: "Системная интеграция",
      items: [
        { name: "Типовые интеграции", price: "от 50 000 ₽" },
        { name: "Сложные многосистемные интеграции", price: "от 150 000 ₽" },
      ],
      href: "/integration",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              Официальный раздел
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Стоимость решений и услуг ООО «ФТС»
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Прозрачные стартовые цены на программные продукты, AI-решения, enterprise-разработку и системную
              интеграцию.
            </p>
          </div>
        </div>
      </section>

      {/* VATS Pricing */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                style={{ background: "rgba(190, 18, 18, 0.1)" }}
              >
                <Phone className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
              </div>
              <div>
                <h2 className="mb-2 text-3xl font-bold md:text-4xl">Виртуальная АТС</h2>
                <p className="text-muted-foreground">
                  Программа для ЭВМ «Виртуальная АТС» включена в Единый реестр российского ПО (запись № 8839).{" "}
                  <Link href="/vats" className="text-primary hover:underline">
                    Подробнее о продукте
                  </Link>
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {vatsPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={plan.popular ? "border-primary shadow-lg relative" : "relative"}
                  style={plan.popular ? { borderColor: "rgb(190, 18, 18)" } : undefined}
                >
                  <CardHeader>
                    {plan.popular && (
                      <Badge
                        className="mb-2 w-fit"
                        style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
                      >
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
                          <Check
                            className="h-5 w-5 shrink-0 text-primary"
                            style={{ color: "rgb(190, 18, 18)" }}
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href="/contacts#request-form">Оставить заявку</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Addons */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-semibold">Дополнительные опции</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {vatsAddons.map((addon, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
                  >
                    <div className="mb-2 text-sm text-muted-foreground">{addon.name}</div>
                    <div className="font-semibold text-foreground">{addon.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Остальные направления</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                AI-решения, enterprise-разработка и системная интеграция
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {otherServices.map((service, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
                        style={{ background: "rgba(190, 18, 18, 0.1)" }}
                      >
                        <service.icon
                          className="h-5 w-5 text-primary"
                          style={{ color: "rgb(190, 18, 18)" }}
                        />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <ul className="flex-1 space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="border-l-2 border-primary/40 pl-3">
                          <div className="text-sm text-muted-foreground">{item.name}</div>
                          <div className="font-semibold">{item.price}</div>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href={service.href}>
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="border-b border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 md:p-8"
              style={{ borderLeftWidth: "4px", borderLeftColor: "rgb(190, 18, 18)" }}
            >
              <Info
                className="h-6 w-6 shrink-0 text-primary mt-0.5"
                style={{ color: "rgb(190, 18, 18)" }}
              />
              <div className="space-y-2">
                <p className="font-semibold">Финальная стоимость</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Финальная стоимость зависит от состава функционала, количества интеграций и требований к архитектуре
                  решения. Для расчёта индивидуального коммерческого предложения свяжитесь с нашими специалистами.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild>
                    <Link href="/contacts#request-form">Получить расчёт</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs">Официальные сведения</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">
              Готовы обсудить ваш проект?
            </h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Расскажите о задаче — подберём оптимальное решение и зафиксируем стоимость в коммерческом предложении.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacts#request-form">Оставить заявку</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/vats">Виртуальная АТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
