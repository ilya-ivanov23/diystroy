export function Logo({ className = "", iconOnly = false }: { className?: string, iconOnly?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600 shrink-0"
      >
        {/* Detached Brick (Top) */}
        <rect x="22" y="12" width="16" height="8" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        
        {/* Trowel Handle */}
        <rect x="46" y="2" width="8" height="12" rx="2" transform="rotate(45 50 6)" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" fill="none"/>
        <path d="M46 16 L38 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        
        {/* Trowel Blade (Filled) */}
        <path d="M38 24 L24 38 L42 42 Z" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        
        {/* Wavy Mortar */}
        <path d="M10 26 Q 14 22, 18 26 T 26 26 T 34 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        
        {/* Brick Wall Outline */}
        <path d="M10 28 V56 H46 V44" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Horizontal Brick Lines */}
        <path d="M10 37 H46 M10 46 H46" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        
        {/* Vertical Brick Lines */}
        {/* Row 1 (Top) */}
        <path d="M22 28 V37 M34 28 V37" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        {/* Row 2 (Middle) */}
        <path d="M16 37 V46 M28 37 V46 M40 37 V46" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        {/* Row 3 (Bottom) */}
        <path d="M22 46 V56 M34 46 V56" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tight leading-none uppercase" style={{ color: "currentColor" }}>Ди Ай Строй</span>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">Промышленное строительство</span>
        </div>
      )}
    </div>
  );
}
