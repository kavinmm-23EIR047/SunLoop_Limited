import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "@/data/siteContent";

export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export function PageHero({ eyebrow, title, text, image, imageAlt }) {
  return (
    <section className="subhero section-pad">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
      </div>
      <img
        src={image}
        alt={imageAlt}
        width={900}
        height={520}
        loading="eager"
        decoding="async"
        className="rounded-sm"
      />
    </section>
  );
}

export function ServiceGrid() {
  const getRibbonText = (slug) => {
    if (slug.includes("solar")) return "SOLAR POWER";
    if (slug.includes("storage")) return "ENERGY STORAGE";
    if (slug.includes("charging")) return "EV CHARGING";
    return "SERVICES";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {services.map((service) => (
        <Link
          className="service-card project-gallery-card"
          to={`/services/${service.slug}`}
          key={service.slug}
        >
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
          />
          <div className="card-ribbon">{getRibbonText(service.slug)}</div>
          
          <div className="card-overlay">
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="dashboard-panel rounded-sm">
      <div className="panel-top">
        <span>Sunloop AI Energy Portal</span>
        <strong style={{ color: "var(--primary)" }}>98.7% Live</strong>
      </div>
      
      <div className="portal-metrics">
        <div className="rounded-sm">
          <span>Solar generation</span>
          <strong>1,256 kWh</strong>
        </div>
        <div className="rounded-sm">
          <span>Energy stored</span>
          <strong>85%</strong>
        </div>
        <div className="rounded-sm">
          <span>EV delivered</span>
          <strong>342 kWh</strong>
        </div>
        <div className="rounded-sm">
          <span>CO2 reduced</span>
          <strong>2.35 t</strong>
        </div>
      </div>
      
      <div className="chart-area">
        <div className="chart-grid-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <svg className="wave-svg" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-stroke-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fc6911" />
              <stop offset="50%" stopColor="#ff9e59" />
              <stop offset="100%" stopColor="#fc6911" />
            </linearGradient>
            <linearGradient id="wave-fill-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(252, 105, 17, 0.22)" />
              <stop offset="100%" stopColor="rgba(252, 105, 17, 0)" />
            </linearGradient>
          </defs>
          <path d="M 0 150 L 0 80 Q 80 30 160 90 T 320 50 T 480 110 L 500 110 L 500 150 Z" fill="url(#wave-fill-gradient)" />
          <path className="wave-path" d="M 0 80 Q 80 30 160 90 T 320 50 T 480 110 L 500 110" stroke="url(#wave-stroke-gradient)" strokeWidth="3" strokeLinecap="round" />
          <circle className="tracer-dot" r="5.5" fill="#ffffff" stroke="#fc6911" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="energy-flow-connections">
        <div className="flow-node">
          <div className="node-dot">⚡</div>
          <span>Solar</span>
        </div>
        <div className="flow-arrow">
          <div className="arrow-pulse"></div>
        </div>
        <div className="flow-node">
          <div className="node-dot">🔋</div>
          <span>ESS</span>
        </div>
        <div className="flow-arrow">
          <div className="arrow-pulse"></div>
        </div>
        <div className="flow-node">
          <div className="node-dot">🏢</div>
          <span>Load</span>
        </div>
        <div className="flow-arrow">
          <div className="arrow-pulse"></div>
        </div>
        <div className="flow-node">
          <div className="node-dot">🔌</div>
          <span>EV</span>
        </div>
      </div>
    </div>
  );
}

export function CTA() {
  return (
    <section className="cta section-pad" id="consultation">
      <div>
        <p className="eyebrow">Future Ready Energy</p>
        <h2>Ready to transform your energy infrastructure?</h2>
        <p>
          Plan a connected roadmap for solar generation, storage, charging, and
          AI-powered energy operations.
        </p>
      </div>
      <Link className="button primary" to="/contact">
        Book consultation
      </Link>
    </section>
  );
}