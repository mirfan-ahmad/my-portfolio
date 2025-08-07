import React, { useState } from 'react';
import { CheckCircle, Clock, DollarSign, Star, MessageCircle, ArrowRight } from 'lucide-react';

export function ClientConversionZone() {
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    email: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="upwork" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-blue-400">Why Upwork Clients Hire Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Skip the interview process. Get production-ready AI solutions with guaranteed delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">14-Day Prototype Guarantee</h3>
                  <p className="text-gray-300">
                    Get a working Gradio demo within 2 weeks or full refund. No exceptions.
                  </p>
                  <div className="mt-2 text-sm text-green-400 font-semibold">
                    ✓ Live demo included ✓ Source code included ✓ Documentation included
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <DollarSign className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">No Hidden Costs</h3>
                  <p className="text-gray-300">
                    Transparent pricing with detailed breakdown. What you see is what you pay.
                  </p>
                  <div className="mt-4 bg-gray-800/50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Simple ML Model:</span>
                        <span className="text-green-400 font-bold ml-2">$500-1,500</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Complex Pipeline:</span>
                        <span className="text-blue-400 font-bold ml-2">$2,000-5,000</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Computer Vision:</span>
                        <span className="text-yellow-400 font-bold ml-2">$1,000-3,000</span>
                      </div>
                      <div>
                        <span className="text-gray-400">NLP/LLM:</span>
                        <span className="text-purple-400 font-bold ml-2">$1,500-4,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Star className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Kaggle-Backed Models</h3>
                  <p className="text-gray-300">
                    All solutions use proven architectures from top-performing Kaggle competitions.
                  </p>
                  <div className="mt-2 flex items-center space-x-4 text-sm">
                    <span className="text-yellow-400">🏆 Top 5% in 12+ competitions</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-blue-400">📊 Verified notebooks available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-green-400/10 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4">Client Testimonials</h3>
              <div className="space-y-4">
                <blockquote className="text-gray-300 italic">
                  "Delivered a production-ready fraud detection system in 10 days. Saved us $180K in the first quarter."
                </blockquote>
                <div className="text-sm text-gray-400">— Sarah M., FinTech Startup</div>
                
                <blockquote className="text-gray-300 italic">
                  "Best ML engineer on Upwork. Clear communication, on-time delivery, works perfectly in production."
                </blockquote>
                <div className="text-sm text-gray-400">— David K., Healthcare SaaS</div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-400 mr-2" />
                Get Your Custom Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  >
                    <option value="">Select project type...</option>
                    <option value="classification">Classification Model</option>
                    <option value="regression">Regression/Forecasting</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="nlp">NLP/Text Analysis</option>
                    <option value="recommender">Recommender System</option>
                    <option value="other">Other (describe below)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  >
                    <option value="">Select budget...</option>
                    <option value="500-1500">$500 - $1,500</option>
                    <option value="1500-3000">$1,500 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                  >
                    <option value="">Select timeline...</option>
                    <option value="7-days">Rush (7 days) +25% fee</option>
                    <option value="14-days">Standard (14 days)</option>
                    <option value="30-days">Extended (30 days)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Describe your ML needs, data format, expected outcomes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-gray-900 py-3 rounded-lg font-bold text-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote (24h Response)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <a
                  href="https://www.upwork.com/freelancers/~01234567890abcdef"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View My Upwork Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}