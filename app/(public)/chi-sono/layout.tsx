import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chi Sono | Paolo Tramonti - Tramonti Diffusion',
    description: 'La storia di Paolo Tramonti: dalla musica allo spettacolo fino alla passione per le auto speciali. Scopri l\'anima e l\'esclusività di Tramonti Diffusion.',
    keywords: 'Paolo Tramonti, storia Tramonti Diffusion, vendita auto VIP, auto spettacolo',
    openGraph: {
        title: 'Chi Sono | Paolo Tramonti - Tramonti Diffusion',
        description: 'La storia di Paolo Tramonti e della sua passione per le auto speciali.',
        type: 'profile',
    }
};

export default function ChiSonoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
