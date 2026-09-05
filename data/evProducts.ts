export interface EVProductVariant {
  id: string;
  category: 'Residential' | 'Commercial';
  type: 'AC' | 'DC';
  series: string;
  title: string;
  power: string;
  output: string;
  voltage: string;
  mounting: string;
  keywords: ('residential' | 'commercial')[];
  desc: string;
  specs: { label: string; value: string }[];
  tech: string[];
  apps: string[];
  image: string;
  fallbackImage: string;
}

export const evProducts: EVProductVariant[] = [
  {
    id: 'ac-ev-charger-res',
    category: 'Residential',
    type: 'AC',
    series: 'Residential AC Series',
    title: 'AC EV Charger (7.4 kW – 22 kW)',
    power: '7.4 kW – 22 kW',
    output: 'Single Output',
    voltage: '230V / 400V AC',
    mounting: 'Wall / Column Type',
    keywords: ['residential'],
    desc: 'Smart charging for residential communities, home garages, private villas, and apartment parking with app control and dynamic load management.',
    specs: [
      { label: 'Power Rating', value: '7.4 kW – 22 kW' },
      { label: 'Output', value: 'Single Output' },
      { label: 'Voltage', value: '230V / 400V AC' },
      { label: 'Mounting', value: 'Wall / Column Type' },
    ],
    tech: ['RFID & App Smart Access', 'Dynamic Load Balancing', 'IP65 Weatherproof & IK10 Protection', 'OCPP 1.6J Telemetry Integration'],
    apps: ['Private Homes & Villas', 'Residential Apartments', 'Private Garages'],
    image: '/products/EV charger/AC EV Charger.png',
    fallbackImage: '/images/dc-charging.png',
  },
  {
    id: 'ac-ev-charger-com',
    category: 'Commercial',
    type: 'AC',
    series: 'Commercial AC Series',
    title: 'AC EV Charger Commercial (7.4 kW – 22 kW)',
    power: '7.4 kW – 22 kW',
    output: 'Dual Output',
    voltage: '230V / 400V AC',
    mounting: 'Ground-Mounted',
    keywords: ['commercial'],
    desc: 'Suitable for city special charging stations, public charging stations, intercity highway charging stations, and other locations requiring special AC fast charging.',
    specs: [
      { label: 'Power Rating', value: '7.4 kW – 22 kW' },
      { label: 'Output', value: '1 or 2 outputs (model dependent)' },
      { label: 'Voltage', value: 'AC220V / AC240V / AC380V ±15%' },
      { label: 'Mounting', value: 'Ground-Mounted' },
    ],
    tech: [
      'Delicate appearance, simple operation, convenient installation',
      'High efficiency, reliable and stable performance',
      '4.3-inch / 7-inch color touch screen (optional)',
      'Multiple charging, operation management and payment modes',
      'Ethernet or wireless telecommunication support',
      'RFID Card / OCPP 1.6J support (optional)',
      'Type-2 / Type-1 connector or socket (optional)',
      'Integrated overload protection and online data upgrade',
    ],
    apps: [
      'City special charging stations',
      'Bus, taxi, public service, sanitation and logistics vehicles',
      'City public charging stations and private cars',
      'Intercity highway charging stations',
    ],
    image: '/products/EV charger/ac Dual Output.png',
    fallbackImage: '/images/ac-charging.png',
  },
  {
    id: 'dc-ev-charger-com',
    category: 'Commercial',
    type: 'DC',
    series: 'DC Fast Charger Series',
    title: 'DC Fast EV Charger (30 kW – 240 kW)',
    power: '30 kW – 240 kW',
    output: 'Single Output',
    voltage: 'DC200–750V / DC150–500V (JIS)',
    mounting: 'Wall-Mounted',
    keywords: ['commercial'],
    desc: 'DC fast charging for city special charging stations, public charging stations, intercity highway charging stations, and other locations requiring special DC fast charging.',
    specs: [
      { label: 'Power Rating', value: '20 kW / 30 kW' },
      { label: 'Output', value: 'Single Output' },
      { label: 'Voltage', value: 'DC200–750V / DC150–500V (JIS)' },
      { label: 'Mounting', value: 'Wall-Mounted' },
    ],
    tech: [
      'Delicate appearance, simple operation, convenient installation',
      'High efficiency, reliable and stable performance',
      '4.3-inch color touch screen (optional)',
      'Plug & Play support',
      'Integrated overload protection',
      'CCS-2 / CCS-1 / CHAdeMO connector or socket (optional)',
      'RFID card / OCPP 1.6J support (optional)',
    ],
    apps: [
      'City special charging stations',
      'Bus, taxi, public service, sanitation and logistics vehicles',
      'City public charging stations and private cars',
      'Intercity highway charging stations',
    ],
    image: '/products/EV charger/DC EV Charger.png',
    fallbackImage: '/images/ac-charging.png',
  },
];

export const getResidentialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('residential'));

export const getCommercialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('commercial'));

