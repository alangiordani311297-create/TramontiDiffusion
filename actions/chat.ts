"use server";

import { GoogleGenAI } from "@google/genai";
import { INVENTORY } from "../constants";

// Initialize client lazily to avoid issues during build time if env is missing
const getClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("Missing GEMINI_API_KEY environment variable");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
Sei "Tramonti Concierge", un assistente di vendita AI di lusso per "Tramonti Diffusion".
Parla in italiano in modo formale, elegante e sofisticato.
Il tuo obiettivo è assistere i clienti facoltosi interessati all'acquisto di auto di lusso.

Ecco il nostro inventario attuale:
${INVENTORY.map(car => `- ${car.year} ${car.make} ${car.model} (${car.category}): €${car.price.toLocaleString()}. Motore: ${car.engine}. Km: ${car.mileage}.`).join('\n')}

Regole:
1. Sii breve e diretto ma cortese.
2. Se ti chiedono un'auto non in lista, suggerisci un'alternativa simile presente nell'inventario o offriti di cercarla (simulando).
3. Non inventare prezzi se non sono nella lista.
4. Invita sempre il cliente a prenotare un appuntamento privato per la visione.
`;

export async function sendMessage(
    history: { role: string; parts: { text: string }[] }[],
    message: string
): Promise<string> {
    const client = getClient();

    if (!client) {
        return "Mi scuso, ma al momento il servizio di concierge non è disponibile. La prego di contattarci telefonicamente.";
    }

    try {
        const chat = client.chats.create({
            model: 'gemini-2.0-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            },
            history: history,
        });

        const result = await chat.sendMessage({ message });
        return result.text || "Mi scuso, potresti ripetere? C'è stata una lieve interferenza.";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Mi scuso, al momento sto riscontrando difficoltà tecniche. La prego di riprovare tra un istante.";
    }
}
