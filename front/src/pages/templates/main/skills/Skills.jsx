import React from "react";
import Etc from "./Etc";
import Tools from "./Tools";
import Coding from "./Coding";
import S from "./style";

const Skills = () => {
  return (
    <S.SkillsContainer id="skills">
      <div>
        <S.Title>My Skills</S.Title>
        <S.Description>Skills & Attributtes</S.Description>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
          quam, praesentium maiores harum alias excepturi nam soluta similique
          atque qui fugit pariatur, eum, perferendis suscipit rerum odio
          mollitia veniam.
        </p>
        <S.Skills>
          <Coding />
          <Tools />
          <Etc />
        </S.Skills>
      </div>
    </S.SkillsContainer>
  );
};

export default Skills;
