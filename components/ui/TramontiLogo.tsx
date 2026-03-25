import React from 'react';

const TramontiLogo: React.FC = () => (
    <svg viewBox="0 0 240 200" className="h-16 md:h-20 w-auto drop-shadow-lg filter transition-transform duration-300 group-hover:rotate-3">
        {/* Defs per i path del testo */}
        <defs>
            <path id="curveTop" d="M 20,100 A 80,80 0 0,1 180,100" />
            <path id="curveBottom" d="M 30,100 A 70,70 0 0,0 170,100" />
        </defs>

        {/* Cerchio Esterno (Sfondo Badge) */}
        <circle cx="100" cy="100" r="90" fill="#1a5f68" stroke="#000" strokeWidth="3" />
        <circle cx="100" cy="100" r="85" fill="#2b6e76" />

        {/* Testo Curvo */}
        <text fill="white" fontSize="20" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">
            <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                TRAMONTI
            </textPath>
        </text>
        <text fill="white" fontSize="16" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">
            <textPath href="#curveBottom" startOffset="50%" textAnchor="middle" style={{ side: "left" } as any}>
                DIFFUSION
            </textPath>
        </text>

        {/* --- MASCOT: Anatra Pilota --- */}
        <g transform="translate(10, 10)">
            {/* Corpo/Giacca */}
            <path d="M50,130 Q90,120 130,130 L130,160 Q90,170 50,160 Z" fill="#1a237e" />

            {/* Collo/Sciarpa */}
            <path d="M65,120 Q90,135 115,120" fill="none" stroke="#f5f5f5" strokeWidth="8" strokeLinecap="round" />

            {/* Testa */}
            <circle cx="90" cy="85" r="30" fill="white" />

            {/* Casco da aviatore */}
            <path d="M58,80 Q90,40 122,80 L125,100 Q90,110 55,100 Z" fill="#5d4037" stroke="#3e2723" strokeWidth="2" />
            <path d="M55,80 Q90,45 125,80" fill="none" stroke="#8d6e63" strokeWidth="2" opacity="0.5" />

            {/* Occhiali (Goggles) */}
            <g transform="rotate(-5 90 85)">
                <circle cx="78" cy="82" r="10" fill="#81d4fa" stroke="#333" strokeWidth="3" />
                <circle cx="102" cy="82" r="10" fill="#81d4fa" stroke="#333" strokeWidth="3" />
                <line x1="88" y1="82" x2="92" y2="82" stroke="#333" strokeWidth="3" />
                {/* Riflesso lenti */}
                <path d="M75,78 L80,78" stroke="white" strokeWidth="2" opacity="0.8" />
                <path d="M99,78 L104,78" stroke="white" strokeWidth="2" opacity="0.8" />
            </g>

            {/* Becco */}
            <path d="M80,95 Q60,95 50,105 Q60,115 85,110 Z" fill="#ff9100" stroke="#e65100" strokeWidth="1" />

            {/* Volante */}
            <path d="M40,130 A60,40 0 0,0 140,130" fill="none" stroke="#3e2723" strokeWidth="8" strokeLinecap="round" />
            <path d="M90,130 L90,170" stroke="#3e2723" strokeWidth="6" />
        </g>

        {/* --- Banner Laterale "CARS" --- */}
        <g transform="translate(140, 50) rotate(-10)">
            {/* Nastro */}
            <path d="M0,0 L70,5 L70,35 L0,30 L-10,15 Z" fill="#f3e5ab" stroke="#000" strokeWidth="1.5" />
            <path d="M-10,15 L-20,25 L0,30" fill="#d4af37" stroke="#000" strokeWidth="1" /> {/* Ombra piega */}

            {/* Testo Cars */}
            <text x="35" y="24" textAnchor="middle" fill="#d32f2f" fontFamily="serif" fontWeight="900" fontSize="18" transform="rotate(2 35 20)">
                CARS
            </text>
        </g>
    </svg>
);

export default TramontiLogo;
