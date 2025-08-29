import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Front view woman wearing trucker hat",
      category: "image",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      likes: 453,
      type: "IMAGE"
    },
    {
      id: 2,
      title: "Close up portrait of confident woman with red lips",
      category: "video",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=300&fit=crop&crop=face",
      likes: 327,
      type: "VIDEO"
    },
    {
      id: 3,
      title: "Jessie Andrews is hard to define",
      category: "video",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face",
      likes: 505,
      type: "VIDEO"
    },
    {
      id: 4,
      title: "Portrait of pretty blonde model sitting on table",
      category: "external",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face",
      likes: 440,
      type: "EXTERNAL LINK"
    },
    {
      id: 5,
      title: "Beautiful african female feeling grateful",
      category: "image",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      likes: 442,
      type: "IMAGE"
    },
    {
      id: 6,
      title: "Fashion is part of the c photography",
      category: "standard",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop&crop=face",
      likes: 419,
      type: "STANDARD"
    }
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="portfolio-header"
        >
          <a href="#" className="portfolio-link">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</a>
          <h2>My Portfolio</h2>
        </motion.div>

        <div className="portfolio-carousel">
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={prevPage}
          >
            ←
          </button>

          <div className="portfolio-grid">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="portfolio-item"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="portfolio-info">
                    <span className="portfolio-category">{project.type}</span>
                    <div className="portfolio-likes">
                      ❤️ {project.likes}
                    </div>
                    <h4>{project.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={nextPage}
          >
            →
          </button>
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="portfolio-modal"
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <div className="modal-body">
                <h3>{projects.find(p => p.id === selectedProject)?.title}</h3>
                <p>Project details and description would go here...</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
