import styled, { css } from "styled-components";
import { description, section, title } from "../../../styles/common";

const S = {};

S.Title = styled.h2`
  ${title}
`;

S.Description = styled.p`
  ${description}
`;

S.Work = styled.section`
  ${section};
  background-color: ${({ theme }) => theme.PALETTE.primary["main"]};
  color: ${({ theme }) => theme.PALETTE.white};
`;

S.Categories = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2.5rem;
  gap: 1rem;
`;

S.CategoryCount = styled.span`
  opacity: 0;
  position: absolute;
  top: -20px;
  right: 16px;
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.PALETTE.accent["variant"]};
  color: ${({ theme }) => theme.PALETTE.white};
  transition: all 250ms ease-in;
`;

S.Category = styled.button`
  position: relative;
  color: ${({ theme }) => theme.PALETTE.white};
  font-size: 1.1rem;
  padding: 0.5rem 3rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALETTE.accent["main"]};
  cursor: pointer;
  white-space: nowrap;

  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      background-color: ${theme.PALETTE.accent["main"]};
      color: ${theme.PALETTE.primary["main"]};

      ${S.CategoryCount} {
        opacity: 1;
        top: 0;
      }
    `}

  &:hover ${S.CategoryCount} {
    opacity: 1;
    top: 0;
  }
`;


S.Projects = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  transition: all 250ms ease-out;

  &.anim-out {
    opacity: 0;
    transform: scale(0.96) translateY(20px);
  }
`;

S.Project = styled.li`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

S.ProjectImg = styled.img`
  width: 100%;
`;

S.ProjectMetadata = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.primary["main"]};
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease-in;
  transform: translateY(-10px);

  &:hover {
    opacity: 0.8;
    transform: translateY(0px);
  }
`;

S.ProjectTitle = styled.h3`
  &::after {
    position: relative;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    margin: 0.5rem 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.PALETTE.accent["main"]};
  }
`;

export default S;
