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
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 100%)', padding: '4rem 0 3rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div className="container">
          <div className="badge badge-storage" style={{ marginBottom: '1rem' }}>Store</div>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Energy Storage Systems (ESS)</h1>
          <p style={{ color: 'var(--text-medium)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.6' }}>
            Advanced battery storage solutions powered by Lithium-Ion and LiFePO4 cells. Ensure uninterrupted power backup, maximize self-consumption of your solar energy, support peak shaving, and secure complete energy independence.
          </p>
        </div>
      </section>

      {/* Main Grid content */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* ESS Core Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', position: 'relative' }}>
              Advanced Battery Stack Technology
              <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '40px', height: '3px', backgroundColor: 'var(--color-storage)' }} />
            </h2>
            
            <p style={{ color: 'var(--text-medium)', fontSize: '1rem' }}>
              Our energy storage enclosures utilize premium Lithium Iron Phosphate (LiFePO4) cylindrical cells. Renowned for their safety, thermal stability, and long cycle life, these systems retain over 80% capacity even after 6,000 charge/discharge cycles.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  padding: '1.25rem', 
                  backgroundColor: 'var(--off-white)', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--color-storage)' 
                }}
              >
                <Layers style={{ color: 'var(--color-storage)', flexShrink: 0 }} size={24} />
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Modular Stacking (5 kWh to 50 kWh)</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                    Start small and expand. Each module contains a dedicated Battery Management System (BMS). Up to 10 modules can be stacked in parallel to scale up power output as household demand grows.
                  </p>
                </div>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  padding: '1.25rem', 
                  backgroundColor: 'var(--off-white)', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--color-storage)' 
                }}
              >
                <Zap style={{ color: 'var(--color-storage)', flexShrink: 0 }} size={24} />
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Peak Shaving & Load Shifting</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                    Program the system to charge during low-tariff off-peak hours (or via surplus solar) and discharge during peak grid hours. Slashes demand charges and maximum demand penalties for commercial businesses.
                  </p>
                </div>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  padding: '1.25rem', 
                  backgroundColor: 'var(--off-white)', 
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--color-storage)' 
                }}
              >
                <RefreshCw style={{ color: 'var(--color-storage)', flexShrink: 0 }} size={24} />
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>Micro-Grid Controller Integration</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                    Communicates in real-time with the local grid, diesel generators, and solar arrays to route energy via the most economical pathway, operating entirely automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Block */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.5rem', 
              boxShadow: 'var(--shadow-xl)', 
              border: '1px solid rgba(16,185,129,0.1)', 
              background: 'rgba(255, 255, 255, 0.95)',
              position: 'sticky',
              top: '100px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--color-storage-light)', color: 'var(--color-storage)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                <Battery size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>ESS Backup Calculator</h3>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-medium)' }}>
                    Battery Stack Capacity (kWh)
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--color-storage)' }}>{capacity} kWh</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="5" 
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  style={{ 
                    width: '100%', 
                    accentColor: 'var(--color-storage)',
                    cursor: 'pointer'
                  }}
                  id="capacity-range"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  <span>5 kWh (1 Module)</span>
                  <span>25 kWh</span>
                  <span>50 kWh (10 Modules)</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-medium)' }}>
                    Continuous Power Load (Watts)
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--color-storage)' }}>{load.toLocaleString()} W</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="250" 
                  value={load}
                  onChange={(e) => setLoad(Number(e.target.value))}
                  style={{ 
                    width: '100%', 
                    accentColor: 'var(--color-storage)',
                    cursor: 'pointer'
                  }}
                  id="load-range"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  <span>500 W</span>
                  <span>5,000 W</span>
                  <span>10,000 W</span>
                </div>
              </div>
            </div>

            {/* Calculations Output */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.5rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>USABLE STORAGE</p>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--dark-charcoal)' }}>{(capacity * depthOfDischarge).toFixed(1)} kWh (90% DoD)</h4>
                </div>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>DISCHARGE RATE</p>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--dark-charcoal)' }}>{loadKw.toFixed(2)} kW / hour</h4>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ECFDF5', padding: '1.25rem', borderRadius: '12px', border: '1px solid #A7F3D0' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-storage)', fontWeight: 700 }}>ESTIMATED BACKUP DURATION</p>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--color-storage)' }}>{backupHours} Hours</h4>
                </div>
                <div style={{ fontSize: '2rem' }}>⚡</div>
              </div>

              {/* Dynamic load context box */}
              <div style={{ fontSize: '0.8rem', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--text-light)', color: 'var(--text-medium)' }}>
                <strong style={{ display: 'block', marginBottom: '2px', color: 'var(--dark-charcoal)' }}>Example devices for a {load}W load:</strong>
                {loadDescription}
              </div>
            </div>

            <Link to="/contact?interest=storage" style={{ display: 'block', marginTop: '1.5rem' }}>
              <button className="btn btn-storage" style={{ width: '100%', padding: '0.85rem' }}>
                Inquire About ESS Stack
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Safety Section */}
      <section style={{ backgroundColor: 'var(--dark-charcoal)', color: 'var(--white)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <ShieldCheck size={48} style={{ color: 'var(--color-storage)' }} />
          <h2 style={{ color: 'var(--white)', fontSize: '2rem' }}>Engineered for Extreme Safety</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            LiFePO4 chemistry contains no cobalt and poses zero fire risk from thermal runaway. Combined with our digital Battery Management System (BMS), the system monitors cell voltages, internal temperature, and overcurrent protection 24/7, delivering alerts directly to the Sunloop AI Portal.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Storage;
