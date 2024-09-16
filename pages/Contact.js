// File: src/pages/Contact.js

import React from 'react';
import Layout from '../src/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-2 border rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
