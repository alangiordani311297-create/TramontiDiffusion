import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "AUTO IN VENDITA",
        image: "/immagini/nuova foto auto in vendita.jpg",
        href: "/showroom"
    },
    {
        id: 2,
        title: "SERVIZI",
        image: "/immagini/servizi_cover.png",
        href: "/#servizi"
    },
    {
        id: 3,
        title: "NEWS & EVENTI",
        image: "/immagini/foto news e eventi.jpg",
        href: "/journal"
    }
];

import Link from 'next/link';

const FeatureGrid: React.FC = () => {
    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto md:h-[480px]">
                    {features.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group relative h-[320px] md:h-full overflow-hidden block border border-white/20 cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100 ${item.id === 1 ? 'object-top' : ''}`}
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div>
                                    <div className="h-0.5 w-12 bg-velluto-gold mb-4 transition-all duration-300 group-hover:w-24"></div>
                                    <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide uppercase">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 delay-75">
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10 backdrop-blur-md">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
