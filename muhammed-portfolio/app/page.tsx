import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience'; // Import Experience
import Contact from './components/Contact';     // Import Contact
import Footer from './components/Footer';       // Import Footer

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Skills />
      <Projects />
      <Experience /> {/* Add Experience here */}
      <Contact />    {/* Add Contact here */}
      <Footer />     {/* Add Footer here */}
    </main>
  );
}
