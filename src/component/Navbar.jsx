import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-black';
  return (
    <header className="flex justify-between items-center py-4">
      <div className={`flex items-center gap-3 font-bold ${textColor}`}>
        <img
          src={darkMode ? '/src/asset/Group15.png' : '/src/asset/Group23.png'}
          alt="Logo"
          className="w-8 h-8"
        />
        <p>ANISH KUMAR SINHA</p>
      </div>

      <div className={`flex items-center gap-10 font-semibold ${textColor}`}>  
        
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link href="#" >Resume</Link>
        <Link href="#" >Skills</Link>
        <Link href="#" >Projects</Link>
        <Link href="#" >Contact</Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img
            src={darkMode ? '/src/asset/Group21.png' : '/src/asset/Group3.png'}
            alt={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-6 h-6"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;