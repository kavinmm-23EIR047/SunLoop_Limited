import Image from "next/image";
import Link from "next/link";
import { services } from "../app/content";

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
        className="rounded-sm"
      />
    </section>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {services.map((service) => (
        <Link
          className="service-card rounded-sm"
          href={`/services/${service.slug}`}
          key={service.slug}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={640}
            height={440}
            sizes="(max-width: 900px) 100vw, 25vw"
            className="rounded-t-sm"
          />
          <span>{service.kicker}</span>
          <h3 className="italic">{service.title}</h3>
          <p className="italic">{service.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="dashboard-panel rounded-sm">
      <div className="panel-top">
        <span className="italic">Sunloop AI Energy Portal</span>
        <strong className="italic text-[#fdd7c2]">98.7%</strong>
      </div>
      <div className="portal-metrics">
        <div className="rounded-sm">
          <span className="italic">Solar generation</span>
          <strong className="italic">1,256 kWh</strong>
        </div>
        <div className="rounded-sm">
          <span className="italic">Energy stored</span>
          <strong className="italic">85%</strong>
        </div>
        <div className="rounded-sm">
          <span className="italic">EV delivered</span>
          <strong className="italic">342 kWh</strong>
        </div>
        <div className="rounded-sm">
          <span className="italic">CO2 reduced</span>
          <strong className="italic">2.35 t</strong>
        </div>
      </div>
      <div className="bars rounded-sm" aria-hidden="true">
        <span style={{ height: "48%" }} className="rounded-t-sm" />
        <span style={{ height: "68%" }} className="rounded-t-sm" />
        <span style={{ height: "56%" }} className="rounded-t-sm" />
        <span style={{ height: "86%" }} className="rounded-t-sm" />
        <span style={{ height: "72%" }} className="rounded-t-sm" />
        <span style={{ height: "92%" }} className="rounded-t-sm" />
      </div>
      <div className="energy-flow">
        <span className="italic rounded-sm">Solar</span>
        <span className="italic rounded-sm">ESS</span>
        <span className="italic rounded-sm">Load</span>
        <span className="italic rounded-sm">EV</span>
      </div>
    </div>
  );
}

export function CTA() {
  return (
    <section className="cta section-pad" id="consultation">
      <div>
        <p className="eyebrow">Future Ready Energy</p>
        <h2 className="italic">Ready to transform your energy infrastructure?</h2>
        <p className="italic">
          Plan a connected roadmap for solar generation, storage, charging, and
          AI-powered energy operations.
        </p>
      </div>
      <Link className="button primary italic" href="/contact">
        Book consultation
      </Link>
    </section>
  );
}
