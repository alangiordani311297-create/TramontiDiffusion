'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    Wallet, 
    History, 
    Key, 
    Gavel,
    ShieldCheck,
    Gem,
    UserCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FinancePage = () => {
    return (
        <>
        <Navbar />
        <div className="bg-[#fcf9f8] text-[#1c1b1b] font-sans selection:bg-[#ffe08d] selection:text-[#241a00]">
            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            alt="Luxury Car Finance" 
                            className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]" 
                            src="/immagini/servizio di finanziamento.png"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f8] via-[#fcf9f8]/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2">
                        <div className="max-w-xl">
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="font-serif text-5xl md:text-7xl text-[#1c1b1b] mb-6 leading-[1.1]"
                            >
                                Servizi di Finanziamento
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="font-serif italic text-xl md:text-2xl text-[#4e6073] mb-10"
                            >
                                Flessibilità Finanziaria su Misura
                            </motion.p>
                            <div className="h-px w-24 bg-[#745b00] mb-10"></div>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-[#4d4635] text-lg leading-relaxed mb-8"
                            >
                                Eleviamo l'acquisizione automobilistica a forma d'arte. Le nostre soluzioni di finanziamento sono progettate per riflettere il prestigio del vostro investimento, combinando efficienza fiscale e flessibilità patrimoniale.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Link 
                                    href="/#contact"
                                    className="inline-block bg-[#745b00] text-white px-10 py-4 font-bold tracking-[0.2em] hover:bg-[#584400] transition-all shadow-xl shadow-[#745b00]/10"
                                >
                                    RICHIEDI INFORMAZIONI
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Section: Editorial Two-Column */}
                <section className="py-32 px-8 max-w-7xl mx-auto bg-[#fcf9f8]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Left Column: Narrative */}
                        <div className="lg:col-span-5">
                            <span className="text-[#745b00] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Architettura Finanziaria</span>
                            <h2 className="font-serif text-4xl text-[#1c1b1b] mb-8">L'Eccellenza oltre la Performance</h2>
                            <div className="space-y-6 text-[#4d4635] leading-relaxed text-lg text-justify">
                                <p>
                                    Ogni veicolo di lusso rappresenta un asset strategico. Analizziamo la vostra posizione finanziaria per offrire non solo un prestito, ma una strategia di gestione del capitale.
                                </p>
                                <blockquote className="font-serif italic text-2xl text-[#745b00] py-8 border-l-2 border-[#d5af39] pl-8 my-10">
                                    "Il vero lusso è la libertà di decidere come e quando investire la propria liquidità."
                                </blockquote>
                                <p>
                                    Sia che si tratti di un'opera d'arte su ruote degli anni '60 o dell'ultima hypercar tecnologica, i nostri consulenti definiscono strutture di pagamento che preservano il vostro capitale operativo ottimizzando al contempo i benefici fiscali.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Products Bento Grid */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="bg-[#f6f3f2] p-10 group hover:bg-[#eae7e7] transition-colors duration-500">
                                <div className="flex items-start gap-6">
                                    <span className="p-3 bg-white text-[#745b00]">
                                        <Wallet className="w-8 h-8" />
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1c1b1b] mb-3">Leasing con Maxi-Rata Finale</h3>
                                        <p className="text-[#4d4635] text-sm leading-relaxed">
                                            Massimizzate i flussi di cassa immediati mantenendo la possibilità di acquisire totalmente il veicolo al termine del contratto. Una soluzione ideale per una rotazione frequente della flotta personale.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f6f3f2] p-10 group hover:bg-[#eae7e7] transition-colors duration-500">
                                <div className="flex items-start gap-6">
                                    <span className="p-3 bg-white text-[#745b00]">
                                        <History className="w-8 h-8" />
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1c1b1b] mb-3">Finanziamenti per Auto d'Epoca</h3>
                                        <p className="text-[#4d4635] text-sm leading-relaxed">
                                            Programmi specialistici per collezionisti che riconoscono il valore crescente degli asset storici. Valutazioni basate sulla rarità e sulla genealogia del veicolo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f6f3f2] p-10 group hover:bg-[#eae7e7] transition-colors duration-500">
                                <div className="flex items-start gap-6">
                                    <span className="p-3 bg-white text-[#745b00]">
                                        <Key className="w-8 h-8" />
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1c1b1b] mb-3">Noleggio a Lungo Termine Premium</h3>
                                        <p className="text-[#4d4635] text-sm leading-relaxed">
                                            La quintessenza della comodità. Manutenzione, assicurazione e gestione burocratica incluse in un unico canone mensile deducibile, per un'esperienza di guida senza pensieri.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f6f3f2] p-10 group hover:bg-[#eae7e7] transition-colors duration-500">
                                <div className="flex items-start gap-6">
                                    <span className="p-3 bg-white text-[#745b00]">
                                        <Gavel className="w-8 h-8" />
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1c1b1b] mb-3">Consulenza Fiscale Dedicata</h3>
                                        <p className="text-[#4d4635] text-sm leading-relaxed">
                                            Collaboriamo con i vostri consulenti per integrare l'acquisto dell'auto nella vostra pianificazione fiscale internazionale, ottimizzando l'impatto fiscale e la privacy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Highlight */}
                <section className="bg-[#e5e2e1] py-24">
                    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <UserCheck className="w-10 h-10 text-[#745b00]" />
                            </div>
                            <h4 className="font-serif text-lg">Approvazione Discreta</h4>
                            <p className="text-sm text-[#4e6073]">Procedure rapide con la massima riservatezza per i nostri clienti HNWI.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <Gem className="w-10 h-10 text-[#745b00]" />
                            </div>
                            <h4 className="font-serif text-lg">Esclusività Garantita</h4>
                            <p className="text-sm text-[#4e6073]">Accesso a tassi preferenziali non disponibili sul mercato retail tradizionale.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <ShieldCheck className="w-10 h-10 text-[#745b00]" />
                            </div>
                            <h4 className="font-serif text-lg">Concierge Finanziario</h4>
                            <p className="text-sm text-[#4e6073]">Un unico punto di contatto dedicato per ogni vostra esigenza amministrativa.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
        </>
    );
};

export default FinancePage;
