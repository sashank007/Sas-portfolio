import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'sashank.tungaturthi@gmail.com',
      href: 'mailto:sashank.tungaturthi@gmail.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'sashank-tungaturthi',
      href: 'https://www.linkedin.com/in/sashank-tungaturthi-206a83147/',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'sashank007',
      href: 'https://github.com/sashank007',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Seattle, WA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="text-center mb-12">
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and building scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="card flex items-center gap-4 group">
                <div className="p-3 bg-neutral-800 rounded-lg text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Card */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-neutral-400 mb-6">
              Whether you have a question, a project idea, or just want to say hello,
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sashank.tungaturthi@gmail.com"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send an Email
              </a>

              <a
                href="https://www.linkedin.com/in/sashank-tungaturthi-206a83147/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
