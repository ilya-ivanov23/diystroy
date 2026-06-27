import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Phone, Mail, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#services" className="hover:text-blue-600 transition-colors">Услуги</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">О компании</Link>
          <Link href="#portfolio" className="hover:text-blue-600 transition-colors">Проекты</Link>
          <Link href="#contacts" className="hover:text-blue-600 transition-colors">Контакты</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <a href="tel:+78000000000" className="text-slate-900 font-bold flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 text-blue-600" />
              +7 (800) 000-00-00
            </a>
            <a href="mailto:project@diistroy.ru" className="text-xs text-slate-500 flex items-center gap-2 hover:text-slate-900 transition-colors">
              <Mail className="w-3 h-3" />
              project@diistroy.ru
            </a>
          </div>
          <Link href="#contacts" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-6 text-sm transition-colors shadow-sm">
            ОТПРАВИТЬ ТЗ
          </Link>
        </div>

        <button className="md:hidden text-slate-900 p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
