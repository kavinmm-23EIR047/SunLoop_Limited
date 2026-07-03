import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Compass, Cpu, Zap, Battery } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--dark-charcoal)', color: 'var(--white)', padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        
        {/* Company Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Logo height={56} showText={true} />
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
            Sunloop Energy is a next-generation clean energy company started in 2016. We specialize in delivering AI-powered integrated energy systems.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '50%', color: 'var(--brand-orange)', display: 'inline-flex' }}>
              <Compass size={18} />
            </span>
            <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-storage)', display: 'inline-flex' }}>
              <Battery size={18} />
            </span>
            <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-portal)', display: 'inline-flex' }}>
              <Cpu size={18} />
            </span>
            <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-solar)', display: 'inline-flex' }}>
              <Zap size={18} />
            </span>
          </div>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--brand-orange)' }}>
            Solutions
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>
              <Link to="/solar" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                Solar Power Plants
              </Link>
            </li>
            <li>
              <Link to="/ess" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                Energy Storage Systems (ESS)
              </Link>
            </li>
            <li>
              <Link to="/ev-charging" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                EV Charging Stations
              </Link>
            </li>
            <li>
              <Link to="/ai-portal" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                Sunloop AI Energy Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links Column */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--brand-orange)' }}>
            Company
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>
              <Link to="/" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                Contact & Support
              </Link>
            </li>
            <li>
              <a href="https://www.sunloopenergy.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }} className="footer-link">
                Official Website
              </a>
            </li>
          </ul>
        </div>

        {/* Head Office Column */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--brand-orange)' }}>
            Headquarters
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: 'var(--brand-orange)', flexShrink: 0, marginTop: '2px' }} />
              <span>
                Coimbatore,<br />Tamil Nadu, India
              </span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Phone size={18} style={{ color: 'var(--brand-orange)' }} />
              <span>+91 422 1234567</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Mail size={18} style={{ color: 'var(--brand-orange)' }} />
              <span>info@sunloopenergy.com</span>
            </li>
          </ul>
        </div>

      </div>

      <hr style={{ border: 0, borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '2rem' }} />

      {/* Legal & Copyright */}
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
          &copy; {currentYear} Sunloop Energy. All rights reserved. Headquartered in Coimbatore, TN.
        </p>
        <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', display: 'flex', gap: '1.5rem' }}>
          <span>"Powering Tomorrow, Sustainably"</span>
          <span style={{ color: 'var(--brand-orange)' }}>Clean. Intelligent. Integrated.</span>
        </p>
      </div>

      {/* Inline styles for hover effects */}
      <style>{`
        .footer-link:hover {
          color: var(--brand-orange) !important;
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
