'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Growth from '@/components/Growth';
import Footer from '@/components/Footer';

export default function Home() {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial value
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Scroll progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Growth />
      </main>
      
      <Footer />
    </div>
  );
}
