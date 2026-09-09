export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductDatasheet {
  modelNumber: string;
  series: string;
  category: 'solar' | 'ess' | 'ev';
  revision: string;
  issueDate: string;
  overview: string;
  electrical: SpecRow[];
  mechanical: SpecRow[];
  environmental: SpecRow[];
  certifications: string[];
  warranties: string[];
  applications: string[];
  orderingInfo?: string;
}

export interface CatalogProduct {
  id: string;
  modelNumber: string;
  series: string;
  title: string;
  category: 'solar' | 'ess' | 'ev';
  categoryLabel: string;
  segment: 'residential' | 'commercial' | 'utility';
  image: string;
  fallbackImage: string;
  desc: string;
  specs: SpecRow[];
  features: string[];
  datasheet: ProductDatasheet;
  detailHref: string;
}
