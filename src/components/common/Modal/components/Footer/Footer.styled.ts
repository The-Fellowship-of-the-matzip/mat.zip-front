import { CSSProperties } from "react";
import styled, { CSSProp } from "styled-components";

export const FooterContainer = styled.div<{
  css?: CSSProp;
  $direction: CSSProperties["flexDirection"];
}>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  ${({ css }) => css};
`;
