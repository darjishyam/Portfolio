
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import useAnalytics from '../../hooks/useAnalytics';
import './Portfolio.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { trackClick } = useAnalytics();
    const project = portfolioData.projects.find(p => p.id === parseInt(id));
    const [activeImage, setActiveImage] = useState(project?.image);

    useEffect(() => {
        if (project) {
            setActiveImage(project.image);
        }
    }, [project]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (project) {
            trackClick(project._id || project.id);
        }
    }, [project, trackClick]);

    if (!project) {
        return (
            <div className="portfolio-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Project Not Found</h2>
                    <button onClick={() => navigate('/')} className="btn-primary" style={{ marginTop: '1rem' }}>
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="portfolio-wrapper">
            <div className="portfolio-bg-pattern"></div>

            <div className="portfolio-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '1rem',
                        marginBottom: '2rem',
                        fontWeight: 600
                    }}
                >
                    <FaArrowLeft /> Back to Portfolio
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header Section */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
                            {project.title}
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '1.5rem' }}>
                            {project.description}
                        </p>
                        {project.summary && (
                            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)', background: 'rgba(99, 102, 241, 0.05)' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Detailed Summary</h4>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                                    {project.summary}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Main Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Left Column: Image and Links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <motion.img
                                key={activeImage}
                                src={activeImage}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    borderRadius: '20px',
                                    boxShadow: 'var(--shadow-lg)',
                                    objectFit: 'cover',
                                    aspectRatio: '16/9'
                                }}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                    <FaExternalLinkAlt /> 
                                    {project.links.demo.includes('youtube.com') || project.links.demo.includes('youtu.be') || project.links.demo.includes('drive.google.com') ? 'Watch Video Walkthrough' : 'Live Demo'}
                                </a>
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                    style={{
                                        padding: '1rem 2rem',
                                        borderRadius: '50px',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--bg-card)',
                                        color: 'var(--text-main)',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                    <FaGithub /> GitHub
                                </a>
                            </div>

                            {/* Gallery Section */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div style={{ marginTop: '2rem' }}>
                                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Screenshots</h4>
                                    <div className="project-gallery-grid">
                                        {project.gallery.map((img, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setActiveImage(img)}
                                                className={`gallery-thumbnail ${activeImage === img ? 'active' : ''}`}
                                            >
                                                <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Details */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            {/* Tech Stack */}
                            <div className="glass-panel" style={{ padding: '2rem' }}>
                                <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Technologies</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(79, 70, 229, 0.1)',
                                            color: 'var(--primary)',
                                            borderRadius: '50px',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features (if available) */}
                            {project.features && (
                                <div className="glass-panel" style={{ padding: '2rem' }}>
                                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Key Features</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {project.features.map((feature, index) => (
                                            <li key={index} style={{
                                                marginBottom: '1rem',
                                                display: 'flex',
                                                alignItems: 'start',
                                                gap: '0.8rem',
                                                color: 'var(--text-muted)'
                                            }}>
                                                <FaCheckCircle style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '4px' }} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
