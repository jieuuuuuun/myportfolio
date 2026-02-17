import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { description, section, title } from "../../../../styles/common";

const S = {};

S.Section = styled.div`
  ${section}
`;

S.Title = styled.h2`
  ${title}
`;

S.Description = styled.p`
  ${description}
`;

S.Majors = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 2.5rem 0;
`;

S.MajorIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  margin: 1rem 0;
  /* color: var(--color-accent); */
  transition: all 300ms ease;
  font-weight: 400;
`;

S.Major = styled.div`
  width: 100%;
  background-color: blueviolet;
  padding: 2rem 1rem;
  /* color: var(--color-text); */
  border-radius: 1rem;
  cursor: default;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.38);

  &:hover ${S.MajorIcon} {
    transform: rotate(-15deg) scale(1.2);
  }
`;

S.MajorTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

S.Jobs = styled.ul`
  text-align: start;
`;

S.Job = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
`;
S.JobName = styled.p`
  /* color: var(--color-primary); */
`;

S.JobPeriod = styled.p`
  /* color: var(--color-primary); */
  font-size: 0.8rem;
`;

S.Img = styled.img`
  width:65px;
`

export default S;
