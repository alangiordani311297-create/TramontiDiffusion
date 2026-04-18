export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    image: string;
    gallery: string[];
    category: string;
    mileage: string;
    engine: string;
    available: boolean;
    transmission: string;
    fuelType: string;
    power: string;
    description: string;
    registration: string;
    emissions: string;
    condition: 'Nuova' | 'Usata' | 'Km 0';
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}

export enum FilterType {
    ALL = 'ALL',
    SUPERCAR = 'Supercar',
    SUV = 'SUV',
    CLASSIC = 'Classic',
    HYPERCAR = 'Hypercar'
}
