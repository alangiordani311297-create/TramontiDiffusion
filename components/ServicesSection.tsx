import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '../lib/servicesData';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="bg-background py-12 md:py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header e Filosofia */}
                <div className="flex flex-col items-center justify-center text-center mb-20 pb-10">
                    <div className="mb-10">
                        <h4 className="text-velluto-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Eccellenza senza compromessi</h4>
                        <h2 className="text-3xl md:text-6xl text-foreground font-serif leading-tight">
                            SERVIZI <span className="italic text-gray-400">ESCLUSIVI</span>
                        </h2>
                    </div>
                    
                    <div className="max-w-3xl">
                        <p className="text-xl md:text-3xl font-light text-[#2A3342] leading-[1.6] md:leading-[1.8] tracking-wide">
                            Non vendiamo solo automobili. Offriamo <br className="hidden md:block"/>
                            un ecosistema completo per la gestione, <br className="hidden md:block"/>
                            la cura e la protezione del tuo <br className="hidden md:block"/>
                            investimento nel tempo.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {SERVICES.map((service, index) => (
                        <Link 
                            key={index}
                            href={`/servizi/${service.slug}`} 
                            className="group relative bg-white border border-gray-200 hover:border-velluto-gold/50 transition-all duration-500 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg flex flex-col h-full"
                        >
                            <motion.div
                                className="flex flex-col h-full w-full"
                                whileHover={{ y: -5 }}
                            >
                                {/* Image Header */}
                                <div className="h-48 md:h-64 xl:h-72 overflow-hidden relative shrink-0">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500 z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-full border border-gray-200 text-velluto-gold shadow-md">
                                        <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-8 relative flex flex-col grow">
                                    <h3 className="text-sm md:text-2xl text-foreground font-serif mb-2 md:mb-4 group-hover:text-velluto-gold transition-colors text-center md:text-left leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="hidden md:block text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6 group-hover:border-gray-300 transition-colors">
                                        {service.description}
                                    </p>

                                    <div
                                        className="mt-auto text-xs md:text-sm font-bold uppercase tracking-widest text-foreground flex items-center justify-center md:justify-start gap-1 md:gap-2 group-hover:gap-2 md:group-hover:gap-4 transition-all"
                                    >
                                        <span className="hidden md:inline">Scopri di più</span>
                                        <span className="inline md:hidden">Scopri</span>
                                        <span className="text-velluto-gold">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-velluto-gold/10 border border-velluto-gold/30 p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl text-foreground font-serif mb-4">Hai bisogno di assistenza specifica?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Il nostro team di esperti è a tua disposizione per valutare interventi di manutenzione o personalizzazione.
                        </p>
                        <Link href="/#contact" className="inline-block bg-velluto-gold text-black px-12 py-5 uppercase text-sm font-bold tracking-widest hover:bg-white transition-all duration-300 text-center min-w-[280px]">
                            Contatta l&apos;Esperto
                        </Link>
                    </div>

                    {/* Abstract Background Element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-velluto-gold/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
