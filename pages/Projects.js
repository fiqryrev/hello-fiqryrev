// src/pages/Projects.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <strong>Technologies:</strong> {technologies.join(', ')}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      Learn more
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Developed a scalable e-commerce platform with real-time inventory management and personalized recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Redis"],
      link: "#"
    },
    {
      title: "AI-powered Chatbot",
      description: "Created an intelligent chatbot using natural language processing to improve customer support efficiency.",
      technologies: ["Python", "TensorFlow", "Flask", "Docker"],
      link: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Built a cross-platform mobile app for tracking workouts and nutrition with social features.",
      technologies: ["React Native", "Firebase", "Redux", "Express"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Projects;