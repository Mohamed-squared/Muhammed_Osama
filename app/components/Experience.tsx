// app/components/Experience.tsx
import React from 'react';
const Experience = () => (
  <section id="experience" className="py-24 max-w-4xl mx-auto px-8">
    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Work Experience</h2>
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold text-primary">Engineering Assistant Intern</h3>
      <p className="text-accent mb-2">Construction Site – Administrative Capital, Egypt</p>
      <p className="text-secondary font-mono text-sm mb-4">Summer 2024 (1 Month)</p>
      <ul className="list-disc list-inside text-secondary space-y-2">
        <li>Assisted in mechanical/electrical site operations, including wiring and component fitting.</li>
        <li>Supported material inspections and quality checks.</li>
      </ul>
    </div>
  </section>
);
export default Experience;
