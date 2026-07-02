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
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, #F3E8FF 0%, #FFFFFF 100%)', padding: '4rem 0 3rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div className="container">
          <div className="badge badge-ev" style={{ marginBottom: '1rem' }}>Drive</div>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>EV Charging Infrastructure</h1>
          <p style={{ color: 'var(--text-medium)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.6' }}>
            Smart AC and DC charging solutions for residential communities, commercial buildings, industries, fleet operators, and public highway charging networks. Powering the future of electric mobility in India.
          </p>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* EV Charging Core Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', position: 'relative' }}>
              High-Speed Charger Specifications
              <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '40px', height: '3px', backgroundColor: 'var(--color-ev)' }} />
            </h2>
            
            <p style={{ color: 'var(--text-medium)', fontSize: '1rem' }}>
              We install OCPP 1.6J compliant smart chargers equipped with dynamic load balancing, RFID authentication, and cellular/Wi-Fi connectivity. Integrating directly into the Sunloop AI Portal, property managers can handle tariff billing, monitor grid utilization, and schedule charging sessions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--dark-charcoal)' }}>Available Configurations</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--color-ev)' }}>
                  <span className="badge badge-ev" style={{ marginBottom: '0.5rem' }}>EVC AC</span>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--color-ev)' }}>7.4 to 22 kW</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', marginTop: '0.5rem' }}>Compact wallbox designs suitable for residential overnight charging and workplace parking lots.</p>
                </div>
                
                <div style={{ backgroundColor: 'var(--off-white)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--color-ev)' }}>
                  <span className="badge badge-ev" style={{ marginBottom: '0.5rem' }}>EVC DC</span>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--color-ev)' }}>30 to 240 kW</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', marginTop: '0.5rem' }}>Liquid-cooled CCS2 dual-gun configurations designed for rapid commercial corridor top-ups.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
              {[
                'CCS Type-2 standard connector compatibility',
                'IP54 weatherproofing for outdoor installation',
                'Over-the-air (OTA) software and diagnostic updates',
                'Integration with solar canopy carports'
              ].map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-ev)' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-medium)', fontWeight: 500 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Block */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.5rem', 
              boxShadow: 'var(--shadow-xl)', 
              border: '1px solid rgba(139,92,246,0.1)', 
              background: 'rgba(255, 255, 255, 0.95)',
              position: 'sticky',
              top: '100px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--color-ev-light)', color: 'var(--color-ev)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>EV Charging Time Estimator</h3>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              
              <div>
                <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-medium)' }}>
                    EV Battery Size (Capacity in kWh)
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--color-ev)' }}>{batterySize} kWh</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  step="5" 
                  value={batterySize}
                  onChange={(e) => setBatterySize(Number(e.target.value))}
                  style={{ 
                    width: '100%', 
                    accentColor: 'var(--color-ev)',
                    cursor: 'pointer'
                  }}
                  id="battery-range"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  <span>20 kWh (Hatch)</span>
                  <span>60 kWh (Sedan)</span>
                  <span>100 kWh (Premium SUV)</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.5rem' }}>
                  Select Charger Power Output
                </label>
                <select 
                  value={chargerPower} 
                  onChange={(e) => setChargerPower(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    backgroundColor: 'var(--white)',
                    outline: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.5rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>TARGET RANGE</p>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--dark-charcoal)' }}>10% to 80% SOC</h4>
                </div>
                <div style={{ backgroundColor: 'var(--off-white)', padding: '0.85rem', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>ENERGY TO ADD</p>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--dark-charcoal)' }}>{(batterySize * chargePercentNeeded).toFixed(1)} kWh</h4>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F3FF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #DDD6FE' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-ev)', fontWeight: 700 }}>ESTIMATED TIME TO CHARGE</p>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--color-ev)' }}>
                    {hours > 0 ? `${hours} hr ` : ''}{minutes} min
                  </h4>
                </div>
                <div style={{ fontSize: '2rem' }}>🚗</div>
              </div>

              {chargerPower <= 22 && (
                <div style={{ display: 'flex', gap: '8px', padding: '0.75rem', backgroundColor: 'rgba(255,107,0,0.04)', borderRadius: '8px', border: '1px dashed rgba(255,107,0,0.2)' }}>
                  <ShieldAlert size={16} style={{ color: 'var(--brand-orange)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.72rem', color: 'var(--brand-orange)', lineHeight: '1.3' }}>
                    Note: Charging speeds on AC chargers depend on your electric vehicle's internal onboard charger capacity (e.g. capped at 3.3 kW, 7.2 kW or 11 kW).
                  </p>
                </div>
              )}
            </div>

            <Link to="/contact?interest=ev" style={{ display: 'block', marginTop: '1.5rem' }}>
              <button className="btn btn-ev" style={{ width: '100%', padding: '0.85rem' }}>
                Request Charging Installation
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default EVCharging;
