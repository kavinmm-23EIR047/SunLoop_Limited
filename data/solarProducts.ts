import type { ProductDatasheet, SpecRow } from './productTypes';

export interface SolarProductVariant {
  id: string;
  modelNumber: string;
  category: 'residential' | 'commercial';
  categoryLabel: 'Residential Solar Kits' | 'Commercial Solar Kits';
  keyword: 'residential' | 'commercial';
  series: string;
  title: string;
  capacity: string;
  specs: SpecRow[];
  desc: string;
  warranties: string[];
  features: string[];
  image: string;
  fallbackImage: string;
  datasheet: ProductDatasheet;
}

export const solarPVIntro = {
  title: 'Solar Power Plants',
  subtitle: 'Complete end-to-end solar PV design, installation, and maintenance for residential, commercial, and utility-scale clients.',
  desc: 'We deliver end-to-end Solar Power Plant solutions — design, engineering, installation, commissioning, and long-term maintenance — using high-efficiency panels and inverters tailored to your scale and site conditions.',
};

export const solarProducts: SolarProductVariant[] = [
  {
    id: 'solarloop-res-hybrid',
    modelNumber: 'SL-PV-RH-3-30',
    category: 'residential',
    categoryLabel: 'Residential Solar Kits',
    keyword: 'residential',
    series: 'SolarLoop Hybrid Series',
    title: '3 kW – 30 kW Hybrid Residential Solar System',
    capacity: '3 kW – 30 kW Hybrid',
    specs: [
      { label: 'System Type', value: 'Hybrid (On-Grid & Off-Grid Operation)' },
      { label: 'Series', value: 'SolarLoop Hybrid Series' },
      { label: 'Capacity Range', value: '3 kW to 30 kW' },
      { label: 'Battery Control', value: 'Smart BMS Charge/Discharge Scheduling' },
      { label: 'Application', value: 'Homes, Villas & Residential Communities' },
    ],
    desc: 'SolarLoop Hybrid Residential systems operate seamlessly in On-Grid or Off-Grid conditions with advanced BMS technology for charge/discharge scheduling and daily power management.',
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
    datasheet: {
      modelNumber: 'SL-PV-RH-3-30',
      series: 'SolarLoop Hybrid Series',
      category: 'solar',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'SolarLoop Hybrid is a residential solar-plus-storage kit supporting seamless on-grid and off-grid operation with smart BMS scheduling.',
      electrical: [
        { label: 'Capacity Range', value: '3 kW – 30 kW AC output' },
        { label: 'PV Module Type', value: 'Monocrystalline PERC/TOPCon' },
        { label: 'Inverter Type', value: 'Hybrid string / all-in-one' },
        { label: 'Grid Connection', value: 'On-grid / off-grid / hybrid' },
        { label: 'Battery Integration', value: 'WallLoop compatible (5–20 kWh)' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Roof / ground mount options' },
        { label: 'Module Warranty', value: '30 years linear performance' },
        { label: 'Inverter Warranty', value: '10 years standard' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-25°C to +60°C (module)' },
        { label: 'Wind Load', value: 'Up to 2,400 Pa' },
        { label: 'Snow Load', value: 'Up to 5,400 Pa' },
      ],
      certifications: ['IEC 61215', 'IEC 61730', 'BIS (India)', 'CE'],
      warranties: ['30 Years PV Module', '15 Years Mounting', '10 Years Inverter & Battery'],
      applications: ['Residential rooftops', 'Villas and gated communities', 'Hybrid backup homes'],
    },
  },
  {
    id: 'solarloop-res-ongrid',
    modelNumber: 'SL-PV-RO-3-30',
    category: 'residential',
    categoryLabel: 'Residential Solar Kits',
    keyword: 'residential',
    series: 'SolarLoop On-Grid Series',
    title: '3 kW – 30 kW On-Grid Residential Solar System',
    capacity: '3 kW – 30 kW On-Grid',
    specs: [
      { label: 'System Type', value: 'On-Grid Utility Connected' },
      { label: 'Series', value: 'SolarLoop On-Grid Series' },
      { label: 'Capacity Range', value: '3 kW to 30 kW' },
      { label: 'Efficiency', value: 'High Yield Monocrystalline PV Modules' },
      { label: 'Net Metering', value: 'Full Grid Export & Billing Support' },
    ],
    desc: 'SolarLoop On-Grid Residential PV Kits are the most cost-effective clean power solution for households seeking utility bill reduction through net metering.',
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
    datasheet: {
      modelNumber: 'SL-PV-RO-3-30',
      series: 'SolarLoop On-Grid Series',
      category: 'solar',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'SolarLoop On-Grid is a utility-tied residential PV system optimized for net metering and maximum ROI on electricity savings.',
      electrical: [
        { label: 'Capacity Range', value: '3 kW – 30 kW AC' },
        { label: 'Module Efficiency', value: '≥ 21.5%' },
        { label: 'Inverter Efficiency', value: '≥ 98.0%' },
        { label: 'Grid Standard', value: 'Single / three phase per site' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Roof-integrated racking system' },
        { label: 'Module Warranty', value: '30 years' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-25°C to +60°C' },
        { label: 'IP Rating (inverter)', value: 'IP65' },
      ],
      certifications: ['IEC 61215', 'IEC 61730', 'BIS', 'CE'],
      warranties: ['30 Years PV Module', '15 Years Mounting', '10 Years Inverter'],
      applications: ['Net metering homes', 'Residential rooftops', 'Apartment common-area solar'],
    },
  },
  {
    id: 'solarloop-res-offgrid',
    modelNumber: 'SL-PV-RF-3-30',
    category: 'residential',
    categoryLabel: 'Residential Solar Kits',
    keyword: 'residential',
    series: 'SolarLoop Off-Grid Series',
    title: '3 kW – 30 kW Off-Grid Residential Solar System',
    capacity: '3 kW – 30 kW Off-Grid',
    specs: [
      { label: 'System Type', value: '100% Off-Grid Independent' },
      { label: 'Series', value: 'SolarLoop Off-Grid Series' },
      { label: 'Capacity Range', value: '3 kW to 30 kW' },
      { label: 'Emissions', value: 'Zero Emissions & Silent Operation' },
      { label: 'Package', value: 'All-in-One Quick Install Package' },
    ],
    desc: 'Total electrical independence with SolarLoop Off-Grid pre-engineered solar power systems — zero emissions, silent operation, rapid installation.',
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
    datasheet: {
      modelNumber: 'SL-PV-RF-3-30',
      series: 'SolarLoop Off-Grid Series',
      category: 'solar',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'SolarLoop Off-Grid delivers complete energy autonomy for remote homes and areas without reliable grid access.',
      electrical: [
        { label: 'Capacity Range', value: '3 kW – 30 kW AC' },
        { label: 'Battery Bank', value: 'LiFePO4 — sized per load audit' },
        { label: 'Autonomy', value: '100% grid-independent operation' },
      ],
      mechanical: [
        { label: 'Enclosure', value: 'Weather-resistant battery/inverter cabinet' },
        { label: 'Installation', value: 'Pre-engineered all-in-one kit' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-10°C to +50°C' },
        { label: 'Noise Level', value: '< 35 dB (inverter)' },
      ],
      certifications: ['IEC 61215', 'IEC 61730', 'BIS', 'CE'],
      warranties: ['30 Years PV Module', '15 Years Mounting', '10 Years Battery & Inverter'],
      applications: ['Remote homes', 'Farmhouses', 'Off-grid communities'],
    },
  },
  {
    id: 'solarloop-comm-hybrid',
    modelNumber: 'SL-PV-CH-5-500',
    category: 'commercial',
    categoryLabel: 'Commercial Solar Kits',
    keyword: 'commercial',
    series: 'SolarLoop Hybrid Series',
    title: '5 kW – 500 kW Hybrid Commercial Solar System',
    capacity: '5 kW – 500 kW Hybrid',
    specs: [
      { label: 'System Type', value: 'Commercial Microgrid & Battery Storage' },
      { label: 'Series', value: 'SolarLoop Hybrid Series' },
      { label: 'Capacity Range', value: '5 kW to 500 kW' },
      { label: 'Application', value: 'Commercial Buildings, Malls & Factories' },
    ],
    desc: 'SolarLoop Hybrid Commercial systems act as complete microgrid solutions with integrated battery storage, peak shaving, and zero-emission operation.',
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
    datasheet: {
      modelNumber: 'SL-PV-CH-5-500',
      series: 'SolarLoop Hybrid Series',
      category: 'solar',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'SolarLoop Hybrid Commercial integrates rooftop/ground PV with StackLoop or CubeLoop storage for C&I microgrid applications.',
      electrical: [
        { label: 'Capacity Range', value: '5 kW – 500 kW AC' },
        { label: 'Storage Integration', value: 'StackLoop / CubeLoop compatible' },
        { label: 'Peak Shaving', value: 'Automated TOD optimization' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Rooftop / carport / ground mount' },
        { label: 'Scalability', value: 'Parallel expansion to MW scale' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-25°C to +60°C' },
        { label: 'Emissions', value: 'Zero operational emissions' },
      ],
      certifications: ['IEC 61215', 'IEC 61730', 'IEC 62477', 'CE'],
      warranties: ['30 Years PV Module', '15 Years Mounting', '10 Years Inverter & Battery'],
      applications: ['Commercial buildings', 'Industrial factories', 'Shopping malls', 'Hotels'],
    },
  },
  {
    id: 'solarloop-comm-ongrid',
    modelNumber: 'SL-PV-CO-5-500',
    category: 'commercial',
    categoryLabel: 'Commercial Solar Kits',
    keyword: 'commercial',
    series: 'SolarLoop On-Grid Series',
    title: '5 kW – 500 kW On-Grid Commercial Solar System',
    capacity: '5 kW – 500 kW On-Grid',
    specs: [
      { label: 'System Type', value: 'Commercial On-Grid Utility Tied' },
      { label: 'Series', value: 'SolarLoop On-Grid Series' },
      { label: 'Capacity Range', value: '5 kW to 500 kW' },
      { label: 'Installation Site', value: 'Commercial Rooftops & Ground Mounts' },
    ],
    desc: 'SolarLoop On-Grid Commercial systems hedge businesses against energy inflation with high-yield industrial inverters and accelerated depreciation benefits.',
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
    datasheet: {
      modelNumber: 'SL-PV-CO-5-500',
      series: 'SolarLoop On-Grid Series',
      category: 'solar',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'SolarLoop On-Grid Commercial delivers utility-tied solar for businesses seeking tariff reduction and ESG compliance.',
      electrical: [
        { label: 'Capacity Range', value: '5 kW – 500 kW AC' },
        { label: 'Inverter Type', value: 'Multi-MPPT string / central' },
        { label: 'Grid Connection', value: 'LT / HT per DISCOM approval' },
      ],
      mechanical: [
        { label: 'Mounting', value: 'Flat roof, metal roof, ground mount' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-25°C to +60°C' },
      ],
      certifications: ['IEC 61215', 'IEC 61730', 'BIS', 'CE'],
      warranties: ['30 Years PV Module', '15 Years Mounting', '10 Years Inverter'],
      applications: ['Office parks', 'Manufacturing plants', 'Warehouses', 'Educational campuses'],
    },
  },
  {
    id: 'solarloop-comm-offgrid',
    modelNumber: 'SL-PV-CF-5-500',
    category: 'commercial',
    categoryLabel: 'Commercial Solar Kits',
    keyword: 'commercial',
    series: 'SolarLoop Off-Grid Series',
    title: '5 kW – 500 kW Off-Grid Commercial Solar System',
    capacity: '5 kW – 500 kW Off-Grid',
    specs: [
      { label: 'System Type', value: 'Commercial Independent Off-Grid' },
      { label: 'Series', value: 'SolarLoop Off-Grid Series' },
      { label: 'Capacity Range', value: '5 kW to 500 kW' },
      { label: 'Reliability', value: 'Heavy Duty 24/7 Power Continuity' },
    ],
    desc: 'Custom-engineered SolarLoop Off-Grid commercial systems sized to match peak load demands for mining, agriculture, resorts, and remote industrial sites.',
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
    datasheet: {
      modelNumber: 'SL-PV-CF-5-500',
      series: 'SolarLoop Off-Grid Series',
      category: 'solar',
      revision: 'Rev 1.0',
      issueDate: 'August 2026',
      overview: 'SolarLoop Off-Grid Commercial provides autonomous power for remote industrial and agricultural operations.',
      electrical: [
        { label: 'Capacity Range', value: '5 kW – 500 kW AC' },
        { label: 'Battery Bank', value: 'StackLoop / custom LiFePO4 bank' },
        { label: 'Monitoring', value: 'Remote telemetry via Sunloop AI Portal' },
      ],
      mechanical: [
        { label: 'Design', value: 'Custom engineered per load profile' },
      ],
      environmental: [
        { label: 'Operating Temperature', value: '-20°C to +55°C' },
      ],
      certifications: ['IEC 61215', 'IEC 61730', 'IEC 62477', 'CE'],
      warranties: ['30 Years PV Module', '15 Years Mounting', '10 Years Battery & Inverter'],
      applications: ['Mining sites', 'Agricultural processing', 'Resorts', 'Remote telecom towers'],
    },
  },
];

export const getResidentialSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.category === 'residential');

export const getCommercialSolarProducts = (): SolarProductVariant[] =>
  solarProducts.filter((p) => p.category === 'commercial');

export const getBusinessSolarProducts = getCommercialSolarProducts;
