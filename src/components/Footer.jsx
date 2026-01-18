import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-500">
            <span>Built with</span>
            <Heart size={16} className="text-teal-500 fill-teal-500" />
            <span>by Sashank Tungaturthi</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sashank-tungaturthi-206a83147/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-teal-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/sashank007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sashank.tungaturthi@gmail.com"
              className="text-neutral-500 hover:text-teal-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-neutral-600 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
