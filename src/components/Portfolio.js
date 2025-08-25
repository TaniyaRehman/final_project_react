import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Image } from 'react-bootstrap';

const items = [
  { id: 1, category: 'Design', img: 'https://via.placeholder.com/600x400', title: 'Design Project' },
  { id: 2, category: 'Development', img: 'https://via.placeholder.com/600x400', title: 'Web App' },
  { id: 3, category: 'App', img: 'https://via.placeholder.com/600x400', title: 'Mobile App' },
  { id: 4, category: 'Marketing', img: 'https://via.placeholder.com/600x400', title: 'Marketing Campaign' },
];

const categories = ['All', ...new Set(items.map((i) => i.category))];

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filteredItems = filter === 'All' ? items : items.filter((i) => i.category === filter);

  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container>
        <Row className="mb-4" data-aos="fade-up">
          <Col className="text-center">
            <h2 className="fw-bold">Portfolio</h2>
            <p className="text-muted">Some of our recent works.</p>
            <div className="d-inline-flex gap-2 flex-wrap justify-content-center mt-3">
              {categories.map((cat) => (
                <Button key={cat} variant={filter === cat ? 'primary' : 'outline-primary'} size="sm" onClick={() => setFilter(cat)}>
                  {cat}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          {filteredItems.map((item) => (
            <Col key={item.id} md={6} lg={4} className="mb-4" data-aos="zoom-in">
              <div className="portfolio-item position-relative" onClick={() => setSelected(item)} style={{ cursor: 'pointer' }}>
                <Image src={item.img} alt={item.title} fluid className="rounded shadow" />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <h5 className="text-white">{item.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={!!selected} onHide={() => setSelected(null)} size="lg" centered>
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selected.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={selected.img} fluid className="rounded" />
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Portfolio;