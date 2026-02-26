import React from 'react';
// import { Link } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';


const MainContainer = () => {
  const aboutTitle = "About me"
  return (
    <div>
      <Home />
      <About aboutTitle={aboutTitle}/>
      {/* <Link to={"/docs"}>documentation</Link> */}
    </div>
  );
};

export default MainContainer;