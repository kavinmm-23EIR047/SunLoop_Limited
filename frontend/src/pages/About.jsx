import React from 'react';
import { 
  Building2, Users, Compass, Eye, Heart, Landmark, ShieldCheck, HelpCircle, ArrowRight 
} from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Innovation', desc: 'We continuously embrace new technologies, AI, automation, and digital intelligence to create smarter energy solutions.' },
    { title: 'Sustainability', desc: 'Every solution we deliver contributes toward reducing carbon emissions and protecting the environment for future generations.' },
    { title: 'Customer Success', desc: 'Our customers are our long-term partners. Their growth, savings, and operational excellence define our success.' },
    { title: 'Reliability', desc: 'We design robust systems using proven engineering practices to ensure dependable performance for years.' },
    { title: 'Transparency', desc: 'From design and installation to monitoring and reporting, we believe in complete visibility, honest communication, and measurable results.' },
    { title: 'Excellence', desc: 'We pursue excellence in engineering, execution, safety, service, and customer experience.' }
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* Header section */}
      <section style={{ background: 'linear-gradient(135deg, #FFF9F5 0%, #FFFFFF 100%)', padding: '4rem 0 3rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div className="container">
          <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>Our Profile</div>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>About Sunloop Energy</h1>
          <p style={{ color: 'var(--text-medium)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.6' }}>
            A next-generation clean energy company started in 2016, dedicated to transforming how energy is generated, stored, managed, and consumed. Headquartered in Coimbatore, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Corporate Summary section */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.25rem', fontWeight: 800 }}>
              Creating Intelligent Energy Ecosystems
            </h2>
            <p style={{ color: 'var(--text-medium)', marginBottom: '1.25rem' }}>
              We specialize in delivering intelligent and sustainable energy solutions through Solar Power Plants, Energy Storage Systems (ESS), and EV Charging Infrastructure. All are seamlessly connected through our proprietary AI Energy Management Portal.
            </p>
            <p style={{ color: 'var(--text-medium)', marginBottom: '1.25rem' }}>
              Our integrated ecosystem empowers homeowners, commercial establishments, industries, educational institutions, hospitals, and government organizations with complete visibility and control over their energy assets.
            </p>
            <p style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--brand-orange)', borderLeft: '3px solid var(--brand-orange)', paddingLeft: '1rem' }}>
              “We don't just install energy systems, we create intelligent energy ecosystems”
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'var(--off-white)', padding: '2rem', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Landmark size={20} style={{ color: 'var(--brand-orange)' }} />
              Quick Company Profile
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-medium)' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                <strong>Founded</strong> <span>2016</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                <strong>Headquarters</strong> <span>Coimbatore, Tamil Nadu</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                <strong>Core Offerings</strong> <span>Solar, Storage (ESS), EV Chargers, AI Portal</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                <strong>Operations</strong> <span>Residential, Commercial & Utility Scale</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="section" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container grid-2">
          
          {/* Vision card */}
          <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--white)', borderTop: '5px solid var(--color-storage)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ backgroundColor: 'var(--color-storage-light)', color: 'var(--color-storage)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Our Vision</h3>
            </div>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.98rem', lineHeight: '1.7' }}>
              To empower homes, businesses, and industries with Clean, Optimized, Renewable Energy (CORE) solutions through advanced Solar Power Plants, Energy Storage Systems, and EV Charging Infrastructure—building a sustainable future for generations to come.
            </p>
          </div>

          {/* Mission card */}
          <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: 'var(--white)', borderTop: '5px solid var(--brand-orange)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ backgroundColor: 'var(--brand-orange-light)', color: 'var(--brand-orange)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Our Mission</h3>
            </div>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              At Sunloop Energy, we are committed to delivering innovative, efficient and future-ready energy solutions that help our customers reduce their utility bill and carbon footprint both at the same time, while achieving long-term energy security.
            </p>
            <p style={{ color: 'var(--text-medium)', fontSize: '0.98rem', lineHeight: '1.7' }}>
              We accelerate the transition towards sustainable energy by designing, deploying, and managing intelligent renewable energy solutions that deliver measurable value to every customer.
            </p>
          </div>

        </div>
      </section>

      {/* Values section */}
      <section className="section">
        <div className="container">
          <div className="badge badge-orange" style={{ margin: '0 auto 1rem auto', display: 'flex' }}>Shared Philosophy</div>
          <h2 className="section-title">Our Core <span>Values</span></h2>
          <p className="section-subtitle">The guiding principles behind every engineering draft, installer deployment, and software line we write.</p>

          <div className="grid-3">
            {values.map((val, idx) => (
              <div key={idx} style={{ padding: '1.75rem', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-orange)' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{val.title}</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-medium)', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
