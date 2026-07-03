import Image from "next/image";
import { notFound } from "next/navigation";
import { CTA, PageHero, SiteFooter, SiteHeader } from "../../components";
import { getService, services } from "../../content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Sunloop Energy`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="site-shell">
      <SiteHeader />
      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        text={service.summary}
        image={service.image}
        imageAlt={service.title}
      />

      <section className="section section-pad detail-layout">
        <div>
          <p className="eyebrow">Clear Explanation</p>
          <h2>What this service does for your site.</h2>
          {service.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="outcome-list">
          <span>{service.range}</span>
          {service.outcomes.map((outcome) => (
            <span key={outcome}>{outcome}</span>
          ))}
        </div>
      </section>

      <section className="section-pad calculation-band">
        <div>
          <p className="eyebrow">Calculation Guide</p>
          <h2>{service.calculation.title}</h2>
        </div>
        <div className="formula-card">
          <span>Formula</span>
          <strong>{service.calculation.formula}</strong>
        </div>
        <div className="formula-card">
          <span>Example</span>
          <p>{service.calculation.example}</p>
        </div>
        <div className="formula-card">
          <span>Reality Check</span>
          <p>{service.calculation.note}</p>
        </div>
      </section>

      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">Visuals</p>
          <h2>Product and site imagery from the source material.</h2>
        </div>
        <div className="gallery-grid">
          {service.gallery.map((image, index) => (
            <Image
              src={image}
              alt={`${service.title} visual ${index + 1}`}
              width={640}
              height={440}
              sizes="(max-width: 900px) 100vw, 33vw"
              key={image}
            />
          ))}
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </main>
  );
}
