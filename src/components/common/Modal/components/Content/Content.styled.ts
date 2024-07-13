import styled, { CSSProp } from "styled-components";

export const ContentContainer = styled.div<{ css?: CSSProp }>`
  display: flex;
  flex-direction: column;
  ${({ css }) => css};
`;
