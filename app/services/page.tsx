import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Server, Network, Brain, Phone, Headphones, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Услуги — ООО «ФТС»",
  description:
    "Разработка ПО под ключ, системная интеграция, виртуальная АТС, AI-решения и профессиональные услуги для телеком-операторов",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl lg:text-2xl text-secondary-foreground/80">
              Полный спектр IT-услуг для телеком-операторов и бизнеса — от консалтинга до эксплуатации
            </p>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <Server className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Разработка ПО под ключ</h2>
              <p className="text-xl text-muted-foreground">
                Enterprise-системы для телеком-операторов и компаний с партнёрскими сетями
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Биллинговые системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Полнофункциональные АСР для операторов связи с поддержкой всех видов услуг: мобильная связь, ШПД,
                  контент-сервисы, MVNO
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Тарификация и биллинг в режиме реального времени</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Управление продуктами и тарифами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграции с операторами и платёжными системами</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Партнёрские системы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Системы взаиморасчётов с партнёрами, дилерами и агентами для построения партнёрской экосистемы
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>PRM-системы и управление партнёрской сетью</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Автоматизированные взаиморасчёты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Мотивация, бонусы и программы лояльности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CRM и порталы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  CRM-системы, клиентские порталы и личные кабинеты для абонентов и дилеров
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Управление взаимоотношениями с клиентами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Личные кабинеты с самообслуживанием</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с биллингом и службой поддержки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Онлайн-магазины</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  E-commerce платформы для продажи телеком-продуктов, контента и подписочных сервисов
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интернет-витрины и каталоги продуктов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Подписочные модели и рекуррентные платежи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с платёжными шлюзами</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MVNO/MVNE платформы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Комплексные решения для построения виртуальных операторов связи
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Полный BSS/OSS-комплекс для MVNO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с базовыми операторами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>FMC-решения (фиксированная + мобильная связь)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакт-центры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Решения для автоматизации колл-центров и контакт-центров</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Управление очередями и маршрутизация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Интеграция с CRM и телефонией</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Аналитика и контроль качества</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VATS Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6"
                style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
              >
                <Phone className="h-8 w-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Виртуальная АТС и IN-платформа</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Облачная телефония с гибкими сценариями маршрутизации, интеграцией с операторами связи и CRM-системами
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Включено в Единый реестр российского ПО</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Интеграция с Битрикс24 и десятками других CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Коллтрекинг, запись разговоров, виджет обратного звонка</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link href="/vats">
                  Подробнее о ВАТС <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Основные возможности</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium mb-1">Гибкая маршрутизация</div>
                    <p className="text-muted-foreground">Настройка любых сценариев обработки звонков</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Номера 8-800 и региональные</div>
                    <p className="text-muted-foreground">Подключение многоканальных номеров</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">IN-платформа</div>
                    <p className="text-muted-foreground">Онлайн-тарификация и отказоустойчивость</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Статистика и отчёты</div>
                    <p className="text-muted-foreground">Детальная аналитика звонков и операторов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Solutions Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="order-2 lg:order-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">AI-возможности</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium mb-1">Расшифровка звонков</div>
                    <p className="text-muted-foreground">Speech-to-text с высокой точностью распознавания</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Оценка качества</div>
                    <p className="text-muted-foreground">Анализ тона, соблюдения скриптов и KPI</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Краткий пересказ</div>
                    <p className="text-muted-foreground">Автоматическое резюме диалога и выделение задач</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Аналитика для МСП</div>
                    <p className="text-muted-foreground">Устройства записи и порталы аналитики для торговых точек</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="order-1 lg:order-2">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6"
                style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
              >
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI-решения и речевая аналитика</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Искусственный интеллект для контроля качества обслуживания и автоматизации контакт-центров
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Интеграция с ВАТС и контакт-центрами</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Решения для малого и среднего бизнеса</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ background: "rgba(190, 18, 18, 0.1)", color: "rgb(190, 18, 18)" }}
                  >
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Перспектива развития: ИИ-агенты для обработки звонков</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link href="/ai">
                  Подробнее об AI <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration */}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Системная интеграция</h2>
              <p className="text-xl text-muted-foreground">
                Подключение внешних систем и построение единого информационного пространства
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Бизнес-системы</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>CRM-системы (Битрикс24, amoCRM и др.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Социальные сети и мессенджеры (VK, Telegram, MAX и др.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Системы биллинга для операторов связи</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Маркетинговые платформы и системы аналитики</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Внешние сервисы</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Госуслуги, СМЭВ, государственные реестры</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Платёжные системы и шлюзы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Системы ЭДО и электронной подписи</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Мессенджеры и коммуникационные платформы</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Button asChild>
              <Link href="/integration">
                Подробнее об интеграциях <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0"
              style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
            >
              <Headphones className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Профессиональные услуги</h2>
              <p className="text-xl text-muted-foreground">
                Полный цикл работ — от консалтинга до эксплуатации решений
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Консалтинг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Аудит текущих систем, проектирование архитектуры, выбор оптимальных решений и технологий
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Внедрение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Установка, настройка и кастомизация систем под требования заказчика, миграция данных
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Обучение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Подготовка персонала, проведение тренингов, создание инструкций и документации
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary" />
                  Поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Техническая поддержка 24/7, устранение инцидентов, консультации пользователей
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-primary" />
                  Managed Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Полная эксплуатация решений под ключ: мониторинг, обновления, резервное копирование
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Сопровождение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доработки, развитие функционала, адаптация к изменяющимся бизнес-процессам
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Обсудим ваш проект</h2>
              <p className="text-xl text-muted-foreground">Расскажите о задаче — предложим оптимальное решение</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
