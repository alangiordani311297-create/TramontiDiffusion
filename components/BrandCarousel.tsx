import React from 'react';

const BRANDS = [
    { name: 'Ferrari', logo: '/immagini/foto ferrari logo.webp' },
    { name: 'Lamborghini', logo: '/immagini/logo lamborghini.png' },
    { name: 'Porsche', logo: '/immagini/foto logo porsche.webp' },
    { name: 'Maserati', logo: '/immagini/foto logo maserati.png', scale: 'scale-150' },
    { name: 'Aston Martin', logo: '/immagini/aston martin logo.png', scale: 'scale-150' },
    { name: 'McLaren', logo: '/immagini/mclaren logo.jpg', scale: 'scale-150' },
    { name: 'Mercedes Benz', logo: '/immagini/mercedes benz logo.jpg' },
    { name: 'Bugatti', logo: '/immagini/bugatti logo.svg' },
    { name: 'Pagani', logo: '/immagini/logo pagani.webp', scale: 'scale-150' },
    { name: 'Bentley', logo: '/immagini/foto logo bentley.jpg' },
    { name: 'Rolls Royce', logo: '/immagini/rolls royce logo.jpg' },
    { name: 'Audi', logo: '/immagini/logo audi.jpg', scale: 'scale-150' },
    { name: 'BMW', logo: '/immagini/bmw logo.png' },
    { name: 'Land Rover', logo: '/immagini/land rover logo.png', scale: 'scale-150' },
    { name: 'Jaguar', logo: '/immagini/jaguar logo.jpg', scale: 'scale-150' },
    { name: 'Mini', logo: '/immagini/logo mini.jpg', scale: 'scale-150' },
    { name: 'Smart', logo: '/immagini/logo smart.png', scale: 'scale-150' },
    { name: 'VW', logo: '/immagini/vw logo.png' },
    { name: 'Abarth', logo: '/immagini/aarth logo.png', scale: 'scale-150' },
    { name: 'Jeep', logo: '/immagini/jeep logo.png' },
];

const BrandCarousel: React.FC = () => {
    return (
        <section className="bg-velluto-light border-b border-gray-200 py-12 overflow-hidden relative z-20">
            <div className="container mx-auto px-6 mb-8 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Static Text Section (Left side) */}
                    <div className="w-full md:w-auto md:pr-12 md:mr-8 border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 relative z-20 bg-velluto-light flex-shrink-0 mb-8 md:mb-0">
                        <h3 className="text-2xl md:text-3xl text-foreground font-light leading-tight">
                            I NOSTRI MARCHI
                        </h3>
                        <div className="h-1 w-20 bg-velluto-gold my-6"></div>
                        <p className="text-gray-500 text-sm tracking-[0.2em] font-light uppercase">
                            Icone del lusso su quattro ruote
                        </p>
                    </div>

                    {/* Scrolling Logos Section (Right side) */}
                    <div className="flex-1 relative overflow-hidden mask-linear-gradient w-full">
                        <div className="flex w-max animate-infinite-scroll hover:pause">
                            {/* First Set */}
                            <div className="flex flex-nowrap shrink-0 items-center gap-12 px-12">
                                {BRANDS.map((brand, index) => (
                                    <div key={`brand-1-${index}`} className="flex-shrink-0 group flex items-center justify-center w-[120px] h-[120px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className={`max-h-full max-w-full object-contain multiply-mix ${(brand as any).scale || ''}`}
                                            style={{ mixBlendMode: 'multiply' }}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Second Set (Duplicate for loop) */}
                            <div className="flex flex-nowrap shrink-0 items-center gap-12 px-12">
                                {BRANDS.map((brand, index) => (
                                    <div key={`brand-2-${index}`} className="flex-shrink-0 group flex items-center justify-center w-[120px] h-[120px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className={`max-h-full max-w-full object-contain multiply-mix ${(brand as any).scale || ''}`}
                                            style={{ mixBlendMode: 'multiply' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fade Gradients for edges */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-velluto-light to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-velluto-light to-transparent z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
