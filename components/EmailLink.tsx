import React from 'react';
import { EMAIL } from '../constants';

const EmailLink: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col fixed bottom-0 right-10 z-10 items-center">
      <a 
        href={`mailto:${EMAIL}`}
        className="font-mono text-sm tracking-widest text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300"
        style={{ writingMode: 'vertical-rl' }}
      >
        {EMAIL}
      </a>
      <div className="w-px h-24 bg-light-text-secondary dark:bg-lightest-navy mt-6"></div>
    </div>
  );
};

export default EmailLink;