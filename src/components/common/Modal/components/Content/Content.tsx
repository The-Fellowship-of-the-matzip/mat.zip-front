import * as S from "./Content.styled";

import { CSSProp } from "styled-components";

export default function Content({
  children,
  css,
}: React.PropsWithChildren<{ css?: CSSProp }>) {
  return <S.ContentContainer css={css}>{children}</S.ContentContainer>;
}
