import { Car } from './types';

export const INVENTORY: Car[] = [
    {
        id: '1',
        make: 'Ferrari',
        model: '12 Cilindri',
        year: 2024,
        price: 614890,
        image: '/immagini/foto ferrari showroom.jpg',
        gallery: [
            '/immagini/foto ferrari showroom.jpg'
        ],
        category: 'Hypercar',
        mileage: '100 km',
        engine: '6.5L V12',
        available: true,
        transmission: 'Automata Dual-Clutch',
        fuelType: 'Benzina',
        power: '610 kW (830 CV)',
        description: 'La Ferrari 12Cilindri è la naturale evoluzione della filosofia che ha reso iconici i motori V12 di Maranello. Prestazioni estreme e design senza tempo.',
        registration: '05/2024',
        emissions: 'Euro 6D',
        condition: 'Nuova'
    },
    {
        id: '2',
        make: 'Mercedes-Benz',
        model: 'AMG GT R Pro',
        year: 2023,
        price: 236890,
        image: 'https://frattinauto.it/wp-content/uploads/2025/08/mercedesbenz_amg-gt-r-pro_249867_0001-scaled.jpg',
        gallery: [
            'https://frattinauto.it/wp-content/uploads/2025/08/mercedesbenz_amg-gt-r-pro_249867_0001-scaled.jpg',
            'https://frattinauto.it/wp-content/uploads/2025/08/mercedesbenz_amg-gt-r-pro_249867_0002-scaled.jpg'
        ],
        category: 'Supercar',
        mileage: '15,000 km',
        engine: '4.0L V8 Biturbo',
        available: true,
        transmission: 'AMG SPEEDSHIFT DCT 7G',
        fuelType: 'Benzina',
        power: '430 kW (585 CV)',
        description: 'Edizione limitata focalizzata sulla pista. La AMG GT R Pro offre sospensioni regolabili e aerodinamica attiva per il massimo delle prestazioni.',
        registration: '03/2023',
        emissions: 'Euro 6',
        condition: 'Usata'
    },
    {
        id: '3',
        make: 'Porsche',
        model: '718 Cayman GT4 RS',
        year: 2024,
        price: 173840,
        image: 'https://frattinauto.it/wp-content/uploads/2025/08/porsche_718-cayman-40-gt4-rs_250456_0001-scaled.jpg',
        gallery: [
            'https://frattinauto.it/wp-content/uploads/2025/08/porsche_718-cayman-40-gt4-rs_250456_0001-scaled.jpg',
            'https://frattinauto.it/wp-content/uploads/2025/08/porsche_718-cayman-40-gt4-rs_250456_0002-scaled.jpg'
        ],
        category: 'Sportscar',
        mileage: '5,000 km',
        engine: '4.0L Flat-6 NA',
        available: true,
        transmission: 'PDK 7 rapporti',
        fuelType: 'Benzina',
        power: '368 kW (500 CV)',
        description: 'Il DNA della 911 GT3 in un pacchetto a motore centrale. La GT4 RS è la Cayman più estrema mai prodotta, con un sound inconfondibile.',
        registration: '01/2024',
        emissions: 'Euro 6D',
        condition: 'Nuova'
    },
    {
        id: '4',
        make: 'Lamborghini',
        model: 'Huracán 5.2 V10 STO Coupé',
        year: 2022,
        price: 367990,
        image: '/immagini/foto lamborghini huracan showroom.jpg',
        gallery: [
            '/immagini/foto lamborghini huracan showroom.jpg'
        ],
        category: 'Supercar',
        mileage: '2,995 km',
        engine: '5.2L V10',
        available: true,
        transmission: 'Doppia Frizione LDF a 7 rapporti',
        fuelType: 'Benzina',
        power: '470 kW (640 CV)',
        description: 'Super-Trofeo Omologata: aerodinamica estrema e leggerezza eccezionale, nata dalla pista per dominare la strada. Emozioni pure garantite dal potente V10 aspirato.',
        registration: '2022',
        emissions: 'Euro 6D',
        condition: 'Usata'
    },
    {
        id: '5',
        make: 'Audi',
        model: 'RS6 Avant Performance',
        year: 2024,
        price: 119890,
        image: '/immagini/foto rs6 showroom.jpg',
        gallery: [
            '/immagini/foto rs6 showroom.jpg'
        ],
        category: 'Supercar',
        mileage: '12,000 km',
        engine: '4.0L V8 Twin-Turbo',
        available: true,
        transmission: 'Tiptronic 8 rapporti',
        fuelType: 'Benzina / Mild-Hybrid',
        power: '463 kW (630 CV)',
        description: 'La station wagon definitiva. Spazio, lusso e una spinta brutale grazie al V8 biturbo Audi. Versione Performance con pacchetto dinamico.',
        registration: '04/2024',
        emissions: 'Euro 6',
        condition: 'Usata'
    },
    {
        id: '6',
        make: 'BMW',
        model: 'M4 Competition Cabrio',
        year: 2024,
        price: 78990,
        image: 'https://frattinauto.it/wp-content/uploads/2026/01/bmw_m4-competition-m-xdrive-cabrio_255773_0001-scaled.jpg',
        gallery: [
            'https://frattinauto.it/wp-content/uploads/2026/01/bmw_m4-competition-m-xdrive-cabrio_255773_0001-scaled.jpg',
            'https://frattinauto.it/wp-content/uploads/2026/01/bmw_m4-competition-m-xdrive-cabrio_255773_0002-scaled.jpg'
        ],
        category: 'Sportscar',
        mileage: '8,000 km',
        engine: '3.0L Twin-Turbo Inline-6',
        available: true,
        transmission: 'M Steptronic 8 rapporti',
        fuelType: 'Benzina',
        power: '375 kW (510 CV)',
        description: 'Puro piacere di guida a cielo aperto. La M4 Competition Cabrio combina potenza esplosiva e trazione integrale M xDrive.',
        registration: '03/2024',
        emissions: 'Euro 6',
        condition: 'Usata'
    }
];

export const NAV_LINKS = [
    { name: 'Showroom', href: '/showroom' },
    { name: 'Servizi', href: '/#services' },
    { name: 'Location', href: '/#location' },
    { name: 'Chi Sono', href: '/chi-sono' },
    { name: 'Contatti', href: '/#contact' }
];
