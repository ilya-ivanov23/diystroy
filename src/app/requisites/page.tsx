"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, ArrowLeft, Copy, Check, FileCheck, Mail, MapPin } from "lucide-react";

export default function RequisitesPage() {
  const [copied, setCopied] = useState(false);

  const requisitesText = `Карточка предприятия ООО «Ди Ай Строй»
Полное наименование: Общество с ограниченной ответственностью «Ди Ай Строй»
Сокращенное наименование: ООО «Ди Ай Строй»
ИНН: 9727043363
Юридический адрес: 117186, г. Москва, вн.тер.г. муниципальный округ Котловка, ул. Нагорная, д. 24, к. 9, помещ. 1/1
Электронная почта: Infodistroy@yandex.ru
Сертификаты качества: ГОСТ Р ИСО 9001-2015 № RPS.RU.8849.23, № RPS.RU.8850.23`;

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
                Реквизиты организации
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

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                Карточка предприятия
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
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
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Электронная почта</span>
                  <a href="mailto:Infodistroy@yandex.ru" className="font-bold text-slate-900 hover:text-blue-600 underline text-base">
                    Infodistroy@yandex.ru
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 md:col-span-2">
                  <span className="block text-xs font-bold uppercase text-slate-400 mb-1">Юридический адрес</span>
                  <span className="font-bold text-slate-900 text-base">
                    117186, г. Москва, вн.тер.г. муниципальный округ Котловка, ул. Нагорная, д. 24, к. 9, помещ. 1/1
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" /> Действующая сертификация качества
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-600 text-white inline-block mb-1">
                      № RPS.RU.8849.23
                    </span>
                    <h3 className="font-bold text-slate-900">ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Работы по строительству, реконструкции и капитальному ремонту ОПО
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                    Действителен до 23.08.2026
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-600 text-white inline-block mb-1">
                      № RPS.RU.8850.23
                    </span>
                    <h3 className="font-bold text-slate-900">ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Работы по подготовке проектной документации для объектов капстроительства
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                    Действителен до 23.08.2026
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-semibold text-slate-800">Информация для бухгалтерии и тендерных комитетов:</p>
              <p>
                Для запроса полного комплекта учредительных документов, выписки из ЕГРЮЛ, карточки с банковскими реквизитами для заключения договора подряда направьте запрос на{" "}
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
