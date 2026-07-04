import { CTA, PageHero } from "@/components/Shared";
import { companyValues, industries } from "@/data/siteContent";

export function IndustriesPage() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="Industries"
        title="Energy systems shaped for the way each sector actually works."
        text="Sunloop designs solar, storage, charging, and monitoring for residential communities, commercial buildings, industries, institutions, hospitals, campuses, and public infrastructure."
        image="/images/ai-industrial-site.webp"
        imageAlt="Industrial energy installation"
      />

      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">Who We Serve</p>
          <h2>Built for environments where energy quality affects daily operations.</h2>
        </div>
        <div className="industry-list">
          {industries.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-pad story">
        <div>
          <p className="eyebrow">Company Values</p>
          <h2>What guides every project.</h2>
        </div>
        <div className="industry-list compact">
          {companyValues.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}