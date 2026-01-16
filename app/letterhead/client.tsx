"use client"

import type React from "react"

export default function LetterheadClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Скрываем навигацию при печати через специальный layout */}
      <div className="print:hidden">{/* Навигация будет скрыта при печати */}</div>
      <div className="letterhead-content">{children}</div>
      <style jsx global>{`
        @media print {
          /* Полностью скрываем навигацию и футер сайта */
          nav,
          .site-navigation,
          .site-footer,
          body > div > nav,
          body > div > footer:not(.letterhead-content footer) {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          .letterhead-content {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </>
  )
}
