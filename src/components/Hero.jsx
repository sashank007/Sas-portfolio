import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <img
            src="/headshot_me.png"
            alt="Sashank Tungaturthi"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full mx-auto object-cover border-4 border-teal-500/30 shadow-xl shadow-teal-500/10"
          />
        </div>

        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium">
            Software Development Engineer II @ Amazon
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I'm{' '}
          <span className="gradient-text">Sashank</span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 mb-4 max-w-2xl mx-auto">
          I love building <span className="text-teal-400 font-medium">distributed systems</span> that are <span className="text-emerald-400 font-medium">scalable</span> and <span className="text-teal-400 font-medium">maintainable</span>.
        </p>

        <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
          Passionate about future-first software, fault-tolerant design, and turning complex problems into elegant solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn-secondary">
            View My Work
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/sashank-tungaturthi-206a83147/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-teal-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/sashank007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:sashank.tungaturthi@gmail.com"
            className="text-neutral-500 hover:text-teal-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-teal-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
