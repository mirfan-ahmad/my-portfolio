import { Brain, Zap, Globe, Code, Database, Cloud } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      icon: Brain,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      skills: [
        { name: 'LangChain', level: 95 },
        { name: 'LangGraph', level: 90 },
        { name: 'CrewAI', level: 88 },
        { name: 'AutoGen', level: 85 },
        { name: 'RAG Systems', level: 92 },
        { name: 'OpenAI API', level: 90 },
        { name: 'Claude API', level: 88 },
        { name: 'LlamaIndex', level: 85 }
      ]
    },
    {
      title: 'Agentic AI & Automation',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      skills: [
        { name: 'n8n', level: 92 },
        { name: 'Make (Integromat)', level: 90 },
        { name: 'Zapier', level: 95 },
        { name: 'Workflow Automation', level: 88 },
        { name: 'API Integration', level: 90 },
        { name: 'Browser Use', level: 85 },
        { name: 'Multi-Agent Systems', level: 88 }
      ]
    },
    {
      title: 'Web Development & Frameworks',
      icon: Globe,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Flask', level: 92 },
        { name: 'FastAPI', level: 95 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Next.js', level: 82 },
        { name: 'Streamlit', level: 88 }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      skills: [
        { name: 'Python', level: 98 },
        { name: 'TensorFlow', level: 88 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'OpenCV', level: 90 },
        { name: 'Hugging Face', level: 88 },
        { name: 'Computer Vision', level: 85 }
      ]
    },
    {
      title: 'Vector & Traditional Databases',
      icon: Database,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30',
      skills: [
        { name: 'Pinecone', level: 92 },
        { name: 'Chroma', level: 90 },
        { name: 'FAISS', level: 88 },
        { name: 'Weaviate', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 90 },
        { name: 'Redis', level: 92 },
        { name: 'SQLite', level: 85 }
      ]
    },
    {
      title: 'DevOps & Deployment',
      icon: Cloud,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 82 },
        { name: 'AWS', level: 88 },
        { name: 'Azure', level: 85 },
        { name: 'Heroku', level: 90 },
        { name: 'Vercel', level: 92 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 85 }
      ]
    }
  ];

  const tools = [
    { name: 'CrewAI', category: 'Multi-Agent AI' },
    { name: 'LiveKit', category: 'Real-time AI' },
    { name: 'Claude Desktop', category: 'AI Assistant' },
    { name: 'Cursor', category: 'AI IDE' },
    { name: 'Postman', category: 'API Testing' },
    { name: 'Clay', category: 'Lead Generation' },
    { name: 'Apollo', category: 'Sales Intelligence' },
    { name: 'Celery', category: 'Task Queue' },
    { name: 'Jupyter', category: 'Data Science' },
    { name: 'VS Code', category: 'Development' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-green-400">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise in AI/ML, automation, and modern development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} border ${category.borderColor} rounded-lg p-6 hover:border-opacity-60 transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`w-6 h-6 ${category.color} mr-3`} />
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className={`text-xs font-bold ${category.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${
                          category.color === 'text-green-400' ? 'from-green-400 to-green-500' :
                          category.color === 'text-blue-400' ? 'from-blue-400 to-blue-500' :
                          category.color === 'text-yellow-400' ? 'from-yellow-400 to-yellow-500' :
                          category.color === 'text-purple-400' ? 'from-purple-400 to-purple-500' :
                          category.color === 'text-pink-400' ? 'from-pink-400 to-pink-500' :
                          'from-orange-400 to-orange-500'
                        } shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-white font-semibold text-sm mb-1">{tool.name}</div>
                <div className="text-gray-400 text-xs">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-4">
              I'm constantly exploring new technologies and staying updated with the latest developments in AI/ML. 
              Currently diving deeper into advanced agentic AI systems and multimodal AI applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-semibold">
                Multimodal AI
              </span>
              <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm font-semibold">
                Advanced RAG
              </span>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                AI Agents
              </span>
              <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm font-semibold">
                MLOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}