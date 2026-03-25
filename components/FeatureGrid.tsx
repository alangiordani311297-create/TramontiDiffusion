import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "AUTO IN VENDITA",
        image: "/immagini/auto_in_vendita_nuova.jpg",
        href: "/showroom"
    },
    {
        id: 2,
        title: "SERVIZI",
        image: "/immagini/servizi_cover.png",
        href: "/#services"
    },
    {
        id: 3,
        title: "ULTIME NOVITÀ",
        image: "/immagini/ultime_novita_model.jpg",
        href: "/journal"
    }
];

import Link from 'next/link';

const FeatureGrid: React.FC = () => {
    return (
        <section className="bg-background py-4">
            <div className="container-fluid px-2 md:px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 h-auto md:h-[600px]">
                    {features.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group relative h-[400px] md:h-full overflow-hidden block border border-white cursor-pointer"
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
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div>
                                    <div className="h-0.5 w-12 bg-velluto-gold mb-4 transition-all duration-300 group-hover:w-24"></div>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide uppercase">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 delay-75">
                                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10 backdrop-blur-md">
                                        <ArrowUpRight className="w-5 h-5" />
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
