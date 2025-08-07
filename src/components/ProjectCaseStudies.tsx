import React, { useState } from 'react';
import { ExternalLink, Github, Play, Eye, Code, Users } from 'lucide-react';

export function ProjectCaseStudies() {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState<'technical' | 'client'>('technical');

  const projects = [
    {
      title: 'Healthcare Demand Forecasting System',
      problem: 'Healthcare demand forecasting errors cost $180K/month in overstock and understaffing',
      techStack: ['PyTorch', 'ONNX', 'AWS SageMaker', 'TensorRT', 'MLflow'],
      myRole: 'Led model distillation + MLOps pipeline implementation',
      metrics: {
        latency: '70% latency drop',
        accuracy: '99.2% accuracy',
        savings: '$220K saved'
      },
      clientBenefit: 'Automated inventory management reducing manual errors by 85%',
      demoUrl: '#',
      githubUrl: '#',
      technologies: {
        'Model Optimization': ['PyTorch', 'ONNX', 'TensorRT'],
        'MLOps': ['AWS SageMaker', 'GitHub Actions', 'MLflow'],
        'Deployment': ['Docker', 'Kubernetes', 'Argo CD']
      }
    },
    {
      title: 'Real-time Fraud Detection Pipeline',
      problem: 'Credit card fraud detection system had 12-second latency causing $2M annual losses',
      techStack: ['TensorFlow', 'Apache Kafka', 'Redis', 'FastAPI', 'Prometheus'],
      myRole: 'Architected streaming ML pipeline with sub-100ms inference',
      metrics: {
        latency: '95% latency reduction',
        accuracy: '98.7% precision',
        savings: '$1.8M prevented fraud'
      },
      clientBenefit: 'Real-time fraud blocking with 99.9% uptime',
      demoUrl: '#',
      githubUrl: '#',
      technologies: {
        'Real-time ML': ['TensorFlow Serving', 'Apache Kafka', 'Redis'],
        'API': ['FastAPI', 'async/await', 'WebSockets'],
        'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack']
      }
    },
    {
      title: 'Computer Vision Quality Control',
      problem: 'Manufacturing defect detection required 24/7 human inspection costing $300K/year',
      techStack: ['YOLOv8', 'OpenCV', 'PyTorch', 'Gradio', 'Azure ML'],
      myRole: 'Built custom object detection model with 99.5% defect detection rate',
      metrics: {
        latency: '85% faster inspection',
        accuracy: '99.5% defect detection',
        savings: '$280K labor savings'
      },
      clientBenefit: '24/7 automated quality control with instant alerts',
      demoUrl: '#',
      githubUrl: '#',
      technologies: {
        'Computer Vision': ['YOLOv8', 'OpenCV', 'PIL'],
        'Web Interface': ['Gradio', 'Streamlit', 'FastAPI'],
        'Cloud': ['Azure ML', 'Blob Storage', 'Container Instances']
      }
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">Project Case Studies</span>
            <span className="text-gray-400"> // 3 Flagship Deployments</span>
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setViewMode('technical')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                viewMode === 'technical'
                  ? 'bg-green-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Technical View</span>
            </button>
            <button
              onClick={() => setViewMode('client')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                viewMode === 'client'
                  ? 'bg-blue-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Client View</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeProject === index
                      ? 'bg-green-400/10 border-green-400 text-green-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-green-400/50'
                  }`}
                >
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.problem}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{currentProject.title}</h3>
              
              {viewMode === 'technical' ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Problem Statement</h4>
                    <p className="text-gray-300">{currentProject.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700 text-green-400 rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">My Role</h4>
                    <p className="text-gray-300">{currentProject.myRole}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">What This Solves For You</h4>
                    <p className="text-gray-300">{currentProject.clientBenefit}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Business Impact</h4>
                    <p className="text-gray-300">{currentProject.problem}</p>
                  </div>
                </div>
              )}
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-400/10 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{currentProject.metrics.latency}</div>
                  <div className="text-sm text-gray-400">Performance</div>
                </div>
                <div className="text-center p-4 bg-blue-400/10 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{currentProject.metrics.accuracy}</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-yellow-400/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">{currentProject.metrics.savings}</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={currentProject.demoUrl}
                  className="bg-green-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={currentProject.githubUrl}
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
                <a
                  href="#upwork"
                  className="border border-blue-400 text-blue-400 px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Get Similar Solution</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}