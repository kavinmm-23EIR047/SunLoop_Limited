export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  image: string;
  gallery: string[];
  outcomes: string[];
  details: string[];
  range: string;
  calculation: {
    title: string;
    formula: string;
    example: string;
    note: string;
  };
};

export const services: Service[] = [
  {
    slug: "solar-power-plants",
    title: "Solar Power Plants",
    kicker: "Generate clean power at site scale",
    summary:
      "Sunloop designs and delivers rooftop, ground-mounted, commercial, industrial, and utility-scale solar plants for dependable long-term generation.",
    image: "/images/solar-ground.webp",
    gallery: [
      "/images/solar-rooftop.webp",
      "/images/solar-industrial.webp",
      "/images/solar-ground.webp",
    ],
    outcomes: [
      "Lower grid dependence",
      "Reduced electricity cost",
      "High-efficiency generation",
      "Long-term energy savings",
    ],
    range: "Residential 3 kW to 30 kW, commercial 5 kW to 500 kW, utility-scale MW and above",
    details: [
      "We study the site, available roof or land area, connected load, shadow profile, safety access, and future expansion needs before engineering the system.",
      "The final plant can be built for homes, commercial buildings, factories, institutions, public sector facilities, and larger utility requirements.",
      "Every deployment is planned to work with storage, EV charging, and digital monitoring when the customer is ready to expand.",
    ],
    calculation: {
      title: "How solar output is estimated",
      formula: "System size (kW) x average sun hours x 30 days = monthly units",
      example:
        "A 10 kW rooftop plant with 4.5 useful sun hours can generate about 1,350 kWh per month before site losses.",
      note:
        "Final generation changes with panel orientation, shade, inverter efficiency, weather, and maintenance.",
    },
  },
  {
    slug: "energy-storage-systems",
    title: "Energy Storage Systems",
    kicker: "Store energy and improve resilience",
    summary:
      "Sunloop ESS solutions help customers maintain backup power, reduce peak load, improve energy utilization, and increase energy independence.",
    image: "/images/product-ess.webp",
    gallery: [
      "/images/ess-wall.webp",
      "/images/ess-trolley.webp",
      "/images/ess-container.webp",
    ],
    outcomes: [
      "Uninterrupted power",
      "Peak shaving",
      "Energy optimization",
      "Energy independence",
    ],
    range: "5 kWh to 500 kWh, stackable based on backup and peak-load requirement",
    details: [
      "Storage can be configured as wall-mounted, trolley type, or containerized systems depending on the size and criticality of the site.",
      "ESS improves the value of solar by storing excess generation and supporting demand peaks when energy costs or outages matter most.",
      "The system can be integrated with the AI portal for state-of-charge tracking, alerts, reporting, and remote operational visibility.",
    ],
    calculation: {
      title: "How battery backup is estimated",
      formula: "Battery capacity (kWh) / critical load (kW) = backup hours",
      example:
        "A 20 kWh ESS supporting a 4 kW critical load can provide roughly 5 hours of backup before reserve limits.",
      note:
        "Usable backup depends on depth of discharge, battery chemistry, inverter losses, ageing, and required reserve.",
    },
  },
  {
    slug: "ev-charging-infrastructure",
    title: "EV Charging Infrastructure",
    kicker: "Charge homes, fleets, and public networks",
    summary:
      "Sunloop delivers AC and DC EV charging infrastructure for residences, commercial buildings, industrial fleets, fleet operators, and public charging locations.",
    image: "/images/ev-station-clean.webp",
    gallery: [
      "/images/ev-home-charger.webp",
      "/images/product-ev-station.webp",
      "/images/ev-station-clean.webp",
    ],
    outcomes: [
      "AC and DC charging",
      "Smart scalable rollout",
      "Fleet and public charging",
      "24/7 operational readiness",
    ],
    range: "AC chargers 7.4 kW to 22 kW, DC fast chargers 30 kW to 240 kW",
    details: [
      "We help plan charger type, power capacity, parking layout, electrical safety, future charger expansion, and the right operating model for the location.",
      "AC chargers fit homes, apartments, offices, and destination charging. DC chargers support faster public, fleet, and high-use charging needs.",
      "Charging assets can be connected to solar, ESS, and the AI energy portal so the charging network becomes part of a complete energy ecosystem.",
    ],
    calculation: {
      title: "How charging time is estimated",
      formula: "Battery energy needed (kWh) / charger power (kW) = charging hours",
      example:
        "A vehicle needing 45 kWh on a 60 kW DC charger may take about 45 minutes before tapering and charging losses.",
      note:
        "Actual speed depends on vehicle acceptance rate, battery temperature, state of charge, connector type, and load sharing.",
    },
  },
];

export const portalFeatures = [
  "Live monitoring of solar, ESS, and EV charging assets",
  "Daily performance reports",
  "AI-powered analytics and optimization",
  "Predictive maintenance alerts",
  "Fault detection and instant notifications",
  "Energy consumption insights",
  "Carbon emission reduction tracking",
  "Remote monitoring and control",
  "Multi-site management",
  "Secure cloud access from anywhere",
];

export const companyValues = [
  "Innovation",
  "Sustainability",
  "Customer Success",
  "Reliability",
  "Transparency",
  "Excellence",
];

export const industries = [
  "Residential communities",
  "Commercial buildings",
  "Industries",
  "Institutions",
  "Hospitals",
  "Education campuses",
  "Government and public sector",
  "Utilities and fleet operators",
];

export const process = [
  "Consultation",
  "Energy audit",
  "Engineering design",
  "Installation",
  "Commissioning",
  "Monitoring",
  "Optimization",
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
