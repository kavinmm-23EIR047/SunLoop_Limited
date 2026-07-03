import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'integrated',
    energyBill: '5000-15000',
    location: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Read URL query parameter on load to auto-select client interest
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interestParam = params.get('interest');
    if (interestParam) {
      setFormData(prev => ({
        ...prev,
        interest: interestParam
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
  };

  return (
    <div className="animate-[fadeIn_0.4s_ease-out] w-full">
      
      {/* Header section */}
      <section className="bg-gradient-to-br from-[#FFF9F5] to-white pt-16 pb-12 border-b border-black/5 w-full">
        <div className="container">
          <div className="badge badge-orange bg-[#FFF0E6] text-[#FF6B00] mb-4 inline-flex px-3 py-1 text-xs font-bold font-title rounded-full tracking-wider uppercase">Consultation</div>
          <h1 className="text-[clamp(1.8rem,5vw,2.75rem)] mb-4 font-bold font-title text-gray-900 leading-tight">Connect With Us</h1>
          <p className="text-gray-500 text-[1.15rem] max-w-[850px] leading-relaxed">
            Looking to transition your property to a clean, intelligent energy ecosystem? Drop us a line below or contact our headquarters in Coimbatore, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Form & details section */}
      <section className="py-[clamp(4rem,6vw,7.5rem)] w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-[1.8rem] relative mb-4 font-extrabold font-title text-gray-900">
                Headquarters Office
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#FF6B00]" />
              </h2>
              <p className="text-gray-500 text-[0.95rem] mt-2 leading-relaxed">
                We deploy services across Coimbatore, Chennai, Bangalore, and surrounding regional hubs.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              
              <div className="flex gap-4 items-start">
                <div className="bg-[#FFF0E6] text-[#FF6B00] p-2.5 rounded-xl flex shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[1.05rem] font-title text-gray-900">Location</h4>
                  <p className="text-[0.9rem] text-gray-500 mt-1 leading-[1.5]">
                    Sunloop Energy HQ,<br />
                    Avinashi Road, Coimbatore,<br />
                    Tamil Nadu - 641018, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#FFF0E6] text-[#FF6B00] p-2.5 rounded-xl flex shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[1.05rem] font-title text-gray-900">Phone Channels</h4>
                  <p className="text-[0.9rem] text-gray-500 mt-1 leading-[1.5]">
                    Office desk: +91 422 1234567<br />
                    Support: +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#FFF0E6] text-[#FF6B00] p-2.5 rounded-xl flex shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[1.05rem] font-title text-gray-900">Email Queries</h4>
                  <p className="text-[0.9rem] text-gray-500 mt-1 leading-[1.5]">
                    General Info: info@sunloopenergy.com<br />
                    Engineering Proposal: sales@sunloopenergy.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact / Proposal Form */}
          <div className="bg-white/90 backdrop-blur-md p-10 shadow-xl border border-black/5 rounded-[18px] w-full">
            {submitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-5">
                <CheckCircle2 size={54} className="text-[#10B981]" />
                <div>
                  <h3 className="text-2xl font-bold font-title text-gray-900">Proposal Request Logged!</h3>
                  <p className="text-gray-500 text-[0.95rem] mt-2 leading-[1.5]">
                    Thank you, <strong className="text-gray-900">{formData.name}</strong>. An engineering consultant from our Coimbatore office will review your requirements and reach out within 24 working hours.
                  </p>
                </div>
                <button 
                  className="bg-[#FF6B00] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#E56000] hover:-translate-y-0.5 transition-all mt-4 shadow-[0_4px_14px_rgba(255,107,0,0.3)]" 
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-[1.35rem] font-bold font-title text-gray-900 mb-1">Request System Consultation</h3>
                
                <div>
                  <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Primary Technology Interest
                  </label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] cursor-pointer"
                  >
                    <option value="solar">Solar Power Plant Installation</option>
                    <option value="storage">Energy Storage Systems (ESS)</option>
                    <option value="ev">EV Charging Infrastructure</option>
                    <option value="portal">Sunloop AI Energy Portal Access</option>
                    <option value="integrated">Fully Integrated Ecosystem (All Solutions)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Estimated Monthly Utility Budget
                  </label>
                  <select 
                    name="energyBill"
                    value={formData.energyBill}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] cursor-pointer"
                  >
                    <option value="under-5000">Under ₹5,000 / month</option>
                    <option value="5000-15000">₹5,000 - ₹15,000 / month</option>
                    <option value="15000-50000">₹15,000 - ₹50,000 / month</option>
                    <option value="above-50000">Above ₹50,000 / month (Commercial/Industrial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Installation Site / City Location
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    placeholder="e.g. Singanallur, Coimbatore"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-[0.8rem] font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Specific Request Notes
                  </label>
                  <textarea 
                    name="message"
                    rows="3"
                    placeholder="Briefly tell us about your roof space, current load, or EV fleet details..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.95rem] text-gray-900 font-medium transition-all focus:border-[#FF6B00] focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,107,0,0.1)] placeholder:text-gray-400 resize-y"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#FF6B00] text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-[#E56000] hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_rgba(255,107,0,0.3)] flex items-center justify-center gap-2 mt-2"
                >
                  Submit Inquiry Proposal
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
