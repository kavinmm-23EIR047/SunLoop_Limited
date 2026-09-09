import { essProducts } from './essProducts';
import { solarProducts } from './solarProducts';
import { evProducts } from './evProducts';
import type { CatalogProduct, ProductDatasheet } from './productTypes';

export interface DatasheetEntry {
  id: string;
  modelNumber: string;
  series: string;
  title: string;
  category: 'solar' | 'ess' | 'ev';
  categoryLabel: string;
  segment: string;
  image: string;
  datasheet: ProductDatasheet;
  detailHref: string;
}

const categoryLabels: Record<'solar' | 'ess' | 'ev', string> = {
  solar: 'Solar Power',
  ess: 'Energy Storage',
  ev: 'EV Charging',
};

const detailHrefs: Record<'solar' | 'ess' | 'ev', string> = {
  solar: '/products/solar-power',
  ess: '/products/energy-storage',
  ev: '/products/ev-charging',
};

export const allDatasheets: DatasheetEntry[] = [
  ...solarProducts.map((p) => ({
    id: p.id,
    modelNumber: p.modelNumber,
    series: p.series,
    title: p.title,
    category: 'solar' as const,
    categoryLabel: categoryLabels.solar,
    segment: p.category,
    image: p.image,
    datasheet: p.datasheet,
    detailHref: detailHrefs.solar,
  })),
  ...essProducts.map((p) => ({
    id: p.id,
    modelNumber: p.modelNumber,
    series: p.series,
    title: p.title,
    category: 'ess' as const,
    categoryLabel: categoryLabels.ess,
    segment: p.category,
    image: p.image,
    datasheet: p.datasheet,
    detailHref: detailHrefs.ess,
  })),
  ...evProducts.map((p) => ({
    id: p.id,
    modelNumber: p.modelNumber,
    series: p.series,
    title: p.title,
    category: 'ev' as const,
    categoryLabel: categoryLabels.ev,
    segment: p.category.toLowerCase(),
    image: p.image,
    datasheet: p.datasheet,
    detailHref: detailHrefs.ev,
  })),
];

export function getDatasheetById(id: string): DatasheetEntry | undefined {
  return allDatasheets.find((d) => d.id === id);
}

export function getDatasheetsByCategory(category: 'solar' | 'ess' | 'ev' | 'all'): DatasheetEntry[] {
  if (category === 'all') return allDatasheets;
  return allDatasheets.filter((d) => d.category === category);
}

export const loopSeriesOverview = [
  {
    name: 'SolarLoop',
    description: 'Residential and commercial solar PV system kits — hybrid, on-grid, and off-grid configurations.',
    products: solarProducts.length,
    href: '/products/solar-power',
  },
  {
    name: 'WallLoop / StackLoop / CubeLoop',
    description: 'LiFePO4 energy storage from wall-mounted residential units to utility-scale containerized BESS.',
    products: essProducts.length,
    href: '/products/energy-storage',
  },
  {
    name: 'ChargeLoop',
    description: 'AC and DC EV charging infrastructure for residential, commercial, and highway fast-charging deployments.',
    products: evProducts.length,
    href: '/products/ev-charging',
  },
];
