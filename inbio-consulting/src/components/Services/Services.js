import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaSearch, 
  FaShoppingCart, 
  FaCog,
  FaArrowRight 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and MongoDB.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Cross Browser'],
      price: 'Starting at $2,500'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,500'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Launch'],
      price: 'Starting at $3,500'
    },
    {
      icon: FaSearch,
      title: 'SEO Optimization',
      description: 'Improve your website visibility and ranking on search engines.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics Setup'],
      price: 'Starting at $800'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics'],
      price: 'Starting at $4,000'
    },
    {
      icon: FaCog,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology stack, architecture, and development strategy.',
      features: ['Architecture Review', 'Code Audit', 'Performance Optimization', 'Team Training'],
      price: 'Starting at $150/hr'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section services-section">
      <Container>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>My <span className="text-gradient">Services</span></h2>
          <p>I provide a wide range of digital services to help your business grow</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div variants={cardVariants}>
                  <Card className="service-card h-100">
                    <Card.Body className="d-flex flex-column">
                      <div className="service-icon-wrapper mb-3">
                        <service.icon className="service-icon" />
                      </div>
                      
                      <h4 className="service-title mb-3">{service.title}</h4>
                      <p className="service-description mb-4">{service.description}</p>
                      
                      <div className="service-features mb-4">
                        <ul>
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="service-price mb-3">{service.price}</div>
                        <button className="service-btn">
                          Learn More
                          <FaArrowRight className="ms-2" />
                        </button>
                      </div>
                    </Card.Body>
                    
                    <div className="service-overlay">
                      <div className="overlay-content">
                        <h5>Get Started</h5>
                        <p>Ready to begin your project? Let's discuss your requirements.</p>
                        <button className="btn-primary">Contact Now</button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="process-section mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-center mb-5">My Working <span className="text-gradient">Process</span></h3>
          
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="step-number">01</div>
                <h5>Discovery</h5>
                <p>Understanding your business goals and requirements</p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="step-number">02</div>
                <h5>Planning</h5>
                <p>Creating detailed project plan and timeline</p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="step-number">03</div>
                <h5>Development</h5>
                <p>Building your solution with regular updates</p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="step-number">04</div>
                <h5>Launch</h5>
                <p>Testing, deployment, and ongoing support</p>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;