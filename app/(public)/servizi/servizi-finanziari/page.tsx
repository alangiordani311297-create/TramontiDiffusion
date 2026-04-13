'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, BadgePercent, ClipboardCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinancePage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#131313] min-h-screen text-white selection:bg-[#e9c176] selection:text-[#131313]">
                {/* Hero section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/immagini/financial_services.png" 
                            alt="Luxury Finance Office" 
                            className="w-full h-full object-cover brightness-[0.3]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/60 to-[#131313]"></div>
                    </div>
                    
                    <div className="relative z-10 container mx-auto px-6 text-center pt-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#e9c176] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Wealth Management</span>
                            <h1 className="text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
                                SOLUZIONI <br/> <span className="text-[#e9c176] italic">FINANZIARIE.</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                                L'acquisto di una supercar è un investimento strategico. Offriamo prodotti finanziari strutturati per ottimizzare la vostra posizione fiscale e patrimoniale.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Back Link */}
                <div className="container mx-auto px-6 -mt-12 relative z-20">
                    <Link
                        href="/#services"
                        className="text-xs font-bold uppercase tracking-widest text-[#a17f3c] hover:text-[#e9c176] transition-colors mb-12 inline-block"
                    >
                        ← Torna ai Servizi
                    </Link>
                </div>

                {/* Main Content */}
                <section className="container mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Box 1 */}
                        <div className="p-10 border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all group">
                            <div className="mb-8 text-[#e9c176] group-hover:scale-110 transition-transform origin-left">
                                <Landmark className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-6">Leasing Operativo</h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-10">
                                La soluzione ideale per chi desidera cambiare frequentemente vettura ottimizzando i costi aziendali e mantenendo la liquidità.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#e9c176]" /> Canone fisso tutto incluso
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#e9c176]" /> Vantaggi fiscali immediati
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div className="p-10 border border-[#e9c176]/20 bg-[#e9c176]/5 hover:bg-[#e9c176]/10 transition-all group">
                            <div className="mb-8 text-[#e9c176] group-hover:scale-110 transition-transform origin-left">
                                <BadgePercent className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-6">Finanziamento Balloon</h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-10">
                                Un piano flessibile con mini-rate mensili e una maxi-rata finale che ti permette di decidere se tenere, cambiare o restituire l'auto.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#e9c176]" /> Basso impatto mensile
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#e9c176]" /> Libertà di scelta al termine
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div className="p-10 border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all group">
                            <div className="mb-8 text-[#e9c176] group-hover:scale-110 transition-transform origin-left">
                                <ShieldCheck className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-6">Leasing per Storiche</h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-10">
                                Prodotti esclusivi per il finanziamento di auto d'epoca e da collezione, con perizie specializzate sul valore storico.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#e9c176]" /> Valutazione periti d'epoca
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-[#e9c176]" /> Piani fino a 84 mesi
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Partner Section */}
                    <div className="mt-32 py-20 border-y border-white/5 text-center">
                        <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 mb-12">I nostri partner finanziari</h4>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                            <span className="text-xl md:text-3xl font-serif font-black tracking-tighter">AGOS</span>
                            <span className="text-xl md:text-3xl font-serif font-black tracking-tighter">DEUTSCHE BANK</span>
                            <span className="text-xl md:text-3xl font-serif font-black tracking-tighter">SANTANDER</span>
                            <span className="text-xl md:text-3xl font-serif font-black tracking-tighter">FIDITALIA</span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="pb-32 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1c1b1b] to-black border border-white/5 p-12 md:p-20 text-center rounded-sm">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic text-white">Consulenza personalizzata.</h2>
                        <p className="text-gray-400 mb-12 text-lg font-light">Contatta i nostri esperti finanziari per una simulazione su misura delle tue esigenze fiscali.</p>
                        <Link
                            href="/#contact"
                            className="bg-[#e9c176] text-[#131313] px-16 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all inline-block"
                        >
                            Contatta l'Esperto
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
