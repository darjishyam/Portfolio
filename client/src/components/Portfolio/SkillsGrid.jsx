
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { portfolioData } from '../../data/portfolioData';
import './Portfolio.css';

const SkillsGrid = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const categoryVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80
            }
        }
    };

    return (
        <section className="section-full-width" style={{ background: 'var(--bg-secondary)' }}>
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            variants={categoryVariants}
                            style={{
                                fontSize: '3rem',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-heading)',
                                textAlign: 'center'
                            }}
                            className="gradient-text"
                        >
                            Tech Stack & Expertise
                        </motion.h2>

                        <motion.p
                            variants={categoryVariants}
                            style={{
                                textAlign: 'center',
                                marginBottom: '4rem',
                                color: 'var(--text-muted)',
                                maxWidth: '600px',
                                margin: '0 auto 4rem auto'
                            }}
                        >
                            Hover over a card to reveal proficiency.
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {portfolioData.skills.map((category, catIndex) => (
                                <motion.div key={catIndex} variants={categoryVariants}>
                                    <h3 style={{
                                        fontSize: '1.8rem',
                                        marginBottom: '1.5rem',
                                        color: 'var(--text-main)',
                                        borderLeft: '4px solid var(--primary)',
                                        paddingLeft: '1rem'
                                    }}>
                                        {category.category}
                                    </h3>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                        gap: '1.5rem'
                                    }}>
                                        {category.items.map((skill, index) => (
                                            <SkillCard key={index} skill={skill} />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsGrid;
