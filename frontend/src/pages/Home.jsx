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
    <div className="pdf-home">
      <section className="pdf-hero">
        {/* Floating particles background */}
        <div className="hero-particles" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="hero-particle"
              style={{
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

        <div className="pdf-hero__image" aria-hidden="true">
          <img src={pdfAsset('sunloop-pdf-p01-02.png')} alt="" />
        </div>

        <div className="container pdf-hero__content">
          <div className="pdf-hero__copy reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} />
              Pathway to Sustainable Future
            </div>
            <h1>
              Powering Tomorrow,
              <span>Sustainably.</span>
            </h1>
            <p className="pdf-hero__lead text-gradient">Clean. Intelligent. Integrated.</p>
            <p>
              Sunloop Energy builds next-generation clean energy ecosystems by connecting Solar Power Plants,
              Energy Storage Systems, EV Charging Stations, and a proprietary AI Energy Management Portal.
            </p>
            <div className="pdf-hero__actions">
              <Link to="/contact">
                <button className="btn btn-primary">
                  Start Your Energy Plan
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/ai-portal">
                <button className="btn btn-secondary">Explore AI Portal</button>
              </Link>
            </div>
          </div>

          <div className="pdf-live-panel reveal reveal-delay-300">
            <div className="pdf-live-panel__top">
              <div>
                <span>Sunloop AI Portal</span>
                <strong>Live ecosystem view</strong>
              </div>
              <Cpu size={22} />
            </div>
            <div className="pdf-live-panel__grid">
              <div>
                <Sun size={18} />
                <span>Solar</span>
                <strong>{solarGen} kW</strong>
              </div>
              <div>
                <Battery size={18} />
                <span>Storage</span>
                <strong>{batterySOC}%</strong>
              </div>
              <div>
                <Car size={18} />
                <span>EV Load</span>
                <strong>{evLoad} kWh</strong>
              </div>
            </div>
            <div className="pdf-live-panel__bar">
              <span style={{ width: `${batterySOC}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section pdf-core reveal">
        <div className="container pdf-core__grid">
          <div className="reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer">CORE Vision</div>
            <h2>
              Clean Optimized Renewable Energy for every application.
            </h2>
            <p>
              Sunloop empowers homes, businesses, industries, and off-grid applications with AI-powered
              integrated solutions that generate, store, drive, monitor, optimize, and manage energy intelligently.
            </p>
            <div className="pdf-segment-list">
              <span><HomeIcon size={18} /> Residential</span>
              <span><Building2 size={18} /> Commercial</span>
              <span><Zap size={18} /> Industrial</span>
              <span><Network size={18} /> Off Grid</span>
            </div>
          </div>
          <div className="pdf-core__visual reveal reveal-delay-200">
            {[
              ['Generate', <Sun key="generate-icon" size={26} />],
              ['Store', <Battery key="store-icon" size={26} />],
              ['Drive', <Car key="drive-icon" size={26} />],
              ['Manage', <Cpu key="manage-icon" size={26} />],
            ].map(([label, icon], i) => (
              <div key={label} className={`reveal reveal-delay-${(i + 1) * 100}`}>
                {icon}
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pdf-solutions reveal">
        <div className="container">
          <div className="pdf-slide reveal reveal-delay-100">
            <div className="pdf-slide__heading reveal reveal-delay-200">
              <h2>Energy Storage Systems (ESS)</h2>
              <strong>Scalable. Reliable. Intelligent.</strong>
              <p>Advanced energy storage solutions for every need - from homes to industries to utilities.</p>
            </div>

            <div className="pdf-slide__cards">
              {solutionCards.map((item, i) => (
                <article className={`pdf-product-card reveal reveal-delay-${(i + 1) * 100}`} key={item.title}>
                  <div className="pdf-product-card__media">
                    <img src={item.image} alt={item.title} />
                    <span>{item.ribbon}</span>
                  </div>
                  <div className="pdf-product-card__content">
                    <div className="pdf-product-card__title-row">
                      <div className="pdf-product-card__icon">{item.icon}</div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={15} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="pdf-slide__features reveal reveal-delay-300">
              {solutionFeatures.map((feature, i) => (
                <div className={`pdf-slide-feature reveal reveal-delay-${(i + 1) * 100}`} key={feature.title}>
                  <div>{feature.icon}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pdf-slide__actions reveal reveal-delay-400">
              <Link to="/ess">
                <button className="btn btn-primary">
                  Explore ESS
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/solar">
                <button className="btn btn-secondary">Solar Plants</button>
              </Link>
              <Link to="/ev-charging">
                <button className="btn btn-secondary">EV Charging</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-platform-flow reveal">
        <div className="container">
          <div className="home-platform-flow__heading reveal reveal-delay-100">
            <h2>Start With What You Need.</h2>
            <strong>Add What You Want. All Connected to One Intelligent Platform.</strong>
            <p>Purchase any one system initially and get complimentary AI Powered Portal for daily insights and control.</p>
          </div>

          <div className="home-platform-flow__top">
            <div className="platform-system-list reveal reveal-delay-200">
              {starterSystems.map((system, index) => (
                <React.Fragment key={system.title}>
                  <article className={`platform-system-card platform-system-card--${system.tone} reveal reveal-delay-${(index + 1) * 100}`}>
                    <h3>{system.title}</h3>
                    <div className={`platform-system-card__image ${system.imageClass || ''}`}>
                      <img src={system.image} alt={system.title} />
                    </div>
                    <div className="platform-system-card__copy">
                      <span>{system.icon}</span>
                      <p>{system.text}</p>
                    </div>
                  </article>
                  {index < starterSystems.length - 1 && <div className="platform-or">OR</div>}
                </React.Fragment>
              ))}
            </div>

            <div className="platform-plus reveal reveal-delay-200">+</div>

            <div className="platform-portal-card reveal reveal-delay-300">
              <div className="platform-portal-grid-layout">
                {/* Left Side: Visuals */}
                <div className="platform-portal-visual-col">
                  <h3>Sunloop AI Energy Portal</h3>
                  <div className="platform-portal-img-wrapper">
                    <img src={pdfAsset('clean/ai-portal-devices.png')} alt="Sunloop AI Energy Portal dashboard on laptop and phone" />
                  </div>
                  <div className="platform-portal-card__footer">
                    <div className="platform-portal-card__icon">
                      <Sparkles size={30} />
                    </div>
                    <div>
                      <strong>Complimentary AI Powered Portal</strong>
                      <p>Real-time monitoring, daily reports, AI insights and more.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Copy & Features */}
                <div className="platform-portal-info-col">
                  <div className="badge badge-portal">AI Energy Portal</div>
                  <h4>Monitor, control and optimize every energy asset.</h4>
                  <p>
                    A single intelligent dashboard connects Solar, ESS and EV Charging with live monitoring,
                    AI analytics, predictive alerts, remote control and carbon reduction tracking.
                  </p>
                  <div className="platform-portal-features">
                    {portalFeatures.map(([label, icon], i) => (
                      <div key={label} className={`reveal reveal-delay-${(i + 1) * 50}`}>
                        {icon}
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="platform-portal-actions">
                    <Link to="/ai-portal">
                      <button className="btn btn-portal">
                        Open Portal Demo
                        <ArrowRight size={16} />
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="btn btn-secondary">Request Access</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-platform-flow__expand reveal reveal-delay-200">
            <h3>Expand When You Need - Seamlessly Integrated</h3>
            <p>Add more systems in the future and integrate easily with the same portal. It's simple, flexible and future-ready.</p>
          </div>

          <div className="platform-steps reveal reveal-delay-300">
            {expansionSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <article className={`platform-step reveal reveal-delay-${(index + 1) * 100}`}>
                  <div className="platform-step__number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.copy}</p>
                  <div className="platform-step__formula">
                    {step.formula.map((item, itemIndex) => (
                      <React.Fragment key={item}>
                        <span>{item}</span>
                        {itemIndex < step.formula.length - 1 && <b>+</b>}
                      </React.Fragment>
                    ))}
                  </div>
                  <small>{step.caption}</small>
                </article>
                {index < expansionSteps.length - 1 && <ArrowRight className="platform-step__arrow" size={22} />}
              </React.Fragment>
            ))}
          </div>

          <div className="platform-benefits reveal reveal-delay-400">
            <strong>Why Sunloop Ecosystem?</strong>
            {ecosystemBenefits.map(([label, icon]) => (
              <div key={label}>
                <span>{icon}</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pdf-proof reveal">
        <div className="container pdf-proof__grid">
          <div className="reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer">Built to Last</div>
            <h2>Intelligent. Reliable. Sustainable. Future-ready.</h2>
            <p>
              Started in 2016 and headquartered in Coimbatore, Sunloop Energy delivers engineering, execution,
              monitoring, and after-sales support for homeowners, commercial establishments, industries,
              educational institutions, hospitals, and government organizations.
            </p>
            <Link to="/about">
              <button className="btn btn-primary">
                Read Our Story
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <div className="pdf-values-grid reveal reveal-delay-200">
            {values.map(([title, copy], idx) => (
              <div key={title} className={`reveal reveal-delay-${(idx + 1) * 100}`}>
                <CheckCircle2 size={18} />
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-system-showcase reveal">
        <div className="container">
          <div className="home-system-showcase__heading reveal reveal-delay-100">
            <div className="badge badge-orange badge-shimmer">Build Your System</div>
            <h2>Choose the energy asset you need today.</h2>
            <p>
              Start with EV charging, battery storage or rooftop solar. Add more later and manage everything
              through the Sunloop AI Energy Portal.
            </p>
          </div>

          <div className="home-system-showcase__grid">
            {residentialSystems.map((system, idx) => (
              <article className={`home-system-card reveal reveal-delay-${(idx + 1) * 100}`} key={system.title}>
                <div className={`home-system-card__image ${system.imageClass || ''}`}>
                  <img src={system.image} alt={system.title} />
                </div>
                <div className="home-system-card__body">
                  <div className="home-system-card__icon">{system.icon}</div>
                  <div>
                    <h3>{system.title}</h3>
                    <span />
                    <p>{system.subtitle}</p>
                    <small>{system.copy}</small>
                    <Link to={system.path}>
                      <button className="btn btn-secondary">
                        {system.cta}
                        <ArrowRight size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-system-showcase__footer reveal reveal-delay-300">
            <Link to="/contact">
              <button className="btn btn-primary">
                Request Consultation
                <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/ai-portal">
              <button className="btn btn-secondary">View AI Portal</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
