import React from "react";
import S from "./style";

const Jobs = ({ name, period, logo: { imgName, imgAlt } }) => {
  return (
    <S.Job>
      <S.Img
        src={`${process.env.PUBLIC_URL}/assets/images/${imgName}`}
        alt={imgAlt}
      />
      <div>
        <S.JobName>{name}</S.JobName>
        <S.JobPeriod>{period}</S.JobPeriod>
      </div>
    </S.Job>
  );
};

export default Jobs;
