import * as S from "./Text.style";
import type { PropsWithChildren } from "react";
import type { TextSize } from "types/ui";

import type { CSSProp } from "styled-components";

export interface TextProps extends PropsWithChildren<{}> {
  size?: TextSize;
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
