"use client";

import React from 'react';
import { Car } from '../types';
import { ArrowRight, Gauge, Calendar, Activity, Camera, FileText } from 'lucide-react';

interface CarCardProps {
    car: Car;
    onOpenGallery: (car: Car) => void;
    onOpenQuote: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onOpenGallery, onOpenQuote }) => {
    return (
        <div className="group relative bg-white border border-gray-200 overflow-hidden hover:border-velluto-gold/50 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-md">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => onOpenGallery(car)}>
                <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white border border-gray-700">
                    {car.category}
                </div>

                {/* Overlay Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20 text-white">
                        <Camera className="w-6 h-6" />
                    </div>
                </div>

                {!car.available && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                        <span className="text-white font-bold text-xl uppercase tracking-widest border-2 border-white px-6 py-2 transform -rotate-12">
                            Venduta
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">{car.make}</h3>
                        <h2 className="text-xl text-foreground font-serif tracking-wide">{car.model}</h2>
                    </div>
                    <p className="text-velluto-gold font-light text-lg">€{car.price.toLocaleString()}</p>
                </div>

                <div className="flex gap-4 mb-6 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{car.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Gauge className="w-3 h-3" />
                        <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        <span className="truncate max-w-[100px]">{car.engine}</span>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                    <button
                        onClick={() => onOpenGallery(car)}
                        className="py-3 bg-transparent border border-gray-300 text-gray-600 uppercase text-[10px] tracking-widest hover:bg-foreground hover:text-white hover:border-foreground transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Camera className="w-3 h-3" /> Galleria
                    </button>
                    <button
                        onClick={() => onOpenQuote(car)}
                        className="py-3 bg-velluto-gold border border-velluto-gold text-black uppercase text-[10px] tracking-widest hover:bg-foreground hover:text-white hover:border-foreground transition-all duration-300 flex items-center justify-center gap-2 font-bold"
                    >
                        Richiedi Informazioni <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
