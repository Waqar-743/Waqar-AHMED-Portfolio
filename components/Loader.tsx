import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-light-bg dark:bg-navy">
        <div className="w-16 h-16 relative">
            {/* Light mode loader */}
            <img src="https://lh3.googleusercontent.com/d/15btE6Fh1v5NFdoZVkkj93dhttledsQUM" alt="Waqar Ahmed Logo" className="w-16 h-16 animate-engaging-loader block dark:hidden" />
            
            {/* Dark mode loader */}
            <img src="https://lh3.googleusercontent.com/d/1yGWm5jDY0Czxm7CPMj2mQLwCjDeZ0ibK" alt="Waqar Ahmed Logo" className="w-16 h-16 animate-engaging-loader hidden dark:block" />
        </div>
    </div>
  );
};

export default Loader;