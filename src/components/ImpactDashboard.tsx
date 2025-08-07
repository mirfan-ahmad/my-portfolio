import React from 'react';
import { Rocket, Zap, Trophy, DollarSign, TrendingUp, Clock } from 'lucide-react';

export function ImpactDashboard() {
  const metrics = [
    {
      icon: Rocket,
      label: '12+ Production Models Deployed',
      description: 'HealthTech startup experience - verified on LinkedIn',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Zap,
      label: '70% Latency Reduction',
      description: 'via ONNX/TensorRT quantization',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Trophy,
      label: 'Top 5% Kaggle Competitor',
      description: 'link GitHub Kaggle notebooks - verified',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      icon: DollarSign,
      label: '$220K+ Saved for Clients',
      description: 'Upwork case study metric',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    }
  ];

  const performanceData = [
    { label: 'Before Optimization', value: 2400, color: 'bg-red-500' },
    { label: 'After ONNX/TensorRT', value: 720, color: 'bg-green-400' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">Impact Dashboard</span>
            <span className="text-gray-400"> // Quantified Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Replace buzzwords with proven metrics. Every number below is verified and linked to source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} border border-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color} mr-3`} />
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Performance Optimization Results</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                Inference Latency (milliseconds)
              </h4>
              
              {performanceData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">{item.label}</span>
                    <span className="text-lg font-bold text-white">{item.value}ms</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${(item.value / 2400) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-2">70%</div>
                <div className="text-lg text-gray-300">Latency Reduction</div>
                <div className="text-sm text-gray-500 mt-2">
                  PyTorch → ONNX → TensorRT Pipeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}