import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ darkMode, setDarkMode })  => {
     const bgColor = darkMode ? 'bg-black text-white' : 'bg-white text-black';
  const textcolor = darkMode ? "text-white" : "text-black";
  const bgcolor = darkMode ? "bg-white" : "bg-black";
  return <>
    <div className={`h-screen transition-colors duration-300 ${bgColor}`}>
      <section className="p-7 px-19">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
         <Outlet />
    
         <div className='fixed bottom-10 left-17 '>
          <img
              src={darkMode ? '/src/asset/Group 9.png' : '/src/asset/LFacebook.png'}
              alt="Logo"
              className="w-8 h-8 mb-2"
          />
           <img
              src={darkMode ? '/src/asset/Group 7.png' : '/src/asset/LInstagram.png'}
              alt="Logo"
              className="w-8 h-8 mb-2"
          />
           <img
              src={darkMode ? '/src/asset/Group 8.png' : '/src/asset/LTwitter.png'}
              alt="Logo"
              className="w-8 h-8 mb-2"
          />
           <img
              src={darkMode ? '/src/asset/Group 10.png' : '/src/asset/LGitHub.png'}
              alt="Logo"
              className="w-8 h-8 mb-2"
          />
           <img
              src={darkMode ? '/src/asset/Group 11.png' : '/src/asset/LLinkedIn.png'}
              alt="Logo"
              className="w-8 h-8 mb-2"
          />
           <img
              src={darkMode ? '/src/asset/Group 12.png' : '/src/asset/LTelegram.png'}
              alt="Logo"
              className="w-8 h-8 mb-2"
          />
          <div className='relative w-8 h-8'>
              <img
                  src={darkMode ? '/src/asset/Ellipse 2.png' : '/src/asset/LKoo.png'}
                  alt="Logo"
                  className="w-8 h-8"
              />
              
              {darkMode && (
                  <img
                    src="/src/asset/output-onlinepngtools 1.png"
                    alt="Logo"
                    className="absolute inset-0 m-auto w-4 h-8"
                  />
              )}
          </div>
                
        </div>
      
        <div className={`flex items-center gap-4 font-medium fixed bottom-10 right-21  `}>

          <p
            className={`text-black flex items-center ${textcolor}`}
            style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)', 
            }}
          >
            <div className={`h-1 w-6  mb-2 ${bgcolor} `}></div>
            sinhaanishkumar@outlook.com
          </p>
        </div>
      </section>
    </div>
  </>
}

export default Layout