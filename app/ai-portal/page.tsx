'use client';

import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Search,
  Plus,
  Settings,
  Bell,
  Share2,
  Paperclip,
  Lightbulb,
  Image as ImageIcon,
  BarChart3,
  Sun,
  BatteryCharging,
  CarFront,
  Zap,
  Cpu,
  ChevronDown,
  ArrowUpRight,
  RefreshCw,
  MessageSquare,
  LayoutDashboard,
  Activity,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

type NavTab =
  | 'chat'
  | 'dashboard'
  | 'solar'
  | 'ess'
  | 'ev'
  | 'robots'
  | 'designer';

export default function AIPortalPage() {
  const [activeTab, setActiveTab] = useState<NavTab>('chat');
  const [model, setModel] = useState('SunLoop AI Energy Core v4.2');
  const [searchQuery, setSearchQuery] = useState('');
  const [promptInput, setPromptInput] = useState('');
  const [activeMode, setActiveMode] = useState<'reasoning' | 'image' | 'research' | null>('reasoning');
  const [isGenerating, setIsGenerating] = useState(false);

  // Chat conversation state
  const [chatHistory, setChatHistory] = useState<
    Array<{
      id: string;
      sender: 'user' | 'ai';
      text: string;
      metrics?: { solar: string; battery: string; gridSavings: string; co2: string };
      robotAction?: string;
      time: string;
    }>
  >([
    {
      id: '1',
      sender: 'ai',
      text: 'Good morning, Howard. All 3 autonomous robot agents are operating normally with zero faults detected. Solar arrays are generating at 94.2% peak efficiency. How can I assist you today?',
      time: '09:00 AM',
      metrics: {
        solar: '38.4 kW',
        battery: '89.2 kWh (88%)',
        gridSavings: '₹14,850 today',
        co2: '184.2 kg saved',
      },
    },
  ]);

  // Katteb-style Quick Cards
  const quickCards = [
    {
      id: 'solar-forecast',
      title: 'Solar Yield Forecast',
      subtitle: 'Predict next 7-day solar generation based on satellite cloud radar...',
      icon: Sun,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      prompt: 'Predict solar yield forecast for the next 7 days based on current satellite cloud cover.',
    },
    {
      id: 'peak-shaving',
      title: 'Peak Load Shaver',
      subtitle: 'Generate battery discharge strategy to minimize peak demand tariffs...',
      icon: BatteryCharging,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      prompt: 'Formulate an automated ESS battery discharge schedule from 6:00 PM to 9:30 PM.',
    },
    {
      id: 'carbon-audit',
      title: 'ESG Carbon Audit',
      subtitle: 'Summarize monthly CO₂ offset metrics for corporate ESG compliance...',
      icon: BarChart3,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      prompt: 'Generate an executive ESG carbon offset audit summary for this quarter.',
    },
    {
      id: 'robot-fleet',
      title: 'Robot Fleet Diagnostics',
      subtitle: 'Execute autonomous diagnostic script for inverter string performance...',
      icon: Bot,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      prompt: 'Dispatch Robot Agent Alpha to perform live thermal diagnostics across all 12 inverters.',
    },
  ];

  const handleExecutePrompt = (customPrompt?: string) => {
    const query = customPrompt || promptInput;
    if (!query.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatHistory((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        text: query,
        time: timeStr,
      },
    ]);
    if (!customPrompt) setPromptInput('');
    setIsGenerating(true);

    setTimeout(() => {
      let aiText = '';
      let robotAction = '';

      if (query.toLowerCase().includes('solar')) {
        aiText = `☀️ **Solar Yield Forecast Analysis**\n\nSatellite cloud models indicate peak solar irradiance between 12:15 PM and 2:45 PM.\n- **Expected Peak Generation**: 48.6 kW\n- **7-Day Cumulative Production**: 1,420 kWh\n- **System Efficiency Index**: 98.4%`;
        robotAction = 'Robot Bot Alpha: Aligned panel tracking angles to 22.5° S.';
      } else if (query.toLowerCase().includes('battery') || query.toLowerCase().includes('ess') || query.toLowerCase().includes('peak')) {
        aiText = `⚡ **ESS Peak Shaving Strategy**\n\nAutomated battery discharge cycle configured:\n- **Discharge Period**: 18:00 - 21:30 hrs\n- **Discharge Output**: 35 kW continuous\n- **Estimated Peak Tariff Saved**: ₹4,820 today`;
        robotAction = 'Robot Bot Beta: Configured inverter peak shaver relay.';
      } else if (query.toLowerCase().includes('carbon') || query.toLowerCase().includes('esg')) {
        aiText = `📊 **ESG & Carbon Offset Summary**\n\nQuarter-to-date sustainability metrics:\n- **Clean Energy Generated**: 14,890 kWh\n- **CO₂ Offset Equivalent**: 12.8 metric tons (~580 mature trees)\n- **Grid Offset**: 74.2%`;
      } else {
        aiText = `✨ **SunLoop AI Response** (${model})\n\nProcessed query: "${query}". All connected microgrid nodes (Solar PV, Battery ESS, EV Chargers) are synchronized and running at peak performance.`;
        robotAction = 'Autonomous Robot Fleet: System diagnostic clean & healthy.';
      }

      setChatHistory((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: aiText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          metrics: {
            solar: '44.2 kW',
            battery: '92.4 kWh',
            gridSavings: '₹18,400',
            co2: '210.5 kg',
          },
          robotAction,
        },
      ]);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-brand-ink pt-20 font-sans">
      {/* Top Banner Notice */}
      <div className="bg-brand-ink text-white text-xs py-2 px-4 border-b border-white/10 flex items-center justify-between">
        <div className="container flex items-center justify-between font-medium">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <strong className="text-white font-semibold">SUNLOOP AI PORTAL DASHBOARD</strong> — Clean Solid &amp; Professional Interface
          </span>
          <span className="hidden sm:flex items-center gap-4 text-white/80 text-[11px]">
            <span>Model: <b className="text-white font-semibold">{model}</b></span>
            <span>Bots: <b className="text-green-400 font-semibold">3 Active</b></span>
          </span>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-112px)] overflow-hidden">
        {/* LEFT SIDEBAR (Solid Katteb layout - Zero Gradients) */}
        <aside className="w-64 shrink-0 bg-white border-r border-black/10 flex flex-col justify-between hidden md:flex">
          <div className="p-4">
            {/* Logo Header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-black/10">
              <Link href="/" className="flex items-center gap-2.5 text-base font-bold text-brand-ink">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-primary text-white font-extrabold text-xs">
                  S
                </span>
                <span>
                  Katteb<span className="text-brand-primary">AI</span> Portal
                </span>
              </Link>
              <span className="rounded-md bg-black/5 border border-black/10 px-2 py-0.5 text-[10px] font-semibold text-brand-slate uppercase">
                Solid UI
              </span>
            </div>

            {/* Search Input in Sidebar */}
            <div className="relative mb-5">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-brand-slate" />
              <input
                type="text"
                placeholder="Search ⌘P"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-[#F8F9FA] pl-8 pr-3 py-2 text-xs border border-black/10 text-brand-ink focus:outline-none focus:border-brand-primary transition font-medium"
              />
            </div>

            {/* MAIN NAVIGATION */}
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 px-2">
                Main Navigation
              </p>
              <nav className="space-y-1 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left ${
                    activeTab === 'chat'
                      ? 'bg-[#FAFAF3] border border-black/10 text-brand-ink font-semibold'
                      : 'text-brand-slate hover:bg-[#F8F9FA] hover:text-brand-ink'
                  }`}
                >
                  <MessageSquare className="h-4 w-4 text-brand-primary" />
                  SunLoop AI Assistant
                </button>

                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left ${
                    activeTab === 'dashboard'
                      ? 'bg-[#FAFAF3] border border-black/10 text-brand-ink font-semibold'
                      : 'text-brand-slate hover:bg-[#F8F9FA] hover:text-brand-ink'
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4 text-blue-600" />
                  Live Dashboard
                </button>

                <button
                  onClick={() => setActiveTab('solar')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left ${
                    activeTab === 'solar'
                      ? 'bg-[#FAFAF3] border border-black/10 text-brand-ink font-semibold'
                      : 'text-brand-slate hover:bg-[#F8F9FA] hover:text-brand-ink'
                  }`}
                >
                  <Sun className="h-4 w-4 text-amber-600" />
                  Solar Yield Predictor
                </button>

                <button
                  onClick={() => setActiveTab('ess')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left ${
                    activeTab === 'ess'
                      ? 'bg-[#FAFAF3] border border-black/10 text-brand-ink font-semibold'
                      : 'text-brand-slate hover:bg-[#F8F9FA] hover:text-brand-ink'
                  }`}
                >
                  <BatteryCharging className="h-4 w-4 text-emerald-600" />
                  ESS Battery Arbitrage
                </button>

                <button
                  onClick={() => setActiveTab('ev')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left ${
                    activeTab === 'ev'
                      ? 'bg-[#FAFAF3] border border-black/10 text-brand-ink font-semibold'
                      : 'text-brand-slate hover:bg-[#F8F9FA] hover:text-brand-ink'
                  }`}
                >
                  <CarFront className="h-4 w-4 text-purple-600" />
                  EV Fleet Charging
                </button>

                <button
                  onClick={() => setActiveTab('robots')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition ${
                    activeTab === 'robots'
                      ? 'bg-[#FAFAF3] border border-black/10 text-brand-ink font-semibold'
                      : 'text-brand-slate hover:bg-[#F8F9FA] hover:text-brand-ink'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Bot className="h-4 w-4 text-teal-600" />
                    Robot Autonomous Bots
                  </span>
                  <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-[9px] font-bold text-green-700">
                    3 Active
                  </span>
                </button>
              </nav>
            </div>

            {/* OPTIMIZATION TOOLS */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 px-2">
                Optimization
              </p>
              <nav className="space-y-1 text-xs font-medium text-brand-slate">
                <button
                  onClick={() => handleExecutePrompt('Run ESG carbon audit and solar efficiency report.')}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F8F9FA] hover:text-brand-ink transition text-left"
                >
                  <BarChart3 className="h-3.5 w-3.5 text-brand-primary" />
                  Carbon &amp; ESG Audit
                </button>
                <button
                  onClick={() => handleExecutePrompt('Run AI Rewriter on solar yield dispatch parameters.')}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F8F9FA] hover:text-brand-ink transition text-left"
                >
                  <Cpu className="h-3.5 w-3.5 text-blue-600" />
                  AI Grid Optimizer
                </button>
              </nav>
            </div>
          </div>

          {/* Bottom Sidebar Profile & Plan */}
          <div className="p-4 space-y-3 border-t border-black/10 bg-[#FAFAF3]">
            <div className="rounded-xl border border-black/10 bg-white p-3 shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-brand-ink text-white font-bold text-xs">
                  K
                </span>
                <strong className="text-xs font-semibold text-brand-ink">
                  Katteb Autonomous Pro
                </strong>
              </div>
              <p className="text-[11px] text-brand-slate mb-2 font-normal">
                Unlock autonomous robot control &amp; unlimited cloud analytics.
              </p>
              <button className="w-full rounded-xl bg-brand-primary py-1.5 text-xs font-semibold text-white hover:bg-[#c95315] transition">
                Subscribe Now
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="h-8 w-8 rounded-full bg-brand-ink text-white flex items-center justify-center font-bold text-xs">
                AR
              </div>
              <div className="overflow-hidden text-xs">
                <p className="font-semibold text-brand-ink truncate">Arafat Rahman</p>
                <p className="text-[10px] text-brand-slate truncate">uiuxarafat54@gmail.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN WORKSPACE AREA */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Top Header Bar */}
          <header className="bg-white border-b border-black/10 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="appearance-none rounded-xl border border-black/10 bg-[#FAFAF3] px-3.5 py-1.5 pr-8 text-xs font-semibold text-brand-ink focus:outline-none focus:border-brand-primary cursor-pointer transition"
                >
                  <option value="SunLoop AI Energy Core v4.2">Katteb v (SunLoop AI Core v4.2)</option>
                  <option value="Neural Grid Optimizer v2">Neural Grid Optimizer v2</option>
                  <option value="Robot Agent Fleet Bot">Robot Agent Fleet Bot</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-2.5 h-3.5 w-3.5 pointer-events-none text-brand-slate" />
              </div>
            </div>

            <div className="hidden lg:flex items-center max-w-sm w-full relative">
              <Search className="absolute left-3 h-3.5 w-3.5 text-brand-slate" />
              <input
                type="text"
                placeholder="Search commands, telemetry or robot logs... ⌘P"
                className="w-full rounded-xl bg-[#F8F9FA] pl-9 pr-4 py-1.5 text-xs border border-black/10 text-brand-ink focus:outline-none focus:border-brand-primary transition"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setChatHistory([
                    {
                      id: Date.now().toString(),
                      sender: 'ai',
                      text: 'New session initialized. How can I assist you with your clean energy grid today?',
                      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ]);
                }}
                className="flex items-center gap-1.5 rounded-xl bg-brand-ink px-3 py-1.5 text-xs font-semibold text-white hover:bg-black transition"
              >
                <Plus className="h-3.5 w-3.5" /> + New Chat
              </button>

              <button className="rounded-xl border border-black/10 p-2 text-brand-slate hover:bg-[#F8F9FA] transition">
                <Settings className="h-4 w-4" />
              </button>
              <button className="rounded-xl border border-black/10 p-2 text-brand-slate hover:bg-[#F8F9FA] transition">
                <Bell className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 rounded-xl border border-black/10 px-3 py-1.5 text-xs font-semibold text-brand-ink hover:bg-[#F8F9FA] transition">
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
            </div>
          </header>

          {/* MAIN PAGE BODY CONTENT */}
          <div className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full space-y-8">
            {/* KATTEB INSPIRED HERO CENTER PIECE (Clean Solid - Poppins Font) */}
            {activeTab === 'chat' && (
              <div className="text-center space-y-6 pt-2">
                {/* Central AI Logo Avatar */}
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-ink text-white font-bold text-2xl shadow-sm border border-black/10">
                  <span>K</span>
                </div>

                {/* Big Title & Subtitle matching Katteb Image layout */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-brand-ink tracking-tight">
                    Good Morning, Howard
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold mt-1 text-brand-ink">
                    How Can I <span className="text-blue-600">Assist You Today?</span>
                  </h2>
                </div>

                {/* FLOATING PROMPT CARD CONTAINER (Exact match to Katteb design - Solid White) */}
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-card text-left relative max-w-2xl mx-auto transition">
                  <textarea
                    rows={3}
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleExecutePrompt();
                      }
                    }}
                    placeholder="Initiate a query or send a command to the AI..."
                    className="w-full resize-none border-none text-xs text-brand-ink placeholder:text-brand-slate focus:outline-none bg-transparent font-medium"
                  />

                  {/* Input Footer Action Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-black/10 mt-2 text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-lg p-1.5 text-brand-slate hover:bg-[#F8F9FA] transition"
                        title="Attach file"
                      >
                        <Paperclip className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveMode(activeMode === 'reasoning' ? null : 'reasoning')}
                        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold border transition ${
                          activeMode === 'reasoning'
                            ? 'bg-amber-50 border-amber-300 text-amber-800'
                            : 'bg-[#F8F9FA] border-black/10 text-brand-slate'
                        }`}
                      >
                        <Lightbulb className="h-3.5 w-3.5" /> Reasoning
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveMode(activeMode === 'image' ? null : 'image')}
                        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold border transition ${
                          activeMode === 'image'
                            ? 'bg-purple-50 border-purple-300 text-purple-800'
                            : 'bg-[#F8F9FA] border-black/10 text-brand-slate'
                        }`}
                      >
                        <ImageIcon className="h-3.5 w-3.5" /> Create Image
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveMode(activeMode === 'research' ? null : 'research')}
                        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold border transition ${
                          activeMode === 'research'
                            ? 'bg-blue-50 border-blue-300 text-blue-800'
                            : 'bg-[#F8F9FA] border-black/10 text-brand-slate'
                        }`}
                      >
                        <BarChart3 className="h-3.5 w-3.5" /> Deep Research
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleExecutePrompt()}
                      disabled={isGenerating}
                      className="grid h-8 w-8 place-items-center rounded-lg bg-brand-ink text-white shadow-xs hover:bg-black transition disabled:opacity-50"
                    >
                      <Sparkles className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* ROW OF 4 QUICK PROMPT CARDS (Solid Cards) */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto pt-2">
                  {quickCards.map((card) => {
                    const IconComponent = card.icon;
                    return (
                      <div
                        key={card.id}
                        onClick={() => handleExecutePrompt(card.prompt)}
                        className="group cursor-pointer rounded-2xl border border-black/10 bg-white p-4 text-left shadow-xs hover:border-brand-primary transition"
                      >
                        <div className="flex items-center justify-between mb-2.5">
                          <div className={`grid h-8 w-8 place-items-center rounded-xl border ${card.color}`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className="text-[10px] font-semibold text-brand-slate group-hover:text-brand-primary transition flex items-center gap-0.5">
                            Run <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-brand-ink group-hover:text-brand-primary transition">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-[11px] text-brand-slate line-clamp-2 leading-snug font-normal">
                          {card.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* LIVE CONVERSATION LOG DISPLAY */}
            <div className="space-y-4 max-w-3xl mx-auto pt-2">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-slate flex items-center gap-2">
                  <Activity className="h-4 w-4 text-green-600" /> Execution History Log
                </span>
                <span className="text-[11px] text-brand-slate font-medium">
                  Active Mode: <b className="text-brand-ink font-semibold">{activeMode || 'Standard Fast'}</b>
                </span>
              </div>

              {chatHistory.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl p-5 border border-black/10 transition-all bg-white ${
                    item.sender === 'user' ? 'ml-auto max-w-2xl' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      {item.sender === 'ai' ? (
                        <div className="flex items-center gap-2">
                          <div className="grid h-7 w-7 place-items-center rounded-xl bg-brand-ink text-white font-bold text-xs">
                            <Bot className="h-4 w-4" />
                          </div>
                          <span className="text-xs font-bold text-brand-ink">
                            SunLoop AI Assistant
                          </span>
                          <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-200">
                            Solid Core
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="grid h-7 w-7 place-items-center rounded-xl bg-brand-primary text-white font-bold text-xs">
                            HW
                          </div>
                          <span className="text-xs font-bold text-brand-ink">
                            Howard (You)
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-brand-slate font-medium">{item.time}</span>
                  </div>

                  <div className="text-xs leading-relaxed space-y-2 whitespace-pre-line text-brand-ink font-normal">
                    {item.text}
                  </div>

                  {item.robotAction && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-teal-50 border border-teal-200 p-2.5 text-[11px] text-teal-800 font-medium">
                      <Bot className="h-4 w-4 text-teal-600 shrink-0" />
                      <span>{item.robotAction}</span>
                    </div>
                  )}

                  {item.metrics && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-black/10 text-xs font-medium">
                      <div className="rounded-xl bg-[#F8F9FA] p-2.5 border border-black/5">
                        <span className="text-[10px] text-brand-slate block">Solar Gen</span>
                        <strong className="text-brand-ink font-semibold">{item.metrics.solar}</strong>
                      </div>
                      <div className="rounded-xl bg-[#F8F9FA] p-2.5 border border-black/5">
                        <span className="text-[10px] text-brand-slate block">ESS Battery</span>
                        <strong className="text-brand-ink font-semibold">{item.metrics.battery}</strong>
                      </div>
                      <div className="rounded-xl bg-[#F8F9FA] p-2.5 border border-black/5">
                        <span className="text-[10px] text-brand-slate block">Savings</span>
                        <strong className="text-green-600 font-semibold">{item.metrics.gridSavings}</strong>
                      </div>
                      <div className="rounded-xl bg-[#F8F9FA] p-2.5 border border-black/5">
                        <span className="text-[10px] text-brand-slate block">CO₂ Saved</span>
                        <strong className="text-brand-primary font-semibold">{item.metrics.co2}</strong>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* LIVE DASHBOARD VIEW */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-brand-ink">
                      Real-Time Microgrid Telemetry Dashboard
                    </h2>
                    <p className="text-xs text-brand-slate">
                      Live system monitoring with solid clean telemetry
                    </p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    <span className="h-2 w-2 rounded-full bg-green-500" /> System Online
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-4">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-xs">
                    <span className="text-xs text-brand-slate font-medium">Solar Array Power</span>
                    <b className="mt-1 block text-2xl font-bold text-brand-ink">48.2 kW</b>
                    <span className="text-[10px] font-semibold text-green-600">↑ Optimal Yield</span>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-xs">
                    <span className="text-xs text-brand-slate font-medium">ESS Battery SOC</span>
                    <b className="mt-1 block text-2xl font-bold text-brand-ink">92.4 kWh</b>
                    <span className="text-[10px] font-semibold text-blue-600">88% Capacity</span>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-xs">
                    <span className="text-xs text-brand-slate font-medium">EV Charging Demand</span>
                    <b className="mt-1 block text-2xl font-bold text-brand-ink">22.0 kW</b>
                    <span className="text-[10px] font-semibold text-purple-600">12 Active Ports</span>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-xs">
                    <span className="text-xs text-brand-slate font-medium">Daily Grid Offset</span>
                    <b className="mt-1 block text-2xl font-bold text-green-600">98.5%</b>
                    <span className="text-[10px] font-semibold text-brand-slate">Near Zero Draw</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-brand-ink">24-Hour Telemetry Curve</h3>
                    <span className="text-xs text-brand-slate font-medium">Live 24h Output</span>
                  </div>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-black/5 bg-[#FAFAF3]">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                      alt="Telemetry graph background"
                      className="absolute inset-0 h-full w-full object-cover opacity-10"
                    />
                    <svg viewBox="0 0 700 180" className="relative h-full w-full">
                      <path
                        d="M0 145 C70 140,80 80,145 105 S220 165,275 85 S355 30,410 85 S500 140,540 50 S630 20,700 55"
                        fill="none"
                        stroke="#E16622"
                        strokeWidth="3.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
