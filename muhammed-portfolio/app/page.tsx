import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Import the Projects component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Skills />
      <Projects /> {/* Add the Projects component here */}
    </main>
  );
}
