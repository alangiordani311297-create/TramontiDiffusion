"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

import Link from 'next/link';

const Hero: React.FC = () => {
    const slides = [
        {
            src: "/immagini/chi_sono/foto 1.png",
            title: "Scopri le auto disponibili",
            subtitle: "Nel nostro nuovo Showroom",
            buttonText: "TUTTO LO STOCK",
            link: "/showroom"
        },
        {
            src: "/immagini/chi_sono/foto 2.jpg",
            title: "Le migliori auto di lusso",
            subtitle: "Con soluzioni di acquisto vantaggiose",
            buttonText: "STOCK DISPONIBILE",
            link: "/showroom"
        },
        {
            src: "/immagini/chi_sono/foto 3.jpg",
            title: "Contatta subito un esperto",
            subtitle: " ",
            buttonText: "VENDI AUTO",
            link: "/contatti"
        },
        {
            src: "/immagini/chi_sono/foto 4.jpg",
            title: "Vuoi vendere con noi?",
            subtitle: " ",
            buttonText: "CONTATTACI",
            link: "/contatti"
        }
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Cambia immagine ogni 5 secondi

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative w-full overflow-hidden bg-black md:h-[100svh]">

            {/* SLIDESHOW IMMAGINI */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`w-full transition-opacity duration-1000 ease-in-out z-0 ${
                        index === currentSlideIndex
                            ? 'opacity-100 relative md:absolute md:inset-0 md:h-full'
                            : 'opacity-0 absolute inset-0'
                    }`}
                >
                    {/* Immagine */}
                    <img 
                        src={slide.src} 
                        alt={`Hero Home ${index + 1}`} 
                        className="w-full h-auto md:h-full md:object-cover object-center"
                    />
                </div>
            ))}

            {/* OVERLAY SCURO PER LE SCRITTE */}
            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

            {/* Testi Sovrapposti (transizioni sincronizzate) */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                {slides.map((slide, index) => (
                    <div 
                        key={`text-${index}`}
                        className={`absolute w-full transition-all duration-1000 ease-in-out flex flex-col items-center ${
                            index === currentSlideIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                    >
                        <h1 className="text-2xl md:text-6xl font-bold text-white mb-1 md:mb-2 leading-tight">
                            {slide.title}
                        </h1>
                        <h2 className="text-lg md:text-4xl font-light text-white mb-4 md:mb-10">
                            {slide.subtitle}
                        </h2>
                        
                        <Link href={slide.link} className="inline-block border border-white text-white px-8 py-3 text-sm font-bold tracking-[0.2em] transform hover:bg-white hover:text-black transition-all">
                            {slide.buttonText}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <ArrowDown className="w-6 h-6 opacity-70 hover:opacity-100 hover:text-velluto-gold transition-colors" />
            </div>
        </section>
    );
};

export default Hero;
