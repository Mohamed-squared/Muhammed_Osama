// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FadeIn from './components/FadeIn';
import Terminal from './components/Terminal';

export default function Home() {
  const [isTerminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isTerminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTerminalOpen]);

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="mx-auto px-6 sm:px-12 md:px-24">
          <FadeIn><Hero /></FadeIn>
          <FadeIn><Skills /></FadeIn>
          <FadeIn><Projects /></FadeIn>
          <FadeIn><Experience /></FadeIn>
          <FadeIn><Contact /></FadeIn>
        </div>
        <FadeIn><Footer /></FadeIn>
      </main>
      {isTerminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
    </>
  )
}
