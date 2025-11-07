import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '../ContactForm';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto" ref={sectionRef}>
       <p className={`font-mono text-light-accent dark:text-brand-accent mb-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '100ms' }}>05. What’s Next?</p>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-light-text-primary dark:text-lightest-slate mb-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '200ms' }}>Get In Touch</h2>
      <p className={`text-base md:text-lg mb-8 transition-all duration-500 ease-out text-light-text-secondary dark:text-slate ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '300ms' }}>
        I'm always excited to discuss new projects and opportunities. Fill out the form below, and I'll get back to you as soon as possible.
      </p>
      
      <div 
        className={`w-full mx-auto mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 
        style={{ transitionDelay: '400ms' }}
      >
        <ContactForm idPrefix="section-contact" />
      </div>
    </section>
  );
};

export default Contact;