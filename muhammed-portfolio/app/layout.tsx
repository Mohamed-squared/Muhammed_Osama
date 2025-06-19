// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Removed: import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammed Osama Muhammed | Mechanical Engineer',
  description: 'Portfolio of Muhammed Osama Muhammed, a Mechanical Engineering student with expertise in CAD, automation, and web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-background leading-relaxed antialiased selection:bg-slate-300/30`}>
        {/* Removed: <Header /> */}
        {children}
      </body>
    </html>
  )
}
