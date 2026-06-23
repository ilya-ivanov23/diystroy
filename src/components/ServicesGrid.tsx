import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Building2, Layers, Pickaxe, Zap, Activity } from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      title: "Монтаж стальных и металлических конструкций",
      description: "Профессиональный монтаж металлоконструкций любой сложности и металлоемкости для промышленных зданий, ангаров и цехов. 100% контроль качества соединений.",
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Строительство промышленных зданий и складов",
      description: "Возводим логистические центры и склады классов A, B, C. Полный цикл СМР: от земляных работ до устройства кровли с учетом специфики нагрузок.",
      icon: <Building2 className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Сборные фундаменты и стабилизация грунтов",
      description: "Надежные нулевые циклы. Стабилизация слабых грунтов под высокие нагрузки. Устройство железобетонных фундаментов с точной геодезической разбивкой.",
      icon: <Pickaxe className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Монтаж сэндвич-панелей",
      description: "Устройство ограждающих конструкций. Гарантируем отсутствие «мостиков холода», герметичность стыков и высокие показатели теплоизоляции.",
      icon: <Layers className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Внутренние сети (ОВиК, ВК, ЭОМ)",
      description: "Монтаж систем жизнеобеспечения: вентиляция, кондиционирование, внутренний водопровод, канализация и силовое электрооборудование.",
      icon: <Activity className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Наружные инженерные сети (НВК)",
      description: "Прокладка магистралей водоснабжения и водоотведения. Соблюдение всех технических регламентов и СНиП при земляных и монтажных работах.",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-3">Наши компетенции</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Комплексные строительные решения</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Мы берем на себя управление всем циклом строительно-монтажных работ, исключая простои из-за несогласованности разных подрядчиков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-colors group">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-orange-50 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
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
