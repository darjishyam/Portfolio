import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import './Portfolio.css';

const Experience = () => {
    return (
        <section className="experience-section" id="experience" style={{ padding: '6rem 0' }}>
            <div className="portfolio-container" style={{ width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0ea5e9' }}>
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                        Experience
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ 
                                background: '#111111', 
                                border: '1px solid #2d2d2d',
                                borderRadius: '12px',
                                padding: '2rem',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                            }}
                        >
                            {/* Header Row */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                                    {exp.role}
                                </h3>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    {exp.status === 'Present' ? (
                                        <span style={{ background: '#022c22', color: '#10b981', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>
                                            Present
                                        </span>
                                    ) : (
                                        <span style={{ background: '#022c22', color: '#10b981', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>
                                            Completed
                                        </span>
                                    )}
                                    <span style={{ background: '#262626', color: '#9ca3af', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.85rem' }}>
                                        {exp.duration}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Subtitle Row */}
                            <div style={{ color: '#0ea5e9', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem' }}>
                                {exp.company} • {exp.location}
                            </div>
                            
                            {/* Bullet Points */}
                            <ul style={{ paddingLeft: '1.2rem', color: '#9ca3af', lineHeight: 1.8, fontSize: '0.95rem', margin: '0 0 2rem 0' }}>
                                {exp.description.split('.').filter(item => item.trim() !== '').map((point, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{point.trim()}.</li>
                                ))}
                            </ul>

                            {/* Tech Stack Pills */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {exp.tech.map((t, i) => (
                                    <span key={i} style={{ 
                                        background: '#262626', 
                                        color: '#d1d5db', 
                                        padding: '0.4rem 1rem', 
                                        borderRadius: '6px', 
                                        fontSize: '0.8rem',
                                        border: 'none'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
