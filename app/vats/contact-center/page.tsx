import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Headphones, Users, TrendingUp, BarChart3, Clock, PhoneCall, ChevronRight, Zap } from "lucide-react"

export default function ContactCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{
                backgroundColor: "rgba(220, 38, 38, 0.1)",
                borderColor: "rgb(220, 38, 38)",
                color: "rgb(220, 38, 38)",
              }}
            >
              <Headphones className="w-4 h-4" />
              <span>Профессиональное решение для call-центров</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Виртуальная АТС для контакт-центра</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
              Полнофункциональное решение для организации работы контакт-центра любого масштаба
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild style={{ backgroundColor: "rgb(220, 38, 38)", color: "white" }}>
                <Link href="/contacts">
                  Запросить демо
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/vats">Все функции ВАТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ключевые возможности */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые возможности для контакт-центров</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Все инструменты для эффективной работы службы поддержки в одной системе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Управление очередями",
                description:
                  "Распределение входящих звонков между операторами с учетом навыков, загрузки и приоритетов",
              },
              {
                icon: BarChart3,
                title: "Мониторинг в реальном времени",
                description: "Отслеживание активности операторов, длины очередей и времени ожидания на дашборде",
              },
              {
                icon: TrendingUp,
                title: "Детальная статистика",
                description: "Отчеты по KPI: SLA, FCR, AHT, ASA и другие метрики эффективности",
              },
              {
                icon: PhoneCall,
                title: "Режимы обзвона",
                description: "Predictive, preview и progressive dialing для исходящих кампаний",
              },
              {
                icon: Headphones,
                title: "Супервизорские функции",
                description: "Прослушивание, подсказка, перехват звонков для контроля качества",
              },
              {
                icon: Clock,
                title: "Гибкое расписание",
                description: "Настройка графиков работы, смен, перерывов и автоматическая маршрутизация",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: "rgb(220, 38, 38)" }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Функции для операторов */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Удобный интерфейс оператора</h2>
              <p className="text-muted-foreground mb-6">
                Все необходимые инструменты для эффективной работы в одном окне
              </p>
              <ul className="space-y-4">
                {[
                  "Информация о клиенте из CRM при входящем звонке",
                  "Быстрый доступ к скриптам и базе знаний",
                  "История взаимодействий с клиентом",
                  "Перевод звонка на коллег и конференции",
                  "Статусы готовности (доступен, перерыв, обучение)",
                  "Статистика личной эффективности",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {[
                { label: "Среднее время ответа", value: "< 20 сек" },
                { label: "Уровень обслуживания (SLA)", value: "95%" },
                { label: "Решение с первого звонка (FCR)", value: "82%" },
              ].map((metric, idx) => (
                <Card key={idx} className="border-border" style={{ backgroundColor: "rgba(220, 38, 38, 0.05)" }}>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                    <div className="text-3xl font-bold" style={{ color: "rgb(220, 38, 38)" }}>
                      {metric.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Функции для руководителей */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Инструменты супервизора</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный контроль над работой контакт-центра
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Мониторинг в реальном времени",
                features: [
                  "Wallboard с текущим состоянием операторов",
                  "Длина очередей и время ожидания",
                  "Активные звонки и их продолжительность",
                  "Алерты при превышении пороговых значений",
                ],
              },
              {
                title: "Контроль качества",
                features: [
                  "Прослушивание звонков оператора",
                  "Подсказка оператору (клиент не слышит)",
                  "Подключение к разговору (конференция)",
                  "Перехват звонка при необходимости",
                ],
              },
              {
                title: "Аналитика и отчеты",
                features: [
                  "Детализация по операторам, очередям, кампаниям",
                  "Графики и тренды эффективности",
                  "Экспорт данных для анализа",
                  "Автоматическая отправка отчетов по расписанию",
                ],
              },
              {
                title: "Управление персоналом",
                features: [
                  "Прогнозирование нагрузки",
                  "Планирование смен",
                  "Оценка загрузки операторов",
                  "Отслеживание соблюдения графика",
                ],
              },
            ].map((block, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: "rgb(220, 38, 38)" }}>
                    {block.title}
                  </h3>
                  <ul className="space-y-2">
                    {block.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-sm">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "rgb(220, 38, 38)" }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Интеграции */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Интеграция с бизнес-системами</h2>
            <p className="text-lg text-muted-foreground">Единая экосистема для максимальной эффективности</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "CRM-системы",
                description: "Bitrix24, amoCRM, retailCRM, Мегаплан и другие",
              },
              {
                title: "Helpdesk",
                description: "Zendesk, Freshdesk, JIRA Service Desk",
              },
              {
                title: "Мессенджеры",
                description: "WhatsApp, Telegram, MAX и другие",
              },
              {
                title: "Аналитика",
                description: "Google Analytics, Яндекс.Метрика, Power BI",
              },
              {
                title: "WFM-системы",
                description: "Планирование и учет рабочего времени",
              },
              {
                title: "Голосовые роботы",
                description: "AI для автоматизации типовых обращений",
              },
            ].map((integration, idx) => (
              <Card key={idx} className="border-border text-center">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
                  >
                    <Zap className="w-6 h-6" style={{ color: "rgb(220, 38, 38)" }} />
                  </div>
                  <h3 className="font-semibold mb-2">{integration.title}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Запустите профессиональный контакт-центр за 1 день</h2>
            <p className="text-xl text-gray-300 mb-8">
              Без покупки оборудования, с оплатой только за активных операторов
            </p>
            <Button size="lg" asChild style={{ backgroundColor: "rgb(220, 38, 38)", color: "white" }}>
              <Link href="/contacts">
                Получить коммерческое предложение
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
