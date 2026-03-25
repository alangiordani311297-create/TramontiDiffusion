import type { Metadata } from 'next';
import React from 'react';
import HomeClient from '../../components/HomeClient';

export const metadata: Metadata = {
  title: 'Tramonti Diffusion - Auto di Lusso | Concessionario Esclusivo',
  description: 'Scopri la collezione esclusiva di auto di lusso da Tramonti Diffusion. Specialisti in auto sportive, d\'epoca e fuoriserie per veri appassionati.',
  keywords: 'auto lusso, auto sportive, concessionario auto, Tramonti Diffusion, auto d\'epoca, supercar',
  openGraph: {
    title: 'Tramonti Diffusion - Auto di Lusso | Concessionario',
    description: 'Scopri la collezione esclusiva di auto di lusso da Tramonti Diffusion.',
    url: 'https://tramontidiffusion.it',
    siteName: 'Tramonti Diffusion',
    locale: 'it_IT',
    type: 'website',
  }
};

export default function Page() {
  return <HomeClient />;
}
