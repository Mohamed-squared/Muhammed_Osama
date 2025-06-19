// app/components/Hero.tsx
import React from 'react';
import FadeIn from './FadeIn'; // Import FadeIn

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center max-w-4xl mx-auto px-8">
      <FadeIn delay={0.2}> {/* Wrap content with FadeIn */}
        <div>
          <h1 className="text-accent font-mono text-lg mb-4">Hi, my name is</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-primary">Muhammed Osama Muhammed.</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-secondary mt-2">I build things for the real world.</h3>
          <p className="text-secondary mt-6 max-w-xl">
            Second-year Mechanical Engineering student at Sinai University with growing expertise in CAD design, automation systems, and energy technologies. Eager to apply engineering fundamentals to real-world challenges in product development and sustainable systems.
          </p>
          <a href="mailto:muhammedoelderwy@gmail.com" className="inline-block mt-8 bg-transparent border border-accent text-accent font-mono py-3 px-6 rounded hover:bg-accent/10 transition-colors text-lg">
            Get In Touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
