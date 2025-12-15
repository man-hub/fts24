import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Кейсы и проекты — ООО «ФТС»",
  description: "Реализованные проекты для телеком-операторов: биллинг, MVNO, ВАТС, интеграции и AI-решения",
}

export default function CasesPage() {
  const cases = [
    {
      client: "КантриКом / Алло Инкогнито",
      title: "Разработка АСР/биллинга",
      description: "Создание полнофункциональной автоматизированной системы расчётов для телеком-оператора",
      solution: "Биллинговая система с онлайн-тарификацией, учётом всех видов услуг (мобильная связь, ШПД, контент)",
      result: "Запущена в промышленную эксплуатацию, обслуживает десятки тысяч абонентов",
      tags: ["Биллинг", "Телеком", "АСР"],
    },
    {
      client: "КантриКом",
      title: "BSS/OSS-комплекс",
      description: "Построение полного BSS/OSS-комплекса для управления бизнес-процессами и сетевой инфраструктурой",
      solution: "Интегрированная платформа: биллинг, CRM, личные кабинеты, провижининг, мониторинг",
      result: "Автоматизация всех процессов оператора, сокращение времени подключения абонентов",
      tags: ["BSS", "OSS", "Платформа"],
    },
    {
      client: "КантриКом",
      title: "FMC/MVNO с Мегафон и Вымпелком",
      description: "Реализация проектов Fixed-Mobile Convergence и виртуального оператора",
      solution: "Интеграция с сетями Мегафон и Билайн, построение FMC-оператора",
      result: "Запуск услуг виртуального оператора, единая биллинговая платформа",
      tags: ["MVNO", "FMC", "Интеграция"],
    },
    {
      client: "КантриКом",
      title: "IN-платформа",
      description: "Создание интеллектуальной сетевой платформы для маршрутизации и тарификации",
      solution: "Собственная IN-платформа с онлайн-тарификацией, отказоустойчивостью и антифродом",
      result: "Высоконагруженная распределённая система, обрабатывающая миллионы транзакций",
      tags: ["IN", "Тарификация", "Highload", "Prepaid"],
    },
    {
      client: "КантриКом / Алло Инкогнито",
      title: "Колл-центр",
      description: "Автоматизация контакт-центра оператора связи",
      solution: "Система управления очередями, IVR, запись разговоров, интеграция с CRM",
      result: "Повышение качества обслуживания клиентов, контроль KPI операторов",
      tags: ["Call-центр", "CRM", "Автоматизация"],
    },
    {
      client: "КантриКом",
      title: "Система работы с дилерами",
      description: "PRM-решение для управления дилерской сетью и ритейлом",
      solution: "Портал дилера, автоматизация взаиморасчётов, контроль торговых точек",
      result: "Прозрачность работы с партнёрами, автоматизация расчёта комиссий",
      tags: ["PRM", "Дилеры", "Партнёры"],
    },
    {
      client: "Сансим",
      title: "Разработка продуктов и личных кабинетов",
      description: "Создание пользовательских интерфейсов и систем самообслуживания",
      solution: "Личный кабинет абонента, мобильное приложение, интеграция с биллингом",
      result: "Улучшение пользовательского опыта, снижение нагрузки на поддержку",
      tags: ["UI/UX", "Личный кабинет", "Mobile"],
    },
    {
      client: "Сансим / Яндекс.Телефония",
      title: "Совместные проекты с Яндекс",
      description: "Разработка интеграций для проекта Яндекс.Телефония",
      solution: "API-интеграции, синхронизация данных, обработка транзакций",
      result: "Успешный запуск сервиса, стабильная работа интеграций",
      tags: ["Яндекс", "API", "Интеграция"],
    },
    {
      client: "Алло Инкогнито, СанСим",
      title: "Виртуальная АТС",
      description: "Внедрение виртуальной АТС для малого, среднего и крупного бизнеса",
      solution: "Облачная телефония, интеграции с CRM, коллтрекинг, аналитика",
      result: "Десятки успешных внедрений, повышение эффективности продаж",
      tags: ["ВАТС", "Телефония", "CRM", "API", "Интеграция", "Коллтрекинг", "WEB-виджет", "Вебфон"],
    },
    {
      client: "Федеральная сеть ритейл",
      title: "Речевая аналитика (на базе ИИ)",
      description: "Речевая аналитика на базе AI для повышения качества работы сотрудников на точках",
      solution: "Оффлайн-точки продаж и обслуживания, сбор записей и обработка, выявление инсайтов и лучших практик, интеграция с ERP порталом",
      result: "Успешно завершен пилотный проект, масштабирование на точки по всей России",
      tags: ["AI", "ИИ", "Речевая аналитика", "Скрипты", "Продажи"],
    },
    {
      client: "Текущие проекты",
      title: "Мобильные приложения",
      description: "Приложения для iOS и Android",
      solution: "Личный кабинет в мобильном формате, звонки, WEB-RTC, push-уведомления",
      result: "В стадии разработки",
      tags: ["Mobile", "iOS", "Android"],
    },
    {
      client: "Текущие проекты",
      title: "Чат-боты",
      description: "Автоматизация общения с клиентами в мессенджерах",
      solution: "Боты для Telegram, WhatsApp с интеграцией в CRM",
      result: "Пилотные проекты",
      tags: ["Боты", "Мессенджеры", "AI"],
    },
    {
      client: "Перспективные проекты",
      title: "Собственный MVNO",
      description: "Полноценный виртуальный оператор для вашего бизнеса",
      solution: "Комплексная платформа для запуска собственного бренда MVNO",
      result: "Планируется запуск",
      tags: ["MVNO", "Платформа", "B2B"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Наши кейсы</h1>
            <p className="text-xl lg:text-2xl text-secondary-foreground/80">
              Реализованные проекты для телеком-операторов и крупных компаний с 2005 года
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{caseItem.client}</div>
                  <h3 className="text-xl font-semibold mb-3">{caseItem.title}</h3>

                  <div className="space-y-3 text-sm mb-4">
                    <div>
                      <div className="font-medium text-muted-foreground">Задача:</div>
                      <p className="text-foreground">{caseItem.description}</p>
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground">Решение:</div>
                      <p className="text-foreground">{caseItem.solution}</p>
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground">Результат:</div>
                      <p className="text-foreground">{caseItem.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Реализованных проектов</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">180+</div>
              <div className="text-muted-foreground">Специалистов в команде</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Станьте нашим следующим кейсом</h2>
              <p className="text-xl text-muted-foreground">Расскажите о вашем проекте — реализуем вместе</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
