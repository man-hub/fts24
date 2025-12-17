import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Network, Database, Zap, Shield, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Системная интеграция | ООО «ФТС»",
  description:
    "Интеграция телекоммуникационных и бизнес-систем. Подключение CRM, социальных сетей, государственных сервисов, платёжных систем и мессенджеров.",
}

export default function IntegrationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">Системная интеграция</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Подключение внешних систем и построение единого информационного пространства для вашего бизнеса
            </p>
            <Button size="lg" asChild>
              <Link href="/contacts#request-form">
                Обсудить проект <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Преимущества интеграции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Автоматизация процессов",
                description:
                  "Устранение ручного ввода данных и автоматическая синхронизация информации между системами",
              },
              {
                icon: Database,
                title: "Единое информационное пространство",
                description: "Централизованный доступ к данным из всех подключённых систем в режиме реального времени",
              },
              {
                icon: Clock,
                title: "Экономия времени",
                description: "Сокращение времени на рутинные операции и повышение скорости обработки запросов",
              },
              {
                icon: Shield,
                title: "Надёжность и безопасность",
                description: "Защищённый обмен данными с контролем доступа и аудитом всех операций",
              },
              {
                icon: Users,
                title: "Улучшение клиентского сервиса",
                description: "Полная история взаимодействий с клиентом в одном окне для быстрого решения вопросов",
              },
              {
                icon: Network,
                title: "Масштабируемость",
                description: "Простое добавление новых систем и сервисов по мере роста вашего бизнеса",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <benefit.icon className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Типы интеграций</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Systems */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Бизнес-системы</h3>
                <p className="text-muted-foreground mb-6">
                  Подключение корпоративных систем для автоматизации бизнес-процессов и повышения эффективности работы
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "CRM-системы",
                    description:
                      "Интеграция с Битрикс24, amoCRM, Salesforce и другими CRM для автоматизации продаж и клиентского сервиса",
                    features: [
                      "Синхронизация контактов",
                      "Автоматическое создание задач",
                      "История звонков и переписки",
                    ],
                  },
                  {
                    title: "Социальные сети и мессенджеры",
                    description: "Подключение VK, Telegram, WhatsApp, MAX для омниканального общения с клиентами",
                    features: ["Единое окно обращений", "Автоответы и боты", "Маршрутизация сообщений"],
                  },
                  {
                    title: "Системы биллинга",
                    description: "Интеграция биллинговых платформ операторов связи для автоматизации расчётов",
                    features: ["Автоматическое выставление счетов", "Контроль баланса", "История платежей"],
                  },
                  {
                    title: "Маркетинговые платформы",
                    description: "Подключение систем аналитики и маркетинга для оценки эффективности кампаний",
                    features: ["Трекинг звонков", "Аналитика конверсий", "ROI рекламных каналов"],
                  },
                ].map((system, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">{system.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{system.description}</p>
                    <ul className="space-y-2">
                      {system.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "rgb(190, 18, 18)" }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* External Services */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Внешние сервисы</h3>
                <p className="text-muted-foreground mb-6">
                  Интеграция с государственными и коммерческими сервисами для расширения функциональности
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Государственные сервисы",
                    description:
                      "Подключение к Госуслугам, СМЭВ, государственным реестрам для автоматизации документооборота",
                    features: ["Проверка контрагентов", "Получение выписок", "Электронные справки"],
                  },
                  {
                    title: "Платёжные системы",
                    description: "Интеграция платёжных шлюзов для приёма онлайн-платежей от клиентов",
                    features: ["Банковские карты", "Электронные кошельки", "Рекуррентные платежи"],
                  },
                  {
                    title: "Системы ЭДО",
                    description: "Подключение систем электронного документооборота и электронной подписи",
                    features: ["Подписание договоров", "Обмен документами", "Юридическая значимость"],
                  },
                  {
                    title: "Коммуникационные платформы",
                    description: "Интеграция мессенджеров и каналов связи для многоканального обслуживания",
                    features: ["Чат-боты", "Голосовые помощники", "Видеосвязь"],
                  },
                ].map((service, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "rgb(190, 18, 18)" }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Процесс интеграции</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Анализ требований",
                  description:
                    "Изучаем ваши бизнес-процессы, определяем системы для интеграции и формируем техническое задание",
                },
                {
                  step: "02",
                  title: "Проектирование решения",
                  description:
                    "Разрабатываем архитектуру интеграции, выбираем методы обмена данными и протоколы взаимодействия",
                },
                {
                  step: "03",
                  title: "Разработка и тестирование",
                  description: "Реализуем интеграционные модули, проводим тестирование на тестовых окружениях",
                },
                {
                  step: "04",
                  title: "Внедрение",
                  description: "Запускаем интеграцию в промышленную эксплуатацию, проводим обучение персонала",
                },
                {
                  step: "05",
                  title: "Поддержка",
                  description: "Обеспечиваем техническую поддержку, мониторинг работоспособности и развитие интеграций",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-2xl font-bold"
                    style={{ background: "rgb(190, 18, 18)", color: "rgb(255, 255, 255)" }}
                  >
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Технологии интеграции</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Используем современные протоколы и стандарты для надёжного обмена данными
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "REST API",
              "SOAP/XML",
              "WebSocket",
              "gRPC",
              "OAuth 2.0",
              "JWT",
              "Webhook",
              "FTP/SFTP",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg text-center font-medium hover:border-primary transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы интегрировать ваши системы?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами для обсуждения вашего проекта. Мы проанализируем ваши задачи и предложим оптимальное
              решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Обсудить проект <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cases">Примеры интеграций</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
