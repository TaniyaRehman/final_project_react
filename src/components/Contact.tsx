import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">CONTACT</span>
          <h2 className="contact-title">Contact With Me</h2>
        </div>
        
        <div className="contact-content">
          {/* Left Card - Contact Info */}
          <div className="contact-info-card">
            <div className="contact-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                alt="Contact"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="image-placeholder">🤝</div>';
                }}
              />
            </div>
            
            <div className="contact-details">
              <h3 className="contact-name">Nevine Acotanza</h3>
              <p className="contact-position">Chief Operating Officer</p>
              <p className="contact-description">
                I am available for freelance work. Connect with me via and call in to my account.
              </p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">+01234567890</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">admin@example.com</span>
              </div>
            </div>
            
            <div className="social-section">
              <h4 className="social-title">FIND WITH ME</h4>
              <div className="social-buttons">
                <button className="social-btn">
                  𝕏
                </button>
                <button className="social-btn">
                  f
                </button>
                <button className="social-btn">
                  in
                </button>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

