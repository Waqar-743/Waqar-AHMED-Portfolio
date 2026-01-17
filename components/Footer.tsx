import React from 'react';
import { SOCIAL_LINKS, GithubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, CodepenIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
      <div className="mb-4">
        {/* Light Mode Logo */}
        <img src="https://lh3.googleusercontent.com/d/15btE6Fh1v5NFdoZVkkj93dhttledsQUM" alt="Waqar Ahmed Logo" className="w-10 h-10 block dark:hidden mx-auto" />

        {/* Dark Mode Logo */}
        <img src="https://lh3.googleusercontent.com/d/1yGWm5jDY0Czxm7CPMj2mQLwCjDeZ0ibK" alt="Waqar Ahmed Logo" className="w-10 h-10 hidden dark:block mx-auto" />
      </div>

      <div className="lg:hidden flex justify-center space-x-6 mb-4">
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-black dark:text-slate hover:text-light-accent dark:hover:text-brand-accent"><GithubIcon /></a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-black dark:text-slate hover:text-light-accent dark:hover:text-brand-accent"><LinkedInIcon /></a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-black dark:text-slate hover:text-light-accent dark:hover:text-brand-accent"><TwitterIcon /></a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-black dark:text-slate hover:text-light-accent dark:hover:text-brand-accent"><InstagramIcon /></a>
        <a href={SOCIAL_LINKS.codepen} target="_blank" rel="noopener noreferrer" className="text-black dark:text-slate hover:text-light-accent dark:hover:text-brand-accent"><CodepenIcon /></a>
      </div>
      <p className="font-mono text-xs text-black dark:text-slate">
        Designed & Built by Waqar Ahmed
      </p>
    </footer>
  );
};

export default Footer;