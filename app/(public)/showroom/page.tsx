"use client";

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Showroom from '../../../components/Showroom';
import CarGallery from '../../../components/CarGallery';
import QuoteModal from '../../../components/QuoteModal';
import { Car } from '../../../types';

export default function ShowroomPage() {
    const [selectedGalleryCar, setSelectedGalleryCar] = useState<Car | null>(null);
    const [selectedQuoteCar, setSelectedQuoteCar] = useState<Car | null>(null);

    const handleOpenGallery = (car: Car) => {
        setSelectedGalleryCar(car);
    };

    const handleOpenQuote = (car: Car) => {
        setSelectedQuoteCar(car);
    };

    return (
        <div className="font-sans antialiased text-foreground selection:bg-velluto-gold selection:text-black min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-4 md:pt-[110px]">
                <Showroom
                    onOpenGallery={handleOpenGallery}
                    onOpenQuote={handleOpenQuote}
                />
            </main>

            <Footer />

            {/* Modals */}
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
