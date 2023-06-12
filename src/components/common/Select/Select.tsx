import Label from "../Label/Label";
import * as S from "./Select.style";
import type { ComponentPropsWithoutRef } from "react";

import type { CSSProp } from "styled-components";

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  $size?: "small" | "medium" | "large";
  label?: string;
  supportingText?: string;
  isError?: boolean;
  css?: CSSProp;
  children: JSX.Element[];
}

function Select({
  $size = "medium",
  label,
  supportingText,
  isError = false,
  id,
  required = false,
  children,
  ...attributes
}: SelectProps) {
  return (
    <>
      {label && (
        <Label id={id} required={required}>
          {label}
        </Label>
      )}
      <S.Select
        id={id}
        $size={$size}
        isError={isError}
        required={required}
        {...attributes}
      >
        {children}
      </S.Select>
      {supportingText && (
        <S.SupportingText isError={isError}>{supportingText}</S.SupportingText>
      )}
    </>
  );
}

export default Select;
