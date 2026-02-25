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

  &::after {
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
    -webkit-mask: ${({theme}) => theme.MASK.divider["single"]};
    mask: ${({theme}) => theme.MASK.divider["single"]};
  }
`;

S.HomeAvatar = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid ${({theme}) => theme.PALETTE.accent["main"]}
`;

S.HomeTitle = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  & strong {
    color: ${({theme}) => theme.PALETTE.accent["main"]}
  }
`;

S.HomeDescription = styled.p`
  font-size: 1.3rem;
`;

S.HomeContact = styled.a`
  display: inline-block;
  background-color: ${({theme}) => theme.PALETTE.accent["main"]};
  color: ${({theme}) => theme.PALETTE.primary["main"]};
  padding: 0.5rem 1rem;
  margin: 2rem;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    background-color: transparent;
    color: #ffffff;
    outline: 2px solid ${({theme}) => theme.PALETTE.accent["main"]};
  }
`;

export default S;
