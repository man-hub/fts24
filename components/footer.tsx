import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo-fts.jpg" alt="ФТС Logo" width={40} height={40} className="h-10 w-10" />
              <span className="font-semibold">FTS</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise-решения для телеком-операторов и бизнеса с 2005 года
            </p>
            <p className="text-xs text-muted-foreground">
              ООО «ФТС»
              <br />
              ИНН: 7715563903
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Решения
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О компании
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vats" className="text-muted-foreground hover:text-foreground transition-colors">
                  Виртуальная АТС
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI-решения
                </Link>
              </li>
              <li>
                <Link href="/billing-mvno" className="text-muted-foreground hover:text-foreground transition-colors">
                  Биллинг и MVNO
                </Link>
              </li>
              <li>
                <Link href="/integration" className="text-muted-foreground hover:text-foreground transition-colors">
                  Интеграции
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Документы
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">5-й проезд Марьиной Рощи, д. 15А, Москва</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="tel:88001010350" className="text-muted-foreground hover:text-foreground transition-colors">
                  8 800 10 10 350
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="tel:+74951010350" className="text-muted-foreground hover:text-foreground transition-colors">
                  +7 495 10 10 350
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <a href="tel:+74953080455" className="text-muted-foreground hover:text-foreground transition-colors">
                  +7 495 308 04 55
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <a
                  href="mailto:sales@fts24.ru"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  sales@fts24.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ООО «ФТС». Все права защищены.</p>
            {/*
            <div className="flex gap-6 text-sm">
              <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Документы
              </Link>
            </div>
*/}
          </div>
        </div>
      </div>
    </footer>
  )
}
