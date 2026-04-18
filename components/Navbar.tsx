"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { SERVICES } from '../lib/servicesData';
import BookingModal from './BookingModal';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />

            {/* ======================== */}
            {/* MOBILE NAVBAR (white bar) */}
            {/* ======================== */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md md:hidden" style={{ borderBottom: '1px solid #e5e7eb' }}>
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo + Name */}
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/immagini/logo_duck.png"
                            alt="Tramonti Diffusion Logo"
                            className="h-11 w-11 object-cover rounded-full border-2 border-yellow-500/60"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="text-base font-serif font-bold tracking-widest uppercase text-gray-900">
                                TRAMONTI
                            </span>
                            <span className="text-base font-serif font-light tracking-widest uppercase" style={{ color: '#D4AF37' }}>
                                DIFFUSION
                            </span>
                        </div>
                    </Link>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-800 p-1"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="bg-gray-900 border-t border-gray-700 px-6 py-4 flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <div key={link.name}>
                                {link.name === 'Servizi' ? (
                                    <>
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="w-full flex justify-between items-center text-white hover:text-yellow-400 uppercase tracking-widest text-sm py-2 border-b border-gray-800"
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        {mobileServicesOpen && (
                                            <div className="pl-4 py-2 flex flex-col space-y-3 bg-black/20 mt-1">
                                                {SERVICES.map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        href={`/servizi/${service.slug}`}
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setMobileServicesOpen(false);
                                                        }}
                                                        className="text-gray-300 hover:text-yellow-400 text-xs uppercase tracking-[0.15em]"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-white hover:text-yellow-400 uppercase tracking-widest text-sm py-2 border-b border-gray-800 block"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setIsBookingModalOpen(true);
                            }}
                            className="w-full text-center border border-yellow-500 text-yellow-500 px-6 py-3 uppercase text-xs tracking-widest mt-2"
                        >
                            Prenota Visita
                        </button>
                    </div>
                )}
            </nav>

            {/* ========================== */}
            {/* DESKTOP NAVBAR (transparent) */}
            {/* ========================== */}
            <nav
                className={`fixed w-full z-50 transition-all duration-500 hidden md:block bg-velluto-black/90 backdrop-blur-md ${
                    isScrolled ? 'py-4' : 'py-6'
                }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 cursor-pointer group">
                        <img
                            src="/immagini/logo_duck.png"
                            alt="Tramonti Diffusion Logo"
                            className="h-16 w-16 object-cover rounded-full border-2 border-velluto-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif font-bold tracking-widest uppercase text-white leading-none">
                                TRAMONTI
                            </span>
                            <span className="text-2xl font-serif font-light text-velluto-gold tracking-widest uppercase leading-none">
                                DIFFUSION
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <div 
                                key={link.name}
                                className="relative group p-2"
                                onMouseEnter={() => link.name === 'Servizi' && setIsServicesHovered(true)}
                                onMouseLeave={() => link.name === 'Servizi' && setIsServicesHovered(false)}
                            >
                                {link.name === 'Servizi' ? (
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <span className="text-sm uppercase tracking-widest text-gray-300 group-hover:text-velluto-gold transition-colors duration-300">
                                            {link.name}
                                        </span>
                                        <ChevronDown size={16} className={`text-white transform transition-transform duration-300 group-hover:text-velluto-gold ${isServicesHovered ? 'rotate-180' : ''}`} />
                                        
                                        {/* Dropdown Menu */}
                                        <div 
                                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-velluto-black/95 backdrop-blur-xl border border-white/10 p-4 transition-all duration-300 ${
                                                isServicesHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                        >
                                            <div className="flex flex-col gap-4">
                                                {SERVICES.map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        href={`/servizi/${service.slug}`}
                                                        className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-velluto-gold transition-colors duration-300"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-sm uppercase tracking-widest text-gray-300 hover:text-velluto-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-velluto-gold after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="border border-velluto-gold text-velluto-gold px-6 py-2 uppercase text-xs tracking-widest hover:bg-velluto-gold hover:text-black transition-all duration-300"
                        >
                            Prenota Visita
                        </button>
                    </div>
                </div>
            </nav>

            {/* Spacer for mobile white bar */}
            <div className="h-[68px] md:hidden" />
        </>
    );
};

export default Navbar;
