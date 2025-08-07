import { useState } from 'react';
import { ExternalLink, Github, Play, Eye, Code, Zap, Brain, Globe, Database } from 'lucide-react';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: 'Virtual Try-On System',
      description: 'Advanced computer vision solution for virtual clothing try-on using deep learning and pose estimation techniques.',
      category: 'computer-vision',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'YOLO', 'Flask'],
      features: [
        'Real-time pose detection and tracking',
        'Virtual clothing overlay with realistic fitting',
        'Multi-angle view support',
        'Body measurement estimation'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/Virtual-Try-On',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      status: 'Featured'
    },
    {
      title: 'Offering Memorandum Conversational Chatbot',
      description: 'Advanced conversational AI chatbot designed to handle complex offering memorandum queries using natural language processing and machine learning.',
      category: 'ai-chatbot',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'FastAPI'],
      features: [
        'Natural language understanding for financial documents',
        'Context-aware responses with RAG',
        'Document parsing and analysis',
        'Interactive conversational interface'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/Offering-Memorendum-Conversational-Chatbot',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      status: 'Production'
    },
    {
      title: 'Cloud Image Segmentation',
      description: 'Computer vision solution for cloud detection and segmentation in satellite imagery using deep learning techniques.',
      category: 'computer-vision',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Jupyter Notebook', 'U-Net'],
      features: [
        'Automated cloud detection in satellite images',
        'Semantic segmentation using deep learning',
        'High-precision cloud boundary detection',
        'Batch processing capabilities'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/Cloud-Image-Segmentation',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80',
      status: 'Production'
    },
    {
      title: 'Dialogue Search in Video',
      description: 'Advanced video analysis tool that searches for specific dialogue within video content and provides accurate timestamps.',
      category: 'nlp-audio',
      technologies: ['Python', 'Whisper', 'NLP', 'FFmpeg', 'FastAPI', 'Redis'],
      features: [
        'Audio extraction from video files',
        'Speech-to-text conversion',
        'Dialogue search with timestamp accuracy',
        'Multiple video format support'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/Dialogue-Search-In-Video',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      status: 'Open Source'
    },
    {
      title: 'ML Models Quality Control',
      description: 'Comprehensive quality control system for machine learning models with automated testing and validation frameworks.',
      category: 'ml-ops',
      technologies: ['Python', 'MLflow', 'DVC', 'pytest', 'Docker', 'Kubernetes'],
      features: [
        'Automated model validation',
        'Performance monitoring',
        'Data drift detection',
        'Model versioning and deployment'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/ML-Models-QC',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      status: '⭐ 1 Star'
    },
    {
      title: 'Advanced Web Scraping Suite',
      description: 'Comprehensive web scraping solution with anti-detection mechanisms and data processing pipelines.',
      category: 'web-scraping',
      technologies: ['Python', 'Scrapy', 'Playwright', 'BeautifulSoup', 'Celery', 'Redis'],
      features: [
        'Multi-threaded scraping architecture',
        'Anti-bot detection bypass',
        'Data cleaning and processing',
        'Multiple output formats (CSV, JSON, Database)'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/Scraping',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      status: 'Active'
    },
    {
      title: 'Agentic AI Lead Generation System',
      description: 'Intelligent multi-agent system for automated lead generation, qualification, and outreach using modern AI agents and workflow automation.',
      category: 'automation',
      technologies: ['Python', 'LangGraph', 'AutoGen', 'CrewAI', 'n8n', 'Clay'],
      features: [
        'Multi-agent collaboration for lead research',
        'Automated prospect discovery and scoring',
        'Intelligent email sequence generation',
        'CRM integration and workflow automation'
      ],
      githubUrl: 'https://github.com/mirfan-ahmad/AI-Lead-Generation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      status: 'Featured'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'ai-chatbot', name: 'AI Chatbots', icon: Brain },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'nlp-audio', name: 'NLP & Audio', icon: Globe },
    { id: 'ml-ops', name: 'ML Ops', icon: Database },
    { id: 'web-scraping', name: 'Web Scraping', icon: Zap },
    { id: 'automation', name: 'Automation', icon: Play }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my AI/ML projects, automation tools, and innovative solutions 
            that demonstrate expertise in modern technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-green-400 text-gray-900 font-semibold'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-400/90 text-gray-900 text-xs font-semibold px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/80 p-3 rounded-full text-white hover:bg-green-400 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Button - Always at bottom */}
                <div className="mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-400 hover:bg-green-500 text-gray-900 text-sm font-medium py-2.5 px-4 rounded transition-colors flex items-center justify-center space-x-2 group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mirfan-ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-gray-600 hover:border-green-400"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
