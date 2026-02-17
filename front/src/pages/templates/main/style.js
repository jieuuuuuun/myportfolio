import styled from "styled-components";

const S = {};

S.Home = styled.div`
  background-color: #050a13;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='714' height='714' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%231B1E26' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2301373B'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
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
    background-color: #ffffff;
    mask: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path> </svg>');
    -webkit-mask: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path> </svg>');
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
`

export default S;
