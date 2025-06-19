import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const bgColor = darkMode ? 'bg-black text-white' : 'bg-white text-black';

 useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
}, [darkMode]);

  return (
    <div className={`h-screen transition-colors duration-300 ${bgColor}`}>
      <section className="p-7 px-16">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <HeroSection darkMode={darkMode}/> */}
        <AboutSection darkMode={darkMode}/>
      </section>
    </div>
  );
}
export default App;