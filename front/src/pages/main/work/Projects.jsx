import React from "react";
import S from "./style";

const Projects = () => {
  return (
    <S.Projects>
      <S.Project data-type="front-end">
        <a href="#" target="_blank">
          <S.ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/project/project1.webp`}
            alt="project1"
          />
          <S.ProjectMetadata>
            <S.ProjectTitle>Project #1</S.ProjectTitle>
            <p>Clone Coding with HTML, CSS</p>
          </S.ProjectMetadata>
        </a>
      </S.Project>
      <S.Project data-type="front-end">
        <a href="#" target="_blank">
          <S.ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/project/project2.webp`}
            alt="project2"
          />
          <S.ProjectMetadata>
            <S.ProjectTitle>Project #2</S.ProjectTitle>
            <p>Clone Coding with HTML, CSS</p>
          </S.ProjectMetadata>
        </a>
      </S.Project>
      <S.Project data-type="front-end">
        <a href="#" target="_blank">
          <S.ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/project/project3.webp`}
            alt="project3"
          />
          <S.ProjectMetadata>
            <S.ProjectTitle>Project #3</S.ProjectTitle>
            <p>Clone Coding with HTML, CSS</p>
          </S.ProjectMetadata>
        </a>
      </S.Project>
      <S.Project data-type="back-end">
        <a href="#" target="_blank">
          <S.ProjectImg
            src={`${process.env.PUBLIC_URL}/assets/images/project/project4.webp`}
            alt="project4"
          />
          <S.ProjectMetadata>
            <S.ProjectTitle>Project #4</S.ProjectTitle>
            <p>Clone Coding with HTML, CSS</p>
          </S.ProjectMetadata>
        </a>
      </S.Project>
    </S.Projects>
  );
};

export default Projects;
