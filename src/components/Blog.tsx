import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop&crop=center",
      category: "GALLERY",
      readTime: "4 min read",
      title: "What I Learned From Being a Broke, Unemployed Graduate."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
      category: "TECHNICIAN",
      readTime: "4 min read",
      title: "Why Successful People Wear The Same Thing Every Day."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      category: "DEVELOPMENT",
      readTime: "4 min read",
      title: "Why We Don't Have Technical Interviews for Technical Roles at Buffer."
    }
  ];

  return (
    <>
      {/* Divider Section */}
      <section className="divider-section">
        <div className="divider-container">
          <div className="elementor-divider">
            <span className="elementor-divider-separator"></span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog">
        <div className="blog-container">
          <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
            <span className="subtitle sub-title">Visit my blog and keep your feedback</span>
            <h2 className="title sec-title">My Blog</h2>
          </div>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="blog-image">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        parent.innerHTML += '<div class="image-placeholder">📷</div>';
                      }
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                  />
                  <div className="blog-category">{post.category}</div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
