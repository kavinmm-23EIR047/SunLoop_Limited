import { CTA, DashboardMockup, PageHero } from "@/components/Shared";
import { portalFeatures } from "@/data/siteContent";

export function PlatformPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="Sunloop AI Energy Portal"
        title="One intelligent dashboard for every connected energy asset."
        text="The Sunloop AI Energy Portal connects installed solar, ESS, and EV charging systems into a single intelligence layer for monitoring, analytics, alerts, reports, and optimization."
        image="/images/ecosystem-hero.webp"
        imageAlt="Sunloop connected energy ecosystem"
      />

      <section className="platform section-pad">
        <div className="platform-copy">
          <p className="eyebrow">Digital Energy Layer</p>
          <h2>Turn installed systems into operating intelligence.</h2>
          <p>
            The portal helps owners and operators see what is generating,
            storing, charging, saving, and underperforming across their sites.
          </p>
          <div className="feature-list">
            {portalFeatures.slice(0, 6).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <DashboardMockup />
      </section>

      <section className="section section-pad detail-layout">
        <div>
          <p className="eyebrow">Platform Capabilities</p>
          <h2>What the portal explains clearly.</h2>
          <p>
            Real-time monitoring shows solar generation, battery state,
            charging activity, load behavior, and savings from a single place.
          </p>
          <p>
            AI-powered insights help identify faults, plan maintenance, improve
            energy decisions, and understand carbon reduction across sites.
          </p>
        </div>
        <img
          className="rounded-media"
          src="/images/ai-home-site.webp"
          alt="Residential site connected to the AI energy portal"
          width={640}
          height={440}
          loading="lazy"
          decoding="async"
        />
      </section>

      <CTA />
    </div>
  );
}