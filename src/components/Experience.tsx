import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'AI/ML Engineer',
      company: 'Techtics AI',
      location: 'Lahore, Pakistan',
      duration: 'Present',
      type: 'On-site',
      description: [
        'Developing advanced generative AI solutions using LangChain, CrewAI, and modern LLM frameworks',
        'Building sophisticated RAG (Retrieval Augmented Generation) systems with vector databases',
        'Implementing multi-agent AI workflows using LangGraph, AutoGen, and workflow automation tools',
        'Creating intelligent conversational AI interfaces and enterprise chatbot solutions',
        'Designing and deploying AI agents for complex business process automation'
      ],
      skills: ['LangChain', 'LangGraph', 'CrewAI', 'RAG', 'Vector DBs', 'Python', 'AI Agents']
    },
    {
      title: 'Top Rated Freelance ML Engineer',
      company: 'Upwork',
      location: 'Remote',
      duration: '2+ years',
      type: 'Freelance',
      description: [
        'Delivered 50+ machine learning and automation projects with 100% job success score',
        'Specialized in advanced web automation using Playwright, Selenium, and custom browser automation',
        'Built intelligent lead generation systems using Clay, Apollo, and AI-powered prospect research',
        'Developed sophisticated web scrapers and data collection tools with anti-detection mechanisms',
        'Created end-to-end automation workflows for business process optimization and CRM integration',
        'Implemented computer vision solutions for retail, e-commerce, and industrial applications'
      ],
      skills: ['Web Automation', 'Lead Generation', 'Computer Vision', 'Data Scraping', 'ML', 'Python']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            2+ years of hands-on experience in AI/ML engineering, automation, and intelligent system development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-green-400 font-semibold text-lg">{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-blue-400">{exp.type}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm font-medium border border-green-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/mirfan-ahmad/details/experience/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-400/10 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400/20 transition-colors duration-200 border border-blue-400/30"
          >
            <span>View Full Experience on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}