"use client"

import Image from "next/image"

export default function LetterheadHeaderClient() {
  return (
    <div className="min-h-screen bg-muted/30 py-8 print:bg-white print:py-0">
      {/* Панель управления */}
      <div className="max-w-4xl mx-auto mb-6 px-4 print:hidden">
        <div className="bg-card border border-border rounded-lg p-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">Верхний колонтитул (Header)</h1>
          <p className="text-muted-foreground mb-4">
            Графический элемент для использования в Word/PDF документах. Сохраните как изображение через скриншот или
            печать в PDF.
          </p>
          <button
            onClick={() => window.print()}
            className="px-6 py-2 rounded-md text-white font-medium transition-colors"
            style={{ backgroundColor: "#991b1b" }}
          >
            Печать / Сохранить PDF
          </button>
        </div>
      </div>

      {/* Header элемент */}
      <div
        className="bg-white shadow-lg mx-auto print:hidden"
        style={{
          width: "210mm",
          padding: "12mm 20mm",
          boxSizing: "border-box",
        }}
      >
        {/* Декоративная полоса сверху */}
        <div
          className="h-2 -mt-3 mb-6 rounded-b-sm"
          style={{
            background: "linear-gradient(90deg, #991b1b 0%, #991b1b 50%, #1e3a5f 100%)",
          }}
        />

        <div className="flex items-start justify-between">
          {/* Левая часть - логотип и название */}
          <div className="flex items-center gap-5">
            <Image src="/images/logo-fts.jpg" alt="ФТС" width={80} height={80} className="object-contain" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: "#991b1b" }}>
                ООО «ФТС»
              </h1>
              <p className="text-base mt-2" style={{ color: "#374151" }}>
                Разработка программного обеспечения
                <br />и системная интеграция
              </p>
            </div>
          </div>

          {/* Правая часть - статус компании */}
          <div
            className="text-sm leading-relaxed px-4 py-3 rounded-lg border-l-4"
            style={{
              color: "#1e3a5f",
              backgroundColor: "#f1f5f9",
              borderColor: "#991b1b",
            }}
          >
            <p className="font-semibold">Разработчик отечественного ПО с 2005 г.</p>
            <p className="mt-1">Программное обеспечение включено</p>
            <p>в реестр российского ПО Минцифры России</p>
          </div>
        </div>

        {/* Разделительная линия */}
        <div
          className="mt-6 h-0.5"
          style={{
            background: "linear-gradient(90deg, #991b1b 0%, #d1d5db 30%, #d1d5db 100%)",
          }}
        />
      </div>

      {/* Альтернативный вариант - минималистичный */}
      <div className="max-w-4xl mx-auto mt-8 px-4 print:hidden">
        <h2 className="text-lg font-semibold text-foreground mb-4">Альтернативный вариант (минималистичный)</h2>
      </div>

      <div
        className="bg-white shadow-lg mx-auto print:shadow-none"
        style={{
          width: "210mm",
          padding: "10mm 20mm",
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Логотип и название в линию */}
          <div className="flex items-center gap-4">
            <Image src="/images/logo-fts.jpg" alt="ФТС" width={50} height={50} className="object-contain" />
            <div className="border-l-2 pl-4" style={{ borderColor: "#991b1b" }}>
              <h1 className="text-xl font-bold" style={{ color: "#991b1b" }}>
                ООО «ФТС»
              </h1>
              <p className="text-xs" style={{ color: "#6b7280" }}>
                Разработка ПО и системная интеграция
              </p>
            </div>
          </div>

          {/* Контакты */}
          <div className="text-right text-xs" style={{ color: "#6b7280" }}>
            <p style={{ color: "#1e3a5f", fontWeight: 500 }}>fts24.ru • sales@fts24.ru</p>
            <p>+7 (495) 10-10-350</p>
          </div>
        </div>

        {/* Тонкая линия */}
        <div className="mt-4 h-px" style={{ backgroundColor: "#e5e7eb" }} />

        {/* Статус мелким шрифтом */}
        <p className="mt-2 text-xs" style={{ color: "#9ca3af" }}>
          Разработчик отечественного ПО с 2005 г. ПО включено в реестр российского ПО Минцифры России
        </p>
      </div>

      {/* Стили для печати */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  )
}
