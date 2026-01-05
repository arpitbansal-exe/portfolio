'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'PTC',
      period: 'July 2025 - Present',
      current: true,
      description: 'Responsible for building and maintaining build pipelines. Automating and building dashboards for Regression Tests.',
      highlights: [
        'Build and maintain CI/CD pipelines using Jenkins and GitLab CI',
        'Automating machine configuration using Powershell',
        'Bash and Python scripting for various automation tasks',
      ]
    },
    {
      title: 'R&D Intern',
      company: 'PTC',
      period: 'July 2024 - June 2025',
      current: false,
      description: 'Worked with the Creo Elements/Direct team on 3D Modeling, contributing to improvements and bug fixes.',
      highlights: [
        'Used C, C++, and Lisp to enhance features in the CAD system.',
        'Gained hands-on experience with large-scale systems and real-world engineering workflows.',
      ]
    },
        {
      title: 'Data Analyst Intern',
      company: 'MoneyyApp',
      period: 'May 2024 - June 2024',
      current: false,
      description: 'Analyzed user interaction data using BigQuery & Power BI to uncover insights on onboarding, feature usage, and engagement, presenting weekly reports to stakeholders.',
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center mb-16">
          <span className="font-mono text-[#00d4ff] font-semibold text-lg mr-4">03.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#1a2942] to-transparent ml-8"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#0080ff] to-[#1a2942]" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-16 md:pl-24 lg:pl-32">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 -translate-x-1/2">
                  {exp.current ? (
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping">
                        <div className="w-8 h-8 rounded-full bg-[#00d4ff] opacity-75" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full bg-[#00d4ff] border-4 border-[#050911]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#0080ff] border-4 border-[#050911]" />
                  )}
                </div>

                {/* Content card */}
                <div className="group p-8 rounded-2xl bg-[#0a1120]/60 backdrop-blur-sm border border-[#1a2942] hover:border-[#00d4ff]/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-[#a8c5e0] mb-2">{exp.company}</p>
                    </div>
                    <span className={`inline-block px-4 py-2 rounded-lg font-mono text-sm ${
                      exp.current 
                        ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30' 
                        : 'bg-[#1a2942]/50 text-[#6b8aa6] border border-[#1a2942]'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#a8c5e0] mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights && exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start">
                        <span className="text-[#00d4ff] mr-3 mt-1 flex-shrink-0">▹</span>
                        <span className="text-[#a8c5e0]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
