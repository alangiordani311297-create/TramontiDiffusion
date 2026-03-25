import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Journal & Novità Automotive | Tramonti Diffusion',
    description: 'Storie di passione, novità dal mondo automotive e aggiornamenti su Tramonti Diffusion. Scopri le tendenze del futuro del lusso.',
    keywords: 'novità automotive, supercar, mercato auto lusso, blog auto, Tramonti Diffusion journal',
    openGraph: {
        title: 'Journal & Novità Automotive | Tramonti Diffusion',
        description: 'Storie di passione, novità dal mondo automotive e aggiornamenti.',
        type: 'website',
    }
};

export default function JournalPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-velluto-gold mb-8">The Journal</h1>
                <p className="text-gray-400 text-lg max-w-2xl mb-12">
                    Storie di passione, novità dal mondo automotive e aggiornamenti su Tramonti Diffusion.
                </p>

                <div className="border-t border-white/10 pt-12">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2 bg-gray-900 border border-white/5 aspect-video flex items-center justify-center">
                            <p className="text-gray-600">Immagine Copertina</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-velluto-gold text-sm tracking-widest uppercase">Novità 2026</span>
                            <h2 className="text-3xl font-serif text-white mt-2 mb-4">Il Futuro del Lusso</h2>
                            <p className="text-gray-500 leading-relaxed">
                                Scopri le nuove tendenze e i modelli in arrivo per la prossima stagione.
                                Un viaggio attraverso l'innovazione e lo stile senza tempo.
                            </p>
                            <button className="mt-6 text-white border-b border-velluto-gold pb-1 hover:text-velluto-gold transition">
                                Leggi Articolo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
