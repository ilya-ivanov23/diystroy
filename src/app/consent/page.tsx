import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных | ООО «Ди Ай Строй»",
  description: "Текст согласия на обработку персональных данных при отправке заявок на расчет строительно-монтажных работ.",
};

export default function ConsentPage() {
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
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">ФЗ № 152-ФЗ ст. 9</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Согласие на обработку персональных данных
            </h1>
            <p className="text-sm text-slate-500">
              Действует для всех форм сбора данных на сайте diistroy.ru
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-6 text-slate-700 text-sm md:text-base leading-relaxed">
            
            <p>
              Настоящим я, действуя своей волей и в своем интересе, а также подтверждая свою дееспособность, даю свое конкретное, информированное и сознательное согласие <strong>Обществу с ограниченной ответственностью «Ди Ай Строй»</strong> (ИНН 9727043363, юридический адрес: 117186, г. Москва, вн.тер.г. муниципальный округ Котловка, ул. Нагорная, д. 24, к. 9, помещ. 1/1) на обработку моих персональных данных на следующих условиях:
            </p>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900">1. Перечень персональных данных, на обработку которых дается согласие:</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Имя, фамилия, отчество или наименование контактного лица;</li>
                <li>Номер телефона (мобильный, рабочий);</li>
                <li>Адрес электронной почты (e-mail);</li>
                <li>Наименование представляемой организации (при наличии);</li>
                <li>Данные о планируемом объекте строительства, содержащиеся в сообщении или приложенных документах;</li>
                <li>Пользовательские данные веб-сайта (файлы cookie, IP-адрес, источник перехода).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900">2. Цели обработки персональных данных:</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Обработка входящих запросов, технических заданий и заявок на расчет строительно-монтажных работ (СМР);</li>
                <li>Проведение предварительных инженерных консультаций и составление предварительного сметного расчета;</li>
                <li>Направление коммерческих предложений (КП), проектной и сметной документации;</li>
                <li>Заключение, изменение и исполнение договоров подряда / генподряда;</li>
                <li>Осуществление телефонной и электронной коммуникации по вопросам сотрудничества.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900">3. Способы обработки:</h2>
              <p>
                Обработка включает в себя сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление только в рамках требований законодательства РФ), обезличивание, блокирование, удаление и уничтожение персональных данных как с использованием средств автоматизации, так и без них.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900">4. Срок действия и порядок отзыва:</h2>
              <p>
                Согласие действует с момента отправки формы на сайте до момента его отзыва.
              </p>
              <p>
                Согласие может быть отозвано в любой момент путем направления письменного заявления на электронную почту: <a href="mailto:Infodistroy@yandex.ru" className="text-blue-600 font-semibold underline">Infodistroy@yandex.ru</a> с темой письма «Отзыв согласия на обработку персональных данных».
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
              Отправка любой веб-формы на сайте (кнопка «Отправить ТЗ», «Рассчитать стоимость СМР», «Отправить заявку») признается акцептом настоящего согласия в простой письменной форме в соответствии с ч. 1 ст. 9 Федерального закона от 27.07.2006 № 152-ФЗ.
            </div>

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
