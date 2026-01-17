import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_DATA, GithubIcon, ExternalLinkIcon } from '../../constants';
import type { Project } from '../../types';

declare const Swiper: any;

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const ProjectDetailModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    if (isPaused || project.images.length <= 1) return;
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [isPaused, project.images.length]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close project details">
          <CloseIcon />
        </button>
        <div className="bg-light-card dark:bg-brand-card rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row w-full h-full">
          <div
            className="relative md:w-1/2 overflow-hidden group/slider bg-light-border dark:bg-lightest-navy"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} - view ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${i === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                width="700"
                height="450"
              />
            ))}
            {project.images.length > 1 && (
              <>
                <div className="absolute inset-0 z-20 flex items-center justify-between opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                  <button onClick={prevImage} className="p-2 bg-light-card/50 dark:bg-navy/50 text-light-text-primary dark:text-lightest-slate hover:bg-light-card/80 dark:hover:bg-navy" aria-label="Previous image"><ChevronLeftIcon /></button>
                  <button onClick={nextImage} className="p-2 bg-light-card/50 dark:bg-navy/50 text-light-text-primary dark:text-lightest-slate hover:bg-light-card/80 dark:hover:bg-navy" aria-label="Next image"><ChevronRightIcon /></button>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                  {project.images.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }} className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentImage === i ? 'bg-light-accent dark:bg-brand-accent' : 'bg-light-border dark:bg-slate'}`} aria-label={`Go to image ${i + 1}`}></button>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="md:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col overflow-y-auto">
            <h3 className="text-2xl font-bold text-light-text-primary dark:text-lightest-slate mb-3">{project.title}</h3>
            <p className="text-light-text-secondary dark:text-slate mb-4 flex-grow">{project.description}</p>
            <ul className="flex flex-wrap font-mono text-xs text-light-text-secondary dark:text-slate gap-x-3 gap-y-1 my-4">
              {project.tags.map((tag) => (
                <li key={tag} className="bg-light-border dark:bg-lightest-navy/50 px-2 py-1 rounded">{tag}</li>
              ))}
            </ul>
            <div className="flex items-center mt-auto pt-4 gap-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-light-text-primary dark:text-lightest-slate hover:text-light-accent dark:hover:text-brand-accent transition-colors duration-300"><GithubIcon /> <span className="hidden sm:inline">GitHub</span></a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-light-text-primary dark:text-lightest-slate hover:text-light-accent dark:hover:text-brand-accent transition-colors duration-300"><ExternalLinkIcon /> <span className="hidden sm:inline">Live Site</span></a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProjectCard: React.FC<{ project: Project; onOpen: () => void }> = ({ project, onOpen }) => {
  return (
    <div
      className="relative rounded-lg shadow-lg h-[600px] overflow-hidden group cursor-pointer border border-transparent dark:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-light-accent dark:hover:border-brand-accent"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-[8000ms] ease-linear group-hover:object-bottom group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>

      <div className="relative p-6 flex flex-col h-full justify-end">
        <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
          {project.title}
        </h3>
        <div className="mt-2">
          <span className="inline-block font-mono text-sm text-brand-accent border border-brand-accent rounded-full px-4 py-1.5 group-hover:bg-brand-accent/10 transition-colors duration-300">
            See Detail
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.unobserve(title);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(title);

    return () => {
      if (title) {
        observer.unobserve(title);
      }
    };
  }, []);

  useEffect(() => {
    if (isTitleVisible && swiperRef.current && typeof Swiper !== 'undefined') {
      const swiper = new Swiper(swiperRef.current, {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 16,
        grabCursor: true,
        autoplay: {
          delay: 15000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.project-swiper .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.project-swiper .swiper-button-next',
          prevEl: '.project-swiper .swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
        },
      });
    }
  }, [isTitleVisible]);

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <h2
          ref={titleRef}
          className={`flex items-center text-2xl font-bold text-black dark:text-lightest-slate mb-8 transition-all duration-500 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          <span className="text-black dark:text-brand-accent font-mono text-xl mr-3">03.</span>
          Some Things I’ve Built
          <span className="flex-grow h-px bg-zinc-300 dark:bg-lightest-navy ml-4"></span>
        </h2>

        <div
          className={`relative transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          style={{ transitionDelay: '150ms' }}
        >
          <div ref={swiperRef} className="swiper project-swiper">
            <div className="swiper-wrapper items-stretch py-4">
              {PROJECTS_DATA.map((project) => (
                <div key={project.title} className="swiper-slide h-auto">
                  <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;