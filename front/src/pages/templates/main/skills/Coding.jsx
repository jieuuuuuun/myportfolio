import React from "react";
import S from "./style";

const Coding = () => {
  return (
    <S.SkillsCoding>
      <S.SkillsTitle>Coding Skills</S.SkillsTitle>
      <ul>
        <S.Bar>
          <S.BarMetadata>
            <span>HTML</span>
            <span>98%</span>
          </S.BarMetadata>
          <S.BarBg>
            <S.BarValue width={"98%"}></S.BarValue>
          </S.BarBg>
        </S.Bar>
        <S.Bar>
          <S.BarMetadata>
            <span>CSS</span>
            <span>90%</span>
          </S.BarMetadata>
          <S.BarBg>
            <S.BarValue width={"90%"}></S.BarValue>
          </S.BarBg>
        </S.Bar>
        <S.Bar>
          <S.BarMetadata>
            <span>Javascript</span>
            <span>90%</span>
          </S.BarMetadata>
          <S.BarBg>
            <S.BarValue width={"90%"}></S.BarValue>
          </S.BarBg>
        </S.Bar>
        <S.Bar>
          <S.BarMetadata>
            <span>TypeScript</span>
            <span>50%</span>
          </S.BarMetadata>
          <S.BarBg>
            <S.BarValue width={"50%"}></S.BarValue>
          </S.BarBg>
        </S.Bar>
        <S.Bar>
          <S.BarMetadata>
            <span>React</span>
            <span>10%</span>
          </S.BarMetadata>
          <S.BarBg>
            <S.BarValue width={"10%"}></S.BarValue>
          </S.BarBg>
        </S.Bar>
        <S.Bar>
          <S.BarMetadata>
            <span>NodeJs</span>
            <span>50%</span>
          </S.BarMetadata>
          <S.BarBg>
            <S.BarValue width={"50%"}></S.BarValue>
          </S.BarBg>
        </S.Bar>
      </ul>
    </S.SkillsCoding>
  );
};

export default Coding;
