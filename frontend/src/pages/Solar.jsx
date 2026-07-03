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
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, #FFF6F0 0%, #FFFFFF 100%)', padding: '4rem 0 3rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div className="container">
          <div className="badge badge-solar" style={{ marginBottom: '1rem' }}>Generate</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.75rem)', marginBottom: '1rem' }}>Solar Power Plants</h1>
          <p style={{ color: 'var(--text-medium)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.6' }}>
            High-efficiency solar panels with rooftop system options for residential, and rooftop or ground-mounted system options for commercial, industrial, and utility-scale solar solutions. Designed for maximum energy generation and long-term financial savings.
          </p>
        </div>
      </section>

      <section className="section solar-slide-section">
        <div className="container">
          <div className="solar-slide">
            <div className="solar-slide__grid">
              {solarTypes.map((item) => (
                <article className="solar-type-card" key={item.title}>
                  <div className="solar-type-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="solar-type-card__content">
                    <div className="solar-type-card__icon">{item.icon}</div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', position: 'relative' }}>
              Engineered for Maximum Yield
              <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '40px', height: '3px', backgroundColor: 'var(--color-solar)' }} />
            </h2>
            
            <p style={{ color: 'var(--text-medium)', fontSize: '1rem' }}>
              We partner with Tier-1 manufacturers to supply mono-PERC and half-cut bi-facial solar modules that capture maximum irradiance even on cloudy days. Combined with smart micro or string inverters, our solar plants deliver continuous grid-synchronized AC power.
            </p>

            <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', boxShadow: 'var(--shadow-md)' }}>
              <img src="/assets/pdf/clean/solar-photos.png" alt="Solar Panel Installation" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {tiers.map((tier, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--color-solar)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{tier.name}</h3>
                    <span className="badge badge-solar">{tier.capacity}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '0.5rem' }}>{tier.desc}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>SUITABLE FOR: {tier.suitability}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator Block */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.5rem', 
              boxShadow: 'var(--shadow-xl)', 
              border: '1px solid rgba(255,107,0,0.1)', 
              background: 'rgba(255, 255, 255, 0.95)',
              position: 'sticky',
              top: '100px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--color-solar-light)', color: 'var(--color-solar)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                <Calculator size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Solar Savings Estimator</h3>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.5rem' }}>
                  Select Application Type
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={() => setSector('residential')}
                    style={{ 
                      flex: 1, 
                      padding: '0.6rem', 
                      borderRadius: '8px', 
                      border: '1px solid',
                      borderColor: sector === 'residential' ? 'var(--color-solar)' : 'rgba(0,0,0,0.1)',
                      backgroundColor: sector === 'residential' ? 'var(--color-solar-light)' : 'transparent',
                      color: sector === 'residential' ? 'var(--color-solar)' : 'var(--text-medium)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    Residential
                  </button>
                  <button 
                    onClick={() => setSector('commercial')}
                    style={{ 
                      flex: 1, 
                      padding: '0.6rem', 
                      borderRadius: '8px', 
                      border: '1px solid',
                      borderColor: sector === 'commercial' ? 'var(--color-solar)' : 'rgba(0,0,0,0.1)',
                      backgroundColor: sector === 'commercial' ? 'var(--color-solar-light)' : 'transparent',
                      color: sector === 'commercial' ? 'var(--color-solar)' : 'var(--text-medium)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-medium)' }}>
                    Current Monthly Power Bill
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--color-solar)' }}>₹{bill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="500" 
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  style={{ 
                    width: '100%', 
                    accentColor: 'var(--color-solar)',
                    cursor: 'pointer'
                  }}
                  id="bill-range"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                  <span>₹100,000</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.5rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>SYSTEM SIZE</p>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--dark-charcoal)' }}>{recommendedCapacityKw} kW</h4>
                </div>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>ROOF SPACE</p>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--dark-charcoal)' }}>~{roofSpaceRequired} sq ft</h4>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>EST. COST*</p>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--dark-charcoal)' }}>₹{estimatedCost.toLocaleString()}</h4>
                </div>
                <div style={{ backgroundColor: 'var(--color-solar-light)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-solar)', fontWeight: 700 }}>MONTHLY SAVINGS</p>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-solar)' }}>₹{monthlySavings.toLocaleString()}</h4>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F0FDF4', padding: '1rem', borderRadius: '8px', border: '1px solid #DCFCE7' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-storage)', fontWeight: 700 }}>ESTIMATED PAYBACK PERIOD</p>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--color-storage)' }}>{paybackYears} Years</h4>
                </div>
                <div style={{ fontSize: '2rem' }}>🎉</div>
              </div>

              <p style={{ fontSize: '0.65rem', color: 'var(--text-light)', lineHeight: '1.3', marginTop: '0.5rem' }}>
                *Estimates exclude regional subsidies, net-metering charges, and specific mounting accessory costs. Payback calculation assumes direct capital expenditure.
              </p>
            </div>

            <Link to="/contact?interest=solar" style={{ display: 'block', marginTop: '1.5rem' }}>
              <button className="btn btn-solar" style={{ width: '100%', padding: '0.85rem' }}>
                Request Detailed Solar Quote
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Engineering Process Banner */}
      <section style={{ backgroundColor: 'var(--off-white)', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Our Execution Commitments</h2>
          <div className="grid-3">
            {[
              { icon: <CheckCircle2 size={24} style={{ color: 'var(--color-solar)' }} />, title: 'Premium Engineering', desc: 'We compute precise shadow profiles, wind load limits, and structural tilt configurations customized for Tamil Nadu weather patterns.' },
              { icon: <CheckCircle2 size={24} style={{ color: 'var(--color-solar)' }} />, title: 'Seamless Net-Metering', desc: 'We manage the entire utility board application process, from feasibility check to bi-directional meter commissioning.' },
              { icon: <CheckCircle2 size={24} style={{ color: 'var(--color-solar)' }} />, title: '25-Year Performance Warranty', desc: 'Rest easy with robust long-term equipment warranties, coupled with daily real-time monitoring via the AI portal.' }
            ].map((commit, idx) => (
              <div key={idx} style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ marginBottom: '1rem' }}>{commit.icon}</div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{commit.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>{commit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solar;
