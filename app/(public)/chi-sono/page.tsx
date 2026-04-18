"use client";

import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';

export default function ChiSonoPage() {
    return (
        <div className="font-sans antialiased text-foreground selection:bg-velluto-gold selection:text-black min-h-screen flex flex-col" style={{ backgroundColor: '#f5f2ed' }}>
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section
                    className="relative pt-6 md:pt-16 pb-8 md:pb-12 overflow-hidden"
                    style={{
                        background: 'linear-gradient(160deg, #f7f4ef 0%, #f4efe8 55%, #efe9e2 100%)',
                    }}
                >
                    {/* Decorative orb top-right */}
                    <div
                        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(178,135,67,0.07) 0%, transparent 70%)',
                            transform: 'translate(30%, -30%)',
                        }}
                    />

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
                            <h4
                                className="text-xs font-bold uppercase tracking-[0.35em] mb-4"
                                style={{ color: '#b28743', letterSpacing: '0.35em' }}
                            >
                                La Mia Storia
                            </h4>
                            <h1 className="text-5xl md:text-7xl font-serif mb-4" style={{ color: '#1a1714' }}>
                                CHI SONO
                            </h1>
                            {/* Thin gold separator */}
                            <div className="mx-auto mt-2 mb-1 w-12 h-px" style={{ backgroundColor: '#b28743', opacity: 0.5 }} />
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section
                    className="py-12 md:py-16 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(170deg, #f4efe8 0%, #f5f2ed 40%, #efe9e2 100%)',
                    }}
                >
                    {/* Decorative blob behind image column */}
                    <div
                        className="absolute top-0 right-0 w-[600px] h-[800px] pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 70% 30%, rgba(178,135,67,0.06) 0%, transparent 65%)',
                        }}
                    />
                    {/* Decorative blob behind text */}
                    <div
                        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 20% 80%, rgba(150,120,80,0.05) 0%, transparent 60%)',
                        }}
                    />

                    <div className="container mx-auto px-6 max-w-5xl text-center md:text-left relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-start">

                            {/* Text Content */}
                            <div className="flex-1 space-y-6 leading-relaxed font-light text-lg" style={{ color: '#6b6761' }}>
                                <p>
                                    Bene, benissimo. Che cosa fa Paolo Tramonti e la sua Tramonti Diffusion?
                                    Vende auto porta a porta? Mediatore? Millantatore?
                                    Ho 61 anni, ben portati… e poi che vi interessa, tanto rimaniamo tra noi.
                                </p>
                                <p>
                                    Sono nato a Faenza, città di ceramica e di storie.
                                    Mio padre è Guerrino Tramonti, artista, ceramista, pittore e scultore, poi docente di istituti d'arte.
                                    Da lui ho preso il cognome, ma soprattutto l'ossessione per le cose ben fatte: la forma, il dettaglio, il racconto dietro ogni oggetto.
                                    Ecco, le auto speciali sono la mia "ceramica del terzo millennio": non le decoro a mano, le scelgo con la stessa mania di perfezione.
                                </p>
                                <p>
                                    Ho iniziato tanti anni fa a fare il dj, sì proprio quello, nel locale allora più grande d'Europa: la "Ca del Liscio".
                                    Ora vi farà sganasciare dalle risate, ma allora era la discoteca e la sala concerti più importante d'Europa.
                                    Il proprietario era Raoul Casadei (non gli ho mai venduto manco una Panda, attaccatissimo ai suoi mezzi), ma la storia è durata poco.
                                    Dopo un breve periodo, con le orecchie mozzate dal liscio (la disco era solo nell'intervallo e la domenica…) e aver lavorato con i famosi dj Mozart, Rubens, Dado e Lorenz al "Baccara" di Lugo, sono passato a vendere impianti stereo in auto.
                                    Allora non era come adesso: bisognava creare, inventare, studiare per ottenere suoni decenti a casa e in auto.
                                    Lo facevo forte della conoscenza del sig. Bose, venuto alla Ca del Liscio in persona per progettare l'impianto audio, e dei consigli di Guido Elmi, tuttora produttore esecutivo di Vasco Rossi.
                                </p>
                                <p>
                                    Poi ci sono state le prime radio libere a Bologna,
                                    la conoscenza tramite Massimo Fregnani del mio primo cliente dello spettacolo: Pino Daniele,
                                    a cui sono seguiti Edoardo Bennato e Vasco Rossi.
                                    Da oltre 20 anni sono ancora miei clienti… e soprattutto amici.
                                </p>
                                <p>
                                    Da allora vendo auto speciali nel mondo della moda, dello spettacolo e del cinema:
                                    dai citati a tanti altri, da Paolo Villaggio (con cui ho condiviso le peggiori/migliori nefandezze della gioventù) a Parietti, Pozzetto, Gigi Proietti,
                                    passando per il parsimonioso amico Gianni Morandi, Lucio Dalla – amico d'arte (auto poche, musica tanta) – insieme a Vittorio Sgarbi,
                                    fino al super amico Biagio Antonacci, a cui vendetti la prima auto appena inciso il primo disco.
                                </p>
                                <p>
                                    Insomma, ora ho un sito di auto speciali che è il più visitato in Italia:
                                    le auto sono poche, ma i prezzi sono bassissimi.
                                    Comunque il prossimo anno Rizzoli pubblicherà il mio libro:
                                    lì saprete davvero tutto, e sarà molto più interessante di quello che leggete qui.
                                    Diciamo che, oltre che di auto, sono un discreto esperto della storia della musica italiana e del cinema degli ultimi 20 anni.
                                    Ora avete un fornitore d'auto molto interessante con il quale potete condividere molte cose, non solo il contratto.
                                </p>
                                <p style={{ color: '#b28743', fontWeight: 500 }}>
                                    Sono sempre a disposizione vostra al vecchio numero 337 550 300 (7 giorni su 7, dalle 7 alle 23).
                                    Le auto del mio sito sono mie e pronte in 24 ore per la vostra gioia.
                                </p>
                            </div>

                            {/* Thin vertical divider — desktop only */}
                            <div
                                className="hidden md:block flex-shrink-0 w-px self-stretch"
                                style={{ backgroundColor: 'rgba(178,135,67,0.18)', marginTop: '6px' }}
                            />

                            {/* Vertical Photo Column */}
                            <div className="flex-1 w-full flex flex-col gap-12 pb-10 pt-2 md:pt-0 pl-0 md:pl-8">
                                {/* Photo New - Bentley */}
                                <motion.div
                                    className="w-56 md:w-80 self-center z-10"
                                    style={{
                                        padding: '8px',
                                        backgroundColor: '#f7f4ef',
                                        boxShadow: '0 8px 32px rgba(90,70,50,0.13), 0 1px 4px rgba(90,70,50,0.07)',
                                        border: '1px solid rgba(178,135,67,0.12)',
                                    }}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/paolo_tramonti_bentley.png" alt="Paolo Tramonti Bentley" className="w-full h-auto aspect-[3/4] object-cover" />
                                </motion.div>

                                {/* Photo 1 */}
                                <motion.div
                                    className="w-48 md:w-64 self-start"
                                    style={{
                                        padding: '8px',
                                        backgroundColor: '#f7f4ef',
                                        boxShadow: '0 6px 24px rgba(90,70,50,0.11), 0 1px 3px rgba(90,70,50,0.06)',
                                        border: '1px solid rgba(178,135,67,0.1)',
                                    }}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_1.jpg" alt="Ricordi 1" className="w-full h-auto aspect-[4/3] object-cover filter sepia-[0.3]" />
                                </motion.div>

                                {/* Photo 2 */}
                                <motion.div
                                    className="w-52 md:w-72 self-end"
                                    style={{
                                        padding: '8px',
                                        backgroundColor: '#f7f4ef',
                                        boxShadow: '0 6px 24px rgba(90,70,50,0.11), 0 1px 3px rgba(90,70,50,0.06)',
                                        border: '1px solid rgba(178,135,67,0.1)',
                                    }}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_2.jpg" alt="Ricordi 2" className="w-full h-auto aspect-[4/3] object-cover filter contrast-110" />
                                </motion.div>

                                {/* Photo 3 */}
                                <motion.div
                                    className="w-44 md:w-60 self-center"
                                    style={{
                                        padding: '8px',
                                        backgroundColor: '#f7f4ef',
                                        boxShadow: '0 6px 24px rgba(90,70,50,0.11), 0 1px 3px rgba(90,70,50,0.06)',
                                        border: '1px solid rgba(178,135,67,0.1)',
                                    }}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_3.jpg" alt="Ricordi 3" className="w-full h-auto aspect-[4/3] object-cover filter grayscale-[0.2]" />
                                </motion.div>

                                {/* Photo 4 */}
                                <motion.div
                                    className="w-48 md:w-64 self-start"
                                    style={{
                                        padding: '8px',
                                        backgroundColor: '#f7f4ef',
                                        boxShadow: '0 6px 24px rgba(90,70,50,0.11), 0 1px 3px rgba(90,70,50,0.06)',
                                        border: '1px solid rgba(178,135,67,0.1)',
                                    }}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <img src="/immagini/chi_sono/foto_4.jpg" alt="Ricordi 4" className="w-full h-auto aspect-[4/3] object-cover" />
                                </motion.div>

                                {/* Photo 5 */}
                                <motion.div
                                    className="w-48 md:w-64 self-end"
                                    style={{
                                        padding: '8px',
                                        backgroundColor: '#f7f4ef',
                                        boxShadow: '0 6px 24px rgba(90,70,50,0.11), 0 1px 3px rgba(90,70,50,0.06)',
                                        border: '1px solid rgba(178,135,67,0.1)',
                                    }}
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
