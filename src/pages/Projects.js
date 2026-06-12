import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const projects = [
  {
    id: 1,
    title: "Baseline Health AI Platform",
    category: "AI Solutions",
    description: "An AI-powered health analysis and reporting platform for a healthcare start-up, cutting manual reporting time by 80%. Features an intelligent patient intake chatbot, automated PDF report generation, custom email delivery, and real-time analytics dashboards powering patient intake workflows.",
    technologies: ["Python", "FastAPI", "Next.js", "OpenAI GPT-4", "Supabase", "PostgreSQL", "Vercel"],
    status: "Completed",
    caseStudy: "/case-study/baseline-health"
  },

  {
    id: 2,
    title: "GoAcara Event Management Platform",
    category: "Cloud & DevOps",
    description: "A microservices-based event management SaaS built on a 4-node Kubernetes cluster with auto-scaling, ALB load balancing, and CI/CD pipelines via ArgoCD. Infrastructure-as-Code was provisioned with Terraform and state backed up to AWS S3, with services containerised for consistent local and production builds.",
    technologies: ["Vue.js", "Nuxt.js", "Node.js", "Go", "PostgreSQL", "Docker", "Kubernetes", "AWS EKS", "ArgoCD", "Terraform"],
    status: "Completed",
    caseStudy: "/case-study/goacara"
  },
  {
    id: 3,
    title: "Grant Application Management System",
    category: "Web Development",
    description: "A grant application management system for a state government research agency, enabling real-time tracking of researcher profiles, publications, and performance metrics across departments. Deployed on cloud infrastructure with Linux shell scripting and cron jobs for automated processing and backups.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQL", "DigitalOcean", "Linux"],
    status: "Completed",
    caseStudy: "/case-study/grant-management"
  },
  {
    id: 4,
    title: "Trainioapp: Trainer & Client Marketplace",
    category: "Mobile Development",
    description: "A cross-platform mobile app connecting clients with personal trainers, featuring swipe-based trainer discovery, real-time chat, and session booking. Includes role-based flows for trainers and clients, a workout/diet plan builder, and in-app subscriptions gating Pro features. Published to the Apple App Store and Google Play.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "RevenueCat", "Google Maps API"],
    status: "Completed",
    caseStudy: "/case-study/trainioapp"
  },
  {
    id: 5,
    title: "PupMood: Dog Mood Tracking App",
    category: "Mobile Development",
    description: "A cross-platform mobile app for logging and analysing a dog's mood over time, with multi-dog support, streak tracking, and AI-powered mood summaries that turn entries into natural-language insights. Includes Google and Apple Sign-In, in-app subscriptions, push notifications, and an animated UI with haptic and audio feedback.",
    technologies: ["React Native", "Expo", "Supabase", "RevenueCat", "OpenAI GPT", "Push Notifications"],
    status: "Completed",
    caseStudy: "/case-study/pupmood"
  }
];

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1 className="projects-title">Our Projects</h1>
        <p className="projects-subtitle">
          Real platforms we've delivered across AI, web, mobile, and cloud, with a focus on the public sector.
        </p>
        <div className="projects-stats">
          <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Projects delivered</span></div>
          <div className="stat"><span className="stat-num">2</span><span className="stat-label">Apps on the App Store</span></div>
          <div className="stat"><span className="stat-num">80%</span><span className="stat-label">Reporting time saved</span></div>
        </div>
      </section>

      <div className="projects-container">
        <section className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollAnimatedSection
                key={project.id}
                animation="rise"
                delay={index * 0.1}
                className="project-animation-wrapper"
              >
                <div className={`project-card cat-${slug(project.category)}`}>
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {project.caseStudy && (
                    <Link to={project.caseStudy} className="project-link">
                      Read case study →
                    </Link>
                  )}
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </section>

        <section className="projects-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your vision to life with intelligent technology.</p>
            <a className="cta-button" href="mailto:contact@techaimz.com">Get In Touch</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
