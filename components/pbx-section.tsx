import { Headphones, Settings, Phone, Smartphone, Database, Shield } from "lucide-react"

export function PBXSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Виртуальные АТС</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные решения корпоративной телефонии с расширенными возможностями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">IP-телефония</h3>
            <p className="text-gray-600">Полнофункциональная IP-АТС с поддержкой SIP-протокола и мягких телефонов</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Умная маршрутизация</h3>
            <p className="text-gray-600">Интеллектуальное распределение вызовов по операторам и отделам</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Колл-центр</h3>
            <p className="text-gray-600">Решения для контакт-центров с очередями, записью разговоров и отчетностью</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Мобильная интеграция</h3>
            <p className="text-gray-600">Подключение мобильных номеров к корпоративной АТС</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CRM интеграция</h3>
            <p className="text-gray-600">Интеграция с популярными CRM-системами для автоматизации процессов</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
            <p className="text-gray-600">Защита от несанкционированного доступа и мошеннических звонков</p>
          </div>
        </div>
      </div>
    </section>
  )
}
