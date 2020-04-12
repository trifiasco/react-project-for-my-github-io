import React from 'react';
import Sidebar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="template-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="template-main">
          <Home></Home>
          <About></About>
          <Experience></Experience>
          <Skills></Skills>
          <Education></Education>
          {/* <Projects></Projects> */}
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
