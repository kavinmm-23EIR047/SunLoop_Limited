export default function Contact() {
  return (
    <div className="site-shell">
      <div className="bg-[#101624] text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto z-10 relative">
          <p className="text-[#fd6206] font-bold tracking-widest uppercase mb-4">Contact Us</p>
          <h1 className="text-5xl md:text-6xl font-bold italic max-w-2xl">Get in touch with our energy experts.</h1>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1c2748] opacity-50 z-0 hidden md:block"></div>
      </div>

      <section className="section-pad py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="italic text-3xl font-bold mb-6">Let's discuss your energy infrastructure.</h2>
            <p className="italic text-lg mb-10 text-gray-700">
              Whether you are planning a new solar plant, upgrading your commercial energy storage, or building an EV charging network, our team is ready to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 rounded-sm">
                <svg className="w-6 h-6 text-[#fd6206] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div>
                  <h3 className="italic font-bold text-xl">Call Us</h3>
                  <p className="italic text-gray-600 mt-1">+1 (800) 555-0199</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-200 rounded-sm">
                <svg className="w-6 h-6 text-[#fd6206] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div>
                  <h3 className="italic font-bold text-xl">Email Us</h3>
                  <p className="italic text-gray-600 mt-1">enterprise@sunloop.energy</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-xl">
            <h3 className="italic text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold italic text-[#1c2748] mb-2">First Name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 rounded-sm italic focus:border-[#fd6206] focus:ring-1 focus:ring-[#fd6206] outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold italic text-[#1c2748] mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 rounded-sm italic focus:border-[#fd6206] focus:ring-1 focus:ring-[#fd6206] outline-none" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold italic text-[#1c2748] mb-2">Email Address</label>
                <input type="email" className="w-full border border-gray-300 p-3 rounded-sm italic focus:border-[#fd6206] focus:ring-1 focus:ring-[#fd6206] outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold italic text-[#1c2748] mb-2">Inquiry Type</label>
                <select className="w-full border border-gray-300 p-3 rounded-sm italic focus:border-[#fd6206] focus:ring-1 focus:ring-[#fd6206] outline-none bg-white">
                  <option>Solar Power Plants</option>
                  <option>Energy Storage</option>
                  <option>EV Charging</option>
                  <option>AI Portal Demo</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold italic text-[#1c2748] mb-2">Message</label>
                <textarea rows={4} className="w-full border border-gray-300 p-3 rounded-sm italic focus:border-[#fd6206] focus:ring-1 focus:ring-[#fd6206] outline-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="bg-[#fd6206] text-white px-8 py-4 font-bold italic w-full rounded-sm hover:bg-[#fc8748] transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
