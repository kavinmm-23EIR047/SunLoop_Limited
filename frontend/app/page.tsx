import Image from "next/image";

const navItems = ["Solutions", "Platform", "Projects", "Process"];

const stats = [
  ["2016", "Engineering energy systems since"],
  ["4", "Integrated solution pillars"],
  ["24/7", "Monitoring and optimization"],
  ["AI", "Energy intelligence layer"],
];

const solutions = [
  {
    title: "Solar Power Plants",
    text: "Rooftop, ground-mount, and industrial solar assets engineered for long-term generation.",
    image: "/pdf-assets/sunloop-pdf-03-1076x717.webp",
  },
  {
    title: "Energy Storage Systems",
    text: "Wall, trolley, and containerized ESS options that improve resilience and peak-load control.",
    image: "/pdf-assets/sunloop-pdf-04-1076x717.webp",
  },
  {
    title: "EV Charging Infrastructure",
    text: "AC and DC charging systems for homes, commercial hubs, fleets, and public networks.",
    image: "/pdf-assets/sunloop-pdf-05-1383x922.webp",
  },
];

const industries = [
  "Residential communities",
  "Commercial facilities",
  "Industrial campuses",
  "Hospitals",
  "Education",
  "Government",
  "Utilities",
  "Data centers",
];

const process = [
  "Consultation",
  "Engineering",
  "Installation",
  "Commissioning",
  "Monitoring",
  "Optimization",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sunloop Energy home">
          <Image
            src="/pdf-assets/sunloop-pdf-01-502x502.webp"
            alt="Sunloop Energy"
            width={118}
            height={58}
            priority
          />
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#consultation">
          Book consultation
        </a>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI Powered Renewable Energy</p>
          <h1>Building Intelligent Energy Since 2016</h1>
          <p className="hero-text">
            Sunloop Energy connects solar generation, energy storage, EV
            charging, and live energy intelligence into one enterprise-ready
            renewable energy ecosystem.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#solutions">
              Explore solutions
            </a>
            <a className="button secondary" href="#consultation">
              Talk to an expert
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/pdf-assets/sunloop-pdf-02-1229x820.webp"
            alt="Integrated solar, EV charging, ESS, and AI energy ecosystem"
            width={1229}
            height={820}
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="floating-note note-one">
            <strong>Live Monitoring</strong>
            <span>Solar, ESS, EV and grid signals</span>
          </div>
          <div className="floating-note note-two">
            <strong>AI Analytics</strong>
            <span>Forecast, optimize, reduce waste</span>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Sunloop metrics">
        {stats.map(([value, label]) => (
          <div key={label} className="stat">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section section-pad story">
        <div>
          <p className="eyebrow">Company Story</p>
          <h2>From solar engineering to intelligent energy infrastructure.</h2>
        </div>
        <p>
          Sunloop&apos;s platform-led approach helps customers move beyond isolated
          products. Each system is planned as part of a broader operating model:
          generate clean power, store it intelligently, charge electric mobility,
          and track performance through a digital energy layer.
        </p>
      </section>

      <section className="section section-pad" id="solutions">
        <div className="section-heading">
          <p className="eyebrow">Solutions</p>
          <h2>One ecosystem. Four energy layers.</h2>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <Image
                src={solution.image}
                alt={solution.title}
                width={1100}
                height={730}
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="platform section-pad" id="platform">
        <div className="platform-copy">
          <p className="eyebrow">AI Energy Platform</p>
          <h2>Monitor, predict, and optimize every energy asset.</h2>
          <p>
            The intelligence layer brings generation, storage, charging, alerts,
            reports, and carbon tracking into a single view for operators and
            decision makers.
          </p>
          <div className="feature-list">
            {[
              "Real-time performance",
              "Predictive maintenance",
              "Carbon and savings reports",
              "Remote portfolio access",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="dashboard-panel">
          <div className="panel-top">
            <span>Energy Command Center</span>
            <strong>98.7%</strong>
          </div>
          <div className="bars" aria-hidden="true">
            <span style={{ height: "48%" }} />
            <span style={{ height: "68%" }} />
            <span style={{ height: "56%" }} />
            <span style={{ height: "86%" }} />
            <span style={{ height: "72%" }} />
            <span style={{ height: "92%" }} />
          </div>
          <div className="energy-flow">
            <span>Solar</span>
            <span>ESS</span>
            <span>EV</span>
            <span>AI</span>
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="split">
          <div className="image-showcase">
            <Image
              src="/pdf-assets/sunloop-pdf-09-1076x717.webp"
              alt="Integrated Sunloop platform diagram"
              width={1076}
              height={717}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="eyebrow">Integrated by design</p>
            <h2>Start with one need. Expand without rebuilding.</h2>
            <p>
              Customers can begin with solar, storage, EV charging, or the AI
              portal, then scale into a unified system as energy demand grows.
            </p>
            <a className="inline-link" href="#process">
              View implementation process
            </a>
          </div>
        </div>
      </section>

      <section className="section section-pad" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Project Showcase</p>
          <h2>Built for real sites, real loads, and real operators.</h2>
        </div>
        <div className="project-grid">
          <Image
            src="/pdf-assets/sunloop-pdf-08-1076x717.webp"
            alt="EV charger, ESS unit, and solar panel project examples"
            width={1076}
            height={717}
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="industry-list">
            {industries.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-pad" id="process">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Enterprise delivery from feasibility to optimization.</h2>
        </div>
        <div className="process-row">
          {process.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cta section-pad" id="consultation">
        <div>
          <p className="eyebrow">Future Ready Energy</p>
          <h2>Ready to transform your energy infrastructure?</h2>
          <p>
            Plan a connected energy roadmap for solar generation, storage,
            charging, and AI-powered operations.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@sunloop.energy">
          Book consultation
        </a>
      </section>

      <footer className="footer">
        <Image
          src="/pdf-assets/sunloop-pdf-01-502x502.webp"
          alt="Sunloop Energy"
          width={110}
          height={54}
        />
        <p>AI powered renewable energy infrastructure for modern enterprises.</p>
        <div>
          <a href="#solutions">Solutions</a>
          <a href="#platform">Platform</a>
          <a href="#projects">Projects</a>
          <a href="#consultation">Contact</a>
        </div>
      </footer>
    </main>
  );
}
