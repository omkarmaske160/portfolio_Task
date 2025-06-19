import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './component/Layout';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  

 useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
}, [darkMode]);

 

  return <>
  <BrowserRouter>
    <Routes>
          <Route element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route index element={<HeroSection darkMode={darkMode} />} />
          <Route path="/about" element={<AboutSection darkMode={darkMode} />} />
        </Route>
    </Routes>
  </BrowserRouter>
   
  </>
}
export default App;