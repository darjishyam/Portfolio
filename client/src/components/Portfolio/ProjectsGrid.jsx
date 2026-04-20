
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../../data/portfolioData';
import './Portfolio.css';

const ProjectsGrid = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    console.log("Projects loaded:", portfolioData.projects);

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section className="section-full-width">
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={itemVariants}
                            style={{
                                fontSize: '3rem',
                                marginBottom: '3rem',
                                fontFamily: 'var(--font-heading)',
                                textAlign: 'center'
                            }}
                            className="gradient-text"
                        >
                            Featured Projects
                        </motion.h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {portfolioData.projects.map((project) => (
                                <motion.div key={project.id} variants={itemVariants} style={{ height: '100%', position: 'relative' }}>
                                    {project.id === 5 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-15px',
                                            right: '10px',
                                            zIndex: 50,
                                            background: 'var(--secondary)',
                                            color: 'white',
                                            padding: '0.4rem 1.2rem',
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            fontWeight: 800,
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            boxShadow: '0 10px 20px rgba(244, 63, 94, 0.3)',
                                            animation: 'float 3s infinite ease-in-out'
                                        }}>
                                            Flagship Ecosystem
                                        </div>
                                    )}
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
