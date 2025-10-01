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
  imageId?: string;
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
    name: 'Lead Acid Batteries',
    tagline: 'Reliable, cost-effective energy storage for diverse applications.',
    icon: BatteryCharging,
    imageId: 'leadacidbattery',
    models: [
      {
        id: '20024',
        name: 'Model 20024 – 2-Year Warranty',
        price: '',
        imageId: 'leadacidbattery-model-20024',
        features: [
          'Reliable Power – Proven technology for consistent energy storage',
          'Cost-Effective – Lower initial investment compared to lithium',
          'Durable Build – Designed for rugged conditions and long service life',
          'Warranty Protection – 2-year (20024)',
          'Wide Applications – Inverters, UPS, solar backup, telecom',
        ],
        specs: {},
      },
      {
        id: '23036',
        name: 'Model 23036 – 3-Year Warranty',
        price: '',
        imageId: 'leadacidbattery-model-23036',
        features: [
          'Reliable Power – Proven technology for consistent energy storage',
          'Cost-Effective – Lower initial investment compared to lithium',
          'Durable Build – Designed for rugged conditions and long service life',
          'Warranty Protection – 3-year (23036)',
          'Wide Applications – Inverters, UPS, solar backup, telecom',
        ],
        specs: {},
      },
    ],
  },
  {
    id: 2,
    name: 'Lithium Batteries',
    tagline: 'Advanced LFP technology for high performance and safety.',
    icon: BatteryCharging,
    imageId: 'lithium',
    models: [
      {
        id: '220LFP',
        name: 'Model 220LFP – Smart & Non-Smart versions',
        price: '',
        imageId: 'lithiumbattery-model-220',
        features: [
          'Advanced LFP Technology – Longer cycle life (3,000–6,000 cycles)',
          'Smart & Non-Smart Options – Remote monitoring, BMS protection, Bluetooth/IoT (in smart models)',
          'High Energy Density – More backup in compact size',
          'Fast Charging & High Efficiency – 95%+ round-trip efficiency',
          'Safety First – Overcharge, over-discharge, and short-circuit protection',
        ],
        specs: {},
      },
      {
        id: '240LFP',
        name: 'Model 240LFP – Smart & Non-Smart versions',
        price: '',
        imageId: 'lithiumbattery-model-240',
        features: [
          'Advanced LFP Technology – Longer cycle life (3,000–6,000 cycles)',
          'Smart & Non-Smart Options – Remote monitoring, BMS protection, Bluetooth/IoT (in smart models)',
          'High Energy Density – More backup in compact size',
          'Fast Charging & High Efficiency – 95%+ round-trip efficiency',
          'Safety First – Overcharge, over-discharge, and short-circuit protection',
        ],
        specs: {},
      },
      {
        id: 'future',
        name: 'Upcoming Models: 24V Lithium & 48V Lithium',
        price: '',
        imageId: '',
        features: [
          'Future Ready – 24V & 48V Lithium for higher-capacity systems',
        ],
        specs: {},
      },
    ],
  },
  {
    id: 3,
    name: 'Solar Modules',
    tagline: 'High-efficiency solar panels for every scale.',
    icon: LayoutGrid,
    imageId: 'solarmodules',
    models: [
      {
        id: '210W',
        name: '210W',
        price: '',
        imageId: 'solarmodules-210w',
        features: [
          'High conversion efficiency for home & small-scale systems',
          'Compact design, easy rooftop installation',
          'Excellent low-light performance',
        ],
        specs: {},
      },
      {
        id: '275W',
        name: '275W',
        price: '',
        imageId: 'solarmodules-275w',
        features: [
          'High conversion efficiency for home & small-scale systems',
          'Compact design, easy rooftop installation',
          'Excellent low-light performance',
        ],
        specs: {},
      },
      {
        id: '550W',
        name: '550W Bifacial',
        price: '',
        imageId: 'solarmodules-550w-bifacial',
        features: [
          'Bifacial (550W): Captures sunlight from both sides for higher generation',
          'Strong PID resistance (anti-degradation)',
          'Long life with 25-year performance warranty',
          'Robust frame, weatherproof, anti-reflective coating',
        ],
        specs: {},
      },
      {
        id: '580W',
        name: '580W TOPCon',
        price: '',
        imageId: 'solarmodules-580w-topcon',
        features: [
          'TOPCon (580W): Next-gen cells with 22–23% efficiency',
          'Strong PID resistance (anti-degradation)',
          'Long life with 25-year performance warranty',
          'Robust frame, weatherproof, anti-reflective coating',
        ],
        specs: {},
      },
    ],
  },
  {
    id: 4,
    name: 'Solar Generators',
    tagline: 'Coming Soon',
    icon: BatteryCharging,
    imageId: 'solargenerator',
    models: [
      // {
      //   id: 'cola1000plus',
      //   name: 'Cola 1000 Plus',
      //   price: '',
      //   imageId: 'solargenerator',
      //   features: [
      //     'Battery Chemistry: lithium-iron phosphate (LiFePO4)',
      //     'Battery Capacity: 1004.8Wh',
      //     'Battery Lifespan: 8000 cycles',
      //     'Net Weight: 8.70kg',
      //     'Dimensions: L285W205H235mm',
      //     'Rating: 500W',
      //     'AC Input (Grid): 150V-264V, 45-65HZ',
      //     'DC Input (PV): 12-52VDC, 450W max',
      //     'AC Output/Waveform: 500W max/Pure sine-wave',
      //     'Max. PV Input Current: 16A',
      //     'AC Charging power: 500W Max.',
      //     'AC Outlet: Universal',
      //   ],
      //   specs: {},
      // },
    ],
  },
  {
    id: 5,
    name: 'Spray Pump Batteries',
    tagline: 'Durable and efficient lithium-ion batteries designed for agricultural use.',
    icon: BatteryCharging,
    imageId: 'spraybattery',
    models: [
      {
        id: '12v9ah',
        name: '12V 9Ah Lithium-Ion Battery',
        price: '',
        imageId: 'urbanpower9ah',
        features: [
          'Compact and lightweight design for easy portability',
          'High energy density for extended usage',
          'Durable build to withstand agricultural conditions',
          'Reliable performance for spray pumps',
        ],
        specs: {
          'Voltage': '12V',
          'Capacity': '9Ah',
          'Battery Type': 'Lithium-Ion',
        },
      },
      {
        id: '12v14ah',
        name: '12V 14Ah Lithium-Ion Battery',
        price: '',
        imageId: 'urbanpower1214',
        features: [
          'Higher capacity for longer operation time',
          'Compact and lightweight design for easy portability',
          'Durable build to withstand agricultural conditions',
          'Reliable performance for spray pumps',
        ],
        specs: {
          'Voltage': '12V',
          'Capacity': '14Ah',
          'Battery Type': 'Lithium-Ion',
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
    name: 'Ananya Sharma',
    location: 'Saharanpur, India',
    review: 'Our electricity bill has been cut by 70%! The installation was professional, and the system has been flawless. It feels great to use clean energy.',
    imageId: '',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Dehradun, India',
    review: 'The battery backup is a lifesaver. We had a blackout last month and didn\'t even notice until our neighbor called. Total peace of mind.',
    imageId: '',
  },
  {
    id: 3,
    name: 'Priya Iyer',
    location: 'Saharanpur, India',
    review: 'I was impressed with the quality of the panels and the inverter. The mobile app is fantastic for tracking my energy production and savings.',
    imageId: '',
  },
  {
    id: 4,
    name: 'Amitabh Desai',
    location: 'Dehradun, India',
    review: 'The whole process, from quote to installation, was incredibly smooth. The team answered all my questions and helped me choose the perfect system for my home.',
    imageId: '',
  },
  {
    id: 5,
    name: 'Sneha Kapoor',
    location: 'Saharanpur, India',
    review: 'Switching to solar energy was the best decision for our family. The savings are incredible, and the service was top-notch.',
    imageId: '',
  },
  {
    id: 6,
    name: 'Vikram Joshi',
    location: 'Dehradun, India',
    review: 'The team was very professional and guided us through every step. The system works flawlessly, and we are very happy with the results.',
    imageId: '',
  },
  {
    id: 7,
    name: 'Aarti Mehta',
    location: 'Saharanpur, India',
    review: 'I love how easy it is to monitor my energy usage with the app. The installation was quick, and the team was very helpful.',
    imageId: '',
  },
  {
    id: 8,
    name: 'Rohan Gupta',
    location: 'Dehradun, India',
    review: 'The solar panels have been a great investment. The quality is excellent, and the customer support is always available when needed.',
    imageId: '',
  },
];
