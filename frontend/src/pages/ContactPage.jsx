import { CTA } from "@/components/Shared";

export function ContactPage() {
  return (
    <div className="site-shell">
      <section className="subhero section-pad">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Talk to the team that builds connected energy systems.</h1>
          <p className="hero-text">
            Whether you are planning solar, storage, EV charging, or an AI portal demo, we can help scope the right system and deployment path.
          </p>
        </div>
        <img
          src="/images/clean-contact-sheet.jpg"
          alt="Energy team planning a project"
          width={900}
          height={520}
          loading="eager"
          decoding="async"
          className="rounded-sm"
        />
      </section>

      <section className="section section-pad contact-layout">
        <div className="contact-panel">
          <div className="section-heading">
            <p className="eyebrow">Reach Us</p>
            <h2>Start with a conversation, then move to a clear proposal.</h2>
          </div>

          <div className="contact-card">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <div>
              <h3>Call us</h3>
              <p>+1 (800) 555-0199</p>
            </div>
          </div>

          <div className="contact-card">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <div>
              <h3>Email us</h3>
              <p>enterprise@sunloop.energy</p>
            </div>
          </div>

          <div className="contact-card">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.999 1.999 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <div>
              <h3>Headquarters</h3>
              <p>Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="section-heading">
            <p className="eyebrow">Send A Message</p>
            <h2>Tell us what you want to build.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" placeholder="John" />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="john@company.com" />
          </div>
          <div>
            <label htmlFor="inquiry">Inquiry Type</label>
            <select id="inquiry" defaultValue="Solar Power Plants">
              <option>Solar Power Plants</option>
              <option>Energy Storage</option>
              <option>EV Charging</option>
              <option>AI Portal Demo</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell us about your project..." />
          </div>
          <button type="button" className="button primary contact-action">
            Submit Request
          </button>
        </form>
      </section>

      <CTA />
    </div>
  );
}