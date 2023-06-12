import { getSizeStyling, getVariantStyling } from "../Input/Input.style";
import { TextareaProps } from "./Textarea";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const Textarea = styled.textarea<TextareaProps>`
  min-height: 16rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  ${({ isError = false }) => getVariantStyling(isError)}
  ${({ $size = "medium" }) => getSizeStyling($size)}
  ${(props) => props.css}

  &:focus {
    outline: 0;
  }
`;

export const SupportingText = styled.p<TextareaProps>`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme, isError = false }) =>
    isError ? theme.color.redDark : theme.color.gray600};
`;
