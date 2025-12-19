import { ArrowRight, BarChart3, TrendingUp, Clock, Users, Phone, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: "rgba(212, 175, 55, 0.1)", color: "rgb(212, 175, 55)" }}
            >
              Аналитика ВАТС
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Детальная аналитика звонков</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Отчеты по звонкам, продуктивности операторов и качеству обслуживания клиентов с визуализацией и экспортом
              данных
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Подключить ВАТС
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vats">О виртуальной АТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Типы отчетов</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Полная картина работы телефонии в реальном времени
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Phone className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Статистика звонков</h3>
                <p className="text-sm text-muted-foreground">
                  Количество входящих, исходящих, пропущенных звонков. Средняя длительность, время ожидания.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Users className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Эффективность операторов</h3>
                <p className="text-sm text-muted-foreground">
                  Производительность каждого сотрудника: количество обработанных звонков, конверсия, средний чек.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Clock className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Анализ времени</h3>
                <p className="text-sm text-muted-foreground">
                  Распределение звонков по времени суток, дням недели. Пиковые нагрузки и простои.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Target className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Качество обслуживания</h3>
                <p className="text-sm text-muted-foreground">
                  SLA-метрики: процент отвеченных звонков, время первого ответа, уровень обслуживания.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <TrendingUp className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Динамика и тренды</h3>
                <p className="text-sm text-muted-foreground">
                  Сравнение периодов, графики изменений, прогнозы загрузки на основе исторических данных.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <BarChart3 className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Кастомные дашборды</h3>
                <p className="text-sm text-muted-foreground">
                  Создавайте собственные отчеты с нужными метриками и фильтрами под задачи бизнеса.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Преимущества аналитики</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: "rgb(190, 18, 18)" }} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Принятие решений на основе данных</h3>
                  <p className="text-muted-foreground">
                    Объективная информация о работе call-центра для оптимизации процессов и повышения эффективности.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: "rgb(190, 18, 18)" }} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Контроль качества</h3>
                  <p className="text-muted-foreground">
                    Отслеживание KPI операторов, выявление проблемных зон и точек роста для обучения персонала.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: "rgb(190, 18, 18)" }} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Планирование ресурсов</h3>
                  <p className="text-muted-foreground">
                    Прогнозирование нагрузки, оптимальное планирование графиков работы и количества операторов.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: "rgb(190, 18, 18)" }} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Экспорт и интеграция</h3>
                  <p className="text-muted-foreground">
                    Выгрузка отчетов в Excel, PDF. API для интеграции с BI-системами и корпоративными дашбордами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Готовы получить полный контроль над телефонией?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Свяжитесь с нами для демонстрации системы аналитики</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vats">Все возможности ВАТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
