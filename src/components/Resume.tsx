import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'professional-skills', label: 'Professional Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'interview', label: 'Interview' }
  ];

  const jobExperience = [
    {
      title: "Sr. Software Engineer",
      company: "Google Out Tech",
      period: "2017 - Present",
      location: "USA",
      description: "Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
    },
    {
      title: "Web Developer & Trainer",
      company: "Apple Developer Team",
      period: "2012 - 2016",
      location: "MALAYSIA",
      description: "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
    },
    {
      title: "Front-end Developer",
      company: "Nike",
      period: "2020 - 2011",
      location: "INDIA",
      description: "The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
    }
  ];

  const trainerExperience = [
    {
      title: "Gym Instructor",
      company: "Rainbow Gym Center",
      period: "2015 - 2020",
      location: "DHAKA",
      description: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
    },
    {
      title: "Web Developer and Instructor",
      company: "Superking College",
      period: "2010 - 2014",
      location: "CANADA",
      description: "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
    },
    {
      title: "School Teacher",
      company: "Kingstar Secondary School",
      period: "2001 - 2010",
      location: "NEVADA",
      description: "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
    }
  ];

  const educationQuality = [
    {
      title: "BSc in Computer Science",
      institution: "University of DVI",
      period: "2006 - 2010",
      score: "3.90/4",
      description: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
    },
    {
      title: "AS - Science & Information",
      institution: "Superking College",
      period: "2001 - 2005",
      score: "4.75/5",
      description: "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
    },
    {
      title: "Secondary School Education",
      institution: "Kingstar Secondary School",
      period: "1998 - 2000",
      score: "5.00/5",
      description: "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
    }
  ];

  const designSkills = [
    { name: "PHOTOSHOT", percentage: 100 },
    { name: "FIGMA", percentage: 95 },
    { name: "ADOBE XD", percentage: 60 },
    { name: "ADOBE ILLUSTRATOR", percentage: 70 },
    { name: "DESIGN", percentage: 90 }
  ];

  const developmentSkills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 95 },
    { name: "JAVASCRIPT", percentage: 60 },
    { name: "SOFTWARE", percentage: 70 },
    { name: "PLUGIN", percentage: 90 }
  ];

  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="resume-header"
        >
          <span className="resume-subtitle">7+ YEARS OF EXPERIENCE</span>
          <h2>My Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="resume-tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`resume-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="resume-content"
        >
          {activeTab === 'education' && (
            <div className="education-content">
              <div className="experience-columns">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">2010 - 2022</span>
                    <h3>Job Experience</h3>
                  </div>
                  <div className="timeline">
                    {jobExperience.map((job, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="job-header">
                            <h4>{job.title}</h4>
                            <span className="location-tag">{job.location}</span>
                          </div>
                          <p className="company-period">{job.company} - ({job.period})</p>
                          <p className="job-description">{job.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">2001 - 2020</span>
                    <h3>Trainer Experience</h3>
                  </div>
                  <div className="timeline">
                    {trainerExperience.map((trainer, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="job-header">
                            <h4>{trainer.title}</h4>
                            <span className="location-tag">{trainer.location}</span>
                          </div>
                          <p className="company-period">{trainer.company} - ({trainer.period})</p>
                          <p className="job-description">{trainer.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
          {activeTab === 'interview' && (
            <div className="education-content">
              <div className="experience-columns">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">2010 - 2022</span>
                    <h3>Job Experience</h3>
                  </div>
                  <div className="timeline">
                    {jobExperience.map((job, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="job-header">
                            <h4>{job.title}</h4>
                            <span className="location-tag">{job.location}</span>
                          </div>
                          <p className="company-period">{job.company} - ({job.period})</p>
                          <p className="job-description">{job.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">2001 - 2020</span>
                    <h3>Trainer Experience</h3>
                  </div>
                  <div className="timeline">
                    {trainerExperience.map((trainer, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="job-header">
                            <h4>{trainer.title}</h4>
                            <span className="location-tag">{trainer.location}</span>
                          </div>
                          <p className="company-period">{trainer.company} - ({trainer.period})</p>
                          <p className="job-description">{trainer.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
          {activeTab === 'professional-skills' && (
            <div className="education-content">
              <div className="experience-columns">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">1998 - 2010</span>
                    <h3>Education Quality</h3>
                  </div>
                  <div className="timeline">
                    {educationQuality.map((education, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="job-header">
                            <h4>{education.title}</h4>
                            <span className="score-tag">{education.score}</span>
                          </div>
                          <p className="company-period">{education.institution} - ({education.period})</p>
                          <p className="job-description">{education.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">2010 - 2022</span>
                    <h3>Job Experience</h3>
                  </div>
                  <div className="timeline">
                    {jobExperience.map((job, index) => (
                      <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="job-header">
                            <h4>{job.title}</h4>
                            <span className="location-tag">{job.location}</span>
                          </div>
                          <p className="company-period">{job.company} - ({job.period})</p>
                          <p className="job-description">{job.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
          {activeTab === 'experience' && (
            <div className="education-content">
              <div className="experience-columns">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">Features</span>
                    <h3>Design Skill</h3>
                  </div>
                  <div className="skills-list">
                    {designSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="experience-column"
                >
                  <div className="column-header">
                    <span className="period-range">Features</span>
                    <h3>Development Skill</h3>
                  </div>
                  <div className="skills-list">
                    {developmentSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
