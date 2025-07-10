import { Zap, Database, Settings, Smartphone, Code, Shield } from "lucide-react"

export function IntegrationSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Системная интеграция</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Объединяем разрозненные системы в единую IT-экосистему
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">API интеграции</h3>
            <p className="text-gray-600">Подключение к внешним сервисам через REST API, SOAP и другие протоколы</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Интеграция с CRM</h3>
            <p className="text-gray-600">Подключение к Bitrix24, amoCRM, Salesforce и другим популярным системам</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">ERP интеграция</h3>
            <p className="text-gray-600">Синхронизация с корпоративными системами планирования ресурсов</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Операторские интеграции</h3>
            <p className="text-gray-600">Подключение к сетям МТС, Билайн, МегаФон, Ростелеком и других операторов</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Веб-сервисы</h3>
            <p className="text-gray-600">Разработка и интеграция веб-сервисов для обмена данными между системами</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-[#ef4444] rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Безопасная передача данных</h3>
            <p className="text-gray-600">Шифрование и защищенные каналы связи для критически важной информации</p>
          </div>
        </div>
      </div>
    </section>
  )
}
