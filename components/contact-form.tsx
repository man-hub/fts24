"use client"
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    message: "",
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      toast({
        title: "Требуется согласие",
        description: "Пожалуйста, дайте согласие на обработку персональных данных",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendContactEmail({
        name: formData.name,
        company: formData.company,
        contact: formData.contact,
        message: formData.message,
      })

      if (result.success) {
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время",
        })

        setFormData({
          name: "",
          company: "",
          contact: "",
          message: "",
          consent: false,
        })
      } else {
        toast({
          title: "Ошибка отправки",
          description: "Попробуйте позже или свяжитесь с нами по телефону",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или свяжитесь с нами по телефону",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Иван Иванов"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Компания</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="ООО «Название»"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">Телефон или e-mail *</Label>
        <Input
          id="contact"
          required
          type="text"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          placeholder="+7 (900) 000-00-00 или email@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Краткое описание задачи</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Расскажите о вашем проекте..."
          rows={5}
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
          className="mt-1 shrink-0"
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed flex-1">
          <a
            href="https://fts24.ru/files/docs/personal-politics.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline"
          >
            Я согласен с политикой обработки персональных данных и даю согласие на их обработку
          </a>
        </Label>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  )
}
