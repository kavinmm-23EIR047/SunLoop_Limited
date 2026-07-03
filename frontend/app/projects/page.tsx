import Image from "next/image";
import { CTA, PageHero, SiteFooter, SiteHeader } from "../components";
import { process } from "../content";

export const metadata = {
  title: "Projects and Process | Sunloop Energy",
  description:
    "Learn how Sunloop Energy plans, engineers, installs, commissions, monitors, and optimizes connected renewable energy projects.",
};

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
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
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-pad gallery-grid">
        <Image
          src="/images/solar-ground.webp"
          alt="Ground mount solar project"
          width={640}
          height={440}
          sizes="(max-width: 900px) 100vw, 33vw"
        />
        <Image
          src="/images/ess-container.webp"
          alt="Containerized energy storage system"
          width={640}
          height={440}
          sizes="(max-width: 900px) 100vw, 33vw"
        />
        <Image
          src="/images/ev-station-clean.webp"
          alt="EV charging station"
          width={640}
          height={440}
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </section>

      <CTA />
      <SiteFooter />
    </main>
  );
}
