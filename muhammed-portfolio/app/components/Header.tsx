// app/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-background/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="/" className="text-accent font-mono text-xl font-bold hover:text-white transition-colors">M.O.M</a>
        <div className="flex items-center space-x-6">
          <a href="#projects" className="text-primary hover:text-accent transition-colors">Projects</a>
          <a href="#experience" className="text-primary hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="text-primary hover:text-accent transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/muhammed-osama-muammed-ahmed" target="_blank" rel="noopener noreferrer" className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
