// app/page.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="mx-auto px-6 sm:px-12 md:px-24">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
