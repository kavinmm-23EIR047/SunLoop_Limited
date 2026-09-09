import type { ProductDatasheet, SpecRow } from './productTypes';

export interface ESSProduct {
  id: string;
  modelNumber: string;
  category: 'residential' | 'commercial';
  categoryLabel: 'Residential ESS' | 'Commercial & Utility ESS';
  keyword: 'residential' | 'commercial';
  series: string;
  title: string;
  voltage?: string;
  capacity: string;
  power?: string;
  specs: SpecRow[];
  desc: string;
  features: string[];
  image: string;
  fallbackImage: string;
  datasheet: ProductDatasheet;
}

export const essProducts: ESSProduct[] = [
  {
    id: 'wallloop-residential',
    modelNumber: 'SL-WA-5-20',
    category: 'residential',
    categoryLabel: 'Residential ESS',
    keyword: 'residential',
    series: 'WallLoop Series',
    title: 'WallLoop ESS (5 kWh – 20 kWh)',
    voltage: '48V / 51.2V',
    capacity: '5 kWh – 20 kWh',
    specs: [
      { label: 'System Type', value: 'Wall-Mounted ESS' },
      { label: 'Series', value: 'WallLoop Series' },
      { label: 'Best For', value: 'Homes — compact, space-saving, easy install' },
      { label: 'Capacity Range', value: '5 kWh to 20 kWh' },
      { label: 'Chemistry', value: 'LiFePO4 (Grade A Cells)' },
    ],
    desc: 'Compact, space-saving wall-mounted lithium battery storage systems designed for residential homes, ensuring 24/7 power backup and solar self-consumption.',
    features: [
      'Built-in Smart BMS with Active Cell Balancing',
      'Wall-Mounted Ergonomic Design with LCD Status Display',
      'Parallel Expansion Support up to 15 Units',
      'Compatible with Deye, Victron, Growatt & Solis Inverters',
    ],
    image: '/products/Wall Mount Low Voltage Pack.png',
    fallbackImage: '/images/commercial-energy.png',
    datasheet: {
      modelNumber: 'SL-WA-5-20',
      series: 'WallLoop Series',
      category: 'ess',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'WallLoop is a residential wall-mounted LiFePO4 energy storage system engineered for solar self-consumption, UPS backup, and peak-load management. Modular 5–20 kWh capacity with parallel expansion to 15 units.',
      electrical: [
        { label: 'Nominal Voltage', value: '48V / 51.2V DC' },
        { label: 'Capacity Range', value: '5 kWh – 20 kWh (expandable)' },
        { label: 'Cell Chemistry', value: 'LiFePO4 Grade A' },
        { label: 'Cycle Life', value: '≥ 6,000 cycles @ 80% DOD' },
        { label: 'Efficiency', value: '≥ 95% round-trip' },
        { label: 'Parallel Units', value: 'Up to 15 units' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Wall-mounted, indoor/outdoor rated' },
        { label: 'Display', value: 'Integrated LCD status panel' },
        { label: 'Dimensions (typ.)', value: '580 × 260 × 180 mm (5 kWh unit)' },
        { label: 'Weight (typ.)', value: '45 – 95 kg depending on capacity' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-10°C to +50°C' },
        { label: 'IP Rating', value: 'IP65' },
        { label: 'Cooling', value: 'Natural convection' },
        { label: 'Altitude', value: '≤ 2,000 m' },
      ],
      certifications: ['IEC 62619', 'UN 38.3', 'CE', 'RoHS'],
      warranties: ['10 Years Product Warranty (Battery & BMS)', '5 Years Extended Service Available'],
      applications: ['Residential solar self-consumption', 'Home UPS backup', 'Time-of-use tariff optimization'],
      orderingInfo: 'Contact Sunloop Energy sales for configuration matrix and inverter compatibility guide.',
    },
  },
  {
    id: 'stackloop-commercial',
    modelNumber: 'SL-SA-30-500',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'StackLoop Series',
    title: 'StackLoop ESS (30 kWh – 500 kWh)',
    voltage: '384V ~ 1000V',
    capacity: '30 kWh – 500 kWh',
    power: '30 kW – 500 kW',
    specs: [
      { label: 'System Type', value: 'Trolley-Type / Cabinet ESS' },
      { label: 'Series', value: 'StackLoop Series' },
      { label: 'Best For', value: 'Commercial & Industrial — mobile, scalable' },
      { label: 'Capacity Range', value: '30 kWh to 500 kWh' },
      { label: 'Chemistry', value: 'LiFePO4 Grade A High-Density Pack' },
    ],
    desc: 'Mobile and scalable StackLoop energy storage units designed for commercial complexes, industrial sites, and factories requiring flexible backup and peak shaving.',
    features: [
      'Mobile & Modular Chassis for Quick Deployment',
      'Integrated Smart HVAC & Thermal Safety Control',
      'Sunloop AI Portal Telemetry for Automated Peak Shaving',
      'Multi-Tier Fire Suppression & Thermal Safety Management',
    ],
    image: '/products/Energy Storage Cabinet.png',
    fallbackImage: '/images/commercial-energy.png',
    datasheet: {
      modelNumber: 'SL-SA-30-500',
      series: 'StackLoop Series',
      category: 'ess',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'StackLoop is a commercial-grade modular ESS cabinet for C&I peak shaving, demand charge reduction, and microgrid backup. Scalable from 30 kWh to 500 kWh with integrated thermal management.',
      electrical: [
        { label: 'Voltage Range', value: '384V – 1000V DC' },
        { label: 'Capacity Range', value: '30 kWh – 500 kWh' },
        { label: 'Power Range', value: '30 kW – 500 kW' },
        { label: 'Cell Chemistry', value: 'LiFePO4 High-Density' },
        { label: 'Cycle Life', value: '≥ 6,000 cycles @ 80% DOD' },
        { label: 'Response Time', value: '< 100 ms' },
      ],
      mechanical: [
        { label: 'Enclosure', value: 'Outdoor-rated cabinet / trolley chassis' },
        { label: 'Cooling', value: 'Integrated HVAC liquid/air hybrid' },
        { label: 'Fire Safety', value: 'Multi-tier suppression system' },
        { label: 'Dimensions', value: 'Modular — contact sales for layout drawings' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-20°C to +55°C' },
        { label: 'IP Rating', value: 'IP54 (cabinet)' },
        { label: 'Humidity', value: '5% – 95% RH non-condensing' },
      ],
      certifications: ['IEC 62619', 'IEC 62477', 'CE', 'UN 38.3'],
      warranties: ['10 Years Commercial Cabinet & Battery Warranty'],
      applications: ['Commercial peak shaving', 'Industrial backup power', 'Solar + storage hybrid C&I sites'],
      orderingInfo: 'StackLoop configurations are engineered per site load profile. Request formal quotation.',
    },
  },
  {
    id: 'cubeloop-utility',
    modelNumber: 'SL-CA-500-10M',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'CubeLoop Series',
    title: 'CubeLoop ESS (500+ kWh Utility-Scale)',
    power: '100 kW – 5000 kW',
    capacity: '500+ kWh (stackable up to 10,000+ kWh)',
    specs: [
      { label: 'System Type', value: 'Containerized ESS' },
      { label: 'Series', value: 'CubeLoop Series' },
      { label: 'Best For', value: 'Utility-scale — grid-integrated deployments' },
      { label: 'Capacity Range', value: '500+ kWh (up to 10 MWh)' },
      { label: 'Enclosure', value: '20ft / 40ft ISO Standard Container' },
    ],
    desc: 'High-capacity, grid-integrated CubeLoop containerized energy storage deployments built for utility substations, large industrial complexes, and microgrid stabilization.',
    features: [
      '20ft / 40ft ISO Standard Modular Container Architecture',
      'Liquid Thermal Cooling for Extended Life & Optimal Safety',
      'Grid Substation Frequency Regulation & Peak Load Shifting',
      'MW-Scale PCS Integration with Black-Start Capability',
    ],
    image: '/products/Energy Storage Container.png',
    fallbackImage: '/images/commercial-energy.png',
    datasheet: {
      modelNumber: 'SL-CA-500-10M',
      series: 'CubeLoop Series',
      category: 'ess',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'CubeLoop is a utility-scale containerized BESS platform for grid frequency regulation, peak load shifting, and microgrid stabilization. ISO container modular design from 500 kWh to 10+ MWh.',
      electrical: [
        { label: 'Power Scale', value: '100 kW – 5,000 kW (5 MW)' },
        { label: 'Storage Scale', value: '500 kWh – 10,000 kWh (10 MWh)' },
        { label: 'Grid Support', value: 'Frequency regulation, voltage support, black-start' },
        { label: 'PCS Integration', value: 'MW-scale bidirectional PCS' },
        { label: 'Cell Chemistry', value: 'LiFePO4 containerized banks' },
      ],
      mechanical: [
        { label: 'Container', value: '20ft / 40ft ISO standard' },
        { label: 'Cooling', value: 'Liquid thermal management system' },
        { label: 'Maintenance', value: 'External access service panels' },
        { label: 'Transport', value: 'Standard ISO container logistics' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-30°C to +55°C' },
        { label: 'IP Rating', value: 'IP54 (container enclosure)' },
        { label: 'Corrosion', value: 'C4/C5 rated coating available' },
      ],
      certifications: ['IEC 62619', 'IEC 62477', 'UL 9540 (project basis)', 'CE'],
      warranties: ['10 Years Containerized ESS System Warranty', '30 Years Solar Plant Module Warranty (when bundled)'],
      applications: ['Utility substations', 'Grid frequency regulation', 'Large industrial microgrids', 'Renewable firming'],
      orderingInfo: 'CubeLoop projects require site survey and grid interconnection study. Contact utility sales team.',
    },
  },
];

export const getResidentialESSProducts = () => essProducts.filter((p) => p.keyword === 'residential');
export const getCommercialESSProducts = () => essProducts.filter((p) => p.keyword === 'commercial');
