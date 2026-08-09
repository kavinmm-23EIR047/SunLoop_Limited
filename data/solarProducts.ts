export interface SolarProductVariant {
  id: string;
  category: 'Residential' | 'Commercial' | 'Utility';
  series: string;
  title: string;
  power: string;
  keywords: ('residential' | 'commercial' | 'utility')[];
  desc: string;
  specs: { label: string; value: string }[];
  tech: string[];
  apps: string[];
  image: string;
  fallbackImage: string;
}

export const solarPVIntro = {
  title: 'Solar PV Solutions',
  subtitle: 'Clean, reliable, and intelligent solar power systems for every scale.',
  desc: 'A Solar PV Solution is a advanced renewable energy system that converts sunlight into clean electricity using high-efficiency photovoltaic panels. Engineered for residential, commercial, industrial, and utility-scale applications, our systems operate seamlessly grid-tied, off-grid, or integrated into hybrid battery microgrid networks.',
};

export const solarProducts: SolarProductVariant[] = [
  {
    id: 'res-solar-pv',
    category: 'Residential',
    series: 'Residential Series · SunRoof PV',
    title: 'Residential Solar PV System Solution',
    power: '3 kW – 30 kW Systems',
    keywords: ['residential'],
    desc: 'Transform your home into an independent clean energy powerhouse with Sunloop’s residential PV systems, capturing the power of the sun to deliver reliable, eco-friendly electricity for modern living.',
    specs: [
      { label: 'System Type', value: 'Grid-Tied / Hybrid Ready' },
      { label: 'Module Efficiency', value: '≥ 22.5% Monocrystalline' },
      { label: 'Rooftop Clearance', value: 'Elevated & Flush Mount' },
      { label: 'Output Warranty', value: '25-Year Linear Power Warranty' },
    ],
    tech: [
      'High-Yield TOPCon N-Type Solar PV Modules',
      'Net Metering Utility Grid Export & Smart Billing',
      'Instant Emergency Battery Backup Integration',
      'Sunloop Mobile App Real-Time Solar Yield Tracking',
    ],
    apps: ['Private Homes & Villas', 'Residential Rooftops', 'Housing Societies'],
    image: '/images/solar-panels.png',
    fallbackImage: '/images/residential-energy.png',
  },
  {
    id: 'comm-solar-pv',
    category: 'Commercial',
    series: 'Commercial Series · SunFactory PV',
    title: 'Commercial & Industrial Solar PV Solution',
    power: '50 kW – 500 kW+ Commercial Scale',
    keywords: ['commercial'],
    desc: 'High-performance commercial PV systems engineered by Sunloop to reduce operational energy expenditures, lower corporate carbon emissions, and guarantee rapid financial ROI for office buildings, factories, and commercial hubs.',
    specs: [
      { label: 'Inverter Rating', value: 'Multi-MPPT High Voltage' },
      { label: 'Financial Return', value: '3 to 4 Years Estimated ROI' },
      { label: 'Roof Fastening', value: 'Non-Penetrating Leak-Proof Clamps' },
      { label: 'Cloud Diagnostics', value: '24/7 AI Yield Optimization' },
    ],
    tech: [
      'Non-Penetrating Leak-Proof Commercial Structural Framing',
      'High-Yield Multi-MPPT Industrial Power Conversion',
      'Accelerated Tax Depreciation & ESG Carbon Credit Compliance',
      'Integrated Power Factor Correction & Grid Stabilization',
    ],
    apps: ['Office Buildings', 'Manufacturing Factories', 'Warehouses & Retail Malls', 'Hospitals & Educational Campuses'],
    image: '/images/solar-panels.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'utility-solar-pv',
    category: 'Utility',
    series: 'Utility Series · SunMega Plant',
    title: 'Utility-Scale PV Power Plant Solutions',
    power: '1 MW – 50 MW+ Mega Utility Scale',
    keywords: ['utility', 'commercial'],
    desc: 'Engineered to excel across diverse demanding environments such as arid deserts, high plateaus, and coastal zones. Our utility solutions maximize generation yield while minimizing operational and maintenance costs through reduced LCOE and advanced grid-forming control.',
    specs: [
      { label: 'Terrain Adaptability', value: 'Desert, Coastal & Plateau Hardened' },
      { label: 'Tracking Option', value: 'Single / Dual-Axis Smart Tracker' },
      { label: 'Grid Connection', value: '11kV / 33kV Step-Up Substation' },
      { label: 'Grid Support', value: 'Advanced Grid-Forming Control' },
    ],
    tech: [
      'Smart Solar Single-Axis Tracking for Up to +25% Energy Gain',
      'Lower Levelized Cost of Electricity (LCOE) Engineering',
      'Autonomous AI Drone & Robotic Hot-Spot Thermal Diagnostic Inspections',
      'Next-Gen Grid-Forming Synchronous Inverter Architecture',
    ],
    apps: ['Utility-Scale Solar Parks', 'High-Voltage Power Stations', 'Remote Off-Grid Industrial Microgrids'],
    image: '/images/solar-panels.png',
    fallbackImage: '/images/commercial-energy.png',
  },
];

export const getResidentialSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.keywords.includes('residential'));

export const getCommercialSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.keywords.includes('commercial'));

export const getUtilitySolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.keywords.includes('utility'));

export const getBusinessSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.keywords.includes('commercial') || p.keywords.includes('utility'));
