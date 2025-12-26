import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Контакты — ООО «ФТС»",
  description:
    "Свяжитесь с ООО «ФТС» для обсуждения вашего проекта. Офис в Москве, работаем по всей России. Консультация экспертов по телеком-решениям",
}

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефоны",
      details: ["8 (800) 10-10-350", "+7 (495) 10-10-350", "+7 (495) 308-04-55"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@fts24.ru"],
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: ["г. Москва, 5-й проезд Марьиной Рощи, д. 15А"],
    },
    {
      icon: Clock,
      title: "Режим работы",
      details: ["Пн-Пт: 9:00 - 21:00", "Сб-Вс: выходные"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Контакты</h1>
            <p className="text-lg text-muted-foreground md:text-xl text-pretty">
              Свяжитесь с нами для обсуждения вашего проекта. Наши эксперты помогут подобрать оптимальное решение и
              ответят на все вопросы.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                      style={{ background: "rgba(190, 18, 18, 0.1)" }}
                    >
                      <item.icon className="h-6 w-6 text-primary" style={{ color: "rgb(190, 18, 18)" }} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="request-form" className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold">Оставьте заявку</h2>
              <p className="text-lg text-muted-foreground">
                Заполните форму, и наш специалист свяжется с вами в течение 1 рабочего дня
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Как нас найти</h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&source=constructor-api&um=constructor%3AHGhPYJS1QBlieSGRmLbniFxpbUglVEAT"
                width="100%"
                height="400"
                frameBorder="0"
                className="w-full"
                title="Карта расположения офиса ФТС"
              ></iframe>
            </div>
            <div className="mt-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold text-lg">Как добраться</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Метро: Марьина Роща (3 минуты пешком)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
