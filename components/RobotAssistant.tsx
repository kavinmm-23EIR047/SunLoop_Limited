'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bot, Sparkles, X, Send, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function RobotAssistant() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Hello! I am your SunLoop Robot AI Assistant. How can I help optimize your energy today?',
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    '☀️ Forecast Solar Yield',
    '⚡ Optimize ESS Battery',
    '🚗 EV Fleet Charging',
    '🤖 Run Robot Diagnostic',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const updatedMessages = [...messages, { sender: 'user' as const, text: query, time: newTime }];
    setMessages(updatedMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = `[SunLoop Robot Agent] Processed query: "${query}". System status is 100% optimal. Solar efficiency up by 18.4% with AI predictive dispatch.`;
      if (query.includes('Solar')) {
        replyText = '☀️ Solar forecast indicates peak generation of 48.2 kW expected tomorrow at 1:30 PM. Inverters automatically aligned for maximum yield.';
      } else if (query.includes('Battery') || query.includes('ESS')) {
        replyText = '⚡ Battery ESS is currently at 88% State of Charge. Smart peak-shaving robot active: discharging to save peak tariffs tonight.';
      } else if (query.includes('EV')) {
        replyText = '🚗 12 EV Chargers configured. Smart balancing active: prioritization enabled for executive fleet with 100% renewable power input.';
      } else if (query.includes('Robot') || query.includes('Diagnostic')) {
        replyText = '🤖 Autonomous Robot Agent Alpha running live string analysis. 0 thermal hotspots detected. System health: EXCELLENT.';
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot' as const, text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div
      id="robot-assistant"
      className="fixed bottom-6 right-6 z-50 font-sans transition-all duration-300"
    >

      {/* Drawer */}
      {isOpen && (
        <div className="mb-4 w-[360px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl transition-all">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/10 bg-brand-ink p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-primary text-white font-bold">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-sans font-bold text-xs">
                  SunLoop Robot AI
                  <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase">SOLID</span>
                </div>
                <p className="text-[10px] text-white/70 flex items-center gap-1 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Robot Bot Active
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition"
              aria-label="Close Assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Info Bar */}
          <div className="flex items-center justify-between bg-brand-bg px-4 py-2 text-xs border-b border-black/5 text-brand-ink">
            <span className="flex items-center gap-1 font-semibold text-brand-primary text-[11px]">
              <Sparkles className="h-3.5 w-3.5" /> Solid AI Engine
            </span>
            <Link
              href="/ai-portal"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1 font-bold text-brand-primary hover:underline text-[11px]"
            >
              Full Portal <ChevronRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Messages list */}
          <div className="max-h-[300px] min-h-[200px] overflow-y-auto p-4 space-y-3 bg-[#fafafa] text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'bot' && (
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-ink text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-xl p-3 shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-brand-primary text-white font-medium'
                      : 'bg-white border border-black/10 text-brand-ink'
                  }`}
                >
                  <p className="leading-relaxed text-[12px]">{m.text}</p>
                  <span className={`block mt-1 text-[9px] text-right ${m.sender === 'user' ? 'text-white/80' : 'text-brand-slate'}`}>
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-brand-slate text-[11px] italic">
                <Bot className="h-3.5 w-3.5 text-brand-primary" /> Robot AI thinking...
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="flex gap-1.5 overflow-x-auto p-2 bg-white border-t border-black/5">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp)}
                className="shrink-0 rounded-lg border border-black/10 bg-brand-bg px-2.5 py-1 text-[10px] font-semibold text-brand-ink hover:bg-brand-primary hover:text-white transition"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-black/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-xl border border-black/10 bg-brand-bg p-1.5 focus-within:border-brand-primary transition"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Robot AI Assistant..."
                className="w-full bg-transparent px-2 text-xs text-brand-ink outline-none placeholder:text-brand-slate"
              />
              <button
                type="submit"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-primary text-white hover:bg-[#c95315] transition"
                aria-label="Send query"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 rounded-full border border-black/10 bg-brand-ink px-4 py-3 text-white shadow-xl hover:bg-black transition"
        aria-label="Toggle SunLoop Robot AI Assistant"
      >
        <div className="relative grid h-7 w-7 place-items-center rounded-lg bg-brand-primary text-white">
          <Bot className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-brand-ink" />
        </div>
        <div className="hidden sm:block text-left font-sans">
          <p className="text-xs font-bold leading-none flex items-center gap-1">
            Robot AI Assistant
          </p>
          <p className="text-[10px] text-white/70 leading-tight">Click for Live Support</p>
        </div>
      </button>
    </div>
  );
}
