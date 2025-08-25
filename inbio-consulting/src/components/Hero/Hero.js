import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaPlay, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'Digital Consultant',
    'React Specialist'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[currentIndex].length) {
        setCurrentText(prev => prev + texts[currentIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(prev => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[currentIndex].length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ff6b35",
      },
      links: {
        color: "#ff6b35",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <Particles
        className="particles-bg"
        init={particlesInit}
        options={particlesConfig}
      />
      
      <Container className="hero-content">
        <Row className="min-vh-100 align-items-center">
          <Col lg={6} className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="greeting">Hello, I'm</h4>
              <h1 className="hero-title">
                John <span className="text-gradient">Smith</span>
              </h1>
              <h2 className="hero-subtitle">
                I'm a <span className="typing-text">{currentText}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description">
                I'm a passionate developer with 5+ years of experience creating 
                digital solutions that drive business growth. Specialized in React, 
                Node.js, and modern web technologies.
              </p>
              
              <div className="hero-buttons">
                <Button 
                  className="btn-primary me-3 mb-3"
                  onClick={handleScrollToContact}
                >
                  <FaPlay className="me-2" />
                  Hire Me
                </Button>
                <Button 
                  className="btn-outline mb-3"
                  onClick={handleScrollToAbout}
                >
                  <FaDownload className="me-2" />
                  Download CV
                </Button>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaGithub />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6} className="hero-image">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="image-container"
            >
              <div className="profile-image">
                <div className="image-bg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                  alt="John Smith" 
                  className="profile-pic"
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;