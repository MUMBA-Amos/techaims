import React from 'react';
import './Projects.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce AI Chatbot",
      category: "AI Solutions",
      description: "Developed an intelligent chatbot for a major e-commerce platform that handles customer inquiries, provides product recommendations, and processes orders automatically.",
      technologies: ["Python", "TensorFlow", "Natural Language Processing", "REST APIs"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Financial Dashboard Web App",
      category: "Web Development",
      description: "Created a comprehensive financial dashboard for investment firms with real-time data visualization, portfolio management, and automated reporting features.",
      technologies: ["React", "Node.js", "D3.js", "MongoDB", "Socket.io"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Supply Chain Automation System",
      category: "AI Solutions",
      description: "Built a machine learning system that predicts supply chain demands, optimizes inventory levels, and automates procurement processes for manufacturing companies.",
      technologies: ["Python", "Scikit-learn", "PostgreSQL", "Docker", "Apache Airflow"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Healthcare Management Platform",
      category: "Web Development",
      description: "Developed a full-stack healthcare management system with patient records, appointment scheduling, telemedicine capabilities, and HIPAA compliance.",
      technologies: ["React", "Express.js", "MySQL", "WebRTC", "AWS"],
      status: "In Progress"
    },
    {
      id: 5,
      title: "Smart Content Generator",
      category: "AI Solutions",
      description: "Created an AI-powered content generation tool that produces marketing copy, blog posts, and social media content tailored to brand voice and target audience.",
      technologies: ["OpenAI GPT", "Python", "FastAPI", "Redis", "Vue.js"],
      status: "In Progress"
    },
    {
      id: 6,
      title: "Real Estate Analytics Platform",
      category: "Web Development",
      description: "Built a comprehensive real estate platform with property valuations, market analysis, and investment recommendations powered by machine learning algorithms.",
      technologies: ["React", "Python", "Flask", "PostgreSQL", "Google Maps API"],
      status: "Planning"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <section className="projects-hero">
          <h1 className="projects-title">Our Projects</h1>
          <p className="projects-subtitle">Showcasing our expertise in AI and web development</p>
        </section>
        
        <section className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollAnimatedSection 
                key={project.id} 
                animation="rise" 
                delay={index * 0.1}
                className="project-animation-wrapper"
              >
                <div className="project-card">
                  <div className="project-header">
                  <div className="project-category">{project.category}</div>
                  <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </section>
        
        <section className="projects-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your vision to life with cutting-edge technology.</p>
            <button className="cta-button">Get In Touch</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;