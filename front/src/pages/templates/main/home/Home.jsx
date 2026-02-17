import React from "react";
import S from "./style";

const Home = () => {
  return (
    <div>
      <S.Home>
        <div>
          <S.HomeAvatar
            src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
            alt="Jieun's profile"
          />
          <S.HomeTitle aria-label="Hello, I'm Dream Coder jieun">
            Hello I&#39;m{" "}
            <strong>Dream Coder</strong>, Jieun
          </S.HomeTitle>
          <S.HomeDescription>
            A software engineer currently residing in 서울, Australia
          </S.HomeDescription>
          <S.HomeContact href="#contect">Contact Me</S.HomeContact>
        </div>
      </S.Home>
    </div>
  );
};

export default Home;
