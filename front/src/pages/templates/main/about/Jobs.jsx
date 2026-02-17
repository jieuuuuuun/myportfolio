import React from 'react';
import S from './style';

const Jobs = () => {
  return (
    <div>
      <S.Jobs>
          <S.Job>
            <S.Img src={`${process.env.PUBLIC_URL}/assets/images/boslogo.png`} alt="bos logo" />
            <div>
              <S.JobName>개발팀</S.JobName>
              <S.JobPeriod>2023 - 2025 비오에스 솔루션 홈페이지 개발</S.JobPeriod>
            </div>
          </S.Job>
        </S.Jobs>
    </div>
  );
};

export default Jobs;