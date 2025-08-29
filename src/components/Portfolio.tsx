import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Front view woman wearing trucker hat",
      category: "image",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop",
      likes: 453,
      type: "Image"
    },
    {
      id: 2,
      title: "Close up portrait of confident woman with red lips",
      category: "video",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      likes: 327,
      type: "Video"
    },
    {
      id: 3,
      title: "Portrait of pretty blonde model sitting on table",
      category: "external",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      likes: 440,
      type: "External Link"
    },
    {
      id: 4,
      title: "Beautiful african female feeling grateful",
      category: "image",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=300&fit=crop",
      likes: 442,
      type: "Image"
    },
    {
      id: 5,
      title: "Fashion is part of the daily life photography",
      category: "image",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
      likes: 419,
      type: "Image"
    },
    {
      id: 6,
      title: "Jessie Andrews is hard to define",
      category: "video",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
      likes: 505,
      type: "Video"
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
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
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
                    <div className="portfolio-overlay">
                      <div className="portfolio-type">
                        {project.category === 'external' ? '🔗' : '👁️'}
                      </div>
                      <div className="portfolio-likes">
                        ❤️ {project.likes}
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <span className="portfolio-category">{project.type}</span>
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

export default Portfolio;
