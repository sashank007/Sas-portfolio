import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Amazon.com Inc',
      role: 'Software Development Engineer II',
      location: 'Seattle, WA',
      period: 'July 2020 - Present',
      highlights: [
        'Architected an AI-powered chatbot for autonomous driver issue resolution, reducing contact time from 5 minutes to <1 minute, yielding $1.2M in quarterly savings and 50% delivery efficiency gains',
        'Designed a RAG-based Policy Assistant leveraging vector embeddings and semantic search via AWS Bedrock, cutting policy lookup time by ~90%',
        'Built a distributed analytics pipeline using Kinesis Firehose within Fargate, processing 5M events/day with S3 tiering and real-time observability via QuickSight',
        'Enhanced same-day delivery by 35% through idempotent exception handling workflows; reduced DNR incidents by 15% via automated geofence state machines',
        'Leading cross-regional traffic migration with 50/50 split to FRA and ZAZ regions—designed for horizontal scalability, fault tolerance, and graceful degradation',
      ],
    },
    {
      company: 'Fidelity Investments',
      role: 'Associate Software Engineer',
      location: 'Chennai, India',
      period: 'August 2016 - July 2018',
      highlights: [
        'Developed REST APIs with Spring MVC, enhancing system integration and data accessibility for downstream customers',
        'Increased shareholder tracking efficiency by 20x through Angular-based front-end application for monitoring monthly trading cycles',
        'Boosted risk assessment efficiency by 80% through Python machine learning application using K-Means clustering',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-heading">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 h-full w-px bg-gradient-to-b from-teal-500 via-emerald-500 to-neutral-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 ml-8 md:ml-20">
              {/* Timeline dot */}
              <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 rounded-full bg-teal-500 border-4 border-neutral-950"></div>

              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-teal-400 font-medium">{exp.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2 md:mt-0 text-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                      <span className="text-teal-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
