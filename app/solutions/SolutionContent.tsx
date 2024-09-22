"use client";

import React, { useState } from 'react';

const tabs = ["DEVELOP", "RUN", "SCALE", "DEPLOY"];

const SolutionContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("RUN");

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8">
      <header className="text-center mb-6 md:mb-8">
        <h3 className="text-lg sm:text-xl text-gray-400 mb-2">PLATFORM IN ACTION</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">More Building, Less Maintaining.</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          An end to end development platform that lets data scientists Develop, Run, and Deploy their data pipelines
          and applications, using an all in one integrated environment.
        </p>
      </header>

      <nav className="flex flex-wrap justify-center mb-6 md:mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 sm:px-4 md:px-6 py-2 m-1 sm:mx-2 text-sm sm:text-base transition-all duration-200 ${
              activeTab === tab
                ? 'border-b-2 border-white font-bold'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Simplify Deployment with Integrated Jobs</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6">
          Our Job system maintains consistency between development and execution by using the same
          environment configurations as Sessions. Opt for Immediate Jobs or Scheduled Jobs with Cron
          expressions, and enjoy compatibility with tools like Airflow and Prefect for enhanced control.
        </p>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">Create Immediate Job</h3>
          {/* Placeholder for job creation form */}
          <div className="bg-gray-700 p-3 sm:p-4 rounded">
            <p className="text-sm sm:text-base">Job creation form goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionContent;