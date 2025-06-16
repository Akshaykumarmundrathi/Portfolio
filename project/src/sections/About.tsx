import React from 'react';
import sidenew2 from '../sidenew2.jpg';
import { Code, Zap, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="about" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className={`border-b-4 border-[#FF1E1E] pb-2`}>About Me</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-500 dark:text-gray-300">
              Data Scientist & Engineer | Master’s in Computer Science | Cloud & AI Enthusiast
            </p>
            
    </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left column - Profile */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-[#FF1E1E]">
              {/* Placeholder image from Pexels */}
              <img 
                src={sidenew2} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              
              {/* Racing overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-[#FF1E1E] grid grid-cols-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Akshay Kumar Mundrathi</h3>
              <p className="text-[#FF1E1E] font-semibold">Data Scientist & Engineer</p>
              <p className="mt-4 text-red-500 dark:text-red-300">
                Based in Oklahoma, United States
              </p>

            </div>
          </div>
          
          {/* Right column - Bio */}
          <div className="w-full md:w-2/3 md:pl-12">
            <p className="text-lg mb-6 text-red-600 dark:text-red-300">
              Hello! I'm Akshay, a Data Scientist and Engineer with a Master’s in Computer Science and 
              hands-on experience in building scalable data pipelines, predictive modeling, and cloud-based analytics. 
              I specialize in extracting insights from complex datasets, automating ETL workflows, and deploying 
              machine learning models to drive data-driven business decisions.
            </p>
            <p className="text-lg mb-6 text-red-600 dark:text-red-300">
              My work spans predictive analytics, deep learning, and end-to-end data engineering—from raw data ingestion 
              to actionable insights. I thrive in collaborative environments, enjoy mentoring peers, and am passionate about
              leveraging the latest technologies to solve real-world problems. Let’s connect and explore how we can transform
              data into value together!
            </p>
            
                        
            {/* Key qualities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-red-700' : 'bg-red-100'} transform hover:-translate-y-1 transition-transform duration-300`}>
          <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mb-4">
            <Code size={24} className="text-[#FF1E1E]" />
          </div>
          <h4 className="text-xl font-bold mb-2">Data Engineering</h4>
          <p className="text-gray-500 dark:text-gray-300">
            Building robust data pipelines, ETL workflows, and scalable cloud data solutions.
          </p>
        </div>
        
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} transform hover:-translate-y-1 transition-transform duration-300`}>
          <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mb-4">
            <Zap size={24} className="text-[#FF1E1E]" />
          </div>
          <h4 className="text-xl font-bold mb-2">Machine Learning</h4>
          <p className="text-gray-500 dark:text-gray-300">
            Developing predictive models, deep learning systems, and AI-driven analytics.
          </p>
        </div>
        
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} transform hover:-translate-y-1 transition-transform duration-300`}>
          <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mb-4">
            <RefreshCw size={24} className="text-[#FF1E1E]" />
          </div>
          <h4 className="text-xl font-bold mb-2">Collaboration</h4>
          <p className="text-gray-500 dark:text-gray-300">
            Working with cross-functional teams to deliver impactful, data-driven solutions.
          </p>
        </div>
      </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
