'use client';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      href: 'mailto:arpitbansal2304@gmail.com',
      label: 'arpitbansal2304@gmail.com'
    },
    {
      name: 'GitHub',
      icon: '💻',
      href: 'https://github.com/arpitbansal-exe/',
      label: 'GitHub'
    },
    {
      name: 'LinkedIn',
      icon: '🔗',
      href: 'https://www.linkedin.com/in/arpitbnsl/',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer id="contact" className="relative py-16 px-6 lg:px-8 bg-[#0a1120] border-t border-[#1a2942]">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-[#a8c5e0] max-w-2xl mx-auto">
            Open to new opportunities and collaborations in DevOps and platform engineering
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-6 py-4 rounded-xl bg-[#0a1120] border border-[#1a2942] hover:border-[#00d4ff]/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-[#a8c5e0] group-hover:text-[#00d4ff] transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1a2942] to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#6b8aa6]">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0080ff] flex items-center justify-center">
              <span className="text-white font-bold">AB</span>
            </div>
            <span className="font-mono">Arpit Bansal</span>
          </div>
          
          <div className="font-mono">
            <span className="text-[#00d4ff]">$</span> Built with Next.js • Tailwind CSS • TypeScript
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0080ff]/5 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  );
}
