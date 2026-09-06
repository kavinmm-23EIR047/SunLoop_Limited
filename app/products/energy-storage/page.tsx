'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BatteryCharging,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Bot,
  X,
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { essProducts, ESSProduct } from '../../../data/essProducts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type WallMountSpecificationRow = {
  no?: number;
  parameter?: string;
  values?: [string, string, string, string];
  value?: string;
  section?: string;
};

// Text-based specification data: easy to maintain and suitable for PDF export.
const wallMountSpecifications: WallMountSpecificationRow[] = [
  { section: 'General Requirements' },
  { no: 1, parameter: 'EV Charger Type', value: 'AC' },
  { no: 2, parameter: 'Charger Capacity', values: ['3.5 kW', '7 kW', '11 kW', '22 kW'] },
  { no: 3, parameter: 'Product Model No.', values: ['ENC-ACB/L003P5A-S / ANSI-ACB/L003P5A-S', 'ENC-ACB/L007A-S / ANSI-ACB/L007A-S', 'ENC-ACB/L011A-S / ANSI-ACB/L011A-S', 'ENC-ACB/L022A-S'] },
  { no: 4, parameter: 'Mounting', value: 'Wall-Mounted / Column Type' },
  { section: 'Input Requirements' },
  { no: 5, parameter: 'AC Supply System', value: 'Single-phase, 3-wire AC system / Three-phase, 5-wire AC system (model dependent)' },
  { no: 6, parameter: 'Nominal Input Voltage', values: ['AC 220 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 220 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 380 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 380 V ±15%'] },
  { no: 7, parameter: 'Input Frequency', value: '50 ±3 Hz' },
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
  { no: 15, parameter: 'Single Output Max. Current', values: ['16 Amp', '32 Amp', '16 Amp / 50 Amp', '32 Amp'] },
  { section: 'User Interface & Display Requirements' },
  { no: 16, parameter: 'Display & Touch-Screen Size', value: '4.3-inch touch screen; 7-inch colour touch screen optional' },
  { no: 17, parameter: 'User Authentication', value: 'Mobile application / user interface / QR code / RFID card / password login' },
  { no: 18, parameter: 'Metering Information', value: 'Consumption units' },
  { section: 'Communication Requirements' },
  { no: 19, parameter: 'EVSE and Central Server Communication', value: 'OCPP 1.6J protocol (optional)' },
  { no: 20, parameter: 'Charger and CMS Interface', value: 'Ethernet / 3G / 4G / Wi-Fi (optional)' },
  { section: 'Protection & Safety Requirements' },
  { no: 21, parameter: 'Executive Standard', value: 'IEC 62196:2017, IEC 61851:2017, SAE J1772, etc.' },
  { no: 22, parameter: 'Safety Parameters', value: 'Over-current, under-voltage, residual-current, surge, leakage, short-circuit and over-temperature protection' },
];

const trolleySpecifications: WallMountSpecificationRow[] = [
  { section: 'General Requirements' },
  { no: 1, parameter: 'EV Charger Type', value: 'AC' },
  { no: 2, parameter: 'Charger Capacity', values: ['7 kW', '11 kW', '22 kW', ''] },
  { no: 3, parameter: 'Product Model No.', values: ['ENC-ACL007A / ANSI-ACL007A', 'ENC-ACL011A / ANSI-ACL011A', 'ENC-ACL022A/B / ANSI-ACL022B', ''] },
  { no: 4, parameter: 'Mounting', value: 'Ground-Mounted' },
  { section: 'Input Requirements' },
  { no: 5, parameter: 'AC Supply System', value: 'Single-phase, 3-wire AC system / Three-phase, 5-wire AC system (model dependent)' },
  { no: 6, parameter: 'Nominal Input Voltage', values: ['AC 220 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 380 V ±15% (ENC) / AC 240 V ±15% (ANSI)', 'AC 380 V ±15% (ENC) / AC 240 V ±15% (ANSI)', ''] },
  { no: 7, parameter: 'Input Frequency', value: '50 ±3 Hz' },
  { section: 'Environmental Requirements' },
  { no: 8, parameter: 'Ambient Temperature Range', value: '-25 °C to +55 °C' },
  { no: 9, parameter: 'Ambient Humidity', value: '5% to 95%' },
  { no: 10, parameter: 'Storage Temperature', value: '-40 °C to +70 °C' },
  { section: 'Mechanical Requirements' },
  { no: 11, parameter: 'IP Rating', value: 'IP54' },
  { no: 12, parameter: 'Cooling', value: 'Natural cooling / Air-cooled' },
  { section: 'Output Requirements' },
  { no: 13, parameter: 'Number of Outputs', value: '1; 1 or 2 (ENC); 2 (ANSI), depending on model' },
  { no: 14, parameter: 'Type of Each Output', value: 'AC; Type-2 / Type-1 connector or socket (optional)' },
  { no: 15, parameter: 'Single Output Max. Current', values: ['32 Amp', '16 Amp / 50 Amp', 'ENC: 32 Amp / 16 Amp; ANSI: 50 Amp', ''] },
  { section: 'User Interface & Display Requirements' },
  { no: 16, parameter: 'Display & Touch-Screen Size', value: '4.3-inch touch screen; 7-inch colour touch screen optional' },
  { no: 17, parameter: 'User Authentication', value: 'Mobile application / user interface / QR code / RFID card / password login' },
  { no: 18, parameter: 'Metering Information', value: 'Consumption units' },
  { section: 'Communication Requirements' },
  { no: 19, parameter: 'EVSE and Central Server Communication', value: 'OCPP 1.6J protocol (optional)' },
  { no: 20, parameter: 'Charger and CMS Interface', value: 'Ethernet / 3G / 4G / Wi-Fi (optional)' },
  { section: 'Protection & Safety Requirements' },
  { no: 21, parameter: 'Executive Standard', value: 'IEC 62196:2017, IEC 61851:2017, SAE J1772, etc.' },
  { no: 22, parameter: 'Safety Parameters', value: 'Over-current, under-voltage, residual-current, surge, leakage, short-circuit and over-temperature protection' },
];

const specificationText = [
  'SUNLOOP | AC EV CHARGER (3.5 kW / 7 kW / 11 kW / 22 kW)',
  '',
  ...wallMountSpecifications.flatMap((row) => row.section
    ? ['', row.section]
    : [`${row.no}. ${row.parameter}: ${row.values ? row.values.join(' / ') : row.value}`]),
].join('\n');

const acChargerFeatures = [
  'Delicate appearance, simple operation and convenient installation',
  'High-efficiency, reliable and stable performance',
  'Multiple charging, operation-management and payment modes',
  'Ethernet or wireless communication support',
  'RFID card and OCPP 1.6J support (optional)',
  'Online data upgrade and integrated overload protection',
];

function WallMountSpecificationTable({ rows = wallMountSpecifications }: { rows?: WallMountSpecificationRow[] }) {
  return (
    <div className="overflow-x-auto border border-black/10 bg-white">
      <table className="min-w-[820px] w-full border-collapse text-left text-xs leading-snug text-brand-ink">
        <thead className="bg-brand-primary text-white">
          <tr>
            <th className="w-12 border-r border-white/25 px-3 py-2.5 text-center font-bold">No.</th>
            <th className="w-52 border-r border-white/25 px-3 py-2.5 font-bold">Parameters</th>
            <th className="px-3 py-2.5 font-bold">Requirements</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => row.section ? (
            <tr key={row.section} className="bg-black/[0.045]">
              <td colSpan={3} className="px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-brand-ink">{row.section}</td>
            </tr>
          ) : (
            <tr key={row.no} className={index % 2 ? 'bg-white' : 'bg-[#FCFCFA]'}>
              <td className="border border-black/10 px-3 py-2 text-center text-brand-slate">{row.no}</td>
              <th scope="row" className="border border-black/10 px-3 py-2 font-semibold text-brand-ink">{row.parameter}</th>
              <td className="border border-black/10 px-3 py-2 text-brand-slate">
                {row.values ? <div className="grid grid-cols-4 divide-x divide-black/10">{row.values.map((value, valueIndex) => <span key={valueIndex} className="px-2 first:pl-0">{value}</span>)}</div> : row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EnergyStoragePage() {
  const [activeModal, setActiveModal] = useState<ESSProduct | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const productsList = essProducts || [];
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.ess-product-image').forEach((image) => {
        gsap.fromTo(
          image,
          { autoAlpha: 0, x: 100 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 86%',
              once: true,
            },
          }
        );
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
            backgroundImage: `url('/products/Energy Storage Cabinet.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Energy Storage Systems (ESS)
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Advanced lithium-ion and LiFePO4 battery storage systems that ensure uninterrupted power, reduce peak-demand charges, and increase energy independence. Fully stackable and designed for seamless integration with Solar and EV systems.
            </p>
            <p className="text-xs font-bold text-[#E86526] uppercase tracking-wider">
              Capacity: 5 kWh – 500+ kWh (stackable to meet any requirement)
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Storage Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <Bot className="h-3.5 w-3.5 text-brand-apricot" /> Peak Shaving AI Portal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESS SYSTEM TYPES TABLE */}
      <section className="py-12 bg-[#FAFAF5] border-b border-black/5">
        <div className="container max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-bold text-brand-ink">Energy Storage System Configurations</h2>
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8F9FA] border-b border-black/10 font-bold text-brand-ink">
                <tr>
                  <th className="p-4">System Type</th>
                  <th className="p-4">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 font-medium text-brand-slate">
                <tr>
                  <td className="p-4 font-bold text-brand-ink">Wall-Mounted ESS</td>
                  <td className="p-4">Homes — compact, space-saving, easy install</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-brand-ink">Trolley-Type ESS</td>
                  <td className="p-4">Commercial &amp; Industrial sites — mobile, easy to scale</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-brand-ink">Containerized ESS</td>
                  <td className="p-4">Utility-scale — high-capacity, grid-integrated deployments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION WITH GROUPED CATEGORIES */}
      <section className="py-14 md:py-20 bg-white">
        <div ref={catalogRef} className="container max-w-5xl mx-auto px-4 space-y-24">
          
          {/* RESIDENTIAL ESS GROUP */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              Residential Energy Storage Systems (5 kWh – 20 kWh)
            </h2>
            <div className="space-y-16">
              {productsList.filter(p => p.keyword === 'residential').map((prod, index) => {
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
                        <p className="text-[15px] text-[#333333] font-medium">Capacity: <span className="font-normal">{prod.capacity}</span></p>
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
                      className={`ess-product-image aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(71,85,105,0.28)] transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = prod.fallbackImage;
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COMMERCIAL & UTILITY ESS GROUP */}
          <div className="space-y-12 pt-8 border-t border-black/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              Commercial &amp; Utility Energy Storage Systems (30 kWh – 500+ kWh)
            </h2>
            <div className="space-y-16">
              {productsList.filter(p => p.keyword === 'commercial').map((prod, index) => {
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
                        <p className="text-[15px] text-[#333333] font-medium">Capacity: <span className="font-normal">{prod.capacity}</span></p>
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
                      className={`ess-product-image aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(71,85,105,0.28)] transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = prod.fallbackImage;
                        }}
                      />
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
              className="relative w-[min(96vw,1100px)] overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-xl space-y-5 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div>
                  <span className="text-xs font-semibold text-brand-primary uppercase">{activeModal.categoryLabel} · {activeModal.series}</span>
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
                <div className="rounded-xl bg-[#FAFAF5] border border-black/[0.06] p-3.5 space-y-2">
                  <h4 className="text-xs font-semibold text-brand-ink uppercase tracking-wider mb-2">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeModal.specs?.map((s) => (
                      <div key={s.label} className="border-b border-black/5 pb-1.5">
                        <span className="text-xs text-brand-slate font-medium block">{s.label}</span>
                        <strong className="text-brand-ink font-semibold">{s.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold text-brand-ink uppercase tracking-wider">Features &amp; Protections</h4>
                  {activeModal.features?.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-brand-ink">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex flex-wrap justify-end gap-3">
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
