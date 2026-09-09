'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, FileText } from 'lucide-react';
import { allDatasheets, loopSeriesOverview } from '../../../data/allProducts';

const seriesFilters = [
  { id: 'all', label: 'All' },
  { id: 'ess-wall', label: 'WallLoop Series', match: (s: string) => s.includes('WallLoop') },
  { id: 'ess-stack', label: 'StackLoop Series', match: (s: string) => s.includes('StackLoop') },
  { id: 'ess-cube', label: 'CubeLoop Series', match: (s: string) => s.includes('CubeLoop') },
  { id: 'solar', label: 'SolarLoop Series', match: (s: string) => s.includes('SolarLoop') },
  { id: 'ev', label: 'ChargeLoop Series', match: (s: string) => s.includes('ChargeLoop') },
] as const;

const categoryTabs = [
  { id: 'all', label: 'All Products' },
  { id: 'residential', label: 'Residential Battery' },
  { id: 'commercial', label: 'Commercial Battery' },
  { id: 'utility', label: 'Container ESS' },
  { id: 'solar', label: 'Solar Power' },
  { id: 'ev', label: 'EV Charger' },
] as const;

export default function DatasheetsPage() {
  const [seriesFilter, setSeriesFilter] = useState('all');
  const [categoryTab, setCategoryTab] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = allDatasheets.filter((d) => {
    const q = query.toLowerCase();
    const matchesQuery = !q || d.title.toLowerCase().includes(q) || d.modelNumber.toLowerCase().includes(q) || d.series.toLowerCase().includes(q);

    let matchesSeries = true;
    if (seriesFilter !== 'all') {
      const f = seriesFilters.find((s) => s.id === seriesFilter);
      matchesSeries = f && 'match' in f ? f.match!(d.series) : d.category === seriesFilter;
    }

    let matchesCategory = true;
    if (categoryTab === 'residential') matchesCategory = d.segment === 'residential';
    else if (categoryTab === 'commercial') matchesCategory = d.segment === 'commercial' && d.category === 'ess';
    else if (categoryTab === 'utility') matchesCategory = d.series.includes('CubeLoop');
    else if (categoryTab === 'solar') matchesCategory = d.category === 'solar';
    else if (categoryTab === 'ev') matchesCategory = d.category === 'ev';

    return matchesQuery && matchesSeries && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white pt-16 font-sans">
      {/* SunArk-style page header */}
      <section className="border-b-4 border-brand-primary bg-brand-bg-subtle">
        <div className="container py-10 md:py-14">
          <p className="eyebrow mb-2">Downloads</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-ink">All Products</h1>
          <p className="mt-3 text-base text-brand-slate max-w-2xl">
            Browse and download technical data sheets for every Sunloop Loop Series product — same format as industry-standard ESS documentation.
          </p>
        </div>
      </section>

      {/* Category tabs — SunArk download page */}
      <section className="border-b border-brand-border bg-white sticky top-16 z-30">
        <div className="container py-3 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategoryTab(tab.id)}
                className={`px-4 py-2 text-sm font-bold whitespace-nowrap transition border-b-2 ${
                  categoryTab === tab.id
                    ? 'border-brand-primary text-brand-primary'
                    : 'border-transparent text-brand-slate hover:text-brand-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Series filter pills */}
      <section className="container py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {seriesFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSeriesFilter(f.id)}
              className={`rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wide transition border-2 ${
                seriesFilter === f.id
                  ? 'bg-brand-primary border-brand-primary text-white'
                  : 'bg-white border-brand-border text-brand-slate hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <input
          type="search"
          placeholder="Search model number or product name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-sm border-2 border-brand-border px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary mb-8"
        />

        {/* Product grid — SunArk card layout */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="group flex flex-col rounded-sm border-2 border-brand-border bg-white overflow-hidden hover:border-brand-primary transition shadow-sm hover:shadow-card"
            >
              <div className="bg-brand-bg-subtle p-5 flex items-center justify-center h-40 border-b border-brand-border">
                <img src={d.image} alt={d.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-base font-extrabold text-brand-ink font-mono">{d.modelNumber}</h2>
                <p className="text-xs font-bold text-brand-primary uppercase mt-1">{d.series}</p>
                <p className="text-sm text-brand-slate mt-2 flex-1 leading-snug">{d.title}</p>
                <Link
                  href={`/resources/datasheets/${d.id}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-primary px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-secondary transition"
                >
                  <FileText className="h-3.5 w-3.5" /> View Datasheet
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brand-slate py-16 text-base">No products match your filter.</p>
        )}
      </section>

      {/* Loop Series overview */}
      <section className="border-t border-brand-border bg-brand-bg-subtle py-12">
        <div className="container">
          <h2 className="text-xl font-extrabold text-brand-ink mb-6">Loop Series Product Lines</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {loopSeriesOverview.map((line) => (
              <Link key={line.name} href={line.href} className="rounded-sm border-2 border-brand-border bg-white p-5 hover:border-brand-primary transition">
                <p className="text-sm font-extrabold text-brand-primary">{line.name}</p>
                <p className="text-sm text-brand-slate mt-2">{line.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-brand-primary">
                  <Download className="h-3 w-3" /> {line.products} products
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
