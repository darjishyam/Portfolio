
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Portfolio.css';

const PortfolioNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Handle Scroll for Navbar styling and Active Section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic
            const sections = ['hero', 'skills', 'projects', 'hobbies', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Theme Toggle
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const navLinks = [
        { title: 'Home', href: '#hero', id: 'hero' },
        { title: 'Skills', href: '#skills', id: 'skills' },
        { title: 'Projects', href: '#projects', id: 'projects' },
        { title: 'Hobbies', href: '#hobbies', id: 'hobbies' },
        { title: 'Contact', href: '#contact', id: 'contact' }
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`portfolio-navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
            }}
        >
            <div className="portfolio-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-main)',
                        textDecoration: 'none',
                        letterSpacing: '-1px'
                    }}
                >
                    DS.
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{
                                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-main)',
                                textDecoration: 'none',
                                fontWeight: activeSection === link.id ? 700 : 500,
                                fontSize: '1rem',
                                position: 'relative',
                                transition: 'color 0.3s ease'
                            }}
                            className="nav-link"
                        >
                            {link.title}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-5px',
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'var(--gradient-main)',
                                        borderRadius: '2px'
                                    }}
                                />
                            )}
                        </a>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            color: 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            transition: 'background 0.3s ease'
                        }}
                        className="theme-toggle"
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default PortfolioNavbar;
