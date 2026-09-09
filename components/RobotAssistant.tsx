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
  Waves,
  RefreshCw
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
      text: 'SunLoop ESS provides reliable clean energy storage: WallLoop (5–10 kWh for homes), StackLoop (15–30 kWh modular for villas & small businesses), and CubeLoop (500 kWh–2 MWh containerized for industrial plants).',
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
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! 👋 I am your SunLoop Clean Energy AI Assistant. Ask me anything about our Solar PV, Battery Storage (ESS), EV Chargers, or our factory location in Coimbatore!',
      time: 'Just now',
      links: [
        { label: 'Solar Products', href: '/products/solar-power' },
        { label: 'Battery Storage (ESS)', href: '/products/energy-storage' },
        { label: 'Datasheet Center', href: '/resources/datasheets' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: '☀️ Solar Products', query: 'Tell me about SunLoop Solar Products' },
    { label: '🔋 Battery Storage (ESS)', query: 'What Battery ESS systems do you have?' },
    { label: '🚗 EV Chargers', query: 'Show me EV Charging options' },
    { label: '🏠 Home Solar', query: 'Tell me about Home Solar Solutions and subsidies' },
    { label: '🏭 Business & Factory', query: 'Commercial & Industrial Solar Solutions' },
    { label: '📍 Factory & Office', query: 'What is your office and factory address?' },
    { label: '📄 Product Datasheets', query: 'Where can I download product datasheets?' },
    { label: '💬 WhatsApp Support', query: 'How do I contact SunLoop on WhatsApp?' },
  ];

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (queryText?: string) => {
    const query = queryText || input;
    if (!query.trim()) return;

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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans"
    >
      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[370px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl flex flex-col"
            style={{ maxHeight: 'min(580px, calc(100vh - 100px))' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 bg-[#0F172A] p-3.5 sm:p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-[#E86526] text-white font-bold shadow-xs">
                  <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#0F172A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight text-white">SunLoop Energy AI</h3>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Live Knowledge Base
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

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFC] text-sm min-h-[220px]">
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

                    {/* Bot Links & Action Buttons */}
                    {m.links && m.links.length > 0 && (
                      <div className="pt-1.5 flex flex-wrap gap-1.5 border-t border-black/5">
                        {m.links.map((lnk, lIdx) => (
                          lnk.isExternal ? (
                            <a
                              key={lIdx}
                              href={lnk.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded-md transition"
                            >
                              {lnk.label} <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          ) : (
                            <Link
                              key={lIdx}
                              href={lnk.href}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E86526] bg-orange-50 hover:bg-orange-100 border border-orange-200/60 px-2.5 py-1 rounded-md transition"
                            >
                              {lnk.label} <ArrowRight className="h-2.5 w-2.5" />
                            </Link>
                          )
                        ))}
                      </div>
                    )}

                    <span className={`block text-[10px] text-right ${m.sender === 'user' ? 'text-white/80' : 'text-slate-400'}`}>
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-500 text-xs italic bg-white border border-black/5 rounded-xl px-3 py-2 w-fit">
                  <Sparkles className="h-3.5 w-3.5 text-[#E86526] animate-spin" /> SunLoop AI is typing...
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Prompts Chips */}
            <div className="p-2 bg-white border-t border-black/5">
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickPrompts.map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(qp.query)}
                    className="shrink-0 rounded-lg border border-black/10 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition min-h-[30px]"
                  >
                    {qp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <div className="p-3 bg-white border-t border-black/10">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button — Box Shape with Message Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-13 w-13 sm:h-14 sm:w-14 rounded-2xl bg-[#E86526] hover:bg-[#d8581c] text-white shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/20"
        aria-label={isOpen ? 'Close AI Support Chat' : 'Open AI Support Chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" aria-hidden="true" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
