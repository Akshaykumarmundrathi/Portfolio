import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = x * 20 - 10;
      const moveY = y * 20 - 10;
      
      heroRef.current.style.backgroundPosition = `${50 + moveX * 0.5}% ${50 + moveY * 0.5}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-[#f8f9fa]'
      }`}
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-position 0.3s ease-out'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Racing stripe decoration */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[#FF1E1E]"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#FF1E1E]"></div>
      
      {/* Checkered flag pattern on sides */}
      <div className="absolute left-0 top-4 bottom-4 w-4 bg-[#FF1E1E] grid grid-rows-12 grid-cols-1">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
        ))}
      </div>
      <div className="absolute right-0 top-4 bottom-4 w-4 bg-[#FF1E1E] grid grid-rows-12 grid-cols-1">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="inline-block transform -skew-x-12 bg-[#FF1E1E] px-4 py-2">
            Akshay Kumar Mundrathi
          </span>
        </h1>
        <h2 className="text-xl md:text-3xl text-white mb-8">
          <span className="border-b-4 border-[#FF1E1E] pb-1">Data Analyst</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12">
          Passionate about transforming data into actionable insights and driving business growth.
          I specialize in data analysis, visualization, and machine learning to help organizations make informed decisions.
          With a strong foundation in statistics and programming, I thrive on solving complex problems and uncovering hidden patterns in data.
          Let's connect and explore how I can help your business leverage the power of data!
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="#about" 
            className="px-8 py-3 bg-[#FF1E1E] text-white font-bold rounded-md hover:bg-[#d81919] transition-colors duration-300 flex items-center"
          >
            Explore
            <ArrowDown size={18} className="ml-2" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-[#0C1E35] transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;