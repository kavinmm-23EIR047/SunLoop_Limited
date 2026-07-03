import { CTA, PageHero, ServiceGrid, SiteFooter, SiteHeader } from "../components";

export const metadata = {
  title: "Services | Sunloop Energy",
  description:
    "Explore Sunloop Energy services for solar power plants, energy storage systems, EV charging infrastructure, and AI energy management.",
};

export default function SolutionsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Everything you need to build an intelligent energy ecosystem."
        text="Sunloop brings generation, storage, charging, and monitoring together so every site can move from isolated energy products to connected infrastructure."
        image="/images/product-solar.webp"
        imageAlt="Solar panel product visual"
      />
      <section className="section section-pad">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Four services that work independently or together.</h2>
        </div>
        <ServiceGrid />
      </section>
      <CTA />
      <SiteFooter />
    </main>
  );
}
