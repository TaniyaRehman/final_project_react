import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'portfolio', 'resume', 'clients', 'pricing', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Profile Section */}
        <div className="profile-section">
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
            alt="Profile" 
            className="profile-image"
          />
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')}
                className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
              >
                <span className="nav-icon">💡</span>
                <span className="nav-text">About</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              >
                <span className="nav-icon">📁</span>
                <span className="nav-text">Portfolio</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('resume')}
                className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
              >
                <span className="nav-icon">📄</span>
                <span className="nav-text">Resume</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('clients')}
                className={`nav-link ${activeSection === 'clients' ? 'active' : ''}`}
              >
                <span className="nav-icon">👥</span>
                <span className="nav-text">Clients</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
              >
                <span className="nav-icon">💰</span>
                <span className="nav-text">Pricing</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('blog')}
                className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
              >
                <span className="nav-icon">📝</span>
                <span className="nav-text">Blog</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                <span className="nav-icon">📧</span>
                <span className="nav-text">Contact</span>
              </button>
            </li>
            <li>
              <div className="cart-section">
                <div className="cart-container">
                  <span className="cart-icon">🛒</span>
                  <span className="cart-badge">0</span>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Find With Me Section */}
        <div className="find-with-me">
          <p>FIND WITH ME</p>
        </div>

        {/* Social Media Buttons */}
        <div className="social-buttons">
          <button className="social-btn facebook">f</button>
          <button className="social-btn twitter">𝕏</button>
          <button className="social-btn linkedin">in</button>
        </div>
      </div>
    </aside>
  );
};

export default Header;
