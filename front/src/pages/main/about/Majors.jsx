import React from "react";
import S from "./style";

const Majors = ({ title, content, iconName }) => {
  return (
    <S.Major>
      <S.MajorIcon icon={iconName} />
      <S.MajorTitle>{title}</S.MajorTitle>
      <p>{content}</p>
    </S.Major>
  );
};

export default Majors;
