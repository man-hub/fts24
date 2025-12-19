import { ArrowRight, Users, UserPlus, Settings, Workflow, Building2, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ManagementPage() {
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
              Управление ВАТС
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Гибкое управление виртуальной АТС</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Простое добавление сотрудников, создание отделов и настройка правил маршрутизации звонков через удобный
              веб-интерфейс
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Возможности управления</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Все настройки доступны в личном кабинете 24/7
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <UserPlus className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Управление сотрудниками</h3>
                <p className="text-sm text-muted-foreground">
                  Добавление, редактирование и удаление пользователей. Назначение прав доступа и ролей.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Building2 className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Создание отделов</h3>
                <p className="text-sm text-muted-foreground">
                  Группировка сотрудников по отделам с отдельными номерами и правилами обработки звонков.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Workflow className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Правила маршрутизации</h3>
                <p className="text-sm text-muted-foreground">
                  Настройка сценариев обработки входящих и исходящих звонков с учетом времени, загрузки и других
                  факторов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Phone className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Управление номерами</h3>
                <p className="text-sm text-muted-foreground">
                  Подключение, настройка и переадресация номеров. Привязка номеров к сотрудникам и отделам.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Settings className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Гибкие настройки</h3>
                <p className="text-sm text-muted-foreground">
                  Тонкая настройка всех параметров АТС: голосовые меню, приветствия, расписания работы.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <Users className="h-6 w-6" style={{ color: "rgb(190, 18, 18)" }} />
                </div>
                <h3 className="mb-2 font-semibold text-lg">Права доступа</h3>
                <p className="text-sm text-muted-foreground">
                  Разграничение доступа: администраторы, руководители отделов, операторы с разными уровнями прав.
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
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Преимущества</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(190, 18, 18, 0.1)" }}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: "rgb(190, 18, 18)" }} />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Интуитивный интерфейс</h3>
                  <p className="text-muted-foreground">
                    Все настройки выполняются через простой и понятный веб-интерфейс без специальных знаний.
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
                  <h3 className="mb-2 font-semibold text-lg">Быстрое развертывание</h3>
                  <p className="text-muted-foreground">
                    Добавление нового сотрудника или отдела занимает несколько минут. Изменения применяются мгновенно.
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
                  <h3 className="mb-2 font-semibold text-lg">Масштабируемость</h3>
                  <p className="text-muted-foreground">
                    Легко расширяйте систему по мере роста компании: от 2 до 2000 сотрудников без ограничений.
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
                  <h3 className="mb-2 font-semibold text-lg">Централизованное управление</h3>
                  <p className="text-muted-foreground">
                    Все настройки, статистика и управление из одного места в режиме реального времени.
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Готовы упростить управление телефонией?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Свяжитесь с нами для консультации и демонстрации возможностей
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
