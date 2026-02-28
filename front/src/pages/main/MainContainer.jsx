import React from "react";
// import { Link } from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";

const MainContainer = () => {
  const skill = {
    title: "My Skills",
    description: "Skills & Attributtes",
    contents: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
        quam, praesentium maiores harum alias excepturi nam soluta similique
        atque qui fugit pariatur, eum, perferendis suscipit rerum odio
        mollitia veniam.
          `,
  };

  return (
    <>
      <Home />
      <About />
      <Skills {...skill} />
      {/* <Link to={"/docs"}>documentation</Link> */}
    </>
  );
};

export default MainContainer;
