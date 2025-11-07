import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, GithubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, CodepenIcon } from '../../constants';

interface HeroProps {
  onHireMeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHireMeClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Apply a subtle parallax effect by moving the background at a slower rate than the scroll
      setParallaxOffset(window.scrollY * 0.4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIcons = [
    { href: SOCIAL_LINKS.github, icon: <GithubIcon /> },
    { href: SOCIAL_LINKS.linkedin, icon: <LinkedInIcon /> },
    { href: SOCIAL_LINKS.twitter, icon: <TwitterIcon /> },
    { href: SOCIAL_LINKS.instagram, icon: <InstagramIcon /> },
    { href: SOCIAL_LINKS.codepen, icon: <CodepenIcon /> },
  ];
  
  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('projects');
    if (targetElement) {
        const headerOffset = 100; // from scroll-padding-top in index.html
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if (history.replaceState) {
            history.replaceState(null, '', '#projects');
        } else {
            window.location.hash = '#projects';
        }
    }
  };


  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center text-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.0.3')",
        backgroundPositionY: `${parallaxOffset}px`,
        willChange: 'background-position',
      }}
    >
      <div className="absolute inset-0 bg-light-bg/60 dark:bg-navy/80"></div>
      
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10">
        <div>
          <p 
            className={`text-light-accent dark:text-brand-accent font-mono text-md mb-4 transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 
            style={{ transitionDelay: '100ms' }}
          >
            I Am
          </p>
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-text-primary dark:text-lightest-slate transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '200ms' }}
          >
            WAQAR AHMED.
          </h1>
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-light-text-secondary dark:text-slate mt-2 max-w-3xl mx-auto transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: '400ms' }}
          >
            AI-Powered WordPress Website Designer & Freelancer
          </h2>
          <p 
            className={`mt-6 max-w-xl lg:max-w-2xl text-base sm:text-lg transition-all duration-500 ease-out mx-auto ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '600ms' }}
          >
            I design responsive, results-driven websites that attract the right audience, build credibility, and help your brand stand out
          </p>

          <div 
            className={`flex items-center justify-center space-x-6 mt-8 transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '700ms' }}
          >
            {socialIcons.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>

          <div 
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <button onClick={onHireMeClick} className="w-full sm:w-auto inline-block bg-light-accent dark:bg-brand-accent text-light-bg dark:text-navy rounded px-8 py-3 font-mono text-sm hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-0.5">
              Hire Me
            </button>
            <a href="#projects" onClick={handlePortfolioClick} className="w-full sm:w-auto inline-block text-light-accent dark:text-brand-accent border border-light-accent dark:border-brand-accent rounded px-8 py-3 font-mono text-sm hover:bg-light-accent/10 dark:hover:bg-brand-accent/10 transition-colors duration-300">
              See Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;