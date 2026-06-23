export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-white">
            Д
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white uppercase tracking-wider">ДиАйСтрой</span>
          </div>
        </div>
        
        <div className="text-zinc-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} ООО «ДиАйСтрой». Промышленное строительство. Все права защищены.
        </div>
        
        <div className="text-zinc-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
