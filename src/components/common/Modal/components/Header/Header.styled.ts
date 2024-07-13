import styled, { CSSProp } from "styled-components";

export const HeaderContainer = styled.div<{ css?: CSSProp }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ css }) => css};
`;
