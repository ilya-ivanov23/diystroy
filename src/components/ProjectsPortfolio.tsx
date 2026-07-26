"use client";

import { useState } from "react";
import { MapPin, Calendar, Maximize, X, ZoomIn, Layers, CheckCircle2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "completed" | "structure" | "earthworks";
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  details: string[];
}

export function ProjectsPortfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Логистический комплекс класса «А»",
      category: "completed",
      categoryLabel: "Готовый объект",
      location: "Московская область",
      area: "45 000 м²",
      year: "2023 - 2024",
      image: "/real_warehouse_facade.jpg",
      description: "Строительство современного высокотехнологичного распределительного центра с перегрузочными доками, административно-бытовым корпусом и парковой инфраструктурой.",
      tags: ["Генподряд", "Логистический хаб", "Сэндвич-панели", "Доклифты"],
      details: [
        "Монтаж фасадов из двухкамерных трехслойных сэндвич-панелей",
        "Установка 14 погрузочно-разгрузочных доков c доклевеллерами",
        "Устройство топинговых полов высокой ровности",
        "Ввод в эксплуатацию всех наружных и внутренних инженерных сетей"
      ]
    },
    {
      id: 2,
      title: "Монтаж стенового ограждения и каркаса цеха",
      category: "structure",
      categoryLabel: "Строительство каркаса",
      location: "Калужская область",
      area: "18 500 м²",
      year: "2023",
      image: "/real_metal_frame.jpg",
      description: "Возведение несущего каркаса здания цеха, установка колонн, связей и монтаж ограждающих конструкций из фасадных сэндвич-панелей.",
      tags: ["Монтаж СМР", "Сэндвич-панели", "Колонны", "Фасадные системы"],
      details: [
        "Монтаж несущих железобетонных и стальных колонн",
        "Крепление стеновых панелей c антикоррозийным защитным слоем",
        "Контроль геометрии конструкций высокоточным лазерным оборудованием",
        "Соблюдение жестких нормативов по теплоизоляции герметичных стыков"
      ]
    },
    {
      id: 3,
      title: "Монтаж несущих ферм и кровельных металлоконструкций",
      category: "structure",
      categoryLabel: "Металлоконструкции",
      location: "Тульская область",
      area: "24 000 м²",
      year: "2024",
      image: "/real_roof_trusses.jpg",
      description: "Высотный монтаж большепролетных стальных ферм, прогонов и профилированного настила под мягкую рулонную кровлю.",
      tags: ["Стальные фермы", "Большепролетные конструкции", "Высотные СМР"],
      details: [
        "Укрупнительная сборка стропильных и подстропильных ферм на земле",
        "Подъем и установка элементов с помощью большегрузных автокранов",
        "Ультразвуковой и визуально-измерительный контроль сварных соединений",
        "Огнезащитная обработка металлических элементов до R120"
      ]
    },
    {
      id: 4,
      title: "Внутренний контур логистического терминала",
      category: "structure",
      categoryLabel: "Внутренний контур",
      location: "Рязанская область",
      area: "32 000 м²",
      year: "2023",
      image: "/real_interior_construction.jpg",
      description: "Обустройство внутреннего пространства склада: устройство железобетонных колонн, монтаж инженерных трасс и подкрановых путей.",
      tags: ["Внутренние СМР", "Железобетон", "Подъемная техника", "Инженерия"],
      details: [
        "Бетонирование фундаментных стаканов и монтаж колонн 12м",
        "Использование коленчатых и ножничных подъемников для безаварийного монтажа",
        "Подготовка пролетов под устройство силовых монолитных полов",
        "Монтаж систем автоматического пожаротушения и вентиляции"
      ]
    },
    {
      id: 5,
      title: "Нулевой цикл и земляные работы",
      category: "earthworks",
      categoryLabel: "Земляные работы",
      location: "Московская область",
      area: "50 000 м²",
      year: "2024",
      image: "/real_earthworks_excavator.jpg",
      description: "Разработка котлованов, выемка и замещение грунта, вертикальная планировка участка собственным парком гусеничных экскаваторов LOVOL.",
      tags: ["Земляные работы", "Экскавация", "Нулевой цикл", "Собственная техника"],
      details: [
        "Выемка и перемещение более 65 000 м³ грунта",
        "Устройство песчано-щебеночного основания с послойным уплотнением",
        "Дренаж и водоотведение на этапе подготовки строительной площадки",
        "Работа собственной спецтехники без привлекаемых подрядчиков"
      ]
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-slate-100 relative">
      <div className="container mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Реальный опыт и объекты
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Реализованные <span className="text-blue-600">объекты и СМР</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Фотографии выполненных этапов строительно-монтажных работ на наших реальных объектах: от земляных работ и несущего каркаса до сдачи готовых логистических комплексов.
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {[
            { id: "all", label: "Все этапы и объекты" },
            { id: "completed", label: "Готовые комплексы" },
            { id: "structure", label: "Металлокаркас и СМР" },
            { id: "earthworks", label: "Земляные работы" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-blue-600/30 shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                
                {/* Категория на фото */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-md border border-white/40">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Иконка увеличения */}
                <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-blue-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 mb-4 text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Модальное окно просмотра фотографии и деталей */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Изображение в модалке */}
            <div className="md:w-1/2 min-h-[300px] md:min-h-[500px] relative bg-slate-900">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Контент модалки */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-3 border border-blue-200">
                  {selectedProject.categoryLabel}
                </span>
                
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Параметры */}
                <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase font-bold">Локация</span>
                    <span className="text-xs font-bold text-slate-800">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase font-bold">Площадь</span>
                    <span className="text-xs font-bold text-slate-800">{selectedProject.area}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase font-bold">Период</span>
                    <span className="text-xs font-bold text-slate-800">{selectedProject.year}</span>
                  </div>
                </div>

                {/* Список выполненных работ */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" /> Выполненные виды работ:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Теги */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
