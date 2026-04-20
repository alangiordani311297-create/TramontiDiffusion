import { SERVICES } from '@/lib/servicesData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DetaiingPage from './DetaiingPage';
import DeliveryPage from './DeliveryPage';
import FinancePage from './FinancePage';
import SellPage from './SellPage';
import OfficinaCertificataPage from './OfficinaCertificataPage';
export function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    if (slug === 'detailing-ppf') {
        return <DetaiingPage />;
    }

    if (slug === 'officina-certificata') {
        return <OfficinaCertificataPage />;
    }

    if (slug === 'trasporto-blindato') {
        return <DeliveryPage />;
    }

    if (slug === 'servizi-finanziari') {
        return <FinancePage />;
    }

    if (slug === 'vendi-la-tua-auto') {
        return <SellPage />;
    }

    const service = SERVICES.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-background pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <Link href="/#services" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-velluto-gold transition-colors mb-8 inline-block">
                    ← Torna ai Servizi
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Column */}
                    <div className="relative h-[400px] lg:h-[600px] w-full mt-4">
                        <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-full border border-gray-200 text-velluto-gold shadow-lg">
                            <service.icon className="w-8 h-8" />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6 text-velluto-gold">
                            <span className="w-12 h-[1px] bg-velluto-gold"></span>
                            <span className="text-xs font-bold uppercase tracking-widest">Servizio Esclusivo</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-serif mb-8 leading-tight">
                            {service.title}
                        </h1>

                        {service.details.headline && (
                            <h3 className="text-xl md:text-2xl text-gray-700 mb-6 font-light italic">
                                "{service.details.headline}"
                            </h3>
                        )}

                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            {service.details.content}
                        </p>

                        {slug === 'detailing-ppf' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {service.details.features.map((feature, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group flex flex-col items-start p-6 border border-gray-200 hover:border-velluto-gold transition-colors duration-300 bg-white/50 backdrop-blur-sm cursor-default relative overflow-hidden"
                                    >
                                        <span className="text-velluto-gold/10 text-6xl font-serif font-black absolute top-2 right-4 group-hover:text-velluto-gold/20 transition-all duration-500">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <div className="relative z-10 flex flex-col items-start">
                                            <span className="text-velluto-gold text-xl font-serif font-semibold mb-3">
                                                0{idx + 1}
                                            </span>
                                            <span className="text-gray-800 font-medium tracking-wide text-base leading-snug">
                                                {feature}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4 mb-12">
                                {service.details.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-gray-700 text-base">
                                        <div className="w-2 h-2 bg-velluto-gold rounded-full flex-shrink-0"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex gap-4">
                            <Link href="/#contact" className="bg-velluto-gold text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white border border-velluto-gold transition-all w-full md:w-auto text-center cursor-pointer block">
                                Richiedi Informazioni
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
