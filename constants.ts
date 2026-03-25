import { Car } from './types';

export const INVENTORY: Car[] = [
    {
        id: '1',
        make: 'Ferrari',
        model: '12 Cilindri',
        year: 2024,
        price: 614890,
        image: 'https://frattinauto.it/wp-content/uploads/2025/12/ferrari_12cilindri_260030_0001-1-scaled.jpg',
        gallery: [
            'https://frattinauto.it/wp-content/uploads/2025/12/ferrari_12cilindri_260030_0001-1-scaled.jpg',
            'https://frattinauto.it/wp-content/uploads/2025/12/ferrari_12cilindri_260030_0002-scaled.jpg'
        ],
        category: 'Hypercar',
        mileage: '100 km',
        engine: '6.5L V12',
        available: true
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
        available: true
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
        available: true
    },
    {
        id: '4',
        make: 'Ferrari',
        model: '296 GTB',
        year: 2024,
        price: 304890,
        image: 'https://frattinauto.it/wp-content/uploads/2026/01/ferrari_296-gtb_260067_0001-24-scaled.jpg',
        gallery: [
            'https://frattinauto.it/wp-content/uploads/2026/01/ferrari_296-gtb_260067_0001-24-scaled.jpg',
            'https://frattinauto.it/wp-content/uploads/2026/01/ferrari_296-gtb_260067_0002-scaled.jpg'
        ],
        category: 'Supercar',
        mileage: '1,500 km',
        engine: 'V6 Hybrid',
        available: true
    },
    {
        id: '5',
        make: 'Audi',
        model: 'RS6 Avant Performance',
        year: 2024,
        price: 119890,
        image: 'https://frattinauto.it/wp-content/uploads/2025/08/audi_rs6-avant-40-tfsi-v8-quattro-tiptronic-performance_247208_0001-scaled.jpg',
        gallery: [
            'https://frattinauto.it/wp-content/uploads/2025/08/audi_rs6-avant-40-tfsi-v8-quattro-tiptronic-performance_247208_0001-scaled.jpg',
            'https://frattinauto.it/wp-content/uploads/2025/08/audi_rs6-avant-40-tfsi-v8-quattro-tiptronic-performance_247208_0002-scaled.jpg'
        ],
        category: 'Supercar',
        mileage: '12,000 km',
        engine: '4.0L V8 Twin-Turbo',
        available: true
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
        available: true
    }
];

export const NAV_LINKS = [
    { name: 'Showroom', href: '/showroom' },
    { name: 'Servizi', href: '/#services' },
    { name: 'Location', href: '/#location' },
    { name: 'Chi Sono', href: '/chi-sono' },
    { name: 'Contatti', href: '/#contact' }
];
