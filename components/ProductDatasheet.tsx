'use client';

import Link from 'next/link';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import type { DatasheetEntry } from '../data/allProducts';
import type { SpecRow } from '../data/productTypes';

function DatasheetSpecTable({ rows, title }: { rows: SpecRow[]; title: string }) {
  if (!rows.length) return null;

  return (
    <section className="datasheet-section">
      <h2 className="datasheet-section-title">{title}</h2>
      <table className="datasheet-table">
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.label} className={index % 2 === 1 ? 'bg-[#FFF9F5]' : 'bg-white'}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function ProductDatasheetView({ entry }: { entry: DatasheetEntry }) {
  const { datasheet: ds } = entry;
  const handlePrint = () => window.print();

  return (
    <article className="datasheet-page bg-[#f3f1ee] px-3 py-4 font-sans sm:px-6 sm:py-6">
      <div className="no-print mx-auto mb-4 flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3 border-y border-[#e7e1dc] bg-white px-4 py-3 sm:px-6">
        <Link href="/resources/datasheets" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Downloads
        </Link>
        <div className="flex items-center gap-2">
          <button onClick={handlePrint} className="inline-flex items-center gap-1.5 rounded-lg border border-brand-primary px-3.5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-orange-50">
            <Printer className="h-4 w-4" /> Print / Save PDF
          </button>
          <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary">
            <Download className="h-4 w-4" /> Request Quote
          </Link>
        </div>
      </div>

      <div className="datasheet-sheet mx-auto w-full max-w-[210mm] border border-[#dedbd7] bg-white px-5 py-6 shadow-sm sm:px-9 sm:py-8">
        <header className="flex flex-wrap items-start justify-between gap-5 border-b-2 border-brand-primary pb-5">
          <div className="min-w-0">
            <img src="/images/logo.png" alt="Sunloop Energy" className="mb-2 h-10 w-auto object-contain" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-slate">Product technical datasheet</p>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 text-xs sm:text-sm">
            <span className="text-brand-slate">Model number</span>
            <strong className="font-mono text-brand-ink">{ds.modelNumber}</strong>
            <span className="text-brand-slate">Revision</span>
            <span className="font-medium text-brand-ink">{ds.revision}</span>
            <span className="text-brand-slate">Issue date</span>
            <span className="font-medium text-brand-ink">{ds.issueDate}</span>
          </div>
        </header>

        <section className="border-b border-[#dedbd7] py-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-primary">{entry.series} · {entry.categoryLabel}</p>
          <h1 className="text-2xl font-semibold leading-tight text-brand-ink sm:text-3xl">{entry.title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#4b4b4b]">{ds.overview}</p>
        </section>

        <section className="grid grid-cols-[112px_1fr] gap-4 border-b border-[#dedbd7] py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
          <div className="flex min-h-[130px] items-center justify-center bg-[#faf8f6] p-3 sm:min-h-[160px]">
            <img src={entry.image} alt={entry.title} className="max-h-36 max-w-full object-contain sm:max-h-40" />
          </div>
          <div className="self-center">
            <h2 className="datasheet-section-title">Product summary</h2>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs sm:text-sm">
              <dt className="font-medium text-brand-slate">Product family</dt>
              <dd className="text-brand-ink">{entry.series}</dd>
              <dt className="font-medium text-brand-slate">Category</dt>
              <dd className="text-brand-ink">{entry.categoryLabel}</dd>
              <dt className="font-medium text-brand-slate">Market segment</dt>
              <dd className="capitalize text-brand-ink">{entry.segment}</dd>
            </dl>
          </div>
        </section>

        <div className="space-y-5 py-5">
          <DatasheetSpecTable rows={ds.electrical} title="Electrical characteristics" />
          <DatasheetSpecTable rows={ds.mechanical} title="Mechanical specifications" />
          <DatasheetSpecTable rows={ds.environmental} title="Environment and protection" />

          {ds.certifications.length > 0 && (
            <section className="datasheet-section">
              <h2 className="datasheet-section-title">Certifications</h2>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border border-[#dedbd7] px-3 py-2 text-xs font-medium text-brand-ink">
                {ds.certifications.map((cert) => <span key={cert}>{cert}</span>)}
              </div>
            </section>
          )}

          {ds.warranties.length > 0 && (
            <DatasheetSpecTable rows={ds.warranties.map((warranty, index) => ({ label: `Warranty ${index + 1}`, value: warranty }))} title="Warranty" />
          )}

          {ds.applications.length > 0 && (
            <section className="datasheet-section">
              <h2 className="datasheet-section-title">Typical applications</h2>
              <ul className="grid gap-1.5 border border-[#dedbd7] px-4 py-3 text-xs text-brand-ink sm:grid-cols-2">
                {ds.applications.map((application) => <li key={application}>• {application}</li>)}
              </ul>
            </section>
          )}

          {ds.orderingInfo && (
            <section className="datasheet-section">
              <h2 className="datasheet-section-title">Ordering information</h2>
              <p className="border border-[#dedbd7] px-3 py-2 text-xs leading-relaxed text-brand-ink">{ds.orderingInfo}</p>
            </section>
          )}
        </div>

        <footer className="border-t-2 border-brand-primary pt-4 text-[10px] leading-relaxed text-brand-slate">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2">
            <p><strong className="text-brand-ink">Sunloop Energy Limited</strong> · A43, Sulur Industrial Estate, Kadampadi, Coimbatore, Tamil Nadu 641401</p>
            <p>+91 733 953 6677 · info@sunloopenergy.com · www.sunloopenergy.com</p>
          </div>
          <p className="mt-2 border-t border-[#e7e1dc] pt-2">© 2026 Sunloop Energy Limited. All rights reserved. Specifications may change without notice. {ds.revision} · {ds.issueDate}</p>
        </footer>
      </div>
    </article>
  );
}
