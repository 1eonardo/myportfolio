import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Quality from './components/skills/Qualification';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>   
      <Header />
      <main className="main">
        <section id="home">
        
          <Home />

        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="quality">
          <Quality />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>

      <section id="footer">
        <Footer />
      </section>
      
      <Scrollup />
    </>
  );
};

export default App;
