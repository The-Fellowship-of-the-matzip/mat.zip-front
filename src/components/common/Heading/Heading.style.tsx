import type { HeadingProps } from "./Heading";

import styled, { css } from "styled-components";

const getSizeStyling = (size: Required<HeadingProps>["size"]) => {
  const style = {
    xxLarge: css`
      font-size: 4rem;
      line-height: 5.2rem;
    `,
    xLarge: css`
      font-size: 3.6rem;
      line-height: 4.4rem;
    `,
    large: css`
      font-size: 3.2rem;
      line-height: 4rem;
    `,
    medium: css`
      font-size: 2.8rem;
      line-height: 3.6rem;
    `,
    small: css`
      font-size: 2.4rem;
      line-height: 3.2rem;
    `,
    xSmall: css`
      font-size: 2rem;
      line-height: 2.8rem;
    `,
  };

  return style[size];
};

const Heading = styled.div<HeadingProps>`
  font-weight: bold;
  ${({ size = "medium" }) => getSizeStyling(size)}
  ${(props) => props.css}
`;

export { Heading };
