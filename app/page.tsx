"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Code,
  Database,
  Smartphone,
  Headphones,
  Settings,
  ArrowRight,
  Star,
} from "lucide-react"

import { MVNOSection } from "@/components/mvno-section"
import { PBXSection } from "@/components/pbx-section"
import { BillingSection } from "@/components/billing-section"
import { IntegrationSection } from "@/components/integration-section"

export default function FTSLanding() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#ef4444] hover:bg-[#ef4444]/90 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
              🔶 Оставить заявку
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Оставить заявку</DialogTitle>
              <DialogDescription>Расскажите о вашем проекте, и мы свяжемся с вами в течение дня</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input id="name" placeholder="Ваше имя" required />
              </div>
              <div>
                <Label htmlFor="company">Компания *</Label>
                <Input id="company" placeholder="Название компании" required />
              </div>
              <div>
                <Label htmlFor="contact">Телефон или Email *</Label>
                <Input id="contact" placeholder="+7 (xxx) xxx-xx-xx или email@company.ru" required />
              </div>
              <div>
                <Label htmlFor="message">Описание задачи</Label>
                <Textarea id="message" placeholder="Кратко опишите ваш проект или задачу" />
              </div>
              <Button type="submit" className="w-full bg-[#dc2626] hover:bg-[#dc2626]/90">
                Отправить заявку
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
              <img src="/favicon.ico" alt="FTS" className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900">ООО "ФТС"</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#dc2626] transition-colors">
              Услуги
            </a>
            <a href="#cases" className="text-gray-600 hover:text-[#dc2626] transition-colors">
              Кейсы
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#dc2626] transition-colors">
              О нас
            </a>
            <a href="#contacts" className="text-gray-600 hover:text-[#dc2626] transition-colors">
              Контакты
            </a>
          </nav>
          <Button
            onClick={() => setIsContactOpen(true)}
            className="bg-[#ef4444] hover:bg-[#ef4444]/90 text-black font-semibold"
          >
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dc2626] to-[#b91c1c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Кастомные IT и телеком-решения под ваш бизнес
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Когда типовые решения не подходят — клиенты обращаются к нам. Мы проектируем и внедряем системы, которые
              работают так, как нужно именно вам. Под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsContactOpen(true)}
                size="lg"
                className="bg-[#ef4444] hover:bg-[#ef4444]/90 text-black font-semibold px-8 py-4 text-lg"
              >
                🔶 Обсудить проект
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#dc2626] px-8 py-4 text-lg bg-transparent"
              >
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему с нами работают?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы не просто разрабатываем — мы решаем бизнес-задачи с помощью технологий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Code className="w-12 h-12 text-[#dc2626] mb-4" />
                <CardTitle className="text-xl">Кастомная разработка под задачу</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Не адаптируем готовые решения, а создаем систему точно под ваши процессы и требования
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Star className="w-12 h-12 text-[#ef4444] mb-4" />
                <CardTitle className="text-xl">Экспертиза с 2005 года</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  20 лет опыта в телекоме и IT. Знаем все подводные камни и лучшие практики отрасли
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Database className="w-12 h-12 text-[#dc2626] mb-4" />
                <CardTitle className="text-xl">Глубокие интеграции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сотовые операторы, CRM, Яндекс, Ростелеком — интегрируем с любыми системами
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Settings className="w-12 h-12 text-[#dc2626] mb-4" />
                <CardTitle className="text-xl">Архитектурная экспертиза</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Биллинг, IN, ВАТС, IP-телефония — проектируем сложные телеком-системы</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-[#ef4444] mb-4" />
                <CardTitle className="text-xl">Инженерная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Разработка, DevOps, QA, R&D — полный цикл создания IT-продуктов</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#dc2626] mb-4" />
                <CardTitle className="text-xl">Надежность и качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Строгие процессы разработки, тестирования и сопровождения готовых решений
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Что мы создаем</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для телеком-операторов и IT-компаний
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">MVNO/FMC-проекты</h3>
                  <p className="text-gray-600">
                    Полный цикл запуска виртуальных операторов связи и конвергентных сервисов
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Биллинг и CRM</h3>
                  <p className="text-gray-600">
                    Системы тарификации, биллинга и управления клиентами для телеком-операторов
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ВАТС и Softphone</h3>
                  <p className="text-gray-600">
                    Корпоративная телефония с интеллектуальной маршрутизацией и расширенными возможностями
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Интеграции</h3>
                  <p className="text-gray-600">Bitrix24, amoCRM, Яндекс и другие популярные бизнес-системы</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-решения</h3>
                  <p className="text-gray-600">
                    Речевая аналитика, предиктивные модели, автоматизация процессов и контроль качества
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-инструменты для бизнеса</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Внедряем искусственный интеллект для автоматизации процессов и повышения эффективности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Речевая аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Анализ разговоров сотрудников с клиентами, контроль качества обслуживания и соблюдения скриптов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Умная маршрутизация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI-алгоритмы для оптимального распределения звонков между операторами на основе их компетенций
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Предиктивная аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Прогнозирование поведения клиентов и автоматические рекомендации для повышения конверсии
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Автоматизация процессов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  RPA-решения с элементами машинного обучения для автоматизации рутинных бизнес-процессов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Автоматическая оценка качества обслуживания клиентов и выявление точек роста для сотрудников
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Чат-боты и голосовые помощники</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Интеллектуальные боты для первичной обработки обращений и поддержки клиентов 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setIsContactOpen(true)}
              size="lg"
              className="bg-[#dc2626] hover:bg-[#dc2626]/90 text-white font-semibold px-8 py-4 text-lg"
            >
              Обсудить AI-решение
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* MVNO/FMC Section */}
      <MVNOSection />

      {/* Virtual PBX Section */}
      <PBXSection />

      {/* Billing & CRM Section */}
      <BillingSection />

      {/* System Integration Section */}
      <IntegrationSection />

      {/* Case Studies */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши кейсы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальные проекты, которые работают и приносят результат
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">Биллинг для КантриКом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Комплексная система тарификации и биллинга</p>
                <p className="text-gray-600 text-sm">Автоматизация процессов выставления счетов</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">Приложение "АллоФон"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Мобильное приложение для IP-телефонии</p>
                <p className="text-gray-600 text-sm">Интеграция с корпоративной ВАТС</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">Личный кабинет СанСим</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Веб-портал для управления услугами</p>
                <p className="text-gray-600 text-sm">Интеграция с биллинговой системой</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">ВАТС с гибкой маршрутизацией</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Интеллектуальная телефонная станция</p>
                <p className="text-gray-600 text-sm">AI-алгоритмы распределения вызовов</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-[#ef4444]/10 to-[#ef4444]/5 border-[#ef4444]/20">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-[#ef4444] rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-xs font-semibold text-[#ef4444] uppercase tracking-wide">AI</span>
                </div>
                <CardTitle className="text-lg">Речевая аналитика для ритейла</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">AI-система контроля качества обслуживания</p>
                <p className="text-gray-600 text-sm">Анализ разговоров сотрудников в точках продаж</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему нам доверяют клиенты</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Без шаблонов</h3>
              <p className="text-gray-600">Проектируем решения с нуля под ваши задачи</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef4444] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Техруководитель на проекте</h3>
              <p className="text-gray-600">Персональный контроль качества и сроков</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сопровождение и SLA</h3>
              <p className="text-gray-600">Гарантированное время реакции и поддержка</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef4444] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Работаем с крупными</h3>
              <p className="text-gray-600">Интеграторы и корпорации доверяют нам</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Нам нужно что-то особенное — вы точно справитесь?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Да, мы специализируемся именно на нестандартных задачах. За 20 лет работы мы реализовали сотни
                  уникальных проектов — от MVNO-платформ до сложных интеграций с операторами связи. Если есть
                  техническое решение, мы его найдем и реализуем.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Сложная интеграция — долго, дорого?</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Не обязательно. Благодаря опыту и готовым модулям интеграции мы часто реализуем сложные проекты
                  быстрее конкурентов. Всегда даем честную оценку сроков и бюджета на старте, без скрытых доплат в
                  процессе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">У нас нестандартная CRM / процесс...</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Это наша специализация! Мы не подгоняем ваши процессы под готовые решения, а создаем систему под ваш
                  workflow. Работали с самыми экзотическими CRM и бизнес-процессами — адаптируемся под любые требования.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Оставьте заявку, и наш технический директор лично проконсультирует вас по вашей задаче. Бесплатно и без
            обязательств.
          </p>
          <Button
            onClick={() => setIsContactOpen(true)}
            size="lg"
            className="bg-[#ef4444] hover:bg-[#ef4444]/90 text-black font-semibold px-8 py-4 text-lg"
          >
            🔶 Оставьте заявку
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-blue-200 mt-4">Ответим в течение дня • Техническая консультация бесплатно</p>
        </div>
      </section>

      {/* Company Info / Contacts */}
      <footer id="contacts" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-[#dc2626] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ФТС</span>
                </div>
                <span className="text-xl font-bold">ООО "ФТС"</span>
              </div>
              <p className="text-gray-300 mb-4">
                Кастомные IT и телеком-решения с 2005 года. Специализируемся на сложных интеграциях и нестандартных
                задачах.
              </p>
              <p className="text-gray-400 text-sm">Наши клиенты: КантриКом, СанСим, Яндекс и другие лидеры рынка</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#ef4444]" />
                  <span>+7 (495) 308-04-55</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#ef4444]" />
                  <span>team@fts24.ru</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#ef4444] mt-1" />
                  <span>
                    Москва, 5-й проезд Марьиной рощи, д. 15А<br />
                    
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MVNO/FMC проекты</li>
                <li>Биллинг и CRM системы</li>
                <li>ВАТС и IP-телефония</li>
                <li>Интеграции с внешними API</li>
                <li>Техническое сопровождение</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ООО "ФТС". Все права защищены. | fts24.ru</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
