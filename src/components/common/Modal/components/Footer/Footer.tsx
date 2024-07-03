import * as S from "./Footer.styled";

import { CSSProp, CSSProperties } from "styled-components";

export default function Footer({
  children,
  css,
  direction = "row",
}: React.PropsWithChildren<{
  css?: CSSProp;
  direction?: CSSProperties["flexDirection"];
}>) {
  return (
    <S.FooterContainer $direction={direction} css={css}>
      {children}
    </S.FooterContainer>
  );
}
