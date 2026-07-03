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
      className={`sticky top-0 z-[1000] h-[var(--header-height)] flex items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-black/5 shadow-sm' 
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="container flex items-center justify-between w-full">
        {/* Brand Logo */}
        <Link to="/" id="logo-link">
          <Logo height={62} />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex list-none gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-title font-medium text-[0.95rem] relative py-1 transition-colors hover:text-[#FF6B00] ${
                    isActive(link.path) ? 'text-[#FF6B00]' : 'text-gray-900'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B00] rounded-sm" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/ai-portal" id="ai-portal-btn">
            <button className="btn btn-portal px-5 py-2 text-[0.85rem]">
              <Activity size={15} />
              AI Portal Demo
              <ArrowRight size={14} />
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburguer Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden bg-transparent border-none cursor-pointer text-[#1C1C1E]"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[var(--header-height)] left-0 w-full bg-white border-b border-black/10 shadow-lg flex flex-col p-6 gap-5 animate-float z-[999]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-title font-semibold text-lg pb-2 border-b border-black/5 ${
                isActive(link.path) ? 'text-[#FF6B00]' : 'text-[#1C1C1E]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/ai-portal" className="w-full mt-2">
            <button className="btn btn-portal w-full p-3 justify-center">
              <Activity size={18} />
              AI Portal Demo
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
