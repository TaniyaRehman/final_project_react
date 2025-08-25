import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../utils/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
      expanded={isMenuOpen}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <span className="text-gradient">InBio</span>
        </Navbar.Brand>
        
        <div className="d-flex align-items-center order-lg-2">
          <Button
            variant="outline-none"
            className="theme-toggle me-3"
            onClick={toggleTheme}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </Button>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="order-lg-1">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => handleNavClick('home')}
              className="nav-item"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('about')}
              className="nav-item"
            >
              About
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('services')}
              className="nav-item"
            >
              Services
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('portfolio')}
              className="nav-item"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('contact')}
              className="nav-item"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;