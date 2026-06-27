import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, FileText, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Фоновое изображение с темным оверлеем (теперь картинка отлично видна) */}
      <div 
        className="absolute inset-0 z-0 opacity-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Генеральный подряд в промышленном строительстве
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Комплексное строительство <br />
            <span className="text-blue-500">промышленных и складских</span> объектов
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Полный цикл работ: от устройства фундаментов и монтажа металлоконструкций до ввода инженерных сетей в эксплуатацию. Точно в срок, по СНиП и стандартам качества.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-base shadow-sm border-0">
              ОТПРАВИТЬ ТЗ НА РАСЧЕТ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:!text-blue-400 hover:!bg-slate-900 bg-white/5 backdrop-blur-sm h-14 px-8 text-base">
              СМОТРЕТЬ ОБЪЕКТЫ
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Плашки с преимуществами */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 shadow-sm">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">10+ лет</div>
                <div className="text-slate-400 text-sm">Опыта работы</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">СРО и ISO</div>
                <div className="text-slate-400 text-sm">Все допуски к СМР</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
