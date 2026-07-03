import Image from "next/image";
import Link from "next/link";
import { CTA, DashboardMockup, ServiceGrid } from "@/components/Shared";
import { industries, portalFeatures, process } from "@/app/content";

const stats = [
  ["2016", "Building energy systems since"],
  ["4", "Connected service pillars"],
  ["24/7", "Monitoring ready"],
  ["AI", "Optimization layer"],
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">AI Powered Renewable Energy</p>
          <h1 className="italic">Solar, storage, EV charging, and AI energy management.</h1>
          <p className="hero-text italic">
            Sunloop Energy helps homes, businesses, industries, and institutions
            build complete renewable energy infrastructure, from power generation
            to intelligent monitoring.
          </p>
          <div className="hero-actions">
            <Link className="button primary italic" href="/services/solar-power-plants">
              Explore services
            </Link>
            <Link className="button secondary italic" href="/ai-portal">
              View AI portal
            </Link>
          </div>
        </div>
        <div className="hero-visual clean-visual rounded-sm">
          <Image
            src="/images/ecosystem-hero.webp"
            alt="Solar canopy with EV charging and battery storage"
            width={900}
            height={450}
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="rounded-sm"
          />
          <div className="floating-note note-one rounded-sm border-gray-200 border-2">
            <strong className="italic">Integrated ecosystem</strong>
            <span className="italic">Solar, ESS, EV charging, and AI monitoring</span>
          </div>
          <div className="floating-note note-two rounded-sm border-gray-200 border-2">
            <strong className="italic">Built to scale</strong>
            <span className="italic">Start with one service and expand over time</span>
          </div>
        </div>
      </section>

      <section className="stats-band rounded-sm" aria-label="Sunloop highlights">
        {stats.map(([value, label]) => (
          <div key={label} className="stat">
            <strong className="italic">{value}</strong>
            <span className="italic">{label}</span>
          </div>
        ))}
      </section>

      <section className="section section-pad story">
        <div>
          <p className="eyebrow">What Sunloop Does</p>
          <h2 className="italic">We design the full energy stack, not just one product.</h2>
        </div>
        <p className="italic">
          Sunloop plans, installs, and connects renewable energy assets so each
          site can generate power, store energy, charge electric vehicles, and
          monitor performance from a single intelligence layer.
        </p>
      </section>

      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2 className="italic">Clear services for every stage of your energy journey.</h2>
        </div>
        <ServiceGrid />
      </section>

      <section className="platform section-pad rounded-sm">
        <div className="platform-copy">
          <p className="eyebrow text-[#fd6206]">AI Energy Portal</p>
          <h2 className="italic text-white">Your installed systems become one intelligent network.</h2>
          <p className="italic text-gray-300">
            The portal brings solar generation, battery storage, EV charging,
            savings, faults, reports, and carbon reduction into one operating
            view.
          </p>
          <div className="feature-list">
            {portalFeatures.slice(0, 4).map((item) => (
              <span key={item} className="italic rounded-sm">{item}</span>
            ))}
          </div>
        </div>
        <DashboardMockup />
      </section>

      <section className="section section-pad">
        <div className="split">
          <div className="image-showcase paired-images">
            <Image
              src="/images/ai-home-site.webp"
              alt="Residential energy site"
              width={500}
              height={420}
              sizes="(max-width: 900px) 100vw, 24vw"
              className="rounded-sm"
            />
            <Image
              src="/images/ai-industrial-site.webp"
              alt="Industrial energy site"
              width={500}
              height={420}
              sizes="(max-width: 900px) 100vw, 24vw"
              className="rounded-sm"
            />
          </div>
          <div>
            <p className="eyebrow">Who We Serve</p>
            <h2 className="italic">Energy infrastructure for homes, campuses, factories, and fleets.</h2>
            <p className="italic">
              Sunloop works across residential, commercial, industrial,
              institutional, public sector, utility, and fleet environments.
            </p>
            <div className="industry-list compact">
              {industries.slice(0, 6).map((item) => (
                <span key={item} className="italic rounded-sm">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-pad" id="process">
        <div className="section-heading">
          <p className="eyebrow">How We Work</p>
          <h2 className="italic">From consultation to continuous optimization.</h2>
        </div>
        <div className="process-row grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {process.map((step, index) => (
            <div className="process-step flex flex-col p-4 border border-gray-200 rounded-sm bg-white" key={step}>
              <span className="text-[#fd6206] font-bold text-2xl">{String(index + 1).padStart(2, "0")}</span>
              <strong className="italic">{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
