import React from "react";
// import { Link } from 'react-router-dom';
import Work from "./work/Work";

const MainContainer = () => {
  const work = {
    title: "My work",
    description: "Projects"
  }
  
  return (
    <div>
      <Work {...work}/>
      {/* <Link to={"/docs"}>documentation</Link> */}
    </div>
  );
};

export default MainContainer;
