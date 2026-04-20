"use client";

import React, { useState, useEffect } from 'react';
import { 
    X, ChevronLeft, ChevronRight, MapPin, Check, 
    Navigation, Tag, Calendar, Fuel, Settings, 
    CarFront, Gauge, Zap, Printer, ChevronDown 
} from 'lucide-react';
import { Car } from '../types';

interface CarGalleryProps {
    car: Car;
    isOpen: boolean;
    onClose: () => void;
    onOpenQuote: (car: Car) => void;
}

const CarGallery: React.FC<CarGalleryProps> = ({ car, isOpen, onClose, onOpenQuote }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDescExpanded, setIsDescExpanded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            setIsDescExpanded(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !car) return null;

    const images = [car.image, ...car.gallery];

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-[110] text-gray-500 hover:text-velluto-gold p-2 transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
            >
                <X className="w-8 h-8" />
            </button>

            {/* LEFT SIDE: SCROLLABLE CONTENT AREA */}
            <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
                {/* VEHICLE HEADER */}
                <div className="w-full p-8 md:p-12 flex justify-between items-start border-b border-gray-100 bg-white sticky top-0 z-20">
                    <div className="flex gap-6 items-center">
                        <div className="hidden md:flex flex-col border-r border-gray-200 pr-6 mr-2">
                             <span className="text-xl font-bold tracking-[0.2em] font-serif uppercase">{car.make}</span>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                {car.make} {car.model}
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base mt-2">
                                {car.year} • {car.engine} • {car.category}
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Prezzo</p>
                        <p className="text-2xl md:text-3xl font-bold text-gray-900">€ {car.price.toLocaleString('it-IT')}</p>
                        <p className="text-gray-400 text-[10px] mt-1 uppercase">IVA inclusa / deducibile</p>
                    </div>
                </div>

                <div className="p-6 md:p-12 max-w-5xl mx-auto space-y-16">
                    {/* GALLERY SECTION */}
                    <div className="flex flex-col md:flex-row gap-6 h-[400px] md:h-[600px]">
                        <div className="flex-1 relative bg-[#f0f1f3] shadow-sm overflow-hidden group rounded-lg">
                            <img
                                src={images[currentIndex]}
                                alt={`${car.make} ${car.model}`}
                                className="w-full h-full object-contain p-4"
                            />
                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={handlePrev} className="bg-white/90 p-3 rounded-full shadow-lg text-gray-800 hover:text-velluto-gold transition-colors">
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button onClick={handleNext} className="bg-white/90 p-3 rounded-full shadow-lg text-gray-800 hover:text-velluto-gold transition-colors">
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 text-xs font-bold tracking-widest border border-gray-200 rounded shadow-sm">
                                {currentIndex + 1} / {images.length} IMMAGINI
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col gap-4 w-48 overflow-y-auto pr-2 custom-scrollbar">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative w-full aspect-video border-2 rounded transition-all ${
                                        currentIndex === idx ? 'border-velluto-gold opacity-100 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                                >
                                    <img src={img} alt="thumb" className="w-full h-full object-cover rounded-sm" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CONTACT BOX (Map-style from Volvo) */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                <MapPin className="w-6 h-6 text-velluto-gold" />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-xs tracking-widest uppercase mb-2">Punto vendita</h4>
                                <h3 className="text-xl font-bold text-gray-900">Tramonti Diffusion - Showroom Ravenna</h3>
                                <p className="text-gray-500 mt-1">Viale Baracca 15, 48121 Ravenna</p>
                                <button className="mt-4 flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-velluto-gold transition-colors">
                                    <Navigation className="w-4 h-4" /> GUARDA LA MAPPA
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={() => onOpenQuote(car)}
                            className="bg-[#3d424b] text-white px-10 py-5 rounded-lg font-bold flex items-center gap-3 hover:bg-black transition-all shadow-lg"
                        >
                            CONTATTACI! <Zap className="w-5 h-5 fill-current" />
                        </button>
                    </div>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 py-12 border-t border-b border-gray-100 mt-12">
                        <SpecItem icon={<Tag />} label="Condizione" value={car.condition} />
                        <SpecItem icon={<CarFront />} label="Carrozzeria" value={car.category} />
                        <SpecItem icon={<Calendar />} label="Immatricolazione" value={car.registration} />
                        <SpecItem icon={<Gauge />} label="Chilometraggio" value={car.mileage} />
                        <SpecItem icon={<Fuel />} label="Alimentazione" value={car.fuelType} />
                        <SpecItem icon={<Check />} label="Classe emissioni" value={car.emissions} />
                        <SpecItem icon={<Settings />} label="Cambio" value={car.transmission} />
                        <SpecItem icon={<Zap />} label="Potenza" value={car.power} />
                    </div>

                    {/* DESCRIPTION SECTION */}
                    <div className="space-y-6 max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900">Descrizione</h2>
                        <div className={`text-gray-600 leading-relaxed space-y-4 relative ${!isDescExpanded && 'max-h-60 overflow-hidden'}`}>
                            <p>{car.description}</p>
                            <p>Visita la nostra sede Premium di Ravenna per scoprire questa vettura eccezionale. Tramonti Diffusion offre solo il meglio per i propri clienti, garantendo qualità, trasparenza e un servizio su misura professionale.</p>
                            <p>La vettura è completa di certificazione chilometrica e cronologia manutenzioni ufficiale. Il prezzo indicato non è comprensivo di passaggio di proprietà.</p>
                            {!isDescExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
                            )}
                        </div>
                        <button 
                            onClick={() => setIsDescExpanded(!isDescExpanded)}
                            className="flex items-center gap-2 text-velluto-gold font-bold hover:underline"
                        >
                            {isDescExpanded ? 'Mostra meno' : 'Mostra di più'} <ChevronDown className={`w-4 h-4 transition-transform ${isDescExpanded && 'rotate-180'}`} />
                        </button>
                    </div>

                    {/* FOOTER ACTION */}
                    <div className="pt-8 pb-16 flex justify-start">
                        <button className="flex items-center gap-3 border border-gray-200 px-8 py-4 rounded-lg font-bold text-gray-600 hover:bg-gray-50 transition-all">
                            <Printer className="w-5 h-5" /> STAMPA SCHEDA TECNICA
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDEBAR - STICKY (ONLY ON DESKTOP) */}
            <div className="hidden md:flex w-96 lg:w-[400px] h-full bg-white border-l border-gray-100 flex-col p-8 md:p-10 sticky top-0">
                <div className="mt-24 flex-1">
                    {/* Status / Quick Info */}
                    <div className="mb-10 space-y-4">
                         <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                             <span className="text-gray-400">Chilometraggio</span>
                             <span className="font-bold">{car.mileage}</span>
                         </div>
                         <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                             <span className="text-gray-400">Alimentazione</span>
                             <span className="font-bold">{car.fuelType}</span>
                         </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="space-y-4 mt-8">
                        <button 
                            onClick={() => {
                                onClose();
                                onOpenQuote(car);
                            }}
                            className="w-full bg-[#3d424b] text-white py-5 rounded-lg font-bold flex justify-between items-center px-6 hover:bg-black transition-all group shadow-md"
                        >
                            <span>RICHIEDI PREVENTIVO</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="w-full h-[1px] bg-gray-100 my-8 relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[10px] text-gray-400 tracking-[0.2em] font-medium uppercase">Più opzioni</span>
                        </div>

                        <button className="w-full bg-[#2a2e35] text-white py-5 rounded-lg font-bold flex justify-between items-center px-6 hover:bg-black transition-all group">
                            <span>RICHIEDI TEST DRIVE</span>
                            <Navigation className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        </button>

                        <button className="w-full bg-[#2a2e35] text-white py-5 rounded-lg font-bold flex justify-between items-center px-6 hover:bg-black transition-all group">
                            <span>CONTROLLA DISPONIBILITÀ</span>
                            <Check className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* SPEC ITEM COMPONENT */
const SpecItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center gap-6">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg text-gray-400">
            {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
        </div>
        <div className="flex-1 flex justify-between items-center border-b border-gray-50 pb-2">
            <span className="text-gray-500 font-medium">{label}</span>
            <span className="font-bold text-gray-900">{value}</span>
        </div>
    </div>
);

export default CarGallery;
