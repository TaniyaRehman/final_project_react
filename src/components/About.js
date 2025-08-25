import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'UI/UX Design', value: 90 },
  { name: 'Web Development', value: 95 },
  { name: 'Branding', value: 85 },
  { name: 'Consulting', value: 80 },
];

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-4" data-aos="fade-up">
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2 className="fw-bold">About Us</h2>
            <p className="text-muted">We are a team of creatives crafting delightful experiences for startups and enterprises alike.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} data-aos="fade-right">
            <img src="https://via.placeholder.com/500x350" alt="about" className="img-fluid rounded" />
          </Col>
          <Col md={6} data-aos="fade-left">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <ProgressBar now={skill.value} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;