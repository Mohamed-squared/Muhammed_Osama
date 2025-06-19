// app/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center max-w-6xl mx-auto px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-accent font-mono text-lg mb-4">Hi, my name is</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-primary">Muhammed Osama Muhammed.</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-secondary mt-2">I build things for the real world.</h3>
          <p className="text-secondary mt-6 max-w-xl mx-auto md:mx-0">
            Second-year Mechanical Engineering student at Sinai University with growing expertise in CAD design, automation systems, and energy technologies. Eager to apply engineering fundamentals to real-world challenges in product development and sustainable systems.
          </p>
          <a href="mailto:muhammedoelderwy@gmail.com" className="inline-block mt-8 bg-transparent border border-accent text-accent font-mono py-3 px-6 rounded hover:bg-accent/10 transition-colors text-lg">
            Get In Touch
          </a>
        </div>

        {/* Avatar Placeholder */}
        <div className="md:w-2/5 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary/30 border-4 border-accent/50 flex items-center justify-center">
                <span className="text-secondary font-mono">Avatar</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
