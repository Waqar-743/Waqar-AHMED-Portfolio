import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../../constants';

const About: React.FC = () => {
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
    <section id="about" className="py-24" ref={sectionRef}>
      <h2 className={`flex items-center text-2xl font-bold text-light-text-primary dark:text-lightest-slate mb-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <span className="text-light-accent dark:text-brand-accent font-mono text-xl mr-3">01.</span>
        About Me
        <span className="flex-grow h-px bg-light-border dark:bg-lightest-navy ml-4"></span>
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '150ms' }}>
        <div className="md:col-span-3 space-y-4 text-base md:text-lg text-light-text-secondary dark:text-slate">
          <p>
            I'm a Web Designer and Developer with over 2 years of experience. I've collaborated with local clients to build diverse projects—including portfolio sites, service pages, landing pages, business sites, and ecommerce platforms—ensuring a perfect blend of design aesthetics and functionality.
          </p>
          <p>
            My passion lies in creating easy-to-use websites that are not only visually appealing but also fast, responsive, and optimized for search engines. I enjoy bringing a client's vision to life, from the initial concept to the final, polished product.
          </p>
           <p>
            Currently, I am pursuing a Bachelor's degree in Artificial Intelligence at the National University of Technology (Nutech), which complements my practical web development skills with a strong foundation in computer science.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 sm:gap-4 mt-4">
            {SKILLS.map(skill => (
                <div key={skill} className="bg-light-card dark:bg-brand-card border border-light-border dark:border-lightest-navy/40 text-light-text-secondary dark:text-light-slate font-mono text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-md shadow-sm transition-all duration-300 hover:shadow-md hover:border-light-accent dark:hover:border-brand-accent hover:text-light-accent dark:hover:text-brand-accent hover:-translate-y-0.5 cursor-default">
                    {skill}
                </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 relative w-full max-w-sm mx-auto md:mx-0 aspect-square group">
          <div className="absolute inset-x-0 top-0 bottom-4 group-hover:bottom-2 bg-light-accent dark:bg-brand-accent rounded-lg transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/10FnGVPpJ3Gopsh5hqHRxtaap9fmxbAw3"
              alt="Waqar Ahmed" 
              className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
             <div className="absolute inset-0 bg-light-accent/30 dark:bg-brand-accent/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;