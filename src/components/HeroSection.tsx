import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, FileText, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Фоновое изображение со светлым оверлеем для видимости картинки без "темной штуки" */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Генеральный подряд в промышленном строительстве
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight drop-shadow-sm">
            Комплексное строительство <br />
            <span className="text-blue-600">промышленных и складских</span> объектов
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed font-medium">
            Полный цикл работ: от устройства фундаментов и монтажа металлоконструкций до ввода инженерных сетей в эксплуатацию. Точно в срок, по СНиП и стандартам качества.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-base shadow-md border-0">
              ОТПРАВИТЬ ТЗ НА РАСЧЕТ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:!text-blue-700 hover:!bg-white bg-white/60 backdrop-blur-md h-14 px-8 text-base shadow-sm">
              СМОТРЕТЬ ОБЪЕКТЫ
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Плашки с преимуществами */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-200/60">
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-xl">10+ лет</div>
                <div className="text-slate-500 text-sm font-medium">Опыта работы</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-xl">СРО и ISO</div>
                <div className="text-slate-500 text-sm font-medium">Все допуски к СМР</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
