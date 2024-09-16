// File: src/components/Navigation.js

import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }, // Add contact link
  ];

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50">
      <ul className="flex justify-center space-x-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>
              <a className="text-white hover:text-blue-400">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
