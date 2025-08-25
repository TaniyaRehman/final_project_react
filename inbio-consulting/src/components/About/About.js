import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { FaAward, FaUsers, FaProjectDiagram, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef();

  const skills = [
    { name: 'React.js', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'UI/UX Design', percentage: 88 },
    { name: 'MongoDB', percentage: 82 }
  ];

  const stats = [
    { icon: FaAward, number: '150+', label: 'Projects Completed' },
    { icon: FaUsers, number: '50+', label: 'Happy Clients' },
    { icon: FaProjectDiagram, number: '5+', label: 'Years Experience' },
    { icon: FaCoffee, number: '1000+', label: 'Cups of Coffee' }
  ];

  const timeline = [
    {
      year: '2019-2021',
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed responsive web applications using React.js and modern JavaScript frameworks.'
    },
    {
      year: '2021-2023',
      title: 'Full Stack Developer',
      company: 'Digital Agency Co.',
      description: 'Built end-to-end web solutions using MERN stack and collaborated with design teams.'
    },
    {
      year: '2023-Present',
      title: 'Senior Developer & Consultant',
      company: 'Freelance',
      description: 'Providing technical consultation and developing scalable solutions for various clients.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section">
      <Container>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About <span className="text-gradient">Me</span></h2>
          <p>Discover more about my journey, skills, and passion for creating digital solutions</p>
        </motion.div>

        <Row className="mb-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-content"
            >
              <h3 className="mb-4">I'm John Smith, a Digital Consultant & Developer</h3>
              <p>
                With over 5 years of experience in web development, I specialize in creating 
                innovative digital solutions that help businesses grow and succeed in the digital landscape.
              </p>
              <p>
                My expertise spans across frontend and backend development, with a particular 
                focus on React.js, Node.js, and modern JavaScript frameworks. I'm passionate 
                about clean code, user experience, and delivering high-quality solutions.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing my knowledge with the developer community.
              </p>
              
              <div className="personal-info mt-4">
                <Row>
                  <Col sm={6}>
                    <div className="info-item">
                      <strong>Email:</strong> john@example.com
                    </div>
                    <div className="info-item">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="info-item">
                      <strong>Location:</strong> San Francisco, CA
                    </div>
                    <div className="info-item">
                      <strong>Freelance:</strong> Available
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              ref={skillsRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="skills-section"
            >
              <h4 className="mb-4">Technical Skills</h4>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={skillsVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-section mb-5">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="stat-card text-center h-100">
                  <Card.Body>
                    <div className="stat-icon mb-3">
                      <stat.icon />
                    </div>
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="timeline-section"
        >
          <h4 className="text-center mb-5">Work Experience</h4>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h5>{item.title}</h5>
                  <h6 className="text-gradient">{item.company}</h6>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;