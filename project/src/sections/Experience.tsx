import React, { useState } from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Graduate Research Assistant / IT Intern",
    company: "Oklahoma State University",
    location: "Stillwater, OK",
    period: "Aug 2024 – May 2025",
    description: [
      "Developed and deployed predictive models using Python (scikit-learn, TensorFlow) for research and analytics projects, supporting data-driven decision-making.",
      "Managed AWS (EC2, S3, IAM) and Azure Databricks resources, automating data workflows and CLI-based tasks for scalable analytics solutions.",
      "Collaborated with cross-functional teams to identify business needs, analyze data, and present actionable insights to stakeholders.",
      "Maintained best practices in cloud security, lifecycle management, and technical documentation."
    ],
    technologies: [
      "Python", "scikit-learn", "TensorFlow", "AWS", "Azure Databricks", "SQL", "Power BI"
    ]
  },
  {
    id: 2,
    role: "Data Engineering Project Experience",
    company: "Modern Data Warehouse & ETL Automation",
    location: "Oklahoma State University / Personal Projects",
    period: "2023 – 2025",
    description: [
      "Architected and deployed a cloud-compatible data warehouse using Medallion Architecture, streamlining data flow and optimizing reporting for real-time analytics.",
      "Automated ETL processes in SQL Server and Azure Data Factory, integrating data from multiple sources and improving pipeline efficiency.",
      "Developed dimensional data models (Star Schema) and Power BI dashboards, enabling data-driven decisions across teams.",
      "Supported cloud migration by integrating on-premise data with Azure Data Factory and cloud analytics platforms."
    ],
    technologies: [
      "SQL Server", "Azure Data Factory", "Python", "Power BI", "ETL", "Medallion Architecture"
    ]
  },
  {
    id: 3,
    role: "Data Science & Analytics Project Experience",
    company: "Healthcare Data Analytics: Deep Learning for Medical Imaging",
    location: "Personal Project / Academic Research",
    period: "2023 – 2025",
    description: [
      "Designed a scalable data pipeline for medical imaging analytics, leveraging Python and TensorFlow to develop a deep learning model for COVID-19 detection.",
      "Automated data preprocessing, normalization, and feature engineering, benchmarking model performance against traditional methods.",
      "Supported cloud-based deployment and integration with Azure services, validating real-world applicability of AI-driven healthcare analytics."
    ],
    technologies: [
      "Python", "TensorFlow", "Azure", "Data Pipeline", "Deep Learning"
    ]
  }
];

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [activeExp, setActiveExp] = useState<number>(1);

  return (
    <section
      id="experience"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`border-b-4 border-[#FF1E1E] pb-2`}>Work Experience</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-500 dark:text-gray-300">
            My professional journey and career highlights
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left sidebar - experience tabs */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeExp === exp.id
                    ? `bg-[#FF1E1E] text-white transform -translate-x-2`
                    : `${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'}`
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <ChevronRight size={20} className={`transform transition-transform duration-300 ${activeExp === exp.id ? 'rotate-90' : ''}`} />
                </div>
                <p className={`${activeExp === exp.id ? 'text-gray-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {exp.company}
                </p>

                {/* Racing flag indicator for active experience */}
                {activeExp === exp.id && (
                  <div className="h-1 w-full mt-3 bg-white grid grid-cols-6 gap-[1px]">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right content - experience details */}
          <div className="w-full lg:w-2/3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`transition-opacity duration-500 ${
                  activeExp === exp.id ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <h4 className="text-xl text-[#FF1E1E]">{exp.company}</h4>
                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                      <div className="flex items-center mb-2">
                        <CalendarIcon size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Racing-inspired divider */}
                  <div className="h-2 w-full mb-6 overflow-hidden">
                    <div className="h-full w-full bg-[#FF1E1E] relative">
                      <div className="absolute inset-0 grid grid-cols-10 gap-[1px]">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`${i % 2 === 0 ? 'bg-black' : ''}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold mb-3 flex items-center">
                      <BriefcaseIcon size={18} className="mr-2 text-[#FF1E1E]" />
                      Responsibilities
                    </h5>
                    <ul className="space-y-3">
                      {exp.description.map((item, index) => (
                        <li key={index} className="flex">
                          <span className="mr-2 text-[#FF1E1E]">→</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm font-medium 
                            ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
