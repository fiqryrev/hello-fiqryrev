import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Hello Fiqryrev</h3>
            <p className="text-gray-400 mb-6">Expanding the frontiers of AI and development with each line of code. <b>Discover</b>. <b>Create</b>. <b>Evolve</b>.</p>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/fiqryrev" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/fiqryrevadiansyah" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/fiqryrev" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <FaInstagram />
              </a>
              <a href="mailto:fiqryrevadiansyah@gmail.com" className="text-2xl hover:text-blue-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/data-ai-product">Data and AI Product</Link> 
              </li>
              <li>
                <Link href="/solutions/data-platform-engineering">Data Platform and Engineering</Link>
              </li>
              <li>
                <Link href="/solutions/search-retrieval">Search and Retrieval</Link>
              </li>
              <li>
                <Link href="/solutions/bi-analytics">Business Intelligence and Analytics</Link>
              </li>
              <li>
                <Link href="/solutions/data-governance-security">Data Governance and Security</Link>
              </li>
              <li>
                <Link href="/solutions/web-development">Web Development</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              < li>
                <Link href="/resources/blogs">Blogs</Link>
              </li >
              <li>
                <Link href="/resources/presentation-deck">Presentation Deck</Link>
              </li>
              <li>
                <Link href="/resources/case-studies">Case Studies</Link>
              </li>
              < li>
                <Link href="/resources/certifications">Certifications</Link>
              </li >
              <li>
                <Link href="https://calendly.com/fiqryrev/letschat">Chat with Me</Link>
              </li>
              < li>
                <Link href="/about">About</Link>
              </li >
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-500 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Fiqry Revadiansyah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;