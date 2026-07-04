import { CTA, PageHero } from "@/components/Shared";
import { process } from "@/data/siteContent";

export function ProjectsPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="Projects and Process"
        title="A structured path from idea to optimized energy operation."
        text="Sunloop handles the journey from consultation and engineering to installation, commissioning, monitoring, and continuous optimization."
        image="/images/solar-rooftop.webp"
        imageAlt="Rooftop solar project"
      />

      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">Delivery Method</p>
          <h2>Clear steps, clear ownership, clear outcomes.</h2>
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

      <section className="section section-pad gallery-grid">
        <div className="project-gallery-card">
          <img src="/images/solar-ground.webp" alt="Ground mount solar project" loading="lazy" decoding="async" />
          <div className="card-overlay">
            <h3>Ground Mount Solar Project</h3>
            <p>Utility-scale ground-mounted solar plants engineered for high energy output.</p>
          </div>
        </div>
        <div className="project-gallery-card">
          <img src="/images/ess-container.webp" alt="Containerized energy storage system" loading="lazy" decoding="async" />
          <div className="card-overlay">
            <h3>Energy Storage Systems</h3>
            <p>Containerized battery storage units designed for peak demand management.</p>
          </div>
        </div>
        <div className="project-gallery-card">
          <img src="/images/ev-station-clean.webp" alt="EV charging station" loading="lazy" decoding="async" />
          <div className="card-overlay">
            <h3>EV Charging Infrastructure</h3>
            <p>High-capacity EV charging ports deployed for commercial fleet operations.</p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}