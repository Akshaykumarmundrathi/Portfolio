import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const RacingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className="relative">
      <div className="flex items-center space-x-1">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300
              ${activeSection === item.href.substring(1) 
                ? 'text-[#FF1E1E]' 
                : theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-1 border-2 
                ${activeSection === item.href.substring(1) 
                  ? 'border-[#FF1E1E] bg-[#FF1E1E]/10' 
                  : 'border-gray-300'
                }`}
              >
                {index + 1}
              </div>
              {item.name}
            </div>
            {activeSection === item.href.substring(1) && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF1E1E] to-transparent"></div>
            )}
            {/* Racing flag pattern indicator */}
            {activeSection === item.href.substring(1) && (
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-8">
                <div className="w-full h-full bg-[#FF1E1E]/80 relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 gap-[1px]">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
      {/* Racing track line */}
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#FF1E1E]/50 via-[#FF1E1E] to-[#FF1E1E]/50 rounded-full transition-all duration-300"
          style={{
            width: `${100 / navItems.length}%`,
            transform: `translateX(${navItems.findIndex(item => item.href.substring(1) === activeSection) * 100}%)`
          }}
        ></div>
      </div>
    </nav>
  );
};

export default RacingNav;