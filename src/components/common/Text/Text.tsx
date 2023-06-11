import * as S from "./Text.style";
import { PropsWithChildren } from "react";

import type { CSSProp } from "styled-components";

export interface TextProps extends PropsWithChildren<{}> {
  size?: "xSmall" | "small" | "medium" | "large";
  css?: CSSProp;
}

function Text({ children, size = "medium", css }: TextProps) {
  return (
    <S.Text size={size} css={css}>
      {children}
    </S.Text>
  );
}

export default Text;
