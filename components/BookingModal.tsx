"use client";

import React, { useState } from 'react';
import { X, Send, Check, Calendar, Clock, MapPin, Users, FileText, User, Mail, Phone, Home } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        visitType: '',
        date: '',
        time: '',
        guests: '',
        notes: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({
                    name: '',
                    address: '',
                    email: '',
                    phone: '',
                    visitType: '',
                    date: '',
                    time: '',
                    guests: '',
                    notes: ''
                });
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
            <div className="relative bg-white border border-gray-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-[slideUp_0.4s_ease-out] scrollbar-thin scrollbar-thumb-velluto-gold scrollbar-track-transparent">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-foreground z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-0">
                    {/* Header */}
                    <div className="bg-velluto-black text-white p-6 border-b-4 border-velluto-gold">
                        <h2 className="text-2xl font-serif text-center uppercase tracking-widest text-velluto-gold">Prenota la tua Visita</h2>
                        <p className="text-center text-gray-400 text-sm mt-2">Compila il form per organizzare il tuo appuntamento esclusivo.</p>
                    </div>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center animate-[fadeIn_0.5s_ease-out] p-8">
                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 border-2 border-green-500">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl text-foreground mb-3 font-serif">Richiesta Inviata con Successo</h3>
                            <p className="text-gray-500">Un nostro consulente la contatterà a breve per confermare l'appuntamento.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">

                            {/* Contact Information */}
                            <section>
                                <h3 className="text-velluto-gold text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <User className="w-4 h-4" /> Informazioni di Contatto
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Nome e Cognome</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Indirizzo</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={formData.address}
                                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-4 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <Home className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-4 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Telefono</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="tel"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-4 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Event Details */}
                            <section>
                                <h3 className="text-velluto-gold text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Dettagli Appuntamento
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Tipo di Visita</label>
                                        <select
                                            value={formData.visitType}
                                            onChange={e => setFormData({ ...formData, visitType: e.target.value })}
                                            className="w-full bg-gray-50 border border-gray-300 p-3 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                        >
                                            <option value="">Seleziona un'opzione...</option>
                                            <option value="showroom">Visita Showroom</option>
                                            <option value="test-drive">Test Drive</option>
                                            <option value="consulenza">Consulenza Dedicata</option>
                                            <option value="evento">Evento Esclusivo</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Data</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="date"
                                                value={formData.date}
                                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-4 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Ora Preferita</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="time"
                                                value={formData.time}
                                                onChange={e => setFormData({ ...formData, time: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Numero Partecipanti</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                min="1"
                                                value={formData.guests}
                                                onChange={e => setFormData({ ...formData, guests: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors"
                                            />
                                            <Users className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Note Aggiuntive / Richieste Speciali</label>
                                <div className="relative">
                                    <textarea
                                        rows={3}
                                        value={formData.notes}
                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full bg-gray-50 border border-gray-300 p-3 pl-10 text-foreground focus:border-velluto-gold focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                    <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                </div>
                            </section>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-velluto-gold text-black uppercase font-bold tracking-widest py-4 hover:bg-black hover:text-velluto-gold border border-transparent hover:border-velluto-gold transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg"
                            >
                                {status === 'sending' ? (
                                    <span className="animate-pulse">Invio in corso...</span>
                                ) : (
                                    <>Conferma Prenotazione <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
