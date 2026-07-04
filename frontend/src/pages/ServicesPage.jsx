import { CTA, ServiceGrid } from "@/components/Shared";

export function ServicesPage() {
  return (
    <div className="site-shell">
      <section className="subhero section-pad">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Everything you need to build an intelligent energy ecosystem.</h1>
          <p className="hero-text">
            Sunloop brings generation, storage, charging, and monitoring together so every site can move from isolated energy products to connected infrastructure.
          </p>
        </div>
        <img
          src="/images/product-solar.webp"
          alt="Solar panel product visual"
          width={900}
          height={520}
          loading="eager"
          decoding="async"
          className="rounded-sm"
        />
      </section>
      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Four services that work independently or together.</h2>
        </div>
        <ServiceGrid />
      </section>
      <CTA />
    </div>
  );
}