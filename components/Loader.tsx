import React from 'react';
import Galaxy from './Galaxy/Galaxy';
import { useTheme } from '../contexts/ThemeContext';

const Loader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center h-screen bg-light-bg dark:bg-navy relative overflow-hidden">
      {/* Solar Blinking Background (Galaxy) - Only in Dark Mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 z-0 dark:opacity-60 pointer-events-none">
          <Galaxy
            density={1.8}
            glowIntensity={0.2}
            saturation={0.4}
            hueShift={50}
            twinkleIntensity={0.5}
            rotationSpeed={0.05}
            repulsionStrength={1}
            starSpeed={0.2}
            speed={0.1}
            mouseRepulsion={false}
          />
        </div>
      )}

      <div className="w-16 h-16 relative z-10">
        {/* Light mode loader */}
        <img src="https://lh3.googleusercontent.com/d/15btE6Fh1v5NFdoZVkkj93dhttledsQUM" alt="Waqar Ahmed Logo" className="w-16 h-16 animate-engaging-loader block dark:hidden" />

        {/* Dark mode loader */}
        <img src="https://lh3.googleusercontent.com/d/1yGWm5jDY0Czxm7CPMj2mQLwCjDeZ0ibK" alt="Waqar Ahmed Logo" className="w-16 h-16 animate-engaging-loader hidden dark:block" />
      </div>
    </div>
  );
};

export default Loader;
