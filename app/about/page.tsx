import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, TrendingUp, Target, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "О компании — ООО «ФТС»",
  description:
    "ООО «ФТС» — надежный партнер с 2005 года. Разработка enterprise-решений для телеком-операторов, сертифицированное ПО, экспертиза в биллинговых системах",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Фокус на результат",
      description: "Мы не просто пишем код — мы решаем бизнес-задачи наших клиентов",
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "20 лет опыта работы с крупнейшими телеком-операторами России",
    },
    {
      icon: Users,
      title: "Экспертиза",
      description: "Команда высококвалифицированных специалистов в telecom-индустрии",
    },
    {
      icon: TrendingUp,
      title: "Инновации",
      description: "Внедряем передовые технологии: AI, ML, современные архитектуры",
    },
  ]

  const achievements = [
    { value: "20+", label: "лет на рынке" },
    { value: "50+", label: "реализованных проектов" },
    { value: "15+", label: "телеком-операторов" },
    { value: "5M+", label: "абонентов в системах" },
  ]

  const certifications = [
    "Сертифицированное российское ПО",
    "Соответствие ГОСТ Р ИСО/МЭК 12207",
    "Аттестация ФСТЭК России",
    "Член ассоциации РУССОФТ",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              С 2005 года
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              О компании ООО «ФТС»
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Мы создаем программные решения enterprise-уровня для телекоммуникационной отрасли. Наша миссия — помогать
              операторам связи развивать бизнес с помощью современных IT-технологий.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-b border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">{item.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Наша история</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                ООО «ФТС» (Future Technology Solutions) было основано в 2005 году группой специалистов с глубокой
                экспертизой в области телекоммуникаций и разработки программного обеспечения.
              </p>
              <p>
                За 20 лет работы мы реализовали более 50 крупных проектов для ведущих телеком-операторов России. Наши
                решения обслуживают миллионы абонентов и обрабатывают миллиарды транзакций ежегодно.
              </p>
              <p>
                Мы специализируемся на разработке BSS/OSS-систем, виртуальных АТС, AI-решений для анализа речи и
                системной интеграции. Наш опыт охватывает все аспекты телеком-индустрии: от биллинга до аналитики
                контакт-центров.
              </p>
              <p>
                Сегодня ФТС — это команда высококвалифицированных разработчиков, архитекторов, аналитиков и
                project-менеджеров, которые создают решения мирового уровня для российского рынка.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Наши ценности</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Сертификаты и партнерства</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{cert}</span>
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
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">Готовы начать сотрудничество?</h2>
            <p className="mb-8 text-lg opacity-90 text-pretty">
              Свяжитесь с нами, чтобы обсудить ваш проект. Мы предложим оптимальное решение для вашего бизнеса.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/cases">Посмотреть кейсы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
