import { ArrowRight, Cloud, Zap, Globe, DollarSign, Smartphone, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CloudPage() {
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
              Облачное решение
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Облачная виртуальная АТС</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Корпоративная телефония без покупки оборудования. Работает через интернет из любой точки мира.
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Преимущества облачной АТС</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Современная телефония без лишних затрат и сложностей
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <DollarSign className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Без покупки оборудования</h3>
                <p className="text-sm text-muted-foreground">
                  Не нужно покупать сервера, АТС и телефонное оборудование. Платите только за использование.
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
                <h3 className="mb-2 font-semibold text-lg">Быстрый запуск</h3>
                <p className="text-sm text-muted-foreground">
                  Подключение за 1 день. Не нужно устанавливать и настраивать оборудование.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Globe className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Работа из любой точки</h3>
                <p className="text-sm text-muted-foreground">
                  Сотрудники звонят из дома, офиса, командировки. Нужен только интернет.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <TrendingUp className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Легкое масштабирование</h3>
                <p className="text-sm text-muted-foreground">
                  Добавляйте новых сотрудников за минуты. От 2 до 2000 пользователей без ограничений.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Smartphone className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Любые устройства</h3>
                <p className="text-sm text-muted-foreground">
                  Компьютер, смартфон, IP-телефон. Работает на Windows, Mac, iOS, Android.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Cloud className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Автоматические обновления</h3>
                <p className="text-sm text-muted-foreground">
                  Новые функции добавляются автоматически. Не нужно обновлять ПО вручную.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Облачная АТС vs Традиционная АТС</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-lg text-center">Облачная ВАТС</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(34, 197, 94, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(34, 197, 94)" }} />
                      </div>
                      <span className="text-sm">Подключение за 1 день</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(34, 197, 94, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(34, 197, 94)" }} />
                      </div>
                      <span className="text-sm">Оплата по подписке</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(34, 197, 94, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(34, 197, 94)" }} />
                      </div>
                      <span className="text-sm">Нет затрат на оборудование</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(34, 197, 94, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(34, 197, 94)" }} />
                      </div>
                      <span className="text-sm">Работа из любой точки</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(34, 197, 94, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(34, 197, 94)" }} />
                      </div>
                      <span className="text-sm">Автообновления</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-lg text-center">Традиционная АТС</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(239, 68, 68, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(239, 68, 68)" }} />
                      </div>
                      <span className="text-sm">Установка 2-4 недели</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(239, 68, 68, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(239, 68, 68)" }} />
                      </div>
                      <span className="text-sm">Большие начальные затраты</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(239, 68, 68, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(239, 68, 68)" }} />
                      </div>
                      <span className="text-sm">Покупка оборудования</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(239, 68, 68, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(239, 68, 68)" }} />
                      </div>
                      <span className="text-sm">Привязка к офису</span>
                    </li>
                    <li className="flex gap-3">
                      <div
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: "rgba(239, 68, 68, 0.2)" }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: "rgb(239, 68, 68)" }} />
                      </div>
                      <span className="text-sm">Ручные обновления</span>
                    </li>
                  </ul>
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Готовы перейти на облачную телефонию?</h2>
            <p className="mb-8 text-lg text-muted-foreground">Свяжитесь с нами для бесплатного тестового периода</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacts">
                  Попробовать бесплатно
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
