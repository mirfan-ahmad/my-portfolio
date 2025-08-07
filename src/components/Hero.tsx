import { ArrowRight, Github, Linkedin } from 'lucide-react';

// Upwork icon component
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.142-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z"/>
  </svg>
);

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Irfan Ahmad
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-gray-300 mb-4">
            AI/ML Engineer at <span className="text-green-400 font-semibold">Techtics AI</span>
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="text-green-400">Generative AI</span>, 
            <span className="text-blue-400"> Agentic AI</span>, and 
            <span className="text-yellow-400"> Web Automation</span>. 
            Building intelligent solutions that automate workflows and enhance user experiences.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">Top Rated on Upwork</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-semibold">100% Job Success Score</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-green-400 to-blue-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mirfan-ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mirfan-ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01234567890abcdef"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors duration-200"
            title="Upwork Profile"
          >
            <UpworkIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}