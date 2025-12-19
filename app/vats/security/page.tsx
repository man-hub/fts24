import { ArrowRight, Shield, Lock, Database, AlertTriangle, FileCheck, Server } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SecurityPage() {
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
              Безопасность ВАТС
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Безопасность виртуальной АТС</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Двухфакторная авторизация, черные и белые списки номеров, разрешенные сети IP для совершения SIP звонков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Подключить ВАТС
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Меры защиты</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Многоуровневая система безопасности для защиты ваших данных
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Lock className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Черные и белые списки</h3>
                <p className="text-sm text-muted-foreground">
                  Ограничивайте список контактов, блокируйте дозвон с мошеннических номеров.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <AlertTriangle className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Разрешенные IP сети</h3>
                <p className="text-sm text-muted-foreground">
                  Блокируйте возможность совершения SIP звонков путем несанкционированного доступа к вашим SIP аккаунтам.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Database className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Резервное копирование</h3>
                <p className="text-sm text-muted-foreground">
                  Регулярные автоматические бэкапы данных. Хранение в географически распределенных ЦОД.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <FileCheck className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Соответствие ФЗ-152</h3>
                <p className="text-sm text-muted-foreground">
                  Соблюдение требований по защите персональных данных. Сертифицированное ПО.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Server className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Отказоустойчивость</h3>
                <p className="text-sm text-muted-foreground">
                  Кластерная архитектура, автоматическое переключение на резервные серверы при сбоях.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Shield className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Контроль доступа</h3>
                <p className="text-sm text-muted-foreground">
                  Двухфакторная аутентификация, разграничение прав доступа, журналирование действий.
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
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Гарантии безопасности</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: "rgb(190, 18, 18)" }} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Российское ПО</h3>
                  <p className="text-muted-foreground">
                    Платформа включена в Единый реестр российских программ. Соответствие требованиям импортозамещения.
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
                  <h3 className="mb-2 font-semibold text-lg">Данные в России</h3>
                  <p className="text-muted-foreground">
                    Все серверы и данные клиентов размещены в российских ЦОД. Полное соответствие законодательству.
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
                  <h3 className="mb-2 font-semibold text-lg">Круглосуточный мониторинг</h3>
                  <p className="text-muted-foreground">
                    24/7 мониторинг безопасности и производительности. Оперативное реагирование на инциденты.
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
                  <h3 className="mb-2 font-semibold text-lg">SLA 99,9%</h3>
                  <p className="text-muted-foreground">
                    Гарантия доступности сервиса. Компенсация в случае превышения допустимого времени простоя.
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Доверьте безопасность телефонии профессионалам</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Свяжитесь с нами для консультации по вопросам безопасности
            </p>
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
