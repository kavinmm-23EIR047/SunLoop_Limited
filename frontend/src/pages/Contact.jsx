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
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      
      {/* Header section */}
      <section style={{ background: 'linear-gradient(135deg, #FFF9F5 0%, #FFFFFF 100%)', padding: '4rem 0 3rem 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div className="container">
          <div className="badge badge-orange" style={{ marginBottom: '1rem' }}>Consultation</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.75rem)', marginBottom: '1rem' }}>Connect With Us</h1>
          <p style={{ color: 'var(--text-medium)', fontSize: '1.15rem', maxWidth: '850px', lineHeight: '1.6' }}>
            Looking to transition your property to a clean, intelligent energy ecosystem? Drop us a line below or contact our headquarters in Coimbatore, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Form & details section */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', position: 'relative', marginBottom: '1rem' }}>
                Headquarters Office
                <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '40px', height: '3px', backgroundColor: 'var(--brand-orange)' }} />
              </h2>
              <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                We deploy services across Coimbatore, Chennai, Bangalore, and surrounding regional hubs.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--brand-orange-light)', color: 'var(--brand-orange)', padding: '0.6rem', borderRadius: '10px', display: 'flex' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem' }}>Location</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginTop: '2px', lineHeight: '1.5' }}>
                    Sunloop Energy HQ,<br />
                    Avinashi Road, Coimbatore,<br />
                    Tamil Nadu - 641018, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--brand-orange-light)', color: 'var(--brand-orange)', padding: '0.6rem', borderRadius: '10px', display: 'flex' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem' }}>Phone Channels</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginTop: '2px' }}>
                    Office desk: +91 422 1234567<br />
                    Support: +91 98765 43210
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--brand-orange-light)', color: 'var(--brand-orange)', padding: '0.6rem', borderRadius: '10px', display: 'flex' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.05rem' }}>Email Queries</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginTop: '2px' }}>
                    General Info: info@sunloopenergy.com<br />
                    Engineering Proposal: sales@sunloopenergy.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact / Proposal Form */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.5rem', 
              boxShadow: 'var(--shadow-xl)', 
              border: '1px solid rgba(0,0,0,0.06)', 
              background: '#FFFFFF',
              width: '100%'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <CheckCircle2 size={54} style={{ color: 'var(--color-storage)' }} />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Proposal Request Logged!</h3>
                  <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                    Thank you, <strong>{formData.name}</strong>. An engineering consultant from our Coimbatore office will review your requirements and reach out within 24 working hours.
                  </p>
                </div>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>Request System Consultation</h3>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                    Primary Technology Interest
                  </label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="form-input"
                    style={{ backgroundColor: '#FFFFFF', fontWeight: 500, cursor: 'pointer' }}
                  >
                    <option value="solar">Solar Power Plant Installation</option>
                    <option value="storage">Energy Storage Systems (ESS)</option>
                    <option value="ev">EV Charging Infrastructure</option>
                    <option value="portal">Sunloop AI Energy Portal Access</option>
                    <option value="integrated">Fully Integrated Ecosystem (All Solutions)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                    Estimated Monthly Utility Budget
                  </label>
                  <select 
                    name="energyBill"
                    value={formData.energyBill}
                    onChange={handleChange}
                    className="form-input"
                    style={{ backgroundColor: '#FFFFFF', fontWeight: 500, cursor: 'pointer' }}
                  >
                    <option value="under-5000">Under ₹5,000 / month</option>
                    <option value="5000-15000">₹5,000 - ₹15,000 / month</option>
                    <option value="15000-50000">₹15,000 - ₹50,000 / month</option>
                    <option value="above-50000">Above ₹50,000 / month (Commercial/Industrial)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                    Installation Site / City Location
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    placeholder="e.g. Singanallur, Coimbatore"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-medium)', marginBottom: '0.4rem' }}>
                    Specific Request Notes
                  </label>
                  <textarea 
                    name="message"
                    rows="3"
                    placeholder="Briefly tell us about your roof space, current load, or EV fleet details..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem' }}>
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
