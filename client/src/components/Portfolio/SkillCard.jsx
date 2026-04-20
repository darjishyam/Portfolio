
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const SkillCard = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipVariants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 }
    };

    return (
        <motion.div
            style={{
                perspective: '1200px',
                width: '100%',
                height: '150px',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                }}
                variants={flipVariants}
                initial="front"
                animate={isFlipped ? "back" : "front"}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* Front Face */}
                <div
                    className="glass-panel"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        borderRadius: '16px',
                        border: `1px solid ${skill.color}40`,
                        boxShadow: `0 4px 30px ${skill.color}20`
                    }}
                >
                    <div style={{ fontSize: '3rem', color: skill.color }}>
                        {skill.icon}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{skill.name}</h3>
                </div>

                {/* Back Face */}
                <div
                    className="glass-panel"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        borderRadius: '16px',
                        background: 'rgba(10, 10, 10, 0.8)',
                        border: `1px solid ${skill.color}`
                    }}
                >
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: skill.color }}>Proficiency</h3>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        textShadow: `0 0 20px ${skill.color}`
                    }}>
                        {skill.percentage}%
                    </div>

                    {/* Progress Bar */}
                    <div style={{
                        width: '80%',
                        height: '4px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '2px',
                        marginTop: '0.5rem',
                        overflow: 'hidden'
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: isFlipped ? `${skill.percentage}%` : 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{
                                height: '100%',
                                background: skill.color,
                                boxShadow: `0 0 10px ${skill.color}`
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillCard;
