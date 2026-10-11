"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, UploadCloud, CheckCircle2, FileText, X, Paperclip } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 50 * 1024 * 1024) {
        alert("Размер файла не должен превышать 50 МБ. Для больших файлов укажите ссылку на облако.");
        return;
      }
      setSelectedFile(file);
    }
  }

  function handleRemoveFile() {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    if (selectedFile) {
      formData.set("file", selectedFile);
    }
    
    formData.set("utm_source", new URLSearchParams(window.location.search).get("utm_source") || "direct");

    try {
      const res = await fetch("/api/webhook", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const result = await res.json();
        setSubmittedId(result.leadId || `ДИ-${Math.floor(100000 + Math.random() * 900000)}`);
        setIsSuccess(true);
        formElement.reset();
        setSelectedFile(null);
      } else {
        alert("Произошла ошибка при отправке. Пожалуйста, свяжитесь с нами по телефону или email.");
      }
    } catch (error) {
      alert("Ошибка сети. Пожалуйста, проверьте подключение или позвоните нам.");
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
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Пришлите техническое задание, проектную документацию (АР, КР, КМ) или просто оставьте контакты. Наши инженеры ПТО свяжутся с вами для предварительного расчета сметы СМР.
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
                  <a href="mailto:Infodistroy@yandex.ru" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    Infodistroy@yandex.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Юридический адрес и офис</div>
                  <div className="text-base font-bold text-slate-900">
                    117186, г. Москва, ул. Нагорная, д. 24, к. 9, пом. 1/1
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    ООО «Ди Ай Строй» • ИНН 9727043363
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative">
            {isSuccess ? (
              <div className="absolute inset-0 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 border border-slate-200">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-700 border border-blue-200 mb-3">
                  Номер заявки: {submittedId}
                </span>

                <h4 className="text-2xl font-bold text-slate-900 mb-3">Заявка успешно отправлена!</h4>
                <p className="text-slate-600 mb-6 max-w-md text-sm leading-relaxed">
                  Данные зарегистрированы в системе. Инженерный отдел ООО «Ди Ай Строй» проведет предварительную оценку и свяжется с вами в течение 1 рабочего дня.
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
                <Label htmlFor="name" className="text-slate-700">Ваше имя / Компания *</Label>
                <Input id="name" name="name" required className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="ООО «ПромЗавод» или Иван Иванов" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">Телефон *</Label>
                  <Input id="phone" name="phone" required className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="+7 (999) 000-00-00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">E-mail *</Label>
                  <Input id="email" name="email" type="email" required className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="info@company.ru" />
                </div>
              </div>

              {/* Поле загрузки файла */}
              <div className="space-y-2">
                <Label className="text-slate-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Paperclip className="w-4 h-4 text-blue-600" /> Прикрепить файл ТЗ / проекта
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">до 50 МБ</span>
                </Label>
                
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx,.zip,.rar,.png,.jpg"
                  className="hidden" 
                  id="file-upload"
                />

                {!selectedFile ? (
                  <label 
                    htmlFor="file-upload"
                    className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 hover:border-blue-500 bg-white rounded-xl p-4 cursor-pointer transition-colors text-slate-600 hover:text-blue-600 text-sm font-medium"
                  >
                    <UploadCloud className="w-5 h-5 text-slate-400" />
                    <span>Выберите файл (PDF, DWG, DOCX, ZIP)</span>
                  </label>
                ) : (
                  <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-sm">
                    <div className="flex items-center gap-2.5 truncate">
                      <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="font-semibold text-slate-900 truncate">{selectedFile.name}</span>
                      <span className="text-xs text-slate-500 shrink-0">
                        ({(selectedFile.size / (1024 * 1024)).toFixed(2)} МБ)
                      </span>
                    </div>
                    <button 
                      type="button" 
                      onClick={handleRemoveFile}
                      className="p-1 hover:bg-blue-100 rounded-full text-slate-500 hover:text-slate-800 transition-colors"
                      title="Удалить файл"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Поле ссылки на облако */}
              <div className="space-y-2">
                <Label htmlFor="cloudLink" className="text-slate-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <UploadCloud className="w-4 h-4 text-blue-600" /> Или ссылка на диск
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">Яндекс.Диск, Google, Mail.ru</span>
                </Label>
                <Input id="cloudLink" name="cloudLink" className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 h-12" placeholder="https://disk.yandex.ru/d/..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700">Комментарий к объекту</Label>
                <Textarea id="message" name="message" className="bg-white border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-slate-900 min-h-[100px]" placeholder="Опишите кратко объект строительства: площадь, назначение, где находится..." />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg shadow-sm"
              >
                {isSubmitting ? "ОТПРАВКА..." : "РАССЧИТАТЬ СТОИМОСТЬ СМР"}
              </Button>
              
              <p className="text-xs text-slate-500 text-center leading-relaxed mt-4">
                Нажимая кнопку, вы подтверждаете свое согласие с{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Политикой конфиденциальности
                </a>
                ,{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Пользовательским соглашением
                </a>{" "}
                и даете{" "}
                <a href="/consent" className="text-blue-600 hover:underline">
                  Согласие на обработку персональных данных
                </a>{" "}
                в соответствии с 152-ФЗ.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
