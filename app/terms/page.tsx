import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../../components/UI';

export const metadata = {
  title: 'Terms & Conditions · Sunloop Energy',
  description: 'Terms of service, engineering contracts, and warranty policies for Sunloop Energy Limited products and solar solutions.',
};

export default function TermsPage() {
  return (
    <main className="readable-ui min-h-screen bg-[#FAFAF5] text-brand-ink pt-28 pb-20 font-sans">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-slate hover:text-[#E86526] transition py-1.5 px-3 rounded-lg bg-white border border-black/10 shadow-2xs"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        <Reveal>
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            
            {/* Header */}
            <div className="border-b border-black/10 pb-6 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-[#E86526] bg-orange-50 border border-orange-100 uppercase tracking-wider">
                <FileText className="h-3.5 w-3.5" /> Terms of Service
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-ink tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="text-xs text-brand-slate">
                Effective Date: January 1, 2026 · Governing Law: Tamil Nadu, India
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-normal">
              
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing our website, purchasing solar PV equipment, energy storage systems (ESS), or commissioning engineering installation works from Sunloop Energy Limited, you agree to be bound by these Terms &amp; Conditions and standard EPC project agreements.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink">
                  2. Quotations, Feasibility &amp; Orders
                </h2>
                <p>
                  Engineering estimates provided via online forms or WhatsApp are preliminary. Formal contractual commitments require an on-site structural and electrical feasibility survey conducted by Sunloop certified engineers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink">
                  3. Warranty &amp; Performance Guarantees
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Solar PV Modules:</strong> 25-Year Linear Power Output Warranty.</li>
                  <li><strong>Hybrid Inverters &amp; ESS:</strong> 10-Year Manufacturer Warranty on LiFePO4 Battery Systems.</li>
                  <li><strong>EPC Workmanship:</strong> 5-Year Comprehensive Installation &amp; Workmanship Warranty.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink">
                  4. Intellectual Property
                </h2>
                <p>
                  All software algorithms, AI telemetry models, circuit schematics, brand trademarks, and documentation published on this website are the intellectual property of Sunloop Energy Limited.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink">
                  5. Contact &amp; Legal Notices
                </h2>
                <div className="rounded-2xl bg-[#FAFAF5] border border-black/10 p-4 space-y-1.5 text-xs">
                  <p className="font-semibold text-brand-ink">Sunloop Energy Limited — Legal Department</p>
                  <p className="text-slate-600">Factory: A43, Sulur Industrial Estate, Kadampadi, Coimbatore, Tamil Nadu 641401</p>
                  <p className="text-slate-600">Phone: +91 733 953 6677 · Email: info@sunloopenergy.com</p>
                </div>
              </section>

            </div>

          </div>
        </Reveal>

      </div>
    </main>
  );
}
