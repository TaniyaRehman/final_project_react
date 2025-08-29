import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const professions = [
    "Developer.",
    "UI/UX Designer.",
    "Coder."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % professions.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-image">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" 
                alt="Taniya Rehman" 
              />
            </div>
          </motion.div>
          
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="subtitle">FIND WITH ME</h6>
              <h1 className="title">
                Hi, I'm <span className="highlight">Taniya Rehman</span>
              </h1>
              <h2 className="profession">
                <span className="fixed-text">I am a </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentText}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    className="profession-text"
                  >
                    {professions[currentText]}
                  </motion.span>
                </AnimatePresence>
              </h2>
              
              <div className="hero-buttons">
                <span className="contact-text">CONTACT ME</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
