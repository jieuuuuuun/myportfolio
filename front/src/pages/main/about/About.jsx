import React from "react";
import Majors from "./Majors";
import Jobs from "./Jobs";
import S from "./style";

const About = () => {
  return (
    <div>
      <S.Section>
        <S.Title>About me</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure
          quibusdam laborum culpa laboriosam praesentium deserunt quam
          consectetur repellat omnis officiis aliquid soluta minus minima
          expedita, delectus maiores nisi at.
        </S.Description>
        <Majors />
        <Jobs />
      </S.Section>
    </div>
  );
};

export default About;
