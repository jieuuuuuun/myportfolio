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

S.SkillsContainer = styled(S.Section)`
  position: relative;
  /* background-color: var(--color-primary-variant); */
  /* color: var(--color-text); */

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(118% + 1.3px);
    height: 61px;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    /* background-color: var(--color-primary); */
    /* mask: var(--divider-multi-wave); */
    /* -webkit-mask: var(--divider-multi-wave); */
  }
`;

S.Skills = styled.section`
  display: grid;
  grid-template-columns: 6fr 4fr;
  margin: 2rem 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

S.SkillsTitle = styled.h3`
  color: var(--color-accent);
  margin: 1rem 0;
  font-size: 1.2rem;
`;

S.SkillsCoding = styled.section`
  grid-row: span 2;
  padding: 1rem;
  background-color: var(--color-primary);
`;

S.SkillsTools = styled.section`
  padding: 1rem;
`;

S.SkillsEtc = styled.section`
  padding: 1rem;
  /* background-color: var(--color-primary); */
  filter: brightness(150%);
`;

S.Bar = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;

S.BarMetadata = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.BarBg = styled.div`
  width: 100%;
  height: 3px;
  /* background-color: var(--color-primary-variant); */
`;
S.BarValue = styled.div`
  height: 3px;
  width: ${({width}) => width};
  background-color:blue;
  /* background-color: var(--color-accent); */
`;

export default S;
