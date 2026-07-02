import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, Battery, Car, Cpu, ArrowRight, CheckCircle2, ShieldCheck, Zap, TrendingUp, Sparkles
} from 'lucide-react';

const Home = () => {
  // Live metric tick generator for the quick teaser dashboard
  const [solarGen, setSolarGen] = useState(125.6);
  const [batterySOC, setBatterySOC] = useState(85);
  const [evLoad, setEvLoad] = useState(42.7);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live fluctuating energy metrics
      setSolarGen(prev => +(prev + (Math.random() - 0.48) * 0.5).toFixed(1));
      setBatterySOC(prev => {
        const change = Math.random() > 0.6 ? 1 : Math.random() > 0.6 ? -1 : 0;
        const next = prev + change;
        return next > 100 ? 100 : next < 5 ? 5 : next;
      });
      setEvLoad(prev => +(prev + (Math.random() - 0.5) * 0.3).toFixed(1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      id: 'solar',
      title: 'Solar Power Plants',
      subtitle: 'Clean energy generation for a brighter tomorrow.',
      icon: <Sun size={28} />,
      color: 'var(--color-solar)',
      lightBg: 'var(--color-solar-light)',
      badge: 'Generate',
      path: '/solar',
      points: ['Rooftop solar for homes (3kW - 30kW)', 'Commercial systems (5kW - 500kW)', 'Utility scale MW projects']
    },
    {
      id: 'ess',
      title: 'Energy Storage Systems (ESS)',
      subtitle: 'Store energy. Optimize usage. Ensure uninterrupted power.',
      icon: <Battery size={28} />,
      color: 'var(--color-storage)',
      lightBg: 'var(--color-storage-light)',
      badge: 'Store',
      path: '/ess',
      points: ['Advanced Lithium-Ion & LiFePO4 chemistry', 'Stackable design (5kWh - 50kWh)', 'Peak shaving & energy independence']
    },
    {
      id: 'ev',
      title: 'EV Charging Infrastructure',
      subtitle: 'Powering electric mobility for a sustainable future.',
      icon: <Car size={28} />,
      color: 'var(--color-ev)',
      lightBg: 'var(--color-ev-light)',
      badge: 'Drive',
      path: '/ev-charging',
      points: ['Smart AC Chargers (7.4kW - 22kW)', 'High-speed DC Chargers (30kW - 240kW)', 'Fleet and public network compatible']
    },
    {
      id: 'portal',
      title: 'AI Energy Portal',
      subtitle: 'One Ecosystem. Complete Energy Intelligence.',
      icon: <Cpu size={28} />,
      color: 'var(--color-portal)',
      lightBg: 'var(--color-portal-light)',
      badge: 'Manage',
      path: '/ai-portal',
      points: ['Real-time remote monitoring & control', 'AI analytics & automated optimization', 'Predictive alerts & carbon tracking']
    }
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      
      {/* Hero Section */}
      <section 
        style={{ 
          position: 'relative',
          padding: '8rem 0 6rem 0',
          background: 'linear-gradient(135deg, #FFF9F5 0%, #FFFFFF 50%, #F5F7FA 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Background Decorative Rings */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,122,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container grid-2" style={{ alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="badge badge-orange">
              <Sparkles size={12} />
              AI-Powered Clean Energy Ecosystem
            </div>
            
            <h1 style={{ fontSize: '3.75rem', lineHeight: '1.15', fontWeight: 800 }}>
              Powering Tomorrow, <br />
              <span className="text-gradient">Sustainably.</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-medium)', fontWeight: 500, lineHeight: '1.5' }}>
              Clean. Intelligent. Integrated.
            </p>
            
            <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', maxWidth: '520px' }}>
              Sunloop Energy builds intelligent renewable energy ecosystems by seamlessly connecting advanced Solar Plants, Energy Storage (ESS), and EV Charging stations through a proprietary AI Energy Management Portal.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/contact">
                <button className="btn btn-primary">
                  Get Free Consultation
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/ai-portal">
                <button className="btn btn-secondary">
                  Explore Live Demo
                </button>
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--brand-orange)' }}>10+ MW</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Solar Deployed</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--color-storage)' }}>2+ MWh</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Energy Storage</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--dark-charcoal)' }}>2016</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase' }}>Serving TN Since</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual (SVG Carport Graphic / Mockup Hybrid) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div 
              className="glass-card" 
              style={{ 
                width: '100%', 
                maxWidth: '520px', 
                padding: '1.75rem', 
                borderRadius: 'var(--radius-lg)', 
                position: 'relative',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.75)'
              }}
            >
              {/* Mini Interactive Portal Panel */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-storage)', animation: 'pulse-ring 2s infinite' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-medium)', textTransform: 'uppercase', fontFamily: 'var(--font-title)' }}>Sunloop AI Portal Live</span>
                </div>
                <div className="badge badge-portal" style={{ fontSize: '0.65rem' }}>Active Node</div>
              </div>

              {/* Display widgets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Solar Widget */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--color-solar-light)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ backgroundColor: 'var(--color-solar)', color: 'var(--white)', padding: '0.4rem', borderRadius: '8px', display: 'flex' }}><Sun size={18} /></div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: 600 }}>Solar Generation</p>
                      <h4 style={{ color: 'var(--color-solar)', fontSize: '1.15rem' }}>{solarGen} kW</h4>
                    </div>
                  </div>
                  <div style={{ color: 'var(--color-storage)', display: 'flex', alignItems: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                    <TrendingUp size={14} style={{ marginRight: '2px' }} /> +12.5%
                  </div>
                </div>

                {/* Battery SOC Widget */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--color-storage-light)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ backgroundColor: 'var(--color-storage)', color: 'var(--white)', padding: '0.4rem', borderRadius: '8px', display: 'flex' }}><Battery size={18} /></div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: 600 }}>Battery Storage (SOC)</p>
                      <h4 style={{ color: 'var(--color-storage)', fontSize: '1.15rem' }}>{batterySOC}%</h4>
                    </div>
                  </div>
                  <div style={{ color: 'var(--color-storage)', display: 'flex', alignItems: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                    <TrendingUp size={14} style={{ marginRight: '2px' }} /> +8.3%
                  </div>
                </div>

                {/* EV Charging Widget */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--color-ev-light)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ backgroundColor: 'var(--color-ev)', color: 'var(--white)', padding: '0.4rem', borderRadius: '8px', display: 'flex' }}><Car size={18} /></div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: 600 }}>EV Charging Load</p>
                      <h4 style={{ color: 'var(--color-ev)', fontSize: '1.15rem' }}>{evLoad} kWh</h4>
                    </div>
                  </div>
                  <div style={{ color: 'var(--color-storage)', display: 'flex', alignItems: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                    <TrendingUp size={14} style={{ marginRight: '2px' }} /> +15.2%
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: 600 }}>CO₂ REDUCED TODAY</p>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-storage)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    2.35 t <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>🌱</span>
                  </h4>
                </div>
                <Link to="/ai-portal">
                  <button className="btn btn-portal" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                    Open Dashboard
                    <ArrowRight size={12} />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Visual background element representing solar structure */}
            <div style={{
              position: 'absolute',
              zIndex: -1,
              width: '100%',
              height: '100%',
              border: '2px dashed rgba(255,107,0,0.15)',
              borderRadius: 'var(--radius-lg)',
              transform: 'rotate(-3deg) scale(1.02)'
            }} />
          </div>

        </div>
      </section>

      {/* CORE Vision Section */}
      <section className="section" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container">
          <div className="badge badge-orange" style={{ margin: '0 auto 1rem auto', display: 'flex' }}>Our Vision</div>
          <h2 className="section-title">Clean. Optimized. Renewable. <span>Energy (CORE)</span></h2>
          <p className="section-subtitle">
            "Generate. Store. Drive." - Empowering homes, businesses, and industries with AI-powered integrated solutions.
          </p>

          <div className="grid-2" style={{ alignItems: 'center', marginTop: '2rem' }}>
            {/* Left Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--dark-charcoal)' }}>
                "Ai Powered Integrated Solution"
              </h3>
              <p style={{ color: 'var(--text-medium)' }}>
                Our CORE vision is to reshape how clean power is generated, stored, distributed, and consumed. We specialize in uniting technologies that traditionally function in isolation into one seamless ecosystem, enabling maximum financial return and operational simplicity.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                {[
                  { title: 'Residential Customization', desc: 'Sized solar systems (3-30 kW) coupled with compact, stackable lithium backup.' },
                  { title: 'Commercial & Corporate Buildings', desc: 'Mid-sized systems (5-500 kW) with peak shaving to slash high utility tariff hours.' },
                  { title: 'Industrial & Off-Grid Utility', desc: 'Megawatt scale custom engineering and storage containers built for continuous runtime.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--brand-orange)', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right SDG Graphic Column */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                className="glass-card" 
                style={{ 
                  padding: '2.5rem', 
                  maxWidth: '450px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '1.5rem',
                  borderTop: '5px solid #F9C714', /* SDG 7 Yellow color */
                  backgroundColor: 'var(--white)'
                }}
              >
                {/* Custom representation of SDG 7 icon */}
                <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: '#F9C714', color: 'var(--white)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
                  <Sun size={48} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#F9C714', textTransform: 'uppercase', letterSpacing: '0.1em' }}>UN SDG Goal 7</span>
                  <h3 style={{ fontSize: '1.4rem', margin: '0.25rem 0' }}>Affordable & Clean Energy</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                    Sunloop Energy actively supports United Nations Sustainable Development Goal 7 by creating technologies that make renewable energy affordable, reliable, and accessible for everyone.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', width: '100%', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem', justifyContent: 'space-around' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--brand-orange)' }}>100%</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: 600 }}>Renewable</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-storage)' }}>Zero</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: 600 }}>Carbon</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-portal)' }}>Smart</h4>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: 600 }}>Grid Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="section">
        <div className="container">
          <div className="badge badge-portal" style={{ margin: '0 auto 1rem auto', display: 'flex' }}>Our Offerings</div>
          <h2 className="section-title">Integrated <span>Solutions</span></h2>
          <p className="section-subtitle">
            Providing end-to-end electrical and smart digital systems designed to operate in perfect synergy.
          </p>

          <div className="grid-4">
            {solutions.map((sol) => (
              <div 
                key={sol.id} 
                className="glass-card hover-lift"
                style={{ 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  borderTop: `4px solid ${sol.color}`
                }}
              >
                <div>
                  <div 
                    style={{ 
                      color: sol.color, 
                      backgroundColor: sol.lightBg, 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {sol.icon}
                  </div>
                  
                  <span className="badge" style={{ backgroundColor: sol.lightBg, color: sol.color, fontSize: '0.65rem', marginBottom: '0.5rem' }}>
                    {sol.badge}
                  </span>
                  
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                    {sol.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                    {sol.subtitle}
                  </p>
                  
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                    {sol.points.map((pt, i) => (
                      <li key={i} style={{ fontSize: '0.78rem', color: 'var(--text-medium)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                        <span style={{ color: sol.color, fontWeight: 'bold' }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={sol.path}>
                  <button className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem', color: sol.color, borderColor: sol.color }}>
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner / CTA */}
      <section 
        className="section" 
        style={{ 
          background: 'linear-gradient(135deg, var(--dark-charcoal) 0%, #111827 100%)', 
          color: 'var(--white)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(var(--brand-orange) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '2.2rem', fontWeight: 800 }}>
            "We don't just install energy systems, we create intelligent energy ecosystems"
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Ready to reduce utility bills, maximize system performance, and achieve long-term energy security? Request a custom engineering proposal today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn btn-primary" style={{ padding: '0.85rem 2.25rem' }}>
                Contact Coimbatore HQ
              </button>
            </Link>
            <Link to="/about">
              <button className="btn btn-secondary" style={{ color: 'var(--white)', borderColor: 'rgba(255,255,255,0.2)', padding: '0.85rem 2.25rem' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                Read Our Story
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
