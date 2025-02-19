import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage for dark mode preference
  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode and persist preference in localStorage
  const toggleDarkMode = () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      setDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      setDarkMode(true);
    }
  };

  return (
    <>
      <div className="portfolio-container">
        {/* Header */}
        <header className="header">
          <h1 className="logo">Refiloe Mokhothotso</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a
                  href="REFILOE MOKHOTHOTSO(updated).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Dark Mode Toggle Button */}
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>

        {/* Hero Section (Text Only) */}
        <section className="hero">
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Refiloe 👋
          </motion.h2>
          <p className="hero-subtitle">
            A Software Engineer specializing in Web and Mobile development,UX/UI design and AI enthusiast.
          </p>
        </section>

        {/* About Section with Profile Image (Square with Diagonal) */}
        <section id="about" className="about">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
              Experienced Software Engineer with a passion for building scalable, high-performance web and mobile applications. Skilled in JavaScript (React, Node.js, Angular, Vue), Python, PHP, Java, C#, and .NET, with expertise in cloud computing (Azure), DevOps, and UI/UX design (Figma).<br></br>

Proven ability to lead projects, optimize performance, and enhance user experiences while implementing secure and maintainable solutions. Passionate about problem-solving, innovation, and delivering high-quality, industry-standard code.<br></br>

Let’s build something amazing together!

              </p>
            </div>
            <div className="about-image-wrapper">
              <img
                src="/portfolioimage.jpg"
                alt="Refiloe Mokhothotso"
                className="about-image"
              />
            </div>
          </div>
        </section>

       {/* Skills Section */}
<section id="skills" className="skills">
  <h2 className="section-title">Skills</h2>
  <div className="skills-container">

    {/* Programming Languages */}
    <div className="skill-category">
      <h3 className="skill-category-title">Programming Languages</h3>
      <div className="skills-list">
        {["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"].map((skill, index) => (
          <motion.div key={index} className="skill-item" whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Technical Skills */}
    <div className="skill-category">
      <h3 className="skill-category-title">Frameworks and Tools</h3>
      <div className="skills-list">
        {["React.js", "Node.js", "Next.js", "Express.js","Angular",".NET" ,"Tailwind CSS", "Redux", "GraphQL"].map((skill, index) => (
          <motion.div key={index} className="skill-item" whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Tools & Platforms */}
    <div className="skill-category">
      <h3 className="skill-category-title">Tools & Platforms</h3>
      <div className="skills-list">
        {["Git", "Docker", "Jenkins", "Azure", "AWS", "Figma", "Postman","Kubernetes"].map((skill, index) => (
          <motion.div key={index} className="skill-item" whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>

    {/* Databases */}
    <div className="skill-category">
      <h3 className="skill-category-title">Databases</h3>
      <div className="skills-list">
        {["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis","Supabase"].map((skill, index) => (
          <motion.div key={index} className="skill-item" whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>

        {/* Projects Section */}
        <section id="projects" className="projects">
  <h2 className="section-title projects-title">Recent Projects</h2>
  <div className="projects-grid">
    {[
      {
        title: "Calmly",
        description: "A mental health chatbot using AI where a  user can sign up,confide and find solace in our Chatbot and then track the process.",
       
        link: "#"
      },
      {
        title: "My Repairs",
        description: "A self service platform where a user can request a service and the service provider will attend to those needs.",
        
        link: "#"
      },
      {
        title: "Fake Certificate Detector using CNN",
        description: "A machine learning model that uses Convolutional Neuron Network and Python libraries like Numpy,Sci-kit learn and others to detect whether a certificate is original or fake.",
       
        link: "#"
      }
    ].map((project, index) => (
      <motion.div
        key={index}
        className="project-card"
        whileHover={{ scale: 1.05 }}
      >
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a href={project.link} className="project-button">
          View Project
        </a>
      </motion.div>
    ))}
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-text">Let's collaborate! Feel free to reach out.</p>
          <a href="mailto:refiloemokhothotso@gmail.com" className="contact-button">
            Contact Me
          </a>
        </section>

        {/* Footer */}
        <footer className="footer">
          &copy; {new Date().getFullYear()} Refiloe Mokhothotso. All rights reserved.
        </footer>
      </div>

      {/* Custom CSS */}
      <style>{`
        /* Light mode variables */
        :root {
          --bg-color: #ffffff;
          --text-color: #111827;
          --header-bg: #f8f8f8;
          --nav-link-color: #333;
        }
          
          

        /* Base styles using variables */
        body {
          background: var(--bg-color);
          color: var(--text-color);
          font-family: 'Arial', sans-serif;
          scroll-behavior: smooth;
          transition: background 0.3s ease, color 0.3s ease;
          margin: 0;
          padding: 0;
        }

        .portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: var(--header-bg);
          border-radius: 10px;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          transition: background 0.3s ease;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          margin-left: 580px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--nav-link-color);
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .dark-mode-toggle {
          cursor: pointer;
          border: none;
          background: none;
          font-size: 1.5rem;
          color: var(--nav-link-color);
          transition: color 0.3s ease;
          margin-right: 40px;
        }

        .hero {
          text-align: center;
          padding: 150px 20px 100px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 10px;
        }

        .about,
        .skills,
        .projects,
        .contact {
          text-align: center;
          padding: 80px 20px;
      
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          color: #808080;
        }

        /* About Section Layout */
        .about-content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        .about-text {
          flex: 1 1 300px;
          padding: 20px;
          text-align: left;
          max-width: 600px;
        }

        .about-text p {
          font-size: 1.2rem;
          color: #bbb;
          line-height: 1.6;
        }

        /* Profile Image (Square with Gradient Border and Diagonal) */
        .about-image-wrapper {
          flex: 0 0 auto;
          width: 400px;
          height: 400px;
          margin: 0 auto;
          background: linear-gradient(45deg, #ff007f, #2563eb);
          padding: 5px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transform: rotate(-7deg);
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

       

          /* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.project-card {
  background: #1f2937;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 25px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.project-description {
  font-size: 1rem;
  color: #bbb;
  margin-top: 10px;
}

.project-button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
  width: 100px;
  margin-left: 90px;
 
}

.project-button:hover {
  background-color: #1e40af;
}

       
        .contact {
          background: #1f2937;
          border-radius: 10px;
          padding: 40px 20px;
        }

        .contact-text {
          font-size: 1.2rem;
          color: #bbb;
        }

        .contact-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background: #2563eb;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.3s ease-in-out;
        }

        .contact-button:hover {
          background: #1e40af;
        }

        .footer {
          text-align: center;
          padding: 20px;
          color: #aaa;
          margin-top: 40px;
        }

        /* Dark mode overrides */
        body.dark-mode {
          --bg-color: #111827;
          --text-color: #ffffff;
          --header-bg: rgba(0, 0, 0, 0.2);
          --nav-link-color: #bbb;
        }
          .skills-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
}

.skill-category {
  text-align: center;
}

.skill-category-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #808080;
}

.skills-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.skill-item {
  background: #1f2937;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}
          
      `}</style>
    </>
  );
};

export default Portfolio;