import { Code2, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Distributed Systems',
      description: 'Future-first architectures processing millions of events with horizontal scalability',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'System Design',
      description: 'Fault-tolerant, idempotent systems with strong observability primitives',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Infrastructure',
      description: 'RAG pipelines, vector stores, and inference optimization at scale',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Technical Leadership',
      description: 'Cross-regional migrations and architectural decisions impacting org-wide systems',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-neutral-300 mb-6">
              I'm a Software Development Engineer at <span className="text-teal-400 font-semibold">Amazon</span>,
              where I build systems that directly impact millions of deliveries and save millions
              in operational costs quarterly.
            </p>
            <p className="text-lg text-neutral-300 mb-6">
              What drives me is the craft of building systems that <span className="text-emerald-400 font-semibold">scale horizontally</span>,
              remain <span className="text-emerald-400 font-semibold">eventually consistent</span>, and are designed for <span className="text-emerald-400 font-semibold">failure resilience</span>.
              I believe in domain-driven design, thoughtful service boundaries, and architectures that teams can evolve with confidence.
            </p>
            <p className="text-lg text-neutral-300">
              With a Master's from <span className="text-teal-400 font-semibold">Arizona State University</span> and
              8+ years of experience, I've built high-throughput event pipelines, orchestrated cross-regional migrations,
              and designed systems handling millions of daily transactions.
              Beyond Amazon, I founded <span className="text-emerald-400 font-semibold">QuantumRabbitHole.ai</span> and
              <span className="text-emerald-400 font-semibold"> Vaastu AI</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="card">
                <div className="text-teal-400 mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
