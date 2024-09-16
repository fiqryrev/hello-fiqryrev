// File: src/components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-center mb-8">
          <img
            src="../public/images/fiqry_photo.jpg"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full shadow-lg ring-8 ring-blue-500"
          />
        </div>
        <h1 className="text-5xl sm:text-4xl font-bold mb-4">
        Hello, It's Me <span className="text-blue-500">Fiqry Revadiansyah</span>
        </h1>
        <h2 className="text-2xl sm:text-xl text-blue-500 mb-4">
        And I'm a <span className="text-white">Data Leader | Mentor | Speaker</span>
        </h2>

        <p className="mb-8 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nulla sed sapiente rerum animi expedita.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
            <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                Download CV
            </a>
        </div>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
