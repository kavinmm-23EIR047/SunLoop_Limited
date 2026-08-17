export interface ESSProduct {
  id: string;
  category: 'residential' | 'commercial';
  categoryLabel: 'Residential ESS' | 'Commercial & Utility ESS';
  keyword: 'residential' | 'commercial';
  series: string;
  title: string;
  voltage?: string;
  capacity: string;
  power?: string;
  specs: { label: string; value: string }[];
  desc: string;
  features: string[];
  image: string;
  fallbackImage: string;
}

export const essProducts: ESSProduct[] = [
  // RESIDENTIAL ESS (WALL-MOUNTED ESS & STACKABLE)
  {
    id: 'wall-mount-wallark',
    category: 'residential',
    categoryLabel: 'Residential ESS',
    keyword: 'residential',
    series: 'Wall-Mounted Series',
    title: 'Wall-Mounted ESS (5 kWh – 20 kWh)',
    voltage: '48V / 51.2V',
    capacity: '5 kWh – 20 kWh',
    specs: [
      { label: 'System Type', value: 'Wall-Mounted ESS' },
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
  },
  {
    id: 'trolley-type-ess',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'Trolley-Type Series',
    title: 'Trolley-Type ESS (30 kWh – 500 kWh)',
    voltage: '384V ~ 1000V',
    capacity: '30 kWh – 500 kWh',
    power: '30 kW – 500 kW',
    specs: [
      { label: 'System Type', value: 'Trolley-Type ESS' },
      { label: 'Best For', value: 'Commercial & Industrial sites — mobile, easy to scale' },
      { label: 'Capacity Range', value: '30 kWh to 500 kWh' },
      { label: 'Chemistry', value: 'LiFePO4 Grade A High-Density Pack' },
    ],
    desc: 'Mobile and scalable trolley-type energy storage units designed for commercial complexes, industrial sites, and factories requiring flexible backup and peak shaving.',
    features: [
      'Mobile & Modular Chassis for Quick Deployment',
      'Integrated Smart HVAC & Thermal Safety Control',
      'Sunloop AI Portal Telemetry for Automated Peak Shaving',
      'Multi-Tier Fire Suppression & Thermal Safety Management',
    ],
    image: '/products/Energy Storage Cabinet.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'containerized-ess',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'Containerized Series',
    title: 'Containerized ESS (500+ kWh Utility-Scale)',
    power: '100 kW – 5000 kW',
    capacity: '500+ kWh (stackable up to 10,000+ kWh)',
    specs: [
      { label: 'System Type', value: 'Containerized ESS' },
      { label: 'Best For', value: 'Utility-scale — high-capacity, grid-integrated deployments' },
      { label: 'Capacity Range', value: '500+ kWh' },
      { label: 'Enclosure', value: '20ft / 40ft ISO Standard Container' },
    ],
    desc: 'High-capacity, grid-integrated containerized energy storage deployments built for utility substations, large industrial complexes, and microgrid stabilization.',
    features: [
      '20ft / 40ft ISO Standard Modular Container Architecture',
      'Liquid Thermal Cooling for Extended Life & Optimal Safety',
      'Grid Substation Frequency Regulation & Peak Load Shifting',
      'MW-Scale PCS Integration with Black-Start Capability',
    ],
    image: '/products/Energy Storage Container.png',
    fallbackImage: '/images/commercial-energy.png',
  },
];

export const getResidentialESSProducts = () => essProducts.filter(p => p.keyword === 'residential');
export const getCommercialESSProducts = () => essProducts.filter(p => p.keyword === 'commercial');

