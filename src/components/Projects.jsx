import { ExternalLink, Users, Sparkles, Trophy, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Vaastu AI',
      role: 'Founder & Developer',
      year: '2025',
      description: 'An LLM and image-recognition application that assesses and guides Vaastu compliance of homes, delivering personalized visual recommendations and step-by-step remedies.',
      highlights: [
        'LLM-powered analysis engine',
        'Image recognition for room analysis',
        'Personalized Vaastu recommendations',
        'Visual guidance system',
      ],
      tags: ['LLM', 'Image Recognition', 'AI', 'React'],
      icon: <Sparkles className="w-6 h-6" />,
      link: 'https://www.vaastu-ai.com/',
    },
    {
      title: 'QuantumRabbitHole.ai',
      role: 'Founder & Developer',
      year: '2024',
      description: 'An AI-driven knowledge exploration platform that aggregates and links information across domains, helping users dive deep into complex topics.',
      highlights: [
        '1,000+ beta users',
        'Reduced research time by 30%',
        'Cross-domain knowledge linking',
        'AI-powered content aggregation',
      ],
      tags: ['AI', 'NLP', 'React', 'Node.js'],
      icon: <Users className="w-6 h-6" />,
      stats: { users: '1,000+', impact: '-30% research time' },
      link: 'https://www.quantumrabbithole.ai/',
    },
    {
      title: 'Global Recall',
      role: 'Owner & Developer',
      year: '2024',
      description: 'An engaging geography trivia game that tests players\' knowledge of world capitals through an interactive and educational gaming experience.',
      highlights: [
        'Interactive quiz gameplay',
        'Score tracking system',
        'Educational content',
        'Responsive design',
      ],
      tags: ['React', 'JavaScript', 'Game Dev', 'Education'],
      icon: <Gamepad2 className="w-6 h-6" />,
      logo: '/global_recall_logo.png',
    },
    {
      title: 'WEave',
      role: 'Developer',
      year: '2019',
      badge: 'MLH Sunhacks 2019 Winner',
      description: 'A hackathon-winning project built with ArcGIS, React, and React Native that combines mapping technologies with collaborative features.',
      highlights: [
        'MLH Sunhacks 2019 Winner',
        'ArcGIS integration',
        'Cross-platform (Web & Mobile)',
        'Real-time collaboration',
      ],
      tags: ['ArcGIS', 'React', 'React Native', 'Hackathon'],
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.logo ? (
                    <img src={project.logo} alt={project.title} className="w-10 h-10 rounded-lg object-contain" />
                  ) : (
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {project.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{project.role} - {project.year}</p>
                  </div>
                </div>
                {project.badge && (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-neutral-300 mb-4">{project.description}</p>

              {/* Stats */}
              {project.stats && (
                <div className="flex gap-4 mb-4">
                  <div className="px-3 py-2 bg-neutral-800/50 rounded-lg">
                    <p className="text-xs text-neutral-500">Users</p>
                    <p className="text-lg font-bold text-white">{project.stats.users}</p>
                  </div>
                  <div className="px-3 py-2 bg-neutral-800/50 rounded-lg">
                    <p className="text-xs text-neutral-500">Impact</p>
                    <p className="text-lg font-bold text-emerald-400">{project.stats.impact}</p>
                  </div>
                </div>
              )}

              {/* Highlights */}
              <ul className="mb-4 space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
                >
                  Visit Site <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
