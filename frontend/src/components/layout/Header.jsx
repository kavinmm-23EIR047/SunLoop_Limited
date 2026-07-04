import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="navbar-schneider">
      {/* Top Tier: Logo and Search */}
      <div className="navbar-top">
        <Link className="brand" to="/" aria-label="Sunloop Energy home" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/images/sunloop-logo.jpg"
            alt="Sunloop Energy"
            width={160}
            height={50}
            loading="eager"
            decoding="async"
          />
        </Link>
        
        {/* Desktop Search */}
        <div className="search-container search-desktop">
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

        {/* Mobile Hamburger Button */}
        <button
          className={`mobile-hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Bottom Tier: Links (Desktop Only) */}
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

      {/* Mobile Drawer (Visible on screens < 960px) */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <Link className="brand" to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/images/sunloop-logo.jpg"
                alt="Sunloop Energy"
                width={130}
                height={40}
              />
            </Link>
            <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Search inside Mobile Menu */}
          <div className="mobile-search-container">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
            />
            <button className="search-btn" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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

          {/* Navigation Links inside Mobile Drawer */}
          <nav className="mobile-nav-links">
            <div className="mobile-nav-item">
              <button
                className={`mobile-nav-btn ${isServicesOpen ? "active" : ""}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`mobile-dropdown ${isServicesOpen ? "expanded" : ""}`}>
                <Link to="/services/solar-power-plants" onClick={() => setIsMobileMenuOpen(false)}>Solar Power Plants</Link>
                <Link to="/services/ev-charging-infrastructure" onClick={() => setIsMobileMenuOpen(false)}>EV Charging Infrastructure</Link>
                <Link to="/services/energy-storage-systems" onClick={() => setIsMobileMenuOpen(false)}>Energy Storage Systems</Link>
              </div>
            </div>

            <Link to="/ai-portal" className="mobile-nav-btn-link" onClick={() => setIsMobileMenuOpen(false)}>
              AI Portal
            </Link>
            <Link to="/about" className="mobile-nav-btn-link" onClick={() => setIsMobileMenuOpen(false)}>
              Company
            </Link>
            <Link to="/contact" className="mobile-nav-btn-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Mobile Drawer Footer CTA */}
          <div className="mobile-drawer-footer">
            <Link className="button primary block text-center" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Book consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}