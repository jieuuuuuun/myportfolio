import React from 'react';
// import { Link } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';


const MainContainer = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
      {/* <Link to={"/docs"}>documentation</Link> */}
    </div>
  );
};

export default MainContainer;