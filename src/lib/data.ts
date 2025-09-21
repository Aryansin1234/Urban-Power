import { LayoutGrid, BatteryCharging, Zap, type LucideIcon } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export interface ProductModel {
  id: string;
  name: string;
  price: string;
  features: string[];
  specs: { [key: string]: string };
}

export interface Product {
  id: number;
  name: string;
  tagline: string;
  icon: LucideIcon;
  imageId: string;
  models: ProductModel[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Solar Panels',
    tagline: 'High-efficiency panels for maximum power generation.',
    icon: LayoutGrid,
    imageId: 'solar-panel',
    models: [
      {
        id: 'standard-450w',
        name: 'Standard 450W',
        price: '$2,500',
        features: [
          'Monocrystalline PERC technology',
          '22.5% efficiency rating',
          'Durable, all-weather construction',
          '25-year performance warranty',
        ],
        specs: {
          'Power Output': '450W',
          'Dimensions': '1.9m x 1.1m',
          'Weight': '22 kg',
          'Cell Type': 'Monocrystalline',
        },
      },
      {
        id: 'premium-550w',
        name: 'Premium 550W',
        price: '$3,200',
        features: [
          'TOPCon Bifacial technology',
          '23.5% efficiency rating',
          'Enhanced low-light performance',
          '30-year performance warranty',
        ],
        specs: {
          'Power Output': '550W',
          'Dimensions': '2.1m x 1.1m',
          'Weight': '25 kg',
          'Cell Type': 'N-Type TOPCon',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Home Batteries',
    tagline: 'Store your energy and power your home, day or night.',
    icon: BatteryCharging,
    imageId: 'battery',
    models: [
      {
        id: 'ess-13kwh',
        name: 'ESS 13.5kWh',
        price: '$8,000',
        features: [
          '13.5 kWh usable capacity',
          'Seamless backup power during outages',
          'Smart energy management app',
          '10-year warranty',
        ],
        specs: {
          'Capacity': '13.5 kWh',
          'Power': '5 kW continuous',
          'Round-trip Efficiency': '90%',
          'Operating Temp': '-20°C to 50°C',
        },
      },
      {
        id: 'ess-27kwh',
        name: 'ESS 27kWh',
        price: '$14,500',
        features: [
          '27 kWh usable capacity for larger homes',
          'Stackable for up to 108 kWh',
          'Advanced liquid cooling system',
          '15-year warranty',
        ],
        specs: {
          'Capacity': '27 kWh',
          'Power': '10 kW continuous',
          'Round-trip Efficiency': '92%',
          'Operating Temp': '-20°C to 55°C',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Inverters',
    tagline: 'The smart heart of your solar energy system.',
    icon: Zap,
    imageId: 'inverter',
    models: [
      {
        id: 'hybrid-7kw',
        name: 'Hybrid 7.6kW',
        price: '$1,500',
        features: [
          'Hybrid on-grid and off-grid functionality',
          '98% peak efficiency',
          'Integrated system monitoring',
          'Compact and easy to install',
        ],
        specs: {
          'Max AC Power': '7.6 kW',
          'Max DC Voltage': '600V',
          'MPPT Channels': '2',
          'Warranty': '12 years',
        },
      },
      {
        id: 'string-10kw',
        name: 'String 10kW',
        price: '$2,100',
        features: [
          'Ideal for larger residential systems',
          '98.5% peak efficiency',
          'Built-in arc-fault protection',
          'SunSpec certified for rapid shutdown',
        ],
        specs: {
          'Max AC Power': '10 kW',
          'Max DC Voltage': '1000V',
          'MPPT Channels': '3',
          'Warranty': '15 years',
        },
      },
    ],
  },
];

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  imageId: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah L.',
    location: 'Austin, TX',
    review: 'Our electricity bill has been cut by 70%! The installation was professional, and the system has been flawless. It feels great to use clean energy.',
    imageId: 'testimonial-1',
  },
  {
    id: 2,
    name: 'Mike & Jenna R.',
    location: 'San Diego, CA',
    review: 'The battery backup is a lifesaver. We had a blackout last month and didn\'t even notice until our neighbor called. Total peace of mind.',
    imageId: 'testimonial-2',
  },
  {
    id: 3,
    name: 'David Chen',
    location: 'Phoenix, AZ',
    review: 'I was impressed with the quality of the panels and the inverter. The mobile app is fantastic for tracking my energy production and savings.',
    imageId: 'testimonial-3',
  },
    {
    id: 4,
    name: 'Emily B.',
    location: 'Denver, CO',
    review: 'The whole process, from quote to installation, was incredibly smooth. The team answered all my questions and helped me choose the perfect system for my home.',
    imageId: 'testimonial-1',
  },
];
