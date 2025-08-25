import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPaintBrush, FaCode, FaChartLine, FaMobileAlt } from 'react-icons/fa';

const services = [
  { icon: <FaPaintBrush size={40} />, title: 'UI/UX Design', desc: 'Beautiful and intuitive design solutions.' },
  { icon: <FaCode size={40} />, title: 'Web Development', desc: 'Modern and scalable web applications.' },
  { icon: <FaChartLine size={40} />, title: 'Digital Marketing', desc: 'Strategies to grow your brand online.' },
  { icon: <FaMobileAlt size={40} />, title: 'App Development', desc: 'Native and cross-platform mobile apps.' },
];

function Services() {
  return (
    <section id="services" className="py-5">
      <Container>
        <Row className="mb-4" data-aos="fade-up">
          <Col className="text-center">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">We provide a wide range of services to meet your digital needs.</p>
          </Col>
        </Row>
        <Row>
          {services.map((srv, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <Card className="h-100 text-center shadow border-0">
                <Card.Body>
                  <div className="text-primary mb-3">{srv.icon}</div>
                  <Card.Title>{srv.title}</Card.Title>
                  <Card.Text>{srv.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;