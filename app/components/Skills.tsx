// app/components/Skills.tsx
import React from 'react';
// Correct the icon import
import { FaCogs, FaCode, FaPencilRuler, FaFlask, FaComments, FaFileAlt } from 'react-icons/fa';

const skills = [
  // Use the new, valid icon
  { name: "SolidWorks (Certified)", icon: <FaPencilRuler /> },
  { name: "Basic MATLAB", icon: <FaFlask /> },
  { name: "HTML, CSS & JavaScript", icon: <FaCode /> },
  { name: "Technical Problem Solving", icon: <FaCogs /> },
  { name: "Strong Communication", icon: <FaComments /> },
  { name: "Technical Writing", icon: <FaFileAlt /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Key Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 bg-slate-800/50 py-2 px-4 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-all cursor-pointer">
            {skill.icon}
            <span className="font-mono text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
