import { StarProps } from "./Star";

import styled, { css } from "styled-components";

const getSizeStyling = (size: Required<StarProps>["size"]) => {
  const style = {
    lg: css`
      width: 32px;
      height: 32px;
    `,
    md: css`
      width: 24px;
      height: 24px;
    `,
    sm: css`
      width: 20px;
      height: 20px;
    `,
    xs: css`
      width: 16px;
      height: 16px;
    `,
  };

  return style[size];
};

export const Star = styled.svg<StarProps>`
  ${({ size = "md" }) => getSizeStyling(size)}
`;
