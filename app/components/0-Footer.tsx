import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Hello Fiqryrev</h3>
            <p className="text-sm md:text-base text-white/60 mb-6">Expanding the frontiers of AI and development with each line of code. <span className="text-purple-400 font-semibold">Discover</span>. <span className="text-purple-400 font-semibold">Create</span>. <span className="text-purple-400 font-semibold">Evolve</span>.</p>
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-white/80">Connect</h4>
            <div className="flex space-x-6 md:space-x-4">
              <a href="https://github.com/fiqryrev" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-2xl text-white/60 hover:text-purple-400 hover:scale-110 transition-all duration-200">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/fiqryrevadiansyah" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-2xl text-white/60 hover:text-purple-400 hover:scale-110 transition-all duration-200">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/fiqryrev" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-2xl text-white/60 hover:text-purple-400 hover:scale-110 transition-all duration-200">
                <FaInstagram />
              </a>
              <a href="mailto:fiqryrevadiansyah@gmail.com" className="text-3xl md:text-2xl text-white/60 hover:text-purple-400 hover:scale-110 transition-all duration-200">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-white/80">Solutions</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/solutions/data-ai-product" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Data and AI Product</Link> 
              </li>
              <li>
                <Link href="/solutions/data-platform-engineering" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Data Platform and Engineering</Link>
              </li>
              <li>
                <Link href="/solutions/search-retrieval" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Search and Retrieval</Link>
              </li>
              <li>
                <Link href="/solutions/bi-analytics" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Business Intelligence and Analytics</Link>
              </li>
              <li>
                <Link href="/solutions/data-governance-security" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Data Governance and Security</Link>
              </li>
              <li>
                <Link href="/solutions/web-development" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Web Development</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-white/80">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/resources/blogs" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Blogs</Link>
              </li>
              <li>
                <Link href="/resources/speakership" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Speakership Portfolio</Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Case Studies</Link>
              </li>
              <li>
                <Link href="/resources/academics" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Academics</Link>
              </li>
              <li>
                <Link href="https://calendly.com/fiqryrev/letschat" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">Chat with Me</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm md:text-base text-white/60 hover:text-purple-400 transition-colors duration-200">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-sm md:text-base text-white/50">&copy; {new Date().getFullYear()} Fiqry Revadiansyah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;