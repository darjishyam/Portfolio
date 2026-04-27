import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import './Portfolio.css';

const Hobbies = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring", stiffness: 100
            }
        }
    };

    return (
        <section className="section-full-width" style={{ background: 'var(--bg-secondary)' }}>
            <div className="portfolio-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="gradient-text"
                        style={{
                            fontSize: '3rem',
                            marginBottom: '3rem',
                            textAlign: 'center'
                        }}
                    >
                        Hobbies & Interests
                    </motion.h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {portfolioData.hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    cursor: 'default',
                                    transition: 'transform 0.3s ease'
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                    {hobby.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                                    {hobby.name}
                                </h3>
                                <p style={{ color: 'var(--text-muted)' }}>
                                    {hobby.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hobbies;
