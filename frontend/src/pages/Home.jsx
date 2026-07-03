import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Battery,
  Building2,
  Car,
  CheckCircle2,
  Cpu,
  Home as HomeIcon,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';

const pdfAsset = (name) => `/assets/pdf/${name}`;

const Home = () => {
  const [solarGen, setSolarGen] = useState(125.6);
  const [batterySOC, setBatterySOC] = useState(85);
  const [evLoad, setEvLoad] = useState(42.7);

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarGen((prev) => +(prev + (Math.random() - 0.48) * 0.5).toFixed(1));
      setBatterySOC((prev) => Math.max(5, Math.min(100, prev + (Math.random() > 0.6 ? 1 : -1))));
      setEvLoad((prev) => +(prev + (Math.random() - 0.5) * 0.3).toFixed(1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const solutionCards = [
    {
      ribbon: 'Residential',
      title: 'Wall Mounted ESS',
      subtitle: 'For Residential',
      icon: <HomeIcon size={28} />,
      image: pdfAsset('clean/ess-wall-mounted.png'),
      points: [
        'Compact, stylish and space-saving design',
        'Reliable backup power for homes',
        'Maximize solar self-consumption',
        'Smart energy management with AI insights',
      ],
    },
    {
      ribbon: 'Commercial & Industrial',
      title: 'Trolley Type ESS',
      subtitle: 'For Commercial & Industrial',
      icon: <Building2 size={28} />,
      image: pdfAsset('clean/ess-trolley.png'),
      points: [
        'Flexible and easy to install',
        'Scalable to meet growing energy needs',
        'Peak shaving and load management',
        'Improve efficiency and ensure business continuity',
      ],
    },
    {
      ribbon: 'Utility Scale',
      title: 'Containerized ESS',
      subtitle: 'For Utility Scale',
      icon: <Zap size={28} />,
      image: pdfAsset('clean/ess-container.png'),
      points: [
        'High capacity for large scale applications',
        'Integrated thermal management & safety',
        'Grid support and renewable integration',
        'Built for durability and long-term performance',
      ],
    },
  ];

  const solutionFeatures = [
    {
      title: 'AI Powered Portal',
      copy: 'Real-time monitoring, analytics and smart energy insights',
      icon: <LineChart size={26} />,
    },
    {
      title: 'Safe & Reliable',
      copy: 'Advanced safety systems and multi-layer protection',
      icon: <ShieldCheck size={26} />,
    },
    {
      title: 'Easy Integration',
      copy: 'Seamless integration with solar, EV chargers and existing systems',
      icon: <Cpu size={26} />,
    },
    {
      title: 'Scalable Solutions',
      copy: 'Designed to scale as your energy needs grow',
      icon: <Network size={26} />,
    },
  ];

  const values = [
    ['Innovation', 'AI, automation, and digital intelligence for smarter energy systems.'],
    ['Sustainability', 'Every solution helps reduce emissions and protect the future.'],
    ['Customer Success', 'Savings, uptime, and operational clarity define the outcome.'],
    ['Reliability', 'Robust engineering practices built for dependable performance.'],
    ['Transparency', 'Clear reporting from design and installation to monitoring.'],
    ['Excellence', 'High standards across engineering, execution, safety, and service.'],
  ];

  const residentialSystems = [
    {
      title: 'AC Charger',
      subtitle: '7.4 KW Single Phase',
      copy: 'Smart AC charging for homes, apartments and business parking spaces.',
      path: '/ev-charging',
      cta: 'Explore EV Charging',
      icon: <Zap size={28} />,
      image: pdfAsset('sunloop-pdf-p13-02.png'),
      imageClass: 'home-system-card__image--ev-wall',
    },
    {
      title: 'Energy Storage System',
      subtitle: '10 KWH (Wall Mounted)',
      copy: 'Reliable backup and intelligent energy storage for daily savings.',
      path: '/ess',
      cta: 'Explore ESS',
      icon: <Battery size={28} />,
      image: pdfAsset('clean/ess-wall-mounted.png'),
    },
    {
      title: 'Solar Panels',
      subtitle: 'Rooftop Solar System (Residential)',
      copy: 'High-efficiency rooftop solar built to reduce electricity bills.',
      path: '/solar',
      cta: 'Explore Solar',
      icon: <Sun size={28} />,
      image: pdfAsset('clean/solar-rooftop-elevated.png'),
    },
  ];

  const starterSystems = [
    {
      title: 'Solar Power Plant',
      text: 'Generate clean energy and reduce electricity bills',
      icon: <Sun size={24} />,
      image: pdfAsset('clean/solar-rooftop-elevated.png'),
      tone: 'solar',
    },
    {
      title: 'Energy Storage System (ESS)',
      text: 'Store energy, ensure backup and optimize consumption',
      icon: <Battery size={24} />,
      image: pdfAsset('clean/ess-wall-mounted.png'),
      tone: 'storage',
    },
    {
      title: 'EV Charging Station',
      text: 'Charge your EV smartly and conveniently',
      icon: <Car size={24} />,
      image: pdfAsset('sunloop-pdf-p13-02.png'),
      imageClass: 'platform-system-card__image--ev',
      tone: 'portal',
    },
  ];

  const expansionSteps = [
    {
      number: '1',
      title: 'Start Today',
      copy: 'Choose any one system that fits your current need.',
      formula: ['Solar Power Plant'],
      caption: 'Monitor and optimize using AI Powered Portal',
    },
    {
      number: '2',
      title: 'Add When You Need',
      copy: 'Add Energy Storage System when backup is required.',
      formula: ['Solar Power Plant', 'ESS'],
      caption: 'Everything visible and managed in the same portal',
    },
    {
      number: '3',
      title: 'Expand Further',
      copy: 'Add EV Charging Station when you own an EV.',
      formula: ['Solar Power Plant', 'ESS', 'EV Charger'],
      caption: 'One platform. Complete control. Maximum convenience.',
    },
    {
      number: '4',
      title: 'One Ecosystem. Endless Benefits.',
      copy: 'All systems working together for smarter energy management.',
      formula: ['Solar Power Plant', 'ESS', 'EV Charger'],
      caption: 'Smarter decisions. Higher savings. Greener tomorrow.',
    },
  ];

  const ecosystemBenefits = [
    ['Start Small, Scale Anytime', <Network key="scale" size={22} />],
    ['Easy Integration Anytime', <Cpu key="integration" size={22} />],
    ['AI Powered Insights Everyday', <LineChart key="insights" size={22} />],
    ['Maximum Savings Always', <Battery key="savings" size={22} />],
    ['Future Ready Solutions', <Sparkles key="future" size={22} />],
  ];

  const portalFeatures = [
    ['Live monitoring', <LineChart key="monitoring-icon" size={18} />],
    ['Daily reports', <CheckCircle2 key="reports-icon" size={18} />],
    ['AI analytics', <Cpu key="analytics-icon" size={18} />],
    ['Predictive alerts', <ShieldCheck key="alerts-icon" size={18} />],
    ['Remote control', <Zap key="remote-icon" size={18} />],
    ['Multi-site access', <Network key="access-icon" size={18} />],
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden w-full">
      <section className="relative min-h-[calc(100vh-80px)] flex items-stretch bg-[#0d1117] overflow-hidden isolate w-full">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full animate-[floatParticle_10s_infinite_linear]"
              style={{
                background: 'radial-gradient(circle, #FF6B00 0%, transparent 70%)',
                width: `${Math.random() * 60 + 30}px`,
                height: `${Math.random() * 60 + 30}px`,
                left: `${Math.random() * 85}%`,
                top: `${Math.random() * 85}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${Math.random() * 5 + 8}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-[-2]" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,107,0,0.12)_0%,rgba(13,17,23,0.98)_72%,#0d1117_100%)] z-[1]" />
          <img src={pdfAsset('sunloop-pdf-p01-02.png')} alt="" className="w-full h-full object-cover object-right opacity-30 mix-blend-overlay saturate-50 brightness-75" />
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center pt-24 lg:pt-36 pb-16 lg:pb-28 relative z-[2] w-full max-w-full">
          <div className="max-w-[850px] lg:max-w-[60vw] reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer mb-4">
              <Sparkles size={14} />
              Pathway to Sustainable Future
            </div>
            <h1 className="mt-5 text-[clamp(3rem,7.4vw,6.8rem)] leading-[0.96] tracking-[-0.02em] text-white">
              Powering Tomorrow,
              <span className="block bg-gradient-to-br from-[#FF6B00] to-[#FFA767] bg-clip-text text-transparent">Sustainably.</span>
            </h1>
            <p className="font-title font-extrabold text-[clamp(1.25rem,3vw,2rem)] text-white mt-4 text-gradient">Clean. Intelligent. Integrated.</p>
            <p className="max-w-[720px] mt-5 text-gray-400 text-[clamp(1rem,1.1vw,1.2rem)] leading-[1.6]">
              Sunloop Energy builds next-generation clean energy ecosystems by connecting Solar Power Plants,
              Energy Storage Systems, EV Charging Stations, and a proprietary AI Energy Management Portal.
            </p>
            <div className="flex flex-wrap gap-5 mt-9">
              <Link to="/contact">
                <button className="btn btn-primary shadow-[0_4px_14px_rgba(255,107,0,0.35)] hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(255,107,0,0.5)] transition-all">
                  Start Your Energy Plan
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/ai-portal">
                <button className="btn btn-secondary border-white/20 text-white hover:bg-white/10 hover:border-white">Explore AI Portal</button>
              </Link>
            </div>
          </div>

          <div className="bg-[#161c2d]/65 border border-white/10 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(255,107,0,0.05)] p-7 backdrop-blur-xl self-center w-full lg:max-w-[460px] lg:justify-self-end text-white animate-[subtleFloat_6s_ease-in-out_infinite] reveal reveal-delay-300">
            <div className="flex justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <span className="block text-[#94a3b8] text-[0.72rem] font-extrabold uppercase tracking-widest">Sunloop AI Portal</span>
                <strong className="block text-white font-title text-[1.1rem] font-bold">Live ecosystem view</strong>
              </div>
              <Cpu size={22} className="text-[#FF6B00] animate-[pulseRing_2s_infinite_ease-in-out]" />
            </div>
            <div className="grid gap-4 mt-5">
              <div className="grid grid-cols-[24px_1fr_auto] items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:border-[#FF6B00]/20">
                <Sun size={18} className="text-[#FF6B00]" />
                <span className="text-[#94a3b8] text-[0.72rem] font-extrabold uppercase tracking-widest">Solar</span>
                <strong className="text-white font-title text-[1.1rem] font-bold">{solarGen} kW</strong>
              </div>
              <div className="grid grid-cols-[24px_1fr_auto] items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:border-[#FF6B00]/20">
                <Battery size={18} className="text-[#FF6B00]" />
                <span className="text-[#94a3b8] text-[0.72rem] font-extrabold uppercase tracking-widest">Storage</span>
                <strong className="text-white font-title text-[1.1rem] font-bold">{batterySOC}%</strong>
              </div>
              <div className="grid grid-cols-[24px_1fr_auto] items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:border-[#FF6B00]/20">
                <Car size={18} className="text-[#FF6B00]" />
                <span className="text-[#94a3b8] text-[0.72rem] font-extrabold uppercase tracking-widest">EV Load</span>
                <strong className="text-white font-title text-[1.1rem] font-bold">{evLoad} kWh</strong>
              </div>
            </div>
            <div className="h-1.5 mt-5 rounded-full bg-white/10 overflow-hidden relative">
              <span 
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#FF6B00] via-[#10B981] to-[#007AFF] transition-all duration-500 ease-in-out" 
                style={{ width: `${batterySOC}%` }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#090c12] text-white relative overflow-hidden reveal w-full">
        <div className="absolute -top-[10%] -left-[10%] w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,107,0,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center w-full max-w-full">
          <div className="reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer">CORE Vision</div>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] my-4 tracking-[-0.01em] leading-[1.15] bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent font-title font-bold">
              Clean Optimized Renewable Energy for every application.
            </h2>
            <p className="text-slate-400 text-[1.05rem] leading-[1.6]">
              Sunloop empowers homes, businesses, industries, and off-grid applications with AI-powered
              integrated solutions that generate, store, drive, monitor, optimize, and manage energy intelligently.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-white bg-white/5 font-semibold text-[0.9rem] transition-all hover:bg-white/10 hover:border-[#FF6B00]/30 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:-translate-y-0.5 cursor-default"><HomeIcon size={18} /> Residential</span>
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-white bg-white/5 font-semibold text-[0.9rem] transition-all hover:bg-white/10 hover:border-[#FF6B00]/30 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:-translate-y-0.5 cursor-default"><Building2 size={18} /> Commercial</span>
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-white bg-white/5 font-semibold text-[0.9rem] transition-all hover:bg-white/10 hover:border-[#FF6B00]/30 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:-translate-y-0.5 cursor-default"><Zap size={18} /> Industrial</span>
              <span className="inline-flex items-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-white bg-white/5 font-semibold text-[0.9rem] transition-all hover:bg-white/10 hover:border-[#FF6B00]/30 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:-translate-y-0.5 cursor-default"><Network size={18} /> Off Grid</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 reveal reveal-delay-200">
            {[
              ['Generate', <Sun key="generate-icon" size={26} />],
              ['Store', <Battery key="store-icon" size={26} />],
              ['Drive', <Car key="drive-icon" size={26} />],
              ['Manage', <Cpu key="manage-icon" size={26} />],
            ].map(([label, icon], i) => (
              <div key={label} className={`min-h-[160px] flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/5 border border-white/5 text-white transition-all duration-400 hover:-translate-y-[5px] hover:border-[#FF6B00]/40 hover:bg-gradient-to-br hover:from-[#FF6B00]/10 hover:to-white/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(255,107,0,0.15)] group reveal reveal-delay-${(i + 1) * 100}`}>
                <div className="text-[#FF6B00] transition-all duration-400 group-hover:scale-115 group-hover:rotate-6 group-hover:text-[#ff8a3d]">{icon}</div>
                <strong className="font-title text-[1.4rem] font-bold tracking-tight">{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 reveal w-full">
        <div className="container w-full max-w-full">
          <div className="w-full p-[clamp(2rem,4vw,4rem)] border border-slate-900/5 rounded-3xl bg-white shadow-[0_30px_70px_rgba(15,23,42,0.04)] reveal reveal-delay-100">
            <div className="max-w-[1400px] mx-auto text-center mb-14 reveal reveal-delay-200">
              <div className="badge badge-storage badge-shimmer mx-auto mb-5">Solutions</div>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold tracking-tight text-slate-900">Energy Storage Systems (ESS)</h2>
              <strong className="block text-xl text-[#FF6B00] mt-2 font-bold">Scalable. Reliable. Intelligent.</strong>
              <p className="max-w-[1200px] mx-auto mt-5 text-slate-600 text-[1.1rem] leading-[1.6]">Advanced energy storage solutions for every need - from homes to industries to utilities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutionCards.map((item, i) => (
                <article className={`flex flex-col bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-[#10B981]/30 hover:shadow-xl hover:-translate-y-2 group reveal reveal-delay-${(i + 1) * 100}`} key={item.title}>
                  <div className="relative h-[220px] bg-gradient-to-br from-[#E6F8F3] to-white p-6 flex justify-center items-center overflow-hidden">
                    <img src={item.image} alt={item.title} className="max-h-full max-w-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute top-4 right-4 bg-[#10B981] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{item.ribbon}</span>
                  </div>
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="flex gap-4 items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#E6F8F3] text-[#10B981] flex justify-center items-center shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-title text-[1.4rem] font-bold text-slate-900 leading-[1.2]">{item.title}</h3>
                        <p className="text-[#10B981] font-semibold text-[0.95rem] mt-1">{item.subtitle}</p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-3 mt-auto">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-[0.95rem] text-slate-600 items-start">
                          <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 p-8 bg-slate-900 rounded-2xl text-white reveal reveal-delay-300">
              {solutionFeatures.map((feature, i) => (
                <div className={`flex flex-col gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors reveal reveal-delay-${(i + 1) * 100}`} key={feature.title}>
                  <div className="text-[#10B981]">{feature.icon}</div>
                  <div>
                    <h4 className="font-title text-[1.1rem] font-bold mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-12 reveal reveal-delay-400">
              <Link to="/ess">
                <button className="btn btn-storage shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:-translate-y-1">
                  Explore ESS
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/solar">
                <button className="btn btn-secondary bg-transparent border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400">Solar Plants</button>
              </Link>
              <Link to="/ev-charging">
                <button className="btn btn-secondary bg-transparent border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400">EV Charging</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white relative overflow-hidden reveal w-full">
        <div className="container w-full max-w-full">
          <div className="text-center max-w-[800px] mx-auto mb-16 reveal reveal-delay-100">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 leading-tight">Start With What You Need.</h2>
            <strong className="block text-[clamp(1.2rem,2vw,1.5rem)] text-[#FF6B00] mt-3 font-semibold">Add What You Want. All Connected to One Intelligent Platform.</strong>
            <p className="mt-4 text-slate-600 text-lg">Purchase any one system initially and get complimentary AI Powered Portal for daily insights and control.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-4 mb-20 relative z-10">
            <div className="flex-1 flex flex-col justify-between gap-4 reveal reveal-delay-200">
              {starterSystems.map((system, index) => (
                <React.Fragment key={system.title}>
                  <article className="flex items-center gap-6 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="w-[120px] shrink-0 h-[90px] bg-slate-50 rounded-xl p-2 flex items-center justify-center">
                      <img src={system.image} alt={system.title} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-title text-lg font-bold text-slate-900">{system.title}</h3>
                      <div className="flex items-start gap-2 mt-2 text-slate-600 text-sm">
                        <span className={`text-[var(--color-${system.tone})] shrink-0 mt-0.5`}>{system.icon}</span>
                        <p>{system.text}</p>
                      </div>
                    </div>
                  </article>
                  {index < starterSystems.length - 1 && <div className="text-center text-slate-300 font-black text-sm my-1">OR</div>}
                </React.Fragment>
              ))}
            </div>

            <div className="hidden lg:flex items-center justify-center text-4xl text-slate-200 font-light reveal reveal-delay-200 px-4">+</div>
            <div className="flex lg:hidden items-center justify-center text-4xl text-slate-200 font-light reveal reveal-delay-200 py-4">+</div>

            <div className="flex-[1.5] bg-[#0d1117] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col lg:flex-row items-stretch reveal reveal-delay-300">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,122,255,0.15),transparent_60%)] pointer-events-none" />
              
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-white font-title text-2xl font-bold mb-6">Sunloop AI Energy Portal</h3>
                  <div className="relative -ml-6 -mr-6 lg:ml-0 lg:mr-0 aspect-[16/10]">
                    <img src={pdfAsset('clean/ai-portal-devices.png')} alt="Sunloop AI Energy Portal dashboard" className="w-full h-full object-cover object-left-top scale-110 origin-left" />
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#007AFF] text-white flex justify-center items-center shrink-0 shadow-[0_0_20px_rgba(0,122,255,0.4)]">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <strong className="block text-white font-bold">Complimentary AI Powered Portal</strong>
                    <p className="text-slate-400 text-sm mt-1">Real-time monitoring, daily reports, AI insights and more.</p>
                  </div>
                </div>
              </div>

              <div className="flex-[0.8] bg-white/5 border-l border-white/10 p-8 lg:p-10 flex flex-col justify-center backdrop-blur-md relative z-10">
                <div className="badge badge-portal bg-[#007AFF]/20 text-[#409cff] border border-[#007AFF]/30 mb-6 w-fit">AI Energy Portal</div>
                <h4 className="text-white font-title text-xl font-bold mb-4">Monitor, control and optimize every energy asset.</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  A single intelligent dashboard connects Solar, ESS and EV Charging with live monitoring,
                  AI analytics, predictive alerts, remote control and carbon reduction tracking.
                </p>
                <div className="grid grid-cols-1 gap-4 mb-10">
                  {portalFeatures.map(([label, icon], i) => (
                    <div key={label} className="flex gap-3 text-slate-300 items-center text-sm font-medium">
                      <span className="text-[#007AFF]">{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/ai-portal" className="w-full">
                    <button className="btn btn-portal w-full justify-between group">
                      Open Portal Demo
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                  <Link to="/contact" className="w-full">
                    <button className="btn w-full bg-transparent border border-white/20 text-white hover:bg-white/10">Request Access</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-[700px] mx-auto mt-24 mb-14 reveal reveal-delay-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Expand When You Need - Seamlessly Integrated</h3>
            <p className="text-slate-600">Add more systems in the future and integrate easily with the same portal. It's simple, flexible and future-ready.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-20 reveal reveal-delay-300">
            {expansionSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <article className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-6 relative hover:shadow-lg hover:border-slate-300 transition-all group">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-slate-900 text-white flex justify-center items-center font-bold font-title border-4 border-white shadow-sm z-10">{step.number}</div>
                  <h4 className="font-title text-lg font-bold text-slate-900 mb-2 mt-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 mb-6">{step.copy}</p>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 mb-4 flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold text-slate-700 items-center">
                    {step.formula.map((item, itemIndex) => (
                      <React.Fragment key={item}>
                        <span>{item}</span>
                        {itemIndex < step.formula.length - 1 && <b className="text-[#FF6B00]">+</b>}
                      </React.Fragment>
                    ))}
                  </div>
                  <small className="block text-xs text-[#FF6B00] font-medium p-2 bg-[#FFF0E6] rounded-lg text-center">{step.caption}</small>
                </article>
                {index < expansionSteps.length - 1 && <div className="hidden lg:flex items-center text-slate-300 shrink-0"><ArrowRight size={22} /></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-10 text-white flex flex-col lg:flex-row items-center gap-8 justify-between reveal reveal-delay-400">
            <strong className="text-2xl font-title shrink-0">Why Sunloop Ecosystem?</strong>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              {ecosystemBenefits.map(([label, icon]) => (
                <div key={label} className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl border border-white/10 text-sm font-medium">
                  <span className="text-[#FF6B00]">{icon}</span>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-t border-slate-100 reveal w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-full">
          <div className="reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer mb-6">Built to Last</div>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight text-slate-900 leading-tight mb-6">Intelligent. Reliable. Sustainable. Future-ready.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Started in 2016 and headquartered in Coimbatore, Sunloop Energy delivers engineering, execution,
              monitoring, and after-sales support for homeowners, commercial establishments, industries,
              educational institutions, hospitals, and government organizations.
            </p>
            <Link to="/about">
              <button className="btn btn-primary shadow-lg hover:-translate-y-1">
                Read Our Story
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal reveal-delay-200">
            {values.map(([title, copy], idx) => (
              <div key={title} className={`p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#FF6B00]/30 hover:shadow-md transition-all reveal reveal-delay-${(idx + 1) * 100}`}>
                <CheckCircle2 size={24} className="text-[#FF6B00] mb-4" />
                <strong className="block font-title text-xl font-bold text-slate-900 mb-2">{title}</strong>
                <p className="text-sm text-slate-600 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-900 text-white reveal w-full pb-32">
        <div className="container w-full max-w-full">
          <div className="text-center max-w-[800px] mx-auto mb-16 reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer mx-auto mb-6 bg-[#FF6B00]/20 border border-[#FF6B00]/30 text-[#FF8A3D]">Build Your System</div>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight mb-4">Choose the energy asset you need today.</h2>
            <p className="text-slate-400 text-lg">
              Start with EV charging, battery storage or rooftop solar. Add more later and manage everything
              through the Sunloop AI Energy Portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residentialSystems.map((system, idx) => (
              <article className={`flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:bg-white/10 hover:border-[#FF6B00]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] reveal reveal-delay-${(idx + 1) * 100}`} key={system.title}>
                <div className={`h-[200px] p-8 flex justify-center items-center bg-white/5 ${system.imageClass || ''}`}>
                  <img src={system.image} alt={system.title} className="max-w-full max-h-full object-contain filter drop-shadow-xl" />
                </div>
                <div className="flex-1 p-8 flex flex-col relative">
                  <div className="absolute -top-8 right-8 w-16 h-16 rounded-2xl bg-[#FF6B00] text-white flex justify-center items-center shadow-lg">
                    {system.icon}
                  </div>
                  <h3 className="font-title text-2xl font-bold mb-2 pr-16">{system.title}</h3>
                  <div className="w-12 h-1 bg-[#FF6B00] mb-4 rounded-full" />
                  <p className="text-[#FF8A3D] font-semibold mb-3">{system.subtitle}</p>
                  <small className="text-slate-400 text-sm leading-relaxed block mb-8 flex-1">{system.copy}</small>
                  <Link to={system.path} className="mt-auto">
                    <button className="btn w-full bg-white/10 text-white border-white/10 hover:bg-white/20 group">
                      {system.cta}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-20 reveal reveal-delay-300">
            <Link to="/contact">
              <button className="btn btn-primary px-8 py-4 text-lg shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:-translate-y-1">
                Request Consultation
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/ai-portal">
              <button className="btn border border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-lg">View AI Portal</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
