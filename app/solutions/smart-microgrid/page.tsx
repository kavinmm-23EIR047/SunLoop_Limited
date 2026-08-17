'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Gauge, Sun, Wind } from 'lucide-react';
import { Reveal } from '../../../components/UI';

const microgridComponents = [
  {
    title: 'High Efficiency Solar Module',
    description: 'N Type HJT or TOPCon PV modules with high power, high efficiency, and excellent low-light performance. These advantages enable greater installation capacity, higher energy yields, and enhanced reliability with superior fire resistance and minimized hot spot risks. Combined with shorter construction periods, lower costs, and full lifecycle services, SunEvo delivers maximized investment returns for C&I clients.',
    image: '/images/microgrid-solar-modules.png',
    imageAlt: 'High-efficiency solar modules at a microgrid site',
    icon: Sun,
  },
  {
    title: 'Modular Central PV Inverter',
    description: 'The modular central inverter is designed for utility-scale PV plants, featuring an all-in-one design for rapid deployment and unified maintenance. Each module has a capacity of 1.1 MW and can be flexibly configured up to 8.8 MW, with an independent MPPT for every unit, greatly enhancing system design flexibility. This inverter redefines the concepts of both “string” and “central” inverters, representing a breakthrough innovation that will shape the future of energy and create more possibilities for diverse stakeholders.',
    image: '/images/microgrid-central-inverter.png',
    imageAlt: 'Modular central PV inverter at a solar farm',
    icon: Gauge,
  },
  {
    title: 'Liquid Cooling Storage Battery Container',
    description: 'SunEvo liquid-cooled container-type energy storage system is a large-capacity, high-power, and intelligent integrated solution designed for modern power systems. With capacities of 6.25/5.015/3.727 MWh, it adopts advanced liquid-cooling technology to achieve efficient thermal management and superior durability. Its pre-assembled, integrated design greatly simplifies installation, while the external maintenance structure ensures convenient servicing. The system supports peak shaving, demand response, backup power supply, and command response. Featuring six-layer safety protection, dual-layer thermal propagation control, triple-layer fire protection, and dual-layer hierarchical explosion venting, it ensures comprehensive safety and stability. Equipped with an intelligent fire protection system and IP67-rated battery packs, it operates reliably even under extreme conditions and enables real-time monitoring and fault detection via a cloud platform. Safe, efficient, and user-friendly, this series is widely used for centralized energy storage in large-scale photovoltaic and wind power plants, grid frequency and peak regulation, virtual power plants, and renewable energy integration.',
    image: '/images/microgrid-battery-container.png',
    imageAlt: 'Liquid-cooled battery storage container for a microgrid',
    icon: BatteryCharging,
  },
  {
    title: 'PCS + Transformer Container',
    description: 'The string-type inverter and booster integrated unit is a next-generation, high-efficiency energy storage converter designed for overseas markets. Housed in a 20/40-ft standard container, it supports 6–35 kV customizable grid voltages with dual-grid redundancy and black start capability. Combining inverter and booster functions in a compact, modular design, it achieves up to 99% efficiency with 1500V wide DC voltage and multi-branch DC management to eliminate battery loop currents. The unit supports PQ, VSG, and VF modes for grid-connected or islanded operation, featuring automatic peak shaving, fast <10ms response, L/HVRT and L/HFRT, soft start/stop, and four-quadrant active/reactive power control. With IP65 protection, C4–C5 corrosion resistance, and high-efficiency forced-air cooling, it operates reliably in harsh environments and simplifies maintenance. Compatible with high-voltage battery systems, it integrates charge/discharge management and grid support, making it ideal for large-scale PV/wind energy storage, grid frequency regulation, microgrids, and virtual power plants.',
    image: '/images/microgrid-pcs-transformer.png',
    imageAlt: 'PCS and transformer container for energy storage',
    icon: Gauge,
  },
  {
    title: 'Diesel Generator Set',
    description: 'SunEvo large diesel generator sets integrate high power, reliability, and flexible configuration, designed for critical loads, continuous power supply, and backup applications. Covering a power range from several hundred kVA to megawatt-class output, the generators adopt advanced common rail injection systems, high-efficiency turbocharging combustion technology, and strict quality control processes, delivering excellent fuel efficiency and environmental performance. Featuring a modular design and standardized interfaces, the units are equipped with leading-brand alternators and intelligent control systems, enabling quick installation, fast delivery, and easy maintenance. With smart control, remote monitoring, and multi-mode operation including grid-connected, off-grid, and parallel running modes, these generator sets are ideal for industrial facilities, distributed power plants, microgrids, data centers, hospitals, mining sites, and remote communities.',
    image: '/images/microgrid-diesel-generator.png',
    imageAlt: 'Diesel generator set for a microgrid',
    icon: Gauge,
  },
  {
    title: 'Onshore & Offshore Wind Turbine Generator',
    description: 'SunEvo wind turbines integrate advanced design concepts, intelligent manufacturing technologies, and high-efficiency components to meet power generation demands under various wind conditions, making them suitable for industrial parks, islands, and remote areas. The turbines use direct-drive permanent magnet synchronous generator technology, combined with high-efficiency steel-hybrid towers and intelligent control systems, achieving low noise, low vibration, and high reliability. In areas with abundant wind resources, SunEvo turbines deliver excellent generation performance and economic efficiency, adaptable to a wide range of wind speeds. Advanced direct-drive generators provide stable energy output, while intelligent controls monitor and optimize turbine operation in real time.',
    image: '/images/microgrid-wind-turbine.png',
    imageAlt: 'Onshore wind turbine generator',
    icon: Wind,
  },
  {
    title: 'Full Power Wind Power Converter',
    description: 'SunEvo full-power wind power converters adopt advanced power electronics technology and are specially designed for wind power systems, widely applicable to various wind farms and environmental conditions. The converters feature a modular design, supporting power ranges from 1.0 MW to 30.0 MW and compatible with multiple voltage levels such as 690V, 950V, and 1140V, meeting both 50Hz and 60Hz frequency requirements. Their liquid-cooled and air-cooled technologies ensure stable operation under extreme temperatures, adapting to harsh environments such as high altitudes and cold regions. Advanced power electronics enable stable energy conversion, intelligent controls optimize turbine operation in real time, and quality components ensure dependable performance.',
    image: '/images/microgrid-wind-converter.png',
    imageAlt: 'Full power wind turbine converter',
    icon: Wind,
  },
  {
    title: 'Customized PV Mounting Structure Solutions',
    description: 'Tailored to various site conditions and construction requirements, our PV mounting systems offer flexible foundation options such as concrete bases, screw piles, direct-buried steel, and floating platforms for water installations. Tracking systems can also be provided upon request. The main structure is made of high-strength, corrosion-resistant zinc-aluminum-magnesium alloy, ensuring excellent durability, deformation resistance, and long-term reliability. With robust performance and an elegant, streamlined design, the system delivers both structural stability and visual harmony.',
    image: '/images/microgrid-pv-mounting.png',
    imageAlt: 'Customized solar PV mounting structure',
    icon: Sun,
  },
  {
    title: 'Energy Management System (EMS)',
    description: 'The SunEvo Microgrid Energy Management System is an intelligent, integrated hardware and software platform designed for efficient operation and optimized control of microgrid systems. It collects real-time operational data and power consumption status from solar PV, wind power, diesel generators, gas gensets, energy storage systems, EV chargers, and loads. Using data acquisition, safety protection, power forecasting, dynamic optimal dispatching, and control execution, the system continuously monitors and analyzes the entire microgrid. It supports multiple energy sources, normal start/stop, power balancing, grid-connected/off-grid switching, black start, and interaction with grid dispatch or virtual power plant platforms. Device control, peak shaving, valley filling, reverse power control, carbon emission optimization, and maximum solar utilization reduce power costs and improve reliability.',
    image: '/images/microgrid-ems.png',
    imageAlt: 'Microgrid energy management system control room',
    icon: Gauge,
  },
  {
    title: 'Cloud Platform',
    description: 'The system supports comprehensive management of data acquisition, plant monitoring, and operation and maintenance for photovoltaic, energy storage, and other renewable power plants. Through a cloud-based big data analytics platform, it enables transparent management, automated O&M, intelligent diagnostics, and data-driven decision-making across all plants. Designed to meet user needs throughout the entire lifecycle of renewable energy projects, it maximizes plant value and safeguards core assets.',
    image: '/images/microgrid-cloud-platform.png',
    imageAlt: 'Cloud platform for renewable energy plant monitoring',
    icon: Gauge,
  },
];

export default function SmartMicrogridPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 pt-16 font-sans">
      <section className="relative w-full">
        {/* Native Image for perfect scaling on desktop */}
        <img
          src="/images/microgrid-hero.png"
          alt="Smart Microgrid Hero"
          className="w-full h-[500px] lg:h-auto lg:max-h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container relative z-10 mx-auto max-w-5xl px-4">
            <Reveal className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-apricot"><Wind className="h-3.5 w-3.5" /> For Utilities &amp; Developers</span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">Grid-Scale Solar, ESS &amp; EV Microgrid Solutions</h1>
              <p className="text-sm md:text-base text-white/90 font-normal leading-relaxed">
                For utilities, EPC partners, and large-scale developers, Sunloop delivers Utility-Scale Solar Plants, Containerized ESS, and public DC fast-charging networks — engineered for grid integration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-9 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4"
            >
              <span className="eyebrow inline-block">INTEGRATED ENERGY ECOSYSTEM</span>
              <h2 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">Wind + PV + ESS + DG Microgrid Solution</h2>
              <p className="text-sm leading-relaxed text-brand-slate">This solution combines renewable power from wind and solar PV, conventional power from diesel and gas gensets, and energy storage into a coordinated “source + storage + load” architecture. It enables both grid-connected collaboration and independent off-grid operation for enhanced reliability and flexibility.</p>
              <p className="text-sm leading-relaxed text-brand-slate">The system supports seamless switching between grid-connected and off-grid modes, ensuring uninterrupted power during faults or outages. Its centralized controller and energy management system optimize generation, storage, and load through intelligent dispatch, power smoothing, peak shaving, and protection functions based on real-time data.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-full bg-brand-primary px-3 py-1.5 text-[11px] font-bold text-white">Off Grid</span>
                <span className="rounded-full border border-brand-primary/25 bg-orange-50 px-3 py-1.5 text-[11px] font-bold text-brand-primary">On/Off Grid</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-md">
                <img src="/images/microgrid-hero.png" alt="Wind, solar, storage and generator microgrid" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl space-y-16 px-4">
          <Reveal className="max-w-2xl space-y-3">
            <span className="eyebrow inline-block">SYSTEM COMPONENTS</span>
            <h2 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">Built for stable, intelligent power</h2>
          </Reveal>
          {microgridComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <div key={component.title} className="grid items-center gap-8 border-b border-black/[0.07] pb-16 last:border-0 last:pb-0 md:grid-cols-2 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-brand-primary"><Icon className="h-5 w-5" /></span>
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-brand-ink md:text-3xl">{component.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-slate">{component.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-md">
                    <img src={component.image} alt={component.imageAlt} className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
