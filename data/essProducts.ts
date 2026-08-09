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
  // RESIDENTIAL ESS
  {
    id: 'wall-mount-wallark',
    category: 'residential',
    categoryLabel: 'Residential ESS',
    keyword: 'residential',
    series: 'WallArk Series',
    title: 'Wall Mount Low Voltage Pack',
    voltage: '48V / 51.2V',
    capacity: '2.5kWh / 5kWh / 10kWh / 16kWh / 20kWh',
    specs: [
      { label: 'Series', value: 'WallArk Series' },
      { label: 'Voltage', value: '48V / 51.2V' },
      { label: 'Capacity', value: '2.5kWh / 5kWh / 10kWh / 16kWh / 20kWh' },
      { label: 'Chemistry', value: 'LiFePO4 (Grade A Cells)' },
    ],
    desc: 'Space-saving wall-mounted low voltage lithium battery pack designed for residential homes and villa communities seeking reliable 24/7 backup power and solar self-consumption.',
    features: [
      'Built-in Smart BMS with Active Cell Balancing',
      'Wall-Mounted Ergonomic Design with LCD Status Display',
      'Parallel Expansion Support up to 15 Units',
      'Compatible with Deye, Victron, Growatt & Solis Inverters',
    ],
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'stackable-stackark',
    category: 'residential',
    categoryLabel: 'Residential ESS',
    keyword: 'residential',
    series: 'StackArk Series',
    title: 'Stackable High Voltage Pack',
    voltage: '144V - 384V',
    capacity: '7.5kWh ~ 20kWh',
    specs: [
      { label: 'Series', value: 'StackArk Series' },
      { label: 'Voltage', value: '144V - 384V' },
      { label: 'Capacity', value: '7.5kWh ~ 20kWh' },
      { label: 'Chemistry', value: 'LiFePO4 (Grade A Cells)' },
    ],
    desc: 'Tool-free stackable modular high voltage battery tower engineered for modern homes requiring high voltage DC efficiency and instant switchover power backup.',
    features: [
      'Tool-Free Plug & Play Stackable Module Design',
      'High Voltage DC Efficiency with Lower Cable Losses',
      'Instant < 10ms UPS Backup Switchover',
      'IP65 Rated Outdoor & Indoor Protection',
    ],
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
  },

  // COMMERCIAL & UTILITY ESS
  {
    id: 'rack-mount-rackark',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'RackArk-HV Series',
    title: 'Rack Mount High Voltage Pack',
    voltage: '384V ~ 1000V',
    capacity: '46.8kWh ~ 1000kWh',
    specs: [
      { label: 'Series', value: 'RackArk-HV Series' },
      { label: 'Voltage', value: '384V ~ 1000V' },
      { label: 'Capacity', value: '46.8kWh ~ 1000kWh' },
      { label: 'Form Factor', value: '19" Standard Industrial Rack' },
    ],
    desc: 'Standardized high-density rack-mounted high voltage battery modules engineered for commercial server rooms, enterprise microgrids, and data centers.',
    features: [
      'Industrial 19" Rack Containerized Cabinet Architecture',
      'Wide High Voltage DC Range for Efficiency (384V-1000V)',
      'Sunloop AI Portal Telemetry for Autonomous Peak Shaving',
      'Multi-Tier Fire Suppression & Thermal Safety Management',
    ],
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'storage-cabinet-blockark',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'BlockArk Series',
    title: 'Energy Storage Cabinet',
    power: '30kW - 500kW',
    capacity: '30kWh ~ 1000kWh',
    specs: [
      { label: 'Series', value: 'BlockArk Series' },
      { label: 'Power', value: '30kW - 500kW' },
      { label: 'Battery Capacity', value: '30kWh ~ 1000kWh' },
      { label: 'Enclosure', value: 'All-in-One Outdoor Cabinet (IP55/IP65)' },
    ],
    desc: 'All-in-one outdoor energy storage cabinet combining high-capacity LiFePO4 battery modules, smart HVAC thermal management, and hybrid power conversion.',
    features: [
      'All-in-One Outdoor Plug-and-Play Cabinet Design',
      'Integrated Smart HVAC & Liquid Thermal Management',
      'Automated TOD Peak Shaving & Commercial Tariff Arbitrage',
      'Subsecond Response Grid Support & Demand Charge Reduction',
    ],
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'storage-container-cubeark',
    category: 'commercial',
    categoryLabel: 'Commercial & Utility ESS',
    keyword: 'commercial',
    series: 'CubeArk Series',
    title: 'Energy Storage Container',
    power: '100kW - 5000kW',
    capacity: '100kWh ~ 10000kWh',
    specs: [
      { label: 'Series', value: 'CubeArk Series' },
      { label: 'Power', value: '100kW - 5000kW' },
      { label: 'Battery Capacity', value: '100kWh ~ 10000kWh' },
      { label: 'Container Size', value: '20ft / 40ft ISO Standard Shipping Container' },
    ],
    desc: 'Utility-scale MWh containerized energy storage system designed for large industrial complexes, solar power plants, and grid substation power stabilization.',
    features: [
      '20ft / 40ft ISO Standard Modular Container Architecture',
      'Liquid Thermal Cooling for Extended Life & Optimal Safety',
      'Grid Substation Frequency Regulation & Peak Load Shifting',
      'MW-Scale PCS Integration with Black-Start Capability',
    ],
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
  },
];

export const getResidentialESSProducts = () => essProducts.filter(p => p.keyword === 'residential');
export const getCommercialESSProducts = () => essProducts.filter(p => p.keyword === 'commercial');
