'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Sun,
  BatteryCharging,
  Zap,
  Phone,
  FileText,
  MapPin,
  Building2,
  Home,
  RefreshCw,
  LayoutGrid,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MessageLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
  links?: MessageLink[];
}

interface QuickTopicCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  query: string;
  badge?: string;
}

// Knowledge Base Data & Intelligent Keyword Response Matcher
function getAIResponse(query: string): { text: string; links?: MessageLink[] } {
  const q = query.toLowerCase().trim();

  // 1. Solar Panels & Solar Products
  if (
    q.includes('solar') ||
    q.includes('panel') ||
    q.includes('inverter') ||
    q.includes('pv') ||
    q.includes('topcon') ||
    q.includes('perc')
  ) {
    if (q.includes('home') || q.includes('house') || q.includes('resident')) {
      return {
        text: 'SunLoop provides high-efficiency Solar Rooftop systems for homes with up to 90% power bill savings, PM Surya Ghar subsidy support, and 25-year panel performance warranty.',
        links: [
          { label: 'Home Solar Solutions', href: '/solutions/home-owners' },
          { label: 'Solar Products', href: '/products/solar-power' },
          { label: 'Download Datasheets', href: '/resources/datasheets' },
        ],
      };
    }
    return {
      text: 'Our SolarLoop Series includes High-Efficiency Mono-PERC & TOPCon Solar Panels (550W–700W+), Hybrid & On-Grid Smart Inverters (5kW to 50kW), and Microinverters designed for maximum energy yield.',
      links: [
        { label: 'Explore Solar Products', href: '/products/solar-power' },
        { label: 'View Solar Datasheets', href: '/resources/datasheets' },
        { label: 'Commercial Solar', href: '/solutions/business-owners' },
      ],
    };
  }

  // 2. Energy Storage Systems (ESS) / Battery
  if (
    q.includes('battery') ||
    q.includes('ess') ||
    q.includes('storage') ||
    q.includes('wallloop') ||
    q.includes('stackloop') ||
    q.includes('cubeloop')
  ) {
    return {
      text: 'SunLoop ESS provides reliable clean energy storage: WallLoop (5–10 kWh for homes), StackLoop (15–30 kWh modular for villas & businesses), and CubeLoop (500 kWh–2 MWh containerized for industrial plants).',
      links: [
        { label: 'Energy Storage Products', href: '/products/energy-storage' },
        { label: 'Battery Datasheets', href: '/resources/datasheets' },
        { label: 'Solar + Storage Solutions', href: '/solutions/solar-storage' },
      ],
    };
  }

  // 3. EV Charging Infrastructure
  if (
    q.includes('ev') ||
    q.includes('charger') ||
    q.includes('charging') ||
    q.includes('chargeloop') ||
    q.includes('car') ||
    q.includes('vehicle')
  ) {
    return {
      text: 'Our ChargeLoop Series features AC Smart EV Chargers (7.4kW – 22kW) with RFID/App control, and DC Ultra-Fast Commercial Chargers (60kW – 240kW CCS2) for fleets, commercial hubs, and highways.',
      links: [
        { label: 'EV Charging Products', href: '/products/ev-charging' },
        { label: 'Solar + Storage + EV Hub', href: '/solutions/solar-storage-ev-charging' },
        { label: 'EV Datasheets', href: '/resources/datasheets' },
      ],
    };
  }

  // 4. Commercial & Industrial / Business
  if (
    q.includes('business') ||
    q.includes('commercial') ||
    q.includes('industrial') ||
    q.includes('factory') ||
    q.includes('industry') ||
    q.includes('roi') ||
    q.includes('tariff')
  ) {
    return {
      text: 'SunLoop delivers Turnkey C&I Solar & ESS solutions for factories, warehouses, and corporate facilities. Achieve 3–4 year ROI payback, peak-demand shaving, and substantial tax/depreciation benefits.',
      links: [
        { label: 'Commercial Solutions', href: '/solutions/business-owners' },
        { label: 'Containerized ESS (CubeLoop)', href: '/products/energy-storage' },
        { label: 'Request Business Proposal', href: '/contact' },
      ],
    };
  }

  // 5. Water Pumping & Agriculture
  if (
    q.includes('pump') ||
    q.includes('water') ||
    q.includes('agri') ||
    q.includes('farm') ||
    q.includes('irrigation')
  ) {
    return {
      text: 'SunLoop Solar Water Pumping systems provide dependable off-grid water pumping for agriculture, farmlands, and rural water supplies with intelligent MPPT pump controllers and zero fuel costs.',
      links: [
        { label: 'Solar Water Pumping', href: '/solutions/solar-water-pumping' },
        { label: 'Smart Microgrid Systems', href: '/solutions/smart-microgrid' },
        { label: 'Talk to Agri Engineer', href: 'https://wa.me/917339536677', isExternal: true },
      ],
    };
  }

  // 6. Datasheets & Specifications
  if (
    q.includes('datasheet') ||
    q.includes('spec') ||
    q.includes('manual') ||
    q.includes('download') ||
    q.includes('pdf') ||
    q.includes('document')
  ) {
    return {
      text: 'You can view and download complete technical datasheets, CAD specs, and warranty documentation for all SunLoop Solar, ESS, and EV Charger models in our Resource Center.',
      links: [
        { label: 'Open Datasheet Center', href: '/resources/datasheets' },
        { label: 'Solar Products', href: '/products/solar-power' },
        { label: 'Storage Products', href: '/products/energy-storage' },
      ],
    };
  }

  // 7. Contact, Phone, Office & Factory Address
  if (
    q.includes('contact') ||
    q.includes('address') ||
    q.includes('office') ||
    q.includes('location') ||
    q.includes('factory') ||
    q.includes('phone') ||
    q.includes('call') ||
    q.includes('whatsapp') ||
    q.includes('email') ||
    q.includes('coimbatore') ||
    q.includes('sulur')
  ) {
    return {
      text: 'Here are SunLoop Limited contact details:\n\n📞 Phone: +91 733 953 6677\n📍 Office: Srinivasa Nagar, Coimbatore, Tamil Nadu 641015\n🏭 Factory: A43, Sulur Industrial Estate, Kadampadi, Tamil Nadu 641401',
      links: [
        { label: 'Chat on WhatsApp', href: 'https://wa.me/917339536677', isExternal: true },
        { label: 'Contact & Enquiry Form', href: '/contact' },
        { label: 'About Company', href: '/company' },
      ],
    };
  }

  // 8. Cost, Pricing & Subsidy
  if (
    q.includes('price') ||
    q.includes('cost') ||
    q.includes('quote') ||
    q.includes('subsidy') ||
    q.includes('rate') ||
    q.includes('estimate')
  ) {
    return {
      text: 'Solar and ESS pricing depends on your connected load and roof area. Residential setups are eligible for government subsidies under PM Surya Ghar, while C&I projects enjoy accelerated depreciation.',
      links: [
        { label: 'Get Instant WhatsApp Quote', href: 'https://wa.me/917339536677', isExternal: true },
        { label: 'Submit Online Enquiry', href: '/contact' },
        { label: 'Home Solar Options', href: '/solutions/home-owners' },
      ],
    };
  }

  // 9. Default Helpful Fallback
  return {
    text: `Thanks for reaching out! SunLoop specializes in Tier-1 Solar PV Plants, Battery Energy Storage (ESS), and Fast EV Chargers. How can we best assist your project today?`,
    links: [
      { label: 'Solar Products', href: '/products/solar-power' },
      { label: 'Battery Storage', href: '/products/energy-storage' },
      { label: 'Home Solutions', href: '/solutions/home-owners' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Chat on WhatsApp', href: 'https://wa.me/917339536677', isExternal: true },
    ],
  };
}

export function RobotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'topics'>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! 👋 Welcome to SunLoop AI Support. Select any topic below or type your question about our Solar PV, ESS Storage, EV Chargers, or Coimbatore facility.',
      time: 'Just now',
      links: [
        { label: 'Solar Products', href: '/products/solar-power' },
        { label: 'Battery Storage (ESS)', href: '/products/energy-storage' },
        { label: 'Datasheets', href: '/resources/datasheets' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Clean, Solid Cards (No Horizontal Scrolling)
  const solidTopicCards: QuickTopicCard[] = [
    {
      icon: <Sun className="h-4 w-4 text-[#E86526]" />,
      title: 'Solar Products',
      subtitle: 'Mono TOPCon & Inverters',
      query: 'Tell me about SunLoop Solar Products and Inverters',
      badge: 'Tier-1',
    },
    {
      icon: <BatteryCharging className="h-4 w-4 text-emerald-600" />,
      title: 'Battery ESS',
      subtitle: '5 kWh to 2 MWh Storage',
      query: 'What Battery ESS energy storage systems do you offer?',
      badge: 'Storage',
    },
    {
      icon: <Zap className="h-4 w-4 text-blue-600" />,
      title: 'EV Chargers',
      subtitle: 'AC Smart & DC Fast 240kW',
      query: 'Show me SunLoop EV Charger models and specs',
      badge: 'Fast EV',
    },
    {
      icon: <Home className="h-4 w-4 text-teal-600" />,
      title: 'Home Solar',
      subtitle: 'PM Surya Ghar Subsidies',
      query: 'Tell me about Home Solar Solutions and government subsidies',
    },
    {
      icon: <Building2 className="h-4 w-4 text-purple-600" />,
      title: 'Business Solar',
      subtitle: 'Factories & 3-Year ROI',
      query: 'Commercial & Industrial Solar Solutions for factories',
    },
    {
      icon: <MapPin className="h-4 w-4 text-rose-600" />,
      title: 'Factory & Office',
      subtitle: 'Coimbatore & Sulur Plant',
      query: 'What is your office and factory address in Coimbatore?',
    },
    {
      icon: <FileText className="h-4 w-4 text-amber-600" />,
      title: 'Datasheets',
      subtitle: 'PDF Specs & Manuals',
      query: 'Where can I download product datasheets and technical specifications?',
    },
    {
      icon: <Phone className="h-4 w-4 text-emerald-600" />,
      title: 'WhatsApp Live',
      subtitle: '+91 733 953 6677',
      query: 'How do I contact SunLoop on WhatsApp?',
      badge: 'Direct',
    },
  ];

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping, activeTab]);

  const handleSend = (queryText?: string) => {
    const query = queryText || input;
    if (!query.trim()) return;

    setActiveTab('chat');
    const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: 'user', text: query, time: newTime }]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: response.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          links: response.links,
        },
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'Chat reset. How can I help you explore SunLoop clean energy systems today?',
        time: 'Just now',
        links: [
          { label: 'Solar Products', href: '/products/solar-power' },
          { label: 'Battery Storage', href: '/products/energy-storage' },
          { label: 'Contact Us', href: '/contact' },
        ],
      },
    ]);
  };

  return (
    <div
      id="sunloop-ai-assistant"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans flex flex-col items-end"
    >
      {/* Floating Chat Window (Corner Anchored) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[360px] sm:w-[390px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl flex flex-col origin-bottom-right"
            style={{ height: 'min(560px, calc(100vh - 48px))' }}
          >
            {/* Header */}
            <div className="border-b border-black/10 bg-[#0F172A] p-3.5 sm:p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-[#E86526] text-white font-bold shadow-xs">
                    <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
                    <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#0F172A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-tight text-white">SunLoop Energy AI</h3>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live AI · Coimbatore Hub
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleReset}
                    title="Reset conversation"
                    className="rounded-lg h-8 w-8 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition"
                    aria-label="Reset chat"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg h-8 w-8 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition"
                    aria-label="Close Assistant"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* View Switcher Tabs (Side/Top Navigation) */}
              <div className="grid grid-cols-2 gap-1 mt-3 bg-white/10 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition ${
                    activeTab === 'chat'
                      ? 'bg-white text-[#0F172A] shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5" /> Live Chat
                </button>
                <button
                  onClick={() => setActiveTab('topics')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition ${
                    activeTab === 'topics'
                      ? 'bg-white text-[#0F172A] shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5" /> Quick Topics
                </button>
              </div>
            </div>

            {/* TAB 1: LIVE CHAT */}
            {activeTab === 'chat' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFC] text-sm">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {m.sender === 'bot' && (
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#E86526] text-white mt-0.5 shadow-2xs">
                        <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3 shadow-xs space-y-2 ${
                        m.sender === 'user'
                          ? 'bg-[#E86526] text-white rounded-tr-xs'
                          : 'bg-white border border-black/10 text-slate-800 rounded-tl-xs'
                      }`}
                    >
                      <p className="leading-relaxed text-[13px] whitespace-pre-line">{m.text}</p>

                      {/* Bot Action Links */}
                      {m.links && m.links.length > 0 && (
                        <div className="pt-1.5 flex flex-wrap gap-1.5 border-t border-black/5">
                          {m.links.map((lnk, lIdx) =>
                            lnk.isExternal ? (
                              <a
                                key={lIdx}
                                href={lnk.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded-lg transition"
                              >
                                {lnk.label} <ExternalLink className="h-2.5 w-2.5" />
                              </a>
                            ) : (
                              <Link
                                key={lIdx}
                                href={lnk.href}
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E86526] bg-orange-50 hover:bg-orange-100 border border-orange-200/60 px-2.5 py-1 rounded-lg transition"
                              >
                                {lnk.label} <ArrowRight className="h-2.5 w-2.5" />
                              </Link>
                            )
                          )}
                        </div>
                      )}

                      <span
                        className={`block text-[10px] text-right ${
                          m.sender === 'user' ? 'text-white/80' : 'text-slate-400'
                        }`}
                      >
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-500 text-xs italic bg-white border border-black/5 rounded-xl px-3 py-2 w-fit shadow-xs">
                    <Sparkles className="h-3.5 w-3.5 text-[#E86526] animate-spin" /> SunLoop AI is answering...
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>
            )}

            {/* TAB 2: SOLID QUICK TOPIC CARDS (Clean Grid, No Horizontal Scroll) */}
            {activeTab === 'topics' && (
              <div className="flex-1 overflow-y-auto p-3.5 bg-[#F8FAFC]">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Select a Topic
                  </span>
                  <span className="text-[11px] text-slate-400">Tap to ask instantly</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {solidTopicCards.map((card, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(card.query)}
                      className="flex flex-col justify-between p-3 rounded-xl bg-white border border-black/10 hover:border-[#E86526] hover:shadow-md transition text-left group"
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <div className="h-7 w-7 rounded-lg bg-slate-50 border border-black/5 flex items-center justify-center group-hover:scale-105 transition">
                          {card.icon}
                        </div>
                        {card.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-50 text-[#E86526] border border-orange-100">
                            {card.badge}
                          </span>
                        )}
                      </div>
                      <div>
                        <strong className="block text-xs font-semibold text-slate-800 group-hover:text-[#E86526] transition leading-tight">
                          {card.title}
                        </strong>
                        <span className="block text-[10px] text-slate-500 leading-snug mt-0.5 truncate">
                          {card.subtitle}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Solid Input Box with Quick Action Shortcuts */}
            <div className="p-3 bg-white border-t border-black/10 space-y-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 rounded-xl border border-black/15 bg-slate-50 p-1.5 focus-within:border-[#E86526] focus-within:bg-white transition"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Solar, Battery ESS, Factory..."
                  className="w-full bg-transparent px-2 py-1 text-xs sm:text-sm text-slate-800 outline-none placeholder:text-slate-400 min-h-[36px]"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#E86526] text-white hover:bg-[#d8581c] disabled:opacity-40 transition shadow-2xs"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>

              {/* Direct WhatsApp Quick Shortcut Row */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <button
                  onClick={() => setActiveTab(activeTab === 'topics' ? 'chat' : 'topics')}
                  className="inline-flex items-center gap-1 font-medium text-[#E86526] hover:underline cursor-pointer"
                >
                  <LayoutGrid className="h-3 w-3" />
                  {activeTab === 'topics' ? 'Back to Chat' : 'Browse All Topics'}
                </button>

                <a
                  href="https://wa.me/917339536677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  <Phone className="h-3 w-3" /> WhatsApp Expert
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button — Box Shape with Message Icon (Hidden when chat is open) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative h-14 w-14 sm:h-15 sm:w-15 rounded-2xl bg-[#E86526] hover:bg-[#d8581c] text-white shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/25 shrink-0"
          aria-label="Open AI Support Chat"
        >
          <MessageSquare className="h-7 w-7 text-white stroke-[2.2]" aria-hidden="true" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-xs" />
          </span>
        </button>
      )}
    </div>
  );
}
