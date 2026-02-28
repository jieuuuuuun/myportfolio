import React from "react";
import S from "./style";

const Etc = ({title, items}) => {
  const etcList = items.map(({id, name}) => (
    <li id={id}>{name}</li>
  ))
  return (
    <S.SkillsEtc>
      <S.SkillsTitle>{title}</S.SkillsTitle>
      <ul>
        {etcList}
      </ul>
    </S.SkillsEtc>
  );
};

export default Etc;
