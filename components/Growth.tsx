'use client';

export default function Growth() {
  const focusAreas = [
    {
      icon: '🎯',
      title: 'Scalable Systems',
      description: 'Designing infrastructure that scales efficiently with growing demands'
    },
    {
      icon: '🔄',
      title: 'Automation',
      description: 'Eliminating manual processes through intelligent automation and tooling'
    },
    {
      icon: '🧪',
      title: 'Testing & QA',
      description: 'Building robust testing frameworks for infrastructure and deployments'
    },
    {
      icon: '📊',
      title: 'Observability',
      description: 'Enhancing system visibility through monitoring and tracing solutions'
    },
    {
      icon: '🛡️',
      title: 'Security',
      description: 'Integrating security best practices into DevOps workflows'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimizing systems for efficiency and cost-effectiveness'
    }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-[#0a1120]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center mb-16">
          <span className="font-mono text-[#00d4ff] font-semibold text-lg mr-4">04.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Growth & Focus</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#1a2942] to-transparent ml-8"></div>
        </div>

        {/* Main content */}
        <div className="mb-12 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#0080ff]/5 border border-[#00d4ff]/20 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6">
            Continuous Learning in DevOps & Platform Engineering
          </h3>
          <p className="text-lg text-[#a8c5e0] leading-relaxed">
            Committed to deepening expertise in DevOps practices, cloud-native technologies, and reliability engineering. 
            Building toward mastery in scalable infrastructure design and automation.
          </p>
        </div>

        {/* Focus areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-[#0a1120]/60 backdrop-blur-sm border border-[#1a2942] hover:border-[#00d4ff]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#0080ff]/20 flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-white pt-2">{area.title}</h4>
              </div>
              <p className="text-[#a8c5e0] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-[#0a1120]/60 backdrop-blur-sm border border-[#00d4ff]/30">
            <p className="text-lg text-[#a8c5e0] mb-6">
              Interested in building reliable, scalable systems together?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
