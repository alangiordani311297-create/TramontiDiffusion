"use client";

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface CarGalleryProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

const CarGallery: React.FC<CarGalleryProps> = ({ images, isOpen, onClose, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    // Reset index when opening a new car
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            setIsZoomed(false);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsZoomed(false);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsZoomed(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-gradient-to-b from-white/80 to-transparent">
                <h3 className="text-foreground text-xl font-light tracking-widest uppercase">{title}</h3>
                <button
                    onClick={onClose}
                    className="text-foreground hover:text-velluto-gold transition-colors p-2 rounded-full border border-transparent hover:border-gray-200"
                >
                    <X className="w-8 h-8" />
                </button>
            </div>

            {/* Main Image Area */}
            <div
                className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
                onClick={() => setIsZoomed(!isZoomed)}
            >
                <img
                    src={images[currentIndex]}
                    alt={`${title} view ${currentIndex + 1}`}
                    className={`max-w-full max-h-screen object-contain transition-transform duration-500 ease-in-out ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                        }`}
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-velluto-gold p-4 transition-all hover:bg-gray-100 rounded-full"
            >
                <ChevronLeft className="w-10 h-10" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-velluto-gold p-4 transition-all hover:bg-gray-100 rounded-full"
            >
                <ChevronRight className="w-10 h-10" />
            </button>

            {/* Controls & Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <div className="flex gap-4 bg-white/80 px-6 py-2 rounded-full border border-gray-200 backdrop-blur-md shadow-lg">
                    <button onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }} className="text-foreground hover:text-velluto-gold">
                        <ZoomIn className="w-5 h-5" />
                    </button>
                    <span className="text-gray-500 text-sm border-l border-r border-gray-300 px-4">
                        {currentIndex + 1} / {images.length}
                    </span>
                    <button onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }} className="text-foreground hover:text-velluto-gold">
                        <ZoomOut className="w-5 h-5" />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto max-w-[80vw] pb-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); setIsZoomed(false); }}
                            className={`w-16 h-12 flex-shrink-0 border-2 transition-all ${currentIndex === idx ? 'border-velluto-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                                }`}
                        >
                            <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarGallery;
