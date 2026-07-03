import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, RefreshCw, Layers } from 'lucide-react';

const Storage = () => {
  // Calculator state
  const [capacity, setCapacity] = useState(15); // Stacked battery capacity in kWh
  const [load, setLoad] = useState(1500); // Continuous electrical load in Watts

  // Calculation parameters
  const depthOfDischarge = 0.9; // 90% DoD for LiFePO4
  const inverterEfficiency = 0.92; // 92% conversion efficiency
  const usableKwh = capacity * depthOfDischarge * inverterEfficiency;
  const loadKw = load / 1000;
  
  // Calculate backup duration
  const backupHours = +(usableKwh / loadKw).toFixed(1);

  // Helper text on load capacity limits
  let loadDescription = "Basic appliances (LED lights, ceiling fans, Wi-Fi router, TV)";
  if (load > 2000) loadDescription = "Basic appliances + refrigerator, microwave oven, and water pump";
  if (load > 5000) loadDescription = "Medium household load + 2 air conditioners running simultaneously";
  if (load > 8000) loadDescription = "Full luxury home or commercial office setup, including multiple HVACs";

  return (
    <div className="animate-[fadeIn_0.4s_ease-out] w-full">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#ECFDF5] to-white pt-16 pb-12 border-b border-black/5 w-full">
        <div className="container">
          <div className="badge badge-storage bg-[#E6F8F3] text-[#10B981] mb-4 inline-flex px-3 py-1 text-xs font-bold font-title rounded-full tracking-wider uppercase">Store</div>
          <h1 className="text-[clamp(1.8rem,5vw,2.75rem)] mb-4 font-bold font-title text-gray-900 leading-tight">Energy Storage Systems (ESS)</h1>
          <p className="text-gray-500 text-[1.15rem] max-w-[850px] leading-relaxed">
            Advanced battery storage solutions powered by Lithium-Ion and LiFePO4 cells. Ensure uninterrupted power backup, maximize self-consumption of your solar energy, support peak shaving, and secure complete energy independence.
          </p>
        </div>
      </section>

      {/* Main Grid content */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* ESS Core Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[1.8rem] relative font-extrabold font-title text-gray-900">
              Advanced Battery Stack Technology
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#10B981]" />
            </h2>
            
            <p className="text-gray-500 text-[1rem] leading-relaxed">
              Our energy storage enclosures utilize premium Lithium Iron Phosphate (LiFePO4) cylindrical cells. Renowned for their safety, thermal stability, and long cycle life, these systems retain over 80% capacity even after 6,000 charge/discharge cycles.
            </p>

            <div className="w-full rounded-xl overflow-hidden border border-black/5 shadow-md">
              <img src="/assets/pdf/clean/ess-photos.png" alt="Battery Storage Enclosure" className="w-full h-auto block" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border-l-4 border-l-[#10B981] border border-black/5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <Layers className="text-[#10B981] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[1.05rem] font-title text-gray-900 mb-1">Modular Stacking (5 kWh to 50 kWh)</h4>
                  <p className="text-[0.85rem] text-gray-500 leading-relaxed">
                    Start small and expand. Each module contains a dedicated Battery Management System (BMS). Up to 10 modules can be stacked in parallel to scale up power output as household demand grows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border-l-4 border-l-[#10B981] border border-black/5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <Zap className="text-[#10B981] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[1.05rem] font-title text-gray-900 mb-1">Peak Shaving & Load Shifting</h4>
                  <p className="text-[0.85rem] text-gray-500 leading-relaxed">
                    Program the system to charge during low-tariff off-peak hours (or via surplus solar) and discharge during peak grid hours. Slashes demand charges and maximum demand penalties for commercial businesses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border-l-4 border-l-[#10B981] border border-black/5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <RefreshCw className="text-[#10B981] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[1.05rem] font-title text-gray-900 mb-1">Micro-Grid Controller Integration</h4>
                  <p className="text-[0.85rem] text-gray-500 leading-relaxed">
                    Communicates in real-time with the local grid, diesel generators, and solar arrays to route energy via the most economical pathway, operating entirely automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Block */}
          <div className="bg-white/95 backdrop-blur-md p-8 shadow-xl border border-[#10B981]/20 rounded-[18px] lg:sticky lg:top-[100px] w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6F8F3] text-[#10B981] p-2.5 rounded-xl flex shrink-0">
                <Battery size={22} />
              </div>
              <h3 className="text-[1.35rem] font-bold font-title text-gray-900">ESS Backup Calculator</h3>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-6 mb-8">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[0.85rem] font-semibold text-gray-500 uppercase tracking-wide">
                    Battery Stack Capacity (kWh)
                  </label>
                  <span className="font-bold text-[1.2rem] text-[#10B981]">{capacity} kWh</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="5" 
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  id="capacity-range"
                />
                <div className="flex justify-between text-[0.75rem] text-gray-400 mt-2 font-medium">
                  <span>5 kWh (1 Module)</span>
                  <span>25 kWh</span>
                  <span>50 kWh (10 Modules)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[0.85rem] font-semibold text-gray-500 uppercase tracking-wide">
                    Continuous Power Load (Watts)
                  </label>
                  <span className="font-bold text-[1.2rem] text-[#10B981]">{load.toLocaleString()} W</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="250" 
                  value={load}
                  onChange={(e) => setLoad(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  id="load-range"
                />
                <div className="flex justify-between text-[0.75rem] text-gray-400 mt-2 font-medium">
                  <span>500 W</span>
                  <span>5,000 W</span>
                  <span>10,000 W</span>
                </div>
              </div>
            </div>

            {/* Calculations Output */}
            <div className="flex flex-col gap-4 border-t border-black/5 pt-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">USABLE STORAGE</p>
                  <h4 className="text-[1.15rem] font-bold text-gray-900">{(capacity * depthOfDischarge).toFixed(1)} kWh (90% DoD)</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">DISCHARGE RATE</p>
                  <h4 className="text-[1.15rem] font-bold text-gray-900">{loadKw.toFixed(2)} kW / hour</h4>
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#ECFDF5] p-5 rounded-xl border border-[#A7F3D0] mt-2">
                <div>
                  <p className="text-[0.75rem] text-[#10B981] font-bold mb-1 tracking-wide">ESTIMATED BACKUP DURATION</p>
                  <h4 className="text-[1.8rem] font-bold text-[#10B981]">{backupHours} Hours</h4>
                </div>
                <div className="text-3xl">⚡</div>
              </div>

              {/* Dynamic load context box */}
              <div className="text-[0.8rem] p-4 bg-black/5 rounded-xl border-l-4 border-l-gray-400 text-gray-500 mt-2">
                <strong className="block mb-1 text-gray-900 font-bold">Example devices for a {load}W load:</strong>
                {loadDescription}
              </div>
            </div>

            <Link to="/contact?interest=storage" className="block mt-6">
              <button className="w-full bg-[#10B981] text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-[#0E9F6E] hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
                Inquire About ESS Stack
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-[#1F2937] text-white py-20 w-full">
        <div className="container max-w-[800px] text-center flex flex-col gap-6 items-center">
          <ShieldCheck size={48} className="text-[#10B981]" />
          <h2 className="text-white text-3xl font-extrabold font-title">Engineered for Extreme Safety</h2>
          <p className="text-gray-400 text-[1.05rem] leading-relaxed">
            LiFePO4 chemistry contains no cobalt and poses zero fire risk from thermal runaway. Combined with our digital Battery Management System (BMS), the system monitors cell voltages, internal temperature, and overcurrent protection 24/7, delivering alerts directly to the Sunloop AI Portal.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Storage;
