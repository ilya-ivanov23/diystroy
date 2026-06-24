import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export function AboutCompany() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        
        {/* Главный блок "О компании" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-3">О компании ДиАйСтрой</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Инженерная экспертиза и ресурсы для генподряда</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
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
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/about_bg.png')" }}
              />
            </div>
            {/* Плашка HSE */}
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 max-w-xs">
              <ShieldCheck className="w-10 h-10 text-green-500 mb-4" />
              <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Охрана труда (HSE)</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Строгое соблюдение стандартов промышленной безопасности и zero-harm культура на каждом объекте.
              </p>
            </div>
          </div>
        </div>

        {/* Блоки: Техника и СРО */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Спецтехника */}
          <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Truck className="w-10 h-10 text-orange-500 mb-6" />
            <h4 className="font-bold text-zinc-900 dark:text-white text-2xl mb-4">Собственный парк спецтехники</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Мы располагаем собственной производственной базой и ресурсами, что гарантирует независимость от арендных компаний и соблюдение графика работ.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 text-center">
                <span className="block font-bold text-xl text-zinc-900 dark:text-white">12</span>
                <span className="text-sm text-zinc-500">Автокранов</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 text-center">
                <span className="block font-bold text-xl text-zinc-900 dark:text-white">8</span>
                <span className="text-sm text-zinc-500">Экскаваторов</span>
              </div>
            </div>
          </div>

          {/* Лицензии и СРО */}
          <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
            <h4 className="font-bold text-zinc-900 dark:text-white text-2xl mb-4">Разрешительная документация</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Деятельность компании застрахована и лицензирована. Имеем все необходимые допуски для работы на особо опасных, технически сложных объектах.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-white dark:bg-zinc-800 rounded flex items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-sm relative overflow-hidden group cursor-pointer">
                  <span className="text-xs font-bold text-zinc-400 group-hover:opacity-0 transition-opacity">Скан СРО</span>
                  {/* Заглушка сертификата */}
                  <div className="absolute inset-0 bg-[url('/certificate_bg.png')] bg-cover opacity-0 group-hover:opacity-100 transition-opacity mix-blend-luminosity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
