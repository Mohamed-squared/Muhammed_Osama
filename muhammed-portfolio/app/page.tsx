import Hero from './components/Hero';
import Skills from './components/Skills'; // Import the Skills component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Skills /> {/* Add the Skills component here */}
    </main>
  );
}
