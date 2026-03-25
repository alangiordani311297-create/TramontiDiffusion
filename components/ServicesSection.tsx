import React, { useState } from 'react';
import { Wrench, Shield, Truck, CreditCard, Sparkles, Gem, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mockup Data for the Modal
const SERVICES = [
    {
        icon: Wrench,
        title: "Officina Certificata",
        description: "Tecnici specializzati Ferrari, Lamborghini e Porsche. Utilizziamo solo ricambi originali e diagnostica ufficiale per mantenere le prestazioni della tua supercar al massimo livello.",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop",
        details: {
            headline: "La tua Supercar merita il meglio.",
            content: "La nostra officina è un tempio della meccanica di precisione. Ogni intervento viene eseguito seguendo rigorosamente gli standard della casa madre. Disponiamo di ponti sollevatori a basso profilo per vetture sportive e strumenti di diagnosi ufficiali.",
            features: [
                "Diagnostica Ufficiale Leonardo",
                "Tagliandi e Manutenzione Ordinaria",
                "Restauro Motori d'Epoca",
                "Assetto e Bilanciatura Elettronica"
            ]
        }
    },
    {
        icon: Sparkles,
        title: "Detailing & PPF",
        description: "Trattamenti nanotecnologici e applicazione di pellicole protettive (PPF) per preservare la vernice originale. Il nostro servizio di detailing riporta l'auto a condizioni da concorso.",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
        details: {
            headline: "Perfezione Estetica Assoluta",
            content: "Il detailing non è solo lavaggio, è un'arte. Utilizziamo prodotti di altissima gamma per correggere difetti della vernice, proteggerla con trattamenti ceramici e applicare pellicole PPF invisibili e autorigeneranti.",
            features: [
                "Correzione Vernice a 3 Step",
                "Applicazione PPF Xpel",
                "Nano-Ceramic Coating",
                "Pulizia e Nutrizione Pelle Interna"
            ]
        }
    },
    {
        icon: Truck,
        title: "Trasporto Blindato",
        description: "Consegna della vettura ovunque nel mondo tramite i nostri camion chiusi e assicurati. Gestiamo tutte le pratiche doganali per l'export internazionale.",
        image: "/immagini/trasporto_blindato.png",
        details: {
            headline: "Logistica Sicura e Riservata",
            content: "Che tu debba spostare la tua auto per un evento, una vacanza o una vendita, il nostro servizio di trasporto blindato garantisce la massima sicurezza e privacy. I nostri mezzi sono anonimi e dotati di sistemi di tracciamento satellitare.",
            features: [
                "Camion Chiusi e Riscaldati",
                "Copertura Assicurativa All-Risk",
                "Gestione Pratiche Doganali",
                "Servizio Door-to-Door Internazionale"
            ]
        }
    },
    {
        icon: CreditCard,
        title: "Servizi di Finanziamento",
        description: "Soluzioni di leasing e finanziamento su misura, incluse opzioni con maxi-rata finale e leasing per auto d'epoca. Collaboriamo con i principali istituti di credito private.",
        image: "/immagini/financial_services.png",
        details: {
            headline: "Flessibilità Finanziaria su Misura",
            content: "Offriamo prodotti finanziari strutturati per ottimizzare l'acquisto della tua auto di lusso. Dal leasing operativo al finanziamento classico, studiamo la soluzione fiscale più adatta alle tue esigenze.",
            features: [
                "Leasing con Maxi-Rata Finale",
                "Finanziamenti per Auto d'Epoca",
                "Noleggio a Lungo Termine Premium",
                "Consulenza Fiscale Dedicata"
            ]
        }
    },
    {
        icon: Shield,
        title: "Estensione Garanzia",
        description: "Pacchetti di garanzia estesa fino a 24 mesi su tutto l'usato certificato Tramonti Diffusion, per goderti la tua auto senza pensieri.",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        details: {
            headline: "Guida Senza Pensieri",
            content: "Le nostre auto sono super controllate, ma per la tua massima tranquillità offriamo estensioni di garanzia complete che coprono parti meccaniche, elettriche ed elettroniche fino a 24 mesi dall'acquisto.",
            features: [
                "Copertura Europea Completa",
                "Soccorso Stradale H24 Incluso",
                "Nessuna Franchigia",
                "Trasferibilità in Caso di Vendita"
            ]
        }
    },
    {
        icon: Gem,
        title: "Concierge & Custodia",
        description: "Servizio di rimessaggio in ambiente climatizzato e sorvegliato H24. Manteniamo la batteria in carica e l'auto pronta per quando vorrai guidarla.",
        image: "/immagini/concierge_custodia.png",
        details: {
            headline: "Il Resort 5 Stelle per la tua Auto",
            content: "Il nostro caveau è il luogo ideale dove custodire la tua collezione. Ambiente a temperatura controllata, mantenitori di carica e controlli periodici garantiscono che la tua auto sia sempre pronta all'uso.",
            features: [
                "Sorveglianza Armata H24",
                "Ambiente Deumidificato",
                "Messa in Moto Periodica",
                "Servizio di Consegna e Ritiro"
            ]
        }
    }
];

const ServicesSection: React.FC = () => {
    const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

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
                        <motion.div
                            key={index}
                            className="group relative bg-white border border-gray-200 hover:border-velluto-gold/50 transition-all duration-500 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg flex flex-col h-full"
                            onClick={() => setSelectedService(service)}
                            whileHover={{ y: -5 }}
                        >
                            {/* Image Header */}
                            <div className="h-32 md:h-48 overflow-hidden relative shrink-0">
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
                                    className="mt-auto text-[10px] md:text-xs uppercase tracking-widest text-foreground flex items-center justify-center md:justify-start gap-1 md:gap-2 group-hover:gap-2 md:group-hover:gap-4 transition-all"
                                >
                                    <span className="hidden md:inline">Scopri di più</span>
                                    <span className="inline md:hidden">Scopri</span>
                                    <span className="text-velluto-gold">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-velluto-gold/10 border border-velluto-gold/30 p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl text-foreground font-serif mb-4">Hai bisogno di assistenza specifica?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Il nostro team di esperti è a tua disposizione per valutare interventi di manutenzione o personalizzazione.
                        </p>
                        <button className="bg-velluto-gold text-black px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white transition-all duration-300">
                            Prenota Appuntamento Service
                        </button>
                    </div>

                    {/* Abstract Background Element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-velluto-gold/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white border border-gray-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-velluto-gold hover:text-black transition-colors"
                                onClick={() => setSelectedService(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Modal Image */}
                                <div className="relative h-64 md:h-auto">
                                    <div className="absolute inset-0 bg-gradient-to-t from-velluto-dark to-transparent opacity-60 z-10 md:hidden"></div>
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Modal Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4 text-velluto-gold">
                                        <selectedService.icon className="w-6 h-6" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Servizio Esclusivo</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl text-foreground font-serif mb-6">
                                        {selectedService.title}
                                    </h2>

                                    <h4 className="text-xl text-gray-700 mb-4 font-light italic">
                                        "{selectedService.details.headline}"
                                    </h4>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                        {selectedService.details.content}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {selectedService.details.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                                                <div className="w-1.5 h-1.5 bg-velluto-gold rounded-full"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <button className="bg-velluto-gold text-black px-8 py-3 w-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
                                        Richiedi Informazioni
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesSection;
