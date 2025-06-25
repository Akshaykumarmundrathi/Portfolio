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
    title: "Spiking Neural Network-Based Classification of Financial Time Series Patterns",
    description: "Developed a Python-based pipeline leveraging Spiking Neural Networks (SNNs) to classify S&P 500 time series segments into five distinct trend categories. Engineered innovative data preprocessing to convert raw financial data into permutation matrices and spike trains, enabling robust and interpretable pattern recognition. Achieved high precision and recall, demonstrating the potential of neuromorphic computing for financial analytics.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Stock image of financial charts
    tags: ["Python", "Spiking Neural Networks", "S&P 500", "Data Preprocessing"],
    liveUrl: "Unavailable",
    githubUrl: "https://github.com/Akshaykumarmundrathi/SpikingNeuralNetworks"
  },
  {
    id: 2,
    title: "Modern Data Warehouse Development (SQL Server, ETL, Data Modeling)",
    description: "Architected and deployed a scalable, cloud-compatible data warehouse using Medallion Architecture (Bronze, Silver, Gold layers) to streamline data flow and optimize reporting. Automated robust ETL pipelines in SQL Server, integrating data from diverse sources to support real-time business intelligence and data-driven decision-making.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Stock image of a data center
    tags: ["SQL Server", "ETL", "Data Modeling", "Medallion Architecture", "Power BI"],
    liveUrl: "Unavailable",
    githubUrl: "https://github.com/Akshaykumarmundrathi/DataWareHouse_SQL"
  },
  {
    id: 3,
    title: "Deep Learning Diagnosis: Leveraging CNNs for COVID-19 Detection in Chest X-rays",
    description: "Led the development of a clinically viable CNN model using U-Net architecture for rapid, non-invasive COVID-19 detection from chest X-ray images. Achieved over 99% accuracy and outperformed traditional diagnostic methods, delivering a scalable, real-world solution for healthcare.",
    image: "https://images.pexels.com/photos/4056551/pexels-photo-4056551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Stock image of a chest x-ray
    tags: ["Deep Learning", "CNN", "U-Net", "COVID-19", "Medical Image Analysis"],
    liveUrl: "Unavailable",
    githubUrl: "Unavailable"
  },
  {
    id: 4,
    title: "Cricket Data Analytics Pipeline (Python, Power BI, Web Scraping)",
    description: "Engineered a comprehensive data analytics pipeline using Python, web scraping, and Power BI to extract, clean, and visualize over 10,000 cricket match data points. Delivered scalable dashboard solutions that empowered stakeholders to identify player trends and match outcomes with actionable insights.",
    image: "https://images.pexels.com/photos/13877815/pexels-photo-13877815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Stock image of a cricket match
    tags: ["Python", "Power BI", "Web Scraping", "Data Visualization", "Data Analytics"],
    liveUrl: "Unavailable",
    githubUrl: "https://github.com/Akshaykumarmundrathi/cricket-data-analytics"
  },
  {
    id: 5,
    title: "Food Delivery Web Application (MERN Stack, AWS, CI/CD)",
    description: "Built a responsive, secure food ordering platform using MERN stack and AWS services, integrating real-time order tracking and robust authentication. Optimized performance and user experience while ensuring data security and seamless integration with backend services.",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Stock image of food delivery
    tags: ["MERN Stack", "AWS", "CI/CD", "MongoDB", "Real-Time Tracking"],
    liveUrl: "Unavailable",
    githubUrl: "https://github.com/srinidhi2/TOMATO-FOOD-ORDER"
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
      {/* ... rest of your component code ... */}
    </section>
  );
};

export default Projects;
