import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Showroom Auto Esclusive | Tramonti Diffusion',
    description: 'Esplora la nostra showroom di auto esclusive, sportive e di lusso. Trova la tua prossima fuoriserie con la garanzia e l\'esperienza di Tramonti Diffusion.',
    keywords: 'showroom auto lusso, auto esclusive in vendita, supercar usate, Tramonti Diffusion showroom',
    openGraph: {
        title: 'Showroom Auto Esclusive | Tramonti Diffusion',
        description: 'Esplora la nostra showroom di auto esclusive, sportive e di lusso.',
        type: 'website',
    }
};

export default function ShowroomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
