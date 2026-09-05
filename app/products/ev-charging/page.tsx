'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Bot,
  Download,
  X,
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { evProducts, EVProductVariant } from '../../../data/evProducts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type SpecificationRow = {
  no?: number;
  parameter?: string;
  values?: [string, string, string, string];
  value?: string;
  section?: string;
};

const acChargerSpecifications: SpecificationRow[] = [
  { section: 'General Requirements' },
  { no: 1, parameter: 'EV Charger Type', value: 'AC' },
  { no: 2, parameter: 'Charger Capacity', values: ['3.5 kW', '7 kW', '11 kW', '22 kW'] },
  { no: 3, parameter: 'Product Model No.', values: ['ENC-ACB/L003P5A-S / ANSI-ACB/L003P5A-S', 'ENC-ACB/L007A-S / ANSI-ACB/L007A-S', 'ENC-ACB/L011A-S / ANSI-ACB/L011A-S', 'ENC-ACB/L022A-S'] },
  { no: 4, parameter: 'Mounting', value: 'Wall-Mounted / Column Type' },
  { section: 'Input Requirements' },
  { no: 5, parameter: 'AC Supply System', value: 'Single-Phase, 3-Wire AC System / Three-Phase, 5-Wire AC System' },
  { no: 6, parameter: 'Nominal Input Voltage', values: ['AC 220 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 220 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 380 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 380 V ±15%'] },
  { no: 7, parameter: 'Input Frequency', value: '50 ± 3 Hz' },
  { section: 'Environmental Requirements' },
  { no: 8, parameter: 'Ambient Temperature Range', value: '-25 °C to +55 °C' },
  { no: 9, parameter: 'Ambient Humidity', value: '5% to 95%' },
  { no: 10, parameter: 'Storage Temperature', value: '-40 °C to +70 °C' },
  { section: 'Mechanical Requirements' },
  { no: 11, parameter: 'IP Rating', value: 'IP55' },
  { no: 12, parameter: 'Cooling', value: 'Natural Cooling' },
  { section: 'Output Requirements' },
  { no: 13, parameter: 'Number of Outputs', value: '1' },
  { no: 14, parameter: 'Type of Each Output', value: 'AC; Type-2 connector or socket (optional)' },
  { no: 15, parameter: 'Single Output Max. Current', values: ['16 A', '32 A', '16 A / 50 A', '32 A'] },
  { section: 'User Interface & Display Requirements' },
  { no: 16, parameter: 'Display', value: '4.3-inch colour touch screen (7-inch optional)' },
  { no: 17, parameter: 'User Authentication', value: 'Mobile application / User interface / QR code / RFID card / Password login' },
  { no: 18, parameter: 'Metering Information', value: 'Consumption units' },
  { section: 'Communication Requirements' },
  { no: 19, parameter: 'EVSE and Central Server Communication', value: 'OCPP 1.6J protocol (optional)' },
  { no: 20, parameter: 'Charger and CMS Interface', value: 'Ethernet / 3G / 4G / Wi-Fi (optional)' },
  { section: 'Protection & Safety Requirements' },
  { no: 21, parameter: 'Executive Standard', value: 'IEC 62196:2017, IEC 61851:2017, SAE J1772, etc.' },
  { no: 22, parameter: 'Safety Parameters', value: 'Over-current, under-voltage, residual-current, surge, leakage, short-circuit and over-temperature protection' },
];

const commercialAcChargerSpecifications: SpecificationRow[] = [
  { section: 'General Requirements' },
  { no: 1, parameter: 'EV Charger Type', value: 'AC' },
  { no: 2, parameter: 'Charger Capacity', values: ['7 kW', '11 kW', '22 kW', ''] },
  { no: 3, parameter: 'Product Model No.', values: ['ENC-ACL007A / ANSI-ACL007A', 'ENC-ACL011A / ANSI-ACL011A', 'ENC-ACL022A/B / ANSI-ACL022B', ''] },
  { no: 4, parameter: 'Mounting', value: 'Ground-Mounted' },
  { section: 'Input Requirements' },
  { no: 5, parameter: 'AC Supply System', value: 'Single-Phase, 3 Wire AC system / Single-Phase, 3 Wire AC system (ANSI) / Three-Phase, 5 Wire AC system (ENC)' },
  { no: 6, parameter: 'Nominal Input Voltage', value: '7 kW: AC220V ±15% (ENC) / AC240V ±15% (ANSI); 11 kW: AC380V ±15% (ENC) / AC240V ±15% (ANSI); 22 kW: AC380V ±15% (ENC) / AC240V ±15% (ANSI)' },
  { no: 7, parameter: 'Input Frequency', value: '50 ±3 Hz' },
  { section: 'Environmental Requirements' },
  { no: 8, parameter: 'Ambient Temperature Range', value: '-25 °C to +55 °C' },
  { no: 9, parameter: 'Ambient Humidity', value: '5% to 95%' },
  { no: 10, parameter: 'Storage Temperature', value: '-40 °C to +70 °C' },
  { section: 'Mechanical Requirements' },
  { no: 11, parameter: 'IP Rating', value: 'IP54' },
  { no: 12, parameter: 'Cooling', value: 'Natural Cooling / Air-cooled' },
  { no: 23, parameter: 'Physical Dimensions', value: 'Ground-Mounted Type: L × W × H: 340 × 201 × 1500 mm' },
  { section: 'Output Requirements' },
  { no: 13, parameter: 'Number of Outputs', value: '1 / 1 or 2 (ENC) / 2 (ANSI)' },
  { no: 14, parameter: 'Type of Each Output', value: 'AC220V ±15% (ENC) / AC240V ±15% (ANSI) / AC380V ±15% (ENC) / AC240V ±15% (ANSI)' },
  { no: 15, parameter: 'Single Output Max. Current', value: '7 kW: 32 Amp; 11 kW: 16 Amp / 50 Amp; 22 kW: 32 Amp / 16 Amp (ENC), 50 Amp (ANSI)' },
  { section: 'User Interface & Display Requirements' },
  { no: 16, parameter: 'Display & Touch-Screen Size', value: '4.3-inch color touch screen; 7-inch color touch screen optional' },
  { no: 17, parameter: 'User Authentication', value: 'Mobile Application / User Interface / QR Code / RFID Card / Password Login' },
  { no: 18, parameter: 'Metering Information', value: 'Consumption Units' },
  { section: 'Communication Requirements' },
  { no: 19, parameter: 'EVSE and Central Server Communication', value: 'OCPP 1.6J Protocol (Optional)' },
  { no: 20, parameter: 'Charger and CMS Interface', value: 'Ethernet / 3G / 4G / Wi-Fi (Optional)' },
  { section: 'Protection & Safety Requirements' },
  { no: 21, parameter: 'Executive Standard', value: 'IEC 62196:2017 / IEC 61851:2017 / SAE J1772 / etc.' },
  { no: 22, parameter: 'Safety Parameters', value: 'Over Current / Under Voltage / Residual Current / Surge Protection / Leakage Protection / Short Circuit / Over Temperature / etc.' },
  { section: 'Charger Capacity Summary' },
  { no: 24, parameter: '7 kW Configuration', value: 'ENC-ACL007A / ANSI-ACL007A; Ground-Mounted; Single-Phase, 3 Wire AC; AC220V ±15% (ENC) / AC240V ±15% (ANSI); Maximum Current: 32 Amp' },
  { no: 25, parameter: '11 kW Configuration', value: 'ENC-ACL011A / ANSI-ACL011A; Ground-Mounted; Three-Phase, 5 Wire AC (ENC); AC380V ±15% (ENC) / AC240V ±15% (ANSI); Maximum Current: 16 Amp / 50 Amp' },
  { no: 26, parameter: '22 kW Configuration', value: 'ENC-ACL022A/B / ANSI-ACL022B; Ground-Mounted; Three-Phase, 5 Wire AC (ENC); AC380V ±15% (ENC) / AC240V ±15% (ANSI); Maximum Current: 32 Amp / 16 Amp (ENC), 50 Amp (ANSI)' },
];

const dcFastChargerSpecifications: SpecificationRow[] = [
  { section: 'General Requirements' },
  { no: 1, parameter: 'EV Charger Type', value: 'DC' },
  { no: 2, parameter: 'Charger Capacity', values: ['20 kW', '30 kW', '', ''] },
  { no: 3, parameter: 'Product Model No.', values: ['ENC-DCB020A / ANSI-DCB020A / JIS-DCB020A', 'ENC-DCB030A / ANSI-DCB030A / JIS-DCB030A', '', ''] },
  { no: 4, parameter: 'Mounting', value: 'Wall-Mounted' },
  { section: 'Input Requirements' },
  { no: 5, parameter: 'AC Supply System', value: 'Three-Phase, 5 Wire AC system' },
  { no: 6, parameter: 'Nominal Input Voltage', value: 'AC380V ±15%' },
  { no: 7, parameter: 'Input Frequency', value: '45–65 Hz' },
  { section: 'Environmental Requirements' },
  { no: 8, parameter: 'Ambient Temperature Range', value: '-25 °C to +55 °C' },
  { no: 9, parameter: 'Ambient Humidity', value: '5% to 95%' },
  { no: 10, parameter: 'Storage Temperature', value: '-40 °C to +70 °C' },
  { section: 'Mechanical Requirements' },
  { no: 11, parameter: 'IP Rating', value: 'IP54' },
  { no: 12, parameter: 'Cooling', value: 'Air-cooled' },
  { no: 24, parameter: 'Physical Dimensions', value: 'L × W × H: 650 × 440 × 267 mm' },
  { section: 'Output Requirements' },
  { no: 13, parameter: 'Number of Outputs', value: '1' },
  { no: 14, parameter: 'Type of Each Output', value: 'DC200–750V / DC150–500V (JIS)' },
  { no: 15, parameter: 'Single Output Max. Current', values: ['20 kW: 80 Amp', '30 kW: 125 Amp', '', ''] },
  { no: 16, parameter: 'Power Factor', value: '≥0.99 (50% load above)' },
  { section: 'User Interface & Display Requirements' },
  { no: 17, parameter: 'Display & Touch-Screen Size', value: '7-inch touch screen with shell' },
  { no: 18, parameter: 'User Authentication', value: 'Mobile Application or User Interface / QR Code / RFID Card / Password Login' },
  { no: 19, parameter: 'Metering Information', value: 'Consumption Units' },
  { section: 'Communication Requirements' },
  { no: 20, parameter: 'EVSE and Central Server Communication', value: 'OCPP 1.6J Protocol (Optional)' },
  { no: 21, parameter: 'Charger and CMS Interface', value: 'Ethernet / 3G / 4G / Wi-Fi (Optional)' },
  { section: 'Protection & Safety Requirements' },
  { no: 22, parameter: 'Executive Standard', value: 'IEC 62196:2017 / IEC 61851:2017 / SAE J1772 / CHAdeMO / etc.' },
  { no: 23, parameter: 'Safety Parameters', value: 'Over Current / Under Voltage / Residual Current / Surge Protection / Leakage Protection / Short Circuit / Over Temperature / etc.' },
  { section: 'Charger Capacity Summary' },
  { no: 25, parameter: '20 kW Configuration', value: 'ENC-DCB020A / ANSI-DCB020A / JIS-DCB020A; DC; Wall-Mounted; AC380V ±15%; 45–65 Hz; DC200–750V; JIS DC150–500V; Maximum Output Current: 80 Amp' },
  { no: 26, parameter: '30 kW Configuration', value: 'ENC-DCB030A / ANSI-DCB030A / JIS-DCB030A; DC; Wall-Mounted; AC380V ±15%; 45–65 Hz; DC200–750V; JIS DC150–500V; Maximum Output Current: 125 Amp' },
];

function ACChargerSpecificationTable({ rows = acChargerSpecifications }: { rows?: SpecificationRow[] }) {
  return (
    <div className="overflow-x-auto border border-black/10 bg-white">
      <table className="w-full table-fixed border-collapse text-left text-[9px] leading-snug text-brand-ink sm:text-[10px]">
        <thead className="bg-brand-primary text-white">
          <tr>
            <th className="w-9 border-r border-white/25 px-1.5 py-2 text-center font-semibold sm:w-12 sm:px-2">No.</th>
            <th className="w-32 border-r border-white/25 px-2 py-2 font-semibold sm:w-44 sm:px-3">Parameters</th>
            <th colSpan={4} className="px-3 py-2 font-semibold">Requirements</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => row.section ? (
            <tr key={row.section} className="bg-black/[0.045]">
              <td colSpan={6} className="px-3 py-1.5 text-center text-[9px] font-bold uppercase tracking-wide text-brand-ink">{row.section}</td>
            </tr>
          ) : (
            <tr key={row.no} className={index % 2 ? 'bg-white' : 'bg-[#FCFCFA]'}>
              <td className="border border-black/10 px-2 py-1.5 text-center text-brand-slate">{row.no}</td>
              <th scope="row" className="border border-black/10 px-3 py-1.5 font-medium">{row.parameter}</th>
              {row.values ? row.values.map((value, valueIndex) => (
                <td key={valueIndex} className="break-words border border-black/10 px-1.5 py-1.5 align-top text-brand-slate sm:px-2">{value}</td>
              )) : (
                <td colSpan={4} className="break-words border border-black/10 px-2 py-1.5 text-brand-slate sm:px-3">{row.value}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EVChargingPage() {
  const [activeModal, setActiveModal] = useState<EVProductVariant | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const downloadSpecificationPdf = () => {
    if (!activeModal) return;
    const specifications = activeModal.id === 'dc-ev-charger-com'
      ? dcFastChargerSpecifications
      : activeModal.id === 'ac-ev-charger-com'
        ? commercialAcChargerSpecifications
        : acChargerSpecifications;

    const exportText = [
      `SUNLOOP | ${activeModal.title.toUpperCase()}`,
      '',
      activeModal.desc,
      '',
      'FEATURES',
      ...activeModal.tech.map((feature) => `- ${feature}`),
      '',
      'APPLICABLE SCENES',
      ...activeModal.apps.map((application) => `- ${application}`),
      '',
      ...specifications.flatMap((row) => row.section
        ? ['', row.section]
        : [`${row.no}. ${row.parameter}: ${row.values ? row.values.join(' / ') : row.value}`]),
    ].join('\n');
    const safeText = exportText.replace(/[–—]/g, '-').replace(/±/g, '+/-').replace(/°/g, ' deg');
    const lines = safeText.split('\n').flatMap((line) => line.match(/.{1,92}(?:\s|$)|\S+?(?:\s|$)/g) || ['']);
    const pages = Array.from({ length: Math.max(1, Math.ceil(lines.length / 48)) }, (_, page) => lines.slice(page * 48, (page + 1) * 48));
    const objects: string[] = ['', '', '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];
    const pageReferences: string[] = [];

    pages.forEach((pageLines) => {
      const pageObject = objects.length + 1;
      const contentObject = pageObject + 1;
      pageReferences.push(`${pageObject} 0 R`);
      objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObject} 0 R >>`);
      const content = `BT /F1 10 Tf 42 550 Td 13 TL ${pageLines.map((line) => `(${line.replace(/\\/g, '\\\\').replace(/[()]/g, '\\$&')}) Tj T*`).join(' ')} ET`;
      objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    });

    objects[0] = '<< /Type /Catalog /Pages 2 0 R >>';
    objects[1] = `<< /Type /Pages /Kids [${pageReferences.join(' ')}] /Count ${pages.length} >>`;
    let pdf = '%PDF-1.4\n';
    const offsets = [0];
    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xref = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${String(offset).padStart(10, '0')} 00000 n `).join('\n')}\ntrailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

    const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sunloop-ac-ev-charger-specifications.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.ev-product-image').forEach((image) => {
        gsap.fromTo(image, { autoAlpha: 0, x: 100 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: image, start: 'top 86%', once: true },
        });
      });
    }, catalogRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAF5] pt-16 pb-16 font-sans">
      {/* HERO BANNER */}
      <section className="relative w-full h-[460px] sm:h-[560px] md:h-[640px] overflow-hidden bg-brand-ink text-white flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-1000"
          style={{
            backgroundImage: `url('/products/EV charger/DC EV Charger.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              EV Charging Infrastructure
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Safe, fast, and reliable AC and DC charging — engineered for every segment, from home garages to public highway charging hubs. Every charger connects to the Sunloop AI Portal for real-time monitoring, remote management, and payment integration.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Charger Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <Bot className="h-3.5 w-3.5 text-brand-apricot" /> Smart Charging AI Portal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EV CHARGER TYPES SUMMARY TABLE */}
      <section className="py-12 bg-[#FAFAF5] border-b border-black/5">
        <div className="container max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-bold text-brand-ink">EV Charger Infrastructure Categories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
              <span className="inline-block rounded-xl bg-orange-50 border border-orange-100 px-3 py-1 text-xs font-bold text-brand-primary">
                AC EV CHARGERS
              </span>
              <h3 className="text-xl font-bold text-brand-ink">AC EV Chargers — 7.4 kW to 22 kW</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Smart charging for residential communities, commercial buildings, industrial fleets, and public charging networks.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
              <span className="inline-block rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600">
                DC FAST CHARGERS
              </span>
              <h3 className="text-xl font-bold text-brand-ink">DC Fast EV Chargers — 30 kW to 240 kW</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                High-performance fast charging built for businesses and investors capitalizing on the growing EV market — ideal for fuel stations, highways, malls, hotels, and fleet depots, enabling recurring charging revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION WITH GROUPED CATEGORIES */}
      <section className="py-14 md:py-20 bg-white">
        <div ref={catalogRef} className="container max-w-5xl mx-auto px-4 space-y-24">
          
          {/* RESIDENTIAL EV CHARGERS GROUP */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              AC EV Chargers (7.4 kW – 22 kW)
            </h2>
            <div className="space-y-16">
              {evProducts.filter(p => p.keywords.includes('residential')).map((prod, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={prod.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`space-y-6 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                    >
                      <div>
                        <h3 className="text-[22px] md:text-2xl font-bold text-[#111111] mb-1">
                          {prod.title}
                        </h3>
                        <p className="text-[15px] text-[#666666] font-normal">
                          {prod.series}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[15px] text-[#333333] font-medium">Power: <span className="font-normal">{prod.power}</span></p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setActiveModal(prod)}
                          className="inline-flex items-center justify-center rounded-full border border-brand-primary/30 bg-orange-50 px-6 py-2 text-[13px] font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                        >
                          View Full Specifications
                        </button>
                      </div>
                    </motion.div>

                    <div
                      className={`ev-product-image relative aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                    >
                      <div className="group relative flex h-full w-full items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(71,85,105,0.28)] transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = prod.fallbackImage;
                          }}
                        />
                        <div className="absolute top-3.5 right-3.5 rounded-full bg-brand-ink px-3 py-0.5 text-[9px] font-semibold text-white shadow-xs">
                          OCPP COMPLIANT
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COMMERCIAL & INDUSTRIAL EV CHARGERS GROUP */}
          <div className="space-y-12 pt-8 border-t border-black/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              DC Fast EV Chargers (30 kW – 240 kW)
            </h2>
            <div className="space-y-16">
              {evProducts.filter(p => p.keywords.includes('commercial')).map((prod, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={prod.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`space-y-6 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                    >
                      <div>
                        <h3 className="text-[22px] md:text-2xl font-bold text-[#111111] mb-1">
                          {prod.title}
                        </h3>
                        <p className="text-[15px] text-[#666666] font-normal">
                          {prod.series}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[15px] text-[#333333] font-medium">Power: <span className="font-normal">{prod.power}</span></p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setActiveModal(prod)}
                          className="inline-flex items-center justify-center rounded-full border border-brand-primary/30 bg-orange-50 px-6 py-2 text-[13px] font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                        >
                          View Full Specifications
                        </button>
                      </div>
                    </motion.div>

                    <div
                      className={`ev-product-image relative aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                    >
                      <div className="group relative flex h-full w-full items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(71,85,105,0.28)] transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = prod.fallbackImage;
                          }}
                        />
                        <div className="absolute top-3.5 right-3.5 rounded-full bg-brand-ink px-3 py-0.5 text-[9px] font-semibold text-white shadow-xs">
                          OCPP COMPLIANT
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS MODAL DIALOG */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-[min(96vw,1200px)] overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-xl space-y-5 max-h-[92vh] overflow-y-auto sm:p-6"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-semibold text-brand-primary uppercase">{activeModal.category} · {activeModal.series}</span>
                  <h3 className="text-lg font-bold text-brand-ink">{activeModal.title} Specs</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="grid h-7 w-7 place-items-center rounded-full bg-black/5 text-brand-ink hover:bg-black/10 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <p className="text-brand-slate font-normal">{activeModal.desc}</p>
                {activeModal.type === 'AC' || activeModal.type === 'DC' ? (
                  <ACChargerSpecificationTable rows={activeModal.id === 'dc-ev-charger-com' ? dcFastChargerSpecifications : activeModal.id === 'ac-ev-charger-com' ? commercialAcChargerSpecifications : acChargerSpecifications} />
                ) : (
                  <div className="rounded-xl bg-[#FAFAF5] border border-black/[0.06] p-3.5 space-y-2">
                    <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider mb-2">Technical Parameters</h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {activeModal.specs.map((s) => (
                        <div key={s.label} className="border-b border-black/5 pb-1.5">
                          <span className="text-[9px] text-brand-slate font-medium block">{s.label}</span>
                          <strong className="text-brand-ink font-semibold">{s.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider">Features &amp; Protections</h4>
                  {activeModal.tech.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-brand-ink">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                {activeModal.apps.length > 0 && (
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider">Applicable Scenes</h4>
                    {activeModal.apps.map((application) => (
                      <div key={application} className="flex items-center gap-2 text-brand-ink">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-black/10 flex flex-wrap justify-end gap-3">
                {(activeModal.type === 'AC' || activeModal.type === 'DC') && (
                  <button
                    onClick={downloadSpecificationPdf}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 px-3 py-2 text-xs font-semibold text-brand-ink hover:bg-black/5 transition"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </button>
                )}
                <Button href="/contact" onClick={() => setActiveModal(null)}>
                  Request Formal Quotation <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
