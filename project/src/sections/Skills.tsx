import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'SQL', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Jest', level: 80, category: 'tools' },
  { name: 'CI/CD', level: 85, category: 'tools' },
];

const SkillBar: React.FC<{ skill: Skill; theme: 'light' | 'dark' }> = ({ skill, theme }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {skill.level}%
        </span>
      </div>
      <div className={`w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden relative`}>
        {/* Racing-inspired progress bar */}
        <div 
          className="h-full bg-[#FF1E1E] transition-all duration-1000 ease-out rounded-full relative"
          style={{ width: `${skill.level}%` }}
        >
          {/* Checkered pattern for high skill levels */}
          {skill.level > 80 && (
            <div className="absolute inset-0 grid grid-cols-8 gap-[1px]">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`${i % 2 === 0 ? 'bg-black/30' : 'bg-transparent'}`}></div>
              ))}
            </div>
          )}
        </div>
        
        {/* Racing car indicator */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out"
          style={{ left: `${skill.level - 2}%` }}
        >
          <div className="relative w-4 h-2 bg-white rounded-sm shadow-md">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0C1E35] rounded-full"></div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#0C1E35] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { theme } = useTheme();
  
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  return (
    <section 
      id="skills" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`border-b-4 border-[#FF1E1E] pb-2`}>My Skills</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-500 dark:text-gray-300">
            Professional skills that I've acquired over the years
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                <div className="w-5 h-5 bg-[#FF1E1E] rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>
            
            <div>
              {frontendSkills.map(skill => (
                <SkillBar key={skill.name} skill={skill} theme={theme} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                <div className="w-5 h-5 bg-[#FF1E1E] rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold">Backend Development</h3>
            </div>
            
            <div>
              {backendSkills.map(skill => (
                <SkillBar key={skill.name} skill={skill} theme={theme} />
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/20 flex items-center justify-center mr-4">
                <div className="w-5 h-5 bg-[#FF1E1E] rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold">Tools & Technologies</h3>
            </div>
            
            <div>
              {toolsSkills.map(skill => (
                <SkillBar key={skill.name} skill={skill} theme={theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;