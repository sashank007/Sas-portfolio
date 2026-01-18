const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'C++', level: 'Advanced' },
        { name: 'PL/SQL', level: 'Intermediate' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'Angular', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'D3.js', level: 'Intermediate' },
        { name: 'GraphQL', level: 'Beginner' },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'AWS Bedrock', level: 'Advanced' },
        { name: 'Kinesis', level: 'Advanced' },
        { name: 'Fargate', level: 'Advanced' },
        { name: 'S3', level: 'Advanced' },
      ],
    },
    {
      title: 'AI/ML & Data',
      skills: [
        { name: 'RAG Pipelines', level: 'Advanced' },
        { name: 'Vector Stores', level: 'Advanced' },
        { name: 'Embeddings', level: 'Advanced' },
        { name: 'QuickSight', level: 'Intermediate' },
        { name: 'ML Inference', level: 'Intermediate' },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'Beginner':
        return 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30';
      default:
        return 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-neutral-800">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-neutral-300">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Distributed Systems', 'Future-First Design', 'AWS Bedrock', 'Kinesis Firehose', 'Domain-Driven Design', 'React', 'Spring MVC', 'Python', 'Java', 'Fargate', 'System Design', 'REST APIs'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-300 hover:border-teal-500 hover:text-teal-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
