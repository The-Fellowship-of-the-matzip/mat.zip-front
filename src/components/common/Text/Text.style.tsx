import type { TextProps } from "./Text";

import styled, { css } from "styled-components";

const getSizeStyling = (size: Required<TextProps>["size"]) => {
  const style = {
    lg: css`
      font-size: 1.8rem;
      line-height: 2.8rem;
    `,
    md: css`
      font-size: 1.6rem;
      line-height: 2.4rem;
    `,
    sm: css`
      font-size: 1.4rem;
      line-height: 2rem;
    `,
    xs: css`
      font-size: 1.2rem;
      line-height: 2rem;
    `,
  };

  return style[size];
};

const Text = styled.p<TextProps>`
  ${({ size = "md" }) => getSizeStyling(size)}
  ${(props) => props.css}
`;

export { Text };
