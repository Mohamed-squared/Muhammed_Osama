// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next' // Kept as per previous step
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { // Kept as per previous step
  title: 'Muhammed Osama Muhammed | Mechanical Engineer',
  description: 'Portfolio of Muhammed Osama Muhammed, a Mechanical Engineering student with expertise in CAD, automation, and web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Toggling function is simplified as direct state update is clear
  // const toggleTerminal = () => {
  //   setIsTerminalOpen(prev => !prev);
  // };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '`') {
        setIsTerminalOpen(prev => !prev); // Toggle behavior
      } else if (event.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false); // Close on Escape if open
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTerminalOpen]); // Add isTerminalOpen to dependency array because the Escape key logic depends on it

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-background leading-relaxed antialiased selection:bg-slate-300/30`}>
        {children}
        {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />} {/* Ensure onClose directly sets to false */}
      </body>
    </html>
  )
}
