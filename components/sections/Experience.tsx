import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_TABS_DATA, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATE_DATA } from '../../constants';
import { PaletteIcon, ServerIcon, GraduationCapIcon, CertificateIcon } from '../../constants';
import type { Skill, Experience, Education, Certificate } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <div className="bg-light-card dark:bg-brand-card p-5 sm:p-6 rounded-lg border border-light-border dark:border-lightest-navy/40 hover:border-light-accent/50 dark:hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
            {skill.icon}
            <h3 className="text-xl font-bold text-black dark:text-lightest-slate">{skill.name}</h3>
            <p className="mt-2 text-zinc-900 dark:text-slate text-sm h-16">{skill.description}</p>
            <div className="mt-4">
                <div className="flex justify-end mb-1">
                    <span className="text-sm font-medium font-mono text-light-accent dark:text-brand-accent">{skill.score}%</span>
                </div>
                <div className="overflow-hidden h-2.5 text-xs flex rounded bg-light-border dark:bg-lightest-navy">
                    <motion.div
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-light-accent dark:bg-brand-accent rounded"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.score}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                    />
                </div>
            </div>
        </div>
    );
};

const SkillsSection: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_TABS_DATA.map(skill => <SkillCard key={skill.name} skill={skill} />)}
    </div>
);

const ExperienceSection: React.FC = () => (
    <div className="space-y-8">
        {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="bg-light-card dark:bg-brand-card p-5 sm:p-6 rounded-lg border border-light-border dark:border-lightest-navy/40 hover:border-light-accent/50 dark:hover:border-brand-accent/50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="text-xl font-bold text-black dark:text-lightest-slate">{exp.role}</h3>
                    <p className="text-sm text-zinc-900 dark:text-slate mt-1 sm:mt-0">{exp.duration}</p>
                </div>
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-light-slate">{exp.company}</h4>
                <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-900 dark:text-slate">
                    {exp.duties.map((duty, i) => <li key={i}>{duty}</li>)}
                </ul>
            </div>
        ))}
    </div>
);

const EducationSection: React.FC = () => (
    <div className="space-y-8">
        {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="bg-light-card dark:bg-brand-card p-5 sm:p-6 rounded-lg border border-light-border dark:border-lightest-navy/40 hover:border-light-accent/50 dark:hover:border-brand-accent/50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="text-xl font-bold text-black dark:text-lightest-slate">{edu.institution}</h3>
                    <p className="text-sm text-zinc-900 dark:text-slate mt-1 sm:mt-0">{edu.duration}</p>
                </div>
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-light-slate">{edu.degree}</h4>
                <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-900 dark:text-slate">
                    {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
            </div>
        ))}
    </div>
);

const CertificateSection: React.FC = () => (
    <div className="space-y-6">
        {CERTIFICATE_DATA.map((cert, index) => (
            <div key={index} className="bg-light-card dark:bg-brand-card p-5 sm:p-6 rounded-lg border border-light-border dark:border-lightest-navy/40 hover:border-light-accent/50 dark:hover:border-brand-accent/50 transition-all duration-300 flex flex-col">
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-light-text-primary dark:text-lightest-slate">{cert.name}</h3>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mt-1">
                        <p className="text-md text-light-text-secondary dark:text-light-slate">{cert.issuer}</p>
                        <p className="text-sm text-light-text-secondary dark:text-slate mt-1 sm:mt-0">{cert.date}</p>
                    </div>
                    {cert.credentialId && <p className="text-xs mt-2 text-light-text-secondary dark:text-slate/70">Credential ID: {cert.credentialId}</p>}
                </div>
                {cert.link && (
                    <div className="mt-4 self-end">
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-light-accent dark:text-brand-accent border border-light-accent dark:border-brand-accent rounded px-5 py-2 font-mono text-sm transform transition-all duration-300 ease-in-out hover:bg-light-accent/10 dark:hover:bg-brand-accent/10 hover:-translate-y-1 hover:shadow-lg"
                        >
                            Have a Look
                        </a>
                    </div>
                )}
            </div>
        ))}
    </div>
);

// --- GHOST CURSOR IMPLEMENTATION ---
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
};

const GhostCursor: React.FC = () => {
    const { x, y } = useMousePosition();
    const cursorSize = 40; // 20px radius

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full bg-brand-accent pointer-events-none mix-blend-screen"
            style={{
                width: cursorSize,
                height: cursorSize,
                opacity: 0.5,
                filter: 'blur(15px)',
                zIndex: 9999,
            }}
            animate={{
                x: x - cursorSize / 2,
                y: y - cursorSize / 2,
            }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
                mass: 0.5,
            }}
        />
    );
};
// --- END GHOST CURSOR IMPLEMENTATION ---


const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState('My Skill');
    const { theme } = useTheme();
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const tabs = [
        { name: 'My Skill', icon: <PaletteIcon className="w-5 h-5 mr-2 sm:mr-3" /> },
        { name: 'Experience', icon: <ServerIcon className="w-5 h-5 mr-2 sm:mr-3" /> },
        { name: 'Education', icon: <GraduationCapIcon className="w-5 h-5 mr-2 sm:mr-3" /> },
        { name: 'Certificate', icon: <CertificateIcon className="w-5 h-5 mr-2 sm:mr-3" /> }
    ];

    const contentMap: { [key: string]: React.ReactElement } = {
        'My Skill': <SkillsSection />,
        'Experience': <ExperienceSection />,
        'Education': <EducationSection />,
        'Certificate': <CertificateSection />
    };

    const contentAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3, ease: 'easeInOut' as const }
    };

    return (
        <section
            id="experience"
            className="py-24"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                {theme === 'dark' && isHovering && !isTouchDevice && <GhostCursor />}
                <h2 className="flex items-center text-2xl font-bold text-black dark:text-lightest-slate mb-12">
                    <span className="text-black dark:text-brand-accent font-mono text-xl mr-3">02.</span>
                    My Experience Journey
                    <span className="flex-grow h-px bg-zinc-300 dark:bg-lightest-navy ml-4"></span>
                </h2>

                <div className="flex flex-col gap-8">
                    {/* Horizontal Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 border-b border-light-border dark:border-lightest-navy/40 pb-5">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center py-3 px-4 rounded-md transition-colors duration-300 text-sm sm:text-base font-medium relative ${activeTab === tab.name
                                    ? 'text-light-accent dark:text-brand-accent'
                                    : 'text-light-text-secondary dark:text-slate hover:bg-light-accent/10 dark:hover:bg-brand-card'
                                    }`}
                            >
                                {tab.icon}
                                <span>{tab.name}</span>
                                {activeTab === tab.name && (
                                    <motion.div
                                        className="absolute bottom-[-21px] left-0 right-0 h-0.5 bg-light-accent dark:bg-brand-accent"
                                        layoutId="underline"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={contentAnimation}
                            >
                                {contentMap[activeTab]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;