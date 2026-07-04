import { CTA } from "@/components/Shared";
import { companyValues, industries, portalFeatures } from "@/data/siteContent";

export function AboutPage() {
  return (
    <div className="site-shell">
      <section className="subhero section-pad">
        <div>
          <p className="eyebrow">About Sunloop</p>
          <h1>Generate. Store. Drive. Manage it all from one intelligent platform.</h1>
          <p className="hero-text">
            Sunloop Energy is a clean-energy company established in 2016 to design connected solar, storage, and EV charging ecosystems backed by AI monitoring and reporting.
          </p>
        </div>
        <img
          src="/images/ecosystem-hero.webp"
          alt="Solar, storage, and EV ecosystem"
          width={900}
          height={520}
          loading="eager"
          decoding="async"
          className="rounded-sm"
        />
      </section>

      <section className="section section-pad mission-band">
        <div>
          <p className="eyebrow">Mission & Vision</p>
          <h2>Intelligent energy should be practical, measurable, and scalable.</h2>
          <p>
            We help homes, businesses, and industries adopt Clean Optimized Renewable Energy through renewable systems that are designed to work together instead of in isolation.
          </p>
          <p>
            Our mission is to reduce utility bills, cut carbon footprint, and deliver long-term energy security through dependable engineering and AI-powered visibility.
          </p>
        </div>
        <div className="feature-board-grid">
          <span>Founded in 2016</span>
          <span>Headquartered in Coimbatore</span>
          <span>Solar + ESS + EV charging</span>
          <span>AI Energy Portal included</span>
        </div>
      </section>

      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">What We Deliver</p>
          <h2>Integrated energy systems for the real world.</h2>
        </div>
        <div className="feature-board-grid">
          {portalFeatures.slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-pad split">
        <div>
          <p className="eyebrow">Our Values</p>
          <h2>How we work with every project.</h2>
          <div className="value-grid">
            {companyValues.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
        <img
          className="rounded-media"
          src="/images/ai-industrial-site.webp"
          alt="Industrial solar and energy storage site"
          width={700}
          height={520}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="section section-pad story">
        <div>
          <p className="eyebrow">Where We Fit</p>
          <h2>Built for homes, campuses, factories, fleets, and public infrastructure.</h2>
        </div>
        <div className="industry-list">
          {industries.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}