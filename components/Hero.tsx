'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 overflow-hidden">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #1a2942 1px, transparent 1px),
            linear-gradient(to bottom, #1a2942 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#00d4ff]/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#0080ff]/10 blur-3xl animate-pulse delay-1000" />
      
      <div className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Status badge */}
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-[#0a1120]/60 border border-[#00d4ff]/30 backdrop-blur-sm">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d4ff]"></span>
          </div>
          <span className="font-mono text-sm text-[#a8c5e0]">Open to Engineering challenges</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#e8f0fe] via-[#00d4ff] to-[#0080ff] bg-clip-text text-transparent">
            DevOps Engineer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#a8c5e0] mb-8 max-w-3xl mx-auto leading-relaxed">
          Automating build and delivery workflows to improve reliability and feedback cycles.
        </p>

        <p className="text-lg text-[#6b8aa6] mb-12 max-w-2xl mx-auto">
          DevOps engineer specializing in CI/CD pipelines, Jenkins, GitLab CI, and Python scripting.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold rounded-lg hover:bg-[#00d4ff] hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
