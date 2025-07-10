import { Database, Users, CheckCircle, Settings, Star, Shield } from "lucide-react"

export function BillingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Биллинг и CRM системы</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные решения для управления клиентами и автоматизации биллинга
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Система тарификации</h3>
            <p className="text-gray-600">Гибкая настройка тарифных планов и автоматический расчет стоимости услуг</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CRM для телекома</h3>
            <p className="text-gray-600">Управление клиентской базой с учетом специфики телеком-услуг</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Автоматизация платежей</h3>
            <p className="text-gray-600">Интеграция с платежными системами и банками для автоматического списания</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Личные кабинеты</h3>
            <p className="text-gray-600">Веб-порталы и мобильные приложения для самообслуживания клиентов</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Отчетность и аналитика</h3>
            <p className="text-gray-600">Детальные отчеты по доходам, трафику и поведению клиентов</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Контроль мошенничества</h3>
            <p className="text-gray-600">Системы выявления и предотвращения мошеннических операций</p>
          </div>
        </div>
      </div>
    </section>
  )
}
