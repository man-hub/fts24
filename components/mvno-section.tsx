import { Smartphone, Database, Settings, Shield, Users, CheckCircle } from "lucide-react"

export function MVNOSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MVNO/FMC решения</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный цикл запуска виртуальных операторов связи и конвергентных сервисов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Платформа MVNO</h3>
            <p className="text-gray-600">
              Готовая инфраструктура для запуска виртуального оператора с полным набором услуг
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">HLR/HSS интеграция</h3>
            <p className="text-gray-600">Подключение к сетям операторов и управление абонентской базой</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">FMC сервисы</h3>
            <p className="text-gray-600">Конвергентные решения: мобильная связь, интернет, ТВ в едином пакете</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Безопасность и мониторинг</h3>
            <p className="text-gray-600">Системы защиты от мошенничества и контроля качества услуг</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Абонентские сервисы</h3>
            <p className="text-gray-600">Личные кабинеты, мобильные приложения, самообслуживание</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Техподдержка 24/7</h3>
            <p className="text-gray-600">Круглосуточное сопровождение и поддержка всех компонентов системы</p>
          </div>
        </div>
      </div>
    </section>
  )
}
