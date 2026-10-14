"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Truck, ZoomIn, X, Award, FileCheck2, FileDown, ExternalLink } from "lucide-react";

interface DocumentItem {
  id: string;
  category: "sro" | "iso";
  categoryLabel: string;
  badgeColor: string;
  number: string;
  title: string;
  standardOrOrg: string;
  authority: string;
  scope: string;
  responsibilityLevel?: string;
  insurance?: string;
  validUntil: string;
  image: string;
  pdfUrl?: string;
}

export function AboutCompany() {
  const [activeDocTab, setActiveDocTab] = useState<"all" | "sro" | "iso">("all");
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  const documents: DocumentItem[] = [
    {
      id: "sro-nostroy-construction",
      category: "sro",
      categoryLabel: "Выписка СРО (Строительство)",
      badgeColor: "bg-blue-600 text-white",
      number: "№ СРО-9727043363-20260804-0939",
      title: "Строительство, реконструкция и капремонт",
      standardOrOrg: "НОСТРОЙ • Ассоциация «СИЛА»",
      authority: "Ассоциация строительных организаций «Строительный Инженерно-Логистический Альянс» (СРО-С-282-21062017)",
      scope: "Право осуществления строительства, реконструкции, капитального ремонта и сноса объектов капитального строительства (рег. № 2453, дата вступления: 23.08.2023).",
      responsibilityLevel: "Первый уровень ответственности КФ ВВ (до 90 000 000 рублей по одному договору)",
      insurance: "ПАО «САК «ЭНЕРГОГАРАНТ» (№ 251100-021-000912 на 7 500 000 руб. до 29.09.2026)",
      validUntil: "Действует (член СРО с 23.08.2023)",
      image: "/vypiska_sro_nostroy.png",
      pdfUrl: "/vypiska_sro_nostroy.pdf",
    },
    {
      id: "sro-nopriz-design",
      category: "sro",
      categoryLabel: "Выписка СРО (Проектирование)",
      badgeColor: "bg-indigo-600 text-white",
      number: "№ 9727043363-20260821-1820",
      title: "Архитектурно-строительное проектирование",
      standardOrOrg: "НОПРИЗ • Союз «ПроЭк»",
      authority: "Саморегулируемая организация Союз проектных организаций «ПроЭк» (СРО-П-185-16052013)",
      scope: "Право осуществлять подготовку проектной документации для объектов капитального строительства (рег. № П-185-009727043363-2325, дата вступления: 23.08.2023).",
      responsibilityLevel: "Второй уровень ответственности КФ ВВ (до 50 000 000 рублей по одному договору)",
      validUntil: "Действует (член СРО с 23.08.2023)",
      image: "/vypiska_sro_nopriz.png",
      pdfUrl: "/vypiska_sro_nopriz.pdf",
    },
    {
      id: "iso-construction",
      category: "iso",
      categoryLabel: "Сертификат качества ISO",
      badgeColor: "bg-emerald-600 text-white",
      number: "№ RPS.RU.8849.23",
      title: "СМР и безопасность капстроительства",
      standardOrOrg: "ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)",
      authority: "Орган по сертификации ООО «ПрофСтройСтандарт» (г. Москва)",
      scope: "Работы по строительству, реконструкции и капитальному ремонту, оказывающие влияние на безопасность объектов капитального строительства.",
      validUntil: "Действителен до 23 августа 2026 г.",
      image: "/certificate_iso_construction.jpg",
    },
    {
      id: "iso-design",
      category: "iso",
      categoryLabel: "Сертификат качества ISO",
      badgeColor: "bg-emerald-600 text-white",
      number: "№ RPS.RU.8850.23",
      title: "Подготовка проектной документации",
      standardOrOrg: "ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)",
      authority: "Орган по сертификации ООО «ПрофСтройСтандарт» (г. Москва)",
      scope: "Работы по подготовке проектной документации для объектов капитального строительства.",
      validUntil: "Действителен до 23 августа 2026 г.",
      image: "/certificate_iso_design.jpg",
    },
  ];

  const filteredDocs = activeDocTab === "all" 
    ? documents 
    : documents.filter((doc) => doc.category === activeDocTab);

  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        
        {/* Главный блок "О компании" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">О компании ДиАйСтрой</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Инженерная экспертиза и ресурсы для генподряда</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Мы — генподрядная организация, специализирующаяся на промышленном строительстве. Наш подход основан на жестком контроле качества СМР, соблюдении сроков и внедрении передовых инженерных решений на этапе производства работ.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Руководящий состав с опытом реализации крупных промышленных проектов",
                "Детальное планирование графиков производства работ (ГПР)",
                "Многоуровневый внутренний контроль качества и ведение исполнительной документации",
                "Выполнение полного контура работ собственными силами"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative shadow-md group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/real_metal_frame.jpg')" }}
              />
              {/* Компактный бейдж в правом нижнем углу — не перекрывается плашкой HSE */}
              <div className="absolute bottom-4 right-4 text-white text-xs font-semibold px-3.5 py-2 bg-slate-900/85 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                Монтаж металлокаркаса цеха
              </div>
            </div>
            
            {/* Дополнительная мини-плашка со стальными фермами */}
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/real_roof_trusses.jpg')" }}
              />
            </div>

            {/* Плашка HSE */}
            <div className="absolute -bottom-8 -left-6 bg-white p-5 rounded-xl shadow-xl border border-slate-200 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-7 h-7 text-green-600 shrink-0" />
                <h4 className="font-bold text-slate-900 text-base">Охрана труда (HSE)</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Строгое соблюдение стандартов промышленной безопасности и zero-harm культура на каждом объекте.
              </p>
            </div>
          </div>
        </div>

        {/* Блоки: Техника и Сертификация / СРО */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Спецтехника */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-2xl">Собственный парк спецтехники</h4>
              </div>
              <p className="text-slate-600 mb-6">
                Мы располагаем собственной производственной базой и тяжелой строительной техникой, гарантируя проведение работ точно по графику.
              </p>
            </div>

            {/* Фото техники и метрики */}
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-[16/9] border border-slate-200 shadow-inner group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/real_earthworks_excavator.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-xs font-bold px-2 py-1 bg-blue-600 rounded">Земляные работы</span>
                <p className="text-xs font-medium text-slate-200 mt-1">Тяжелые гусеничные экскаваторы в работе на объекте</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="block font-bold text-2xl text-blue-700">12</span>
                <span className="text-sm text-slate-600 font-medium">Автокранов</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="block font-bold text-2xl text-blue-700">8</span>
                <span className="text-sm text-slate-600 font-medium">Экскаваторов</span>
              </div>
            </div>
          </div>

          {/* Разрешительная документация: СРО и ISO */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-2xl">Допуски СРО и лицензии</h4>
              </div>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                ООО «Ди Ай Строй» является действующим членом СРО в строительстве (НОСТРОЙ, компенсационный фонд до 90 млн ₽) и проектировании (НОПРИЗ), а также имеет сертификаты менеджмента качества ISO 9001:2015.
              </p>

              {/* Табы категорий документов */}
              <div className="flex gap-2 mb-4">
                {[
                  { id: "all", label: "Все (4)" },
                  { id: "sro", label: "Выписки СРО (2)" },
                  { id: "iso", label: "Сертификаты ISO (2)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDocTab(tab.id as "all" | "sro" | "iso")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeDocTab === tab.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Сетка документов */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {filteredDocs.map((doc) => (
                <div 
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-2.5 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-2 bg-white border border-slate-200 shadow-sm">
                    <div 
                      className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${doc.image})` }}
                    />
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                    
                    {/* Метка на фото */}
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold shadow-sm ${doc.badgeColor}`}>
                        {doc.category === "sro" ? "СРО" : "ISO 9001"}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" /> Открыть
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[11px] font-bold text-blue-600 block leading-tight truncate">
                      {doc.standardOrOrg}
                    </span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5 line-clamp-1">
                      {doc.title}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 truncate font-mono">
                      {doc.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2.5">
              <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Официальные выписки из единых реестров НОСТРОЙ и НОПРИЗ с квалифицированной электронной подписью. Нажмите на документ для подробного просмотра или скачивания PDF.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Модальное окно просмотра документов */}
      {selectedDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedDoc(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Крупный скан документа */}
            <div className="md:w-3/5 bg-slate-100 flex items-center justify-center p-4 min-h-[360px] md:min-h-[560px]">
              <img 
                src={selectedDoc.image} 
                alt={selectedDoc.title} 
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-md border border-slate-200"
              />
            </div>

            {/* Описание документа и юридические реквизиты */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${selectedDoc.badgeColor}`}>
                  {selectedDoc.categoryLabel}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">
                  {selectedDoc.title}
                </h3>

                <p className="text-xs font-bold text-slate-500 mb-4">
                  Номер документа: <span className="text-slate-800 font-mono">{selectedDoc.number}</span>
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4 mb-4 text-xs">
                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Кому выдан</span>
                    <span className="font-semibold text-slate-800">ООО «Ди Ай Строй» (ИНН 9727043363)</span>
                  </div>

                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Кем выдан / СРО</span>
                    <span className="font-medium text-slate-700 leading-snug">{selectedDoc.authority}</span>
                  </div>

                  {selectedDoc.responsibilityLevel && (
                    <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                      <span className="block text-blue-800 font-bold uppercase text-[10px] mb-0.5">Уровень ответственности</span>
                      <span className="font-semibold text-blue-900">{selectedDoc.responsibilityLevel}</span>
                    </div>
                  )}

                  {selectedDoc.insurance && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                      <span className="block text-emerald-800 font-bold uppercase text-[10px] mb-0.5">Страхование ГО</span>
                      <span className="font-medium text-emerald-950">{selectedDoc.insurance}</span>
                    </div>
                  )}

                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Область действия</span>
                    <p className="font-medium text-slate-700 leading-relaxed mt-0.5">{selectedDoc.scope}</p>
                  </div>

                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Статус</span>
                    <span className="font-bold text-emerald-700">{selectedDoc.validUntil}</span>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                {selectedDoc.pdfUrl ? (
                  <a
                    href={selectedDoc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <FileDown className="w-4 h-4" /> Скачать официальную выписку (PDF)
                  </a>
                ) : null}

                <a
                  href={selectedDoc.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Открыть скан в новой вкладке
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
