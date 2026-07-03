export default function AIPortal() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Solar Generation", value: "125.6 kW", sub: "+12.5% today", icon: "sun" },
          { label: "Energy Storage", value: "85%", sub: "Battery SOC", icon: "battery" },
          { label: "EV Charging", value: "42.7 kWh", sub: "Delivered today", icon: "zap" },
          { label: "CO2 Reduced", value: "2.35 t", sub: "This month", icon: "leaf" }
        ].map((stat, i) => (
          <div key={i} className="bg-[#151c2c] border border-gray-800 p-6 rounded-sm shadow-lg">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2 italic">{stat.label}</p>
            <h3 className="text-3xl font-bold text-white mb-2 italic">{stat.value}</h3>
            <p className="text-[#4CAF50] text-xs font-bold italic">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Wider) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#151c2c] border border-gray-800 p-6 rounded-sm shadow-lg min-h-[400px] flex flex-col">
            <h3 className="text-lg font-bold italic mb-6">Real-Time Power Flow</h3>
            <div className="flex-1 flex items-center justify-center relative">
              {/* Dummy diagram for power flow */}
              <div className="grid grid-cols-3 gap-8 items-center w-full max-w-lg">
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-sm text-center">
                  <div className="text-[#f3c221] mb-2"><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg></div>
                  <strong className="italic block text-sm">Solar</strong>
                  <span className="text-xs text-gray-400 italic">Generating</span>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-full h-1 bg-gradient-to-r from-[#f3c221] to-[#4CAF50] rounded-full relative overflow-hidden">
                     <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-white/50 animate-[slide_2s_linear_infinite]"></div>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] rounded-full mt-8 relative overflow-hidden">
                     <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-white/50 animate-[slide_2s_linear_infinite]"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-sm text-center">
                    <div className="text-[#4CAF50] mb-2"><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="4" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="4" x2="4" y1="11" y2="13"/></svg></div>
                    <strong className="italic block text-sm">ESS</strong>
                    <span className="text-xs text-gray-400 italic">Charging</span>
                  </div>
                  <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-sm text-center">
                    <div className="text-[#2196F3] mb-2"><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"/><path d="M22 10v4"/><path d="M19 12h3"/></svg></div>
                    <strong className="italic block text-sm">Facility</strong>
                    <span className="text-xs text-gray-400 italic">Consuming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-[#151c2c] border border-gray-800 p-6 rounded-sm shadow-lg">
            <h3 className="text-lg font-bold italic mb-4">System Alerts</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-800/50 border-l-2 border-[#fd6206] rounded-r-sm">
                <p className="text-sm font-bold italic">Peak Demand Approaching</p>
                <p className="text-xs text-gray-400 italic mt-1">AI shifting load to ESS in 15 mins.</p>
              </div>
              <div className="p-3 bg-gray-800/50 border-l-2 border-[#4CAF50] rounded-r-sm">
                <p className="text-sm font-bold italic">Battery Fully Charged</p>
                <p className="text-xs text-gray-400 italic mt-1">ESS #2 reached 100% capacity.</p>
              </div>
              <div className="p-3 bg-gray-800/50 border-l-2 border-gray-500 rounded-r-sm">
                <p className="text-sm font-bold italic">Firmware Update</p>
                <p className="text-xs text-gray-400 italic mt-1">Inverter 3 scheduled for update tonight.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1c2748] to-[#101624] border border-[#2a3861] p-6 rounded-sm shadow-lg">
            <h3 className="text-lg font-bold italic mb-2 text-white">AI Assistant</h3>
            <p className="text-sm text-gray-300 italic mb-4">Sunloop intelligence has analyzed your energy patterns.</p>
            <ul className="space-y-2 text-sm italic text-gray-200">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                EV charging speeds optimized for current solar output.
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Saved $120 today by avoiding peak grid rates.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
