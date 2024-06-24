import { CSSProp } from "styled-components";
import * as S from "./Content.styled";

export default function Content({children, css} : React.PropsWithChildren<{css ?: CSSProp}>) {
  return (
    <S.ContentContainer css={css}>
      {children}
    </S.ContentContainer>
  );
}
