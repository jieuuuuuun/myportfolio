import React from "react";
import S from "./style";

const Projects = ({ projects }) => {
  const projectsList = projects.map(({id, type, title, description, link, image, target}) => (
    <S.Project key={id} data-type={type}>
      <a href={link} target={target}>
        <S.ProjectImg
          src={`${process.env.PUBLIC_URL}/assets/images/project/${image}`}
          alt={title}
        />
        <S.ProjectMetadata>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          <p>{description}</p>
        </S.ProjectMetadata>
      </a>
    </S.Project>
  ));

  return (
    <S.Projects>
      {projectsList}
    </S.Projects>
  );
};

export default Projects;
