import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:john@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'SEO Optimization',
    'E-commerce',
    'Consulting'
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (elementId) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="footer-brand">
                <h3 className="brand-name">
                  <span className="text-gradient">InBio</span>
                </h3>
                <p className="brand-description">
                  Passionate developer creating innovative digital solutions 
                  that help businesses grow and succeed in the digital landscape.
                </p>
              </div>

              <div className="contact-info-footer">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon-footer" />
                  <a href="mailto:john@example.com">john@example.com</a>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon-footer" />
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon-footer" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="footer-link"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="footer-service">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h5 className="footer-title">Follow Me</h5>
              <p className="social-description">
                Connect with me on social media for updates and insights
              </p>
              <div className="social-links-footer">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>

              <div className="newsletter-section">
                <h6>Stay Updated</h6>
                <p>Subscribe for project updates and tech insights</p>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <Row className="align-items-center">
            <Col md={6}>
              <motion.p
                className="copyright"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                © {currentYear} InBio. Made with{' '}
                <FaHeart className="heart-icon" /> by John Smith
              </motion.p>
            </Col>
            <Col md={6} className="text-md-end">
              <motion.div
                className="footer-bottom-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                <a href="#" className="footer-bottom-link">Terms of Service</a>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={handleScrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp />
      </motion.button>

      {/* Background Pattern */}
      <div className="footer-pattern"></div>
    </footer>
  );
};

export default Footer;