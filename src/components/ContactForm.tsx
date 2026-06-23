"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Собираем UTM метки из URL (простая реализация для примера)
    let utm = {};
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      utm = {
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
      };
    }

    try {
      const res = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utm }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacts" className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Контактная информация */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-3">Контакты</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Готовы обсудить ваш проект?</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Свяжитесь с нами для консультации или отправьте проектную документацию для предварительного расчета стоимости и сроков реализации (ТЗ).
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center shrink-0 text-orange-500">
                  <span className="font-bold text-xl">📍</span>
                </div>
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white text-lg">Центральный офис</div>
                  <div className="text-zinc-600 dark:text-zinc-400">г. Москва, ул. Промышленная, д. 1 (Пример)</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center shrink-0 text-orange-500">
                  <span className="font-bold text-xl">📞</span>
                </div>
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white text-lg">Телефон</div>
                  <a href="tel:+78000000000" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors">+7 (800) 000-00-00</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center shrink-0 text-orange-500">
                  <span className="font-bold text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white text-lg">Email для ТЗ</div>
                  <a href="mailto:project@diistroy.ru" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors">project@diistroy.ru</a>
                </div>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-zinc-50 dark:bg-zinc-950 p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
            {status === "success" ? (
              <div className="absolute inset-0 bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur z-10 flex flex-col items-center justify-center text-center p-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Заявка отправлена</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">Наш инженерный отдел свяжется с вами в течение рабочего дня.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="border-zinc-300 dark:border-zinc-700">Отправить еще</Button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" name="name" required placeholder="Иван Иванов" className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" name="company" placeholder="ООО ИнвестСтрой" className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+7 (___) ___-__-__" className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="example@domain.com" className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cloud_link" className="flex items-center gap-2">
                  Ссылка на проект <span className="text-zinc-400 font-normal text-xs">(Яндекс.Диск, Google Drive, Mail.ru)</span>
                </Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
                  <Input id="cloud_link" name="cloud_link" placeholder="Вставьте ссылку на скачивание архива/ТЗ" className="pl-10 bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700" />
                </div>
                <div className="flex items-start gap-2 mt-2 text-xs text-zinc-500">
                  <AlertCircle className="w-4 h-4 shrink-0 text-orange-500" />
                  <span>Для файлов объемом более 50 Мб (схемы DWG, тяжелые PDF) просим использовать облачные хранилища.</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Комментарий или задача</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Опишите масштаб работ или специфику объекта..." className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 resize-none" />
              </div>

              <Button type="submit" disabled={status === "loading"} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 text-base">
                {status === "loading" ? "ОТПРАВКА..." : "ОТПРАВИТЬ НА ОЦЕНКУ"}
                {!status && <Send className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
