import { PageHero } from "@/components/Shared";
import { companyValues } from "@/app/content";

export default function About() {
  return (
    <div className="site-shell">
      <PageHero
        eyebrow="About Us"
        title="We are building the future of energy infrastructure."
        text="Sunloop Energy is a technology-driven renewable energy company focused on delivering integrated solutions that are clean, intelligent, and scalable."
        image="/images/clean-contact-sheet.jpg"
        imageAlt="Team planning energy infrastructure"
      />

      <section className="section section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="italic text-3xl font-bold mb-6">Our Mission</h2>
            <p className="italic text-lg mb-6 text-gray-700">
              To accelerate the global transition to sustainable energy by providing reliable, high-performance infrastructure that powers homes, businesses, and industries efficiently.
            </p>
            <p className="italic text-lg text-gray-700">
              We believe that <strong className="italic text-black">renewable energy should be intelligent</strong>. That's why we build systems that don't just generate power, but optimize its usage through AI.
            </p>
          </div>
          <div className="bg-gray-50 p-8 border border-gray-200 rounded-sm">
            <h3 className="italic text-xl font-bold mb-4">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyValues.map((value) => (
                <div key={value} className="bg-white p-4 border border-gray-100 rounded-sm shadow-sm flex items-center">
                  <svg className="w-5 h-5 text-[#fd6206] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="font-bold italic text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
