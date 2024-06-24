import { CSSProp } from "styled-components";
import * as S from "./Header.styled";

export default function Header({
  children,
  css,
}: React.PropsWithChildren<{ css?: CSSProp }>) {
  return <S.HeaderContainer css={css}>{children}</S.HeaderContainer>;
}
