import React from 'react';
import { SOCIAL_LINKS, GithubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, CodepenIcon } from '../constants';

const SocialLinks: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col fixed bottom-0 left-10 z-10 items-center">
      <ul className="flex flex-col items-center space-y-6">
        <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300"><GithubIcon /></a></li>
        <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300"><LinkedInIcon /></a></li>
        <li><a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300"><TwitterIcon /></a></li>
        <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300"><InstagramIcon /></a></li>
        <li><a href={SOCIAL_LINKS.codepen} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-slate hover:text-light-accent dark:hover:text-brand-accent transform hover:-translate-y-1 transition-all duration-300"><CodepenIcon /></a></li>
      </ul>
      <div className="w-px h-24 bg-light-text-secondary dark:bg-lightest-navy mt-6"></div>
    </div>
  );
};

export default SocialLinks;