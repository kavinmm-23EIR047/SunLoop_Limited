import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Compass, Cpu, Zap, Battery } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1E] text-white pt-20 pb-8 border-t border-white/5">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Company Column */}
        <div className="flex flex-col gap-5">
          <Logo height={56} showText={true} />
          <p className="text-[#9CA3AF] text-[0.9rem] leading-relaxed mt-2">
            Sunloop Energy is a next-generation clean energy company started in 2016. We specialize in delivering AI-powered integrated energy systems.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="bg-white/5 p-2 rounded-full text-[#FF6B00] inline-flex">
              <Compass size={18} />
            </span>
            <span className="bg-white/5 p-2 rounded-full text-[#10B981] inline-flex">
              <Battery size={18} />
            </span>
            <span className="bg-white/5 p-2 rounded-full text-[#007AFF] inline-flex">
              <Cpu size={18} />
            </span>
            <span className="bg-white/5 p-2 rounded-full text-[#FF5C00] inline-flex">
              <Zap size={18} />
            </span>
          </div>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 className="font-title text-[1.1rem] mb-6 font-semibold text-[#FF6B00]">
            Solutions
          </h4>
          <ul className="flex flex-col gap-3 list-none">
            <li>
              <Link to="/solar" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                Solar Power Plants
              </Link>
            </li>
            <li>
              <Link to="/ess" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                Energy Storage Systems (ESS)
              </Link>
            </li>
            <li>
              <Link to="/ev-charging" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                EV Charging Stations
              </Link>
            </li>
            <li>
              <Link to="/ai-portal" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                Sunloop AI Energy Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links Column */}
        <div>
          <h4 className="font-title text-[1.1rem] mb-6 font-semibold text-[#FF6B00]">
            Company
          </h4>
          <ul className="flex flex-col gap-3 list-none">
            <li>
              <Link to="/" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                Contact & Support
              </Link>
            </li>
            <li>
              <a href="https://www.sunloopenergy.com" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] text-[0.9rem] transition-all duration-300 hover:text-[#FF6B00] hover:pl-1">
                Official Website
              </a>
            </li>
          </ul>
        </div>

        {/* Head Office Column */}
        <div>
          <h4 className="font-title text-[1.1rem] mb-6 font-semibold text-[#FF6B00]">
            Headquarters
          </h4>
          <ul className="flex flex-col gap-4 list-none text-[#9CA3AF] text-[0.9rem]">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-[#FF6B00] shrink-0 mt-[2px]" />
              <span>
                Coimbatore,<br />Tamil Nadu, India
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-[#FF6B00]" />
              <span>+91 422 1234567</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-[#FF6B00]" />
              <span>info@sunloopenergy.com</span>
            </li>
          </ul>
        </div>

      </div>

      <hr className="border-0 border-t border-white/5 mb-8" />

      {/* Legal & Copyright */}
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <p className="text-[#9CA3AF] text-[0.85rem]">
          &copy; {currentYear} Sunloop Energy. All rights reserved. Headquartered in Coimbatore, TN.
        </p>
        <p className="text-[#9CA3AF] text-[0.85rem] flex gap-6 flex-wrap">
          <span>"Powering Tomorrow, Sustainably"</span>
          <span className="text-[#FF6B00]">Clean. Intelligent. Integrated.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
