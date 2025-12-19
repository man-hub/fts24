import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Mic, Shield, Database, Search, Download, Lock, ChevronRight, AlertCircle } from "lucide-react"

export default function CallRecordingPage() {
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
              <Mic className="w-4 h-4" />
              <span>Запись и хранение разговоров</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Запись разговоров с клиентами</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
              Автоматическая запись всех телефонных разговоров с безопасным хранением и удобным поиском
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild style={{ backgroundColor: "rgb(220, 38, 38)", color: "white" }}>
                <Link href="/contacts">
                  Подключить запись звонков
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

      {/* Зачем нужна запись */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Зачем нужна запись разговоров?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Разрешение споров",
                description: "Аудиодоказательства при конфликтных ситуациях с клиентами",
              },
              {
                icon: Search,
                title: "Контроль качества",
                description: "Оценка работы операторов и выявление проблемных точек",
              },
              {
                icon: Database,
                title: "Обучение сотрудников",
                description: "Использование реальных разговоров для тренингов",
              },
              {
                icon: Lock,
                title: "Соответствие требованиям",
                description: "Выполнение требований законодательства и регуляторов",
              },
            ].map((reason, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
                  >
                    <reason.icon className="w-7 h-7" style={{ color: "rgb(220, 38, 38)" }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Возможности */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности системы записи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональная система записи и архивирования разговоров
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Автоматическая запись всех звонков",
                items: [
                  "Входящие и исходящие вызовы",
                  "Внутренние переговоры",
                  "Конференции",
                  "Переадресованные звонки",
                ],
              },
              {
                title: "Удобный поиск и фильтрация",
                items: ["По номеру телефона", "По дате и времени", "По оператору", "По продолжительности"],
              },
              {
                title: "Безопасное хранение",
                items: [
                  "Шифрование данных",
                  "Резервное копирование",
                  "Защита от несанкционированного доступа",
                  "Настройка сроков хранения",
                ],
              },
              {
                title: "Гибкие права доступа",
                items: [
                  "Ролевая модель доступа",
                  "Журнал прослушиваний",
                  "Запрет скачивания",
                  "Водяные знаки на записях",
                ],
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: "rgb(220, 38, 38)" }}>
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форматы и интеграция */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Форматы и экспорт записей</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 mt-1 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                  <div>
                    <p className="font-semibold mb-1">Универсальные форматы</p>
                    <p className="text-sm text-muted-foreground">MP3, WAV для воспроизведения на любых устройствах</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 mt-1 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                  <div>
                    <p className="font-semibold mb-1">API для интеграции</p>
                    <p className="text-sm text-muted-foreground">Автоматическая передача записей в CRM, хранилища</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 mt-1 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                  <div>
                    <p className="font-semibold mb-1">Юридическая значимость</p>
                    <p className="text-sm text-muted-foreground">
                      Метаданные с цифровой подписью для использования как доказательство
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Интеграция с CRM</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "rgb(220, 38, 38)" }}
                    />
                    <p>Автоматическая привязка записей к карточкам клиентов</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "rgb(220, 38, 38)" }}
                    />
                    <p>Прослушивание записей прямо из CRM</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "rgb(220, 38, 38)" }}
                    />
                    <p>Синхронизация метаданных (дата, время, результат звонка)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "rgb(220, 38, 38)" }}
                    />
                    <p>Webhook-уведомления о новых записях</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Соответствие законодательству */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="flex items-start gap-4 p-6 rounded-lg border"
              style={{ backgroundColor: "rgba(220, 38, 38, 0.05)", borderColor: "rgba(220, 38, 38, 0.2)" }}
            >
              <AlertCircle className="w-6 h-6 shrink-0 mt-1" style={{ color: "rgb(220, 38, 38)" }} />
              <div>
                <h3 className="text-xl font-semibold mb-3">Соответствие законодательству РФ</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Наша система записи разговоров полностью соответствует требованиям российского законодательства:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Федеральный закон № 152-ФЗ «О персональных данных»</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Обязательное уведомление абонентов о записи разговора</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Защита данных в соответствии с требованиями ФСТЭК и ФСБ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "rgb(220, 38, 38)" }} />
                    <span>Хранение записей на территории РФ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Начните записывать все разговоры уже сегодня</h2>
            <p className="text-xl text-gray-300 mb-8">
              Защитите свой бизнес, улучшите качество обслуживания и соответствуйте требованиям законодательства
            </p>
            <Button size="lg" asChild style={{ backgroundColor: "rgb(220, 38, 38)", color: "white" }}>
              <Link href="/contacts">
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
