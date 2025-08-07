import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-green-400/20 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Code2 className="w-8 h-8 text-green-400" />
            <span className="text-xl font-bold text-white">
              Irfan Ahmad
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-green-400 font-semibold' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-green-300 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 border-b border-green-400/20">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-green-400 font-semibold' 
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="block bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-semibold text-center hover:bg-green-300 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}