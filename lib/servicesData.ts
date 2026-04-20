import { Wrench, Sparkles, Truck, CreditCard, Shield, Gem } from 'lucide-react';

export const SERVICES = [
    {
        id: "officina-certificata",
        slug: "officina-certificata",
        icon: Wrench,
        title: "Officina Certificata",
        imagePosition: "object-center",
        description: "Tecnici specializzati Ferrari, Lamborghini e Porsche. Utilizziamo solo ricambi originali e diagnostica ufficiale per mantenere le prestazioni della tua supercar al massimo livello.",
        image: "/immagini/foto officina certificata.jpg",
        details: {
            headline: "La tua Supercar merita il meglio.",
            content: "La nostra officina è un tempio della meccanica di precisione. Ogni intervento viene eseguito seguendo rigorosamente gli standard della casa madre. Disponiamo di ponti sollevatori a basso profilo per vetture sportive e strumenti di diagnosi ufficiali.",
            features: [
                "Diagnostica Ufficiale Leonardo",
                "Tagliandi e Manutenzione Ordinaria",
                "Restauro Motori d'Epoca",
                "Assetto e Bilanciatura Elettronica"
            ]
        }
    },
    {
        id: "detailing-ppf",
        slug: "detailing-ppf",
        icon: Sparkles,
        title: "Detailing & PPF",
        imagePosition: "object-center",
        description: "Trattamenti nanotecnologici e applicazione di pellicole protettive (PPF) per preservare la vernice originale. Il nostro servizio di detailing riporta l'auto a condizioni da concorso.",
        image: "/immagini/detailing e ppf.jpg",
        details: {
            headline: "Perfezione Estetica Assoluta",
            content: "Il detailing non è solo lavaggio, è un'arte. Utilizziamo prodotti di altissima gamma per correggere difetti della vernice, proteggerla con trattamenti ceramici e applicare pellicole PPF invisibili e autorigeneranti.",
            features: [
                "Correzione Vernice a 3 Step",
                "Applicazione PPF Xpel",
                "Nano-Ceramic Coating",
                "Pulizia e Nutrizione Pelle Interna"
            ]
        }
    },
    {
        id: "trasporto-blindato",
        slug: "trasporto-blindato",
        icon: Truck,
        title: "Consegna a Domicilio",
        imagePosition: "object-center",
        description: "Consegna della vettura ovunque nel mondo tramite i nostri camion chiusi e assicurati. Gestiamo tutte le pratiche doganali per l'export internazionale.",
        image: "/immagini/consegna a domicilio.jpg",
        details: {
            headline: "",
            content: "Che tu debba spostare la tua auto per un evento, una vacanza o una vendita, il nostro servizio di trasporto blindato garantisce la massima sicurezza e privacy. I nostri mezzi sono anonimi e dotati di sistemi di tracciamento satellitare.",
            features: [
                "Camion Chiusi e Riscaldati",
                "Copertura Assicurativa All-Risk",
                "Gestione Pratiche Doganali",
                "Servizio Door-to-Door Internazionale"
            ]
        }
    },
    {
        id: "servizi-finanziari",
        slug: "servizi-finanziari",
        icon: CreditCard,
        title: "Servizi di Finanziamento",
        imagePosition: "object-right",
        description: "Soluzioni di leasing e finanziamento su misura, incluse opzioni con maxi-rata finale e leasing per auto d'epoca. Collaboriamo con i principali istituti di credito private.",
        image: "/immagini/servizi_finanziari_premium.png",
        details: {
            headline: "Flessibilità Finanziaria su Misura",
            content: "Offriamo prodotti finanziari strutturati per ottimizzare l'acquisto della tua auto di lusso. Dal leasing operativo al finanziamento classico, studiamo la soluzione fiscale più adatta alle tue esigenze.",
            features: [
                "Leasing con Maxi-Rata Finale",
                "Finanziamenti per Auto d'Epoca",
                "Noleggio a Lungo Termine Premium",
                "Consulenza Fiscale Dedicata"
            ]
        }
    },
    {
        id: "estensione-garanzia",
        slug: "estensione-garanzia",
        icon: Shield,
        title: "Estensione Garanzia",
        imagePosition: "object-center",
        description: "Pacchetti di garanzia estesa fino a 24 mesi su tutto l'usato certificato Tramonti Diffusion, per goderti la tua auto senza pensieri.",
        image: "/immagini/estensione_garanzia_premium.png",
        details: {
            headline: "Guida Senza Pensieri",
            content: "Le nostre auto sono super controllate, ma per la tua massima tranquillità offriamo estensioni di garanzia complete che coprono parti meccaniche, elettriche ed elettroniche fino a 24 mesi dall'acquisto.",
            features: [
                "Copertura Europea Completa",
                "Soccorso Stradale H24 Incluso",
                "Nessuna Franchigia",
                "Trasferibilità in Caso di Vendita"
            ]
        }
    },
    {
        id: "vendi-la-tua-auto",
        slug: "vendi-la-tua-auto",
        icon: Gem,
        title: "Vendi la Tua Auto",
        imagePosition: "object-[center_right] md:object-right",
        description: "Valutiamo la tua auto di lusso e la proponiamo alla nostra clientela esclusiva. Un processo semplice, discreto e vantaggioso per cedere la tua vettura al miglior prezzo.",
        image: "/immagini/vendi la tua auto.jpeg",
        details: {
            headline: "Il Modo Più Esclusivo di Vendere",
            content: "Affida la tua auto a Tramonti Diffusion e lascia che siamo noi a trovare l'acquirente giusto. Grazie alla nostra rete di clienti selezionati, garantiamo visibilità immediata e trattative riservate per massimizzare il valore della tua vettura.",
            features: [
                "Valutazione Gratuita e Senza Impegno",
                "Visibilità sulla Nostra Clientela Esclusiva",
                "Gestione Completa della Trattativa",
                "Massima Discrezione e Riservatezza"
            ]
        }
    }
];
