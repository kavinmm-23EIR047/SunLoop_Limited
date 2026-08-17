export interface SolarProductVariant {
  id: string;
  category: 'residential' | 'commercial';
  categoryLabel: 'Residential Solar Kits' | 'Commercial Solar Kits';
  keyword: 'residential' | 'commercial';
  series: string;
  title: string;
  capacity: string;
  specs: { label: string; value: string }[];
  desc: string;
  warranties: string[];
  features: string[];
  image: string;
  fallbackImage: string;
}

export const solarPVIntro = {
  title: 'Solar Power Plants',
  subtitle: 'Complete end-to-end solar PV design, installation, and maintenance for residential, commercial, and utility-scale clients.',
  desc: 'We deliver end-to-end Solar Power Plant solutions — design, engineering, installation, commissioning, and long-term maintenance — using high-efficiency panels and inverters tailored to your scale and site conditions.',
};

export const solarProducts: SolarProductVariant[] = [
  // RESIDENTIAL SOLAR KITS
  {
    id: 'res-hybrid-solar-kit',
    category: 'residential',
    categoryLabel: 'Residential Solar Kits',
    keyword: 'residential',
    series: 'Hybrid Residential Series',
    title: '3 kW – 30 kW Hybrid Residential Solar System Kits',
    capacity: '3 kW – 30 kW Hybrid',
    specs: [
      { label: 'System Type', value: 'Hybrid (On-Grid & Off-Grid Operation)' },
      { label: 'Capacity Range', value: '3 kW to 30 kW' },
      { label: 'Battery Control', value: 'Smart BMS Charge/Discharge Scheduling' },
      { label: 'Application', value: 'Homes, Villas & Residential Communities' },
    ],
    desc: 'Sunloop Hybrid Residential Solar System Kits operate seamlessly in either On-Grid or Off-Grid conditions. Equipped with advanced BMS technology, users can easily customize charge/discharge rates, schedule battery storage usage, and manage daily power consumption.',
    warranties: [
      '30 Years Product Warranty for PV Module',
      '15 Years Product Warranty for Mounting System',
      '10 Years Product Warranty for Battery and Inverter',
    ],
    features: [
      'Dual On-Grid and Off-Grid Automatic Seamless Transfer',
      'Advanced BMS Technology for Custom Charge & Discharge Rates',
      'Real-Time Home Energy Generation & Consumption Dispatch',
      'All-in-One Pre-Engineered Kit for Fast Installation',
    ],
    image: '/products/Solar power/3-50kW Hybrid Residential Solar System Kits.png',
    fallbackImage: '/images/residential-energy.png',
  },
  {
    id: 'res-ongrid-solar-kit',
    category: 'residential',
    categoryLabel: 'Residential Solar Kits',
    keyword: 'residential',
    series: 'On-Grid Residential Series',
    title: '3 kW – 30 kW On-Grid Residential Solar System Kits',
    capacity: '3 kW – 30 kW On-Grid',
    specs: [
      { label: 'System Type', value: 'On-Grid Utility Connected' },
      { label: 'Capacity Range', value: '3 kW to 30 kW' },
      { label: 'Efficiency', value: 'High Yield Monocrystalline PV Modules' },
      { label: 'Net Metering', value: 'Full Grid Export & Billing Support' },
    ],
    desc: 'Sunloop On-Grid Residential Solar PV Kits are the most cost-effective and easy PV solution available for home use. They are ideally suited for any household looking to reduce energy costs using an efficient and clean power system.',
    warranties: [
      '30 Years Product Warranty for PV Module',
      '15 Years Product Warranty for Mounting System',
      '10 Years Product Warranty for Inverter',
    ],
    features: [
      'Most Cost-Effective PV Solution for Household Utility Savings',
      'Seamless Utility Grid Export & Net Metering Compatibility',
      'Low Maintenance & High-Durability Roof Mounts',
      'Smart App Real-Time Solar Yield Tracking',
    ],
    image: '/products/Solar power/3-50kW On Grid Residential Solar System Kits.png',
    fallbackImage: '/images/residential-energy.png',
  },
  {
    id: 'res-offgrid-solar-kit',
    category: 'residential',
    categoryLabel: 'Residential Solar Kits',
    keyword: 'residential',
    series: 'Off-Grid Residential Series',
    title: '3 kW – 30 kW Off-Grid Residential Solar System Kits',
    capacity: '3 kW – 30 kW Off-Grid',
    specs: [
      { label: 'System Type', value: '100% Off-Grid Independent' },
      { label: 'Capacity Range', value: '3 kW to 30 kW' },
      { label: 'Emissions', value: 'Zero Emissions & Silent Operation' },
      { label: 'Package', value: 'All-in-One Quick Install Package' },
    ],
    desc: 'Total electrical independence starts here. Sunloop has carefully engineered all of our pre-packaged Off-Grid solar power systems to be faster and easier to install. Producing zero emissions and operating silently in an all-in-one package solution.',
    warranties: [
      '30 Years Product Warranty for PV Module',
      '15 Years Product Warranty for Mounting System',
      '10 Years Product Warranty for Battery and Inverter',
    ],
    features: [
      '100% Off-Grid Electrical Autonomy with Zero Utility Grid Dependence',
      'Silent & Zero-Emission Clean Energy Storage Architecture',
      'Pre-Engineered All-in-One Packaging for Rapid On-Site Setup',
      'Heavy-Duty Weather-Resistant Battery & Inverter Cabinet',
    ],
    image: '/products/Solar power/3-50kW Off Grid Residential Solar System Kits.png',
    fallbackImage: '/images/residential-energy.png',
  },

  // COMMERCIAL SOLAR KITS
  {
    id: 'comm-hybrid-solar-kit',
    category: 'commercial',
    categoryLabel: 'Commercial Solar Kits',
    keyword: 'commercial',
    series: 'Hybrid Commercial Series',
    title: '5 kW – 500 kW Hybrid Commercial Solar System Kits',
    capacity: '5 kW – 500 kW Hybrid',
    specs: [
      { label: 'System Type', value: 'Commercial Microgrid & Battery Storage' },
      { label: 'Capacity Range', value: '5 kW to 500 kW' },
      { label: 'Noise & Emissions', value: 'Zero Emissions, Low Operational Noise' },
      { label: 'Application', value: 'Commercial Buildings, Malls & Factories' },
    ],
    desc: 'Sunloop Hybrid Commercial Solar System Kits act as complete microgrid solutions. Sunloop has carefully designed and engineered our hybrid solar power systems to be faster and easier to install, producing zero emissions and quiet operation.',
    warranties: [
      '30 Years Product Warranty for PV Module',
      '15 Years Product Warranty for Mounting System',
      '10 Years Product Warranty for Battery and Inverter',
    ],
    features: [
      'Commercial-Grade Microgrid Architecture with Integrated Battery Storage',
      'Smart Peak Shaving & Time-of-Use Energy Optimization',
      'Zero Carbon Emissions & Quiet Indoor/Outdoor Cabinetry',
      'Scalable Parallel Expansion up to Utility-Scale Megawatt Capacity',
    ],
    image: '/products/Solar power/30-500kW Hybrid Commercial Solar System Kits.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'comm-ongrid-solar-kit',
    category: 'commercial',
    categoryLabel: 'Commercial Solar Kits',
    keyword: 'commercial',
    series: 'On-Grid Commercial Series',
    title: '5 kW – 500 kW On-Grid Commercial Solar System Kits',
    capacity: '5 kW – 500 kW On-Grid',
    specs: [
      { label: 'System Type', value: 'Commercial On-Grid Utility Tied' },
      { label: 'Capacity Range', value: '5 kW to 500 kW (Ground & Rooftop)' },
      { label: 'Installation Site', value: 'Commercial Rooftops & Ground Mounts' },
      { label: 'Inflation Protection', value: 'Long-Term Power Tariff Hedge' },
    ],
    desc: 'Sunloop On-Grid Commercial Solar System Kits are ideally suited for any business looking to reduce rising energy costs and hedge against future energy inflation. Suitable for commercial rooftops and Ground-Mounted locations.',
    warranties: [
      '30 Years Product Warranty for PV Module',
      '15 Years Product Warranty for Mounting System',
      '10 Years Product Warranty for Inverter',
    ],
    features: [
      'Hedges Businesses Against Energy Inflation & Rising Utility Rates',
      'Compatible with Commercial Flat Roofs, Metal Roofs & Ground Mounts',
      'High-Yield Industrial Inverters with Multi-MPPT Tracking',
      'Accelerated Tax Depreciation & Corporate ESG Carbon Compliance',
    ],
    image: '/products/Solar power/50-1000kW On Grid Commercial Solar System Kits.png',
    fallbackImage: '/images/commercial-energy.png',
  },
  {
    id: 'comm-offgrid-solar-kit',
    category: 'commercial',
    categoryLabel: 'Commercial Solar Kits',
    keyword: 'commercial',
    series: 'Off-Grid Commercial Series',
    title: '5 kW – 500 kW Off-Grid Commercial Solar System Kits',
    capacity: '5 kW – 500 kW Off-Grid',
    specs: [
      { label: 'System Type', value: 'Commercial Independent Off-Grid' },
      { label: 'Capacity Range', value: '5 kW to 500 kW' },
      { label: 'Customization', value: 'Designed for Building Peak Load Demand' },
      { label: 'Reliability', value: 'Heavy Duty 24/7 Power Continuity' },
    ],
    desc: 'The size and capacity of a commercial Off-Grid solar system depend on the specific energy requirements of the business. Factors such as building consumption, peak load demand, available space, and location play key roles in system design.',
    warranties: [
      '30 Years Product Warranty for PV Module',
      '15 Years Product Warranty for Mounting System',
      '10 Years Product Warranty for Battery and Inverter',
    ],
    features: [
      'Custom Engineered to Match Commercial Peak Load Demands',
      'Heavy-Duty Inverter & High-Capacity Battery Bank Configuration',
      'Autonomous Remote Station Monitoring & Telemetry',
      'Ideal for Mining, Agricultural, Resort & Remote Industrial Sites',
    ],
    image: '/products/Solar power/30-500kW Off Grid Commercial Solar System Kits.png',
    fallbackImage: '/images/commercial-energy.png',
  },
];

export const getResidentialSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.category === 'residential');

export const getCommercialSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.category === 'commercial');

export const getBusinessSolarProducts = getCommercialSolarProducts;


