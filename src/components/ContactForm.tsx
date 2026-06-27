"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, UploadCloud, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Сбор данных из формы
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      cloudLink: formData.get("cloudLink"),
      utm_source: new URLSearchParams(window.location.search).get("utm_source") || "direct"
    };

    try {
      // Отправка в наш Webhook/ERP (Next.js API Route)
      const res = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Произошла ошибка при отправке. Пожалуйста, позвоните нам.");
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacts" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Контакты */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Свяжитесь с нами</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Готовы обсудить ваш проект</h3>
            <p className="text-lg text-slate-600 mb-10">
              Пришлите техническое задание, проектную документацию или просто оставьте заявку. Наши инженеры ПТО свяжутся с вами для предварительного расчета СМР.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Многоканальный телефон</div>
                  <a href="tel:+78000000000" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    +7 (800) 000-00-00
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Тендерный отдел и расчеты</div>
                  <a href="mailto:project@diistroy.ru" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    project@diistroy.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Центральный офис</div>
                  <div className="text-lg font-bold text-slate-900">
                    г. Москва, БЦ "Индустрия", офис 404
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative">
            {isSuccess ? (
              <div className="absolute inset-0 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 border border-slate-200">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Заявка успешно отправлена!</h4>
                <p className="text-slate-600 mb-8">
                  Наш инженерный отдел уже получил ваши данные. Мы свяжемся с вами в течение 1 рабочего дня.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Отправить еще одну заявку
                </Button>
              </div>
            ) : null}

            <h4 className="text-2xl font-bold text-slate-900 mb-6">Отправить ТЗ на расчет</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">Ваше имя / Компания</Label>
                <Input id="name" name="name" required className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="ООО «ПромЗавод»" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">Телефон</Label>
                  <Input id="phone" name="phone" required className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="+7 (999) 000-00-00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">E-mail</Label>
                  <Input id="email" name="email" type="email" required className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="info@company.ru" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cloudLink" className="text-slate-700 flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-blue-600" /> 
                  Ссылка на облако (Яндекс.Диск, Mail.ru, Google)
                </Label>
                <Input id="cloudLink" name="cloudLink" className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="Ссылка на проектную документацию (если есть)" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700">Комментарий к проекту</Label>
                <Textarea id="message" name="message" className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 min-h-[120px]" placeholder="Опишите кратко объект строительства: площадь, назначение, где находится..." />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg shadow-sm"
              >
                {isSubmitting ? "ОТПРАВКА..." : "РАССЧИТАТЬ СТОИМОСТЬ СМР"}
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
