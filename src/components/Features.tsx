import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "UX Consulting",
      description: "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically."
    },
    {
      title: "App Development",
      description: "We'll handle everything from to app development process until it is time to make your project live."
    },
    {
      title: "Business Strategy",
      description: "We'll help you optimize your business processes to maximize profitability and eliminate unnecessary costs."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h6>FEATURES</h6>
          <h2>What I Do</h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon"></div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="demo-tab">
          <span>40+ DEMOS</span>
        </div>

        <div className="bottom-icons">
          <div className="icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          {showArrow && (
            <motion.div 
              className="icon-circle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
