// app/components/Header.tsx
import React from 'react';
import Link from 'next/link'; // Import the Link component

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-background/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Use Link for internal navigation */}
        <Link href="/" className="text-accent font-mono text-xl font-bold hover:text-white transition-colors">M.O.M</Link>
        <div className="flex items-center space-x-6">
          {/* Use Link for on-page anchor links */}
          <Link href="#projects" className="text-primary hover:text-accent transition-colors">Projects</Link>
          <Link href="#experience" className="text-primary hover:text-accent transition-colors">Experience</Link>
          <Link href="#contact" className="text-primary hover:text-accent transition-colors">Contact</Link>
          {/* Keep <a> for external links */}
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
