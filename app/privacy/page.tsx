import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, FileText, Globe } from 'lucide-react';
import { Reveal } from '../../components/UI';

export const metadata = {
  title: 'Privacy Policy · Sunloop Energy',
  description: 'Learn how Sunloop Energy Limited collects, protects, and handles your personal and enterprise telemetry data.',
};

export default function PrivacyPolicyPage() {
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
                <ShieldCheck className="h-3.5 w-3.5" /> Legal &amp; Compliance
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-ink tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs text-brand-slate">
                Effective Date: January 1, 2026 · Last Updated: September 2026
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-normal">
              
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink flex items-center gap-2">
                  1. Introduction &amp; Scope
                </h2>
                <p>
                  Sunloop Energy Limited (&ldquo;Sunloop&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to safeguarding the privacy and security of individuals, clients, and partners who interact with our website, solar systems, battery storage telemetry, and IoT AI Portal services.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink flex items-center gap-2">
                  2. Information We Collect
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Contact &amp; Inquiry Information:</strong> Name, phone number, email address, property type, and location provided via consultation and quotation forms.</li>
                  <li><strong>System &amp; Telemetry Data:</strong> Real-time solar inverter metrics, battery charge states (SOC), power generation kW, EV charging logs, and grid synchronization parameters for AI monitoring.</li>
                  <li><strong>Technical Usage Data:</strong> IP address, device type, browser settings, and page interaction timestamps gathered to improve portal performance.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink flex items-center gap-2">
                  3. How We Use Your Data
                </h2>
                <p>We process collected information for legitimate commercial and engineering purposes, including:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Delivering engineering feasibility assessments, quotations, and subsidy calculations.</li>
                  <li>Optimizing battery dispatch, solar string yields, and fault detection algorithms.</li>
                  <li>Providing 24/7 technical maintenance support and warranty fulfillment.</li>
                  <li>Ensuring compliance with Indian electrical grid safety standards (CEA / TANGEDCO).</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink flex items-center gap-2">
                  4. Data Protection &amp; Confidentiality
                </h2>
                <p>
                  We implement robust technical and organizational security measures, including 256-bit SSL encryption, restricted role-based database access, and ISO 9001:2015 certified data handling practices. We do not sell or monetize personal or telemetry data to third parties.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-brand-ink flex items-center gap-2">
                  5. Contact Data Protection Officer
                </h2>
                <div className="rounded-2xl bg-[#FAFAF5] border border-black/10 p-4 space-y-1.5 text-xs">
                  <p className="font-semibold text-brand-ink">Sunloop Energy Limited — Privacy &amp; Legal Compliance</p>
                  <p className="text-slate-600">Corporate Office: Srinivasa Nagar, Coimbatore, Tamil Nadu 641015</p>
                  <p className="text-slate-600">Factory: A43, Sulur Industrial Estate, Kadampadi, Tamil Nadu 641401</p>
                  <p className="text-slate-600">Email: <a href="mailto:info@sunloopenergy.com" className="text-[#E86526] font-semibold hover:underline">info@sunloopenergy.com</a> · Phone: +91 733 953 6677</p>
                </div>
              </section>

            </div>

          </div>
        </Reveal>

      </div>
    </main>
  );
}
