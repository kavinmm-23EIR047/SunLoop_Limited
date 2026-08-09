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
    series: 'Residential AC Series · SunCharge',
    title: 'AC EV Charger (Residential)',
    power: '3.5 / 7 / 11 / 22 kW',
    output: 'Single Output',
    voltage: '230 / 400V AC',
    mounting: 'Wall / Column Type',
    keywords: ['residential'],
    desc: 'Compact single-output AC smart charger designed for home garages, private villas, and residential apartment parking with app control and smart load management.',
    specs: [
      { label: 'Power Rating', value: '3.5 / 7 / 11 / 22 kW' },
      { label: 'Output', value: 'Single Output' },
      { label: 'Voltage', value: '230V / 400V AC' },
      { label: 'Mounting', value: 'Wall / Column Type' },
    ],
    tech: ['RFID & App Smart Access', 'Dynamic Load Balancing', 'IP65 Weatherproof & IK10 Protection', 'OCPP 1.6J Telemetry'],
    apps: ['Private Homes & Villas', 'Residential Apartments', 'Private Garages'],
    image: '/images/ac-charging.png',
    fallbackImage: '/images/dc-charging.png',
  },
  {
    id: 'ac-ev-charger-com',
    category: 'Commercial',
    type: 'AC',
    series: 'Commercial AC Series · SunCharge Pro',
    title: 'AC EV Charger (Commercial)',
    power: '7 / 11 / 22 kW',
    output: 'Dual Output',
    voltage: '230 / 400V AC',
    mounting: 'Ground Type',
    keywords: ['commercial'],
    desc: 'Heavy-duty dual-output AC charger ideal for commercial office parking, corporate campuses, hotels, and retail shopping centers.',
    specs: [
      { label: 'Power Rating', value: '7 / 11 / 22 kW' },
      { label: 'Output', value: 'Dual Output' },
      { label: 'Voltage', value: '230V / 400V AC' },
      { label: 'Mounting', value: 'Ground Type' },
    ],
    tech: ['Dual Gun Simultaneous Charging', 'Commercial Billing & UPI Gateway', 'Vandal-proof Ground Pedestal', 'OCPP 1.6J / 2.0 Open Protocol'],
    apps: ['Commercial Office Parks', 'Hotels & Resorts', 'Shopping Malls & Workplaces'],
    image: '/images/ac-charging.png',
    fallbackImage: '/images/ac-charging.png',
  },
  {
    id: 'dc-ev-charger-res',
    category: 'Residential',
    type: 'DC',
    series: 'Residential Fast DC Series · SunFast Home',
    title: 'DC EV Charger (Residential)',
    power: '20 / 30 kW',
    output: 'Single Output',
    voltage: '200–750V DC',
    mounting: 'Wall / Column Type',
    keywords: ['residential'],
    desc: 'High-speed single-output compact DC fast charger for luxury residential estates, private fleets, and home workshops requiring rapid EV top-ups.',
    specs: [
      { label: 'Power Rating', value: '20 / 30 kW' },
      { label: 'Output', value: 'Single Output' },
      { label: 'Voltage', value: '200–750V DC' },
      { label: 'Mounting', value: 'Wall / Column Type' },
    ],
    tech: ['Fast DC Charging Module', 'Compact Wall / Column Footprint', 'Smart App Power Monitoring', 'Comprehensive Electrical Safeguards'],
    apps: ['Luxury Villas & Estates', 'Private Fleet Garages', 'Residential Community Plazas'],
    image: '/images/dc-charging.png',
    fallbackImage: '/images/ac-charging.png',
  },
  {
    id: 'dc-ev-charger-com',
    category: 'Commercial',
    type: 'DC',
    series: 'Commercial Super DC Series · SunFast Commercial',
    title: 'DC EV Charger (Commercial)',
    power: '30–480 kW',
    output: '2 / 4 Output',
    voltage: '200–750V DC',
    mounting: 'Ground Type',
    keywords: ['commercial'],
    desc: 'High-capacity ground-mounted multi-gun DC fast charging station engineered for highway charging plazas, commercial fleets, and public charging networks.',
    specs: [
      { label: 'Power Rating', value: '30–480 kW' },
      { label: 'Output', value: '2 / 4 Output' },
      { label: 'Voltage', value: '200–750V DC' },
      { label: 'Mounting', value: 'Ground Type' },
    ],
    tech: ['Dynamic Power Sharing across 2 to 4 Guns', '7" HD Touchscreen & Multi-Payment Terminal', 'Heavy Duty Galvanized Enclosure', 'Sunloop AI Cloud Telemetry & OTA'],
    apps: ['Highway Super Charging Hubs', 'Commercial Fleets & Depots', 'Public EV Plazas & Petrol Pumps'],
    image: '/images/dc-charging.png',
    fallbackImage: '/images/ac-charging.png',
  },
  {
    id: 'dc-split-charging-com',
    category: 'Commercial',
    type: 'DC',
    series: 'Commercial Matrix Hub · SunMega Split',
    title: 'DC Split Charging Station (Commercial)',
    power: '240 kW',
    output: 'Split Charging Station',
    voltage: '200–750V DC',
    mounting: 'Ground Type',
    keywords: ['commercial'],
    desc: 'High-power 240 kW split charging architecture separating the power rectifier cabinet from slender ground dispensers for multi-vehicle commercial hubs.',
    specs: [
      { label: 'Power Rating', value: '240 kW' },
      { label: 'Output', value: 'Split Charging Station' },
      { label: 'Voltage', value: '200–750V DC' },
      { label: 'Mounting', value: 'Ground Type' },
    ],
    tech: ['Central Power Rectifier + Remote Dispensers', 'Flexible Multi-Gun Power Allocation', 'Liquid Cooling Compatible', 'OCPP 1.6 / 2.0 Cloud Dashboard'],
    apps: ['High-Density Commercial Depots', 'Highway Service Stations', 'Public Bus & Fleet Hubs'],
    image: '/images/dc-charging.png',
    fallbackImage: '/images/ac-charging.png',
  },
];

export const getResidentialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('residential'));

export const getCommercialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('commercial'));
