import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiBriefcase, FiLayers, FiUsers, FiUser, FiShoppingCart, FiImage, FiMessageCircle, FiFacebook, FiTwitter, FiLinkedin, FiCheck } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "UX Consulting",
      description: "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.",
      icon: <FiBriefcase />
    },
    {
      title: "App Development", 
      description: "We'll handle everything from to app development process until it is time to make your project live.",
      icon: <FiLayers />
    },
    {
      title: "Business Strategy",
      description: "We'll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
      icon: <FiUsers />
    }
  ];

  return (
    <div className="consulting-app">
      {/* Side Header */}
      <header className="side-header d-none d-xl-flex">
        <div className="logo-area">
          <h3 className="logo-text">InBio</h3>
        </div>
        
        <nav className="side-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                <span className="menu-icon"><FiHome /></span>
                <span className="menu-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">
                <span className="menu-icon"><FiBriefcase /></span>
                <span className="menu-text">Features</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <span className="menu-icon"><FiLayers /></span>
                <span className="menu-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                <span className="menu-icon"><FiUsers /></span>
                <span className="menu-text">Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#clients" className="nav-link">
                <span className="menu-icon"><FiUser /></span>
                <span className="menu-text">Clients</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link">
                <span className="menu-icon"><FiShoppingCart /></span>
                <span className="menu-text">Pricing</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                <span className="menu-icon"><FiImage /></span>
                <span className="menu-text">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">
                <span className="menu-icon"><FiMessageCircle /></span>
                <span className="menu-text">Contacts</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="side-footer">
          <div className="social-title">find with me</div>
          <div className="social-links">
            <a href="#" className="social-link">
              <FiFacebook />
            </a>
            <a href="#" className="social-link">
              <FiTwitter />
            </a>
            <a href="#" className="social-link">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header d-xl-none">
        <div className="header-content">
          <h3 className="logo-text">InBio</h3>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-menu-close"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiX />
        </button>
        <div className="logo-area">
          <h3 className="logo-text">InBio</h3>
        </div>
        <nav className="side-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                <span className="menu-icon"><FiHome /></span>
                <span className="menu-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                <span className="menu-icon"><FiBriefcase /></span>
                <span className="menu-text">Features</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                <span className="menu-icon"><FiLayers /></span>
                <span className="menu-text">Portfolio</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-area section" id="home">
          <div className="particles-container"></div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="hero-content fade-in-up">
                  <div className="hero-thumbnail">
                    <img 
                      src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-06.png"
                      alt="Jone Lee"
                      className="hero-img"
                    />
                  </div>
                  
                  <h1 className="hero-title">
                    Hi, I'm <span className="primary-color">Jone Lee</span>
                  </h1>
                  
                  <div className="animated-text">
                    I am a <span className="text-animation">Developer.</span>
                  </div>
                  
                  <div className="hero-buttons">
                    <a href="#contacts" className="btn btn-primary">
                      CONTACT ME
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="section-divider" />

        {/* Services Section */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-title">
              <span className="section-subtitle">Features</span>
              <h2 className="section-main-title">What I Do</h2>
            </div>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  <a href="#" className="service-link">
                    <FiCheck className="check-icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="section-divider" />

        {/* Contact Section */}
        <section className="section contact-section" id="contacts">
          <div className="container">
            <div className="section-title">
              <span className="section-subtitle">Contact</span>
              <h2 className="section-main-title">Contact With Me</h2>
            </div>
            
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-thumbnail">
                  <img 
                    src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
                    alt="Contact"
                    className="contact-img"
                  />
                </div>
                <h4>Nevine Acotanza</h4>
                <span>Chief Operating Officer</span>
                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                <div className="contact-item">
                  <strong>Phone:</strong> +01234567890
                </div>
                <div className="contact-item">
                  <strong>Email:</strong> admin@example.com
                </div>
                
                <div className="social-area">
                  <div className="social-title">FIND WITH ME</div>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <FiTwitter />
                    </a>
                    <a href="#" className="social-link">
                      <FiFacebook />
                    </a>
                    <a href="#" className="social-link">
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-wrapper">
                <form className="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="form-control" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input 
                          type="text" 
                          placeholder="Phone Number" 
                          className="form-control" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input 
                          type="email" 
                          placeholder="Email" 
                          className="form-control" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input 
                          type="text" 
                          placeholder="Subject" 
                          className="form-control" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea 
                          placeholder="Your Message" 
                          className="form-control" 
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-primary">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>&copy; 2025. All rights reserved by Rainbow-Themes</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
