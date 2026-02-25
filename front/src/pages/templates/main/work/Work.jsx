import React from "react";
import Projects from "./Projects";
import Categories from "./Categories";
import S from "./style";

const Work = () => {
  return (
    <S.Work id="work">
      <div className="max-container">
        <S.Title>My work</S.Title>
        <S.Description>Projects</S.Description>
        <Categories />
        <Projects />
      </div>
    </S.Work>
  );
};

export default Work;
