import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import EmailLink from './components/EmailLink';
import Loader from './components/Loader';
import { ThemeProvider } from './contexts/ThemeContext';
import HireMeModal from './components/HireMeModal';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // This effect ensures the body tag has the correct background color from the start
    document.body.classList.add('dark:bg-brand-dark');
  }, []);

  const MainContent = () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SocialLinks />
      <EmailLink />
      <Hero onHireMeClick={() => setIsHireMeModalOpen(true)} />
      <main id="content" className="flex-grow">
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  return (
    <ThemeProvider>
      {isLoading ? <Loader /> : <MainContent />}
      {isHireMeModalOpen && <HireMeModal onClose={() => setIsHireMeModalOpen(false)} />}
    </ThemeProvider>
  );
};

export default App;