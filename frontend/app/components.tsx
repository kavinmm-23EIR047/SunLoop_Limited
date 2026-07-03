import Image from "next/image";
import Link from "next/link";
import { services } from "./content";

const navItems = [
  { label: "Services", href: "/solutions" },
  { label: "AI Portal", href: "/ai-portal" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="navbar" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="Sunloop Energy home">
        <Image
          src="/images/sunloop-logo.webp"
          alt="Sunloop Energy"
          width={120}
          height={120}
          priority
        />
      </Link>
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">
        Book consultation
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <Image
        src="/images/sunloop-logo.webp"
        alt="Sunloop Energy"
        width={110}
        height={110}
      />
      <p>AI powered renewable energy infrastructure for modern enterprises.</p>
      <div>
        <Link href="/solutions">Services</Link>
        <Link href="/ai-portal">AI Portal</Link>
        <Link href="/about">About</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="subhero section-pad">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
      </div>
      <Image
        src={image}
        alt={imageAlt}
        width={900}
        height={520}
        priority
        sizes="(max-width: 900px) 100vw, 48vw"
      />
    </section>
  );
}

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <Link
          className="service-card"
          href={`/solutions/${service.slug}`}
          key={service.slug}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={640}
            height={440}
            sizes="(max-width: 900px) 100vw, 25vw"
          />
          <span>{service.kicker}</span>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="dashboard-panel">
      <div className="panel-top">
        <span>Sunloop AI Energy Portal</span>
        <strong>98.7%</strong>
      </div>
      <div className="portal-metrics">
        <div>
          <span>Solar generation</span>
          <strong>1,256 kWh</strong>
        </div>
        <div>
          <span>Energy stored</span>
          <strong>85%</strong>
        </div>
        <div>
          <span>EV delivered</span>
          <strong>342 kWh</strong>
        </div>
        <div>
          <span>CO2 reduced</span>
          <strong>2.35 t</strong>
        </div>
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
        <span>Load</span>
        <span>EV</span>
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
      <Link className="button primary" href="/contact">
        Book consultation
      </Link>
    </section>
  );
}
