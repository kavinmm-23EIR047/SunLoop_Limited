import React, { useState, useEffect } from 'react';
import { 
  Sun, Battery, Car, Cpu, Activity, TrendingUp, AlertTriangle, FileText, CheckCircle2, Play, Settings, RefreshCw, BarChart2
} from 'lucide-react';

const AIPortal = () => {
  // Scenario Configurations
  const scenarios = {
    sunny: {
      name: 'Sunny Day (Optimal)',
      solar: 125.6,
      batterySoc: 85,
      batteryStatus: 'CHARGING',
      evLoad: 42.7,
      health: 98,
      savings: 18750,
      flowSolarToLoad: true,
      flowSolarToBattery: true,
      flowBatteryToLoad: false,
      flowGridToLoad: false,
      logs: [
        'System running in solar-priority self-consumption mode.',
        'Net metering active: Exporting 45.2 kW surplus to grid.',
        'Battery SOC reached 85%, cell balancing active.',
        'EV Charger Bay 1 and Bay 2 draw active power (30kW total).'
      ]
    },
    storm: {
      name: 'Cloudy / Stormy Day',
      solar: 18.2,
      batterySoc: 42,
      batteryStatus: 'DISCHARGING',
      evLoad: 22.4,
      health: 95,
      savings: 12100,
      flowSolarToLoad: true,
      flowSolarToBattery: false,
      flowBatteryToLoad: true,
      flowGridToLoad: true,
      logs: [
        'Irradiance drop detected (85% reduction due to cloud cover).',
        'ESS discharging to compensate for building load shortage.',
        'Grid importing 10.4 kW to cover EV Charging spikes.',
        'Optimizing system settings for peak shaving.'
      ]
    },
    outage: {
      name: 'Grid Outage (Islanding Mode)',
      solar: 82.4,
      batterySoc: 68,
      batteryStatus: 'STANDBY',
      evLoad: 7.4,
      health: 97,
      savings: 15400,
      flowSolarToLoad: true,
      flowSolarToBattery: true,
      flowBatteryToLoad: false,
      flowGridToLoad: false,
      logs: [
        'GRID DISCONNECTION ALERT: Islanding mode triggered.',
        'Diesel Generator backup signal blocked - Solar and ESS sufficient.',
        'Non-critical building loads load-shedded (HVAC restricted).',
        'EV Fast Charging limited to 7.4 kW AC (Bay 1 only).'
      ]
    },
    peak: {
      name: 'Peak EV Charge Hour',
      solar: 104.2,
      batterySoc: 30,
      batteryStatus: 'DISCHARGING',
      evLoad: 180.5,
      health: 99,
      savings: 22400,
      flowSolarToLoad: true,
      flowSolarToBattery: false,
      flowBatteryToLoad: true,
      flowGridToLoad: true,
      logs: [
        'EV Charging peak detected: 4 bays active simultaneously.',
        'Peak Shaving active: ESS discharging at maximum rate (50 kW) to prevent grid demand charge penalties.',
        'Grid importing 45 kW within contracted demand thresholds.',
        'Predictive schedule: Grid charging battery scheduled tonight at 02:00 AM.'
      ]
    }
  };

  const [activeScenario, setActiveScenario] = useState('sunny');
  const [data, setData] = useState(scenarios.sunny);
  const [logHistory, setLogHistory] = useState(scenarios.sunny.logs);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Trigger metrics update when scenario changes
  const selectScenario = (key) => {
    setActiveScenario(key);
    setData(scenarios[key]);
    
    // Animate transition by appending logs
    const timestamp = new Date().toLocaleTimeString();
    const newLogs = [`[${timestamp}] Mode switched to: ${scenarios[key].name}`, ...scenarios[key].logs];
    setLogHistory(newLogs);
  };

  // Add random variance tick to make it feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => {
        const base = scenarios[activeScenario];
        return {
          ...prev,
          solar: +(base.solar + (Math.random() - 0.48) * 1.5).toFixed(1),
          evLoad: +(base.evLoad + (Math.random() - 0.5) * 2.0).toFixed(1),
          batterySoc: Math.min(100, Math.max(5, prev.batterySoc + (base.batteryStatus === 'CHARGING' ? 0.1 : base.batteryStatus === 'DISCHARGING' ? -0.1 : 0)))
        };
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [activeScenario]);

  // Sidebar link details
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <Activity size={18} /> },
    { id: 'solar', name: 'Solar Plants', icon: <Sun size={18} /> },
    { id: 'ess', name: 'Storage (ESS)', icon: <Battery size={18} /> },
    { id: 'ev', name: 'EV Charging', icon: <Car size={18} /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart2 size={18} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={18} /> }
  ];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - var(--header-height))', backgroundColor: '#111827', color: '#F3F4F6' }}>
      
      {/* Sidebar Navigation */}
      <aside 
        style={{ 
          width: '260px', 
          backgroundColor: '#1F2937', 
          borderRight: '1px solid #374151', 
          display: 'none', 
          flexDirection: 'column', 
          padding: '1.5rem 0' 
        }}
        className="portal-sidebar"
      >
        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderBottom: '1px solid #374151', marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#F9FAFB', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>System Nodes</h4>
          <p style={{ color: 'var(--brand-orange)', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-storage)', display: 'inline-block' }} />
            HQ - Coimbatore
          </p>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '0 0.75rem' }}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeTab === item.id ? 'var(--brand-orange)' : 'transparent',
                  color: activeTab === item.id ? '#FFFFFF' : '#9CA3AF',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s'
                }}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Info panel in sidebar */}
        <div style={{ marginTop: 'auto', padding: '1rem 1.5rem' }}>
          <div style={{ backgroundColor: '#111827', padding: '1rem', borderRadius: '8px', border: '1px solid #374151' }}>
            <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 700 }}>TELEMETRY HOST</p>
            <p style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>v2.4.1 - Connected</p>
          </div>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto' }}>
        
        {/* Dashboard Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--brand-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
              Proprietary AI Energy Portal
            </span>
            <h1 style={{ color: '#FFFFFF', fontSize: '1.8rem', fontWeight: 700, marginTop: '2px' }}>
              Welcome to Sunloop AI Portal
            </h1>
          </div>

          {/* Scenario simulator selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#1F2937', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid #374151' }}>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 600 }}>Simulate Scenario:</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {Object.keys(scenarios).map((key) => (
                <button
                  key={key}
                  onClick={() => selectScenario(key)}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: activeScenario === key ? 'var(--brand-orange)' : '#374151',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  id={`scenario-${key}`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Dials / Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          
          {/* Solar Gen Dial */}
          <div style={{ backgroundColor: '#1F2937', padding: '1.5rem', borderRadius: '14px', border: '1px solid #374151', borderTop: '4px solid var(--color-solar)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>Solar Generation</span>
              <Sun size={16} style={{ color: 'var(--color-solar)' }} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', margin: '0.5rem 0' }}>
              {data.solar.toFixed(1)} kW
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
              <TrendingUp size={12} /> Today's Gen: +12.5%
            </div>
          </div>

          {/* Storage Dial */}
          <div style={{ backgroundColor: '#1F2937', padding: '1.5rem', borderRadius: '14px', border: '1px solid #374151', borderTop: '4px solid var(--color-storage)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>Energy Storage SOC</span>
              <Battery size={16} style={{ color: 'var(--color-storage)' }} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', margin: '0.5rem 0' }}>
              {data.batterySoc.toFixed(1)}%
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#374151', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${data.batterySoc}%`, height: '100%', backgroundColor: 'var(--color-storage)', transition: 'width 0.5s' }} />
              </div>
              <span style={{ fontSize: '0.7rem', color: '#9CA3AF', alignSelf: 'flex-end', marginTop: '2px' }}>
                Status: {data.batteryStatus}
              </span>
            </div>
          </div>

          {/* EV Charging Dial */}
          <div style={{ backgroundColor: '#1F2937', padding: '1.5rem', borderRadius: '14px', border: '1px solid #374151', borderTop: '4px solid var(--color-ev)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>EV charging Load</span>
              <Car size={16} style={{ color: 'var(--color-ev)' }} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', margin: '0.5rem 0' }}>
              {data.evLoad.toFixed(1)} kW
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
              <TrendingUp size={12} /> Daily Delivered: 42.7 kWh
            </div>
          </div>

          {/* System Health */}
          <div style={{ backgroundColor: '#1F2937', padding: '1.5rem', borderRadius: '14px', border: '1px solid #374151', borderTop: '4px solid var(--color-portal)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>System Health</span>
              <Cpu size={16} style={{ color: 'var(--color-portal)' }} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', margin: '0.5rem 0' }}>
              {data.health}%
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
              <CheckCircle2 size={12} /> All Nodes Operating Optimally
            </div>
          </div>

        </div>

        {/* Interactive Energy Flow Diagram (High-End CSS SVG Flow) */}
        <div style={{ backgroundColor: '#1F2937', padding: '2rem', borderRadius: '14px', border: '1px solid #374151', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 700 }}>Active Energy Flow Overview</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Visualizing dynamic micro-grid distribution vectors.</p>
          </div>

          {/* Animated Graphic Box */}
          <div style={{ 
            position: 'relative', 
            height: '240px', 
            border: '1px dashed #4B5563', 
            borderRadius: '10px', 
            backgroundColor: '#111827',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '0 2rem',
            overflow: 'hidden'
          }}>
            {/* Grid flow paths underlaid */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              {/* Solar to Load */}
              {data.flowSolarToLoad && (
                <path d="M 120,120 L 330,120" stroke="var(--color-solar)" strokeWidth="3" strokeDasharray="6, 6" style={{ animation: 'dash 10s linear infinite' }} />
              )}
              {/* Solar to Battery */}
              {data.flowSolarToBattery && (
                <path d="M 120,120 L 220,180" stroke="var(--color-storage)" strokeWidth="3" strokeDasharray="6, 6" style={{ animation: 'dash 10s linear infinite' }} />
              )}
              {/* Battery to Load */}
              {data.flowBatteryToLoad && (
                <path d="M 220,180 L 330,120" stroke="var(--color-storage)" strokeWidth="3" strokeDasharray="6, 6" style={{ animation: 'dash-reverse 10s linear infinite' }} />
              )}
              {/* Grid to Load */}
              {data.flowGridToLoad && (
                <path d="M 220,50 L 330,120" stroke="var(--color-portal)" strokeWidth="3" strokeDasharray="6, 6" style={{ animation: 'dash 10s linear infinite' }} />
              )}
              {/* Load to EV */}
              <path d="M 330,120 L 450,120" stroke="var(--color-ev)" strokeWidth="3" strokeDasharray="6, 6" style={{ animation: 'dash 8s linear infinite' }} />
            </svg>

            {/* Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }} className="flow-node">
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-solar-light)', color: 'var(--color-solar)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-solar)' }}>
                <Sun size={28} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '8px' }}>SOLAR</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-solar)', fontWeight: 600 }}>{data.solar.toFixed(0)} kW</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, gap: '40px' }}>
              {/* Grid Node (Top) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(0,122,255,0.1)', color: 'var(--color-portal)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-portal)' }}>
                  <Cpu size={22} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px' }}>GRID</span>
                <span style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>{data.flowGridToLoad ? 'IMPORT' : 'EXPORT'}</span>
              </div>

              {/* Battery Node (Bottom) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-storage-light)', color: 'var(--color-storage)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-storage)' }}>
                  <Battery size={22} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '4px' }}>STORAGE</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--color-storage)' }}>{data.batterySoc.toFixed(0)}% SOC</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }} className="flow-node">
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #9CA3AF' }}>
                <TrendingUp size={28} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '8px' }}>BUILDING</span>
              <span style={{ fontSize: '0.7rem', color: '#FFFFFF' }}>Load Center</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }} className="flow-node">
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-ev-light)', color: 'var(--color-ev)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-ev)' }}>
                <Car size={28} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, marginTop: '8px' }}>EV CHARGING</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-ev)', fontWeight: 600 }}>{data.evLoad.toFixed(0)} kW</span>
            </div>

          </div>
        </div>

        {/* Double Column: Savings & Event Console */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1rem' }} className="grid-2">
          
          {/* Financials & Savings card */}
          <div style={{ backgroundColor: '#1F2937', padding: '1.5rem', borderRadius: '14px', border: '1px solid #374151', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700 }}>Month-to-Date Value</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '1rem', backgroundColor: '#111827', borderRadius: '10px' }}>
                <span style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 600 }}>TOTAL SAVINGS (THIS MONTH)</span>
                <h4 style={{ fontSize: '1.6rem', color: '#10B981', marginTop: '2px' }}>₹{data.savings.toLocaleString()}</h4>
              </div>

              <div style={{ padding: '1rem', backgroundColor: '#111827', borderRadius: '10px' }}>
                <span style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 600 }}>CO₂ DISPLACEMENT CUMULATIVE</span>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-solar)', marginTop: '2px' }}>14.85 Tons</h4>
              </div>
            </div>
            
            <button 
              className="btn btn-secondary" 
              style={{ color: '#FFFFFF', borderColor: '#374151', padding: '0.6rem', fontSize: '0.85rem' }}
              onClick={() => alert('Feature simulated. In production, this compiles utility bills, net-metering schedules, and tariff structures into PDF reports.')}
            >
              <FileText size={15} />
              Export Billing Report
            </button>
          </div>

          {/* Event Logger Console */}
          <div style={{ backgroundColor: '#1F2937', padding: '1.5rem', borderRadius: '14px', border: '1px solid #374151', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700 }}>Real-Time System Log</h3>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            </div>

            <div 
              style={{ 
                flex: 1, 
                backgroundColor: '#111827', 
                borderRadius: '10px', 
                padding: '1rem', 
                fontFamily: 'monospace', 
                fontSize: '0.75rem', 
                color: '#9CA3AF',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                maxHeight: '180px',
                overflowY: 'auto'
              }}
            >
              {logHistory.map((log, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid #1f2937', paddingBottom: '4px', color: idx === 0 ? '#FFFFFF' : '#9CA3AF' }}>
                  {idx === 0 && <span style={{ color: 'var(--brand-orange)', marginRight: '4px' }}>&gt;</span>}
                  {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>

      {/* Embedded Styles for custom portal behaviors */}
      <style>{`
        @media (min-width: 900px) {
          .portal-sidebar {
            display: flex !important;
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        @keyframes dash-reverse {
          to {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
    </div>
  );
};

export default AIPortal;
