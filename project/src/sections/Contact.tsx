import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formState);
    alert('Thank you for your message! This is a demo, so no actual message was sent.');
    setFormState({ name: '', email: '', message: '' });
  };
  
  return (
    <section 
      id="contact" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`border-b-4 border-[#FF1E1E] pb-2`}>Get In Touch</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-500 dark:text-gray-300">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Contact info */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
            <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} h-full`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-[#FF1E1E]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:your.email@example.com" className="font-medium hover:text-[#FF1E1E] transition-colors">
                      akshay06sep@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                    <Linkedin size={20} className="text-[#FF1E1E]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/akshaykumarmundrathi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-[#FF1E1E] transition-colors"
                    >
                      linkedin.com/in/akshaykumarmundrathi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                    <Github size={20} className="text-[#FF1E1E]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/Akshaykumarmundrathi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-[#FF1E1E] transition-colors"
                    >
                      github.com/Akshaykumarmundrathi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                    <FileText size={20} className="text-[#FF1E1E]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Resume</p>
                    <a 
                      href="https://drive.google.com/drive/u/0/folders/1TZ1Gzn-fzTS7H9ThyVg3Whjba3EVK6Wa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-[#FF1E1E] transition-colors"
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Racing decoration */}
              <div className="mt-10 h-4 w-full overflow-hidden">
                <div className="h-full w-full bg-[#FF1E1E] relative">
                  <div className="absolute inset-0 grid grid-cols-8 gap-[1px]">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-[#FF1E1E] focus:border-[#FF1E1E]' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-[#FF1E1E] focus:border-[#FF1E1E]'
                    } focus:outline-none focus:ring-2`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-[#FF1E1E] focus:border-[#FF1E1E]' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-[#FF1E1E] focus:border-[#FF1E1E]'
                    } focus:outline-none focus:ring-2`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-[#FF1E1E] focus:border-[#FF1E1E]' 
                      : 'bg-white border-gray-300 text-gray-900 focus:ring-[#FF1E1E] focus:border-[#FF1E1E]'
                  } focus:outline-none focus:ring-2`}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-[#FF1E1E] text-white font-medium rounded-lg flex items-center hover:bg-[#d81919] transition-colors duration-300"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
            
            {/* Racing tracks decoration */}
            <div className="mt-12 relative h-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full">
                <svg viewBox="0 0 1200 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <path d="M0 3L1200 3" stroke={theme === 'dark' ? "#555" : "#DDD"} strokeWidth="2" strokeDasharray="10 10"/>
                </svg>
              </div>
              <div className="absolute top-3 left-0 w-full">
                <svg viewBox="0 0 1200 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <path d="M0 3L1200 3" stroke={theme === 'dark' ? "#555" : "#DDD"} strokeWidth="2" strokeDasharray="10 10"/>
                </svg>
              </div>
              
              {/* Racing car indicator */}
              <div className="absolute top-0 transform -translate-y-1/2 animate-[car-move_15s_linear_infinite]">
                <div className="relative w-8 h-4">
                  <div className="absolute inset-0 bg-[#FF1E1E] rounded-sm"></div>
                  <div className="absolute -top-1 right-1 w-2 h-2 bg-[#0C1E35] rounded-full"></div>
                  <div className="absolute -top-1 left-1 w-2 h-2 bg-[#0C1E35] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;