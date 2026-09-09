import type { ProductDatasheet, SpecRow } from './productTypes';

export interface EVProductVariant {
  id: string;
  modelNumber: string;
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
  specs: SpecRow[];
  tech: string[];
  apps: string[];
  image: string;
  fallbackImage: string;
  datasheet: ProductDatasheet;
}

export const evProducts: EVProductVariant[] = [
  {
    id: 'chargeloop-ac-res',
    modelNumber: 'SL-EV-AC-R-22',
    category: 'Residential',
    type: 'AC',
    series: 'ChargeLoop Residential Series',
    title: 'ChargeLoop AC EV Charger (7.4 kW – 22 kW)',
    power: '7.4 kW – 22 kW',
    output: 'Single Output',
    voltage: '230V / 400V AC',
    mounting: 'Wall / Column Type',
    keywords: ['residential'],
    desc: 'Smart AC charging for residential communities, home garages, and apartment parking with app control and dynamic load management.',
    specs: [
      { label: 'Series', value: 'ChargeLoop Residential Series' },
      { label: 'Power Rating', value: '7.4 kW – 22 kW' },
      { label: 'Output', value: 'Single Output' },
      { label: 'Voltage', value: '230V / 400V AC' },
      { label: 'Mounting', value: 'Wall / Column Type' },
    ],
    tech: ['RFID & App Smart Access', 'Dynamic Load Balancing', 'IP65 Weatherproof & IK10 Protection', 'OCPP 1.6J Telemetry Integration'],
    apps: ['Private Homes & Villas', 'Residential Apartments', 'Private Garages'],
    image: '/products/EV charger/AC EV Charger.png',
    fallbackImage: '/images/dc-charging.png',
    datasheet: {
      modelNumber: 'SL-EV-AC-R-22',
      series: 'ChargeLoop Residential Series',
      category: 'ev',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'ChargeLoop Residential AC charger for home and community EV charging with smart load balancing and OCPP cloud connectivity.',
      electrical: [
        { label: 'Power Rating', value: '7.4 kW / 11 kW / 22 kW selectable' },
        { label: 'Input Voltage', value: '230V / 400V AC, 50/60 Hz' },
        { label: 'Output Connector', value: 'Type 2 (IEC 62196)' },
        { label: 'Efficiency', value: '≥ 94%' },
        { label: 'Protocol', value: 'OCPP 1.6J' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Wall / column mount' },
        { label: 'Cable Length', value: '5 m standard (optional 7 m)' },
        { label: 'Dimensions (typ.)', value: '380 × 240 × 120 mm' },
        { label: 'Weight', value: '≈ 8 kg' },
      ],
      environmental: [
        { label: 'IP Rating', value: 'IP65' },
        { label: 'IK Rating', value: 'IK10' },
        { label: 'Operating Temperature', value: '-25°C to +50°C' },
      ],
      certifications: ['IEC 61851', 'CE', 'RoHS'],
      warranties: ['3 Years Standard Warranty', 'Extended service plans available'],
      applications: ['Home garages', 'Residential apartments', 'Private villas'],
    },
  },
  {
    id: 'chargeloop-ac-com',
    modelNumber: 'SL-EV-AC-C-22D',
    category: 'Commercial',
    type: 'AC',
    series: 'ChargeLoop Commercial Series',
    title: 'ChargeLoop AC Commercial (7.4 kW – 22 kW)',
    power: '7.4 kW – 22 kW',
    output: 'Dual Output',
    voltage: '230V / 400V AC',
    mounting: 'Ground-Mounted',
    keywords: ['commercial'],
<<<<<<< HEAD
    desc: 'Smart AC charging for commercial complexes, workplaces, and retail centers with automated billing integration.',
=======
    desc: 'Suitable for city special charging stations, public charging stations, intercity highway charging stations, and other locations requiring special AC fast charging.',
>>>>>>> c10e3386c4900e673439e1cf9c75bf2270169494
    specs: [
      { label: 'Series', value: 'ChargeLoop Commercial Series' },
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
    datasheet: {
      modelNumber: 'SL-EV-AC-C-22D',
      series: 'ChargeLoop Commercial Series',
      category: 'ev',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'ChargeLoop Commercial AC dual-output pedestal charger for workplace and retail parking with integrated payment and OCPP backend.',
      electrical: [
        { label: 'Power Rating', value: '7.4 kW – 22 kW per gun' },
        { label: 'Output', value: 'Dual simultaneous Type 2' },
        { label: 'Input Voltage', value: '400V AC three-phase' },
        { label: 'Protocol', value: 'OCPP 1.6J / 2.0' },
        { label: 'Payment', value: 'RFID, UPI, card gateway' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Ground pedestal, vandal-proof' },
        { label: 'Display', value: '7" touchscreen (optional)' },
      ],
      environmental: [
        { label: 'IP Rating', value: 'IP54 (pedestal)' },
        { label: 'Operating Temperature', value: '-20°C to +50°C' },
      ],
      certifications: ['IEC 61851', 'CE', 'RoHS'],
      warranties: ['3 Years Standard Warranty'],
      applications: ['Office parks', 'Hotels', 'Shopping malls', 'Workplace parking'],
    },
  },
  {
    id: 'chargeloop-dc-fast',
    modelNumber: 'SL-EV-DC-240',
    category: 'Commercial',
    type: 'DC',
    series: 'ChargeLoop DC Fast Series',
    title: 'ChargeLoop DC Fast Charger (30 kW – 240 kW)',
    power: '30 kW – 240 kW',
    output: 'Single Output',
    voltage: 'DC200–750V / DC150–500V (JIS)',
    mounting: 'Wall-Mounted',
    keywords: ['commercial'],
<<<<<<< HEAD
    desc: 'High-performance DC fast charging for highways, fuel stations, malls, and fleet depots with dynamic power allocation and payment integration.',
    specs: [
      { label: 'Series', value: 'ChargeLoop DC Fast Series' },
      { label: 'Power Rating', value: '30 kW – 240 kW' },
      { label: 'Output', value: 'Dual / Multi Gun Fast Output' },
      { label: 'Voltage', value: '200–750V DC' },
      { label: 'Mounting', value: 'Ground Type' },
=======
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
>>>>>>> c10e3386c4900e673439e1cf9c75bf2270169494
    ],
    image: '/products/EV charger/DC EV Charger.png',
    fallbackImage: '/images/ac-charging.png',
    datasheet: {
      modelNumber: 'SL-EV-DC-240',
      series: 'ChargeLoop DC Fast Series',
      category: 'ev',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'ChargeLoop DC Fast is a commercial-grade DC fast charger for public charging hubs and fleet operations with multi-gun dynamic power allocation.',
      electrical: [
        { label: 'Power Rating', value: '30 kW – 240 kW total' },
        { label: 'Output Voltage', value: '200 – 750 V DC' },
        { label: 'Connectors', value: 'CCS2 / CHAdeMO (configurable)' },
        { label: 'Efficiency', value: '≥ 95%' },
        { label: 'Protocol', value: 'OCPP 1.6J / 2.0' },
      ],
      mechanical: [
        { label: 'Enclosure', value: 'Galvanized steel, outdoor rated' },
        { label: 'Display', value: '7" color touchscreen' },
        { label: 'Cable Management', value: 'Retractable / overhead options' },
      ],
      environmental: [
        { label: 'IP Rating', value: 'IP54' },
        { label: 'Operating Temperature', value: '-30°C to +50°C' },
        { label: 'Humidity', value: '5% – 95% RH' },
      ],
      certifications: ['IEC 61851', 'IEC 62196', 'CE'],
      warranties: ['2 Years Standard Warranty', 'On-site service SLA available'],
      applications: ['Highway corridors', 'Fleet depots', 'Petrol station retrofit', 'Commercial parking monetization'],
    },
  },
];

export const getResidentialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('residential'));

export const getCommercialEVProducts = (): EVProductVariant[] =>
  evProducts.filter((p) => p.keywords.includes('commercial'));
