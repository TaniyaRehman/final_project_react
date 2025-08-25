import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm('service_id', 'template_id', form, 'user_token')
      .then(() => {
        setSent(true);
        form.reset();
      })
      .catch(() => setError(true));
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="mb-4" data-aos="fade-up">
          <Col className="text-center">
            <h2 className="fw-bold">Get In Touch</h2>
            <p className="text-muted">We'd love to hear about your project.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} data-aos="fade-right">
            <h5>Contact Info</h5>
            <p>Email: hello@inbio.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, NY</p>
          </Col>
          <Col md={6} data-aos="fade-left">
            {sent && <Alert variant="success">Message sent successfully!</Alert>}
            {error && <Alert variant="danger">Failed to send message. Please try later.</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Control name="name" placeholder="Your Name" required />
                </Col>
                <Col>
                  <Form.Control type="email" name="email" placeholder="Your Email" required />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control name="subject" placeholder="Subject" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} name="message" placeholder="Message" required />
              </Form.Group>
              <Button type="submit" variant="primary">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;