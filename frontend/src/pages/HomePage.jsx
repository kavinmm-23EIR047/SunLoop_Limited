import { Link } from "react-router-dom";
import { CTA, DashboardMockup, Reveal, ServiceGrid } from "@/components/Shared";
import { industries, portalFeatures, process } from "@/data/siteContent";

const stats = [
  ["2016", "Building energy systems since"],
  ["3", "Core services"],
  ["24/7", "Monitoring ready"],
  ["AI", "Optimization layer"],
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Clean. Intelligent. Integrated.</p>
          <h1>
            Sustainable Innovation, <span style={{ color: "var(--primary)" }}>Backed by 10 Years</span> of Excellence.
          </h1>
          <p className="hero-text">
            Since 2016, Sunloop Energy has been designing complete renewable energy ecosystems, combining solar, storage, and EV charging under one intelligent platform for tomorrow’s energy grid.
          </p>
          <div className="hero-actions">
            <Link className="button primary-icon" to="/solutions">
              <span className="btn-arrow-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
              Explore services
            </Link>
            <Link className="button secondary-icon" to="/ai-portal">
              View AI portal
              <span className="btn-arrow-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="hero-visual clean-visual">
          <img
            src="/images/ecosystem-hero.png"
            alt="Solar canopy with EV charging and battery storage"
            width={900}
            height={520}
            loading="eager"
            decoding="async"
          />
          <div className="floating-note note-one">
            <div className="note-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "22px", height: "22px" }}>
                <rect x="2" y="3" width="10" height="8" rx="1" />
                <path d="M7 3v8M2 7h10M4 3l6 8" />
                <rect x="15" y="6" width="6" height="12" rx="1" />
                <path d="M17 6V4h2v2M18 10v4" />
                <path d="M10 15h4v3" />
              </svg>
            </div>
            <div className="note-text">
              <strong>Solar + ESS + EV charging</strong>
              <span>Unified analytics</span>
            </div>
          </div>
          <div className="floating-note note-two">
            <div className="note-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "22px", height: "22px" }}>
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
              </svg>
            </div>
            <div className="note-text">
              <strong>AI Energy Portal</strong>
              <span>Real-time optimization</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Sunloop highlights">
        {stats.map(([value, label]) => (
          <div key={label} className="stat">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <Reveal as="section" className="section section-pad story bg-custom-energy">
        {/* Background decorative animations */}
        <div className="bg-decorations" aria-hidden="true">
          <div className="circle-primary"></div>
          <div className="circle-secondary"></div>
          <svg className="spiral-threads" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.25">
            <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(0 50 50)" />
            <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(30 50 50)" />
            <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(120 50 50)" />
            <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(150 50 50)" />
          </svg>
        </div>

        <div className="story-content">
          <p className="eyebrow">What Sunloop Does</p>
          <h2>We design the full energy stack, not just one product.</h2>
        </div>
        <p className="story-desc">
          Most vendors sell you a panel, a battery, or a charger and leave the
          rest to you. Sunloop plans, installs, and connects every asset on
          site — so your building generates power, stores it, charges
          vehicles, and reports on all three from a single intelligence layer.
        </p>
      </Reveal>

      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Clear services for every stage of your energy journey.</h2>
        </div>
        <ServiceGrid />
      </section>

      <section className="platform section-pad bg-surface">
        <div className="platform-copy">
          <p className="eyebrow">AI Energy Portal</p>
          <h2>Your installed systems become one intelligent network.</h2>
          <p>
            The portal brings solar generation, battery storage, EV charging,
            savings, faults, reports, and carbon reduction into one operating
            view.
          </p>
          <div className="feature-list">
            {portalFeatures.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <DashboardMockup />
      </section>

      <Reveal as="section" className="section section-pad text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="section-heading" style={{ display: "flex", flexDirection: "column", alignItems: "center", textCombineUpright: "center" }}>
          <p className="eyebrow" style={{ alignSelf: "center", justifyContent: "center" }}>Who We Serve</p>
          <h2>Powering Every Space. Sustainably.</h2>
          <p className="section-desc" style={{ maxWidth: "600px", margin: "12px auto 0 auto", color: "var(--muted)", fontSize: "16px" }}>
            Smart energy infrastructure for homes, campuses, industries, fleets, and public spaces.
          </p>
        </div>
        <div className="full-width-visual" style={{ width: "100%", maxWidth: "1240px", marginTop: "32px" }}>
          <img
            src="/images/helloenv.png"
            alt="Sunloop energy ecosystem map"
            className="rounded-media"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </Reveal>

      <section className="section section-pad bg-surface" id="process">
        <div className="section-heading">
          <p className="eyebrow">How We Work</p>
          <h2>From consultation to continuous optimization.</h2>
        </div>
        <div className="process-row">
          {process.map((step, index) => (
            <div className="process-step" key={step}>
              <span className="process-step-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}