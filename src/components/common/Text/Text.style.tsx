import type { TextProps } from "./Text";

import styled, { css } from "styled-components";

const getSizeStyling = (size: Required<TextProps>["size"]) => {
  const style = {
    large: css`
      font-size: 1.8rem;
      line-height: 2.8rem;
    `,
    medium: css`
      font-size: 1.6rem;
      line-height: 2.4rem;
    `,
    small: css`
      font-size: 1.4rem;
      line-height: 2rem;
    `,
    xSmall: css`
      font-size: 1.2rem;
      line-height: 2rem;
    `,
  };

  return style[size];
};

const Text = styled.p<TextProps>`
  ${({ size = "medium" }) => getSizeStyling(size)}
  ${(props) => props.css}
`;

export { Text };
