import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Building2, Layers, Pickaxe, Zap, Activity } from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      title: "Монтаж стальных и металлических конструкций",
      description: "Профессиональный монтаж металлоконструкций любой сложности и металлоемкости для промышленных зданий, ангаров и цехов. 100% контроль качества соединений.",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Строительство промышленных зданий и складов",
      description: "Возводим логистические центры и склады классов A, B, C. Полный цикл СМР: от земляных работ до устройства кровли с учетом специфики нагрузок.",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Сборные фундаменты и стабилизация грунтов",
      description: "Надежные нулевые циклы. Стабилизация слабых грунтов под высокие нагрузки. Устройство железобетонных фундаментов с точной геодезической разбивкой.",
      icon: <Pickaxe className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Монтаж сэндвич-панелей",
      description: "Устройство ограждающих конструкций. Гарантируем отсутствие «мостиков холода», герметичность стыков и высокие показатели теплоизоляции.",
      icon: <Layers className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Внутренние сети (ОВиК, ВК, ЭОМ)",
      description: "Монтаж систем жизнеобеспечения: вентиляция, кондиционирование, внутренний водопровод, канализация и силовое электрооборудование.",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Наружные инженерные сети (НВК)",
      description: "Прокладка магистралей водоснабжения и водоотведения. Соблюдение всех технических регламентов и СНиП при земляных и монтажных работах.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Наши компетенции</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Комплексные строительные решения</h3>
          <p className="text-slate-600">
            Мы берем на себя управление всем циклом строительно-монтажных работ, исключая простои из-за несогласованности разных подрядчиков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-50 border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
