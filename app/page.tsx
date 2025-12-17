import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Server, Phone, Brain, Network, Users, Shield, Award, Clock, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium">
              Enterprise-решения для вашего бизнеса
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Биллинг, ВАТС и AI-решения для операторов связи и бизнеса
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-foreground/80 mb-8 text-balance">
              Разработка под ключ, глубокие интеграции и AI-аналитика для любых компаний
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts#request-form">
                  Обсудить проект <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hero-outline-button bg-secondary-foreground/10 hover:bg-secondary-foreground/20 border-secondary-foreground/20"
              >
                <Link href="/cases">Смотреть кейсы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные IT-решения для телекоммуникационных компаний и бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="service-icon-container flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Кастомная разработка</h3>
                <p className="text-muted-foreground mb-4">
                  Биллинговые системы, CRM, личные кабинеты, BSS/OSS-комплексы для телеком-операторов
                </p>
                <Link
                  href="/services"
                  className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="service-icon-container flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Виртуальная АТС</h3>
                <p className="text-muted-foreground mb-4">
                  Виртуальная АТС и IN-платформа с гибкими сценариями маршрутизации и интеграциями
                </p>
                <Link
                  href="/vats"
                  className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="service-icon-container flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-решения</h3>
                <p className="text-muted-foreground mb-4">
                  Речевая аналитика на базе AI: распознавание речи, транскрибация, оценка качества и рекомендации по
                  улучшению качества обслуживания и росту продаж
                </p>
                <Link
                  href="/ai"
                  className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="service-icon-container flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Network className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Системная интеграция</h3>
                <p className="text-muted-foreground mb-4">
                  Интеграции с CRM, ERP, операторами связи, платежными системами и государственными информационными
                  системами (Госуслуги, СМЭВ, Госключ и др.)
                </p>
                <Link
                  href="/integration"
                  className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="service-icon-container flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">MVNO/MVNE платформы</h3>
                <p className="text-muted-foreground mb-4">
                  Построение виртуальных операторов и управление партнёрской экосистемой
                </p>
                <Link
                  href="/solutions"
                  className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="service-icon-container flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Инфраструктура и поддержка</h3>
                <p className="text-muted-foreground mb-4">
                  Консалтинг, внедрение, техническая поддержка и эксплуатация решений под ключ
                </p>
                <Link
                  href="/services"
                  className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Для кого наши решения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы работаем с компаниями, которым нужны надёжные enterprise-системы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="circular-icon-primary flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Операторы связи</h3>
              <p className="text-muted-foreground">
                Телеком-операторы, MVNO, MVNE, провайдеры фиксированной связи и ШПД
              </p>
            </div>

            <div className="text-center">
              <div className="circular-icon-primary flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Крупный и средний бизнес</h3>
              <p className="text-muted-foreground">Компании с развитой партнёрской сетью, дилерами и агентами</p>
            </div>

            <div className="text-center">
              <div className="circular-icon-primary flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Малый и микро бизнес</h3>
              <p className="text-muted-foreground">Компании с активными продажами и потребностью в речевой аналитике</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ключевые преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему компании выбирают ФТС для своих IT-проектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="advantage-icon-container flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Работаем с 2005 года</h3>
              <p className="text-muted-foreground text-sm">Более 20 лет опыта в разработке решений для телекома</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="advantage-icon-container flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Server className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Свой BSS/OSS и ВАТС</h3>
              <p className="text-muted-foreground text-sm">Собственные продукты с глубокой экспертизой</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="advantage-icon-container flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Входим в Реестр российского ПО</h3>
              <p className="text-muted-foreground text-sm">Сертифицированные решения для АСР, ВАТС и ЦОВ</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="advantage-icon-container flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Полная интеграция</h3>
              <p className="text-muted-foreground text-sm">
                Опыт работы с Мегафон, Билайн, Ростелеком и другими федеральными операторами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Preview */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Наши кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты для телеком-операторов и бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">КантриКом / Алло Инкогнито</div>
                <h3 className="text-xl font-semibold mb-3">BSS/OSS-комплекс и FMC/MVNO</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Разработка полного BSS/OSS-комплекса, биллинга, IN-платформы и системы работы с дилерами
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">Биллинг</span>
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">MVNO</span>
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">IN-платформа</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Сансим / Яндекс.Телефония</div>
                <h3 className="text-xl font-semibold mb-3">Интеграция с Яндекс и Ростелеком</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Разработка продуктов, личных кабинетов и совместные интеграции с крупными операторами
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">Интеграция</span>
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">Личный кабинет</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">Enterprise ВАТС</div>
                <h3 className="text-xl font-semibold mb-3">Виртуальная АТС для бизнеса</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Облачная телефония с коллтрекингом, записью разговоров и интеграцией с CRM
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">ВАТС</span>
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">CRM</span>
                  <span className="case-tag text-xs px-2 py-1 bg-primary/10 text-primary rounded">Аналитика</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/cases">
                Смотреть все кейсы <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Расскажите о вашей задаче</h2>
              <p className="text-xl text-muted-foreground">
                Предложим архитектуру решения и рассчитаем стоимость реализации
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
