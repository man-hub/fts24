"use client"
import { useState, useRef } from "react"
import { FileText, Printer, Check, Download, Eye, EyeOff } from "lucide-react"

type LetterheadVariant = "classic" | "minimal" | "modern" | "corporate" | "elegant" | "tech" | "gradient" | "wave"

const variants: { id: LetterheadVariant; name: string; description: string }[] = [
  { id: "classic", name: "Классический", description: "Традиционный деловой стиль с градиентной полосой" },
  { id: "minimal", name: "Минималистичный", description: "Простой и лаконичный дизайн" },
  { id: "modern", name: "Современный", description: "Геометрические акценты и современная типографика" },
  { id: "corporate", name: "Корпоративный", description: "Строгий официальный стиль" },
  { id: "elegant", name: "Элегантный", description: "Утончённый дизайн с тонкими линиями" },
  { id: "tech", name: "Технологичный", description: "С изображением цифровых технологий" },
  { id: "gradient", name: "Градиентный", description: "С абстрактным градиентным изображением" },
  { id: "wave", name: "Волновой", description: "С динамичным волновым паттерном" },
]

export default function LetterheadClient() {
  const [selectedVariant, setSelectedVariant] = useState<LetterheadVariant>("classic")
  const [showContent, setShowContent] = useState(true)
  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    const printContent = printRef.current
    if (!printContent) return

    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Бланк ООО ФТС</title>
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .letterhead {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 20mm 20mm 20mm;
            background: white;
          }
          .header-image {
            width: 100%;
            height: 25mm;
            object-fit: cover;
            margin-bottom: 5mm;
          }
          .header-gradient {
            height: 4px;
            background: linear-gradient(90deg, #991b1b 0%, #991b1b 40%, #1e3a5f 100%);
            margin-bottom: 15px;
          }
          .header-line {
            height: 2px;
            background: #991b1b;
            margin-bottom: 15px;
          }
          .header-thin {
            height: 1px;
            background: #e5e7eb;
            margin-top: 15px;
          }
          .logo-section {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .logo-left {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .logo-img {
            width: 70px;
            height: 70px;
            object-fit: contain;
          }
          .logo-img-sm {
            width: 50px;
            height: 50px;
            object-fit: contain;
          }
          .logo-img-lg {
            width: 80px;
            height: 80px;
            object-fit: contain;
          }
          .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #991b1b;
          }
          .company-name-dark {
            color: #1e3a5f;
          }
          .company-name-black {
            color: #111827;
          }
          .company-desc {
            font-size: 12px;
            color: #6b7280;
            margin-top: 4px;
          }
          .status-box {
            text-align: right;
            font-size: 11px;
            color: #1e3a5f;
            background: #f8fafc;
            padding: 8px 12px;
            border-radius: 4px;
            border-left: 2px solid #991b1b;
          }
          .status-box p {
            margin: 2px 0;
          }
          .status-box .font-medium {
            font-weight: 500;
          }
          .contact-right {
            text-align: right;
            font-size: 12px;
          }
          .contact-right p {
            margin: 2px 0;
          }
          .contact-right .phone {
            font-weight: 500;
            color: #1e3a5f;
          }
          .contact-right .highlight {
            color: #991b1b;
            font-weight: 500;
          }
          .minimal-contact {
            font-size: 11px;
            color: #6b7280;
          }
          .modern-subtitle {
            font-size: 12px;
            font-weight: 500;
            color: #991b1b;
          }
          .modern-divider {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 20px;
          }
          .modern-divider-red {
            height: 4px;
            width: 48px;
            background: #991b1b;
          }
          .modern-divider-gray {
            height: 4px;
            flex: 1;
            background: #e5e7eb;
          }
          .elegant-header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #d1d5db;
          }
          .elegant-name {
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #374151;
          }
          .elegant-contacts {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 8px;
            font-size: 11px;
            color: #6b7280;
          }
          .elegant-dot {
            color: #991b1b;
          }
          .elegant-tagline {
            font-size: 11px;
            color: #9ca3af;
            font-style: italic;
            margin-top: 8px;
          }
          .corporate-bar {
            height: 8px;
            background: #991b1b;
            margin: -15mm -20mm 15px -20mm;
            width: calc(100% + 40mm);
          }
          .corporate-border {
            border-bottom: 2px solid #1e3a5f;
            padding-bottom: 15px;
          }
          .corporate-registry {
            font-size: 11px;
            color: #991b1b;
            margin-top: 8px;
          }
          .requisites {
            margin-bottom: 25px;
            font-size: 13px;
            color: #374151;
          }
          .requisites-row {
            display: flex;
            gap: 50px;
          }
          .requisites-label {
            color: #6b7280;
          }
          .requisites-line {
            border-bottom: 1px solid #d1d5db;
            display: inline-block;
            min-width: 120px;
          }
          .requisites-to {
            flex: 1;
          }
          .requisites-to-label {
            color: #6b7280;
            margin-bottom: 4px;
          }
          .requisites-to-box {
            border-bottom: 1px solid #d1d5db;
            min-height: 45px;
          }
          .main-content {
            min-height: 140mm;
            font-size: 13px;
            line-height: 1.6;
            color: #1f2937;
          }
          .placeholder-text {
            color: #9ca3af;
            font-style: italic;
          }
          .signature {
            margin-top: 40px;
            margin-bottom: 50px;
            font-size: 13px;
            color: #374151;
          }
          .signature-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .signature-regards {
            margin-bottom: 30px;
          }
          .signature-fields {
            display: flex;
            gap: 30px;
          }
          .signature-field label {
            display: block;
            font-size: 11px;
            color: #6b7280;
            margin-bottom: 4px;
          }
          .signature-field-line {
            border-bottom: 1px solid #d1d5db;
            min-width: 100px;
            height: 20px;
          }
          .signature-field-line-wide {
            min-width: 150px;
          }
          .signature-stamp {
            font-size: 11px;
            color: #9ca3af;
            text-align: right;
          }
          .footer {
            margin-top: auto;
            padding-top: 15px;
            border-top: 1px solid #e5e7eb;
          }
          .footer-row {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #6b7280;
          }
          .footer-company {
            color: #991b1b;
            font-weight: 600;
          }
          .footer-site {
            color: #1e3a5f;
          }
          .footer-address {
            font-size: 11px;
            color: #9ca3af;
            margin-top: 4px;
          }
          .geometric-bg {
            position: relative;
          }
          .geometric-square {
            position: absolute;
            left: -12px;
            top: -12px;
            width: 80px;
            height: 80px;
            background: rgba(153, 27, 27, 0.1);
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        ${printContent.innerHTML}
      </body>
      </html>
    `

    printWindow.document.write(htmlContent)
    printWindow.document.close()

    // Wait for images to load before printing
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 500)
    }
  }

  const handleDownloadDocx = async () => {
    const {
      Document,
      Packer,
      Paragraph,
      TextRun,
      Header,
      Footer,
      AlignmentType,
      BorderStyle,
      Table,
      TableRow,
      TableCell,
      WidthType,
      VerticalAlign,
      HeightRule,
      TableLayoutType,
    } = await import("docx")

    // Helper to convert mm to twips (1mm = 56.7 twips)
    const mmToTwips = (mm: number) => Math.round(mm * 56.7)

    // Create document with styled header and footer
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: {
              font: "Arial",
              size: 24, // 12pt
            },
          },
        },
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: mmToTwips(15),
                right: mmToTwips(20),
                bottom: mmToTwips(20),
                left: mmToTwips(20),
              },
            },
          },
          headers: {
            default: new Header({
              children: [
                // Company header table
                new Table({
                  width: { size: 100, type: WidthType.PERCENTAGE },
                  layout: TableLayoutType.FIXED,
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE },
                    insideHorizontal: { style: BorderStyle.NONE },
                    insideVertical: { style: BorderStyle.NONE },
                  },
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          width: { size: 70, type: WidthType.PERCENTAGE },
                          verticalAlign: VerticalAlign.CENTER,
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: "ООО «ФТС»",
                                  bold: true,
                                  size: 32, // 16pt
                                  color: "991b1b",
                                  font: "Arial",
                                }),
                              ],
                            }),
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: "Разработка программного обеспечения и системная интеграция",
                                  size: 20, // 10pt
                                  color: "666666",
                                  font: "Arial",
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: { size: 30, type: WidthType.PERCENTAGE },
                          verticalAlign: VerticalAlign.CENTER,
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.SINGLE, size: 12, color: "991b1b" },
                            right: { style: BorderStyle.NONE },
                          },
                          margins: {
                            left: 150,
                          },
                          shading: { fill: "f8fafc" },
                          children: [
                            new Paragraph({
                              alignment: AlignmentType.RIGHT,
                              children: [
                                new TextRun({
                                  text: "Разработчик отечественного ПО",
                                  size: 18,
                                  color: "1e3a5f",
                                  font: "Arial",
                                }),
                              ],
                            }),
                            new Paragraph({
                              alignment: AlignmentType.RIGHT,
                              children: [
                                new TextRun({
                                  text: "с 2005 года",
                                  size: 18,
                                  color: "1e3a5f",
                                  font: "Arial",
                                }),
                              ],
                            }),
                            new Paragraph({
                              alignment: AlignmentType.RIGHT,
                              children: [
                                new TextRun({
                                  text: "Реестр Минцифры России",
                                  size: 18,
                                  color: "1e3a5f",
                                  font: "Arial",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                // Gradient line simulation
                new Paragraph({
                  border: {
                    bottom: {
                      color: "991b1b",
                      space: 1,
                      style: BorderStyle.SINGLE,
                      size: 18,
                    },
                  },
                  spacing: { before: 200, after: 300 },
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  border: {
                    top: {
                      color: "e5e7eb",
                      space: 1,
                      style: BorderStyle.SINGLE,
                      size: 6,
                    },
                  },
                  spacing: { before: 200 },
                  children: [],
                }),
                new Table({
                  width: { size: 100, type: WidthType.PERCENTAGE },
                  layout: TableLayoutType.FIXED,
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE },
                    insideHorizontal: { style: BorderStyle.NONE },
                    insideVertical: { style: BorderStyle.NONE },
                  },
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          width: { size: 50, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: "ООО «ФТС»",
                                  bold: true,
                                  size: 18,
                                  color: "991b1b",
                                  font: "Arial",
                                }),
                                new TextRun({ text: "  •  ", size: 18, color: "999999", font: "Arial" }),
                                new TextRun({ text: "fts24.ru", size: 18, color: "1e3a5f", font: "Arial" }),
                                new TextRun({ text: "  •  ", size: 18, color: "999999", font: "Arial" }),
                                new TextRun({ text: "sales@fts24.ru", size: 18, color: "666666", font: "Arial" }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: { size: 50, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          children: [
                            new Paragraph({
                              alignment: AlignmentType.RIGHT,
                              children: [
                                new TextRun({ text: "8 800 10 10 350", size: 18, color: "666666", font: "Arial" }),
                                new TextRun({ text: "  •  ", size: 18, color: "999999", font: "Arial" }),
                                new TextRun({ text: "+7 (495) 10-10-350", size: 18, color: "666666", font: "Arial" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "5-й проезд Марьиной Рощи, д. 15А, Москва  •  ИНН: 7715563903",
                      size: 18,
                      color: "999999",
                      font: "Arial",
                    }),
                  ],
                  spacing: { before: 50 },
                }),
              ],
            }),
          },
          children: showContent
            ? [
                // Requisites row
                new Table({
                  width: { size: 100, type: WidthType.PERCENTAGE },
                  layout: TableLayoutType.FIXED,
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE },
                    insideHorizontal: { style: BorderStyle.NONE },
                    insideVertical: { style: BorderStyle.NONE },
                  },
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          width: { size: 40, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({ text: "Исх. № ", color: "666666", size: 22, font: "Arial" }),
                                new TextRun({ text: "________________", size: 22, font: "Arial" }),
                              ],
                              spacing: { after: 100 },
                            }),
                            new Paragraph({
                              children: [
                                new TextRun({ text: "от ", color: "666666", size: 22, font: "Arial" }),
                                new TextRun({ text: "«____» ____________ 20__ г.", size: 22, font: "Arial" }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: { size: 60, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          children: [
                            new Paragraph({
                              children: [new TextRun({ text: "Кому:", color: "666666", size: 22, font: "Arial" })],
                              spacing: { after: 50 },
                            }),
                            new Paragraph({
                              border: {
                                bottom: { style: BorderStyle.SINGLE, size: 6, color: "d1d5db" },
                              },
                              children: [new TextRun({ text: " ", size: 22 })],
                            }),
                            new Paragraph({
                              border: {
                                bottom: { style: BorderStyle.SINGLE, size: 6, color: "d1d5db" },
                              },
                              children: [new TextRun({ text: " ", size: 22 })],
                              spacing: { before: 100 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                // Spacing
                new Paragraph({ spacing: { after: 400 } }),
                // Letter content placeholder
                new Paragraph({
                  children: [
                    new TextRun({ text: "[Текст письма]", italics: true, color: "999999", size: 22, font: "Arial" }),
                  ],
                  spacing: { after: 4000 },
                }),
                // Signature block
                new Paragraph({
                  children: [new TextRun({ text: "С уважением,", size: 22, font: "Arial" })],
                  spacing: { after: 600 },
                }),
                // Signature fields table
                new Table({
                  width: { size: 100, type: WidthType.PERCENTAGE },
                  layout: TableLayoutType.FIXED,
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE },
                    insideHorizontal: { style: BorderStyle.NONE },
                    insideVertical: { style: BorderStyle.NONE },
                  },
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          width: { size: 30, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          children: [
                            new Paragraph({
                              children: [new TextRun({ text: "Должность", color: "666666", size: 18, font: "Arial" })],
                            }),
                            new Paragraph({
                              border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "d1d5db" } },
                              children: [new TextRun({ text: " ", size: 22 })],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: { size: 25, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          margins: { left: 200 },
                          children: [
                            new Paragraph({
                              children: [new TextRun({ text: "Подпись", color: "666666", size: 18, font: "Arial" })],
                            }),
                            new Paragraph({
                              border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "d1d5db" } },
                              children: [new TextRun({ text: " ", size: 22 })],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: { size: 30, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          margins: { left: 200 },
                          children: [
                            new Paragraph({
                              children: [new TextRun({ text: "Ф.И.О.", color: "666666", size: 18, font: "Arial" })],
                            }),
                            new Paragraph({
                              border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "d1d5db" } },
                              children: [new TextRun({ text: " ", size: 22 })],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: { size: 15, type: WidthType.PERCENTAGE },
                          borders: {
                            top: { style: BorderStyle.NONE },
                            bottom: { style: BorderStyle.NONE },
                            left: { style: BorderStyle.NONE },
                            right: { style: BorderStyle.NONE },
                          },
                          verticalAlign: VerticalAlign.BOTTOM,
                          children: [
                            new Paragraph({
                              alignment: AlignmentType.RIGHT,
                              children: [new TextRun({ text: "М.П.", color: "999999", size: 18, font: "Arial" })],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ]
            : [
                // Empty content - just header and footer
                new Paragraph({ spacing: { after: 12000 } }),
              ],
        },
      ],
    })

    // Generate and download
    const blob = await Packer.toBlob(doc)
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `blank-fts-${selectedVariant}${showContent ? "" : "-empty"}.docx`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Фирменные бланки ООО «ФТС»</h1>
          <p className="text-muted-foreground">
            Выберите вариант бланка и нажмите кнопку печати для сохранения в PDF или скачайте в формате DOCX.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Левая колонка - выбор варианта и кнопки */}
          <div className="lg:w-80 flex-shrink-0">
            <h2 className="text-lg font-semibold text-foreground mb-4">Выберите вариант</h2>

            {/* Выбор варианта - вертикальный список */}
            <div className="flex flex-col gap-3 mb-6 max-h-[400px] overflow-y-auto pr-2">
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
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <FileText
                        className="h-5 w-5"
                        style={{ color: selectedVariant === variant.id ? "#991b1b" : "#6b7280" }}
                      />
                      <h3 className="font-medium">{variant.name}</h3>
                    </div>
                    {selectedVariant === variant.id && <Check className="h-4 w-4" style={{ color: "#991b1b" }} />}
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">{variant.description}</p>
                </button>
              ))}
            </div>

            <div className="mb-6 p-4 bg-card rounded-lg border">
              <h3 className="font-medium mb-3">Содержимое бланка</h3>
              <button
                onClick={() => setShowContent(!showContent)}
                className={`flex items-center gap-3 w-full p-3 rounded-md border-2 transition-all ${
                  showContent ? "border-primary/50 bg-primary/5" : "border-border"
                }`}
                style={
                  showContent
                    ? { borderColor: "rgba(153, 27, 27, 0.5)", backgroundColor: "rgba(153, 27, 27, 0.05)" }
                    : {}
                }
              >
                {showContent ? (
                  <Eye className="h-5 w-5" style={{ color: "#991b1b" }} />
                ) : (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                )}
                <div className="text-left">
                  <p className="font-medium text-sm">{showContent ? "Полный бланк" : "Только колонтитулы"}</p>
                  <p className="text-xs text-muted-foreground">
                    {showContent ? "С реквизитами и подписью" : "Без текста письма"}
                  </p>
                </div>
              </button>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-medium transition-colors"
                style={{ backgroundColor: "#991b1b" }}
              >
                <Printer className="h-5 w-5" />
                Печать / Сохранить PDF
              </button>
              <button
                onClick={handleDownloadDocx}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-colors border-2"
                style={{ borderColor: "#991b1b", color: "#991b1b" }}
              >
                <Download className="h-5 w-5" />
                Скачать DOCX
              </button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Совет: Для сохранения в PDF выберите в диалоге печати «Сохранить как PDF» вместо принтера.
            </p>
          </div>

          {/* Правая колонка - предпросмотр бланка */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-foreground mb-4">Предпросмотр</h2>

            <div
              className="overflow-auto border rounded-lg bg-gray-100 p-4"
              style={{ maxHeight: "calc(100vh - 200px)" }}
            >
              {/* Бланк письма - формат A4, масштабированный для превью */}
              <div
                ref={printRef}
                className="bg-white shadow-lg mx-auto origin-top-left"
                style={{
                  width: "210mm",
                  minHeight: "297mm",
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                }}
              >
                <div
                  className="letterhead"
                  style={{
                    padding: "15mm 20mm 20mm 20mm",
                    minHeight: "297mm",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Вариант: Классический */}
                  {selectedVariant === "classic" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div
                        className="header-gradient"
                        style={{
                          height: "4px",
                          background: "linear-gradient(90deg, #991b1b 0%, #991b1b 40%, #1e3a5f 100%)",
                          marginBottom: "15px",
                        }}
                      />
                      <div
                        className="logo-section"
                        style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
                      >
                        <div className="logo-left" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                          <img
                            src="/images/logo-fts.jpg"
                            alt="ФТС"
                            style={{ width: "70px", height: "70px", objectFit: "contain" }}
                          />
                          <div>
                            <div
                              className="company-name"
                              style={{ fontSize: "24px", fontWeight: "bold", color: "#991b1b" }}
                            >
                              ООО «ФТС»
                            </div>
                            <div
                              className="company-desc"
                              style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}
                            >
                              Разработка программного обеспечения
                              <br />и системная интеграция
                            </div>
                          </div>
                        </div>
                        <div
                          className="status-box"
                          style={{
                            textAlign: "right",
                            fontSize: "11px",
                            color: "#1e3a5f",
                            background: "#f8fafc",
                            padding: "8px 12px",
                            borderRadius: "4px",
                            borderLeft: "2px solid #991b1b",
                          }}
                        >
                          <p style={{ fontWeight: "500" }}>Разработчик отечественного ПО с 2005 г.</p>
                          <p>ПО включено в реестр российского ПО</p>
                          <p>Минцифры России</p>
                        </div>
                      </div>
                      <div
                        className="header-thin"
                        style={{ height: "1px", background: "#e5e7eb", marginTop: "15px" }}
                      />
                    </header>
                  )}

                  {/* Вариант: Минималистичный */}
                  {selectedVariant === "minimal" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                        <img
                          src="/images/logo-fts.jpg"
                          alt="ФТС"
                          style={{ width: "50px", height: "50px", objectFit: "contain" }}
                        />
                        <div>
                          <div style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937" }}>ООО «ФТС»</div>
                          <div style={{ fontSize: "11px", color: "#6b7280" }}>
                            fts24.ru • sales@fts24.ru • 8 800 10 10 350
                          </div>
                        </div>
                      </div>
                      <div style={{ height: "1px", background: "#e5e7eb" }} />
                    </header>
                  )}

                  {/* Вариант: Современный */}
                  {selectedVariant === "modern" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                          <div style={{ position: "relative" }}>
                            <div
                              style={{
                                position: "absolute",
                                left: "-12px",
                                top: "-12px",
                                width: "80px",
                                height: "80px",
                                background: "rgba(153, 27, 27, 0.1)",
                                borderRadius: "8px",
                              }}
                            />
                            <img
                              src="/images/logo-fts.jpg"
                              alt="ФТС"
                              style={{ position: "relative", width: "60px", height: "60px", objectFit: "contain" }}
                            />
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                letterSpacing: "-0.5px",
                                color: "#111827",
                              }}
                            >
                              ООО «ФТС»
                            </div>
                            <div style={{ fontSize: "12px", fontWeight: "500", color: "#991b1b" }}>
                              FUTURE TECHNOLOGY SOLUTIONS
                            </div>
                          </div>
                        </div>
                        <div style={{ textAlign: "right", fontSize: "11px", color: "#6b7280" }}>
                          <p>fts24.ru</p>
                          <p>sales@fts24.ru</p>
                          <p style={{ fontWeight: "500", color: "#991b1b" }}>8 800 10 10 350</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px" }}>
                        <div style={{ height: "4px", width: "48px", background: "#991b1b" }} />
                        <div style={{ height: "4px", flex: 1, background: "#e5e7eb" }} />
                      </div>
                    </header>
                  )}

                  {/* Вариант: Корпоративный */}
                  {selectedVariant === "corporate" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          height: "8px",
                          background: "#991b1b",
                          margin: "-15mm -20mm 15px -20mm",
                          width: "calc(100% + 40mm)",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          paddingBottom: "15px",
                          borderBottom: "2px solid #1e3a5f",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                          <img
                            src="/images/logo-fts.jpg"
                            alt="ФТС"
                            style={{ width: "80px", height: "80px", objectFit: "contain" }}
                          />
                          <div>
                            <div style={{ fontSize: "28px", fontWeight: "bold", color: "#1e3a5f" }}>ООО «ФТС»</div>
                            <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
                              Разработка программного обеспечения и системная интеграция
                            </div>
                            <div style={{ fontSize: "11px", color: "#991b1b", marginTop: "8px" }}>
                              Разработчик отечественного ПО • Реестр Минцифры России
                            </div>
                          </div>
                        </div>
                        <div style={{ textAlign: "right", fontSize: "13px" }}>
                          <p style={{ fontWeight: "500", color: "#1e3a5f" }}>8 800 10 10 350</p>
                          <p style={{ color: "#6b7280" }}>+7 (495) 10-10-350</p>
                          <p style={{ color: "#6b7280" }}>sales@fts24.ru</p>
                          <p style={{ color: "#9ca3af", fontSize: "11px", marginTop: "4px" }}>fts24.ru</p>
                        </div>
                      </div>
                    </header>
                  )}

                  {/* Вариант: Элегантный */}
                  {selectedVariant === "elegant" && (
                    <header
                      style={{
                        marginBottom: "20px",
                        textAlign: "center",
                        paddingBottom: "20px",
                        borderBottom: "1px solid #d1d5db",
                      }}
                    >
                      <img
                        src="/images/logo-fts.jpg"
                        alt="ФТС"
                        style={{ width: "60px", height: "60px", objectFit: "contain", margin: "0 auto 12px" }}
                      />
                      <div
                        style={{
                          fontSize: "24px",
                          fontWeight: "300",
                          letterSpacing: "4px",
                          textTransform: "uppercase",
                          color: "#374151",
                        }}
                      >
                        ООО «ФТС»
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "15px",
                          marginTop: "8px",
                          fontSize: "11px",
                          color: "#6b7280",
                        }}
                      >
                        <span>fts24.ru</span>
                        <span style={{ color: "#991b1b" }}>•</span>
                        <span>sales@fts24.ru</span>
                        <span style={{ color: "#991b1b" }}>•</span>
                        <span>8 800 10 10 350</span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#9ca3af", fontStyle: "italic", marginTop: "8px" }}>
                        Разработка программного обеспечения и системная интеграция с 2005 года
                      </div>
                    </header>
                  )}

                  {/* Вариант: Технологичный (с изображением) */}
                  {selectedVariant === "tech" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          position: "relative",
                          margin: "-15mm -20mm 15px -20mm",
                          height: "25mm",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="/abstract-digital-technology-circuit-board-pattern-.jpg"
                          alt=""
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to right, rgba(153, 27, 27, 0.9), rgba(30, 58, 95, 0.7))",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "20mm",
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <img
                            src="/images/logo-fts.jpg"
                            alt="ФТС"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "contain",
                              borderRadius: "8px",
                              background: "white",
                              padding: "4px",
                            }}
                          />
                          <div style={{ color: "white" }}>
                            <div style={{ fontSize: "22px", fontWeight: "bold" }}>ООО «ФТС»</div>
                            <div style={{ fontSize: "11px", opacity: "0.9" }}>Инновационные IT-решения для бизнеса</div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: "11px",
                          color: "#6b7280",
                        }}
                      >
                        <span>Разработчик отечественного ПО • Реестр Минцифры России</span>
                        <span>fts24.ru • sales@fts24.ru • 8 800 10 10 350</span>
                      </div>
                      <div style={{ height: "1px", background: "#e5e7eb", marginTop: "10px" }} />
                    </header>
                  )}

                  {/* Вариант: Градиентный (с изображением) */}
                  {selectedVariant === "gradient" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          position: "relative",
                          margin: "-15mm -20mm 15px -20mm",
                          height: "30mm",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="/abstract-gradient-mesh-red-dark-blue-smooth-backgr.jpg"
                          alt=""
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, rgba(153, 27, 27, 0.85), rgba(30, 58, 95, 0.85))",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "20mm",
                            bottom: "5mm",
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "20px",
                          }}
                        >
                          <img
                            src="/images/logo-fts.jpg"
                            alt="ФТС"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "contain",
                              borderRadius: "8px",
                              background: "white",
                              padding: "5px",
                              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                            }}
                          />
                          <div style={{ color: "white", marginBottom: "5px" }}>
                            <div
                              style={{ fontSize: "26px", fontWeight: "bold", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                            >
                              ООО «ФТС»
                            </div>
                            <div style={{ fontSize: "12px", opacity: "0.95" }}>
                              Разработка программного обеспечения и системная интеграция
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            right: "20mm",
                            bottom: "5mm",
                            color: "white",
                            textAlign: "right",
                            fontSize: "11px",
                          }}
                        >
                          <p>8 800 10 10 350</p>
                          <p style={{ opacity: "0.8" }}>sales@fts24.ru • fts24.ru</p>
                        </div>
                      </div>
                    </header>
                  )}

                  {/* Вариант: Волновой (с изображением) */}
                  {selectedVariant === "wave" && (
                    <header style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          position: "relative",
                          margin: "-15mm -20mm 15px -20mm",
                          height: "28mm",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="/abstract-wave-lines-pattern-red-flowing-curves-dar.jpg"
                          alt=""
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.7), transparent)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "20mm",
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <img
                            src="/images/logo-fts.jpg"
                            alt="ФТС"
                            style={{ width: "55px", height: "55px", objectFit: "contain" }}
                          />
                          <div>
                            <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>ООО «ФТС»</div>
                            <div style={{ fontSize: "11px", color: "#991b1b", fontWeight: "500" }}>
                              FUTURE TECHNOLOGY SOLUTIONS
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            right: "20mm",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "white",
                            textAlign: "right",
                            fontSize: "11px",
                          }}
                        >
                          <p style={{ fontWeight: "500" }}>8 800 10 10 350</p>
                          <p style={{ opacity: "0.7" }}>+7 (495) 10-10-350</p>
                          <p style={{ opacity: "0.7" }}>sales@fts24.ru</p>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "20px",
                          fontSize: "11px",
                          color: "#6b7280",
                        }}
                      >
                        <span>Разработчик отечественного ПО</span>
                        <span style={{ color: "#991b1b" }}>•</span>
                        <span>Реестр Минцифры России</span>
                        <span style={{ color: "#991b1b" }}>•</span>
                        <span>fts24.ru</span>
                      </div>
                    </header>
                  )}

                  {showContent && (
                    <>
                      {/* Реквизиты письма */}
                      <div style={{ marginBottom: "25px", fontSize: "13px", color: "#374151" }}>
                        <div style={{ display: "flex", gap: "50px" }}>
                          <div>
                            <p style={{ marginBottom: "8px" }}>
                              <span style={{ color: "#6b7280" }}>Исх. №</span>{" "}
                              <span
                                style={{
                                  borderBottom: "1px solid #d1d5db",
                                  display: "inline-block",
                                  minWidth: "120px",
                                }}
                              >
                                ________________
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#6b7280" }}>от</span>{" "}
                              <span
                                style={{
                                  borderBottom: "1px solid #d1d5db",
                                  display: "inline-block",
                                  minWidth: "120px",
                                }}
                              >
                                «____» ____________ 20__ г.
                              </span>
                            </p>
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ color: "#6b7280", marginBottom: "4px" }}>Кому:</p>
                            <div style={{ borderBottom: "1px solid #d1d5db", minHeight: "45px" }}></div>
                          </div>
                        </div>
                      </div>

                      {/* Основная область письма */}
                      <div style={{ flex: 1, minHeight: "140mm" }}>
                        <div style={{ fontSize: "13px", lineHeight: "1.6", color: "#1f2937" }}>
                          <p style={{ color: "#9ca3af", fontStyle: "italic" }}>[Текст письма]</p>
                        </div>
                      </div>

                      {/* Подпись */}
                      <div style={{ marginTop: "40px", marginBottom: "50px", fontSize: "13px", color: "#374151" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                          <div>
                            <p style={{ marginBottom: "30px" }}>С уважением,</p>
                            <div style={{ display: "flex", gap: "30px" }}>
                              <div>
                                <p style={{ color: "#6b7280", fontSize: "11px", marginBottom: "4px" }}>Должность</p>
                                <div
                                  style={{ borderBottom: "1px solid #d1d5db", minWidth: "150px", height: "20px" }}
                                ></div>
                              </div>
                              <div>
                                <p style={{ color: "#6b7280", fontSize: "11px", marginBottom: "4px" }}>Подпись</p>
                                <div
                                  style={{ borderBottom: "1px solid #d1d5db", minWidth: "100px", height: "20px" }}
                                ></div>
                              </div>
                              <div>
                                <p style={{ color: "#6b7280", fontSize: "11px", marginBottom: "4px" }}>Ф.И.О.</p>
                                <div
                                  style={{ borderBottom: "1px solid #d1d5db", minWidth: "150px", height: "20px" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div style={{ textAlign: "right", fontSize: "11px", color: "#9ca3af" }}>М.П.</div>
                        </div>
                      </div>
                    </>
                  )}

                  {!showContent && <div style={{ flex: 1 }} />}

                  {/* Нижний колонтитул */}
                  <footer style={{ marginTop: "auto", paddingTop: "15px", borderTop: "1px solid #e5e7eb" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "11px",
                        color: "#6b7280",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#991b1b", fontWeight: "600" }}>ООО «ФТС»</span>
                        <span>•</span>
                        <span style={{ color: "#1e3a5f" }}>fts24.ru</span>
                        <span>•</span>
                        <span>sales@fts24.ru</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span>8 800 10 10 350</span>
                        <span>•</span>
                        <span>+7 (495) 10-10-350</span>
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", marginTop: "4px", color: "#9ca3af" }}>
                      5-й проезд Марьиной Рощи, д. 15А, Москва • ИНН: 7715563903
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
