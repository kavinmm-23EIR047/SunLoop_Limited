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
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DancingRobotMascot } from './DancingRobotMascot';

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
  badgeColor?: string;
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
        text: 'Sunloop offers high-efficiency rooftop solar systems for homes, with savings of up to 90% on electricity bills. We also provide support with the PM Surya Ghar subsidy and a 25-year performance warranty on the panels.',
        links: [
          { label: 'Home Solar Solutions', href: '/solutions/home-owners' },
          { label: 'Solar Products Catalog', href: '/products/solar-power' },
          { label: 'Download Solar Datasheets', href: '/resources/datasheets' },
        ],
      };
    }
    return {
      text: 'Our SolarLoop series includes high-efficiency Mono-PERC and TOPCon solar panels (550 W–700 W+), hybrid and on-grid smart inverters (5 kW to 50 kW) and microinverters engineered for maximum energy yield.',
      links: [
        { label: 'Explore Solar Products', href: '/products/solar-power' },
        { label: 'View Solar Datasheets', href: '/resources/datasheets' },
        { label: 'Commercial Solar Solutions', href: '/solutions/business-owners' },
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
      text: 'Sunloop ESS provides reliable energy storage: WallLoop (5–10 kWh for homes), modular StackLoop systems (15–30 kWh for villas and commercial sites) and containerized CubeLoop systems (500 kWh–2 MWh for industrial microgrids).',
      links: [
        { label: 'Energy Storage Products', href: '/products/energy-storage' },
        { label: 'Battery ESS Datasheets', href: '/resources/datasheets' },
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
      text: 'Our ChargeLoop series includes smart AC EV chargers (7.4 kW–22 kW) with RFID and app control and ultra-fast commercial DC chargers (60 kW–240 kW) with dual CCS2 connectors for fleets, commercial hubs and highways.',
      links: [
        { label: 'EV Charging Products', href: '/products/ev-charging' },
        { label: 'Solar + Storage + EV Hub', href: '/solutions/solar-storage-ev-charging' },
        { label: 'EV Charger Datasheets', href: '/resources/datasheets' },
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
      text: 'Sunloop delivers turnkey solar and ESS solutions for factories, warehouses and corporate facilities. Projects can achieve a return on investment within 3–4 years, with peak-demand savings and tax depreciation benefits.',
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
      text: 'Sunloop solar water pumping systems provide dependable off-grid water pumping for farms, agricultural land and rural water systems, using intelligent MPPT pump controllers with no fuel costs.',
      links: [
        { label: 'Solar Water Pumping', href: '/solutions/solar-water-pumping' },
        { label: 'Smart Microgrid Systems', href: '/solutions/smart-microgrid' },
      ],
    };
  }

  // 6. Coimbatore / Factory Location
  if (
    q.includes('coimbatore') ||
    q.includes('address') ||
    q.includes('office') ||
    q.includes('location') ||
    q.includes('factory') ||
    q.includes('visit')
  ) {
    return {
      text: 'Headquarters & Manufacturing Hub:\n📍 SunLoop Energy Limited, SF No. 42/1, Sulur Industrial Estate, Coimbatore, Tamil Nadu 641402, India.\n\nVisitors and partners are welcome for factory tours and live ESS demonstrations!',
      links: [
        { label: 'View Contact & Map', href: '/contact' },
        { label: 'Company Background', href: '/company' },
      ],
    };
  }

  // 7. Datasheets & Downloads
  if (
    q.includes('datasheet') ||
    q.includes('spec') ||
    q.includes('download') ||
    q.includes('manual') ||
    q.includes('pdf') ||
    q.includes('brochure')
  ) {
    return {
      text: 'Technical datasheets, engineering drawings and user manuals are available for immediate PDF download across all SolarLoop, WallLoop, StackLoop, CubeLoop and ChargeLoop models.',
      links: [
        { label: 'Open Datasheet Library', href: '/resources/datasheets' },
        { label: 'Contact Engineering Team', href: '/contact' },
      ],
    };
  }

  // 8. WhatsApp / Phone / Support
  if (
    q.includes('whatsapp') ||
    q.includes('phone') ||
    q.includes('call') ||
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('number')
  ) {
    return {
      text: 'You can connect directly with our engineering sales team via WhatsApp at +91 733 953 6677 or email info@sunloopenergy.com. We respond within 15 minutes during business hours.',
      links: [
        {
          label: 'Chat on WhatsApp',
          href: 'https://wa.me/917339536677?text=Hello%20SunLoop%20Team%2C%20I%20am%20interested%20in%20your%20clean%20energy%20solutions.',
          isExternal: true,
        },
        { label: 'Contact Page', href: '/contact' },
      ],
    };
  }

  // 9. Pricing & Quotes
  if (
    q.includes('price') ||
    q.includes('cost') ||
    q.includes('quote') ||
    q.includes('estimate') ||
    q.includes('budget')
  ) {
    return {
      text: 'Pricing depends on system capacity (kW/kWh), grid configuration and site-specific electrical requirements. We provide free turnkey proposals and return-on-investment calculations within 24 hours.',
      links: [
        { label: 'Request a Free Quote', href: '/contact' },
        { label: 'Home Solar Options', href: '/solutions/home-owners' },
        { label: 'Commercial ROI Options', href: '/solutions/business-owners' },
      ],
    };
  }

  // Default Fallback
  return {
    text: `Thanks for asking about "${query}". Sunloop Energy delivers integrated clean energy through solar PV systems, lithium energy storage (5 kWh to 2 MWh) and smart EV fast chargers, all managed through our AI Energy Portal.`,
    links: [
      { label: 'Explore Solutions', href: '/solutions' },
      { label: 'View Products Catalog', href: '/products' },
      { label: 'Request a Call', href: '/contact' },
    ],
  };
}

export function RobotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'topics'>('chat');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

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

  // Clean, Solid Cards (No Horizontal Scrolling, Crisp Typography)
  const solidTopicCards: QuickTopicCard[] = [
    {
      icon: <Sun className="h-4 w-4 text-[#E86526]" />,
      title: 'Solar Products',
      subtitle: 'Mono TOPCon & Inverters',
      query: 'Tell me about SunLoop Solar Products and Inverters',
      badge: 'Tier-1',
      badgeColor: 'bg-orange-50 text-[#E86526] border-orange-200/80',
    },
    {
      icon: <BatteryCharging className="h-4 w-4 text-emerald-600" />,
      title: 'Battery ESS',
      subtitle: '5 kWh to 2 MWh Storage',
      query: 'What Battery ESS energy storage systems do you offer?',
      badge: 'Storage',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    },
    {
      icon: <Zap className="h-4 w-4 text-blue-600" />,
      title: 'EV Chargers',
      subtitle: 'AC Smart & DC Fast 240kW',
      query: 'Show me SunLoop EV Charger models and specs',
      badge: 'Fast EV',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200/80',
    },
    {
      icon: <Home className="h-4 w-4 text-teal-600" />,
      title: 'Home Solar',
      subtitle: 'PM Surya Ghar Subsidies',
      query: 'Tell me about Home Solar Solutions and government subsidies',
      badge: 'Subsidy',
      badgeColor: 'bg-teal-50 text-teal-600 border-teal-200/80',
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
      badge: 'PDF',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/80',
    },
    {
      icon: <Phone className="h-4 w-4 text-emerald-600" />,
      title: 'WhatsApp Live',
      subtitle: '+91 733 953 6677',
      query: 'How do I contact SunLoop on WhatsApp?',
      badge: 'Direct',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
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
      className="fixed z-50 font-sans"
    >
      {/* ========================================================
          1. CHAT WINDOW: CLEAN, SOLID BOX (ALL DEVICES COMPATIBLE)
          ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="fixed inset-x-3 bottom-3 sm:inset-auto sm:right-6 sm:bottom-6 sm:w-[410px] md:w-[420px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/20 flex flex-col origin-bottom-right z-50"
            style={{
              height: 'min(590px, calc(100dvh - 24px))',
              maxHeight: 'calc(100dvh - 24px)',
            }}
          >
            {/* Header: Solid Dark Ink with Dancing Mini Mascot */}
            <div className="border-b border-slate-800 bg-[#0F172A] p-4 text-white shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Dancing Mascot Mini Avatar */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E86526] to-[#C2410C] p-1 shadow-md shadow-orange-500/20 ring-1 ring-white/20">
                    <DancingRobotMascot size="xs" isDancing={true} />
                    <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#0F172A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white tracking-tight leading-snug">
                      SunLoop Energy AI
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
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

              {/* Segmented Controller: Live Chat / Quick Topics */}
              <div className="grid grid-cols-2 gap-1 mt-3.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === 'chat'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5 text-[#E86526]" /> Live Chat
                </button>
                <button
                  onClick={() => setActiveTab('topics')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    activeTab === 'topics'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <LayoutGrid className="h-3.5 w-3.5 text-[#E86526]" /> Quick Topics
                </button>
              </div>
            </div>

            {/* ========================================================
                TAB 1: LIVE CHAT (Solid Cards, Legible Typography)
                ======================================================== */}
            {activeTab === 'chat' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {/* Bot Avatar Icon */}
                    {m.sender === 'bot' && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E86526] to-[#C2410C] text-white mt-0.5 shadow-sm">
                        <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 shadow-sm space-y-2.5 ${
                        m.sender === 'user'
                          ? 'bg-[#E86526] text-white rounded-tr-xs'
                          : 'bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs'
                      }`}
                    >
                      {/* Message Content: Clean, Readable Text */}
                      <p className="leading-relaxed text-sm sm:text-[14px] whitespace-pre-line font-normal">
                        {m.text}
                      </p>

                      {/* Bot Action Links: Solid Interactive Chips */}
                      {m.links && m.links.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-100">
                          {m.links.map((lnk, lIdx) =>
                            lnk.isExternal ? (
                              <a
                                key={lIdx}
                                href={lnk.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[34px] items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-xl transition shadow-xs"
                              >
                                {lnk.label} <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <Link
                                key={lIdx}
                                href={lnk.href}
                                onClick={() => setIsOpen(false)}
                                className="inline-flex min-h-[34px] items-center gap-1.5 text-xs font-semibold text-[#E86526] bg-orange-50/90 hover:bg-[#E86526] hover:text-white border border-orange-200/80 px-3 py-1.5 rounded-xl transition-all shadow-xs"
                              >
                                {lnk.label} <ArrowRight className="h-3 w-3" />
                              </Link>
                            )
                          )}
                        </div>
                      )}

                      {/* Timestamp */}
                      <span
                        className={`block text-[11px] font-medium text-right ${
                          m.sender === 'user' ? 'text-white/80' : 'text-slate-400'
                        }`}
                      >
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2.5 text-slate-600 text-xs font-medium bg-white border border-slate-200/80 rounded-xl px-3.5 py-2.5 w-fit shadow-xs">
                    <Sparkles className="h-4 w-4 text-[#E86526] animate-spin" /> SunLoop AI is answering...
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>
            )}

            {/* ========================================================
                TAB 2: SOLID QUICK TOPIC CARDS (Clean Grid, High Contrast)
                ======================================================== */}
            {activeTab === 'topics' && (
              <div className="flex-1 overflow-y-auto p-4 bg-[#F8FAFC]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Select a Solution Topic
                  </span>
                  <span className="text-xs text-slate-500">Tap to ask AI</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {solidTopicCards.map((card, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(card.query)}
                      className="flex flex-col justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#E86526] hover:shadow-md transition-all text-left group"
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <div className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition">
                          {card.icon}
                        </div>
                        {card.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${card.badgeColor || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                            {card.badge}
                          </span>
                        )}
                      </div>
                      <div>
                        <strong className="block text-sm font-bold text-slate-800 group-hover:text-[#E86526] transition leading-tight">
                          {card.title}
                        </strong>
                        <span className="block text-xs text-slate-500 leading-snug mt-1 truncate">
                          {card.subtitle}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ========================================================
                BOTTOM SOLID INPUT BOX (Clean, Functional, High Contrast)
                ======================================================== */}
            <div className="p-3.5 bg-white border-t border-slate-200/90 space-y-2.5 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/90 p-1.5 focus-within:border-[#E86526] focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-500/20 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Solar, Battery ESS, Factory..."
                  className="w-full bg-transparent px-2.5 py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400 min-h-[38px]"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E86526] text-white hover:bg-[#d8581c] disabled:opacity-40 transition shadow-sm cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>

              {/* Direct Quick Shortcuts */}
              <div className="flex items-center justify-between text-xs text-slate-600 px-1">
                <button
                  onClick={() => setActiveTab(activeTab === 'topics' ? 'chat' : 'topics')}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#E86526] hover:underline cursor-pointer"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  {activeTab === 'topics' ? 'Back to Live Chat' : 'Browse All Topics'}
                </button>

                <a
                  href="https://wa.me/917339536677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" /> WhatsApp Expert
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          2. FLOATING LAUNCHER: DANCING ANIMATED ROBOT MASCOT
          ======================================================== */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end z-50">
          {/* Animated Dance Callout Pill */}
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: [0, -4, 0],
              scale: 1,
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.3 },
            }}
            className="mb-2 hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md hover:border-[#E86526] hover:text-[#E86526] transition-all cursor-pointer group"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need clean energy advice?</span>
            <span className="text-[#E86526] group-hover:translate-x-0.5 transition-transform">→</span>
          </motion.button>

          {/* Dancing Robot Mascot Floating Launch Pad */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex h-16 w-16 sm:h-[72px] sm:w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#E86526] via-[#EA580C] to-[#C2410C] p-1.5 text-white shadow-2xl shadow-orange-600/35 border-2 border-white/30 cursor-pointer overflow-visible"
            aria-label="Open SunLoop AI Support Assistant"
          >
            {/* Dancing Robot Vector Mascot */}
            <div className="relative -mt-1">
              <DancingRobotMascot size="sm" isDancing={true} />
            </div>

            {/* Glowing Online Status Beacon */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-sm" />
            </span>
          </motion.button>
        </div>
      )}
    </div>
  );
}
