import { ArrowRight, Network, Zap, Database, Code, RefreshCw, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CRMIntegrationPage() {
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
              Интеграция с CRM
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Интеграция ВАТС с CRM-системами</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              REST API для интеграции с любыми CRM и бизнес-системами. Автоматизация работы и единая база клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Подключить интеграцию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vats">Все функции ВАТС</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Возможности интеграции</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Связывайте ВАТС с бизнес-системами для автоматизации процессов
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Database className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Автоматическое создание карточек</h3>
                <p className="text-sm text-muted-foreground">
                  При входящем звонке в CRM автоматически создается карточка клиента с записью разговора.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Zap className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Click-to-Call</h3>
                <p className="text-sm text-muted-foreground">
                  Совершайте звонки из CRM одним кликом. Вся история звонков сохраняется в карточке клиента.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <RefreshCw className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Синхронизация данных</h3>
                <p className="text-sm text-muted-foreground">
                  Двусторонний обмен данными между ВАТС и CRM в режиме реального времени.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Code className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">REST API</h3>
                <p className="text-sm text-muted-foreground">
                  Открытый API для интеграции с любыми системами. Подробная документация и примеры кода.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Network className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Webhook уведомления</h3>
                <p className="text-sm text-muted-foreground">
                  Получайте уведомления о событиях: новый звонок, завершение разговора, пропущенный вызов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Lock className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Безопасность</h3>
                <p className="text-sm text-muted-foreground">
                  OAuth 2.0 авторизация, шифрование данных, ограничение доступа по IP и ролям.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CRM Systems */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Готовые интеграции</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-lg">amoCRM</h3>
                  <p className="text-sm text-muted-foreground">
                    Полная интеграция с amoCRM: автоматическое создание сделок, запись разговоров в карточке,
                    Click-to-Call.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-lg">Битрикс24</h3>
                  <p className="text-sm text-muted-foreground">
                    Интеграция с Битрикс24: синхронизация контактов, история звонков, виджет телефонии в интерфейсе.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-lg">Сервис интеграций</h3>
                  <p className="text-sm text-muted-foreground">
                    Интеграция с более чем 1000 информационых систем!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-lg">API для интеграций</h3>
                  <p className="text-sm text-muted-foreground">
                    Интеграция с собственными разработками и корпоративными системами через REST API.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Готовы связать ВАТС с вашей CRM?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Свяжитесь с нами для настройки интеграции</p>
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
