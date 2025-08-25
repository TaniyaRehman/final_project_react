import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <ScrollTop />
    </>
  );
}
export default App;