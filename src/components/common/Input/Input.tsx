import Label from "../Label/Label";
import * as S from "./Input.style";
import type { ComponentPropsWithoutRef } from "react";

import type { CSSProp } from "styled-components";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  $size?: "small" | "medium" | "large";
  label?: string;
  supportingText?: string;
  isError?: boolean;
  css?: CSSProp;
}

function Input({
  $size = "medium",
  label,
  supportingText,
  isError = false,
  id,
  required = false,
  ...attributes
}: InputProps) {
  return (
    <>
      {label && (
        <Label id={id} required={required}>
          {label}
        </Label>
      )}
      <S.Input
        id={id}
        $size={$size}
        isError={isError}
        required={required}
        {...attributes}
      />
      {supportingText && (
        <S.SupportingText isError={isError}>{supportingText}</S.SupportingText>
      )}
    </>
  );
}

export default Input;
