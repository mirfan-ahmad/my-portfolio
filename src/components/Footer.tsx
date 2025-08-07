import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Irfan Ahmad</h3>
            <p className="text-gray-400 mb-4">
              AI/ML Engineer passionate about building intelligent systems that solve real-world problems.
            </p>
            <div className="text-sm text-gray-500">
              <p>Currently working at Techtics AI</p>
              <p>Available for freelance projects</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/mirfan-ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mirfan-ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01234567890abcdef"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Upwork Profile</span>
              </a>
              <a
                href="mailto:irfanahmad2959@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="text-gray-500 text-sm">
              © {currentYear} Irfan Ahmad. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}