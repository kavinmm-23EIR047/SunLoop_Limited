import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CTA } from "@/components/Shared";
import { getService } from "@/data/siteContent";

export function ServiceDetailPage({ slug }) {
  const service = getService(slug);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const galleryScrollRef = useRef(null);

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

  const handleGalleryScroll = () => {
    if (!galleryScrollRef.current) return;
    const container = galleryScrollRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / (itemWidth || 1));
    if (newIndex >= 0 && newIndex < service.gallery.length) {
      setActiveGalleryIndex(newIndex);
    }
  };

  const scrollToGalleryItem = (index) => {
    if (!galleryScrollRef.current) return;
    const container = galleryScrollRef.current;
    const itemWidth = container.clientWidth;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
    setActiveGalleryIndex(index);
  };

  return (
    <div className="site-shell">
      <section className="section-pad service-detail-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="service-detail-summary">{service.summary}</p>
            
            <h2 className="service-kicker">{service.kicker}</h2>
            <div className="service-detail-content">
              {service.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--secondary)" }}>Key Outcomes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="outcome-card">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    <span>{outcome}</span>
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
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-10 -left-10 formula-overlay-card hidden md:block">
              <h4>{service.calculation.title}</h4>
              <p>{service.calculation.formula}</p>
              <strong>{service.calculation.example}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-pad py-16 bg-gray-50 border-y border-gray-200 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold" style={{ color: "var(--secondary)" }}>Gallery</h2>
        </div>
        
        <div className="w-full flex flex-col items-center gap-6">
          {/* Scroll container: flex-row slider on mobile, standard grid on desktop */}
          <div
            ref={galleryScrollRef}
            onScroll={handleGalleryScroll}
            className="w-full flex md:grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 md:px-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {service.gallery.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${service.title} visual ${index + 1}`}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="snap-center shrink-0 w-[85vw] md:w-full rounded-lg shadow-md object-cover h-64 md:h-72"
              />
            ))}
          </div>

          {/* Pagination Dots on Mobile */}
          <div className="flex md:hidden items-center gap-2 mt-2">
            {service.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToGalleryItem(index)}
                className={`swiper-dot ${activeGalleryIndex === index ? "active" : ""}`}
                aria-label={`Go to gallery slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <Link to="/contact" className="inline-block text-white px-8 py-4 font-bold rounded-lg transition-transform hover:scale-105 duration-200" style={{ backgroundColor: "var(--primary)" }}>
          Request a Quote
        </Link>
      </section>

      <CTA />
    </div>
  );
}