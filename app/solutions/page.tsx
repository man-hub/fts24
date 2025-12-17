import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Database, Network, ShoppingCart, Users, BarChart, Workflow, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Решения и продукты — ООО «ФТС»",
  description:
    "BSS/OSS-платформы, биллинг, CRM, порталы продаж, партнёрские системы и аналитика для телеком-операторов",
}

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Решения и продукты</h1>
            <p className="text-xl lg:text-2xl text-secondary-foreground/80">
              Комплексные BSS/OSS-платформы и специализированные решения для телеком-операторов
            </p>
          </div>
        </div>
      </section>

      {/* BSS Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <Database className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Биллинг и бизнес-процессы (BSS)</h2>
              <p className="text-xl text-muted-foreground">
                Управление бизнес-процессами оператора связи от заявки до оплаты
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Биллинговые платформы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Полнофункциональные АСР для учёта услуг, тарификации и выставления счетов
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Онлайн-тарификация для всех видов услуг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Поддержка предоплатных и постоплатных моделей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Детализация, счета, акты сверки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с платёжными системами</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Управление продуктами и тарифами</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Гибкий каталог продуктов и тарифный конструктор</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Конструктор тарифов без программирования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Бандлы, опции, дополнительные услуги</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Персональные предложения и скидки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Жизненный цикл продукта</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Управление продажами</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Автоматизация процесса продаж от лида до активации</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Воронка продаж и управление заказами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Workflow для согласований</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Контроль SLA и дедлайнов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с CRM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CRM и личные кабинеты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Взаимодействие с клиентами и самообслуживание</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>360° профиль клиента</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Личный кабинет абонента</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>История обращений и заявок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Управление услугами онлайн</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OSS Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <Network className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Поддержка операций (OSS)</h2>
              <p className="text-xl text-muted-foreground">
                Управление сетевой инфраструктурой и технологическими процессами
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Провижининг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Автоматическая настройка оборудования и активация услуг на сетевых элементах
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Номерной ресурс</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Управление номерной ёмкостью, резервирование и выделение номеров
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mediation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Сбор, нормализация и обработка CDR и событий от сетевого оборудования
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Инвентаризация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Учёт ресурсов, оборудования и активов оператора связи</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Мониторинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Контроль работоспособности сети и оборудования в реальном времени
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trouble Ticketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Управление инцидентами, заявками и технической поддержкой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sales & Marketing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <ShoppingCart className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Продажи и маркетинг</h2>
              <p className="text-xl text-muted-foreground">
                Онлайн-продажи, подписки и персонализированные предложения
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Клиентские порталы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Онлайн-витрины и каталоги для продажи телеком-продуктов</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Витрина тарифов и услуг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Онлайн-заказ и подключение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с биллингом</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Подписочные модели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Рекуррентные платежи и управление подписками</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Автоплатежи и продление</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Trial-периоды и пакеты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Управление жизненным циклом</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Персональные офферы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Таргетированные предложения на основе анализа данных</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Сегментация клиентской базы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Next Best Offer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Маркетинговые кампании</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Программы лояльности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Бонусные программы и механики удержания клиентов</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Начисление и списание бонусов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Уровни лояльности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Реферальные программы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Management */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Работа с партнёрами</h2>
              <p className="text-xl text-muted-foreground">Управление дилерской сетью и партнёрской экосистемой</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>PRM-системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Partner Relationship Management для управления партнёрской сетью
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Личный кабинет дилера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Портал для партнёров с доступом к отчётам и инструментам продаж
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Взаиморасчёты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Автоматизированные расчёты комиссий и бонусов партнёров</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Мотивация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Программы стимулирования и KPI для партнёрской сети</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Сверки и акты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Автоматическое формирование актов и документов для партнёров
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Управление ритейлом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Контроль торговых точек, мерчандайзинг, POS-материалы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI & Analytics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <BarChart className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI и аналитика</h2>
              <p className="text-xl text-muted-foreground">Искусственный интеллект и аналитические платформы</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Речевая аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">AI-решения для контроля качества и анализа звонков</p>
                <Button variant="outline" asChild className="mt-2 bg-transparent">
                  <Link href="/ai">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data-платформы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">DMP и единое хранилище клиентских данных для аналитики</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Отчёты и дашборды</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Визуализация данных, KPI и метрики бизнеса в реальном времени
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BI и прогнозирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Business Intelligence, машинное обучение и предиктивная аналитика
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <Workflow className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Дополнительные решения</h2>
              <p className="text-xl text-muted-foreground">
                Специализированные системы для автоматизации бизнес-процессов
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Workflow/BPM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Автоматизация и оркестрация бизнес-процессов</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">WFM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Управление персоналом, сменами и рабочим временем</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">База знаний и FAQ для службы поддержки</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Document Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Электронный документооборот и архив</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Подберём оптимальное решение</h2>
              <p className="text-xl text-muted-foreground">Расскажите о задаче — предложим подходящую платформу</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
