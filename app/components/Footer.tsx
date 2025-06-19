// app/components/Footer.tsx
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
const Footer = () => (
  <footer className="py-8 text-center text-secondary font-mono text-sm">
    <div className="flex justify-center items-center space-x-6 mb-4">
      <a href="https://github.com/Mohamed-squared" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FiGithub size={22} /></a>
      <a href="https://linkedin.com/in/muhammed-osama-muammed-ahmed" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FiLinkedin size={22} /></a>
      <a href="mailto:muhammedoelderwy@gmail.com" className="hover:text-accent transition-colors"><FiMail size={22} /></a>
    </div>
    <p>Designed & Built by Mohamed Mohamed</p>
    <p className="mt-1">Press the backtick key (`) for a surprise.</p>
  </footer>
);
export default Footer;
