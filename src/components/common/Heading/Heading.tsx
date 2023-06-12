import * as S from "./Heading.style";
import type { HeadingSize } from "types/ui";

import type { CSSProp } from "styled-components";

export interface HeadingProps {
  children: string;
  size?: HeadingSize;
  css?: CSSProp;
}

const HEADING_TAG_BY_SIZE = {
  xxl: "h1",
  xl: "h2",
  lg: "h3",
  md: "h4",
  sm: "h5",
  xs: "h6",
} as const;

function Heading({ size = "md", children, ...attributes }: HeadingProps) {
  const tag = HEADING_TAG_BY_SIZE[size];

  return (
    <S.Heading as={tag} size={size} className="heading" {...attributes}>
      {children}
    </S.Heading>
  );
}

export default Heading;
