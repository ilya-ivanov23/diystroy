import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользовательское соглашение | ООО «Ди Ай Строй»",
  description: "Пользовательское соглашение и условия использования официального сайта строительной компании ООО «Ди Ай Строй».",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Вернуться на главную
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Юридический регламент</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Пользовательское соглашение
            </h1>
            <p className="text-sm text-slate-500">
              Настоящее Соглашение регулирует отношения между ООО «Ди Ай Строй» и пользователями сайта.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-8 text-slate-700 text-sm md:text-base leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">1. Общие положения</h2>
              <p>
                1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») определяет порядок использования материалов и сервисов официального веб-сайта строительной компании <strong>Общество с ограниченной ответственностью «Ди Ай Строй»</strong> (ИНН 9727043363).
              </p>
              <p>
                1.2. Используя сайт, просматривая опубликованные материалы или направляя заявки на расчет строительно-монтажных работ, Пользователь соглашается с условиями настоящего Соглашения в полном объеме.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">2. Интеллектуальная собственность</h2>
              <p>
                2.1. Все текстовые материалы, графические изображения, фотографии реализованных строительных объектов, архитектурно-строительные схемы, сканы лицензий и товарные знаки, размещенные на данном сайте, являются объектами интеллектуальной собственности ООО «Ди Ай Строй» либо используются на законных основаниях.
              </p>
              <p>
                2.2. Любое копирование, тиражирование или распространение материалов сайта в коммерческих целях без предварительного письменного согласия правообладателя запрещено.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">3. Характер информации и расчет стоимости СМР</h2>
              <p>
                3.1. Информация об услугах, ориентировочных сроках, технологиях строительства и предварительных расчетах, размещенная на сайте, носит ознакомительный характер и <strong>не является публичной офертой</strong>, определяемой положениями Статьи 437(2) Гражданского кодекса РФ.
              </p>
              <p>
                3.2. Точная стоимость, график производства работ (ГПР) и состав сметы фиксируются исключительно в официальных договорах генерального подряда, спецификациях и локальных сметных расчетах, подписываемых уполномоченными представителями сторон.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">4. Направление заявок и технической документации</h2>
              <p>
                4.1. При заполнении форм обратной связи Пользователь обязуется указывать достоверные контактные данные для обратной связи.
              </p>
              <p>
                4.2. Направляя ссылки на проектную документацию, чертежи (АР, КР, КМ, КЖ) и технические задания, Пользователь подтверждает, что обладает правом распоряжаться указанными материалами для целей расчета сметы.
              </p>
              <p>
                4.3. ООО «Ди Ай Строй» обязуется соблюдать строгую коммерческую тайну и конфиденциальность в отношении переданных заказчиком чертежей и проектных данных.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">5. Ограничение ответственности</h2>
              <p>
                5.1. Администрация сайта прилагает все усилия для обеспечения бесперебойной работы ресурса, однако не несет ответственности за временные технические сбои, вызванные действиями третьих лиц, хостинг-провайдеров или сетей связи.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">6. Контактные данные</h2>
              <p>
                По всем юридическим вопросам и предложениям обращайтесь в юридический отдел ООО «Ди Ай Строй» по адресу: <a href="mailto:Infodistroy@yandex.ru" className="text-blue-600 font-semibold underline">Infodistroy@yandex.ru</a>.
              </p>
            </section>

          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 text-sm transition-colors shadow-sm"
            >
              Вернуться на главную страницу
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
