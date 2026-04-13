import React from 'react';

const BRANDS = [
    { name: 'Ferrari', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/200px-Ferrari-Logo.svg.png' },
    { name: 'Lamborghini', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/200px-Lamborghini_Logo.svg.png' },
    { name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Porsche_logo.svg/200px-Porsche_logo.svg.png' },
    { name: 'Maserati', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Maserati_logo.svg/200px-Maserati_logo.svg.png' },
    { name: 'Aston Martin', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Aston_Martin_logo.svg/200px-Aston_Martin_logo.svg.png' },
    { name: 'McLaren', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Group_logo.svg/200px-McLaren_Group_logo.svg.png' },
    { name: 'Mercedes Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_logo.svg/200px-Mercedes-Benz_logo.svg.png' },
    { name: 'Bugatti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bugatti_logo.svg/200px-Bugatti_logo.svg.png' },
    { name: 'Pagani', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Pagani_Automobili_logo.svg/200px-Pagani_Automobili_logo.svg.png' },
    { name: 'Koenigsegg', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Koenigsegg_logo.svg/200px-Koenigsegg_logo.svg.png' },
    { name: 'Bentley', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Bentley_logo.svg/200px-Bentley_logo.svg.png' },
    { name: 'Rolls Royce', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Rolls-Royce_Motor_Cars_logo.svg/200px-Rolls-Royce_Motor_Cars_logo.svg.png' },
    { name: 'Audi', logo: '/immagini/logo audi.jpg', scale: 'scale-150' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png' },
    { name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_2.svg/200px-Land_Rover_logo_2.svg.png' },
    { name: 'Jaguar', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Jaguar_logo.svg/200px-Jaguar_logo.svg.png' },
    { name: 'Mini', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mini_logo.svg/200px-Mini_logo.svg.png' },
    { name: 'Smart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Smart_logo.svg/200px-Smart_logo.svg.png' },
    { name: 'VW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png' },
    { name: 'Abarth', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Abarth_Logo.svg/200px-Abarth_Logo.svg.png' },
    { name: 'Jeep', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jeep_logo.svg/200px-Jeep_logo.svg.png' },
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
                                            className={`max-h-full max-w-full object-contain ${(brand as any).scale || ''}`}
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
                                            className="max-h-full max-w-full object-contain"
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
