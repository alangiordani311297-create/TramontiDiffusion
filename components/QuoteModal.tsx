"use client";

import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';
import { Car } from '../types';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    car: Car | null;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, car }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    if (!isOpen || !car) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 3000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white border border-gray-200 w-full max-w-md shadow-2xl animate-[slideUp_0.4s_ease-out]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-foreground"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center animate-[fadeIn_0.5s_ease-out]">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 border border-green-200">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl text-foreground mb-2">Richiesta Inviata</h3>
                            <p className="text-gray-500">Un nostro consulente la contatterà a breve.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 border-b border-gray-100 pb-6">
                                <h4 className="text-velluto-gold text-xs font-bold uppercase tracking-widest mb-2">Richiedi Preventivo</h4>
                                <h2 className="text-2xl text-foreground font-serif">{car.make} {car.model}</h2>
                                <p className="text-gray-500 text-sm mt-1">Prezzo listino: €{car.price.toLocaleString()}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Nome e Cognome</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-gray-50 border border-gray-300 p-3 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Telefono</label>
                                        <input
                                            required
                                            type="tel"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-gray-50 border border-gray-300 p-3 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Messaggio (Opzionale)</label>
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 text-foreground focus:border-velluto-gold focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-velluto-gold text-black uppercase font-bold tracking-widest py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4"
                                >
                                    {status === 'sending' ? (
                                        <span className="animate-pulse">Invio in corso...</span>
                                    ) : (
                                        <>Invia Richiesta <Send className="w-4 h-4" /></>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
