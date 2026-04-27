
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const cardRef = useRef(null);

    // Mouse motion values for 3D tilt
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

    // Card tilt
    const rotateX = useTransform(springY, [0, 1], [12, -12]);
    const rotateY = useTransform(springX, [0, 1], [-12, 12]);

    // Shimmer highlight position
    const shimmerX = useTransform(springX, [0, 1], ['0%', '100%']);
    const shimmerY = useTransform(springY, [0, 1], ['0%', '100%']);

    // Pop-out Z layers
    const imageZ = useTransform(springY, [0, 1], ['translateZ(0px)', 'translateZ(20px)']);
    const iconsZ = useTransform(springY, [0, 1], ['translateZ(0px)', 'translateZ(50px)']);

    const handleMouseMove = (e) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const handleCardClick = (e) => {
        // If the click happened on a link or button, don't navigate
        if (e.target.closest('a') || e.target.closest('button')) {
            return;
        }
        navigate(`/project/${project.id}`);
    };

    return (
        <motion.div
            ref={cardRef}
            className="glass-panel"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
            }}
        >
            {/* Shimmer / glare overlay */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    background: `radial-gradient(circle at ${shimmerX} ${shimmerY}, rgba(255,255,255,0.12) 0%, transparent 60%)`,
                    pointerEvents: 'none',
                    zIndex: 10,
                }}
            />

            {/* Image — Z layer 1 */}
            <motion.div
                style={{
                    marginBottom: '1.5rem',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transform: imageZ,
                    transition: 'transform 0.3s ease',
                    background: 'rgba(255,255,255,0.02)',
                    height: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '8px'
                    }}
                />
            </motion.div>

            {/* Title */}
            <h3 style={{
                fontSize: '1.6rem',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-main)',
                fontWeight: 700
            }}>
                {project.title}
            </h3>

            {/* Description */}
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.5, fontSize: '0.95rem' }}>
                {project.description}
            </p>

            {/* Action Buttons — High Impact Mockup Style */}
            <motion.div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    marginTop: 'auto',
                    flexWrap: 'wrap',
                    transform: iconsZ,
                    transition: 'transform 0.3s ease'
                }}
            >
                {/* Watch Video Button */}
                <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        flex: '1.5',
                        minWidth: '200px',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 10px 20px -10px rgba(236, 72, 153, 0.5)'
                    }}
                >
                    <FaExternalLinkAlt style={{ fontSize: '1rem' }} />
                    Watch Video Walkthrough
                </motion.a>

                {/* GitHub Pill */}
                <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05, y: -2, background: 'rgba(255,255,255,1)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        flex: '0.8',
                        padding: '0.8rem 1.2rem',
                        borderRadius: '50px',
                        background: 'rgba(255,255,255,0.9)',
                        color: '#000',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <FaGithub style={{ fontSize: '1.1rem' }} />
                    GitHub
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
