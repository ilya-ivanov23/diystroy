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
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Портфолио</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Реализованные объекты</h3>
          <p className="text-zinc-400">
            Опыт строительства масштабных промышленных объектов. От монтажа первых колонн до сдачи инженерных сетей в эксплуатацию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">{project.title}</h4>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-zinc-400 text-sm gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-zinc-400 text-sm gap-2">
                    <Maximize className="w-4 h-4 text-orange-500" />
                    Площадь: <span className="text-white font-medium">{project.area}</span>
                  </div>
                  <div className="flex items-center text-zinc-400 text-sm gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    Год сдачи: <span className="text-white font-medium">{project.year}</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium text-orange-400 bg-orange-400/10 rounded">
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
