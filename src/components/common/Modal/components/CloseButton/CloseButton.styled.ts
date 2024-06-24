import styled, { CSSProp } from "styled-components";

export const CloseButton = styled.button<{ css?: CSSProp }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  ${({ css }) => css};
`;
