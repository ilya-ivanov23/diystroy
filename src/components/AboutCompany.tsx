"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Truck, ZoomIn, X, Award, FileCheck2 } from "lucide-react";

interface Certificate {
  id: string;
  number: string;
  title: string;
  standard: string;
  scope: string;
  validUntil: string;
  image: string;
}

export function AboutCompany() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: "iso-construction",
      number: "№ RPS.RU.8849.23",
      title: "Строительство и реконструкция",
      standard: "ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)",
      scope: "Работы по строительству, реконструкции и капитальному ремонту, оказывающие влияние на безопасность объектов капитального строительства",
      validUntil: "23 августа 2026 г.",
      image: "/certificate_iso_construction.jpg",
    },
    {
      id: "iso-design",
      number: "№ RPS.RU.8850.23",
      title: "Проектная документация",
      standard: "ГОСТ Р ИСО 9001-2015 (ISO 9001:2015)",
      scope: "Работы по подготовке проектной документации для объектов капитального строительства",
      validUntil: "23 августа 2026 г.",
      image: "/certificate_iso_design.jpg",
    },
  ];

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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold px-3 py-2 bg-slate-900/70 backdrop-blur-sm rounded-lg border border-white/20">
                Строительство стенового ограждения и металлокаркаса цеха
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

        {/* Блоки: Техника и Сертификация */}
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

          {/* Реальные сертификаты ISO */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-2xl">Сертификация и лицензии</h4>
              </div>
              <p className="text-slate-600 mb-6">
                ООО «Ди Ай Строй» прошло добровольную сертификацию систем менеджмента качества в соответствии с ГОСТ Р ИСО 9001-2015 на строительство и проектирование.
              </p>
            </div>

            {/* Сетка двух реальных сертификатов */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {certificates.map((cert) => (
                <div 
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-3 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-3 bg-white border border-slate-200 shadow-sm">
                    <div 
                      className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${cert.image})` }}
                    />
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" /> Увеличить
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-[11px] font-bold text-blue-600 block leading-tight">{cert.standard}</span>
                    <span className="text-xs font-bold text-slate-800 block mt-1 line-clamp-1">{cert.title}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{cert.number}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2.5">
              <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Официальные бланки с регистрационными номерами «РосПромСертификация». Нажмите на любой сертификат для просмотра в полном разрешении.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Модальное окно просмотра сертификата */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Крупный скан */}
            <div className="md:w-3/5 bg-slate-100 flex items-center justify-center p-4 min-h-[420px] md:min-h-[560px]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-md border border-slate-200"
              />
            </div>

            {/* Описание сертификата */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-3 border border-blue-200">
                  {selectedCert.standard}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">
                  {selectedCert.title}
                </h3>

                <p className="text-xs font-bold text-slate-500 mb-4">
                  Рег. номер: <span className="text-slate-800">{selectedCert.number}</span>
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4 mb-4 text-xs">
                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Кому выдан</span>
                    <span className="font-semibold text-slate-800">ООО «Ди Ай Строй» (ИНН 9727043363)</span>
                  </div>

                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Орган по сертификации</span>
                    <span className="font-medium text-slate-700">ООО «ПрофСтройСтандарт» (г. Москва)</span>
                  </div>

                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Область действия</span>
                    <p className="font-medium text-slate-700 leading-relaxed mt-0.5">{selectedCert.scope}</p>
                  </div>

                  <div>
                    <span className="block text-slate-400 font-bold uppercase text-[10px]">Срок действия</span>
                    <span className="font-bold text-green-700">{selectedCert.validUntil}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  Открыть оригинал в новой вкладке
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
