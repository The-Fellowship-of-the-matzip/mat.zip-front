import { HeartProps } from "./Heart";

import styled, { css } from "styled-components";

const getSizeStyling = (size: Required<HeartProps>["size"]) => {
  const style = {
    md: css`
      width: 24px;
      height: 24px;
    `,
    sm: css`
      width: 20px;
      height: 20px;
    `,
  };

  return style[size];
};

export const Heart = styled.svg<HeartProps>`
  ${({ size = "md" }) => getSizeStyling(size)}
`;
