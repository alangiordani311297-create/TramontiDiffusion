"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessage } from '../actions/chat';

const Concierge: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            role: 'model',
            text: 'Benvenuto in Tramonti Diffusion. Sono il suo concierge personale. Come posso assisterla oggi nella ricerca della sua prossima auto da sogno?',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: inputText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsLoading(true);

        try {
            // Prepare history for Gemini
            const history = messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

            const responseText = await sendMessage(history, userMsg.text);

            const aiMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: responseText,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error("Chat Error", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 z-40 bg-velluto-gold text-black p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
            >
                <MessageSquare className="w-6 h-6" />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[90vw] md:w-[400px] h-[600px] bg-background border border-gray-200 rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden animate-[slideUp_0.3s_ease-out]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-velluto-gray to-black p-4 flex justify-between items-center border-b border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-velluto-gold/20 flex items-center justify-center border border-velluto-gold">
                                <Sparkles className="w-4 h-4 text-velluto-gold" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium text-sm">Tramonti Concierge</h3>
                                <p className="text-gray-300 text-[10px] uppercase tracking-wider">AI Assistant Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-velluto-gold text-black rounded-l-lg rounded-tr-lg'
                                        : 'bg-white text-gray-800 rounded-r-lg rounded-tl-lg border border-gray-200 shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-800 p-3 rounded-r-lg rounded-tl-lg border border-gray-700 flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-background border-t border-gray-200">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Chiedi informazioni su un modello..."
                                className="w-full bg-gray-100 border border-gray-300 text-foreground pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-velluto-gold transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputText.trim()}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-velluto-gold hover:text-white disabled:opacity-50 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Concierge;
