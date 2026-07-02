import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Activity } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solar Plants', path: '/solar' },
    { name: 'Energy Storage (ESS)', path: '/ess' },
    { name: 'EV Charging', path: '/ev-charging' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div 
        className="container" 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        {/* Brand Logo */}
        <Link to="/" id="logo-link">
          <Logo height={44} />
        </Link>

        {/* Desktop Navbar */}
        <nav 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem'
          }}
          className="desktop-nav"
        >
          <ul 
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: isActive(link.path) ? 'var(--brand-orange)' : 'var(--text-dark)',
                    position: 'relative',
                    padding: '0.25rem 0'
                  }}
                  className="nav-link"
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--brand-orange)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/ai-portal" id="ai-portal-btn">
            <button className="btn btn-portal" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
              <Activity size={15} />
              AI Portal Demo
              <ArrowRight size={14} />
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburguer Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--dark-charcoal)'
          }}
          className="mobile-toggler"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--white)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            gap: '1.25rem',
            animation: 'floatUp 0.25s ease-out forwards',
            zIndex: 999
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: isActive(link.path) ? 'var(--brand-orange)' : 'var(--dark-charcoal)',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.03)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/ai-portal" style={{ width: '100%' }}>
            <button className="btn btn-portal" style={{ width: '100%', padding: '0.75rem' }}>
              <Activity size={18} />
              AI Portal Demo
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      )}

      {/* Extra styles for media queries handling since CSS is in index.css */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggler {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--brand-orange) !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
