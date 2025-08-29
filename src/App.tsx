import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PortfolioSection from './components/PortfolioSection';
import Resume from './components/Resume';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Load particles.js for entire interface
    const loadParticles = async () => {
      try {
        const particlesJS = (window as any).particlesJS;
        if (particlesJS) {
          particlesJS('particles-js', {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: '#f9004d',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          });
        }
      } catch (error) {
        console.log('Particles.js not loaded yet, retrying...');
        setTimeout(loadParticles, 100);
      }
    };

    loadParticles();
  }, []);

  return (
    <div className="app">
      {/* Particles Background for entire interface */}
      <div id="particles-js" className="particles-container"></div>
      
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="portfolio">
          <PortfolioSection />
        </section>
        
        <section id="resume">
          <Resume />
        </section>
        
        <section id="clients">
          <Clients />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="blog">
          <Blog />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
