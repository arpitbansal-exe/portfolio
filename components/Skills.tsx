'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'DevOps & Platform',
      icon: '🚀',
      primary: true,
      skills: [
        'CI/CD Pipelines', 'Jenkins', 'GitLab CI',
        'Docker', 'Linux Systems', 'Bash Scripting'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      primary: true,
      skills: [
        'AWS', 'Prometheus', 'Grafana', 'Monitoring'
      ]
    },
    {
      title: 'Systems & Languages',
      icon: '⚙️',
      primary: false,
      skills: [
        'C++', 'Python', 'CMake',
        'Performance Optimization', 'Debugging', 'Git', 'System Design'
      ]
    },
    {
      title: 'Web Development',
      icon: '🔧',
      primary: false,
      skills: [
        'React', 'Next.js','Express' ,'Tailwind', 'REST APIs'
      ]
    },
    {
      title: 'Additional Tools',
      icon: '🔧',
      primary: false,
      skills: [
        'PostgreSQL', 'MongoDB', 'Redis',
        'ML Fundamentals', 'Data Analysis'
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center mb-16">
          <span className="font-mono text-[#00d4ff] font-semibold text-lg mr-4">01.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#1a2942] to-transparent ml-8"></div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl bg-[#0a1120]/60 backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
                category.primary 
                  ? 'border-[#00d4ff]/40 hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/20' 
                  : 'border-[#1a2942] hover:border-[#00d4ff]/40'
              }`}
            >
              {/* Corner accent */}
              {category.primary && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#00d4ff]/20 to-transparent rounded-tr-2xl" />
              )}

              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#0080ff]/20 flex items-center justify-center text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 hover:scale-105 cursor-default ${
                      category.primary
                        ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50'
                        : 'bg-[#1a2942]/50 text-[#a8c5e0] border border-[#1a2942] hover:border-[#00d4ff]/30 hover:text-[#00d4ff]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 p-6 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 backdrop-blur-sm">
          <p className="text-[#a8c5e0] text-center">
            <span className="text-[#00d4ff] font-semibold">Continuous learning:</span> Actively expanding expertise in Kubernetes orchestration, advanced CI/CD patterns, and infrastructure automation
          </p>
        </div>
      </div>
    </section>
  );
}
