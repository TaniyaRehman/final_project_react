import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="home" className="d-flex align-items-center hero-section">
      <Container className="text-center" data-aos="fade-up">
        <h1 className="display-4 fw-bold mb-3">We Build Beautiful Digital Experiences</h1>
        <p className="lead mb-4">Consulting agency for modern UI/UX solutions, branding, and digital strategies.</p>
        <Link to="contact" smooth duration={500} offset={-70}>
          <Button variant="primary" size="lg">Hire Us</Button>
        </Link>
      </Container>
    </section>
  );
}

export default Hero;