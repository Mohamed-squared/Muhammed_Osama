// app/components/Terminal.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [history, setHistory] = useState<string[]>(['Welcome to the M.O.M Terminal. Type "help" for a list of commands.']);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: { [key: string]: () => string[] } = {
    help: () => [
      'Available commands:',
      '  whois      - About Muhammed',
      '  skills     - List key skills',
      '  projects   - Navigate to projects section',
      '  contact    - Show contact information',
      '  clear      - Clear the terminal',
      '  exit       - Close the terminal',
    ],
    whois: () => [
      'Muhammed Osama Muhammed',
      'Second-year Mechanical Engineering student at Sinai University.',
      'Specializing in CAD design, automation, and energy tech.',
    ],
    skills: () => [
      'Key Skills:',
      '- SolidWorks (Certified)',
      '- Basic MATLAB',
      '- HTML, CSS & JavaScript',
      '- Technical Problem Solving',
      '- Strong Communication',
    ],
    projects: () => {
      window.location.hash = 'projects';
      return ['Navigating to projects...'];
    },
    contact: () => [
      'Email: muhammedoelderwy@gmail.com',
      'LinkedIn: Visit my profile via the link on the page.',
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    exit: () => {
      onClose();
      return ['Closing terminal...'];
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      const newHistory = [...history, `> ${input}`];

      if (command in commands) {
        const output = commands[command]();
        setHistory([...newHistory, ...output]);
      } else if (command) {
        setHistory([...newHistory, `Command not found: ${command}. Type "help".`]);
      } else {
        setHistory(newHistory);
      }

      setInput('');
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl h-2/3 bg-background/95 rounded-lg border border-slate-700 shadow-2xl flex flex-col font-mono"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-slate-800 p-2 flex items-center rounded-t-lg">
          <div className="flex space-x-2">
            <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full"></button>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-center flex-grow text-sm text-secondary">M.O.M Terminal</p>
        </div>
        <div className="flex-grow p-4 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
          {history.map((line, index) => (
            <p key={index} className="text-sm" dangerouslySetInnerHTML={{ __html: line.replace(/ /g, ' ') }} />
          ))}
          <div className="flex">
            <span className="text-accent mr-2">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="bg-transparent border-none outline-none w-full text-primary"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
