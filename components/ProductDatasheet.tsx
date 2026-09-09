'use client';

import Link from 'next/link';
import { ArrowLeft, Download, Printer, ShieldCheck, Zap, Battery, Thermometer, Settings } from 'lucide-react';
import type { DatasheetEntry } from '../data/allProducts';
import type { SpecRow } from '../data/productTypes';

const highlightIcons = [ShieldCheck, Zap, Battery, Thermometer, Settings, ShieldCheck];

function SunArkSpecTable({ rows, title }: { rows: SpecRow[]; title: string }) {
  if (!rows.length) return null;
  return (
    <div className="overflow-hidden rounded-sm border-2 border-brand-primary/20">
      <div className="bg-brand-primary px-4 py-2.5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      </div>
      <table className="w-full text-sm border-collapse">
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-bg-subtle'}>
              <td className="border border-brand-border px-4 py-2.5 font-bold text-brand-primary w-[42%]">{row.label}</td>
              <td className="border border-brand-border px-4 py-2.5 font-medium text-brand-ink">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProductDatasheetView({ entry }: { entry: DatasheetEntry }) {
  const { datasheet: ds } = entry;
  const highlights = [
    ...entry.datasheet.applications.slice(0, 3),
    ...entry.datasheet.certifications.slice(0, 3),
  ].slice(0, 6);

  const handlePrint = () => window.print();

  return (
    <article className="datasheet-page min-h-screen bg-white">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-40 border-b-2 border-brand-primary bg-white shadow-sm">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-3">
          <Link href="/resources/datasheets" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Downloads
          </Link>
          <div className="flex gap-2">
            <button onClick={handlePrint} className="inline-flex items-center gap-2 rounded-sm border-2 border-brand-primary px-4 py-2 text-sm font-bold text-brand-primary hover:bg-brand-bg-subtle transition">
              <Printer className="h-4 w-4" /> Print / Save PDF
            </button>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-4 py-2 text-sm font-bold text-white hover:bg-brand-secondary transition">
              <Download className="h-4 w-4" /> Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* SunArk-style orange header band */}
      <header className="bg-brand-primary text-white">
        <div className="container py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <img src="/images/logo.png" alt="Sunloop Energy" className="h-10 w-auto brightness-0 invert mb-3" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Technical Data Sheet</p>
            </div>
            <div className="text-right text-sm space-y-0.5">
              <p><span className="text-white/70">Model:</span> <strong className="font-mono text-lg">{ds.modelNumber}</strong></p>
              <p><span className="text-white/70">Revision:</span> {ds.revision} · {ds.issueDate}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Product title block */}
      <section className="border-b-4 border-brand-primary bg-brand-bg-subtle">
        <div className="container py-8 md:py-10">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-2">{entry.series}</p>
          <h1 className="text-2xl md:text-4xl font-extrabold text-brand-ink leading-tight mb-3">{entry.title}</h1>
          <p className="text-base md:text-lg text-brand-slate max-w-3xl leading-relaxed">{ds.overview}</p>
        </div>
      </section>

      {/* Feature highlights row — SunArk PDF style */}
      <section className="border-b border-brand-border bg-white">
        <div className="container py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {(highlights.length ? highlights : ['Safe & Reliable', 'Easy to Install', 'Long Cycle Life', 'Smart BMS', 'Modular Design', 'Cost Effective']).map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div key={item} className="text-center px-2">
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-brand-bg-subtle border-2 border-brand-primary/20 text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] font-bold text-brand-ink leading-snug">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container py-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
          {/* Product image */}
          <aside>
            <div className="sticky top-20 rounded-sm border-2 border-brand-border bg-white p-6 flex items-center justify-center">
              <img src={entry.image} alt={entry.title} className="max-h-64 max-w-full object-contain" />
            </div>
            <div className="mt-4 rounded-sm border border-brand-border bg-brand-bg-subtle p-4 text-sm space-y-2">
              <p><span className="font-bold text-brand-primary">Category:</span> {entry.categoryLabel}</p>
              <p><span className="font-bold text-brand-primary">Segment:</span> <span className="capitalize">{entry.segment}</span></p>
              <Link href={entry.detailHref} className="inline-block font-bold text-brand-primary hover:underline">View product page →</Link>
            </div>
          </aside>

          {/* Spec tables */}
          <div className="space-y-6">
            <SunArkSpecTable rows={ds.electrical} title="Electrical Characteristics" />
            <SunArkSpecTable rows={ds.mechanical} title="Mechanical Specifications" />
            <SunArkSpecTable rows={ds.environmental} title="Environment & Protection" />

            {ds.certifications.length > 0 && (
              <div className="overflow-hidden rounded-sm border-2 border-brand-primary/20">
                <div className="bg-brand-primary px-4 py-2.5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">Certifications</h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2 bg-white">
                  {ds.certifications.map((cert) => (
                    <span key={cert} className="rounded-sm border-2 border-brand-primary/30 bg-brand-bg-subtle px-3 py-1 text-xs font-bold text-brand-primary">{cert}</span>
                  ))}
                </div>
              </div>
            )}

            {ds.warranties.length > 0 && (
              <SunArkSpecTable rows={ds.warranties.map((w, i) => ({ label: `Warranty ${i + 1}`, value: w }))} title="Warranty" />
            )}

            {ds.orderingInfo && (
              <div className="rounded-sm border-2 border-brand-primary bg-brand-bg-subtle p-5">
                <h3 className="text-sm font-bold uppercase text-brand-primary mb-2">Ordering Information</h3>
                <p className="text-sm text-brand-slate">{ds.orderingInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SunArk footer bar */}
      <footer className="border-t-4 border-brand-primary bg-brand-ink text-white">
        <div className="container py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
          <p className="font-semibold">Sunloop Energy Limited · Coimbatore, Tamil Nadu, India</p>
          <p>E: info@sunloopenergy.com · W: www.sunloopenergy.com</p>
        </div>
        <div className="bg-brand-primary py-2 text-center text-[10px] font-bold uppercase tracking-widest text-white">
          Specifications subject to change without notice · {ds.revision} · {ds.issueDate}
        </div>
      </footer>
    </article>
  );
}
