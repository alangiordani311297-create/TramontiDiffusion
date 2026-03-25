import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-background text-foreground pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">
                            TRAMONTI <span className="text-velluto-gold">DIFFUSION</span>
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Ridefiniamo l'esperienza di acquisto di auto di lusso.
                            Passione, precisione e prestigio dal 1998.
                        </p>
                        <div className="flex gap-6 items-center">
                            <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                                <img src="https://cdn.simpleicons.org/instagram/000000" alt="Instagram" className="w-5 h-5" />
                            </a>
                            <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                                <img src="https://cdn.simpleicons.org/facebook/000000" alt="Facebook" className="w-5 h-5" />
                            </a>
                            <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                                <img src="https://cdn.simpleicons.org/tiktok/000000" alt="TikTok" className="w-5 h-5" />
                            </a>
                            <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                                <img src="https://cdn.simpleicons.org/youtube/000000" alt="YouTube" className="w-6 h-6" />
                            </a>
                            <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                                <img src="https://cdn.simpleicons.org/telegram/000000" alt="Telegram" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-velluto-gold">Esplora</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#showroom" className="hover:text-foreground transition-colors">Showroom</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Servizi Finanziari</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">After Sales</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">News & Eventi</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-velluto-gold">Contatti</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 text-velluto-gold" />
                                <span className="text-foreground">Viale Baracca 15,<br />48121 Ravenna, Italia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-velluto-gold" />
                                <span className="text-foreground">+39 02 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-velluto-gold" />
                                <span className="text-foreground">concierge@tramonti.it</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-velluto-gold">Newsletter</h4>
                        <p className="text-xs text-gray-500 mb-4">Ricevi aggiornamenti sui nuovi arrivi.</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="La tua email"
                                className="bg-gray-50 border border-gray-300 text-foreground px-4 py-2 text-sm focus:outline-none focus:border-velluto-gold transition-colors"
                            />
                            <button className="bg-velluto-gold text-black uppercase text-xs font-bold py-2 hover:bg-white border border-transparent hover:border-gray-200 transition-all">
                                Iscriviti
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2024 Tramonti Diffusion. Tutti i diritti riservati.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Cookie Policy</a>
                        <a href="#" className="hover:text-gray-400">Termini</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
