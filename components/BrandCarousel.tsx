import React from 'react';

const BRANDS = [
    { name: 'Abarth', logo: '/immagini/brand_1.png' },
    { name: 'Mini', logo: '/immagini/brand_2.png' },
    { name: 'Maserati', logo: '/immagini/brand_3.png' },
    { name: 'Ferrari', logo: '/immagini/brand_4.png' },
    { name: 'Lamborghini', logo: '/immagini/brand_5.png' },
    { name: 'Rolls Royce', logo: '/immagini/brand_6.png' },
    { name: 'Porsche', logo: '/immagini/brand_7.png' },
];

const BrandCarousel: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-16 overflow-hidden relative z-20">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-16 flex flex-col items-center text-center">
                <h3 className="text-[#a17f3c] text-2xl md:text-4xl font-bold uppercase tracking-[0.4em] mb-4">
                    I NOSTRI MARCHI
                </h3>
                <p className="text-gray-500 text-base md:text-lg tracking-[0.2em] font-light uppercase">
                    Icone del lusso su quattro ruote
                </p>
            </div>

            {/* Scrolling Logos Section - Full Width */}
            <div className="relative overflow-hidden w-full">
                <div className="flex w-max animate-infinite-scroll hover:pause">
                    {/* First Set */}
                    <div className="flex flex-nowrap shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12">
                        {BRANDS.map((brand, index) => (
                            <div key={`brand-1-${index}`} className="flex-shrink-0 group flex items-center justify-center w-[150px] md:w-[200px] transition-transform duration-500 hover:scale-110">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={`max-h-[110px] md:max-h-[140px] max-w-full object-contain ${(brand as any).scale || ''}`}
                                    style={{ mixBlendMode: 'multiply' }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Second Set (Duplicate for loop) */}
                    <div className="flex flex-nowrap shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12">
                        {BRANDS.map((brand, index) => (
                            <div key={`brand-2-${index}`} className="flex-shrink-0 group flex items-center justify-center w-[150px] md:w-[200px] transition-transform duration-500 hover:scale-110">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={`max-h-[110px] md:max-h-[140px] max-w-full object-contain ${(brand as any).scale || ''}`}
                                    style={{ mixBlendMode: 'multiply' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Smooth Fade Gradients for edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default BrandCarousel;
