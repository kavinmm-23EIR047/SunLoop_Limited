import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="navbar-schneider">
      {/* Top Tier: Logo and Search */}
      <div className="navbar-top">
        <Link className="brand" to="/" aria-label="Sunloop Energy home">
          <img
            src="/images/sunloop-logo.jpg"
            alt="Sunloop Energy"
            width={160}
            height={50}
            loading="eager"
            decoding="async"
          />
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <button className="search-btn" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Tier: Links */}
      <div className="navbar-bottom">
        <nav className="nav-links-schneider">
          <div className="nav-item group relative">
            <button className="nav-btn">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div className="dropdown-menu absolute hidden group-hover:block top-full left-0 w-64 bg-white border border-gray-200 shadow-xl z-50">
              <Link to="/services/solar-power-plants" className="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50">Solar Power Plants</Link>
              <Link to="/services/ev-charging-infrastructure" className="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50">EV Charging Infrastructure</Link>
              <Link to="/services/energy-storage-systems" className="block px-6 py-3 hover:bg-gray-50">Energy Storage Systems</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/ai-portal" className="nav-btn">
              AI Portal
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/about" className="nav-btn">
              Company
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/contact" className="nav-btn">
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}