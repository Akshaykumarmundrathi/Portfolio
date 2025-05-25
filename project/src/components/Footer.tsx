import React from 'react';
import { Linkedin, Github, FileText, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-[#FF1E1E] flex items-center justify-center rounded-full">
                <span className="text-white font-bold text-sm">SE</span>
              </div>
              <span className="ml-2 font-bold text-lg">
                <span className={theme === 'dark' ? 'text-white' : 'text-[#0C1E35]'}>Software</span>
                <span className="text-[#FF1E1E]">Engineer</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Building high-performance software solutions
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="text-[#0077B5]" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} className={theme === 'dark' ? 'text-white' : 'text-black'} />
            </a>
            <a 
              href="https://drive.google.com/your-resume-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Resume"
            >
              <FileText size={20} className="text-[#FF1E1E]" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className={theme === 'dark' ? 'text-white' : 'text-[#0C1E35]'} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm">
                <span className="text-gray-500 dark:text-gray-400 hover:text-[#FF1E1E] dark:hover:text-[#FF1E1E] transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-gray-500 dark:text-gray-400 hover:text-[#FF1E1E] dark:hover:text-[#FF1E1E] transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;