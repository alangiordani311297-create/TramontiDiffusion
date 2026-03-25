"use client";

import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';

export default function ChiSonoPage() {
    return (
        <div className="font-sans antialiased text-foreground selection:bg-velluto-gold selection:text-black min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section of About Page */}
                <section className="relative pt-6 md:pt-16 pb-8 md:pb-12 overflow-hidden bg-white">
                    {/* Banner Image Mobile */}
                    <div className="w-full block md:hidden mb-0">
                        <img 
                            src="/immagini/chi_sono/paolo_tramonti_bentley.png" 
                            alt="Paolo Tramonti" 
                            className="w-full h-auto object-cover" 
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-yellow-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                                La Mia Storia
                            </h4>
                            <h1 className="text-5xl md:text-7xl font-serif text-black mb-4">
                                CHI SONO
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12 md:py-16 bg-background">
                    <div className="container mx-auto px-6 max-w-4xl text-center md:text-left">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            {/* Text Content */}
                            <div className="flex-1 space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                                <p>
                                    Bene, benissimo. Che cosa fa Paolo Tramonti e la sua Tramonti Diffusion? Vende auto porta a porta? Mediatore? Millantatore? Ho 61 anni portati... beh che vi interessa.
                                </p>
                                <p>
                                    Ho iniziato tanti anni fa a fare il dj, sì proprio quello, nel locale allora più grande d'Europa: era la "Ca del Liscio" che ora vi farà sganasciare dalle risate ma allora era la discoteca e hall per concerti più importante d'Europa. Il proprietario era Raoul Casadei (non gli ho mai venduto manco na panda... attaccatissimo) ma la questione è durata poco e dopo un breve periodo e le orecchie mozzate dal liscio... (la disco era solo nell'intervallo e la domenica…) e avere lavorato con i famosi dj Mozart, Rubens, Dado e Lorenz al "Baccara" di Lugo mi misi a vendere impianti stereo in auto (allora non era come adesso bisognava creare... inventare studiare per ottenere suoni decenti a casa e in auto) forte della conoscenza del sig. Bose, che venne alla Ca del Liscio in persona per progettare l'impianto audio, e dei consigli di Guido Elmi tuttora produttore esecutivo di Vasco.
                                </p>
                                <p>
                                    Poi anni nelle prime radio libere a Bologna... la conoscenza tramite Massimo Fregnani del mio primo cliente dello spettacolo... Pino Daniele, a cui seguì Edoardo Bennato e Vasco Rossi. Da 20 anni sono ancora miei clienti e soprattutto amici. Da allora vendo auto speciali nel mondo della moda, dello spettacolo e del cinema... praticamente dai citati a tanti altri... da Paolo Villaggio con cui ho condiviso le peggiori/migliori nefandezze della gioventù alla Parietti, Pozzetto, Gigi Proietti... il parsimonioso amico Gianni Morandi, Lucio Dalla amico d'arte (auto poche) insieme a Vittorio Sgarbi... il super amico Biagio Antonacci al quale vendetti la prima auto appena inciso il primo disco...
                                </p>
                                <p>
                                    Insomma ora ho un sito di auto speciali che è il più visitato in Italia, ci sono poche auto ma a prezzi bassissimi. Comunque Rizzoli il prossimo anno pubblicherà il mio libro e lì saprete tutto... sarà tutto molto interessante. Diciamo che oltre che di auto sono un discreto esperto della storia della musica italiana e del cinema degli ultimi 20 anni... ora avete un fornitore d'auto molto interessante con il quale potete condividere molte cose.
                                </p>
                                <p className="text-velluto-gold font-medium">
                                    Sono sempre a disposizione vostra al vecchio numero 337550300 (7 giorni su 7 dalle 7 alle 23). Le auto del mio sito sono mie e pronte in 24 ore per la vostra gioia.
                                </p>
                            </div>

                            {/* Visual Element (Placeholder for Founder Image or Showroom Detail) */}
                            {/* Vertical Photo Column */}
                            <div className="flex-1 w-full flex flex-col gap-12 py-10 pl-0 md:pl-12">
                                {/* Photo New - Bentley */}
                                <motion.div
                                    className="w-56 md:w-80 p-2 bg-white shadow-xl transform self-center z-10"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/paolo_tramonti_bentley.png" alt="Paolo Tramonti Bentley" className="w-full h-auto aspect-[3/4] object-cover" />
                                </motion.div>

                                {/* Photo 1 */}
                                <motion.div
                                    className="w-48 md:w-64 p-2 bg-white shadow-xl transform self-start"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_1.jpg" alt="Ricordi 1" className="w-full h-auto aspect-[4/3] object-cover filter sepia-[0.3]" />
                                </motion.div>

                                {/* Photo 2 */}
                                <motion.div
                                    className="w-52 md:w-72 p-2 bg-white shadow-xl transform self-end"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_2.jpg" alt="Ricordi 2" className="w-full h-auto aspect-[4/3] object-cover filter contrast-110" />
                                </motion.div>

                                {/* Photo 3 */}
                                <motion.div
                                    className="w-44 md:w-60 p-2 bg-white shadow-xl transform self-center"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_3.jpg" alt="Ricordi 3" className="w-full h-auto aspect-[4/3] object-cover filter grayscale-[0.2]" />
                                </motion.div>

                                {/* Photo 4 */}
                                <motion.div
                                    className="w-48 md:w-64 p-2 bg-white shadow-xl transform self-start"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_4.jpg" alt="Ricordi 4" className="w-full h-auto aspect-[4/3] object-cover" />
                                </motion.div>

                                {/* Photo 5 */}
                                <motion.div
                                    className="w-48 md:w-64 p-2 bg-white shadow-xl transform self-end"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: -1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_5.jpg" alt="Ricordi 5" className="w-full h-auto aspect-[4/3] object-cover filter sepia-[0.1]" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
