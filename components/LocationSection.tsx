import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection: React.FC = () => {
    return (
        <section id="location" className="relative bg-background border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map Container */}
                <div className="h-[400px] lg:h-[600px] relative w-full overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://maps.google.com/maps?q=Viale+Baracca+15,+Ravenna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Tramonti Diffusion Location"
                    ></iframe>
                    {/* Map Overlay to darken it slightly */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                </div>

                {/* Info Container */}
                <div className="p-12 lg:p-24 flex flex-col justify-center bg-velluto-light">

                    <h2 className="text-4xl text-foreground font-light mb-8">VIENI A TROVARCI</h2>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-2">Indirizzo</h3>
                            <p className="text-xl text-foreground leading-relaxed">
                                Viale Baracca 15<br />
                                48121 Ravenna<br />
                                Italia
                            </p>
                        </div>

                        <div>
                            <h3 className="text-gray-500 uppercase text-xs tracking-widest mb-2">Orari Showroom</h3>
                            <div className="grid grid-cols-2 gap-4 text-foreground">
                                <div>
                                    <p className="font-bold">Lun - Ven</p>
                                    <p className="text-gray-400">09:00 - 19:00</p>
                                </div>
                                <div>
                                    <p className="font-bold">Sabato</p>
                                    <p className="text-gray-600">10:00 - 18:00</p>
                                </div>
                                <div>
                                    <p className="font-bold">Domenica</p>
                                    <p className="text-gray-600">Su Appuntamento</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Viale+Baracca+15,+Ravenna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-velluto-gold hover:text-white transition-colors duration-300 w-fit"
                    >
                        Ottieni Indicazioni <Navigation className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
