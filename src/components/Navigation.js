import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      subItems: []
    },
    {
      name: 'About',
      path: '/about',
      subItems: [
        { name: 'Mission', path: '/about#mission' },
        { name: 'Values', path: '/about#values' }
      ]
    },
    {
      name: 'Skills',
      path: '/skills',
      subItems: [
        { name: 'Technical Skills', path: '/skills#technical' },
        { name: 'Soft Skills', path: '/skills#soft' }
      ]
    },
    {
      name: 'Projects',
      path: '/projects',
      subItems: []
    },
    {
      name: 'Blog',
      path: '/blog',
      subItems: []
    }
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {menuItems.map((item) => (
          <li key={item.name} 
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}>
            <Link href={item.path} className="text-white hover:text-gray-300">
              {item.name}
            </Link>
            {item.subItems.length > 0 && hoveredMenu === item.name && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link href={subItem.path} className="block px-4 py-2 text-sm text-white hover:bg-gray-600">
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;