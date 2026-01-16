"use client"

import Image from "next/image"
import { useState } from "react"
import { FileText, Download, Printer, Check } from "lucide-react"

type LetterheadVariant = "classic" | "minimal" | "modern" | "corporate" | "elegant"

const variants: { id: LetterheadVariant; name: string; description: string }[] = [
  { id: "classic", name: "Классический", description: "Традиционный деловой стиль с градиентной полосой" },
  { id: "minimal", name: "Минималистичный", description: "Простой и лаконичный дизайн" },
  { id: "modern", name: "Современный", description: "Геометрические акценты и современная типографика" },
  { id: "corporate", name: "Корпоративный", description: "Строгий официальный стиль" },
  { id: "elegant", name: "Элегантный", description: "Утончённый дизайн с тонкими линиями" },
]

export default function LetterheadClient() {
  const [selectedVariant, setSelectedVariant] = useState<LetterheadVariant>("classic")

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Панель управления - скрывается при печати */}
      <div className="max-w-6xl mx-auto py-8 px-4 print:hidden">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Фирменные бланки ООО «ФТС»</h1>
          <p className="text-muted-foreground">
            Выберите вариант бланка и нажмите кнопку печати для сохранения в PDF или печати на принтере.
          </p>
        </div>

        {/* Выбор варианта */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedVariant === variant.id
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/50"
              }`}
              style={
                selectedVariant === variant.id
                  ? { borderColor: "#991b1b", backgroundColor: "rgba(153, 27, 27, 0.05)" }
                  : {}
              }
            >
              <div className="flex items-center justify-between mb-2">
                <FileText
                  className="h-5 w-5"
                  style={{ color: selectedVariant === variant.id ? "#991b1b" : "#6b7280" }}
                />
                {selectedVariant === variant.id && <Check className="h-4 w-4" style={{ color: "#991b1b" }} />}
              </div>
              <h3 className="font-medium text-sm">{variant.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{variant.description}</p>
            </button>
          ))}
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-colors"
            style={{ backgroundColor: "#991b1b" }}
          >
            <Printer className="h-5 w-5" />
            Печать / Сохранить PDF
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 rounded-md border font-medium transition-colors hover:bg-muted"
            style={{ borderColor: "#991b1b", color: "#991b1b" }}
          >
            <Download className="h-5 w-5" />
            Скачать как PDF
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          Совет: Для сохранения в PDF выберите в диалоге печати «Сохранить как PDF» вместо принтера.
        </p>
      </div>

      {/* Предпросмотр бланка */}
      <div className="max-w-6xl mx-auto px-4 pb-8 print:p-0 print:max-w-none">
        <div className="print:hidden mb-4">
          <h2 className="text-lg font-semibold text-foreground">Предпросмотр</h2>
        </div>

        {/* Бланк письма - формат A4 */}
        <div
          id="letterhead-print"
          className="bg-white shadow-lg mx-auto print:shadow-none print:mx-0"
          style={{
            width: "210mm",
            minHeight: "297mm",
            padding: "15mm 20mm 20mm 20mm",
            boxSizing: "border-box",
          }}
        >
          {/* Вариант: Классический */}
          {selectedVariant === "classic" && (
            <>
              <header className="relative mb-8">
                <div
                  className="absolute top-0 left-0 right-0 h-1 -mt-4"
                  style={{
                    background: "linear-gradient(90deg, #991b1b 0%, #991b1b 40%, #1e3a5f 100%)",
                  }}
                />
                <div className="flex items-start justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <Image src="/images/logo-fts.jpg" alt="ФТС" width={70} height={70} className="object-contain" />
                    <div>
                      <h1 className="text-2xl font-bold" style={{ color: "#991b1b" }}>
                        ООО «ФТС»
                      </h1>
                      <p className="text-sm text-gray-600 mt-1">
                        Разработка программного обеспечения
                        <br />и системная интеграция
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-xs leading-relaxed px-3 py-2 rounded border-l-2"
                      style={{
                        color: "#1e3a5f",
                        backgroundColor: "#f8fafc",
                        borderColor: "#991b1b",
                      }}
                    >
                      <p className="font-medium">Разработчик отечественного ПО с 2005 г.</p>
                      <p>ПО включено в реестр российского ПО</p>
                      <p>Минцифры России</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-px" style={{ backgroundColor: "#e5e7eb" }} />
              </header>
            </>
          )}

          {/* Вариант: Минималистичный */}
          {selectedVariant === "minimal" && (
            <header className="relative mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/images/logo-fts.jpg" alt="ФТС" width={50} height={50} className="object-contain" />
                <div>
                  <h1 className="text-xl font-semibold" style={{ color: "#1f2937" }}>
                    ООО «ФТС»
                  </h1>
                  <p className="text-xs text-gray-500">fts24.ru • sales@fts24.ru • 8 800 10 10 350</p>
                </div>
              </div>
              <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />
            </header>
          )}

          {/* Вариант: Современный */}
          {selectedVariant === "modern" && (
            <header className="relative mb-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div
                      className="absolute -left-3 -top-3 w-20 h-20 rounded-lg opacity-10"
                      style={{ backgroundColor: "#991b1b" }}
                    />
                    <Image
                      src="/images/logo-fts.jpg"
                      alt="ФТС"
                      width={60}
                      height={60}
                      className="relative object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#111827" }}>
                      ООО «ФТС»
                    </h1>
                    <p className="text-sm font-medium" style={{ color: "#991b1b" }}>
                      FUTURE TECHNOLOGY SOLUTIONS
                    </p>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>fts24.ru</p>
                  <p>sales@fts24.ru</p>
                  <p className="font-medium" style={{ color: "#991b1b" }}>
                    8 800 10 10 350
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 w-12" style={{ backgroundColor: "#991b1b" }} />
                <div className="h-1 flex-1" style={{ backgroundColor: "#e5e7eb" }} />
              </div>
            </header>
          )}

          {/* Вариант: Корпоративный */}
          {selectedVariant === "corporate" && (
            <header className="relative mb-8">
              <div className="absolute top-0 left-0 right-0 h-2 -mt-4" style={{ backgroundColor: "#991b1b" }} />
              <div className="flex items-start justify-between pt-4 pb-4 border-b-2" style={{ borderColor: "#1e3a5f" }}>
                <div className="flex items-center gap-5">
                  <Image src="/images/logo-fts.jpg" alt="ФТС" width={80} height={80} className="object-contain" />
                  <div>
                    <h1 className="text-3xl font-bold" style={{ color: "#1e3a5f" }}>
                      ООО «ФТС»
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                      Разработка программного обеспечения и системная интеграция
                    </p>
                    <p className="text-xs mt-2" style={{ color: "#991b1b" }}>
                      Разработчик отечественного ПО • Реестр Минцифры России
                    </p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="font-medium" style={{ color: "#1e3a5f" }}>
                    8 800 10 10 350
                  </p>
                  <p className="text-gray-600">+7 (495) 10-10-350</p>
                  <p className="text-gray-600">sales@fts24.ru</p>
                  <p className="text-gray-500 text-xs mt-1">fts24.ru</p>
                </div>
              </div>
            </header>
          )}

          {/* Вариант: Элегантный */}
          {selectedVariant === "elegant" && (
            <header className="relative mb-8">
              <div className="text-center pb-6 border-b" style={{ borderColor: "#d1d5db" }}>
                <Image
                  src="/images/logo-fts.jpg"
                  alt="ФТС"
                  width={60}
                  height={60}
                  className="mx-auto object-contain mb-3"
                />
                <h1 className="text-2xl font-light tracking-widest uppercase" style={{ color: "#374151" }}>
                  ООО «ФТС»
                </h1>
                <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-500">
                  <span>fts24.ru</span>
                  <span style={{ color: "#991b1b" }}>•</span>
                  <span>sales@fts24.ru</span>
                  <span style={{ color: "#991b1b" }}>•</span>
                  <span>8 800 10 10 350</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">
                  Разработка программного обеспечения и системная интеграция с 2005 года
                </p>
              </div>
            </header>
          )}

          {/* Реквизиты письма - общие для всех вариантов */}
          <div className="mb-8 text-sm" style={{ color: "#374151" }}>
            <div className="flex gap-12">
              <div>
                <p className="mb-2">
                  <span className="text-gray-500">Исх. №</span>{" "}
                  <span className="border-b border-gray-300 inline-block min-w-32">________________</span>
                </p>
                <p>
                  <span className="text-gray-500">от</span>{" "}
                  <span className="border-b border-gray-300 inline-block min-w-32">«____» ____________ 20__ г.</span>
                </p>
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Кому:</p>
                <div className="border-b border-gray-300 min-h-12"></div>
              </div>
            </div>
          </div>

          {/* Основная область письма */}
          <main className="flex-1" style={{ minHeight: "140mm" }}>
            <div className="text-sm leading-relaxed" style={{ color: "#1f2937" }}>
              <p className="text-gray-400 italic print:text-transparent">[Текст письма]</p>
            </div>
          </main>

          {/* Подпись */}
          <div className="mt-12 mb-16 text-sm" style={{ color: "#374151" }}>
            <div className="flex justify-between items-end">
              <div>
                <p className="mb-8">С уважением,</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Должность</p>
                    <div className="border-b border-gray-300 min-w-40 h-5"></div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Подпись</p>
                    <div className="border-b border-gray-300 min-w-24 h-5"></div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Ф.И.О.</p>
                    <div className="border-b border-gray-300 min-w-40 h-5"></div>
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-gray-400">М.П.</div>
            </div>
          </div>

          {/* Нижний колонтитул */}
          <footer className="mt-auto pt-4 border-t" style={{ borderColor: "#e5e7eb" }}>
            <div className="flex items-center justify-between text-xs" style={{ color: "#6b7280" }}>
              <div className="flex items-center gap-2">
                <span style={{ color: "#991b1b", fontWeight: 600 }}>ООО «ФТС»</span>
                <span>•</span>
                <span style={{ color: "#1e3a5f" }}>fts24.ru</span>
                <span>•</span>
                <span>sales@fts24.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <span>8 800 10 10 350</span>
                <span>•</span>
                <span>+7 (495) 10-10-350</span>
              </div>
            </div>
            <div className="text-xs mt-1" style={{ color: "#9ca3af" }}>
              5-й проезд Марьиной Рощи, д. 15А, Москва • ИНН: 7715563903
            </div>
          </footer>
        </div>
      </div>

      {/* Стили для печати */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Скрываем навигацию сайта и футер при печати */}
          nav,
          header:not(#letterhead-print header),
          footer:not(#letterhead-print footer),
          .print\\:hidden {
            display: none !important;
          }
          
          /* Скрываем основную навигацию и футер сайта */
          body > div > nav,
          body > div > header,
          body > div > footer,
          [class*="navigation"],
          [class*="footer"]:not(#letterhead-print footer) {
            display: none !important;
          }
          
          #letterhead-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm !important;
            min-height: 297mm !important;
          }
        }
      `}</style>
    </div>
  )
}
