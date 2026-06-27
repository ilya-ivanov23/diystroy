export function Logo({ className = "", iconOnly = false }: { className?: string, iconOnly?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        viewBox="0 0 240 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 stroke-current shrink-0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 1. FLOATING SINGLE BRICK */}
        <rect x="60" y="20" width="50" height="22" rx="2" />

        {/* 3. BRICK WALL MAIN BOUNDARY */}
        {/* Left and Bottom edges */}
        <path d="M 40 60 V 175 H 200" />
        {/* Top edge (stops for trowel) */}
        <path d="M 40 60 H 115" />
        {/* Right edge (starts below trowel) */}
        <path d="M 200 85 V 175" />

        {/* 4. WAVY MORTAR ON TOP EDGE */}
        <path d="M 40 60 Q 55 45, 75 60 T 115 60" />

        {/* 6. CEMENT PILE AT BOTTOM-RIGHT */}
        <path d="M 100 175 C 130 160, 145 110, 165 110 C 185 110, 195 135, 200 150" />

        {/* 5. BRICK PATTERN (Internal Grid) */}
        {/* Horizontal rows (cut where the cement pile is) */}
        <path d="M 40 90 H 200" />
        <path d="M 40 118 H 158" />
        <path d="M 40 146 H 122" />

        {/* Vertical brick dividers (Staggered) */}
        {/* Row 1 (Y: 60 to 90) */}
        <path d="M 65 60 V 90 M 90 60 V 90 M 115 60 V 90 M 140 75 V 90 M 165 80 V 90 M 190 85 V 90" />
        
        {/* Row 2 (Y: 90 to 118) */}
        <path d="M 52 90 V 118 M 77 90 V 118 M 102 90 V 118 M 127 90 V 118 M 152 90 V 115 M 177 90 V 112 M 190 90 V 125" />
        
        {/* Row 3 (Y: 118 to 146) */}
        <path d="M 65 118 V 146 M 90 118 V 146 M 115 118 V 146 M 140 118 V 128" />
        
        {/* Row 4 (Y: 146 to 175) */}
        <path d="M 52 146 V 175 M 77 146 V 175 M 102 146 V 175 M 115 146 V 167" />

        {/* 2. THE TROWEL / MASONRY TOOL */}
        {/* Handle (pill shape) */}
        <rect x="175" y="10" width="16" height="40" rx="8" transform="rotate(45 183 30)" />
        {/* Stem */}
        <path d="M 160 45 L 152 53" />
        {/* Blade (triangular) */}
        <path d="M 152 53 L 115 80 L 140 95 Z" />
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
