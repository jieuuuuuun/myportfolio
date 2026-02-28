import React from "react";
import Etc from "./Etc";
import Tools from "./Tools";
import Coding from "./Coding";
import S from "./style";

const Skills = ({ title, contents, description }) => {
  const codingSkills = {
    title: "Coding Skills",
    skills: [
      { name: "HTML", percent: 90 },
      { name: "CSS", percent: 90 },
      { name: "Javascript", percent: 60 },
      { name: "TypeScript", percent: 60 },
      { name: "React", percent: 60 },
      { name: "NodeJs", percent: 60 },
    ],
  };

  const tools = {
    title: "Tools",
    items: [
      { id: "vscode", name: "Visual Studio Code" },
      { id: "oracle", name: "Oracle" },
      { id: "eclipse", name: "Eclipse" },
      { id: "photoshop", name: "포토샵" },
    ],
  };

  const etc = {
    title: "Etc",
    items: [
      { id: "Git", name: "Git" },
      { id: "pigma", name: "pigma" },
    ],
  };

  return (
    <S.SkillsContainer id="skills">
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <p>{contents}</p>
        <S.Skills>
          <Coding {...codingSkills} />
          <Tools {...tools} />
          <Etc {...etc}/>
        </S.Skills>
      </div>
    </S.SkillsContainer>
  );
};

export default Skills;
