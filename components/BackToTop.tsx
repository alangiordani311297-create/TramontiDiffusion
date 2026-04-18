"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostra il pulsante solo dopo uno scroll di 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div 
            onClick={scrollToTop}
            className={`fixed bottom-8 left-8 z-[60] cursor-pointer transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
        >
            <div className="bg-gray-800/80 backdrop-blur-md text-white p-3 hover:bg-velluto-gold hover:text-black transition-colors shadow-lg">
                <ChevronUp className="w-6 h-6" />
            </div>
        </div>
    );
};

export default BackToTop;
