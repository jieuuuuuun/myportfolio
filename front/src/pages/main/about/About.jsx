import React from "react";
import Majors from "./Majors";
import Jobs from "./Jobs";
import S from "./style";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";

const About = ({ aboutTitle, aboutDescription }) => {
  const jobs = [
    {
      name: "비오에스 개발팀",
      period: "2023 - 2025 비오에스 솔루션 홈페이지 개발",
      logo: {
        imgName: "boslogo.png",
        imgalt: "bos logo",
      },
    },
    {
      name: "스파오 AMD",
      period: "2021 - 2023 스파오 쇼핑몰 관리",
      logo: {
        imgName: "",
        imgAlt: "",
      },
    },
  ];

  const majors = [
    {
      title: "Front-end",
      content: "HTML, CSS, Javascript, TypeScript, React, Vue",
      iconName: faHtml5,
    },
    {
      title: "Mobile",
      content: "React Navtive, Java",
      iconName: faMobile,
    },
    {
      title: "Back-end",
      content: "Java, Javascript, NodeJs, SpringBoot, SQL",
      iconName: faServer,
    },
  ];

  const majorMap = (major, i) => <Majors key={i} {...major} />;
  const majorList = majors.map(majorMap);

  const jobMap = (job, i) => <Jobs key={i} {...job} />;
  const jobList = jobs.map(jobMap);

  return (
    <S.Section>
      <S.Title>{aboutTitle}</S.Title>
      <S.Description>{aboutDescription}</S.Description>
      <S.Majors>{majorList}</S.Majors>
      <S.Jobs>{jobList}</S.Jobs>
    </S.Section>
  );
};

export default About;
