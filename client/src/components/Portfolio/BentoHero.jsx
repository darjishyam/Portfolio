import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaDownload, FaArrowRight, FaCode } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const BentoHero = () => {
    const { name, titles, description, socials } = portfolioData.hero;
    // Featured project (e.g., QuickBlog or ChefSync)
    const featuredProject = portfolioData.projects[0]; 
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="bento-section" id="hero">
            <div className="portfolio-container">
                <motion.div 
                    className="bento-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Card 1: Intro */}
                    <motion.div variants={cardVariants} className="bento-card bento-intro glass-panel">
                        <span className="bento-greeting">Hello World 👋</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, margin: '1rem 0', letterSpacing: '-2px' }}>
                            I'm {name}.
                        </h1>
                        <h2 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                            {titles[0]} & {titles[1]}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.1rem' }}>
                            {description}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="/resume(shyam).pdf" download="Darji_Shyam_Resume.pdf" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                <FaDownload /> Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Card 2: Profile & Status */}
                    <motion.div variants={cardVariants} className="bento-card bento-profile glass-panel">
                        <div className="bento-avatar-container">
                            <img src="/profile.jpg" alt={name} className="bento-avatar" onError={(e) => { e.target.src = "https://via.placeholder.com/300x300?text=DS" }} />
                            <div className="status-badge">
                                <span className="status-dot"></span> Open to work
                            </div>
                        </div>
                        <div className="bento-socials">
                            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href={socials.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                            <a href={socials.email} target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                        </div>
                    </motion.div>

                    {/* Card 3: Featured Project */}
                    <motion.div 
                        variants={cardVariants} 
                        className="bento-card bento-project glass-panel"
                        onClick={() => navigate(`/project/${featuredProject.id}`)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="bento-project-img-wrapper">
                            <img src={featuredProject.image} alt={featuredProject.title} />
                            <div className="bento-project-overlay">
                                <h3>Featured Work</h3>
                                <h2>{featuredProject.title}</h2>
                                <span className="bento-view-btn">View Project <FaArrowRight /></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Top Skills */}
                    <motion.div 
                        variants={cardVariants} 
                        className="bento-card bento-skills glass-panel"
                        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaCode className="bento-bg-icon" />
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>Tech Stack</h3>
                        <div className="bento-skill-tags">
                            {portfolioData.skills[0].items.slice(0, 3).map((skill, i) => (
                                <span key={i} className="bento-tag">{skill.icon} {skill.name}</span>
                            ))}
                            {portfolioData.skills[1].items.slice(0, 2).map((skill, i) => (
                                <span key={i + 3} className="bento-tag">{skill.icon} {skill.name}</span>
                            ))}
                            <span className="bento-tag more-tag">+ More</span>
                        </div>
                    </motion.div>

                    {/* Card 5: Contact CTA */}
                    <motion.div 
                        variants={cardVariants} 
                        className="bento-card bento-contact glass-panel"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Let's Talk!</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Have a project in mind?</p>
                        </div>
                        <div className="bento-contact-icon">
                            <FaArrowRight />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default BentoHero;
