import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export function AboutCompany() {
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
            <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/about_bg.png')" }}
              />
            </div>
            {/* Плашка HSE */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-slate-200 max-w-xs">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="font-bold text-slate-900 text-lg mb-2">Охрана труда (HSE)</h4>
              <p className="text-sm text-slate-600">
                Строгое соблюдение стандартов промышленной безопасности и zero-harm культура на каждом объекте.
              </p>
            </div>
          </div>
        </div>

        {/* Блоки: Техника и СРО */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Спецтехника */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <Truck className="w-10 h-10 text-blue-600 mb-6" />
            <h4 className="font-bold text-slate-900 text-2xl mb-4">Собственный парк спецтехники</h4>
            <p className="text-slate-600 mb-6">
              Мы располагаем собственной производственной базой и ресурсами, что гарантирует независимость от арендных компаний и соблюдение графика работ.
            </p>
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

          {/* Лицензии и СРО */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-blue-600 mb-6" />
            <h4 className="font-bold text-slate-900 text-2xl mb-4">Разрешительная документация</h4>
            <p className="text-slate-600 mb-6">
              Деятельность компании застрахована и лицензирована. Имеем все необходимые допуски для работы на особо опасных, технически сложных объектах.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden group cursor-pointer">
                  <span className="text-xs font-bold text-slate-400 group-hover:opacity-0 transition-opacity">Скан СРО</span>
                  {/* Заглушка сертификата */}
                  <div className="absolute inset-0 bg-[url('/certificate_bg.png')] bg-cover opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
