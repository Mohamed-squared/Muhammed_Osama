// app/components/Projects.tsx
import React from 'react';

const projects = [
  {
    title: "Electromagnetic Induction Generator",
    type: "Team Project",
    description: "Designed a rotor with copper coils and neodymium magnets to validate Faraday's Law, achieving proportional EMF via manual rotation.",
    tech: ["Prototyping", "Physics"]
  },
  {
    title: "Bench Clamp Design",
    type: "Academic Project",
    description: "Modeled and assembled a complete mechanical bench clamp in SolidWorks.",
    tech: ["SolidWorks", "CAD", "Assembly"]
  },
  {
    title: "Water Pump Workshop Feasibility Study",
    type: "Academic Project",
    description: "Conducted full market and financial analysis for pump production in North Sinai.",
    tech: ["Market Analysis", "Finance"]
  },
  {
    title: "Pressure Measurement Devices Report",
    type: "Academic Project",
    description: "Authored a report comparing manometers, Bourdon gauges, and electrical pressure sensors, evaluating their principles and applications.",
    tech: ["Technical Writing", "Sensors"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
            <p className="text-accent font-mono text-sm mb-4">{project.type}</p>
            <p className="text-secondary text-sm mb-6 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => <span key={t} className="text-xs font-mono bg-accent/10 text-accent px-2 py-1 rounded-full">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
