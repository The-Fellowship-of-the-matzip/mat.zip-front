import * as S from "./Header.styled";

import { CSSProp } from "styled-components";

export default function Header({
  children,
  css,
}: React.PropsWithChildren<{ css?: CSSProp }>) {
  return <S.HeaderContainer css={css}>{children}</S.HeaderContainer>;
}
