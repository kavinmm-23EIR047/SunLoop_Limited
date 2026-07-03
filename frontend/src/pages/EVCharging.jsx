import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Zap, CheckCircle2, ArrowRight, Gauge, Clock, ShieldAlert } from 'lucide-react';

const EVCharging = () => {
  // Calculator state
  const [batterySize, setBatterySize] = useState(40); // EV battery size in kWh
  const [chargerPower, setChargerPower] = useState(7.4); // Charger power in kW

  // Standard charging parameters (10% to 80% charge is the healthy fast-charging range)
  const chargeStart = 10;
  const chargeEnd = 80;
  const chargePercentNeeded = (chargeEnd - chargeStart) / 100; // 0.70
  
  // Charging time in hours
  const chargingTimeHours = +((batterySize * chargePercentNeeded) / chargerPower).toFixed(1);

  // Convert decimal hours to hours and minutes
  const hours = Math.floor(chargingTimeHours);
  const minutes = Math.round((chargingTimeHours - hours) * 60);

  const chargerTypes = [
    { power: 7.4, name: '7.4 kW Smart AC', type: 'AC (Single Phase)', app: 'Residential homes, apartments, overnight charging' },
    { power: 11, name: '11 kW Multi-Phase AC', type: 'AC (Three Phase)', app: 'Workplace parking, shopping malls, retail hubs' },
    { power: 22, name: '22 kW Destination AC', type: 'AC (Three Phase)', app: 'Hotels, public commercial garages, fleet depots' },
    { power: 30, name: '30 kW Express DC', type: 'DC Fast Charger', app: 'Commercial complexes, fleet hubs, small dealerships' },
    { power: 60, name: '60 kW Corridor DC', type: 'DC Fast Charger', app: 'Highway fuel stops, fast-food outlets, fleet operators' },
    { power: 120, name: '120 kW Ultra-Fast DC', type: 'DC Supercharger', app: 'Highways, logistics parks, electric bus terminals' }
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease-out] w-full">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F3E8FF] to-white pt-16 pb-12 border-b border-black/5 w-full">
        <div className="container">
          <div className="badge badge-ev bg-[#EDE9FE] text-[#8B5CF6] mb-4 inline-flex px-3 py-1 text-xs font-bold font-title rounded-full tracking-wider uppercase">Drive</div>
          <h1 className="text-[clamp(1.8rem,5vw,2.75rem)] mb-4 font-bold font-title text-gray-900 leading-tight">EV Charging Infrastructure</h1>
          <p className="text-gray-500 text-[1.15rem] max-w-[850px] leading-relaxed">
            Smart AC and DC charging solutions for residential communities, commercial buildings, industries, fleet operators, and public highway charging networks. Powering the future of electric mobility in India.
          </p>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* EV Charging Core Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[1.8rem] relative font-extrabold font-title text-gray-900">
              High-Speed Charger Specifications
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#8B5CF6]" />
            </h2>
            
            <p className="text-gray-500 text-[1rem] leading-relaxed">
              We install OCPP 1.6J compliant smart chargers equipped with dynamic load balancing, RFID authentication, and cellular/Wi-Fi connectivity. Integrating directly into the Sunloop AI Portal, property managers can handle tariff billing, monitor grid utilization, and schedule charging sessions.
            </p>

            <div className="w-full rounded-xl overflow-hidden border border-black/5 shadow-md">
              <img src="/assets/pdf/sunloop-pdf-p13-02.png" alt="EV Charging Station" className="w-full h-auto block" />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[1.2rem] font-bold font-title text-gray-900">Available Configurations</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-l-[#8B5CF6] shadow-sm">
                  <span className="badge badge-ev bg-[#EDE9FE] text-[#8B5CF6] px-2 py-1 text-xs font-bold font-title rounded-md mb-2 inline-block">EVC AC</span>
                  <h4 className="text-[1.3rem] font-bold text-[#8B5CF6]">7.4 to 22 kW</h4>
                  <p className="text-[0.8rem] text-gray-500 mt-2 leading-relaxed">Compact wallbox designs suitable for residential overnight charging and workplace parking lots.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-l-[#8B5CF6] shadow-sm">
                  <span className="badge badge-ev bg-[#EDE9FE] text-[#8B5CF6] px-2 py-1 text-xs font-bold font-title rounded-md mb-2 inline-block">EVC DC</span>
                  <h4 className="text-[1.3rem] font-bold text-[#8B5CF6]">30 to 240 kW</h4>
                  <p className="text-[0.8rem] text-gray-500 mt-2 leading-relaxed">Liquid-cooled CCS2 dual-gun configurations designed for rapid commercial corridor top-ups.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              {[
                'CCS Type-2 standard connector compatibility',
                'IP54 weatherproofing for outdoor installation',
                'Over-the-air (OTA) software and diagnostic updates',
                'Integration with solar canopy carports'
              ].map((pt, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <CheckCircle2 size={18} className="text-[#8B5CF6]" />
                  <span className="text-[0.88rem] text-gray-500 font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Block */}
          <div className="bg-white/95 backdrop-blur-md p-8 shadow-xl border border-[#8B5CF6]/20 rounded-[18px] lg:sticky lg:top-[100px] w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#EDE9FE] text-[#8B5CF6] p-2.5 rounded-xl flex shrink-0">
                <Clock size={22} />
              </div>
              <h3 className="text-[1.35rem] font-bold font-title text-gray-900">EV Charging Time Estimator</h3>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-6 mb-8">
              
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[0.85rem] font-semibold text-gray-500 uppercase tracking-wide">
                    EV Battery Size (Capacity in kWh)
                  </label>
                  <span className="font-bold text-[1.2rem] text-[#8B5CF6]">{batterySize} kWh</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  step="5" 
                  value={batterySize}
                  onChange={(e) => setBatterySize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
                  id="battery-range"
                />
                <div className="flex justify-between text-[0.75rem] text-gray-400 mt-2 font-medium">
                  <span>20 kWh (Hatch)</span>
                  <span>60 kWh (Sedan)</span>
                  <span>100 kWh (Premium SUV)</span>
                </div>
              </div>

              <div>
                <label className="block text-[0.85rem] font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                  Select Charger Power Output
                </label>
                <select 
                  value={chargerPower} 
                  onChange={(e) => setChargerPower(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-semibold transition-all focus:border-[#8B5CF6] focus:outline-none focus:shadow-[0_0_0_4px_rgba(139,92,246,0.1)] cursor-pointer"
                  id="charger-select"
                >
                  {chargerTypes.map((c) => (
                    <option key={c.power} value={c.power}>
                      {c.name} ({c.type})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Calculations Output */}
            <div className="flex flex-col gap-4 border-t border-black/5 pt-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">TARGET RANGE</p>
                  <h4 className="text-[1.15rem] font-bold text-gray-900">10% to 80% SOC</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">ENERGY TO ADD</p>
                  <h4 className="text-[1.15rem] font-bold text-gray-900">{(batterySize * chargePercentNeeded).toFixed(1)} kWh</h4>
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#F5F3FF] p-5 rounded-xl border border-[#DDD6FE] mt-2">
                <div>
                  <p className="text-[0.75rem] text-[#8B5CF6] font-bold mb-1 tracking-wide">ESTIMATED TIME TO CHARGE</p>
                  <h4 className="text-[1.8rem] font-bold text-[#8B5CF6]">
                    {hours > 0 ? `${hours} hr ` : ''}{minutes} min
                  </h4>
                </div>
                <div className="text-3xl">🚗</div>
              </div>

              {chargerPower <= 22 && (
                <div className="flex gap-2 p-3 bg-orange-50/50 rounded-xl border border-orange-200 border-dashed mt-2">
                  <ShieldAlert size={16} className="text-[#FF6B00] shrink-0 mt-[2px]" />
                  <p className="text-[0.72rem] text-[#FF6B00] leading-[1.4]">
                    Note: Charging speeds on AC chargers depend on your electric vehicle's internal onboard charger capacity (e.g. capped at 3.3 kW, 7.2 kW or 11 kW).
                  </p>
                </div>
              )}
            </div>

            <Link to="/contact?interest=ev" className="block mt-6">
              <button className="w-full bg-[#8B5CF6] text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-[#7C3AED] hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2">
                Request Charging Installation
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default EVCharging;
