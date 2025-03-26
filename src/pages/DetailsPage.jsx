// src/pages/DetailsPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import DataTable from '../components/table/DataTable';
import { FaBars } from 'react-icons/fa';

const DetailsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar for mobile and desktop */}
        <Sidebar isOpen={sidebarOpen} />
        
        {/* Main content */}
        <div className="flex-1 w-full p-4 md:p-6">
          <div className="flex items-center mb-6">
            {/* Mobile sidebar toggle */}
            <button 
              className="md:hidden mr-4 p-2 rounded-md bg-gray-800 text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <FaBars />
            </button>
            
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Details</h1>
              <p className="text-gray-600">View and manage user data</p>
            </div>
          </div>
          
          <DataTable />
        </div>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DetailsPage;
