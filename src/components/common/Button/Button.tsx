import * as S from "./Button.style";
import type { ComponentPropsWithoutRef } from "react";

import type { CSSProp } from "styled-components";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  css?: CSSProp;
  variant?: "default" | "primary" | "secondary" | "danger" | "textButton";
  size?: "small" | "medium" | "large";
}

function Button({
  variant = "default",
  size = "medium",
  children,
  ...attributes
}: ButtonProps) {
  return (
    <S.Button variant={variant} size={size} {...attributes}>
      {children}
    </S.Button>
  );
}

export default Button;
