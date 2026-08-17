export type ProductSub = { name: string; specs: string; desc: string };
export type Product = { id: string; eyebrow: string; title: string; tagline: string; range: string; desc: string; subProducts: ProductSub[] };

export const products: Product[] = [
  {
    id: 'solar',
    eyebrow: '01 / GENERATE',
    title: 'Solar Power Plants',
    tagline: 'Clean generation for homes, businesses, and utilities.',
    range: '3 kW — 1 MW+',
    desc: 'End-to-end solar PV design, installation, and maintenance — from 3 kW residential rooftops to multi-megawatt utility-scale ground-mounted plants for industrial and commercial clients.',
    subProducts: [
      { name: 'Rooftop Solar (Residential)', specs: '3 kW – 30 kW', desc: 'Elevated rooftop systems for Indian homes.' },
      { name: 'Rooftop Solar (Industrial)', specs: '5 kW – 500 kW', desc: 'Industrial rooftop systems for factories and commercial buildings.' },
      { name: 'Ground-Mounted Solar', specs: '1 MW and above', desc: 'Large-scale ground plants for maximum energy generation, built for utility and industrial clients.' },
    ],
  },
  {
    id: 'lithium',
    eyebrow: '02 / STORE',
    title: 'Energy Storage Systems (ESS)',
    tagline: 'Scalable. Reliable. Intelligent.',
    range: '5 kWh — 500+ kWh',
    desc: 'Advanced lithium-ion and LiFePO4 battery storage systems that ensure uninterrupted power, reduce peak-demand charges, and increase energy independence. Fully stackable and designed for seamless integration with Solar and EV systems.',
    subProducts: [
      { name: 'Wall-Mounted ESS', specs: '5 kWh – 20 kWh', desc: 'Homes — compact, space-saving, easy install.' },
      { name: 'Trolley-Type ESS', specs: '30 kWh – 500 kWh', desc: 'Commercial & Industrial sites — mobile, easy to scale.' },
      { name: 'Containerized ESS', specs: '500+ kWh', desc: 'Utility-scale — high-capacity, grid-integrated deployments.' },
    ],
  },
  {
    id: 'ev',
    eyebrow: '03 / DRIVE',
    title: 'EV Charging Infrastructure',
    tagline: 'Safe, fast, and reliable AC and DC charging.',
    range: '7.4 kW — 240 kW',
    desc: 'Safe, fast, and reliable AC and DC charging — engineered for every segment, from home garages to public highway charging hubs. Every charger connects to the Sunloop AI Portal for real-time monitoring, remote management, and payment integration.',
    subProducts: [
      { name: 'AC EV Chargers', specs: '7.4 kW – 22 kW', desc: 'Smart charging for residential communities, commercial buildings, industrial fleets, and public charging networks.' },
      { name: 'DC Fast EV Chargers', specs: '30 kW – 240 kW', desc: 'High-performance fast charging built for fuel stations, highways, malls, hotels, and fleet depots, enabling recurring charging revenue.' },
    ],
  },
];

