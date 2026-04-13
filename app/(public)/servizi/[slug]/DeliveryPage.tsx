'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    Truck, 
    ShieldCheck, 
    Thermometer, 
    MapPin, 
    ChevronDown, 
    Star, 
    Quote
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DeliveryPage = () => {
    return (
        <>
        <Navbar />
        <div className="bg-[#131313] text-[#e5e2e1] antialiased selection:bg-velluto-gold selection:text-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        alt="Consegna a domicilio Tramonti Diffusion" 
                        src="/immagini/consegna a domicilio.jpg"
                        className="w-full h-full object-cover opacity-50 grayscale-[0.2]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/40 to-transparent"></div>
                </div>
                
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1.5 mb-8 border border-velluto-gold/30 text-velluto-gold text-[10px] tracking-[0.3em] font-bold uppercase backdrop-blur-sm"
                        >
                            Servizio Concierge Globale
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-serif font-bold leading-tight tracking-tight mb-8"
                        >
                            Trasporto Speciale di <br/>
                            <i className="font-normal italic text-velluto-gold">Classe Superiore</i>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                        >
                            Consegna a domicilio blindata, climatizzata e sicura in tutto il mondo. Trattiamo ogni veicolo come un'opera d'arte, garantendo la massima riservatezza.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-6"
                        >
                            <Link 
                                href="/#contact" 
                                className="bg-velluto-gold text-black font-bold px-10 py-5 text-base transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-velluto-gold/10"
                            >
                                Prenota il Trasporto
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] tracking-[0.4em] uppercase text-velluto-gold">Scroll</span>
                    <div className="w-[1px] h-12 bg-velluto-gold/50"></div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-[#1c1b1b]">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-serif font-bold mb-6"
                            >
                                Perché Sceglierci?
                            </motion.h2>
                            <p className="text-lg text-gray-400">L'eccellenza non è un'opzione, è il nostro standard operativo minimo. Ogni chilometro è sorvegliato, ogni dettaglio è curato.</p>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/10 mb-4 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 shadow-2xl">
                        {/* Feature 1 */}
                        <motion.div 
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                            className="bg-[#131313] p-12 transition-all duration-500 group"
                        >
                            <div className="mb-8 text-velluto-gold">
                                <MapPin className="w-12 h-12 stroke-[1.5px]" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">GPS Monitoring</h3>
                            <p className="text-gray-400 leading-relaxed">Tracking satellitare in tempo reale criptato. Saprete esattamente dove si trova il vostro investimento, ogni secondo del viaggio.</p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div 
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                            className="bg-[#131313] p-12 transition-all duration-500"
                        >
                            <div className="mb-8 text-velluto-gold">
                                <ShieldCheck className="w-12 h-12 stroke-[1.5px]" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">All-Risk Insurance</h3>
                            <p className="text-gray-400 leading-relaxed">Copertura assicurativa totale personalizzata. Protezione completa per collezioni private, prototipi e veicoli da competizione.</p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div 
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                            className="bg-[#131313] p-12 transition-all duration-500"
                        >
                            <div className="mb-8 text-velluto-gold">
                                <Thermometer className="w-12 h-12 stroke-[1.5px]" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Climate Controlled</h3>
                            <p className="text-gray-400 leading-relaxed">Rimorchi sigillati con controllo attivo di temperatura e umidità per preservare materiali sensibili e componenti elettroniche.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 bg-[#131313] relative overflow-hidden">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-32">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-bold mb-6"
                        >
                            Il Nostro Processo <br/><i className="italic font-normal text-velluto-gold font-sans">Tramonti Diffusion VIP Delivery</i>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                        {/* Step 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/5] bg-[#201f1f] mb-8 overflow-hidden rounded-2xl">
                                <img 
                                    alt="Ritiro Sicuro" 
                                    src="/immagini/consegna auto.jpeg" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-velluto-gold flex items-center justify-center text-black font-bold text-xl rounded-full shadow-lg">1</div>
                            <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">Ritiro Sicuro</h3>
                            <p className="text-velluto-gold text-[10px] uppercase tracking-widest mb-4 font-bold">Fase di Carico</p>
                            <p className="text-gray-400">Ispezione millimetrica pre-carico con documentazione fotografica ad alta risoluzione e sigillatura del veicolo.</p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group md:translate-y-12"
                        >
                            <div className="aspect-[4/5] bg-[#201f1f] mb-8 overflow-hidden rounded-2xl">
                                <img 
                                    alt="Trasporto Monitorato" 
                                    src="/immagini/foto gps.webp" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-velluto-gold flex items-center justify-center text-black font-bold text-xl rounded-full shadow-lg">2</div>
                            <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">Trasporto Monitorato</h3>
                            <p className="text-velluto-gold text-[10px] uppercase tracking-widest mb-4 font-bold">In Transito</p>
                            <p className="text-gray-400">Conducenti esperti certificati per trasporti speciali, monitoraggio costante e zero soste non autorizzate in aree pubbliche.</p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/5] bg-[#201f1f] mb-8 overflow-hidden rounded-2xl">
                                <img 
                                    alt="Consegna su Misura" 
                                    src="/immagini/consegna super car famoso.webp" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-velluto-gold flex items-center justify-center text-black font-bold text-xl rounded-full shadow-lg">3</div>
                            <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">Consegna su Misura</h3>
                            <p className="text-velluto-gold text-[10px] uppercase tracking-widest mb-4 font-bold">Destinazione</p>
                            <p className="text-gray-400">Consegna direttamente nel vostro garage o showroom. Assistenza all'accensione e verifica finale congiunta.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-32 bg-[#0e0e0e]">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-4">
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl font-serif font-bold mb-8"
                            >
                                L'opinione dei nostri collezionisti
                            </motion.h2>
                            <div className="flex items-center gap-2 text-velluto-gold mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-velluto-gold" />)}
                            </div>
                            <p className="text-gray-400 italic font-medium leading-relaxed">
                                Valutazione media 5.0 basata su oltre 400 trasporti di vetture ultra-rare.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-[#131313] p-12 border border-white/5 relative shadow-2xl rounded-2xl"
                            >
                                <Quote className="w-20 h-20 text-velluto-gold/10 absolute -top-4 -left-4" />
                                <blockquote className="relative z-10">
                                    <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-10 text-gray-200">
                                        "Affidare la mia Ferrari 250 GTO a Tramonti Diffusion è stata una decisione basata sulla fiducia. Il livello di precisione nel carico e la cortesia dello staff sono stati impeccabili."
                                    </p>
                                    <footer className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-[#201f1f] rounded-full overflow-hidden border-2 border-velluto-gold/20">
                                            <div className="w-full h-full flex items-center justify-center text-velluto-gold font-bold text-xl">LM</div>
                                        </div>
                                        <div>
                                            <cite className="not-italic font-bold text-lg block text-white">Lorenzo Mancini</cite>
                                            <span className="text-velluto-gold text-xs uppercase tracking-widest font-bold">Collezionista Privato, Milano</span>
                                        </div>
                                    </footer>
                                </blockquote>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    );
};

export default DeliveryPage;
