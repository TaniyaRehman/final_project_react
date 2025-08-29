import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState('basic');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      title: 'Make Your Single Page',
      subtitle: 'Elementor / WPBakery',
      price: '$30.00',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
      leftFeatures: [
        '1 Page with Elementor',
        'Design Customization',
        'Responsive Design',
        'Content Upload',
        'Design Customization',
        '2 Plugins/Extensions'
      ],
      rightFeatures: [
        'Multipage Elementor',
        'Design Figma',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        '8 Plugins/Extensions'
      ],
      recommended: false
    },
    {
      id: 'standard',
      name: 'Standard',
      title: 'Make Your Multi Page',
      subtitle: 'Elementor / WPBakery',
      price: '$60.00',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
      leftFeatures: [
        'Multipage Elementor',
        'Design Figma',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        '8 Plugins/Extensions'
      ],
      rightFeatures: [
        'Complete Site Elementor',
        'Design Figma + XD',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        '15 Plugins/Extensions'
      ],
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      title: 'Make Your Complete Site',
      subtitle: 'Elementor / WPBakery',
      price: '$90.00',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
      leftFeatures: [
        'Complete Site Elementor',
        'Design Figma + XD',
        'MAintaine Design',
        'Content Upload',
        'Design With XD',
        '15 Plugins/Extensions'
      ],
      rightFeatures: [
        'Custom Development',
        'Priority Support',
        'Performance Optimization',
        'Advanced SEO',
        'Analytics Dashboard',
        'Unlimited Pages'
      ],
      recommended: false
    }
  ];

  const currentPlan = plans.find(plan => plan.id === activePlan);

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-layout">
        {/* Left Column - Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pricing-title-column"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <div className="pricing-header">
            <span className="pricing-subtitle">PRICING</span>
            <h2>My Pricing</h2>
          </div>
        </motion.div>

        {/* Right Column - Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="pricing-plans-column"
        >
          <div className="rn-pricing-area">
            <div className="navigation-wrapper">
              <ul className="nav" id="myTab" role="tablist">
                {plans.map((plan) => (
                  <li 
                    key={plan.id} 
                    className={`nav-item ${plan.recommended ? 'recommended' : 'no-recommended'}`}
                    data-recommended-label="Recommended"
                  >
                    <a 
                      className={`nav-style ${activePlan === plan.id ? 'active' : 'no-active'}`}
                      id={`rb${plan.name.toLowerCase()}Plan-${plan.id}`}
                      data-toggle="tab"
                      href={`#tab_link_${plan.id}`}
                      role="tab"
                      aria-selected={activePlan === plan.id}
                      onClick={() => setActivePlan(plan.id)}
                    >
                      {plan.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="myTabContent">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`tab-pane fade ${activePlan === plan.id ? 'active show' : ''}`}
                    id={`tab_link_${plan.id}`}
                  >
                    <div className="rn-pricing">
                      <div className="pricing-header">
                        <div className="header-left">
                          <h2 className="title">{plan.title}</h2>
                          <span>{plan.subtitle}</span>
                        </div>
                        <div className="header-right">
                          <span>{plan.price}</span>
                        </div>
                      </div>
                      
                      <div className="pricing-body">
                        <p className="description">{plan.description}</p>
                        <div className="check-wrapper">
                          <div className="left-area">
                            {plan.leftFeatures.map((feature, index) => (
                              <div key={index} className="check d-flex">
                                <i className="feather-check">✓</i>
                                <p>{feature}</p>
                              </div>
                            ))}
                          </div>
                          <div className="right-area">
                            {plan.rightFeatures.map((feature, index) => (
                              <div key={index} className="check d-flex">
                                <i className="feather-check">✓</i>
                                <p>{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="pricing-footer">
                        <a className="rn-btn d-block" href="#">
                          ORDER NOW<i className="feather-arrow-right">→</i>
                        </a>
                        <div className="time-line">
                          <div className="single-cmt d-flex">
                            <i className="feather-clock">🕐</i>
                            <span> 2 Days Delivery</span>
                          </div>
                          <div className="single-cmt d-flex">
                            <i className="feather-activity">⚡</i>
                            <span> Unlimited Revission</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
