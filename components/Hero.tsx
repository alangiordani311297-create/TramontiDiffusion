"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden bg-black h-[125vh]">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/immagini/Porsche foto home.jpg" 
                    alt="Tramonti Diffusion Hero" 
                    className="w-full h-full object-cover object-center"
                />
                {/* GRADIENT OVERLAY for depth and text readability - matching editorial style */}
                <div className="absolute inset-0 bg-black/10"></div> {/* General darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent w-full md:w-2/3"></div> {/* Left side darkness */}
            </div>

            {/* CONTENT - Centered to ensure visibility on all screens */}
            <div className="relative z-20 h-full flex flex-col justify-center pt-20 px-4 md:px-10 lg:px-14">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        L’arte della qualità,<br />
                        <span className="text-velluto-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">firmata Tramonti Diffusion</span>
                    </h1>
                    
                    <div className="flex flex-col md:flex-row gap-4 mt-8">
                        <Link href="/showroom" className="inline-block border border-white text-white px-10 py-4 text-sm font-bold tracking-[0.2em] transform hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                            TUTTO LO STOCK
                        </Link>
                        <Link href="/#servizi" className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-[0.2em] transform hover:bg-velluto-gold hover:text-black transition-all duration-300">
                            SCOPRI I SERVIZI
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator Down (as requested, keeps the page flow) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <ArrowDown className="w-8 h-8 opacity-90 hover:opacity-100 hover:text-velluto-gold transition-colors" />
            </div>
        </section>
    );
};

export default Hero;
