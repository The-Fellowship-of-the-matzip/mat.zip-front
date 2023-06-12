import Label from "../Label/Label";
import * as S from "./Textarea.style";
import type { ComponentPropsWithoutRef } from "react";

import type { CSSProp } from "styled-components";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  $size?: "small" | "medium" | "large";
  label?: string;
  supportingText?: string;
  isError?: boolean;
  css?: CSSProp;
}

function Textarea({
  $size = "medium",
  label,
  supportingText,
  isError = false,
  id,
  required = false,
  ...attributes
}: TextareaProps) {
  return (
    <>
      {label && (
        <Label id={id} required={required}>
          {label}
        </Label>
      )}
      <S.Textarea
        id={id}
        $size={$size}
        isError={isError}
        required={required}
        {...attributes}
      />
      {supportingText && <S.SupportingText>{supportingText}</S.SupportingText>}
    </>
  );
}

export default Textarea;
