import React from "react";
import S from "./style";

const Coding = ({ title, skills }) => {
  const skillsList = skills.map(({name, percent}, i) => (
    <S.Bar key={i}>
      <S.BarMetadata>
        <span>{name}</span>
        <span>{percent}%</span>
      </S.BarMetadata>
      <S.BarBg>
        <S.BarValue width={percent + "%"}></S.BarValue>
      </S.BarBg>
    </S.Bar>
  ))

  return (
    <S.SkillsCoding>
      <S.SkillsTitle>{title}</S.SkillsTitle>
      <ul>
        {skillsList}
      </ul>
    </S.SkillsCoding>
  );
};

export default Coding;
