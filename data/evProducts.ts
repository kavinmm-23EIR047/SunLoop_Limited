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
    mounting: 'Ground Pedestal',
    keywords: ['commercial'],
    desc: 'Smart AC charging engineered for commercial complexes, workplaces, retail centers, and residential communities with automated billing integration.',
    specs: [
      { label: 'Power Rating', value: '7.4 kW – 22 kW' },
      { label: 'Output', value: 'Dual Output' },
      { label: 'Voltage', value: '230V / 400V AC' },
      { label: 'Mounting', value: 'Ground Pedestal' },
    ],
    tech: ['Dual Gun Simultaneous Charging', 'Commercial Billing & Payment Gateway', 'Vandal-proof Ground Pedestal', 'OCPP 1.6J / 2.0 Open Protocol'],
    apps: ['Commercial Office Parks', 'Hotels & Resorts', 'Shopping Malls & Workplaces'],
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
    output: 'Dual / Multi Output',
    voltage: '200–750V DC',
    mounting: 'Ground Type',
    keywords: ['commercial'],
    desc: 'High-performance DC fast charging built for businesses and investors capitalizing on the growing EV market — ideal for fuel stations, highways, malls, hotels, and fleet depots, enabling recurring charging revenue.',
    specs: [
      { label: 'Power Rating', value: '30 kW – 240 kW' },
      { label: 'Output', value: 'Dual / Multi Gun Fast Output' },
      { label: 'Voltage', value: '200–750V DC' },
      { label: 'Mounting', value: 'Ground Type' },
    ],
    tech: ['Dynamic Power Allocation across Guns', '7" Touchscreen & UPI/Card Payment Integration', 'Heavy Duty Galvanized Weatherproof Enclosure', 'Sunloop AI Cloud Remote Monitoring & Management'],
    apps: ['Highway Fast Charging Hubs', 'Fleet Depots & Commercial Facilities', 'Petrol Stations, Malls & Hotels'],
    image: '/products/EV charger/DC EV Charger.png',
    fallbackImage: '/images/ac-charging.png',
  },
];

export const getResidentialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('residential'));

export const getCommercialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('commercial'));

