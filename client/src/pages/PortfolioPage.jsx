
import React, { useEffect } from 'react';
import PortfolioNavbar from '../components/Portfolio/PortfolioNavbar';
import Hero from '../components/Portfolio/Hero';
import ProjectsGrid from '../components/Portfolio/ProjectsGrid';
import SkillsGrid from '../components/Portfolio/SkillsGrid';
import Hobbies from '../components/Portfolio/Hobbies';
import ContactSection from '../components/Portfolio/ContactSection';

const PortfolioPage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-wrapper">
            <div className="portfolio-bg-pattern">
                <div className="mesh-blob blob-1"></div>
                <div className="mesh-blob blob-2"></div>
                <div className="mesh-blob blob-3"></div>
            </div>
            <PortfolioNavbar />
            <Hero />
            <div id="skills"><SkillsGrid /></div>
            <div id="projects"><ProjectsGrid /></div>
            <div id="hobbies"><Hobbies /></div>
            <div id="contact" style={{ paddingTop: '4rem', background: 'var(--bg-light)' }}>
                <ContactSection />
                <footer style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: 'var(--text-muted)',
                    borderTop: '1px solid var(--border-color)'
                }}>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Darji Shyam. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default PortfolioPage;
