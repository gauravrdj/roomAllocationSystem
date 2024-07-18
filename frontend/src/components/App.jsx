import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className="bg-green-500 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Link to="/" className="text-xl font-semibold hover:text-purple-600 transition-colors duration-300">
          Home
        </Link>
        <div className="text-xl font-semibold text-purple-700 animate-pulse">Hall Details</div>
        <Link to="/add" className="text-xl font-semibold hover:text-purple-600 transition-colors duration-300">
          Add Details
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
