import type { HeadingProps } from "./Heading";

import styled, { css } from "styled-components";

const getSizeStyling = (size: Required<HeadingProps>["size"]) => {
  const style = {
    xxl: css`
      font-size: 4rem;
      line-height: 5.2rem;
    `,
    xl: css`
      font-size: 3.6rem;
      line-height: 4.4rem;
    `,
    lg: css`
      font-size: 3.2rem;
      line-height: 4rem;
    `,
    md: css`
      font-size: 2.8rem;
      line-height: 3.6rem;
    `,
    sm: css`
      font-size: 2.4rem;
      line-height: 3.2rem;
    `,
    xs: css`
      font-size: 2rem;
      line-height: 2.8rem;
    `,
  };

  return style[size];
};

const Heading = styled.div<HeadingProps>`
  font-weight: bold;
  ${({ size = "md" }) => getSizeStyling(size)}
  ${(props) => props.css}
`;

export { Heading };
