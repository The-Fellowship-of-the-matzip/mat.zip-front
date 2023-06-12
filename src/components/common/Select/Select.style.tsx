import { getSizeStyling, getVariantStyling } from "../Input/Input.style";
import type { SelectProps } from "./Select";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const Select = styled.select<Omit<SelectProps, "children">>`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  ${({ isError = false }) => getVariantStyling(isError)}
  ${({ $size = "medium" }) => getSizeStyling($size)}
  ${(props) => props.css}

  &:focus {
    outline: 0;
  }
`;

export const SupportingText = styled.p<Omit<SelectProps, "children">>`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme, isError = false }) =>
    isError ? theme.color.redDark : theme.color.gray600};
`;
