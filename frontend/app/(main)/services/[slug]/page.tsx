import { getService } from "@/app/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = getService(params.slug);
  if (!service) return notFound();

  return (
    <div className="site-shell">
      <div className="bg-[#101624] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto z-10 relative">
          <p className="text-[#fd6206] font-bold uppercase tracking-widest mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold italic mb-6">{service.title}</h1>
          <p className="text-xl italic max-w-3xl text-gray-300">{service.summary}</p>
        </div>
      </div>

      <section className="section-pad py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="italic text-3xl font-bold mb-6">{service.kicker}</h2>
            <div className="space-y-4">
              {service.details.map((detail, i) => (
                <p key={i} className="italic text-gray-700 text-lg">{detail}</p>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="italic text-xl font-bold mb-4 text-[#1c2748]">Key Outcomes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 bg-gray-50 p-4 border border-gray-200 rounded-sm">
                    <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="italic font-bold text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image 
              src={service.image}
              alt={service.title}
              width={800}
              height={600}
              className="rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 border border-gray-200 shadow-xl rounded-sm max-w-sm hidden md:block">
              <h4 className="font-bold italic text-lg mb-2">{service.calculation.title}</h4>
              <p className="italic text-sm text-gray-600 mb-3">{service.calculation.formula}</p>
              <p className="italic font-bold text-[#fd6206]">{service.calculation.example}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad py-16 bg-gray-50 border-y border-gray-200 mb-20">
        <div className="text-center mb-10">
          <h2 className="italic text-3xl font-bold">Gallery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.gallery.map((img, i) => (
            <Image 
              key={i}
              src={img}
              alt={`Gallery image ${i + 1}`}
              width={600}
              height={400}
              className="rounded-sm shadow-md object-cover h-64 w-full"
            />
          ))}
        </div>
      </section>
      
      <section className="section-pad py-20 text-center">
        <h2 className="italic text-3xl font-bold mb-6">Ready to get started?</h2>
        <Link href="/contact" className="inline-block bg-[#fd6206] text-white px-8 py-4 font-bold italic rounded-sm hover:bg-[#fc8748] transition-colors">
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
