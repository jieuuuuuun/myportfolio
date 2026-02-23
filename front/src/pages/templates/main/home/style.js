import styled from "styled-components";

const S = {};

S.Home = styled.div`
  background-color: ${({theme}) => theme.PALETTE.primary["main"]};
  background-image: ${({theme}) => theme.BACKGROUND.home["svg"] };
  color: #ffffff;
  padding: 5rem 1rem;
  padding-top: 7rem;
  text-align: center;
  position: relative;

  & ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% + 1.3px);
    height: 60px;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    background-color: ${({theme}) => theme.PALETTE.white};
    /* mask: var(--divider-single-wave);
    -webkit-mask: var(--divider-single-wave);
    mask: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path> </svg>');
    -webkit-mask: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path> </svg>'); */
  }
`;

S.HomeAvatar = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid #03e8f9;
`;

S.HomeTitle = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  & strong {
    color: #03e8f9;
  }
`;

S.HomeDescription = styled.p`
  font-size: 1.3rem;
`;

S.HomeContact = styled.a`
  display: inline-block;
  background-color: #03e8f9;
  color: #050a13;
  padding: 0.5rem 1rem;
  margin: 2rem;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    background-color: transparent;
    color: #ffffff;
    outline: 2px solid #03e8f9;
  }
`;

export default S;
