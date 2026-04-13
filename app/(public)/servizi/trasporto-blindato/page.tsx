'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, MapPin, Globe, Clock, CheckCircle2 } from 'lucide-react';

export default function DeliveryPage() {
    const steps = [
        {
            title: "Pianificazione & Logistics",
            desc: "Definiamo insieme il timing e le modalità di ritiro e consegna. Gestiamo tutta la documentazione, inclusi i permessi per zone a traffico limitato o pratiche doganali internazionali.",
            icon: Clock
        },
        {
            title: "Caricamento Protetto",
            desc: "La tua vettura viene caricata su camion chiusi e climatizzati da personale esperto. Utilizziamo rampe a basso profilo per garantire l'incolumità di supercar con assetti estremi.",
            icon: Truck
        },
        {
            title: "Monitoraggio GPS",
            desc: "Segui il viaggio della tua auto in tempo reale. Riceverai aggiornamenti costanti fino alla consegna finale effettuata dai nostri driver specializzati.",
            icon: MapPin
        }
    ];

    return (
        <>
            <Navbar />
            <main className="bg-[#131313] min-h-screen text-white selection:bg-[#e9c176] selection:text-[#131313]">
                {/* Hero section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/immagini/consegna a domicilio.jpg" 
                            alt="Luxury Car Transport" 
                            className="w-full h-full object-cover brightness-[0.4]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/50 to-[#131313]"></div>
                    </div>
                    
                    <div className="relative z-10 container mx-auto px-6 text-center pt-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#e9c176] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Global Concierge</span>
                            <h1 className="text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
                                TRASPORTO <br/> <span className="text-[#e9c176] italic">BLINDATO.</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                                La tua vettura, ovunque nel mondo. Sicurezza assoluta, discrezione totale e protezione climatica garantita in ogni chilometro.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Back Link */}
                <div className="container mx-auto px-6 -mt-12 relative z-20">
                    <Link
                        href="/#services"
                        className="text-xs font-bold uppercase tracking-widest text-[#a17f3c] hover:text-[#e9c176] transition-colors mb-12 inline-block bg-[#131313]/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/5"
                    >
                        ← Torna ai Servizi
                    </Link>
                </div>

                {/* Content Section */}
                <section className="container mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">Sicurezza Globale.</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Non ci limitiamo a spostare auto. Offriamo un servizio di logistica d'eccellenza per collezionisti e appassionati che richiedono il massimo standard di protezione.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Mezzi anonimi senza loghi esterni",
                                    "Sistemi di ancoraggio professionali soft-touch",
                                    "Assicurazione All-Risk su misura",
                                    "Personale certificato e in divisa"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 text-gray-200">
                                        <CheckCircle2 className="text-[#e9c176] w-5 h-5 flex-shrink-0" />
                                        <span className="font-light tracking-wide">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/5"
                        >
                            <img 
                                src="/immagini/consegna auto.jpeg" 
                                alt="Service Detail" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#131313]/60 via-transparent to-transparent"></div>
                        </motion.div>
                    </div>

                    {/* Process Section */}
                    <div className="mt-32">
                        <div className="text-center mb-20">
                            <h3 className="text-[#e9c176] text-xs font-bold uppercase tracking-[0.3em] mb-4">Il nostro metodo</h3>
                            <h2 className="text-3xl md:text-5xl font-serif">Processo White-Glove</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-[#e9c176]/30 transition-all group"
                                >
                                    <div className="bg-[#e9c176] text-[#131313] w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#e9c176]/20">
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                                    <p className="text-gray-400 font-light leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-t from-black to-transparent">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto border border-white/10 bg-[#1c1b1b] p-12 md:p-20 rounded-3xl shadow-2xl">
                            <h2 className="text-3xl md:text-5xl font-serif font-black mb-6">Pianifica il tuo trasporto oggi.</h2>
                            <p className="text-gray-400 text-lg mb-10 font-light">Contattaci per una quotazione personalizzata o per assistenza doganale.</p>
                            <Link
                                href="/#contact"
                                className="bg-[#e9c176] text-[#131313] px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all inline-block rounded-full shadow-lg shadow-[#e9c176]/10"
                            >
                                Richiedi Quotazione
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
