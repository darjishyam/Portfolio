
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
    const tagsZ = useTransform(springY, [0, 1], ['translateZ(0px)', 'translateZ(35px)']);
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

    const handleCardClick = () => {
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
                    transition: 'transform 0.3s ease'
                }}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </motion.div>

            {/* Title */}
            <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-main)'
            }}>
                {project.title}
            </h3>

            {/* Description */}
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                {project.description}
            </p>

            {/* Tags — Z layer 2 (float forward more) */}
            <motion.div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    transform: tagsZ,
                    transition: 'transform 0.3s ease'
                }}
            >
                {project.tags.map((tag, index) => (
                    <motion.span
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        style={{
                            fontSize: '0.8rem',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            background: 'rgba(99, 102, 241, 0.12)',
                            color: 'var(--primary)',
                            border: '1px solid rgba(99, 102, 241, 0.25)',
                            cursor: 'default'
                        }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </motion.div>

            {/* Icons — Z layer 3 (float farthest forward, like holograms) */}
            <motion.div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: 'auto',
                    transform: iconsZ,
                    transition: 'transform 0.3s ease'
                }}
            >
                <motion.a
                    href={project.links.github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, color: 'var(--primary)', y: -4 }}
                    style={{ color: 'var(--text-main)', fontSize: '1.6rem', transition: 'color 0.3s' }}
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    href={project.links.demo}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, color: 'var(--secondary)', y: -4 }}
                    style={{ color: 'var(--text-main)', fontSize: '1.6rem', transition: 'color 0.3s' }}
                >
                    <FaExternalLinkAlt />
                </motion.a>
                <motion.div
                    style={{
                        marginLeft: 'auto',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        background: 'var(--gradient-main)',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        opacity: 0,
                        transform: 'translateX(20px)',
                        transition: 'all 0.3s ease'
                    }}
                    className="view-details-pill"
                >
                    View Project Details
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
