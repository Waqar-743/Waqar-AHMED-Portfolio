import React, { useEffect } from 'react';
import ContactForm from './ContactForm';

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface HireMeModalProps {
  onClose: () => void;
}

const HireMeModal: React.FC<HireMeModalProps> = ({ onClose }) => {
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content !max-w-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close contact form">
            <CloseIcon />
        </button>
        <div className="bg-light-card dark:bg-brand-card rounded-lg shadow-2xl overflow-hidden w-full p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-light-text-primary dark:text-lightest-slate mb-2">Let's build something great!</h2>
            <p className="text-center text-light-text-secondary dark:text-slate mb-8">Fill out the form below to get in touch.</p>
            <ContactForm idPrefix="modal-contact" onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};

export default HireMeModal;