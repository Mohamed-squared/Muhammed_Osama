// app/page.tsx
'use client'; // Add this line at the top

import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FadeIn from './components/FadeIn'; // Import FadeIn

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="mx-auto px-6 sm:px-12 md:px-24">
        <FadeIn><Hero /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </div>
      <FadeIn><Footer /></FadeIn>
    </main>
  )
}
