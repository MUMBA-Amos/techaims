import React from 'react';
import './Team.css';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mumba Amos Ntambo",
      position: "Founder & CEO",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership", "Computer Science"],
      description: "Visionary leader with a Bachelor's in Computer Science (AI Major) from Swinburne University. Expert in AI solutions and business transformation, guiding the company's strategic direction and innovation.",
      initials: "MN",
      hasPhoto: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Lead AI Engineer",
      expertise: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"],
      description: "Expert in developing sophisticated AI models and machine learning solutions. Specializes in natural language processing and computer vision.",
      initials: "SC"
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      position: "Senior Web Developer",
      expertise: ["React", "Node.js", "Full-Stack Development", "UI/UX"],
      description: "Full-stack developer with a passion for creating seamless user experiences. Expert in modern web technologies and responsive design.",
      initials: "MR"
    },
    {
      id: 4,
      name: "Aisha Patel",
      position: "Data Scientist",
      expertise: ["Data Analysis", "Statistical Modeling", "Python", "R"],
      description: "Data scientist specializing in extracting insights from complex datasets. Expert in predictive analytics and business intelligence.",
      initials: "AP"
    },
    {
      id: 5,
      name: "David Kim",
      position: "DevOps Engineer",
      expertise: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Infrastructure specialist ensuring scalable and reliable deployment of applications. Expert in cloud technologies and automation.",
      initials: "DK"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Project Manager",
      expertise: ["Project Management", "Agile", "Client Relations", "Strategy"],
      description: "Experienced project manager ensuring timely delivery and client satisfaction. Expert in agile methodologies and team coordination.",
      initials: "LT"
    }
  ];

  return (
    <div className="team-page">
      <div className="team-container">
        <section className="team-hero">
          <h1 className="team-title">Our Team</h1>
          <p className="team-subtitle">Meet the talented individuals driving innovation at TechAims</p>
        </section>
        
        <section className="team-content">
          <div className="team-intro">
            <h2>Building the Future Together</h2>
            <p>
              Our diverse team of experts brings together years of experience in artificial intelligence, 
              web development, and technology innovation. We're passionate about creating solutions that 
              make a real difference for our clients and their businesses.
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <ScrollAnimatedSection 
                key={member.id} 
                animation="rise" 
                delay={index * 0.15}
                className="team-animation-wrapper"
              >
                <div className="team-member">
                  <div className="member-image">
                  {member.hasPhoto ? (
                    <img 
                      src="/images/founder-photo.jpg" 
                      alt={`${member.name} - ${member.position}`}
                      className="member-photo"
                    />
                  ) : (
                    <div className="member-placeholder">
                      <span className="member-initials">{member.initials}</span>
                    </div>
                  )}
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-description">{member.description}</p>
                  
                  <div className="member-expertise">
                    <h4>Expertise:</h4>
                    <div className="expertise-tags">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </section>
        
        <section className="team-join">
          <div className="join-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented individuals who share our passion for innovation 
              and excellence. If you're interested in being part of our growing team, we'd love to hear from you.
            </p>
            <button className="join-button">View Open Positions</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;