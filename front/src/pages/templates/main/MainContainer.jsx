import React from 'react';
// import { Link } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';


const MainContainer = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      {/* <Link to={"/docs"}>documentation</Link> */}
    </div>
  );
};

export default MainContainer;