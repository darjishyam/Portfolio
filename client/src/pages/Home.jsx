import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const API_URL = process.env.REACT_APP_API_URL || "https://portfolio-2tv3.onrender.com/api";

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects/featured`);
      setFeaturedProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer | MERN Stack Enthusiast</p>
        <p>Building amazing web applications with modern technologies</p>
      </section>

      <section className="section">
        <h2 className="section-title">About Me</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
          I'm a passionate full-stack developer specializing in the MERN stack
          (MongoDB, Express, React, Node.js). I love creating beautiful,
          functional, and user-friendly web applications. With a strong
          foundation in both frontend and backend development, I bring ideas to
          life through clean code and innovative solutions.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Projects</h2>
        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : featuredProjects.length > 0 ? (
          <div className="projects-grid">
            {featuredProjects.slice(0, 3).map((project) => (
              <div key={project._id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.liveUrl.includes('youtube.com') || project.liveUrl.includes('youtu.be') ? 'Watch Video' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No featured projects yet. Check back soon!</p>
        )}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/projects" className="btn">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JavaScript",
            "HTML/CSS",
            "Git",
            "RESTful APIs",
          ].map((skill) => (
            <span
              key={skill}
              className="tech-tag"
              style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
