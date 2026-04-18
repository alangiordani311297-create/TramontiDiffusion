"use client";

import React from 'react';
import Link from 'next/link';

const HeritageBanner: React.FC = () => {
    return (
        <section className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
            {/* Background Image with Grayscale Filter */}
            <div className="absolute inset-0">
                <img 
                    src="/immagini/foto guerrino tramonti.jpg" 
                    alt="Maestro Guerrino Tramonti" 
                    className="w-full h-full object-cover object-center grayscale brightness-[0.32] contrast-110"
                />
            </div>

            {/* Content centered */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 uppercase tracking-[0.2em] leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
                        Eredità Tramonti
                    </h2>
                    
                    <div className="w-16 h-[1px] bg-velluto-gold mx-auto mb-8 opacity-70"></div>
                    
                    <p className="text-white text-sm md:text-base lg:text-xl font-light leading-relaxed mb-10 max-w-3xl mx-auto tracking-wide italic" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                        "Da oltre 40 anni, Tramonti porta nel mondo dell’auto di prestigio una tradizione fatta di gusto, personalità e attenzione autentica al cliente. 
                        Figlio di una famiglia profondamente legata a Faenza e all’eredità del maestro Guerrino Tramonti, Paolo ha trasformato questa sensibilità in un modo unico di vivere l’automobile: 
                        non solo vetture d’eccellenza, ma esperienza, relazione e servizio su misura."
                    </p>
                    
                    <Link 
                        href="/chi-sono" 
                        className="inline-block border border-white/40 text-white px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-black hover:border-white"
                    >
                        La Nostra Storia
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeritageBanner;
