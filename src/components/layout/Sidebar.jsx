// src/components/layout/Sidebar.jsx
import React from 'react';
import { FaTable } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <aside 
      className={`
        bg-gray-800 text-white w-64
        fixed md:sticky top-0 left-0 pt-16 md:pt-0
        h-full md:h-screen overflow-y-auto
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        transition-transform duration-300 ease-in-out
        z-30 md:z-10
      `}
    >
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <div className="flex items-center px-4 py-2 bg-blue-600 rounded">
              <FaTable className="mr-3" />
              <span>Details</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
