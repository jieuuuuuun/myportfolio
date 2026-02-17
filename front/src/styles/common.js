// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

export const section = css`
  padding: 4rem;
  text-align: center;
`;

export const title = css`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export const description = css`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexBeetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const flexBeetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const h1Bold = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["bold"]};
`

export const h1Medium = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["Medium"]};
`

