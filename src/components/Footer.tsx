import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              {/* Передаем класс для темного текста логотипа */}
              <Logo className="text-slate-900" iconOnly={false} />
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Комплексное строительство промышленных и складских объектов. От фундамента до ввода в эксплуатацию.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Услуги</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Монтаж металлоконструкций</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Фундаменты и монолит</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Монтаж сэндвич-панелей</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Инженерные сети (ОВиК, ВК)</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Наружные сети (НВК)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Компания</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">О нас</Link></li>
              <li><Link href="#portfolio" className="hover:text-blue-600 transition-colors">Проекты</Link></li>
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">Допуски и СРО</Link></li>
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">Техника</Link></li>
              <li><Link href="#contacts" className="hover:text-blue-600 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Контакты</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li>
                <div className="text-slate-500 text-xs mb-1">Многоканальный телефон</div>
                <a href="tel:+78000000000" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">+7 (800) 000-00-00</a>
              </li>
              <li>
                <div className="text-slate-500 text-xs mb-1">Электронная почта</div>
                <a href="mailto:project@diistroy.ru" className="text-slate-900 hover:text-blue-600 transition-colors">project@diistroy.ru</a>
              </li>
              <li>
                <div className="text-slate-500 text-xs mb-1">Адрес</div>
                <div className="text-slate-900">г. Москва, БЦ "Индустрия", офис 404</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} ООО «ДиАйСтрой». Все права защищены.
          </div>
          <div className="text-slate-500 text-xs hover:text-slate-900 transition-colors cursor-pointer">
            Политика конфиденциальности
          </div>
        </div>
      </div>
    </footer>
  );
}
