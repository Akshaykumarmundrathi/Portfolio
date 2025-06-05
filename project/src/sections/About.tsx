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
            Passionate Data Analyst with expertise in building high-performance applications
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
              <p className="text-[#FF1E1E] font-semibold">Data Analyst</p>
              <p className="mt-4 text-red-500 dark:text-red-300">
                Based in Oklahoma
              </p>
            </div>
          </div>
          
          {/* Right column - Bio */}
          <div className="w-full md:w-2/3 md:pl-12">
            <p className="text-lg mb-6 text-red-600 dark:text-red-300">
              Hello! I'm Akshay, a passionate software engineer with a knack for building high-performance applications.
              I specialize in creating seamless user experiences and optimizing code for maximum efficiency.
              With a strong foundation in computer science and a love for problem-solving, I thrive on tackling complex challenges
              and turning ideas into reality. Whether it's developing web applications, mobile apps, or backend systems,
              I approach each project with a focus on quality, scalability, and maintainability.
            </p>
            <p className="text-lg mb-6 text-red-600 dark:text-red-300">
              I believe in the power of collaboration and enjoy working with cross-functional teams to deliver exceptional results.
              My goal is to continuously learn and grow as a developer, staying up-to-date with the latest technologies and trends
              in the ever-evolving tech landscape. Let's connect and explore how we can create amazing things together!
            </p>
            
            {/* Key qualities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-red-700' : 'bg-red-100'} transform hover:-translate-y-1 transition-transform duration-300`}>
                <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mb-4">
                  <Code size={24} className="text-[#FF1E1E]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Clean Code</h4>
                <p className="text-gray-500 dark:text-gray-300">
                  Writing maintainable, well-documented code that follows best practices.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} transform hover:-translate-y-1 transition-transform duration-300`}>
                <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-[#FF1E1E]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Performance</h4>
                <p className="text-gray-500 dark:text-gray-300">
                  Optimizing applications for speed, efficiency, and exceptional user experience.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} transform hover:-translate-y-1 transition-transform duration-300`}>
                <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mb-4">
                  <RefreshCw size={24} className="text-[#FF1E1E]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Adaptability</h4>
                <p className="text-gray-500 dark:text-gray-300">
                  Quickly learning new technologies and adapting to changing requirements.
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
