'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function DetailingPage() {
    const services = [
        { 
            label: 'Applicazione pellicole Paint Protection Film', 
            desc: 'Proteggi e personalizza la tua auto con pellicole PPF (Paint Protection Film) trasparenti che preservano la vernice originale da graffi, scheggiature e agenti atmosferici, oppure scegli pellicole wrap colorate per un restyling completo. Soluzioni professionali per protezione totale o parziale della carrozzeria.',
            img: '/immagini/servizio ppf.webp'
        },
        { 
            label: 'Detailing esterni', 
            desc: 'Lucidatura professionale della carrozzeria con tecniche avanzate per rimuovere graffi superficiali, aloni e ossidazioni. Include lavaggio approfondito, decontaminazione, polish e protezione con cera o ceramica per una brillantezza duratura e protezione contro gli agenti esterni.',
            img: '/immagini/servizio lucidatura.webp'
        },
        { 
            label: 'Grafiche personalizzate e Wrapping', 
            desc: 'Trasforma la tua auto in un veicolo unico con grafiche adesive su misura: loghi aziendali, design sportivi, effetti cromo o opaco, strisce racing e decorazioni personalizzate. Realizzazione professionale con materiali di alta qualità per vetture private e commerciali.',
            img: '/immagini/servizio wrapping.jpg'
        },
        { 
            label: 'Detailing interni', 
            desc: 'Restituisci nuova vita agli interni della tua auto con un trattamento professionale completo: pulizia profonda di sedili, tappezzeria e plastiche, sanificazione, trattamento pelli, rimozione di macchie e odori. Cura meticolosa per ogni dettaglio dell’abitacolo.',
            img: '/immagini/servizio detailing interno.jpeg'
        },
        { 
            label: 'Pellicole oscuranti vetri', 
            desc: 'Oscuramento professionale dei vetri con pellicole certificate che garantiscono privacy, riduzione del calore interno fino al 60%, protezione dai raggi UV e maggiore sicurezza. Diverse gradazioni disponibili nel rispetto del codice della strada italiano.',
            img: '/immagini/servizio pellicole auto di lusso.jpeg'
        },
    ];

    return (
        <>
            <Navbar />
            <main className="bg-[#131313] min-h-screen pb-24 text-white selection:bg-[#e9c176] selection:text-[#131313]">
            {/* Back Link */}
            <div className="container mx-auto px-6 pt-32">
                <Link
                    href="/#services"
                    className="text-xs font-bold uppercase tracking-widest text-[#a17f3c] hover:text-[#e9c176] transition-colors mb-12 inline-block"
                >
                    ← Torna ai Servizi
                </Link>
            </div>

            {/* ── HERO: two-column ── */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[70vh]">

                    {/* LEFT – text */}
                    <div className="flex flex-col justify-center pr-0 lg:pr-16 py-12 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6 text-[#e9c176]">
                            <span className="w-12 h-[1px] bg-[#e9c176]"></span>
                            <span className="text-xs font-bold uppercase tracking-widest">Servizio Esclusivo</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif font-bold leading-tight mb-6">
                            Il Detailing che la tua <br/> auto merita davvero.
                        </h1>

                        <p className="text-gray-400 text-base md:text-lg mb-4">
                            Richiedi una consulenza gratuita
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <Link
                                href="/#contact"
                                className="bg-[#e9c176] text-[#131313] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#a17f3c] transition-all border border-[#e9c176]"
                            >
                                Richiedi Informazioni
                            </Link>
                            <Link
                                href="#dettagli"
                                className="border border-white/10 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#e9c176] hover:text-[#e9c176] transition-all"
                            >
                                Scopri i Servizi
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – image */}
                    <div className="relative order-1 lg:order-2 flex items-center justify-center p-4 lg:p-12">
                        <div className="h-[300px] lg:h-[450px] w-full max-w-[600px] relative overflow-hidden rounded-3xl shadow-2xl border border-white/5">
                            <img
                                src="/immagini/foto pagina detailing.webp"
                                alt="Detailing auto di lusso"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Caption under image - adjusted position */}
                        <div className="absolute -bottom-6 -left-6 lg:left-0 bg-[#1c1b1b] border-t-4 border-[#e9c176] px-8 py-6 shadow-2xl max-w-lg hidden md:block border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                La nostra passione e determinazione, <br/> al servizio della vostra auto.
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed font-light">
                                Il detailing non è un semplice lavaggio, ma un’arte fatta di precisione, cura e competenza. Utilizziamo prodotti di altissima qualità per esaltarne la brillantezza e proteggerla nel tempo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURES SCROLLING SECTION ── */}
            <section id="dettagli" className="container mx-auto px-6 mt-24">
                <div className="py-16 md:py-24">
                    <div className="flex flex-col items-center justify-center text-center mb-24 px-6">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight"
                        >
                            Servizi completi per valorizzare <br /> e proteggere la tua auto
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#e9c176] text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-12"
                        >
                            esplora i nostri servizi
                        </motion.p>
                    </div>

                    <div className="space-y-32 md:space-y-48">
                        {services.map(({ label, desc, img }, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
                            >
                                {/* Left Side - Image */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group border border-white/5">
                                        <img 
                                            src={img} 
                                            alt={label} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                    </div>
                                </motion.div>

                                {/* Right Side - Text */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    className="w-full lg:w-1/2 text-left"
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                                        {label}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light border-l-2 border-[#e9c176] pl-6">
                                        {desc}
                                    </p>
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=393462319293&text=Ciao%2C%20sono%20interessato%20al%20servizio%20di%20detailing"
                                        className="inline-flex items-center gap-3 text-[#e9c176] font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all group"
                                    >
                                        Contattaci per questo servizio
                                        <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BOTTOM ── */}
            <section className="container mx-auto px-6 mt-20">
                <div className="border-t border-white/10 pt-16 flex flex-col items-center text-center gap-10">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Pronti a restituire splendore alla tua vettura?</h3>
                        <p className="text-gray-400 text-base md:text-lg">Contattaci per un preventivo personalizzato e senza impegno.</p>
                    </div>
                    <Link
                        href="/#contact"
                        className="bg-[#e9c176] text-[#131313] px-16 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#a17f3c] transition-all border border-[#e9c176] shadow-xl"
                    >
                        Richiedi Informazioni
                    </Link>
                </div>
            </section>
            </main>
            <Footer />
        </>
    );
}
