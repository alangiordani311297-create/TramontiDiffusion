"use client";

import React, { useState, useMemo } from 'react';
import { INVENTORY } from '../constants';
import { FilterType, Car } from '../types';
import CarCard from './CarCard';

interface ShowroomProps {
    onOpenGallery: (car: Car) => void;
    onOpenQuote: (car: Car) => void;
}

const Showroom: React.FC<ShowroomProps> = ({ onOpenGallery, onOpenQuote }) => {
    const [activeFilter, setActiveFilter] = useState<FilterType>(FilterType.ALL);

    const filteredCars = useMemo(() => {
        if (activeFilter === FilterType.ALL) return INVENTORY;
        return INVENTORY.filter(car => car.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="showroom" className="pb-12 md:pb-24 pt-0 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="mb-6">
                        <p className="text-2xl md:text-3xl text-velluto-gold font-[family-name:var(--font-great-vibes)] tracking-wide leading-relaxed">
                            "Non si può descrivere la passione, la si può solo vivere."
                        </p>
                        <p className="text-gray-500 text-[10px] md:text-xs font-serif uppercase tracking-widest mt-1">
                            – Horacio Pagani
                        </p>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-foreground font-light mb-8">LA NOSTRA COLLEZIONE ESCLUSIVA</h2>
                    <div className="w-24 h-[1px] bg-velluto-gold mx-auto opacity-50 mb-12"></div>
                </div>

                {/* Sistema di Filtraggio (Search Box) */}
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-20 border border-gray-100">
                    <div className="flex flex-col gap-4">
                        {/* Riga 1 */}
                        <input 
                            type="text" 
                            placeholder="Nuovo, usato o km0..." 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B4DFA] focus:border-transparent transition-all placeholder:text-gray-600"
                        />
                        
                        {/* Riga 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Marca..." 
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B4DFA] transition-all placeholder:text-gray-600"
                            />
                            <input 
                                type="text" 
                                placeholder="Modello..." 
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B4DFA] transition-all placeholder:text-gray-600"
                            />
                        </div>
                        
                        {/* Riga 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Alimentazione..." 
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B4DFA] transition-all placeholder:text-gray-600"
                            />
                            <div className="flex items-center px-5 py-4 rounded-xl border border-gray-200 bg-white">
                                <label className="flex items-center cursor-pointer gap-3 w-full">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 rounded border-gray-300 text-[#3B4DFA] focus:ring-[#3B4DFA]"
                                    />
                                    <span className="text-gray-500 font-medium">Neopatentati</span>
                                </label>
                            </div>
                        </div>
                        
                        {/* Riga 4 */}
                        <button className="w-full mt-2 bg-velluto-gold hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition-colors duration-300 text-lg">
                            Ricerca veicolo
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCars.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onOpenGallery={onOpenGallery}
                            onOpenQuote={onOpenQuote}
                        />
                    ))}
                </div>

                {filteredCars.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>Nessun veicolo trovato in questa categoria.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Showroom;
