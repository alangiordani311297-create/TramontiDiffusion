import React from 'react';

const BRANDS = [
    { name: 'Ferrari', logo: 'https://cdn.simpleicons.org/ferrari/white', isSimpleIcon: true },
    { name: 'Lamborghini', logo: 'https://cdn.simpleicons.org/lamborghini/white', isSimpleIcon: true },
    { name: 'Aston Martin', logo: 'https://cdn.simpleicons.org/astonmartin/white', isSimpleIcon: true },
    { name: 'Porsche', logo: 'https://cdn.simpleicons.org/porsche/white', isSimpleIcon: true },
    { name: 'McLaren', logo: 'https://cdn.simpleicons.org/mclaren/white', isSimpleIcon: true },
    { name: 'Audi', logo: 'https://cdn.simpleicons.org/audi/white', isSimpleIcon: true },
    { name: 'Rolls Royce', logo: 'https://cdn.simpleicons.org/rollsroyce/white', isSimpleIcon: true },
    // Poiché si tratta di un'immagine JPG con sfondo bianco e logo nero, non dobbiamo usare "invert"
    // altrimenti lo sfondo diventerà nero e il logo bianco.
    // Usiamo mix-blend-multiply per far "scomparire" lo sfondo bianco rendendolo trasparente.
    { name: 'Mercedes Benz', logo: '/immagini/Mercedes_Benz_Logo_11.jpg', isSimpleIcon: false, isJpg: true },
    { name: 'Bentley', logo: 'https://cdn.simpleicons.org/bentley/white', isSimpleIcon: true },
    { name: 'Maserati', logo: 'https://cdn.simpleicons.org/maserati/white', isSimpleIcon: true },
    { name: 'BMW', logo: 'https://cdn.simpleicons.org/bmw/white', isSimpleIcon: true },
];

const BrandCarousel: React.FC = () => {
    return (
        <section className="bg-velluto-light border-b border-gray-200 py-12 overflow-hidden relative z-20">
            <div className="container mx-auto px-6 mb-8 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Static Text Section (Left side - visible on desktop, stacked on mobile) */}
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
                        {/* 
                Use flex-nowrap and let children determine width. 
                The animation moves translateX from 0 to -50%.
             */}
                        <div className="flex w-max animate-infinite-scroll hover:pause">
                            {/* First Set */}
                            <div className="flex flex-nowrap shrink-0 items-center gap-24 px-12">
                                {BRANDS.map((brand, index) => (
                                    <div key={`brand-1-${index}`} className="flex-shrink-0 group flex items-center justify-center w-[100px] h-[60px]">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className={`
                        max-h-12 w-auto object-contain transition-all duration-300
                        ${brand.isSimpleIcon
                                                    ? 'opacity-60 group-hover:opacity-100 invert'
                                                    : 'opacity-60 group-hover:opacity-100'
                                                }
                        ${(brand as any).isJpg ? 'mix-blend-multiply' : ''}
                      `}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Second Set (Duplicate for loop) */}
                            <div className="flex flex-nowrap shrink-0 items-center gap-24 px-12">
                                {BRANDS.map((brand, index) => (
                                    <div key={`brand-2-${index}`} className="flex-shrink-0 group flex items-center justify-center w-[100px] h-[60px]">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className={`
                        max-h-12 w-auto object-contain transition-all duration-300
                        ${brand.isSimpleIcon
                                                    ? 'opacity-60 group-hover:opacity-100 invert'
                                                    : 'opacity-60 group-hover:opacity-100'
                                                }
                        ${(brand as any).isJpg ? 'mix-blend-multiply' : ''}
                      `}
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
