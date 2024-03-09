import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Darkmode from './Components/Darkmode';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? {
    color: "white",
    background: "#121212",
  } : {
    color: "black",
    background: "white",
  };

  return (
    <div className='App' style={theme}>
      <Navbar decor={theme} darkMode={darkMode}  />
      <Darkmode toggleDarkMode={toggleDarkMode}/>
      <Profile decor={theme} darkMode={darkMode}/>
      <About decor={theme}  darkMode={darkMode} />
      <Experience decor={theme} darkMode={darkMode}/>
      <Projects decor={theme}  darkMode={darkMode}/>
      <Contact decor={theme} darkMode={darkMode} />
      <Footer decor={theme} darkMode={darkMode} />
    </div>
  );
}
