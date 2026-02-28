import React from "react";
import S from "./style";

const Tools = ({ title, items }) => {
  const toolsList = items.map(({id, name}) => (
    <li key={id}>{name}</li>
  ));

  return (
    <S.SkillsTools>
      <S.SkillsTitle>{title}</S.SkillsTitle>
      <ul>{toolsList}</ul>
    </S.SkillsTools>
  );
};

export default Tools;
