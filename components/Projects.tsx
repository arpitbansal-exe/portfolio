'use client';

export default function Projects() {
  const projects = [
    {
      type: 'Monitoring & Observability',
      title: 'EventTracker C++ SDK',
      description: 'EventTracker is a lightweight, extensible C++ SDK designed to collect, queue, and dispatch telemetry and event data from client applications to a remote HTTP endpoint. It is designed with performance, ease-of-use, and flexibility in mind.',
      highlights: [
        'Asynchronous Event Queueing using a dedicated worker thread',
        'Queue Configuration: Custom batch sizes, retry logic, queue length, etc',
        'Device Info collection via flag-based configuration',
        'Test Mode for debugging event payloads without sending HTTP requests'
      ],
      tech: ['C++', 'Redis', 'TimescaleDB', 'Docker', 'Python','Grafana']
    },
    {
      type: 'Web Application',
      title: 'Spotify Clone',
      description: ' Spotify Clone website built using Next.js and Supabase. It allows users to browse music,like, add and listen to songs just like the popular music streaming platform Spotify.',
      highlights: [
        'User authentication and profile management using Supabase Auth',
        'Responsive UI with Tailwind CSS',
        'Listen to songs with audio playback features',
        'Upload and manage personal music library'
      ],
      tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript', 'Vercel']
    },
    {
      type: 'Web Application',
      title: 'WebRTC',
      description: 'Leverages the power of WebRTC (Web Real-Time Communication) to facilitate seamless real-time video communication directly within web browsers.',
      highlights: [
        'Create and join video chat rooms',
        'Peer-to-peer video streaming using WebRTC',
        'Free and open-source with no account required',
        'Fully privacy-focused, no data stored on servers'
      ],
      tech: ['React', 'Express', 'Socket.io', 'WebRTC API']
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 lg:px-8 bg-[#0a1120]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center mb-16">
          <span className="font-mono text-[#00d4ff] font-semibold text-lg mr-4">02.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Projects & Systems</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#1a2942] to-transparent ml-8"></div>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-[#0a1120]/60 backdrop-blur-sm border border-[#1a2942] hover:border-[#00d4ff]/50 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/5 to-[#0080ff]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Project header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-mono uppercase tracking-wider mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#a8c5e0] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#00d4ff] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#a8c5e0]">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1a2942]">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md bg-[#1a2942]/50 text-[#6b8aa6] text-sm font-mono border border-[#1a2942] hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
