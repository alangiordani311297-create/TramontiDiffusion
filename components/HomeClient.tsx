"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Concierge from './Concierge';
import CarGallery from './CarGallery';
import QuoteModal from './QuoteModal';
import Hero from './Hero';
import BrandCarousel from './BrandCarousel';
import FeatureGrid from './FeatureGrid';
import Showroom from './Showroom';
import ServicesSection from './ServicesSection';
import LocationSection from './LocationSection';
import { Car } from '../types';

export default function HomeClient() {
    const [selectedGalleryCar, setSelectedGalleryCar] = useState<Car | null>(null);
    const [selectedQuoteCar, setSelectedQuoteCar] = useState<Car | null>(null);

    const handleOpenGallery = (car: Car) => {
        setSelectedGalleryCar(car);
    };

    const handleOpenQuote = (car: Car) => {
        setSelectedQuoteCar(car);
    };

    return (
        <div className="font-sans antialiased text-foreground selection:bg-velluto-gold selection:text-black min-h-screen bg-background">
            <Navbar />

            <main>
                <Hero />
                <BrandCarousel />
                <FeatureGrid />
                <Showroom
                    onOpenGallery={handleOpenGallery}
                    onOpenQuote={handleOpenQuote}
                />
                <ServicesSection />
                <LocationSection />
            </main>

            <Concierge />
            <Footer />

            {/* Modals are global */}
            {selectedGalleryCar && (
                <CarGallery
                    isOpen={!!selectedGalleryCar}
                    onClose={() => setSelectedGalleryCar(null)}
                    images={[selectedGalleryCar.image, ...selectedGalleryCar.gallery]}
                    title={`${selectedGalleryCar.make} ${selectedGalleryCar.model}`}
                />
            )}

            {selectedQuoteCar && (
                <QuoteModal
                    isOpen={!!selectedQuoteCar}
                    onClose={() => setSelectedQuoteCar(null)}
                    car={selectedQuoteCar}
                />
            )}
        </div>
    );
}
