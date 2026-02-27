import React from "react";
// import { Link } from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";

const MainContainer = () => {
  const aboutTitle = "About me";
  const aboutDescription = `사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다. 
          React 기반의 인터랙티브한 UI 구현에 관심이 많으며, 
          깔끔한 코드 구조와 유지보수성을 고민합니다. 
          새로운 기술을 배우는 것을 즐기며, 
          팀 협업을 통해 성장하는 개발자가 되고 싶습니다.`;

  return (
    <div>
      <Home />
      <About aboutTitle={aboutTitle} aboutDescription={aboutDescription} />
      {/* <Link to={"/docs"}>documentation</Link> */}
    </div>
  );
};

export default MainContainer;
