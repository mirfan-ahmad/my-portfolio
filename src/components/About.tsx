import React from 'react';
import { Brain, Zap, Globe, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: '2+ years of experience in machine learning, deep learning, and generative AI solutions',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Automation Specialist',
      description: 'Expert in web automation, lead generation, and workflow optimization using modern tools',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Full-Stack Integration',
      description: 'Seamless third-party integrations and API development for scalable solutions',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Top-rated freelancer with 100% job success score and proven track record',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm an AI/ML Engineer passionate about building intelligent systems that solve real-world problems. 
            Currently working at Techtics AI, I specialize in generative AI, agentic systems, and automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <highlight.icon className={`w-8 h-8 ${highlight.color} mb-4`} />
              <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              With a strong foundation in Computer Science from the University of Punjab, I've dedicated the past 2+ years 
              to mastering the art of AI and machine learning. My journey began with traditional ML algorithms and has 
              evolved to encompass cutting-edge generative AI and agentic systems.
            </p>
            <p className="text-gray-300 mb-4">
              At Techtics AI, I work on innovative projects involving RAG systems, conversational AI, and intelligent 
              automation. I'm passionate about leveraging tools like LangChain, LlamaIndex, and modern frameworks to 
              build solutions that truly make a difference.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source projects, 
              or helping clients automate their workflows through intelligent solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}