import React from "react";
import S from "./style";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";

const Majors = () => {
  return (
    <div>
      <S.Majors>
        <S.Major>
          <S.MajorIcon icon={faHtml5} />
          <S.MajorTitle>Front-end</S.MajorTitle>
          <p>HTML, CSS, Javascript, TypeScript, React, Vue</p>
        </S.Major>
        <S.Major>
          <S.MajorIcon icon={faMobile} />
          <S.MajorTitle>Mobile</S.MajorTitle>
          <p>React Navtive, Java, 뭘 넣어야 할까요?</p>
        </S.Major>
        <S.Major>
          <S.MajorIcon icon={faServer} />
          <S.MajorTitle>Back-end</S.MajorTitle>
          <p>Java, Javascript, NodeJs, SpringBoot, SQL</p>
        </S.Major>
      </S.Majors>
    </div>
  );
};

export default Majors;
