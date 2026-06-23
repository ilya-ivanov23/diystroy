import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Заглушка логотипа */}
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-bold text-white text-xl">
            Д
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white uppercase tracking-wider">ДиАйСтрой</span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Промышленное строительство</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="#services" className="hover:text-orange-500 transition-colors">Услуги</Link>
          <Link href="#about" className="hover:text-orange-500 transition-colors">О компании</Link>
          <Link href="#portfolio" className="hover:text-orange-500 transition-colors">Проекты</Link>
          <Link href="#contacts" className="hover:text-orange-500 transition-colors">Контакты</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <a href="tel:+78000000000" className="text-white font-bold flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Phone className="w-4 h-4 text-orange-500" />
              +7 (800) 000-00-00
            </a>
            <a href="mailto:project@diistroy.ru" className="text-xs text-zinc-400 flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              project@diistroy.ru
            </a>
          </div>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6">
            <Link href="#contacts">ОТПРАВИТЬ ТЗ</Link>
          </Button>
        </div>

        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
