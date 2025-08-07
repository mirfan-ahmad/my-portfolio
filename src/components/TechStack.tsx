import React from 'react';
import { Brain, Cloud, Wrench, Monitor } from 'lucide-react';

export function TechStack() {
  const categories = [
    {
      title: 'Model Optimization',
      icon: Brain,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      technologies: [
        { name: 'PyTorch/TensorFlow', level: 95 },
        { name: 'ONNX/TensorRT', level: 88 },
        { name: 'Quantization (8-bit)', level: 85 },
        { name: 'Model Distillation', level: 90 },
        { name: 'Pruning & Sparsity', level: 82 }
      ]
    },
    {
      title: 'MLOps',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      technologies: [
        { name: 'AWS SageMaker', level: 92 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'MLflow', level: 87 },
        { name: 'Docker/Kubernetes', level: 85 },
        { name: 'Argo CD', level: 80 }
      ]
    },
    {
      title: 'Client Delivery',
      icon: Wrench,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      technologies: [
        { name: 'Gradio/Streamlit', level: 93 },
        { name: '14-Day Prototypes', level: 95 },
        { name: 'Fixed-Price Quotes', level: 90 },
        { name: 'API Development', level: 88 },
        { name: 'Client Training', level: 85 }
      ]
    },
    {
      title: 'Monitoring & Scale',
      icon: Monitor,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      technologies: [
        { name: 'Prometheus/Grafana', level: 85 },
        { name: 'Model Drift Detection', level: 88 },
        { name: 'A/B Testing', level: 82 },
        { name: 'Load Balancing', level: 80 },
        { name: 'Auto-scaling', level: 78 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">Tech Stack</span>
            <span className="text-gray-400"> // Categorized by Problem-Solving</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No fluff. Every technology listed solves specific production challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} border ${category.borderColor} rounded-lg p-8 hover:border-opacity-60 transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className={`text-sm font-bold ${category.color}`}>
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${category.color.replace('text-', 'bg-')}`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-xs text-gray-500 font-mono">
                # Production experience: {Math.floor(Math.random() * 3) + 2}+ years
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">FAANG-Ready Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-400/20 text-green-400 rounded-lg font-semibold">
                AWS ML Specialty
              </span>
              <span className="px-4 py-2 bg-blue-400/20 text-blue-400 rounded-lg font-semibold">
                TensorFlow Certified
              </span>
              <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg font-semibold">
                Kaggle Expert
              </span>
              <span className="px-4 py-2 bg-purple-400/20 text-purple-400 rounded-lg font-semibold">
                Google Cloud ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}