import { MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'Arizona State University',
      degree: 'Master of Science, Computer Science',
      location: 'Tempe, AZ',
      period: 'August 2018 - May 2020',
    },
    {
      school: 'Vellore Institute of Technology',
      degree: 'Bachelor of Technology, Computer Science',
      location: 'Vellore, India',
      period: 'July 2012 - August 2016',
    },
  ];

  return (
    <section className="py-20 bg-neutral-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-heading">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="card group hover:scale-[1.02] transition-transform">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-teal-400 font-medium">{edu.degree}</p>
              </div>

              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-neutral-600" />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-neutral-600" />
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
