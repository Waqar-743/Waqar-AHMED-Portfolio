import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA } from '../../constants';

declare const Swiper: any;

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef(null);

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

  useEffect(() => {
    if (isVisible && swiperRef.current && typeof Swiper !== 'undefined') {
      const swiper = new Swiper(swiperRef.current, {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.1,
        spaceBetween: 16,
        grabCursor: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.testimonial-swiper .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.testimonial-swiper .swiper-button-next',
          prevEl: '.testimonial-swiper .swiper-button-prev',
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
          1280: {
            slidesPerView: 3,
            spaceBetween: 32,
          }
        },
      });
    }
  }, [isVisible]);

  return (
    <section id="testimonials" className="py-24 overflow-hidden" ref={sectionRef}>
      <h2 className={`flex items-center text-2xl font-bold text-light-text-primary dark:text-lightest-slate mb-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <span className="text-light-accent dark:text-brand-accent font-mono text-xl mr-3">04.</span>
        What People Say
        <span className="flex-grow h-px bg-light-border dark:bg-lightest-navy ml-4"></span>
      </h2>
      
      <div className={`relative transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '150ms' }}>
        <div ref={swiperRef} className="swiper testimonial-swiper">
          <div className="swiper-wrapper items-center py-4">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <div key={index} className="swiper-slide h-full">
                <div className="bg-light-card dark:bg-brand-card p-6 sm:p-8 rounded-lg shadow-lg h-full flex flex-col justify-center min-h-[300px] text-left border border-light-border dark:border-lightest-navy/40 transition-colors duration-300 hover:border-light-accent dark:hover:border-brand-accent">
                    <p className="text-light-text-secondary dark:text-slate italic mb-6 text-sm sm:text-base">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-4 border-2 border-light-accent/50 dark:border-brand-accent/50" />
                        <div>
                            <p className="font-bold text-light-text-primary dark:text-lightest-slate">{testimonial.name}</p>
                            <p className="font-mono text-xs sm:text-sm text-light-text-secondary dark:text-slate">{testimonial.title}, {testimonial.company}</p>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;