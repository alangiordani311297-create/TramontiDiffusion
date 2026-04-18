'use client';
import { motion } from 'framer-motion';
import { CircleDollarSign, ShieldCheck, FileText, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SellPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/immagini/vendi la tua auto.jpg" 
                            alt="Luxury Car Detailing" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f8] via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-white"
                        >
                            Vendi la tua auto a <br/>
                            <span className="text-[#a17f3c] italic">Tramonti Diffusion.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Ti aiutiamo a vendere la tua auto nel modo più semplice, veloce e sicuro. Ci occupiamo di tutto noi per farti ottenere la migliore valutazione di mercato senza stress.
                        </motion.p>
                    </div>
                </section>

                {/* Form Section */}
                <section className="relative -mt-32 z-20 pb-24 px-6 bg-[#131313] pt-48 -mb-24">
                    <div className="max-w-4xl mx-auto">
                        {/* High Contrast White Card on Dark Background */}
                        <div className="bg-white p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm border-t-4 border-[#a17f3c]">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#1c1b1b]">Richiedi la tua valutazione</h2>
                                <p className="text-[#a17f3c] uppercase tracking-widest text-xs font-bold mb-6">Processo Privato & Riservato</p>
                                <div className="h-0.5 w-12 bg-[#a17f3c] mx-auto"></div>
                            </div>
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Marca e Modello</label>
                                        <input className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-3 transition-colors text-lg placeholder:text-gray-200" placeholder="Es. Porsche 911 Carrera" type="text"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Anno di Immatricolazione</label>
                                        <input className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-3 transition-colors text-lg placeholder:text-gray-200" placeholder="2023" type="number"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Chilometraggio (km)</label>
                                        <input className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-3 transition-colors text-lg placeholder:text-gray-200" placeholder="15.000" type="text"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Condizioni del veicolo</label>
                                        <select className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-3 transition-colors text-lg appearance-none cursor-pointer">
                                            <option>Pari al nuovo</option>
                                            <option>Ottime condizioni</option>
                                            <option>Buone condizioni</option>
                                            <option>Da ripristinare</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pt-10 border-t border-gray-50">
                                    <h3 className="text-xs uppercase tracking-widest text-[#a17f3c] font-bold mb-8">I tuoi recapiti</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-400">Nome Completo</label>
                                            <input className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-2 transition-colors" type="text"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-400">Email</label>
                                            <input className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-2 transition-colors" type="email"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gray-400">Telefono</label>
                                            <input className="w-full bg-transparent border-0 border-b border-gray-100 focus:border-[#a17f3c] focus:ring-0 text-[#1c1b1b] px-0 py-2 transition-colors" type="tel"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 text-center">
                                    <button className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-[#1c1b1b] bg-[#e9c176] overflow-hidden transition-all duration-300 hover:bg-[#a17f3c] hover:text-[#1c1b1b]" type="submit">
                                        <span className="relative uppercase tracking-widest text-sm">Richiedi Valutazione</span>
                                    </button>
                                    <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest">Inviando la richiesta accetti la nostra privacy policy.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Benefits Section - DARK CONTRAST */}
                <section className="py-24 px-6 bg-[#131313] text-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 flex items-center justify-center bg-white/5 mb-8 group-hover:bg-white/10 transition-colors rounded-full border border-white/10">
                                    <CircleDollarSign className="text-[#a17f3c] w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 tracking-tight">Valutazione Equa</h4>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">Analizziamo il mercato in tempo reale per offrirti il valore reale del tuo investimento automotive.</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 flex items-center justify-center bg-white/5 mb-8 group-hover:bg-white/10 transition-colors rounded-full border border-white/10">
                                    <ShieldCheck className="text-[#a17f3c] w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 tracking-tight">Pagamento Sicuro</h4>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">Transazioni immediate e tracciate. Massima trasparenza finanziaria in ogni fase della vendita.</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 flex items-center justify-center bg-white/5 mb-8 group-hover:bg-white/10 transition-colors rounded-full border border-white/10">
                                    <FileText className="text-[#a17f3c] w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 tracking-tight">Gestione Pratiche</h4>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">Dalla burocrazia al passaggio di proprietà, il nostro atelier si occupa di ogni dettaglio amministrativo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action - FULL CONTRAST */}
                <section className="py-24 px-6 bg-[#1c1b1b]">
                    <div className="max-w-5xl mx-auto border border-white/5 bg-white/5 p-12 md:p-20 text-center relative overflow-hidden rounded-sm">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-white italic">Preferisci parlare con un esperto?</h2>
                            <div className="h-0.5 w-12 bg-[#a17f3c] mx-auto mb-8"></div>
                            <p className="text-gray-400 mb-12 text-lg font-light">Siamo a tua completa disposizione per una consulenza diretta immediata.</p>
                            <a className="inline-flex items-center space-x-6 group" href="tel:+390123456789">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-[#a17f3c]/20 transition-colors">
                                    <Phone className="text-[#a17f3c] w-8 h-8" />
                                </div>
                                <span className="text-3xl md:text-5xl font-black tracking-tighter text-white transition-colors group-hover:text-[#a17f3c]">+39 0123 456 789</span>
                            </a>
                        </div>
                        {/* Decorative side line */}
                        <div className="absolute top-0 right-0 w-1 h-full bg-[#a17f3c]"></div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
