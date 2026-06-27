import { MapPin, Calendar, Maximize } from "lucide-react";

export function ProjectsPortfolio() {
  const projects = [
    {
      title: "Логистический комплекс класса «А»",
      location: "Московская область",
      area: "45 000 м²",
      year: "2023",
      image: "/portfolio_1.png",
      tags: ["Генподряд", "Металлокаркас", "Сэндвич-панели"]
    },
    {
      title: "Производственный цех завода",
      location: "Калужская область",
      area: "12 000 м²",
      year: "2022",
      image: "/portfolio_2.png",
      tags: ["Фундаменты", "Инженерные сети"]
    },
    {
      title: "Складской терминал",
      location: "Тульская область",
      area: "28 500 м²",
      year: "2024",
      image: "/portfolio_3.png",
      tags: ["СМР", "ОВиК", "НВК"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Портфолио</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Реализованные объекты</h3>
          <p className="text-slate-600">
            Опыт строительства масштабных промышленных объектов. От монтажа первых колонн до сдачи инженерных сетей в эксплуатацию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-slate-500 text-sm gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-slate-500 text-sm gap-2">
                    <Maximize className="w-4 h-4 text-blue-600" />
                    Площадь: <span className="text-slate-700 font-medium">{project.area}</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    Год сдачи: <span className="text-slate-700 font-medium">{project.year}</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
