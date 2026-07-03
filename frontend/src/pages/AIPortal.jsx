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
    <div className="flex min-h-[calc(100vh-var(--header-height))] bg-gray-900 text-gray-100">
      
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-gray-800 border-r border-gray-700 py-6">
        <div className="px-6 pb-6 border-b border-gray-700 mb-6">
          <h4 className="text-gray-100 text-xs tracking-widest uppercase">System Nodes</h4>
          <p className="text-[#FF6B00] text-sm font-bold flex items-center gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" />
            HQ - Coimbatore
          </p>
        </div>

        <ul className="flex flex-col gap-1 px-3 list-none">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-none text-left cursor-pointer font-semibold text-sm transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-[#FF6B00] text-white' 
                    : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Info panel in sidebar */}
        <div className="mt-auto px-6 py-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-[0.7rem] text-gray-400 font-bold">TELEMETRY HOST</p>
            <p className="text-xs text-[#10B981] font-semibold mt-0.5">v2.4.1 - Connected</p>
          </div>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto w-full">
        
        {/* Dashboard Top bar */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <span className="text-xs text-[#FF6B00] font-bold uppercase">
              Proprietary AI Energy Portal
            </span>
            <h1 className="text-white text-2xl md:text-3xl font-bold mt-1">
              Welcome to Sunloop AI Portal
            </h1>
          </div>

          {/* Scenario simulator selector */}
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl border border-gray-700 overflow-x-auto max-w-full">
            <span className="text-xs text-gray-400 font-semibold whitespace-nowrap">Simulate Scenario:</span>
            <div className="flex gap-1">
              {Object.keys(scenarios).map((key) => (
                <button
                  key={key}
                  onClick={() => selectScenario(key)}
                  className={`px-2.5 py-1.5 rounded-md border-none text-white text-xs font-bold cursor-pointer transition-colors whitespace-nowrap ${
                    activeScenario === key ? 'bg-[#FF6B00]' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  id={`scenario-${key}`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Dials / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          
          {/* Solar Gen Dial */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 border-t-4 border-t-[#FF5C00]">
            <div className="flex justify-between text-gray-400 text-xs font-semibold">
              <span>Solar Generation</span>
              <Sun size={16} className="text-[#FF5C00]" />
            </div>
            <h3 className="text-3xl text-white my-2">
              {data.solar.toFixed(1)} kW
            </h3>
            <div className="flex items-center gap-1 text-xs text-[#10B981] font-bold">
              <TrendingUp size={12} /> Today's Gen: +12.5%
            </div>
          </div>

          {/* Storage Dial */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 border-t-4 border-t-[#10B981]">
            <div className="flex justify-between text-gray-400 text-xs font-semibold">
              <span>Energy Storage SOC</span>
              <Battery size={16} className="text-[#10B981]" />
            </div>
            <h3 className="text-3xl text-white my-2">
              {data.batterySoc.toFixed(1)}%
            </h3>
            <div className="flex flex-col gap-1">
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-[#10B981] transition-all duration-500" style={{ width: `${data.batterySoc}%` }} />
              </div>
              <span className="text-[0.7rem] text-gray-400 self-end mt-0.5">
                Status: {data.batteryStatus}
              </span>
            </div>
          </div>

          {/* EV Charging Dial */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 border-t-4 border-t-[#8B5CF6]">
            <div className="flex justify-between text-gray-400 text-xs font-semibold">
              <span>EV charging Load</span>
              <Car size={16} className="text-[#8B5CF6]" />
            </div>
            <h3 className="text-3xl text-white my-2">
              {data.evLoad.toFixed(1)} kW
            </h3>
            <div className="flex items-center gap-1 text-xs text-[#10B981] font-bold">
              <TrendingUp size={12} /> Daily Delivered: 42.7 kWh
            </div>
          </div>

          {/* System Health */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 border-t-4 border-t-[#007AFF]">
            <div className="flex justify-between text-gray-400 text-xs font-semibold">
              <span>System Health</span>
              <Cpu size={16} className="text-[#007AFF]" />
            </div>
            <h3 className="text-3xl text-white my-2">
              {data.health}%
            </h3>
            <div className="flex items-center gap-1 text-xs text-[#10B981] font-bold">
              <CheckCircle2 size={12} /> All Nodes Operating Optimally
            </div>
          </div>

        </div>

        {/* Interactive Energy Flow Diagram (High-End CSS SVG Flow) */}
        <div className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 flex flex-col gap-6">
          <div>
            <h3 className="text-white text-xl font-bold">Active Energy Flow Overview</h3>
            <p className="text-gray-400 text-sm">Visualizing dynamic micro-grid distribution vectors.</p>
          </div>

          {/* Animated Graphic Box */}
          <div className="relative h-[240px] border border-dashed border-gray-600 rounded-xl bg-gray-900 flex items-center justify-around px-8 overflow-hidden max-w-[720px] mx-auto w-full">
            {/* Grid flow paths underlaid */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
              {/* Solar to Load */}
              {data.flowSolarToLoad && (
                <path d="M 120,120 L 330,120" stroke="#FF5C00" strokeWidth="3" strokeDasharray="6, 6" className="animate-[dash_10s_linear_infinite]" />
              )}
              {/* Solar to Battery */}
              {data.flowSolarToBattery && (
                <path d="M 120,120 L 220,180" stroke="#10B981" strokeWidth="3" strokeDasharray="6, 6" className="animate-[dash_10s_linear_infinite]" />
              )}
              {/* Battery to Load */}
              {data.flowBatteryToLoad && (
                <path d="M 220,180 L 330,120" stroke="#10B981" strokeWidth="3" strokeDasharray="6, 6" className="animate-[dash-reverse_10s_linear_infinite]" />
              )}
              {/* Grid to Load */}
              {data.flowGridToLoad && (
                <path d="M 220,50 L 330,120" stroke="#007AFF" strokeWidth="3" strokeDasharray="6, 6" className="animate-[dash_10s_linear_infinite]" />
              )}
              {/* Load to EV */}
              <path d="M 330,120 L 450,120" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="6, 6" className="animate-[dash_8s_linear_infinite]" />
            </svg>

            {/* Nodes */}
            <div className="flex flex-col items-center z-[1]">
              <div className="w-14 h-14 rounded-full bg-[#FFF2EB] text-[#FF5C00] flex items-center justify-center border-2 border-[#FF5C00]">
                <Sun size={28} />
              </div>
              <span className="text-xs font-bold mt-2 text-white">SOLAR</span>
              <span className="text-[0.7rem] text-[#FF5C00] font-semibold">{data.solar.toFixed(0)} kW</span>
            </div>

            <div className="flex flex-col items-center z-[1] gap-10">
              {/* Grid Node (Top) */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center border-2 border-[#007AFF]">
                  <Cpu size={22} />
                </div>
                <span className="text-xs font-bold mt-1 text-white">GRID</span>
                <span className="text-[0.65rem] text-gray-400">{data.flowGridToLoad ? 'IMPORT' : 'EXPORT'}</span>
              </div>

              {/* Battery Node (Bottom) */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E6F8F3] text-[#10B981] flex items-center justify-center border-2 border-[#10B981]">
                  <Battery size={22} />
                </div>
                <span className="text-xs font-bold mt-1 text-white">STORAGE</span>
                <span className="text-[0.65rem] text-[#10B981]">{data.batterySoc.toFixed(0)}% SOC</span>
              </div>
            </div>

            <div className="flex flex-col items-center z-[1]">
              <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center border-2 border-gray-400">
                <TrendingUp size={28} />
              </div>
              <span className="text-xs font-bold mt-2 text-white">BUILDING</span>
              <span className="text-[0.7rem] text-white">Load Center</span>
            </div>

            <div className="flex flex-col items-center z-[1]">
              <div className="w-14 h-14 rounded-full bg-[#F3E8FF] text-[#8B5CF6] flex items-center justify-center border-2 border-[#8B5CF6]">
                <Car size={28} />
              </div>
              <span className="text-xs font-bold mt-2 text-white">EV CHARGING</span>
              <span className="text-[0.7rem] text-[#8B5CF6] font-semibold">{data.evLoad.toFixed(0)} kW</span>
            </div>

          </div>
        </div>

        {/* Double Column: Savings & Event Console */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 w-full">
          
          {/* Financials & Savings card */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col gap-5">
            <h3 className="text-white text-xl font-bold">Month-to-Date Value</h3>
            
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-gray-900 rounded-xl">
                <span className="text-[0.7rem] text-gray-400 font-semibold">TOTAL SAVINGS (THIS MONTH)</span>
                <h4 className="text-[1.6rem] text-[#10B981] mt-0.5 font-bold">₹{data.savings.toLocaleString()}</h4>
              </div>

              <div className="p-4 bg-gray-900 rounded-xl">
                <span className="text-[0.7rem] text-gray-400 font-semibold">CO₂ DISPLACEMENT CUMULATIVE</span>
                <h4 className="text-[1.4rem] text-[#FF5C00] mt-0.5 font-bold">14.85 Tons</h4>
              </div>
            </div>
            
            <button 
              className="btn btn-secondary text-white border-gray-600 p-2.5 text-sm hover:bg-gray-700" 
              onClick={() => alert('Feature simulated. In production, this compiles utility bills, net-metering schedules, and tariff structures into PDF reports.')}
            >
              <FileText size={15} />
              Export Billing Report
            </button>
          </div>

          {/* Event Logger Console */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-xl font-bold">Real-Time System Log</h3>
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            </div>

            <div className="flex-1 bg-gray-900 rounded-xl p-4 font-mono text-xs text-gray-400 flex flex-col gap-2 max-h-[180px] overflow-y-auto">
              {logHistory.map((log, idx) => (
                <div key={idx} className={`border-b border-gray-800 pb-1 ${idx === 0 ? 'text-white' : 'text-gray-400'}`}>
                  {idx === 0 && <span className="text-[#FF6B00] mr-1">&gt;</span>}
                  {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default AIPortal;
