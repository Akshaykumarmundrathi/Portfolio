import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout functionality.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project"
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to log workouts, track progress, and set fitness goals.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React Native", "GraphQL", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that provides real-time weather information and forecasts for locations worldwide.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project"
  }
];

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  return (
    <section 
      id="projects" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`border-b-4 border-[#FF1E1E] pb-2`}>My Projects</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-500 dark:text-gray-300">
            Here are some of my recent projects showcasing my skills and experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                
                {/* Racing stripe */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FF1E1E]"></div>
                
                {/* Project tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-semibold bg-[#FF1E1E] text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-[#FF1E1E] hover:underline"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-[#FF1E1E] hover:underline"
                    >
                      <Github size={16} className="mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              
              {/* Active project indicator - racing checkered flag */}
              {activeProject === project.id && (
                <div className="absolute top-0 right-0 w-8 h-full bg-[#FF1E1E] grid grid-rows-8">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 border-2 border-[#FF1E1E] rounded-md ${
              theme === 'dark' 
                ? 'text-white hover:bg-[#FF1E1E]' 
                : 'text-[#0C1E35] hover:bg-[#FF1E1E] hover:text-white'
            } font-medium transition-colors duration-300`}
          >
            <Github size={20} className="mr-2" />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;