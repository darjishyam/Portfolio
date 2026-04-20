
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import Typewriter from 'typewriter-effect';
import ParticleBackground from './ParticleBackground';
import './Portfolio.css';

const Hero = () => {
    const { name, titles, description } = portfolioData.hero;
    const sectionRef = useRef(null);

    // Mouse tracking for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });



    // Layer 2 - medium (text content) — middle depth
    const textX = useTransform(springX, [-1, 1], ['-10px', '10px']);
    const textY = useTransform(springY, [-1, 1], ['-10px', '10px']);

    // Layer 3 - fastest (profile photo) — feels "closest" / floating in front
    const profileX = useTransform(springX, [-1, 1], ['15px', '-15px']);
    const profileY = useTransform(springY, [-1, 1], ['15px', '-15px']);

    // 3D tilt for the whole hero card
    const rotateX = useTransform(springY, [-1, 1], [6, -6]);
    const rotateY = useTransform(springX, [-1, 1], [-6, 6]);

    const handleMouseMove = (e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        // Normalize from -1 to 1
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.5 }
        }
    };

    const childVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        }
    };

    return (
        <section
            className="hero-section"
            id="hero"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1200px' }}
        >
            {/* Neural Network Particle Background */}
            <ParticleBackground />

            <div className="portfolio-container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '4rem', flexWrap: 'wrap' }}>

                    {/* Text Content — Layer 2 (middle) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ zIndex: 1, flex: 1, x: textX, y: textY }}
                    >
                        <motion.p
                            variants={childVariants}
                            style={{
                                color: 'var(--primary)',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                background: 'rgba(79, 70, 229, 0.1)',
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                borderRadius: '50px',
                                fontSize: '0.9rem'
                            }}
                        >
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            variants={childVariants}
                            style={{
                                fontSize: 'clamp(4rem, 10vw, 7.5rem)',
                                fontWeight: 800,
                                lineHeight: 0.9,
                                marginBottom: '1.5rem',
                                color: 'var(--text-main)',
                                letterSpacing: '-4px'
                            }}
                        >
                            {name}.
                        </motion.h1>

                        <motion.div
                            variants={childVariants}
                            className="gradient-text"
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                fontWeight: 700,
                                marginBottom: '2rem',
                                minHeight: '1.2em',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Typewriter
                                options={{
                                    strings: titles,
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "gradient-text",
                                    cursorClassName: "typewriter-cursor"
                                }}
                            />
                        </motion.div>

                        <motion.p
                            variants={childVariants}
                            style={{
                                fontSize: '1.4rem',
                                maxWidth: '700px',
                                color: 'var(--text-muted)',
                                marginBottom: '3.5rem',
                                lineHeight: 1.6
                            }}
                        >
                            {description}
                        </motion.p>

                        <motion.div variants={childVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.button
                                className="btn-primary"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.05, x: 5, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Check out my work
                            </motion.button>
                            <motion.a
                                href="/resume.pdf"
                                download="Darji_Shyam_Resume.pdf"
                                className="glass-panel"
                                whileHover={{ scale: 1.05, y: -5, background: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    color: 'var(--text-main)',
                                    background: 'var(--bg-card)',
                                    borderRadius: '50px',
                                    border: '1px solid var(--border-color)',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <FaDownload /> Resume
                            </motion.a>
                            <motion.button
                                className="glass-panel"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.05, x: -5, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    color: 'var(--text-main)',
                                    background: 'var(--bg-card)',
                                    borderRadius: '50px',
                                    border: '1px solid var(--border-color)',
                                    transition: 'all 0.3s'
                                }}
                            >
                                Let's Talk
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Profile — Layer 3 (closest, moves most) with 3D tilt */}
                    <motion.div
                        className="profile-orbit-wrapper"
                        style={{
                            x: profileX,
                            y: profileY,
                            rotateX,
                            rotateY,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <div className="profile-main-circle">
                            <div className="profile-image-container">
                                <img
                                    src="/profile.jpg"
                                    alt="Darji Shyam"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/500x500?text=DS";
                                        e.target.style.opacity = '0.5';
                                    }}
                                />
                            </div>
                            <div className="orbit-ring-line"></div>

                            {/* Social Icons */}
                            <div className="orbit-socials">
                                <a href={portfolioData.hero.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="orbit-icon whatsapp">
                                    <FaWhatsapp />
                                </a>
                                <a href={portfolioData.hero.socials.email} target="_blank" rel="noopener noreferrer" className="orbit-icon email">
                                    <FaEnvelope />
                                </a>
                                <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noopener noreferrer" className="orbit-icon linkedin">
                                    <FaLinkedin />
                                </a>
                                <a href={portfolioData.hero.socials.github} target="_blank" rel="noopener noreferrer" className="orbit-icon github">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating accent blob */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    right: '10%',
                    top: '20%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, var(--secondary), transparent)',
                    filter: 'blur(40px)',
                    opacity: 0.3,
                    zIndex: 0
                }}
            />
        </section>
    );
};

export default Hero;
