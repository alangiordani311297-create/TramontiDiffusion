"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '../lib/servicesData';

const ServiceCardHorizontal: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
    return (
        <Link 
            href={`/servizi/${service.slug}`}
            className="relative h-[70vh] w-[85vw] md:w-[70vw] lg:w-[60vw] flex-shrink-0 overflow-hidden group border border-white/10 rounded-2xl"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${service.imagePosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Content Top Left */}
            <div className="absolute top-8 left-8 z-10">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-velluto-gold inline-block mb-4">
                    <service.icon className="w-6 h-6" />
                </div>
            </div>

            {/* Content Center Left */}
            <div className="absolute bottom-24 left-8 md:bottom-32 md:left-12 z-10 max-w-2xl">
                <h3 className="text-4xl md:text-7xl font-light text-white uppercase tracking-tight leading-none mb-6">
                    {service.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? 'text-velluto-gold' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h3>
            </div>

            {/* Stats/Features Row at the Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {service.details.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Highlight {i + 1}</span>
                            <span className="text-xs md:text-sm text-white font-medium truncate">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Hover View Button */}
            <div className="absolute bottom-24 right-12 z-20 hidden md:block">
                <div className="w-24 h-24 rounded-full border border-velluto-gold/40 flex items-center justify-center text-velluto-gold hover:bg-velluto-gold hover:text-black transition-all duration-500 group-hover:scale-110 bg-black/10 backdrop-blur-sm">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold">SCOPRI</span>
                </div>
            </div>
        </Link>
    );
};

const ServicesSection: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // We want to translate such that we go from the start to the end of the scrollRef content
    // We'll use a larger scroll progress range to make it feel smoother
    const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-80%"]);

    return (
        <section id="servizi" ref={targetRef} className="relative h-[600vh] bg-white">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Header Section */}
                <div className="container mx-auto px-6 md:px-12 mb-12 relative z-10 pointer-events-none pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-velluto-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">Servizi Exclusive</h4>
                        <h2 className="text-4xl md:text-6xl text-foreground font-serif leading-tight">
                            L'ECOSISTEMA <span className="italic text-gray-400">TRAMONTI</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="flex items-center">
                    <motion.div 
                        ref={scrollRef}
                        style={{ x }} 
                        className="flex gap-8 px-6 md:px-12 lg:px-24"
                    >
                        {SERVICES.map((service, index) => (
                            <ServiceCardHorizontal 
                                key={service.id} 
                                service={service} 
                                index={index} 
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Background Decor */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-velluto-gold/5 blur-[120px] pointer-events-none -z-10" />
                
                {/* Progression Bar at the bottom */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-black/5 overflow-hidden">
                    <motion.div 
                        style={{ scaleX: scrollYProgress }}
                        className="h-full bg-velluto-gold origin-left"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
