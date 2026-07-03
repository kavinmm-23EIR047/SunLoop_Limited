import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, CheckCircle2, Calculator, Info, HelpCircle, ArrowRight, Zap, ShieldAlert, Home as HomeIcon, Building2 } from 'lucide-react';

const Solar = () => {
  // Calculator state
  const [bill, setBill] = useState(5000); // Monthly bill in INR
  const [sector, setSector] = useState('residential'); // residential, commercial

  // Calculation parameters based on average Indian grid tariff and generation data
  const averageTariff = sector === 'residential' ? 7.5 : 9.5; // Rs per kWh
  const averageSunHours = 4.2; // Peak sun hours per day
  const monthlyGenerationPerKw = 30 * averageSunHours; // ~126 kWh generated per month per kW installed

  // Calculate values
  const monthlyConsumptionKwh = bill / averageTariff;
  const recommendedCapacityKw = Math.max(1, Math.min(1000, +(monthlyConsumptionKwh / monthlyGenerationPerKw).toFixed(1)));
  
  // Custom pricing tiers (Rs per kW installed)
  let pricePerKw = 75000;
  if (recommendedCapacityKw > 10) pricePerKw = 60000;
  if (recommendedCapacityKw > 50) pricePerKw = 50000;
  if (recommendedCapacityKw > 100) pricePerKw = 45000;

  const estimatedCost = Math.round(recommendedCapacityKw * pricePerKw);
  const monthlySavings = Math.round(Math.min(bill * 0.9, recommendedCapacityKw * monthlyGenerationPerKw * averageTariff));
  const annualSavings = monthlySavings * 12;
  const paybackYears = +(estimatedCost / annualSavings).toFixed(1);
  const roofSpaceRequired = Math.round(recommendedCapacityKw * 95); // 95 sq ft per kW

  const tiers = [
    { name: 'Residential', capacity: '3 kW to 30 kW', desc: 'Optimized for domestic loads, single/three-phase grid connection, net-metering integration.', suitability: 'Villas, independent houses, residential apartments' },
    { name: 'Commercial & Others', capacity: '5 kW to 500 kW', desc: 'Designed to offset high commercial daytime tariffs. Heavy-duty structures with zero-export controllers.', suitability: 'Offices, educational institutions, hospitals, retail shops' },
    { name: 'Utility Scale', capacity: '1 MW & above', desc: 'Ground-mounted high-voltage evacuation systems. Designed for maximum yield and power purchase agreements (PPA).', suitability: 'Solar parks, heavy manufacturing plants, IPPs' }
  ];

  const solarTypes = [
    {
      title: 'Rooftop Solar (Elevated)',
      desc: 'Elevated rooftop solar system for Indian residential homes',
      image: '/assets/pdf/clean/solar-rooftop-elevated.png',
      icon: <HomeIcon size={30} />,
    },
    {
      title: 'Rooftop Solar (Industrial)',
      desc: 'Industrial rooftop solar system for factories and commercial buildings',
      image: '/assets/pdf/clean/solar-rooftop-industrial.png',
      icon: <Building2 size={30} />,
    },
    {
      title: 'Ground Mount Solar Plant',
      desc: 'Large scale ground mounted solar plant for maximum energy generation',
      image: '/assets/pdf/clean/solar-ground-mount.png',
      icon: <Sun size={30} />,
    },
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease-out] w-full">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#FFF6F0] to-white pt-16 pb-12 border-b border-black/5 w-full">
        <div className="container">
          <div className="badge badge-solar bg-[#FFF0E6] text-[#FF5C00] mb-4 inline-flex px-3 py-1 text-xs font-bold font-title rounded-full tracking-wider uppercase">Generate</div>
          <h1 className="text-[clamp(1.8rem,5vw,2.75rem)] mb-4 font-bold font-title text-gray-900 leading-tight">Solar Power Plants</h1>
          <p className="text-gray-500 text-[1.15rem] max-w-[850px] leading-relaxed">
            High-efficiency solar panels with rooftop system options for residential, and rooftop or ground-mounted system options for commercial, industrial, and utility-scale solar solutions. Designed for maximum energy generation and long-term financial savings.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white w-full overflow-hidden">
        <div className="container">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbars">
            {solarTypes.map((item) => (
              <article className="min-w-[300px] sm:min-w-[350px] flex-1 snap-start bg-white rounded-2xl overflow-hidden border border-black/5 shadow-md flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1" key={item.title}>
                <div className="w-full h-[200px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col gap-3 relative flex-1">
                  <div className="absolute -top-10 right-6 bg-white w-16 h-16 rounded-full flex items-center justify-center text-[#FF5C00] shadow-md border border-black/5 z-10">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-bold font-title text-gray-900 pr-14">{item.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Specifications */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[1.8rem] relative font-extrabold font-title text-gray-900">
              Engineered for Maximum Yield
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#FF5C00]" />
            </h2>
            
            <p className="text-gray-500 text-[1rem] leading-relaxed">
              We partner with Tier-1 manufacturers to supply mono-PERC and half-cut bi-facial solar modules that capture maximum irradiance even on cloudy days. Combined with smart micro or string inverters, our solar plants deliver continuous grid-synchronized AC power.
            </p>

            <div className="w-full rounded-xl overflow-hidden border border-black/5 shadow-md">
              <img src="/assets/pdf/clean/solar-photos.png" alt="Solar Panel Installation" className="w-full h-auto block" />
            </div>

            <div className="flex flex-col gap-6">
              {tiers.map((tier, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-md p-6 border-l-4 border-l-[#FF5C00] shadow-md rounded-r-xl border border-black/5">
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <h3 className="text-[1.2rem] font-bold font-title text-gray-900">{tier.name}</h3>
                    <span className="badge badge-solar bg-[#FFF0E6] text-[#FF5C00] px-2 py-1 text-xs font-bold font-title rounded-md">{tier.capacity}</span>
                  </div>
                  <p className="text-[0.9rem] text-gray-500 mb-2 leading-relaxed">{tier.desc}</p>
                  <p className="text-[0.8rem] text-gray-400 font-semibold tracking-wide">SUITABLE FOR: {tier.suitability}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator Block */}
          <div className="bg-white/95 backdrop-blur-md p-8 shadow-xl border border-[#FF5C00]/20 rounded-[18px] lg:sticky lg:top-[100px] w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#FFF0E6] text-[#FF5C00] p-2.5 rounded-xl flex shrink-0">
                <Calculator size={22} />
              </div>
              <h3 className="text-[1.35rem] font-bold font-title text-gray-900">Solar Savings Estimator</h3>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-5 mb-8">
              <div>
                <label className="block text-[0.85rem] font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                  Select Application Type
                </label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSector('residential')}
                    className={`flex-1 p-2.5 rounded-xl border font-bold text-sm transition-all duration-200 ${
                      sector === 'residential' 
                        ? 'border-[#FF5C00] bg-[#FFF0E6] text-[#FF5C00]' 
                        : 'border-gray-200 bg-transparent text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    Residential
                  </button>
                  <button 
                    onClick={() => setSector('commercial')}
                    className={`flex-1 p-2.5 rounded-xl border font-bold text-sm transition-all duration-200 ${
                      sector === 'commercial' 
                        ? 'border-[#FF5C00] bg-[#FFF0E6] text-[#FF5C00]' 
                        : 'border-gray-200 bg-transparent text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 items-end">
                  <label className="text-[0.85rem] font-semibold text-gray-500 uppercase tracking-wide">
                    Current Monthly Power Bill
                  </label>
                  <span className="font-bold text-[1.2rem] text-[#FF5C00]">₹{bill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="500" 
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5C00]"
                  id="bill-range"
                />
                <div className="flex justify-between text-[0.75rem] text-gray-400 mt-2 font-medium">
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                  <span>₹100,000</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col gap-4 border-t border-black/5 pt-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">SYSTEM SIZE</p>
                  <h4 className="text-[1.25rem] font-bold text-gray-900">{recommendedCapacityKw} kW</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">ROOF SPACE</p>
                  <h4 className="text-[1.25rem] font-bold text-gray-900">~{roofSpaceRequired} sq ft</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-black/5">
                  <p className="text-[0.75rem] text-gray-400 font-bold mb-1 tracking-wide">EST. COST*</p>
                  <h4 className="text-[1.25rem] font-bold text-gray-900">₹{estimatedCost.toLocaleString()}</h4>
                </div>
                <div className="bg-[#FFF0E6] p-4 rounded-xl border border-[#FF5C00]/20">
                  <p className="text-[0.75rem] text-[#FF5C00] font-bold mb-1 tracking-wide">MONTHLY SAVINGS</p>
                  <h4 className="text-[1.25rem] font-bold text-[#FF5C00]">₹{monthlySavings.toLocaleString()}</h4>
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#F0FDF4] p-4 rounded-xl border border-[#DCFCE7] mt-2">
                <div>
                  <p className="text-[0.75rem] text-[#10B981] font-bold mb-1 tracking-wide">ESTIMATED PAYBACK PERIOD</p>
                  <h4 className="text-[1.4rem] font-bold text-[#10B981]">{paybackYears} Years</h4>
                </div>
                <div className="text-3xl">🎉</div>
              </div>

              <p className="text-[0.65rem] text-gray-400 leading-[1.4] mt-2">
                *Estimates exclude regional subsidies, net-metering charges, and specific mounting accessory costs. Payback calculation assumes direct capital expenditure.
              </p>
            </div>

            <Link to="/contact?interest=solar" className="block mt-6">
              <button className="w-full bg-[#FF5C00] text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-[#E05200] hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_rgba(255,92,0,0.3)] flex items-center justify-center gap-2">
                Request Detailed Solar Quote
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Engineering Process Banner */}
      <section className="bg-gray-50 py-20 w-full border-t border-black/5">
        <div className="container">
          <h2 className="text-center mb-12 text-3xl font-extrabold font-title text-gray-900">Our Execution Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle2 size={24} className="text-[#FF5C00]" />, title: 'Premium Engineering', desc: 'We compute precise shadow profiles, wind load limits, and structural tilt configurations customized for Tamil Nadu weather patterns.' },
              { icon: <CheckCircle2 size={24} className="text-[#FF5C00]" />, title: 'Seamless Net-Metering', desc: 'We manage the entire utility board application process, from feasibility check to bi-directional meter commissioning.' },
              { icon: <CheckCircle2 size={24} className="text-[#FF5C00]" />, title: '25-Year Performance Warranty', desc: 'Rest easy with robust long-term equipment warranties, coupled with daily real-time monitoring via the AI portal.' }
            ].map((commit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-black/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 bg-[#FFF0E6] w-12 h-12 flex items-center justify-center rounded-xl">{commit.icon}</div>
                <h4 className="text-[1.1rem] font-bold font-title text-gray-900 mb-2">{commit.title}</h4>
                <p className="text-[0.9rem] text-gray-500 leading-relaxed">{commit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solar;
