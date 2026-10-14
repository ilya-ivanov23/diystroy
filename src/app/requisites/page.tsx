"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, ArrowLeft, Copy, Check, FileCheck, FileDown, ShieldCheck, Award } from "lucide-react";

export default function RequisitesPage() {
  const [copied, setCopied] = useState(false);

  const requisitesText = `Карточка предприятия ООО «Ди Ай Строй»
Полное наименование: Общество с ограниченной ответственностью «Ди Ай Строй»
Сокращенное наименование: ООО «Ди Ай Строй»
ИНН: 9727043363
ОГРН: 1237700536897
Юридический адрес: 117186, Россия, г. Москва, ВН.ТЕР.Г. муниципальный округ Котловка, ул. Нагорная, д. 26, к. 1, помещ. 2/4 (доп. офис: ул. Нагорная, д. 24, к. 9)
Электронная почта: Infodistroy@yandex.ru

Членство в СРО:
1. Строительство (НОСТРОЙ): Ассоциация «СИЛА» (СРО-С-282-21062017), рег. № 2453 от 23.08.2023. Уровень ответственности: до 90 000 000 руб. Страхование: ПАО «САК «ЭНЕРГОГАРАНТ».
2. Проектирование (НОПРИЗ): Союз «ПроЭк» (СРО-П-185-16052013), рег. № П-185-009727043363-2325 от 23.08.2023. Уровень ответственности: до 50 000 000 руб.

Сертификация менеджмента качества:
- ГОСТ Р ИСО 9001-2015 (ISO 9001:2015) № RPS.RU.8849.23 (Строительство и реконструкция)
- ГОСТ Р ИСО 9001-2015 (ISO 9001:2015) № RPS.RU.8850.23 (Проектная документация)`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(requisitesText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" /> Вернуться на главную
              </Link>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Юридические данные</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Реквизиты и выписки СРО
              </h1>
            </div>

            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-blue-500 text-slate-800 font-bold text-sm shadow-sm transition-all self-start sm:self-auto cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700">Реквизиты скопированы!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-blue-600" />
                  <span>Скопировать реквизиты</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-10">
            
            {/* Карточка предприятия */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                Карточка предприятия
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Полное наименование</span>
                  <span className="font-bold text-slate-900 text-base">Общество с ограниченной ответственностью «Ди Ай Строй»</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Сокращенное наименование</span>
                  <span className="font-bold text-slate-900 text-base">ООО «Ди Ай Строй»</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">ИНН</span>
                  <span className="font-bold text-blue-600 text-lg tracking-wider">9727043363</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">ОГРН</span>
                  <span className="font-bold text-slate-900 text-lg tracking-wider">1237700536897</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Электронная почта</span>
                  <a href="mailto:Infodistroy@yandex.ru" className="font-bold text-slate-900 hover:text-blue-600 underline text-base">
                    Infodistroy@yandex.ru
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Статус организации</span>
                  <span className="font-bold text-emerald-700 text-base flex items-center gap-1.5 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-600" /> Действующее предприятие
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 md:col-span-2">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Адрес местонахождения</span>
                  <span className="font-bold text-slate-900 text-sm md:text-base">
                    117186, Россия, Москва, ВН.ТЕР.Г. муниципальный округ Котловка, ул. Нагорная, д. 26, к. 1, помещ. 2/4
                  </span>
                </div>
              </div>
            </div>

            {/* Официальные выписки СРО */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" /> Членство в саморегулируемых организациях (СРО)
              </h2>

              <div className="space-y-4">
                {/* СРО Строительство */}
                <div className="p-5 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/60 to-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-600 text-white">
                        НОСТРОЙ • Строительство
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        № СРО-9727043363-20260804-0939
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      Ассоциация «Строительный Инженерно-Логистический Альянс» (Ассоциация «СИЛА»)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      Рег. номер записи: <strong>СРО-С-282-21062017</strong>. Член СРО с 23.08.2023 (рег. № 2453). 
                      <strong> Первый уровень ответственности КФ ВВ (до 90 000 000 руб.)</strong>. 
                      Гражданская ответственность застрахована в ПАО «САК «ЭНЕРГОГАРАНТ» (полис № 251100-021-000912 на 7,5 млн ₽).
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                    <a
                      href="/vypiska_sro_nostroy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      <FileDown className="w-4 h-4" /> Скачать выписку (PDF)
                    </a>
                    <a
                      href="/vypiska_sro_nostroy.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Посмотреть скан
                    </a>
                  </div>
                </div>

                {/* СРО Проектирование */}
                <div className="p-5 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50/60 to-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-600 text-white">
                        НОПРИЗ • Проектирование
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        № 9727043363-20260821-1820
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      Саморегулируемая организация Союз проектных организаций «ПроЭк»
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      Рег. номер записи: <strong>СРО-П-185-16052013</strong>. Член СРО с 23.08.2023 (рег. № П-185-009727043363-2325). 
                      <strong> Второй уровень ответственности КФ ВВ (до 50 000 000 руб.)</strong> на подготовку проектной документации объектов капитального строительства.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                    <a
                      href="/vypiska_sro_nopriz.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      <FileDown className="w-4 h-4" /> Скачать выписку (PDF)
                    </a>
                    <a
                      href="/vypiska_sro_nopriz.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Посмотреть скан
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Сертификаты ISO */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" /> Сертификация менеджмента качества ISO 9001
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white inline-block mb-2">
                      № RPS.RU.8849.23
                    </span>
                    <h3 className="font-bold text-slate-900">ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Работы по строительству, реконструкции и капитальному ремонту ОПО
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold">Действителен до 23.08.2026</span>
                    <a href="/certificate_iso_construction.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                      Скан сертификата
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white inline-block mb-2">
                      № RPS.RU.8850.23
                    </span>
                    <h3 className="font-bold text-slate-900">ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Работы по подготовке проектной документации для объектов капстроительства
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold">Действителен до 23.08.2026</span>
                    <a href="/certificate_iso_design.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                      Скан сертификата
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-semibold text-slate-800">Информация для тендерных комитетов и заказчиков:</p>
              <p>
                Для запроса полного комплекта учредительных документов, бухгалтерской отчетности и карточки с банковскими реквизитами для заключения договора генерального подряда направьте запрос на{" "}
                <a href="mailto:Infodistroy@yandex.ru" className="text-blue-600 underline font-bold">
                  Infodistroy@yandex.ru
                </a>.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 text-sm transition-colors shadow-sm"
            >
              Вернуться на главную страницу
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
