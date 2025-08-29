import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Clients: React.FC = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const navigationTabs = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'product-design', label: 'Product Design' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'html-to-react', label: 'HTML to React' },
    { id: 'react-to-laravel', label: 'React To Laravel' },
    { id: 'python', label: 'Python' }
  ];

  const clients = [
    {
      id: 1,
      name: "John Due",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client5.png",
      alt: "client5"
    },
    {
      id: 2,
      name: "Smiths Marth",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client1-1.png",
      alt: "client1"
    },
    {
      id: 3,
      name: "Add Dev",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client3.png",
      alt: "client3"
    },
    {
      id: 4,
      name: "Jone Due",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client3.png",
      alt: "client3"
    },
    {
      id: 5,
      name: "Adon Smith",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client4.png",
      alt: "client4"
    },
    {
      id: 6,
      name: "John Due",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client5.png",
      alt: "client5"
    },
    {
      id: 7,
      name: "Smitha Mila",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client1-1.png",
      alt: "client1"
    },
    {
      id: 8,
      name: "Sultana Mila",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client2.png",
      alt: "client2"
    },
    {
      id: 9,
      name: "Jannat",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client3.png",
      alt: "client3"
    },
    {
      id: 10,
      name: "John Due",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client4.png",
      alt: "client4"
    },
    {
      id: 11,
      name: "Marth Smiths",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client5.png",
      alt: "client5"
    },
    {
      id: 12,
      name: "John Due",
      image: "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/client1-1.png",
      alt: "client1"
    }
  ];

  return (
    <section className="clients-section" id="clients">
      <div className="clients-layout">
        {/* Left Sidebar Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="clients-sidebar"
        >
          <div className="sidebar-nav">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="clients-main">
          <div className="clients-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="clients-header"
            >
              <span className="clients-subtitle">POPULAR CLIENTS</span>
              <h2>Awesome Clients</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="client-card"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  className="main-content"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  <div className="inner text-center">
                    <div className="thumbnail">
                      <a href="#">
                        <img 
                          loading="lazy" 
                          decoding="async" 
                          width="96" 
                          height="95" 
                          src={client.image} 
                          className="attachment-full size-full" 
                          alt={client.alt} 
                        />
                      </a>
                    </div>
                    <div className="seperator"></div>
                    <div className="client-name">
                      <span>
                        <a href="#">{client.name}</a>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
