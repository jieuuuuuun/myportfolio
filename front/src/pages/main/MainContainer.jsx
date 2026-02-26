import React from 'react';
import Home from './home/Home';
import About from './about/About';
// import { Link } from 'react-router-dom';

const MainContainer = () => {
  const name = "Jieun"
  const homeTitle = "Dream Coder"

  return (
    <div>
      <Home name={name} homeTitle={homeTitle}/>
      <About />
      
      {/* <Link to={"/docs"}>documentation</Link> */}
    </div>
  );
};

export default MainContainer;