'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SERVICES } from '@/lib/servicesData';
import { notFound } from 'next/navigation';

export default function WarrantyPage() {
    const service = SERVICES.find(s => s.slug === 'estensione-garanzia');
    if (!service) return notFound();

    return (
        <>
            <Navbar />
            <main className="bg-background pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <Link href="/#services" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-velluto-gold transition-colors mb-8 inline-block">
                        ← Torna ai Servizi
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Image Column */}
                        <div className="relative h-[400px] lg:h-[600px] w-full mt-4">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover shadow-2xl rounded-sm"
                            />
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-full border border-gray-200 text-velluto-gold shadow-lg">
                                <service.icon className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6 text-velluto-gold">
                                <span className="w-12 h-[1px] bg-velluto-gold"></span>
                                <span className="text-xs font-bold uppercase tracking-widest">Servizio Esclusivo</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-serif mb-8 leading-tight">
                                {service.title}
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {service.details.content}
                            </p>

                            <div className="space-y-4 mb-12">
                                {service.details.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-gray-700 text-base">
                                        <div className="w-2 h-2 bg-velluto-gold rounded-full flex-shrink-0"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Link href="/#contact" className="bg-velluto-gold text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white border border-velluto-gold transition-all w-full md:w-auto text-center cursor-pointer block">
                                    Richiedi Informazioni
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
