import React from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoice } from 'react-icons/fa';
import './Portfolio.css';

const Certificates = () => {
    const certificates = [
        {
            title: 'Internship Certificate — MERN Stack Intern',
            issuer: 'Bytesved Technology',
            date: '2026',
            description: 'Certificate of experience for the MERN Stack Internship program.',
            file: '/certificates/bytesved_certificate.pdf'
        },
        {
            title: 'Internship Completion Certificate',
            issuer: 'PROXENIX',
            date: 'September 2025',
            description: 'Certificate of successful completion of the Web Development Internship program.',
            file: '/certificates/internship_completion.pdf'
        },
        {
            title: 'Course Completion Certificate',
            issuer: '',
            date: 'September 2025',
            description: '',
            file: '/certificates/course_completion.pdf'
        }
    ];

    return (
        <section className="certificates-section" id="certificates" style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
            <div className="portfolio-container" style={{ width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', margin: 0, textAlign: 'left' }}>
                        Certifications
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ 
                                background: '#111111', 
                                border: '1px solid #1f2937',
                                borderRadius: '12px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '220px'
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
                                {cert.title}
                            </h3>
                            {cert.issuer && (
                                <div style={{ color: '#0ea5e9', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                    {cert.issuer}
                                </div>
                            )}
                            <div style={{ color: '#0ea5e9', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {cert.date}
                            </div>
                            {cert.description && (
                                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    {cert.description}
                                </p>
                            )}
                            
                            <div style={{ marginTop: 'auto', paddingTop: cert.description ? '0' : '1rem' }}>
                                <a 
                                    href={cert.file} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(14, 165, 233, 0.1)',
                                        color: '#0ea5e9',
                                        textDecoration: 'none',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        border: '1px solid rgba(14, 165, 233, 0.2)',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'rgba(14, 165, 233, 0.2)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                                    }}
                                >
                                    <FaFileInvoice /> View certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
