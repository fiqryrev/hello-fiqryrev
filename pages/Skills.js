// src/pages/Skills.js
import React from 'react';
import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Chatbot from '../src/components/Chatbot';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <li key={index} className="bg-gray-100 p-2 rounded">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++"],
    "Web Technologies": ["React", "Node.js", "Express", "HTML5", "CSS3"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
    "DevOps": ["Docker", "Kubernetes", "Jenkins", "AWS"],
    "Tools": ["Git", "JIRA", "Postman", "VS Code"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Technical Skills</h1>
        
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-lg">
            <li>AWS Certified Developer - Associate</li>
            <li>Microsoft Certified: Azure Developer Associate</li>
            <li>Certified Kubernetes Administrator (CKA)</li>
          </ul>
        </section>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Skills;