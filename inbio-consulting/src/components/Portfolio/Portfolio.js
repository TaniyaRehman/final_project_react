import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaEye, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      description: 'A React Native mobile application for task management with real-time collaboration features.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Agency Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      description: 'Modern and responsive website design for a digital marketing agency with interactive animations.',
      technologies: ['Figma', 'Adobe XD', 'Principle'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      description: 'Elegant restaurant website with online reservation system and menu management.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      description: 'iOS and Android app for fitness tracking with social features and workout plans.',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      description: 'Complete brand identity design including logo, color palette, and brand guidelines.',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <Container>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>My <span className="text-gradient">Portfolio</span></h2>
          <p>Explore my latest projects and creative works</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.key)}
            >
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <Row>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} key={project.id} className="mb-4">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="portfolio-card">
                    <div className="portfolio-image">
                      <img src={project.image} alt={project.title} />
                      <div className="portfolio-overlay">
                        <div className="overlay-content">
                          <button
                            className="overlay-btn"
                            onClick={() => handleProjectClick(project)}
                          >
                            <FaEye />
                          </button>
                          <a
                            href={project.githubUrl}
                            className="overlay-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                          <a
                            href={project.liveUrl}
                            className="overlay-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                      </div>
                      {project.featured && (
                        <div className="featured-badge">Featured</div>
                      )}
                    </div>
                    <Card.Body>
                      <h5 className="portfolio-title">{project.title}</h5>
                      <p className="portfolio-description">
                        {project.description.substring(0, 100)}...
                      </p>
                      <div className="portfolio-tech">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {/* Project Modal */}
        <Modal 
          show={showModal} 
          onHide={handleCloseModal} 
          size="lg" 
          centered
          className="portfolio-modal"
        >
          <Modal.Header className="border-0">
            <Button
              variant="outline-none"
              className="modal-close-btn"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </Button>
          </Modal.Header>
          <Modal.Body className="p-0">
            {selectedProject && (
              <div className="modal-content-wrapper">
                <div className="modal-image">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-100"
                  />
                </div>
                <div className="modal-details">
                  <h3 className="mb-3">{selectedProject.title}</h3>
                  <p className="mb-4">{selectedProject.description}</p>
                  
                  <div className="tech-stack mb-4">
                    <h6>Technologies Used:</h6>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-links">
                    <a
                      href={selectedProject.liveUrl}
                      className="btn-primary me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Portfolio;