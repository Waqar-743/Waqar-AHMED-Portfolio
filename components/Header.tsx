import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Handle header shrink on scroll
      setIsScrolled(window.scrollY > 50);

      // Handle active section highlighting
      const sections = NAV_LINKS.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean);
      const scrollY = window.scrollY;
      
      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Offset for fixed header
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = `#${section.id}`;
        }
      });
      
      // Check if user is at the bottom of the page to highlight contact
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
        currentSectionId = '#contact';
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active section on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 100; // from scroll-padding-top in index.html
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without page jump
      if (history.replaceState) {
        history.replaceState(null, '', href);
      } else {
        window.location.hash = href;
      }
    }
    
    if (isMenuOpen) {
      closeMenu();
    }
  };

  const Logo = () => (
    <a href="/" className="z-50">
        {/* Light Mode Logo */}
        <img src="https://lh3.googleusercontent.com/d/15btE6Fh1v5NFdoZVkkj93dhttledsQUM" alt="Waqar Ahmed Logo" className="w-10 h-10 block dark:hidden" />
        
        {/* Dark Mode Logo */}
        <img src="https://lh3.googleusercontent.com/d/1yGWm5jDY0Czxm7CPMj2mQLwCjDeZ0ibK" alt="Waqar Ahmed Logo" className="w-10 h-10 hidden dark:block" />
    </a>
  );
  
  return (
    <>
      <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-light-card/80 dark:bg-navy/80 shadow-lg backdrop-blur-sm h-16' : 'h-20'}`}>
        <div className="container mx-auto flex md:grid md:grid-cols-3 items-center justify-between h-full px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="md:justify-self-start">
            <Logo />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 justify-self-center">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-mono transition-colors duration-300 ${activeSection === link.href ? 'text-light-accent dark:text-brand-accent' : 'text-light-text-primary dark:text-lightest-slate hover:text-light-accent dark:hover:text-brand-accent'}`}
              >
                <span className="text-light-accent dark:text-brand-accent">0{index + 1}.</span> {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 md:justify-self-end">
            <a href="https://drive.google.com/file/d/1aULQ7wnjMexA0SQtNuF0pPEF21RUa9si/view?usp=sharing" target={isDesktop ? '_blank' : '_self'} rel="noopener noreferrer" className="hidden md:block text-base font-mono text-light-accent dark:text-brand-accent border border-light-accent dark:border-brand-accent rounded px-4 py-2 hover:bg-light-accent/10 dark:hover:bg-brand-accent/10 transition-colors duration-300">
              Resume
            </a>
            <ThemeToggle />
            <div className="md:hidden">
              <button onClick={toggleMenu} className="z-50 relative w-8 h-6 flex flex-col justify-between" aria-label="Menu">
                <span className={`block w-full h-0.5 bg-light-accent dark:bg-brand-accent transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-[11px]' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-light-accent dark:bg-brand-accent transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-light-accent dark:bg-brand-accent transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-[11px]' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        <aside className={`fixed top-0 right-0 h-screen w-3/4 bg-light-card dark:bg-brand-card shadow-xl p-10 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-mono transition-colors duration-300 ${activeSection === link.href ? 'text-light-accent dark:text-brand-accent' : 'text-light-text-primary dark:text-lightest-slate hover:text-light-accent dark:hover:text-brand-accent'}`}
              >
                <span className="text-light-accent dark:text-brand-accent">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1aULQ7wnjMexA0SQtNuF0pPEF21RUa9si/view?usp=sharing" target={isDesktop ? '_blank' : '_self'} rel="noopener noreferrer" className="text-lg font-mono text-light-accent dark:text-brand-accent border border-light-accent dark:border-brand-accent rounded px-8 py-4 hover:bg-light-accent/10 dark:hover:bg-brand-accent/10 transition-colors duration-300 mt-8">
              Resume
            </a>
          </nav>
        </aside>
        {isMenuOpen && <div onClick={closeMenu} className="fixed inset-0 bg-navy/50 z-30 md:hidden"></div>}
      </header>
    </>
  );
};

export default Header;