// app/layout.tsx
'use client'; // Add this
import './globals.css'
import type { Metadata } from 'next' // Keep if still used, or remove if metadata is static
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Terminal from './components/Terminal'; // Import Terminal

const inter = Inter({ subsets: ['latin'] })

// Metadata might need to be handled differently if layout becomes a full client component.
// For now, we assume it's acceptable or will be adjusted.
export const metadata: Metadata = {
  title: 'Muhammed Osama Muhammed | Mechanical Engineer',
  description: 'Portfolio of Muhammed Osama Muhammed, a Mechanical Engineering student with expertise in CAD, automation, and web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen(prev => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '`') {
        toggleTerminal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-background leading-relaxed antialiased selection:bg-slate-300/30`}>
        {children}
        {isTerminalOpen && <Terminal onClose={toggleTerminal} />}
      </body>
    </html>
  )
}
