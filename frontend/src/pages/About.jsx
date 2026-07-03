import React from 'react';
import { 
  Building2, Users, Compass, Eye, Heart, Landmark, ShieldCheck, HelpCircle, ArrowRight 
} from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Innovation', desc: 'We continuously embrace new technologies, AI, automation, and digital intelligence to create smarter energy solutions.' },
    { title: 'Sustainability', desc: 'Every solution we deliver contributes toward reducing carbon emissions and protecting the environment for future generations.' },
    { title: 'Customer Success', desc: 'Our customers are our long-term partners. Their growth, savings, and operational excellence define our success.' },
    { title: 'Reliability', desc: 'We design robust systems using proven engineering practices to ensure dependable performance for years.' },
    { title: 'Transparency', desc: 'From design and installation to monitoring and reporting, we believe in complete visibility, honest communication, and measurable results.' },
    { title: 'Excellence', desc: 'We pursue excellence in engineering, execution, safety, service, and customer experience.' }
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease-out] w-full">
      
      {/* Header section */}
      <section className="bg-gradient-to-br from-[#FFF9F5] to-white pt-16 pb-12 border-b border-black/5 w-full">
        <div className="container">
          <div className="badge badge-orange bg-[#FFF0E6] text-[#FF6B00] mb-4 inline-flex px-3 py-1 text-xs font-bold font-title rounded-full tracking-wider uppercase">Our Profile</div>
          <h1 className="text-[clamp(1.8rem,5vw,2.75rem)] mb-4 font-bold font-title text-gray-900 leading-tight">About Sunloop Energy</h1>
          <p className="text-gray-500 text-[1.15rem] max-w-[850px] leading-relaxed">
            A next-generation clean energy company started in 2016, dedicated to transforming how energy is generated, stored, managed, and consumed. Headquartered in Coimbatore, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Corporate Summary section */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] w-full">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl mb-5 font-extrabold font-title text-gray-900">
              Creating Intelligent Energy Ecosystems
            </h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              We specialize in delivering intelligent and sustainable energy solutions through Solar Power Plants, Energy Storage Systems (ESS), and EV Charging Infrastructure. All are seamlessly connected through our proprietary AI Energy Management Portal.
            </p>
            <p className="text-gray-500 mb-5 leading-relaxed">
              Our integrated ecosystem empowers homeowners, commercial establishments, industries, educational institutions, hospitals, and government organizations with complete visibility and control over their energy assets.
            </p>
            <p className="italic font-semibold text-[#FF6B00] border-l-4 border-[#FF6B00] pl-4 py-1 leading-relaxed">
              “We don't just install energy systems, we create intelligent energy ecosystems”
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-gray-50 p-8 rounded-[18px] border border-black/5">
            <h3 className="text-xl mb-2 flex items-center gap-2 font-bold font-title text-gray-900">
              <Landmark size={20} className="text-[#FF6B00]" />
              Quick Company Profile
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li className="flex justify-between border-b border-black/5 pb-2">
                <strong className="text-gray-700">Founded</strong> <span>2016</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <strong className="text-gray-700">Headquarters</strong> <span className="text-right">Coimbatore, Tamil Nadu</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <strong className="text-gray-700">Core Offerings</strong> <span className="text-right">Solar, Storage (ESS), EV Chargers, AI Portal</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <strong className="text-gray-700">Operations</strong> <span className="text-right">Residential, Commercial & Utility Scale</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] bg-gray-50 w-full">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision card */}
          <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-lg rounded-[18px] p-10 border-t-4 border-t-[#10B981] transition-all hover:-translate-y-1.5 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#E6F8F3] text-[#10B981] p-2.5 rounded-xl flex">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold font-title text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-500 text-[0.98rem] leading-[1.7]">
              To empower homes, businesses, and industries with Clean, Optimized, Renewable Energy (CORE) solutions through advanced Solar Power Plants, Energy Storage Systems, and EV Charging Infrastructure—building a sustainable future for generations to come.
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-white/90 backdrop-blur-md border border-white/40 shadow-lg rounded-[18px] p-10 border-t-4 border-t-[#FF6B00] transition-all hover:-translate-y-1.5 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#FFF0E6] text-[#FF6B00] p-2.5 rounded-xl flex">
                <Compass size={24} />
              </div>
              <h3 className="text-2xl font-bold font-title text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-500 text-[0.98rem] leading-[1.7] mb-4">
              At Sunloop Energy, we are committed to delivering innovative, efficient and future-ready energy solutions that help our customers reduce their utility bill and carbon footprint both at the same time, while achieving long-term energy security.
            </p>
            <p className="text-gray-500 text-[0.98rem] leading-[1.7]">
              We accelerate the transition towards sustainable energy by designing, deploying, and managing intelligent renewable energy solutions that deliver measurable value to every customer.
            </p>
          </div>

        </div>
      </section>

      {/* Values section */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] w-full">
        <div className="container">
          <div className="badge badge-orange bg-[#FFF0E6] text-[#FF6B00] mb-4 inline-flex px-3 py-1 text-xs font-bold font-title rounded-full tracking-wider uppercase mx-auto flex w-fit">Shared Philosophy</div>
          <h2 className="text-center text-[2.5rem] mb-4 font-extrabold text-gray-900 font-title">Our Core <span className="text-[#FF6B00]">Values</span></h2>
          <p className="text-center text-[1.1rem] text-gray-500 max-w-[1200px] mx-auto mb-14">The guiding principles behind every engineering draft, installer deployment, and software line we write.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-7 border border-black/5 rounded-xl transition-all duration-200 hover:shadow-md hover:border-black/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
                  <h4 className="text-[1.1rem] font-bold font-title text-gray-900">{val.title}</h4>
                </div>
                <p className="text-[0.88rem] text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
