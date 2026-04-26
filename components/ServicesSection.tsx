"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '../lib/servicesData';

const ServiceCardHorizontal: React.FC<{ service: typeof SERVICES[0]; index: number; scrollYProgress: MotionValue<number> }> = ({ service, index, scrollYProgress }) => {
    // Parallasse più morbido in modo da non sgranare o tagliare foto contenenti scritte (come Officina Service)
    const imageX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

    return (
        <Link 
            href={`/servizi/${service.slug}`}
            className="group flex flex-col h-[70vh] md:h-[65vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0"
        >
            {/* Sezione Superiore: Immagine con Parallasse */}
            <div className="relative w-full h-[65%] md:h-[70%] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                <motion.div
                    style={{ x: imageX, scale: 1.05 }}
                    className="w-full h-full origin-center relative"
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${service.imagePosition || 'object-center'}`}
                    />
                </motion.div>
                
                {/* Overlay leggero sfumato per l'icona */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent h-32 opacity-70" />

                {/* Icona in alto a sinistra */}
                <div className="absolute top-6 left-6 z-10">
                    <div className="bg-black/40 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/20 text-velluto-gold inline-block transition-transform duration-500 group-hover:scale-110 shadow-xl">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                </div>

                {/* Pulsante "Scopri" flottante su Desktop */}
                <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center justify-center opacity-0 transform translate-x-8 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
                    <div className="w-16 h-16 rounded-full bg-velluto-gold flex items-center justify-center text-black shadow-[0_0_20px_rgba(207,181,89,0.4)] group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </div>
            </div>

            {/* Sezione Inferiore: Testo sotto la foto (Stile Wedoo Progetti) */}
            <div className="flex-1 mt-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-tight leading-[1.1] mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                        {service.title.split(' ').map((word, i) => (
                            <span key={i} className={`inline-block ${i % 2 !== 0 ? 'text-velluto-gold' : ''}`}>
                                {word}{' '}
                            </span>
                        ))}
                    </h3>
                </div>

                {/* Griglia minimalista delle caratteristiche */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-auto">
                    {service.details.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-widest text-velluto-gold/80 mb-1">Highlight {i + 1}</span>
                            <span className="text-xs text-gray-300 font-medium truncate">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

const ServicesSection: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    // Calcolo preciso dello spazio di scroll per eliminare "buchi" e glitch finali
    useLayoutEffect(() => {
        const updateScrollRange = () => {
            if (scrollRef.current) {
                // Larghezza totale flexbox - viewport width + padding estetico finale
                const scrollWidth = scrollRef.current.scrollWidth;
                const clientWidth = window.innerWidth;
                // Lasciamo un padding pari al 40% dello schermo: questo farà sì che l'ultima card 
                // si fermi quasi al centro dello schermo (visto che occupa 45vw) invece di schiacciarsi a destra!
                const paddingEnd = clientWidth * 0.4; 
                setScrollRange(scrollWidth - clientWidth + paddingEnd);
            }
        };

        updateScrollRange();
        window.addEventListener('resize', updateScrollRange);
        return () => window.removeEventListener('resize', updateScrollRange);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Mappatura precisissima: finiamo lo scroll orizzontale al 75% dello scroll verticale!
    // L'ULTIMO 25% (pari a 2 fottuti schermi di scroll) serve ESCLUSIVAMENTE come pausa di blocco
    // per permettere di leggere l'ultima card senza scendere giù.
    const x = useTransform(scrollYProgress, [0, 0.75], [0, -scrollRange]);
    const progressScale = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

    return (
        // Altezza spinta a 800vh per compensare il blocco prolungato e rendere tutto sofficissimo
        <section id="servizi" ref={targetRef} className="relative h-[800vh] bg-black">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Header Section */}
                <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12 relative z-10 pointer-events-none pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-velluto-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">Servizi Exclusive</h4>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif leading-tight">
                            SERVIZI SU MISURA <span className="italic text-velluto-gold">A 360°</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="flex items-center relative">
                    <motion.div 
                        ref={scrollRef}
                        style={{ x, willChange: "transform" }} 
                        className="flex gap-6 md:gap-12 px-6 md:px-12 lg:px-24 pb-12 w-max relative"
                    >
                        {SERVICES.map((service, index) => (
                            <ServiceCardHorizontal 
                                key={service.id} 
                                service={service} 
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/4 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] -translate-y-1/2 bg-velluto-gold/10 rounded-full blur-[150px] pointer-events-none z-0" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[120px] pointer-events-none z-0" />
                
                {/* Progression Bar at the bottom (Wedoo Style) */}
                <div className="absolute bottom-8 left-8 right-8 md:left-24 md:right-24 h-[2px] bg-white/10 overflow-hidden flex items-center justify-between pointer-events-none z-30 relative">
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 absolute left-0 -top-8 hidden md:block">Scroll to explore</div>
                    <motion.div 
                        style={{ scaleX: progressScale }}
                        className="h-full w-full bg-velluto-gold origin-left absolute top-0 left-0"
                    />
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 absolute right-0 -top-8 hidden md:block">All Services</div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
