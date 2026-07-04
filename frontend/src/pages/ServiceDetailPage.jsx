import { Link } from "react-router-dom";
import { CTA } from "@/components/Shared";
import { getService } from "@/data/siteContent";

export function ServiceDetailPage({ slug }) {
  const service = getService(slug);

  if (!service) {
    return (
      <section className="section-pad py-24 text-center">
        <p className="eyebrow justify-center">Not Found</p>
        <h1>We could not find that service.</h1>
        <p className="hero-text max-w-2xl mx-auto">
          The requested service page does not exist.
        </p>
        <div className="mt-10 flex justify-center">
          <Link className="button primary" to="/services">
            Back to services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="site-shell">
      <section className="section-pad py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="hero-text">{service.summary}</p>
            <h2 className="text-3xl font-bold mb-6 mt-10">{service.kicker}</h2>
            <div className="space-y-4">
              {service.details.map((detail) => (
                <p key={detail} className="text-gray-700 text-lg">{detail}</p>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--secondary)" }}>Key Outcomes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 bg-gray-50 p-4 border border-gray-200 rounded-sm">
                    <svg className="w-5 h-5" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-bold text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              width={800}
              height={600}
              loading="eager"
              decoding="async"
              className="rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 border border-gray-200 shadow-xl rounded-sm max-w-sm hidden md:block">
              <h4 className="font-bold text-lg mb-2">{service.calculation.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{service.calculation.formula}</p>
              <p className="font-bold" style={{ color: "var(--primary)" }}>{service.calculation.example}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad py-16 bg-gray-50 border-y border-gray-200 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Gallery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${service.title} visual ${index + 1}`}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="rounded-sm shadow-md object-cover h-64 w-full"
            />
          ))}
        </div>
      </section>

      <section className="section-pad py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <Link to="/contact" className="inline-block text-white px-8 py-4 font-bold rounded-sm transition-colors" style={{ backgroundColor: "var(--primary)" }}>
          Request a Quote
        </Link>
      </section>

      <CTA />
    </div>
  );
}